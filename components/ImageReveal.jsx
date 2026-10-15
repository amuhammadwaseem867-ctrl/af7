"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * Clip-path wipe as the image enters, plus a gentle scroll-linked zoom.
 * Works with both in-flow images and `fill` images (pass `fill`).
 */
export default function ImageReveal({
  children,
  className = "",
  direction = "up",
  fill = false,
  zoom = 0.12,
  delay = 0,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1 + zoom, 1]);

  const hiddenClip = {
    up: "inset(100% 0% 0% 0%)",
    left: "inset(0% 100% 0% 0%)",
    right: "inset(0% 0% 0% 100%)",
  }[direction];

  return (
    // The observed element must not be clipped itself, or the
    // IntersectionObserver never reports it as visible.
    <motion.div
      ref={ref}
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
        <motion.div
          className="image-reveal-inner"
          style={reduceMotion ? undefined : { scale }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
