"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { easeInOutQuart, easeOutExpo } from "./ease";

/**
 * Plays a navy curtain sweep and content fade on every client-side route
 * change. Skipped on the first load, where the preloader runs instead.
 */
export default function PageTransition({ children }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [previousPath, setPreviousPath] = useState(pathname);
  const [hasNavigated, setHasNavigated] = useState(false);

  if (previousPath !== pathname) {
    setPreviousPath(pathname);
    setHasNavigated(true);
  }

  const playCurtain = hasNavigated && !reduceMotion;

  return (
    <div key={pathname} className="page-transition">
      {playCurtain ? (
        <motion.div
          className="page-curtain"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.9, ease: easeInOutQuart }}
          aria-hidden="true"
        >
          <motion.span
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
          >
            AF7
          </motion.span>
        </motion.div>
      ) : null}

      <motion.div
        initial={playCurtain ? { opacity: 0, y: 60 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: easeOutExpo }}
      >
        {children}
      </motion.div>
    </div>
  );
}
