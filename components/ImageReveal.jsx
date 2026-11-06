"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Clip-path wipe as the image enters. The image is never scaled, so its
 * edges are never cut off. `zoom` is accepted for compatibility and ignored.
 */
export default function ImageReveal({
  children,
  className = "",
  direction = "up",
  fill = false,
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();

  const hiddenClip = {
    up: "inset(100% 0% 0% 0%)",
    left: "inset(0% 100% 0% 0%)",
    right: "inset(0% 0% 0% 100%)",
  }[direction];

  return (
    // The observed element must not be clipped itself, or the
    // IntersectionObserver never reports it as visible.
    <motion.div
      className={`image-reveal ${fill ? "image-reveal-fill" : ""} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="image-reveal-clip"
        variants={{
          hidden: reduceMotion ? { opacity: 0 } : { clipPath: hiddenClip },
          visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
        }}
        transition={{ duration: 1.5, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="image-reveal-inner">{children}</div>
      </motion.div>
    </motion.div>
  );
}
