import type { Metadata } from "next";
import { Reveal } from "@/components/Motion";
export const metadata: Metadata = { title: "Über uns" };
export default function Page() {
  return (
    <>
      <section className="pageHero">
        <div>
          <span className="eyebrow">Über uns</span>
          <h1>Ein wachsendes Sicherheitsunternehmen aus Oldenburg.</h1>
          <p>Persönlich, regional, direkt und flexibel – mit professionellem Anspruch.</p>
        </div>
        <img src="/images/security.jpg" alt="Sicherheitsmitarbeiter" />
      </section>
      <section className="twoColumn">
        <Reveal>
          <h2>Wir stellen nicht nur Personal. Wir übernehmen Verantwortung.</h2>
          <p>S.W.A.T. Sicherheit & Service GmbH ist seit 2019 aktiv und in Niedersachsen, Hamburg sowie bundesweit einsatzfähig. Geschäftsführer Zubair Noori ist zugleich Dozent bei der AdA – Akademie der Ausbilder UG.</p>
        </Reveal>
        <Reveal className="facts">
          <div><b>§34a</b><span>konformes Personal</span></div>
          <div><b>24/7</b><span>persönlich erreichbar</span></div>
          <div><b>Fest</b><span>definierte Ansprechpartner</span></div>
        </Reveal>
      </section>
    </>
  );
}
