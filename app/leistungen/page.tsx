import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { services } from "@/lib/services";

export const metadata: Metadata = { title: "Leistungen", description: "Objektschutz, Empfang, Veranstaltungsschutz, Revierdienst und individuelle Sicherheitskonzepte." };

export default function LeistungenPage() {
  return (
    <>
      <section className="pageHero"><div><span className="eyebrow">Leistungen</span><h1>Sicherheitslösungen für unterschiedliche Anforderungen.</h1><p>Jeder Standort und jede Branche hat eigene Risiken. Wir entwickeln passende Lösungen mit klaren Abläufen.</p></div><img src="/images/architecture.jpg" alt="Modernes Gebäude bei Nacht" /></section>
      <section className="section"><div className="serviceGrid serviceGridLarge">{services.map((s,i)=><Reveal key={s.slug} delay={i*.05}><Link className="serviceCard" href={`/leistungen/${s.slug}`}><span>0{i+1}</span><h2>{s.title}</h2><p>{s.description}</p><b>Leistung ansehen →</b></Link></Reveal>)}</div></section>
    </>
  );
}
