"use client";

import { motion } from "framer-motion";
import styles from "./Story.module.css";

const principles = [
  {
    icon: "✓",
    title: "Verantwortung",
    statement: "Jeder Einsatz beginnt mit Verantwortung.",
    text: "Wir übernehmen Verantwortung für Menschen, Objekte und klar definierte Abläufe.",
  },
  {
    icon: "◉",
    title: "Präsenz",
    statement: "Sichtbar. Kontrolliert. Professionell.",
    text: "Unsere Präsenz schafft Orientierung, reduziert Risiken und vermittelt Sicherheit.",
  },
  {
    icon: "★",
    title: "Vertrauen",
    statement: "Sicherheit entsteht durch Verlässlichkeit.",
    text: "Klare Kommunikation, feste Ansprechpartner und konsequente Standards schaffen Vertrauen.",
  },
];

const fadeTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Story() {
  return (
    <section className={styles.story} id="story">
      <div className={styles.intro}>
        <div className={styles.introGrid}>
          <motion.div
            className={styles.introLeft}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={fadeTransition}
          >
            <h2>
              Sicherheit ist <em>keine Reaktion.</em><br />
              Sie beginnt lange davor.
            </h2>
          </motion.div>

          <motion.div
            className={styles.introRight}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...fadeTransition, delay: 0.1 }}
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
      </div>

      <div className={styles.statement}>
        <motion.div
          className={styles.statementImage}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...fadeTransition, duration: 1 }}
        >
          <img
            src="/images/security.jpg"
            alt="Professionelle Sicherheitspräsenz"
          />
          <div className={styles.statementImageOverlay} />
        </motion.div>

        <motion.div
          className={styles.statementCopy}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...fadeTransition, delay: 0.15 }}
        >
          <blockquote>
            <p>
              Wir schützen nicht nur Gebäude und Gelände.
              <strong> Wir schaffen Vertrauen in Abläufe.</strong>
            </p>
          </blockquote>
        </motion.div>
      </div>

      <div className={styles.principles}>
        {principles.map((principle, index) => (
          <motion.article
            key={principle.title}
            className={styles.principle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...fadeTransition, delay: index * 0.1 }}
          >
            <div className={styles.principleIcon}>{principle.icon}</div>
            <h3>{principle.title}</h3>
            <strong>{principle.statement}</strong>
            <p>{principle.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}