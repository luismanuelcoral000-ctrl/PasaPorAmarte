"use client";

import { motion } from "framer-motion";

/**
 * Wraps children in a fade-up reveal that plays once when scrolled into view.
 * Pass `delay` (seconds) to stagger multiple Reveal blocks in the same section.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}
