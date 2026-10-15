"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const QUERY = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

function subscribe(callback) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label";

/**
 * Desktop-only cursor follower. Elements can set data-cursor="View" to show
 * a label inside the enlarged ring.
 */
export default function Cursor() {
  const enabled = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  );
  const [state, setState] = useState({ hover: false, label: "", hidden: true });
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);

      const target = event.target instanceof Element ? event.target : null;
      const labelled = target?.closest("[data-cursor]");
      const interactive = target?.closest(INTERACTIVE);

      setState((current) => {
        const next = {
          hidden: false,
          hover: Boolean(labelled || interactive),
          label: labelled?.getAttribute("data-cursor") || "",
        };
        return current.hidden === next.hidden &&
          current.hover === next.hover &&
          current.label === next.label
          ? current
          : next;
      });
    };

    const leave = () => setState((current) => ({ ...current, hidden: true }));

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const className = [
    "cursor-ring",
    state.hover ? "is-hover" : "",
    state.label ? "has-label" : "",
    state.hidden ? "is-hidden" : "",
  ].join(" ");

  return (
    <>
      <motion.div
        className={className}
        style={{ x: ringX, y: ringY }}
        aria-hidden="true"
      >
        <span>{state.label}</span>
      </motion.div>
      <motion.div
        className={`cursor-dot ${state.hidden || state.label ? "is-hidden" : ""}`}
        style={{ x, y }}
        aria-hidden="true"
      />
    </>
  );
}
