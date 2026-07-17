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

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.media}
        aria-hidden="true"
        variants={fade}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 2.2,
          delay: 0.1,
          ease,
        }}
      >
        <img src="/images/hero.jpg" alt="" />

        <div className={styles.imageShade} />
        <div className={styles.imageGlow} />
      </motion.div>

      <div className={styles.gridLines} aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className={styles.frame}>
        <motion.div
          className={styles.topMeta}
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.5,
            delay: 0.25,
            ease,
          }}
        >
          <span>Sicherheitsdienst</span>

          <i />

          <span>Oldenburg</span>
          <span>Niedersachsen</span>
          <span>Hamburg</span>
        </motion.div>

        <div className={styles.content}>
          <motion.p
            className={styles.kicker}
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1.5,
              delay: 0.35,
              ease,
            }}
          >
            S.W.A.T. Sicherheit &amp; Service GmbH
          </motion.p>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1.9,
              delay: 0.48,
              ease,
            }}
          >
            <span className={styles.firstLine}>Sicherheit</span>

            <span className={styles.secondLine}>
              <small>ohne</small>
            </span>

            <span className={styles.thirdLine}>Kompromisse.</span>
          </motion.h1>

          <motion.div
            className={styles.introduction}
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1.6,
              delay: 0.75,
              ease,
            }}
          >
            <p>
              Professionelle Sicherheitslösungen für Menschen,
              Unternehmen und anspruchsvolle Einsatzbereiche.
            </p>

            <Link href="/kontakt" className={styles.contactLink}>
              <span>Projekt besprechen</span>
              <b aria-hidden="true">↗</b>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={styles.signature}
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.6,
            delay: 0.9,
            ease,
          }}
        >
          <span className={styles.signatureIndex}>SW / 19</span>

          <div className={styles.signatureText}>
            <span>Protection</span>
            <span>without</span>
            <strong>compromise</strong>
          </div>

          <span className={styles.signatureLocation}>
            53° 08′ N
            <br />
            08° 13′ E
          </span>
        </motion.div>

        <motion.div
          className={styles.bottomRail}
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.6,
            delay: 1.05,
            ease,
          }}
        >
          <a href="#story" className={styles.scroll}>
            <span>Scroll</span>

            <span className={styles.scrollLine}>
              <i />
            </span>
          </a>

          <span className={styles.established}>
            Independent Security Company · Est. 2019
          </span>
        </motion.div>
      </div>
    </section>
  );
}