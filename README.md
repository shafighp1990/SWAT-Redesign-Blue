# S.W.A.T. Premium Phase 1

Mehrseitiger Next.js-15-Entwurf für S.W.A.T. Sicherheit & Service GmbH.

## Enthaltene Routen

- `/`
- `/leistungen`
- `/leistungen/[slug]` für sieben einzelne Leistungsseiten
- `/ueber-uns`
- `/referenzen`
- `/karriere`
- `/kontakt`
- `/impressum`
- `/datenschutz`

## Lokal starten

```bash
npm install
npm run dev
```

Danach `http://localhost:3000` öffnen.

## Vercel

Repository zu GitHub pushen, in Vercel importieren und ohne besondere Build-Einstellungen deployen.

## Vor Veröffentlichung

- Handelsregister, Registernummer, USt-IdNr. und Aufsichtsbehörde ergänzen.
- Datenschutztext rechtlich prüfen.
- Referenzen und Partner nur nach Freigabe veröffentlichen.
- Kontaktformular ist in Phase 1 als `mailto:` umgesetzt. In Phase 2 wird serverseitiger E-Mail-Versand angebunden.
- Konzeptbilder vor dem Live-Gang durch freigegebene Originalfotos ersetzen.
