"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * Wraps a "fill" image: the inner layer is oversized and drifts against
 * the scroll direction, and the frame un-clips as it enters the viewport.
 */
export default function Parallax({
  children,
  className = "",
  offset = 12,
  clip = true,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${offset}%`, `${offset}%`]);

  return (
    <motion.div
      ref={ref}
      className={`parallax-frame ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div
        className="parallax-frame"
        variants={
          clip && !reduceMotion
            ? {
                hidden: { clipPath: "inset(18% 8% 18% 8%)" },
                visible: { clipPath: "inset(0% 0% 0% 0%)" },
              }
            : undefined
        }
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="parallax-layer"
          style={reduceMotion ? undefined : { y, scale: 1 + offset / 50 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
