import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
export const metadata: Metadata = { title: "Karriere" };
export default function Page() {
  return (
    <>
      <section className="pageHero">
        <div>
          <span className="eyebrow">Karriere</span>
          <h1>Werde Teil eines zuverlässigen Teams.</h1>
          <p>Wir suchen motivierte Mitarbeitende für Objektschutz, Empfang, Pforte, Revierdienst und Veranstaltungen.</p>
          <Link className="button buttonGold" href="/kontakt">Jetzt bewerben</Link>
        </div>
        <img src="/images/hero.jpg" alt="S.W.A.T. Team" />
      </section>
      <section className="section">
        <Reveal className="sectionIntro">
          <h2>Was uns wichtig ist.</h2>
        </Reveal>
        <div className="featureGrid">
          {["Zuverlässigkeit", "Verantwortungsbewusstsein", "Gepflegtes Auftreten", "Respektvoller Umgang", "Teamfähigkeit", "Qualifikation nach §34a"].map((x, i) => (
            <Reveal key={x} delay={i * 0.05} className="featureCard">
              <h3>{x}</h3>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
