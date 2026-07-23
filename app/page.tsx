import Services from "@/components/Services/Services";
import Story from "@/components/Story/Story";
import Hero from "@/components/Hero/Hero";
import Link from "next/link";
import { Reveal } from "@/components/Motion";


export default function HomePage() {

  const processSteps = [
    "Anfrage",
    "Erstgespräch",
    "Sicherheitsanalyse",
    "Konzept & Angebot",
    "Umsetzung",
    "Betreuung",
  ];

  const benefits = [
    "Sichtbare Präsenz und Abschreckung",
    "Kontrollierter Zutritt",
    "Geschultes Personal auf Abruf",
    "Professionelle Deeskalation",
    "Fester Ansprechpartner",
  ];

  return (
    <>
      <Hero />
      <Story />
      <Services />

      <section className="comparison">
        <Reveal className="comparisonCopy">
          <span className="eyebrow">
            Prävention statt Reaktion
          </span>

          <h2>
            Sicherheit beginnt, bevor etwas passiert.
          </h2>

          <p>
            Professionelle Präsenz reduziert Risiken, schafft klare
            Verantwortung und sorgt für kontrollierte Abläufe.
          </p>
        </Reveal>

        <Reveal className="benefitPanel">
          <h3>Mit S.W.A.T.</h3>

          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="sectionIntro">
          <span className="eyebrow">
            Ablauf
          </span>

          <h2>
            Von der Anfrage bis zur laufenden Betreuung.
          </h2>
        </Reveal>

        <div className="processGrid">
          {processSteps.map((step, index) => (
            <Reveal
              key={step}
              delay={index * 0.06}
              className="processStep"
            >
              <b>
                {String(index + 1).padStart(2, "0")}
              </b>

              <h3>{step}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ctaSection">
        <Reveal>
          <span className="eyebrow">
            Direkter Kontakt
          </span>

          <h2>
            Welche Sicherheitslösung passt zu Ihrem Objekt?
          </h2>

          <Link
            className="button buttonGold"
            href="/kontakt"
          >
            Beratung anfragen
          </Link>
        </Reveal>
      </section>
    </>
  );
}
