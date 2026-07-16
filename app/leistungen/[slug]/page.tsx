import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/lib/services";
import { Reveal } from "@/components/Motion";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? { title: service.title, description: service.intro } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="serviceHero">
        <div><span className="eyebrow">{service.eyebrow}</span><h1>{service.title}</h1><p>{service.intro}</p><Link className="button buttonGold" href="/kontakt">Angebot anfragen</Link></div>
        <img src="/images/hero.jpg" alt={service.title} />
      </section>
      <section className="serviceBody">
        <Reveal><span className="eyebrow">Leistungsbeschreibung</span><h2>Professionell geplant. Verlässlich umgesetzt.</h2><p className="lead">{service.description}</p></Reveal>
        <Reveal className="benefits"><h3>Leistungsbausteine</h3>{service.benefits.map((b)=><div key={b}>✓ {b}</div>)}</Reveal>
      </section>
      <section className="ctaSection"><Reveal><h2>Sie benötigen {service.title}?</h2><p>Wir besprechen Einsatzort, Zeitraum und Anforderungen persönlich mit Ihnen.</p><Link className="button buttonGold" href="/kontakt">Erstgespräch anfragen</Link></Reveal></section>
    </>
  );
}
