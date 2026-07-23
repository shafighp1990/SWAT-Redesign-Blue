"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const fade = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Content Side */}
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease }}
        >
          <motion.div
            className={styles.heroTopMeta}
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <span>Sicherheitsdienst</span>
            <span className={styles.divider} />
            <span>Oldenburg</span>
            <span className={styles.divider} />
            <span>Niedersachsen</span>
          </motion.div>

          <motion.p
            className={styles.heroKicker}
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            S.W.A.T. Sicherheit &amp; Service GmbH
          </motion.p>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <span>Sicherheit ohne </span>
            <span className={styles.highlight}>Kompromisse.</span>
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            Professionelle Sicherheitslösungen für Menschen, Unternehmen und 
            anspruchsvolle Einsatzbereiche in Niedersachsen, Hamburg und bundesweit.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.5, ease }}
          >
            <Link href="/kontakt" className={styles.heroPrimaryBtn}>
              Projekt besprechen
              <span>↗</span>
            </Link>
            <Link href="/leistungen" className={styles.heroSecondaryBtn}>
              Leistungen ansehen
            </Link>
          </motion.div>

          <motion.div
            className={styles.heroAvailability}
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6, ease }}
          >
            <strong>24/7</strong>
            <span>Persönlich erreichbar<br />und einsatzbereit</span>
          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          <img 
            src="/images/hero.jpg" 
            alt="Professionelle Sicherheitspräsenz" 
          />
          <div className={styles.heroImageOverlay} />
          
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease }}
          >
            <strong>§34a</strong>
            <span>Konformes Personal</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.heroScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, ease }}
      >
        <span>Scroll</span>
        <span className={styles.heroScrollLine} />
      </motion.div>
    </section>
  );
}