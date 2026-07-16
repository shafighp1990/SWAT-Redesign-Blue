"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const navigation = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Karriere", href: "/karriere" },
];

export function Header() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.logoLink}
          aria-label="S.W.A.T. Startseite"
        >
          <img
            src="/images/logo.jpg"
            alt="S.W.A.T. Sicherheit & Service"
            className={styles.logo}
          />
        </Link>

        <nav
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ""
          }`}
          aria-label="Hauptnavigation"
        >
          <div className={styles.mobileMenuTop}>
            <span>Navigation</span>

            <button
              type="button"
              className={styles.mobileClose}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Menü schließen"
            >
              ×
            </button>
          </div>

          <div className={styles.navigationLinks}>
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  isActive(item.href) ? styles.active : ""
                }`}
              >
                <span className={styles.mobileNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.navLabel}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className={styles.mobileContact}>
            <span>S.W.A.T. Sicherheit & Service GmbH</span>

            <a href="tel:+491727143714">
              0172 7143714
            </a>

            <a href="mailto:info@swat-sicherheitsservice.de">
              info@swat-sicherheitsservice.de
            </a>
          </div>
        </nav>

        <Link
          href="/kontakt"
          className={`${styles.contactButton} ${
            pathname === "/kontakt" ? styles.contactActive : ""
          }`}
        >
          <span className={styles.contactIcon} aria-hidden="true">
            <i className={styles.leftWing} />
            <i className={styles.shield}>
              <b />
            </i>
            <i className={styles.rightWing} />
          </span>

          <span className={styles.contactText}>
            Kontakt
          </span>

          <span className={styles.contactArrow}>
            ↗
          </span>
        </Link>

        <button
          type="button"
          className={`${styles.menuButton} ${
            isMenuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}