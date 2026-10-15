"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "./ease";

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  amount = 0.15,
  as = "div",
}) {
  const Component = as === "ul" ? motion.ul : motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({ children, className, y = 36, as = "div", ...rest }) {
  const reduceMotion = useReducedMotion();
  const Component =
    as === "li" ? motion.li : as === "figure" ? motion.figure : as === "article" ? motion.article : motion.div;

  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: easeOutExpo },
        },
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
