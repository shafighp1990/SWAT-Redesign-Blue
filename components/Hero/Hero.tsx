"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media} aria-hidden="true">
        <img
          src="/images/hero.jpg"
          alt=""
        />

        <div className={styles.overlay} />
        <div className={styles.texture} />
      </div>

      <div className={styles.frame}>
        <motion.div
          className={styles.location}
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.6,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Oldenburg
          <span />
          Niedersachsen
          <span />
          Hamburg
        </motion.div>

        <div className={styles.content}>
          <motion.p
            className={styles.kicker}
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            S.W.A.T. Sicherheit & Service GmbH
          </motion.p>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Sicherheit
            <span>ohne</span>
            <em>Kompromisse.</em>
          </motion.h1>

          <motion.div
            className={styles.bottomContent}
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1.6,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p>
              Professionelle Sicherheitslösungen für Menschen,
              Unternehmen und anspruchsvolle Einsatzbereiche.
            </p>

            <Link href="/kontakt" className={styles.contactLink}>
              <span>Projekt besprechen</span>
              <b>↗</b>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={styles.meta}
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.6,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <strong>24/7</strong>
            <span>Erreichbar</span>
          </div>

          <div>
            <strong>§34a</strong>
            <span>Konform</span>
          </div>

          <div>
            <strong>2019</strong>
            <span>Seit</span>
          </div>
        </motion.div>

        <motion.a
          href="#story"
          className={styles.scroll}
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.6,
            delay: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>Scroll</span>
          <i />
        </motion.a>
      </div>
    </section>
  );
}