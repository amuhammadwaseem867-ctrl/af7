"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "./ease";

const headingTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  div: motion.div,
};

/**
 * Masked word-by-word heading reveal.
 * `lines` is an array of strings; lines listed in `accent` (by index)
 * render inside a <span> so existing "h1 span" accent styles still apply.
 */
export default function SplitText({
  as = "h2",
  lines,
  accent = [],
  className,
  delay = 0,
  stagger = 0.06,
  animateOnMount = false,
  id,
}) {
  const reduceMotion = useReducedMotion();
  const Component = headingTags[as] || motion.h2;
  const label = lines.join(" ");

  const trigger = animateOnMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, amount: 0.4 } };

  return (
    <Component
      id={id}
      className={className}
      aria-label={label}
      initial="hidden"
      {...trigger}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {lines.map((line, lineIndex) => {
        const isAccent = accent.includes(lineIndex);
        const words = line.split(" ");

        return (
          <span
            key={`${line}-${lineIndex}`}
            className={`split-line ${isAccent ? "split-accent" : "split-plain"}`}
            aria-hidden="true"
          >
            {words.map((word, wordIndex) => (
              <span className="split-mask" key={`${word}-${wordIndex}`}>
                <motion.span
                  className="split-word"
                  variants={{
                    hidden: reduceMotion
                      ? { opacity: 0 }
                      : { y: "110%", rotate: 4 },
                    visible: {
                      y: "0%",
                      rotate: 0,
                      opacity: 1,
                      transition: { duration: 1.1, ease: easeOutExpo },
                    },
                  }}
                >
                  {word}
                </motion.span>
                {wordIndex < words.length - 1 ? " " : null}
              </span>
            ))}
          </span>
        );
      })}
    </Component>
  );
}
