"use client";

import { motion } from "framer-motion";
import styles from "./Story.module.css";

const facts = [
  {
    value: "2019",
    label: "Seit",
    text: "Erfahrung, gewachsene Abläufe und persönliche Verantwortung.",
  },
  {
    value: "24/7",
    label: "Erreichbar",
    text: "Direkte Kommunikation, kurze Wege und schnelle Reaktion.",
  },
  {
    value: "§34a",
    label: "Konform",
    text: "Qualifiziertes Personal und klar definierte Einsatzstandards.",
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

      <div className={styles.facts}>
        {facts.map((fact, index) => (
          <motion.article
            key={fact.value}
            className={styles.fact}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              ...fadeTransition,
              delay: index * 0.12,
            }}
          >
            <span className={styles.factIndex}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>{fact.value}</strong>

            <h3>{fact.label}</h3>

            <p>{fact.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}