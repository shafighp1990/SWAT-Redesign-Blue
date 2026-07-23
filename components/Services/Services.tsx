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
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <motion.div
              className={styles.headerCopy}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={transition}
            >
              <h2>
                Sicherheit ist <span>ein System.</span>
              </h2>
              <p>
                Wir verbinden Analyse, Planung, qualifiziertes Personal und
                verlässliche Betreuung zu einer individuellen Sicherheitslösung.
              </p>
            </motion.div>
          </div>
        </div>

        <div className={styles.showcase}>
          {services.slice(0, 6).map((service, index) => {
            const image = serviceImages[index % serviceImages.length];
            
            return (
              <motion.article
                key={service.slug}
                className={styles.service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                  <div className={styles.serviceImage}>
                    <img
                      src={image}
                      alt={service.title}
                      loading={index > 0 ? "lazy" : "eager"}
                    />
                  </div>
                  
                  <span className={styles.serviceCategory}>
                    {service.eyebrow}
                  </span>

                  <div className={styles.serviceContent}>
                    <h3>{service.title}</h3>
                    <p>{service.intro}</p>
                    <span className={styles.serviceArrow}>
                      Mehr erfahren
                    </span>
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
            Alle Leistungen →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
