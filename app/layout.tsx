import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://swat-sicherheitsservice.de"),
  title: { default: "S.W.A.T. Sicherheit & Service GmbH", template: "%s | S.W.A.T." },
  description: "Professionelle Sicherheitsdienstleistungen in Oldenburg, Niedersachsen, Hamburg und bundesweit.",
  keywords: ["Sicherheitsdienst Oldenburg", "Objektschutz", "Werkschutz", "Sicherheitsdienst Hamburg", "Revierdienst"],
  openGraph: {
    title: "S.W.A.T. Sicherheit & Service GmbH",
    description: "Sicherheit, die sichtbar Vertrauen schafft.",
    type: "website",
    locale: "de_DE",
    images: ["/images/hero.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <a className="callFab" href="tel:+491727143714" aria-label="S.W.A.T. anrufen">☎</a>
      </body>
    </html>
  );
}
