"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Website-Anfrage");
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nFirma: ${form.get("company")}\nTelefon: ${form.get("phone")}\nE-Mail: ${form.get("email")}\nLeistung: ${form.get("service")}\n\nNachricht:\n${form.get("message")}`
    );
    window.location.href = `mailto:info@swat-sicherheitsservice.de?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <input required name="name" placeholder="Name" />
      <input name="company" placeholder="Firma" />
      <input required name="phone" placeholder="Telefon" />
      <input required type="email" name="email" placeholder="E-Mail" />
      <select name="service" defaultValue="">
        <option value="" disabled>Gewünschte Leistung</option>
        <option>Objekt- & Werkschutz</option><option>Empfangs- & Pfortendienst</option>
        <option>Veranstaltungsschutz</option><option>Revier- & Schließdienst</option>
        <option>Baustellen- & Geländesicherung</option><option>Sicherheitsberatung</option>
      </select>
      <input name="location" placeholder="Einsatzort" />
      <textarea required name="message" placeholder="Beschreiben Sie kurz Ihren Bedarf." />
      <label className="consent"><input required type="checkbox" /> Ich stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu.</label>
      <button className="button buttonGold" type="submit">Anfrage absenden</button>
    </form>
  );
}
