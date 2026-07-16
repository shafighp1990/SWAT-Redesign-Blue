"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="siteHeader">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <img src="/images/logo.jpg" alt="S.W.A.T. Logo" />
        <span><b>S.W.A.T.</b><small>Sicherheit & Service GmbH</small></span>
      </Link>
      <nav className={open ? "nav open" : "nav"}>
        <Link href="/" onClick={() => setOpen(false)}>Startseite</Link>
        <Link href="/leistungen" onClick={() => setOpen(false)}>Leistungen</Link>
        <Link href="/ueber-uns" onClick={() => setOpen(false)}>Über uns</Link>
        <Link href="/referenzen" onClick={() => setOpen(false)}>Referenzen</Link>
        <Link href="/karriere" onClick={() => setOpen(false)}>Karriere</Link>
        <Link href="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>
      </nav>
      <Link href="/kontakt" className="headerCta">Angebot anfragen</Link>
      <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Menü öffnen">☰</button>
    </header>
  );
}
