"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const wrap = (min, max, value) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

/**
 * Infinite ticker whose speed and direction respond to scroll velocity.
 */
export default function Marquee({ items, baseVelocity = -2.4, className = "" }) {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const direction = useRef(1);

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  const row = [...items, ...items];

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <motion.div className="marquee-track" style={{ x }}>
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {row.map((item, index) => (
              <span className="marquee-item" key={`${copy}-${index}`}>
                <span>{item}</span>
                <span className="marquee-dot" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
