"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  duration = 1.6,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroImage() {
  return (
    <motion.div
      className="heroImage"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <img
        src="/images/hero.jpg"
        alt="S.W.A.T. Sicherheitsmitarbeiter vor modernem Gebäude"
      />

      <div className="heroImageShade" />

      <motion.div
        className="availability"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
          delay: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <strong>24/7</strong>
        <span>Erreichbar & einsatzbereit</span>
      </motion.div>
    </motion.div>
  );
}