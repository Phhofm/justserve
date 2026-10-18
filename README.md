# JustServe Pfahl Zürich

Übersichtsseite der Dienstprojekte des Pfahls Zürich:

- **Übersicht** (`/`) – Warum wir dienen, beide Projekte, Ausblick 2028, vergangene Projekte
- **Clean-Up Day** (`/cleanup`) – Samstag, 18. September 2027, Chinagarten Zürich
- **Kispi** (`/kispi`) – Trösterli-Sammelaktion für das Kinderspital Zürich (mit `/kispi/admin`)

## Entwicklung

```bash
nvm use
npm install
cp .env.example .env   # Supabase-Werte für die Kispi-Seite
npm run dev            # http://localhost:5173
npm run test
npm run build
```

## Deployment

Push auf `main` löst `.github/workflows/deploy.yml` aus. Nötig sind:

- GitHub Pages als Quelle **«GitHub Actions»**
- Repository-Variablen `VITE_SUPABASE_URL` und `VITE_SUPABASE_ANON_KEY`
  (Settings → Secrets and variables → Actions → Variables)

Die Seite läuft unter `https://phhofm.github.io/justserve/`.