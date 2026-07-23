import type { Metadata } from "next";
export const metadata: Metadata = { title: "Datenschutz" };
export default function Page() {
  return (
    <article className="legal">
      <span className="eyebrow">Rechtliches</span>
      <h1>Datenschutzerklärung</h1>
      <p><strong>Entwurf:</strong> Vor Veröffentlichung muss diese Erklärung an Hosting, Formularversand, Analyse-Dienste und weitere eingesetzte Anbieter angepasst und rechtlich geprüft werden.</p>
      <h2>Verantwortlicher</h2>
      <p>S.W.A.T. Sicherheit & Service GmbH, Alexanderstraße 172, 26121 Oldenburg</p>
      <h2>Kontaktaufnahme</h2>
      <p>Angaben aus dem Kontaktformular werden zur Bearbeitung der Anfrage verarbeitet.</p>
      <h2>Server-Logfiles</h2>
      <p>Beim Aufruf können technisch notwendige Verbindungsdaten verarbeitet werden.</p>
      <h2>Ihre Rechte</h2>
      <p>Sie haben insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Beschwerde.</p>
    </article>
  );
}
