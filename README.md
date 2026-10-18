# JustServe Pfahl Zürich – 2027

Übersichtsseite der Dienstprojekte des Pfahls Zürich für 2027:

- **Trösterli für das Kinderspital Zürich** (eigene Seite: <https://phhofm.github.io/justserve-kispi-175/>)
- **Nationaler Clean-Up Day** am Samstag, 18. September 2027, am Chinagarten Zürich
- Ausblick auf das 175-Jahr-Jubiläum 2028 in der Swiss Life Arena
- Rückblick: 1000 ehrenamtliche Arbeitsstunden Zürich

## Entwicklung

```bash
nvm use
npm install
npm run dev      # http://localhost:5173
npm run test
npm run build
```

## Deployment

Push auf `main` löst `.github/workflows/deploy.yml` aus. GitHub Pages als Quelle
«GitHub Actions» einstellen. Die Seite läuft unter `https://phhofm.github.io/justserve/`.