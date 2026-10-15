"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "./ease";

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  figure: motion.figure,
  p: motion.p,
  span: motion.span,
  li: motion.li,
};

export default function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  y = 40,
  x = 0,
  scale = 1,
  duration = 1,
  amount = 0.2,
  once = true,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Component = tags[as] || motion.div;

  return (
    <Component
      className={className}
      initial={
        reduceMotion ? { opacity: 0 } : { opacity: 0, y, x, scale }
      }
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: easeOutExpo }}
      {...rest}
    >
      {children}
    </Component>
  );
}
