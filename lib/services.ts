export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "objekt-und-werkschutz",
    title: "Objekt- & Werkschutz",
    eyebrow: "Schutz für Unternehmen und Standorte",
    intro: "Sichtbare Präsenz, kontrollierte Abläufe und zuverlässige Dokumentation.",
    description: "Wir schützen Gebäude, Betriebsgelände, Produktions- und Lagerflächen vor unbefugtem Zutritt, Diebstahl, Vandalismus und Betriebsstörungen.",
    benefits: ["Kontrollgänge innen und außen", "Zutrittskontrollen", "Schließ- und Öffnungsdienste", "Lückenlose Einsatzdokumentation"]
  },
  {
    slug: "empfang-und-pfortendienst",
    title: "Empfangs- & Pfortendienst",
    eyebrow: "Sicherheit trifft Service",
    intro: "Ein professioneller erster Kontaktpunkt für Besucher, Lieferanten und Mitarbeitende.",
    description: "Unsere Mitarbeitenden übernehmen Besucherempfang, Ausweiserfassung, Telefonannahme, Schlüsselverwaltung und Zutrittssteuerung.",
    benefits: ["Besucher- und Lieferantensteuerung", "Schlüsselverwaltung", "Telefon- und Empfangsservice", "Freundliches, professionelles Auftreten"]
  },
  {
    slug: "veranstaltungsschutz",
    title: "Veranstaltungsschutz",
    eyebrow: "Sichere Abläufe für Events",
    intro: "Einlasskontrolle, Besucherlenkung und Deeskalation für einen sicheren Veranstaltungsablauf.",
    description: "Für Firmenevents, Messen, Stadtfeste, Konzerte und private Veranstaltungen stellen wir erfahrenes, situationssicheres Personal.",
    benefits: ["Einlass- und Ticketkontrollen", "Besucherlenkung", "Backstage-Schutz", "Deeskalation und Präsenz"]
  },
  {
    slug: "soziale-einrichtungen",
    title: "Soziale Einrichtungen",
    eyebrow: "Sicherheit mit Fingerspitzengefühl",
    intro: "Ruhige Präsenz, respektvoller Umgang und klare Kommunikation.",
    description: "Wir unterstützen soziale Einrichtungen, Unterkünfte und Betreuungseinrichtungen mit deeskalierender Präsenz und verlässlichen Abläufen.",
    benefits: ["Zugangskontrolle", "Nachtwachen", "Konfliktprävention", "Kommunikation mit Verantwortlichen"]
  },
  {
    slug: "revier-und-schliessdienst",
    title: "Mobiler Revier- & Schließdienst",
    eyebrow: "Kontrolle, wenn sie gebraucht wird",
    intro: "Flexible Außen- und Innenkontrollen, Schließrunden und schnelle Reaktion.",
    description: "Ideal für Unternehmen, Baustellen, Immobilien und Standorte mit wechselndem Bedarf.",
    benefits: ["Regelmäßige Kontrollfahrten", "Öffnungs- und Schließdienste", "Kontrolle definierter Meldepunkte", "Dokumentierte Auffälligkeiten"]
  },
  {
    slug: "baustellen-und-gelaendesicherung",
    title: "Baustellen- & Geländesicherung",
    eyebrow: "Schutz für Projekte und Material",
    intro: "Sichtbare Präsenz und flexible Einsatzzeiten zum Schutz vor Diebstahl und Vandalismus.",
    description: "Wir sichern Baustellen, Maschinen, Werkzeuge und Materialien durch Kontrollgänge, Zutrittsmanagement und Nachtbewachung.",
    benefits: ["Baustellenbewachung", "Geländekontrollen", "Zutrittsmanagement", "Nacht- und Wochenenddienste"]
  },
  {
    slug: "sicherheitsberatung",
    title: "Sicherheitsberatung & Konzept",
    eyebrow: "Individuelle Lösungen statt Standardpakete",
    intro: "Analyse von Objekt, Abläufen, Risiken und Einsatzzeiten.",
    description: "Wir entwickeln nachvollziehbare Sicherheitskonzepte mit klaren Maßnahmen, planbaren Kosten und festem Ansprechpartner.",
    benefits: ["Risiko- und Schwachstellenanalyse", "Maßnahmenplanung", "Personal- und Einsatzkonzept", "Transparente Angebotserstellung"]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
