"use client";

import { motion } from "framer-motion";
import styles from "./Story.module.css";

const principles = [
  {
    title: "Verantwortung",
    statement: "Jeder Einsatz beginnt mit Verantwortung.",
    text: "Wir übernehmen Verantwortung für Menschen, Objekte und klar definierte Abläufe.",
  },
  {
    title: "Präsenz",
    statement: "Sichtbar. Kontrolliert. Professionell.",
    text: "Unsere Präsenz schafft Orientierung, reduziert Risiken und vermittelt Sicherheit.",
  },
  {
    title: "Vertrauen",
    statement: "Sicherheit entsteht durch Verlässlichkeit.",
    text: "Klare Kommunikation, feste Ansprechpartner und konsequente Standards schaffen Vertrauen.",
  },
];

const fadeTransition = {
  duration: 1.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Story() {
  return (
    <section className={styles.story} id="story">
      <div className={styles.intro}>
        <motion.span
          className={styles.index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={fadeTransition}
        >
          01 / Verantwortung
        </motion.span>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            ...fadeTransition,
            delay: 0.1,
          }}
        >
          Sicherheit ist
          <span>keine Reaktion.</span>
          <em>Sie beginnt lange davor.</em>
        </motion.h2>

        <motion.div
          className={styles.introText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            ...fadeTransition,
            delay: 0.2,
          }}
        >
          <p>
            Wir entwickeln Sicherheitslösungen nicht nach einem festen
            Standardpaket. Jeder Standort, jeder Auftrag und jede Situation
            wird individuell betrachtet.
          </p>

          <p>
            Präsenz ist dabei nur ein Teil. Entscheidend sind Vorbereitung,
            Kommunikation und verlässliche Abläufe.
          </p>
        </motion.div>
      </div>

      <div className={styles.statement}>
        <motion.div
          className={styles.statementImage}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            ...fadeTransition,
            duration: 1.9,
          }}
        >
          <img
            src="/images/security.jpg"
            alt="Professionelle Sicherheitspräsenz"
          />

          <div className={styles.imageOverlay} />

          <span className={styles.imageCaption}>
            Präsenz. Kontrolle. Verantwortung.
          </span>
        </motion.div>

        <motion.div
          className={styles.statementCopy}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            ...fadeTransition,
            delay: 0.15,
          }}
        >
          <span className={styles.statementNumber}>02</span>

          <p>
            Wir schützen nicht nur Gebäude und Gelände.
            <strong> Wir schaffen Vertrauen in Abläufe.</strong>
          </p>
        </motion.div>
      </div>

    <div className={styles.principles}>
  {principles.map((principle, index) => (
    <motion.article
      key={principle.title}
      className={styles.principle}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        ...fadeTransition,
        delay: index * 0.12,
      }}
    >
      <span className={styles.principleIndex}>
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className={styles.principleLine} />

     <h3
  className={
    index === 0
      ? styles.compactTitle
      : ""
  }
>
  {principle.title}
</h3>

      <strong>{principle.statement}</strong>

      <p>{principle.text}</p>

      <span className={styles.principleMark} aria-hidden="true">
        SW / {String(index + 1).padStart(2, "0")}
      </span>
    </motion.article>
  ))}
</div>
    </section>
  );
}