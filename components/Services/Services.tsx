"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import styles from "./Services.module.css";

const serviceImages = [
  "/images/security.jpg",
  "/images/hero.jpg",
];

const transition = {
  duration: 1.15,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.header}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={transition}
        >
          03 / Leistungsplattform
        </motion.span>

        <motion.div
          className={styles.headerCopy}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            ...transition,
            delay: 0.08,
          }}
        >
          <h2>
            Sicherheit ist
            <span>ein System.</span>
          </h2>

          <p>
            Wir verbinden Analyse, Planung, qualifiziertes Personal und
            verlässliche Betreuung zu einer individuellen Sicherheitslösung.
          </p>
        </motion.div>

        <motion.div
          className={styles.headerMeta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            ...transition,
            delay: 0.18,
          }}
        >
          <span>Individuell geplant</span>
          <span>Professionell umgesetzt</span>
          <span>Persönlich betreut</span>
        </motion.div>
      </div>

      <div className={styles.showcase}>
        {services.map((service, index) => {
          const number = String(index + 1).padStart(2, "0");
          const image =
            serviceImages[index % serviceImages.length];

          return (
            <motion.article
              key={service.slug}
              className={styles.service}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                ...transition,
                delay: index * 0.06,
              }}
            >
              <Link
                href={`/leistungen/${service.slug}`}
                className={styles.serviceLink}
                aria-label={`${service.title} ansehen`}
              >
                <div className={styles.serviceTop}>
                  <span className={styles.serviceIndex}>
                    {number}
                  </span>

                <span className={styles.serviceCategory}>
  {service.eyebrow}
</span>

                  <span className={styles.serviceArrow}>
                    ↗
                  </span>
                </div>

                <div className={styles.serviceGrid}>
                  <div className={styles.serviceContent}>
                    <h3
  className={
    service.compactTitle
      ? styles.compactTitle
      : undefined
  }
>
  {service.title}
                    </h3>
                    <p>{service.intro}</p>

                    <span className={styles.detailsLink}>
                      Leistung ansehen
                      <i aria-hidden="true" />
                    </span>
                  </div>

                  <div className={styles.imageWrap}>
                    <img
                      src={image}
                      alt={service.title}
                      loading={index > 0 ? "lazy" : "eager"}
                    />

                    <div className={styles.imageOverlay} />

                    <span className={styles.imageNumber}>
                      {number}
                    </span>

                    <span className={styles.imageCaption}>
                      S.W.A.T. Sicherheit &amp; Service
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className={styles.footerLine}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={transition}
      >
        <span>Sicherheitslösungen nach Maß</span>

        <Link href="/leistungen">
          Alle Leistungen
          <b>↗</b>
        </Link>
      </motion.div>
    </section>
  );
}