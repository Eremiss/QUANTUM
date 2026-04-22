"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "blur-up" | "soft-scale" | "slide-right" | "slide-left";
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  variant = "blur-up",
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const hiddenState = reduceMotion
    ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
    : variant === "soft-scale"
      ? { opacity: 0, x: 0, y: 18, scale: 0.965, filter: "blur(12px)" }
      : variant === "slide-right"
        ? { opacity: 0, x: -32, y: 6, scale: 1, filter: "blur(8px)" }
        : variant === "slide-left"
          ? { opacity: 0, x: 32, y: 6, scale: 1, filter: "blur(8px)" }
          : { opacity: 0, x: 0, y: 24, scale: 0.985, filter: "blur(10px)" };

  return (
    <motion.div
      className={className}
      initial={hiddenState}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay,
            }
      }
    >
      {children}
    </motion.div>
  );
}
