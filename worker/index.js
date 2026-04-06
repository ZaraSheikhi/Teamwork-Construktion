const EMAIL_ENDPOINT = "https://api.resend.com/emails";

function getAllowedOrigins(env) {
  return (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function getCorsHeaders(origin, env) {
  const allowedOrigins = getAllowedOrigins(env);
  const allowOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0] || "*";

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };
}

function json(body, { status = 200, origin, env } = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...getCorsHeaders(origin, env),
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function validatePayload(payload) {
  const errors = [];
  const requiredFields = [
    ["name", 120],
    ["phone", 80],
    ["email", 160],
    ["service", 160],
    ["location", 160],
    ["message", 4000],
  ];

  for (const [field, maxLength] of requiredFields) {
    const value = typeof payload[field] === "string" ? payload[field].trim() : "";
    if (!value) {
      errors.push(field);
      continue;
    }

    if (value.length > maxLength) {
      errors.push(field);
    }
  }

  if (payload.email && !/^\S+@\S+\.\S+$/.test(payload.email)) {
    errors.push("email");
  }

  return errors;
}

function formatEmailBody(payload) {
  const wantsKfw = payload.wantsKfw ? "Ja" : "Nein";
  const source = payload.source || "website";

  const text = [
    "Neue Projektanfrage ueber die Website",
    "",
    `Name: ${payload.name}`,
    `Telefon: ${payload.phone}`,
    `E-Mail: ${payload.email}`,
    `Leistung: ${payload.service}`,
    `Ort / PLZ: ${payload.location}`,
    `KfW-Foerderberatung: ${wantsKfw}`,
    `Quelle: ${source}`,
    "",
    "Nachricht:",
    payload.message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937">
      <h2 style="margin:0 0 16px;color:#b91c1c">Neue Projektanfrage</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px">
        <tbody>
          <tr><td style="padding:6px 0;font-weight:700">Name</td><td style="padding:6px 0">${escapeHtml(payload.name)}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700">Telefon</td><td style="padding:6px 0">${escapeHtml(payload.phone)}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700">E-Mail</td><td style="padding:6px 0">${escapeHtml(payload.email)}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700">Leistung</td><td style="padding:6px 0">${escapeHtml(payload.service)}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700">Ort / PLZ</td><td style="padding:6px 0">${escapeHtml(payload.location)}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700">KfW-Förderberatung</td><td style="padding:6px 0">${wantsKfw}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700">Quelle</td><td style="padding:6px 0">${escapeHtml(source)}</td></tr>
        </tbody>
      </table>
      <div style="margin-top:20px;padding:16px;border:1px solid #fecaca;border-radius:16px;background:#fef2f2">
        <p style="margin:0 0 8px;font-weight:700">Nachricht</p>
        <p style="margin:0;white-space:pre-wrap">${escapeHtml(payload.message)}</p>
      </div>
    </div>
  `.trim();

  return { text, html };
}

async function sendNotification(payload, env) {
  const recipients = (env.CONTACT_TO_EMAIL || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (!env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY fehlt.");
  }

  if (!env.RESEND_FROM_EMAIL) {
    throw new Error("RESEND_FROM_EMAIL fehlt.");
  }

  if (recipients.length === 0) {
    throw new Error("CONTACT_TO_EMAIL fehlt.");
  }

  const { text, html } = formatEmailBody(payload);
  const subject = `Neue Anfrage | ${payload.service}`;

  const resendResponse = await fetch(EMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL,
      to: recipients,
      reply_to: payload.email,
      subject,
      text,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    throw new Error(`Resend-Fehler: ${errorText}`);
  }

  return resendResponse.json();
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const url = new URL(request.url);
    const allowedOrigins = getAllowedOrigins(env);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: getCorsHeaders(origin, env),
      });
    }

    if (origin && allowedOrigins.length > 0 && !allowedOrigins.includes(origin)) {
      return json({ error: "Origin nicht erlaubt." }, { status: 403, origin, env });
    }

    if (request.method === "GET" && url.pathname === "/health") {
      return json({ ok: true }, { origin, env });
    }

    if (request.method !== "POST" || url.pathname !== "/contact") {
      return json({ error: "Nicht gefunden." }, { status: 404, origin, env });
    }

    let payload;

    try {
      payload = await request.json();
    } catch {
      return json({ error: "Ungültige Anfrage." }, { status: 400, origin, env });
    }

    if (typeof payload?.website === "string" && payload.website.trim()) {
      return json({ ok: true }, { origin, env });
    }

    const normalizedPayload = {
      name: typeof payload?.name === "string" ? payload.name.trim() : "",
      phone: typeof payload?.phone === "string" ? payload.phone.trim() : "",
      email: typeof payload?.email === "string" ? payload.email.trim() : "",
      service: typeof payload?.service === "string" ? payload.service.trim() : "",
      location: typeof payload?.location === "string" ? payload.location.trim() : "",
      message: typeof payload?.message === "string" ? payload.message.trim() : "",
      source: typeof payload?.source === "string" ? payload.source.trim() : "website",
      wantsKfw: Boolean(payload?.wantsKfw),
    };

    const validationErrors = validatePayload(normalizedPayload);

    if (validationErrors.length > 0) {
      return json({ error: "Bitte alle Pflichtfelder korrekt ausfüllen." }, { status: 400, origin, env });
    }

    try {
      await sendNotification(normalizedPayload, env);
      return json({ ok: true }, { origin, env });
    } catch (error) {
      console.error("contact-send-failed", error);
      return json(
        { error: "Versand fehlgeschlagen. Bitte telefonisch oder per WhatsApp anfragen." },
        { status: 500, origin, env }
      );
    }
  },
};
