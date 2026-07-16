import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div>
          <img className="footerLogo" src="/images/logo.jpg" alt="S.W.A.T. Logo" />
          <p>Professionelle Sicherheitsdienstleistungen mit klaren Abläufen, geschultem Personal und persönlicher Erreichbarkeit.</p>
        </div>
        <div><h3>Navigation</h3><Link href="/leistungen">Leistungen</Link><Link href="/ueber-uns">Über uns</Link><Link href="/karriere">Karriere</Link></div>
        <div><h3>Kontakt</h3><a href="tel:+491727143714">0172 7143714</a><a href="mailto:info@swat-sicherheitsservice.de">info@swat-sicherheitsservice.de</a><span>Alexanderstraße 172, 26121 Oldenburg</span></div>
        <div><h3>Rechtliches</h3><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div>
      </div>
      <div className="footerBottom">© 2026 S.W.A.T. Sicherheit & Service GmbH</div>
    </footer>
  );
}
