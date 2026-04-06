# Contact Worker

Dieser Worker nimmt Formularanfragen von der Website an und versendet sie über Resend.

## Benötigte Variablen

Normale Variablen in Cloudflare:

- `ALLOWED_ORIGINS`
- `CONTACT_TO_EMAIL`
- `RESEND_FROM_EMAIL`

Secret in Cloudflare:

- `RESEND_API_KEY`

## Empfohlene Werte

- `ALLOWED_ORIGINS=http://localhost:5173,http://localhost:4173,https://teamwork-construction.de,https://www.teamwork-construction.de,https://zarasheikhi.github.io`
- `CONTACT_TO_EMAIL=kontakt@teamwork-construction.de`
- `RESEND_FROM_EMAIL=Teamwork Construction <kontakt@send.teamwork-construction.de>`

## Secret setzen

```bash
npx wrangler secret put RESEND_API_KEY
```

## Lokale Entwicklung

```bash
cp .dev.vars.example .dev.vars
npm run worker:dev
```

Dann läuft der Worker standardmäßig unter `http://127.0.0.1:8787`.

## Frontend

Optional kann das Frontend lokal auf den Worker zeigen:

```bash
VITE_CONTACT_API_URL=http://127.0.0.1:8787/contact
```
