# Teamwork Construction

React/Vite-Website mit einem separaten Cloudflare Worker fuer das Kontaktformular.

## Projektstruktur

```text
.
|-- public/
|   `-- images/brand/        # aktive, oeffentlich ausgelieferte Brand-Assets
|-- src/
|   |-- content/             # zentrale Inhalte, SEO-Texte, Stammdaten
|   |   `-- siteContent.js
|   |-- pages/               # Seitenlogik und Routing
|   |   `-- TeamworkLanding.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- worker/                  # Contact API fuer Formularversand
|-- docs/
|   |-- brand/               # Logo-Varianten und Markenmaterial
|   |-- marketing/           # Flyer und Promo-Grafiken
|   `-- reference/           # Referenz-PDFs und sonstige Unterlagen
|-- archive/
|   `-- legacy-static/       # alte statische Vorversion, nicht produktiv aktiv
|-- index.html
|-- package.json
|-- vite.config.js
`-- wrangler.jsonc
```

## Schnellstart

```bash
npm install
npm run dev
```

Frontend-Build:

```bash
npm run build
```

Fuer saubere Canonical-URLs:

```bash
VITE_SITE_URL=https://teamwork-construction.de
```

Worker lokal starten:

```bash
cp .dev.vars.example .dev.vars
npm run worker:dev
```

## Orientierung

- Inhalte wie Services, SEO-Texte und Kontaktangaben liegen zentral in `src/content/siteContent.js`.
- Die eigentliche Seitenlogik lebt in `src/pages/TeamworkLanding.jsx`.
- Alles in `docs/` ist Referenz- oder Marketingmaterial und nicht Teil des App-Bundles.
- Alles in `archive/legacy-static/` dient nur noch als Rueckgriff auf die alte statische Version.
- Die App nutzt jetzt echte Pfade ueber `BrowserRouter`; fuer Direktaufrufe auf statischem Hosting ist ein `404.html`-Fallback enthalten.
