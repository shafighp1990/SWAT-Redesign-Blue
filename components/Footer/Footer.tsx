import Link from "next/link";
import styles from "./Footer.module.css";

const navigation = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Karriere", href: "/karriere" },
];

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.frame}>
        <div className={styles.topLine}>
          <span>Oldenburg · Niedersachsen · Hamburg</span>
          <span>Independent Security Company · Est. 2019</span>
        </div>

        <div className={styles.statement}>
          <span className={styles.index}>04 / Kontakt</span>
          <div className={styles.statementCopy}>
            <p>Bereit, bevor es darauf ankommt.</p>
            <h2>Sicherheit beginnt<span>mit einem Gespräch.</span></h2>
          </div>
          <Link href="/kontakt" className={styles.contactLink}>
            <span>Projekt besprechen</span><b aria-hidden="true">↗</b>
          </Link>
        </div>

        <div className={styles.information}>
          <Link href="/" className={styles.brand} aria-label="S.W.A.T. Startseite">
            <img src="/images/logo.jpg" alt="S.W.A.T. Sicherheit & Service" />
            <span><strong>S.W.A.T.</strong>Sicherheit &amp; Service GmbH</span>
          </Link>
          <nav className={styles.navigation} aria-label="Footer Navigation">
            <span className={styles.columnLabel}>Navigation</span>
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
          <div className={styles.contact}>
            <span className={styles.columnLabel}>Direkter Kontakt</span>
            <a href="tel:+491727143714">0172 7143714</a>
            <a href="mailto:info@swat-sicherheitsservice.de">info@swat-sicherheitsservice.de</a>
            <address>Alexanderstraße 172<br />26121 Oldenburg</address>
          </div>
          <div className={styles.legal}>
            <span className={styles.columnLabel}>Rechtliches</span>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>

        <div className={styles.bottomLine}>
          <span>© {new Date().getFullYear()} S.W.A.T. Sicherheit &amp; Service GmbH</span>
          <a href="#top" aria-label="Zum Seitenanfang">Nach oben <i aria-hidden="true">↑</i></a>
        </div>
      </div>
    </footer>
  );
}
