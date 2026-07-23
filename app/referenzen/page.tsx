import type { Metadata } from "next";
import { Reveal } from "@/components/Motion";
export const metadata: Metadata = { title: "Referenzen & Partner" };
const refs = [
  "Glückskind Kinder- & Jugendhilfe GmbH",
  "Hartmann Sicherheit & Service GmbH",
  "AdA – Akademie der Ausbilder UG",
  "Dua GmbH & Co. KG",
  "Stadtgrünpflege & Friedhöfe Oldenburg",
  "Stadt Oldenburg – Klimaschutz & Mobilität",
  "ELB Security, Hamburg",
  "EPP Sicherheitsmanagement GmbH"
];
export default function Page() {
  return (
    <>
      <section className="simpleHero">
        <span className="eyebrow">Referenzen & Partner</span>
        <h1>Vertrauen entsteht durch verlässliche Einsätze.</h1>
        <p>Partner- und Referenzlogos werden nach schriftlicher Freigabe veröffentlicht.</p>
      </section>
      <section className="section sectionAlt">
        <div className="referenceGrid">
          {refs.map((x, i) => (
            <Reveal key={x} delay={i * 0.05} className="referenceCard">
              <span>0{i + 1}</span>
              <h3>{x}</h3>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
