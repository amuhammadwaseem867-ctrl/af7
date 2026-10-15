"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { setScrollLocked } from "@/components/motion/SmoothScroll";
import { markPageReady } from "@/components/motion/usePageReady";
import "./Preloader.css";

const SEEN_KEY = "af7-preloader-seen";
const ease = [0.16, 1, 0.3, 1];
const split = [0.76, 0, 0.24, 1];

const waitForPage = () =>
  new Promise((resolve) => {
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const loaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((done) => window.addEventListener("load", done, { once: true }));
    Promise.all([fontsReady, loaded]).then(resolve);
  });

/**
 * First-visit loader: a zipper closes as the page loads, then the screen
 * unzips into two halves to reveal the site.
 */
export default function Preloader() {
  const [phase, setPhase] = useState("loading"); // loading → closing → done
  const [count, setCount] = useState(0);
  const progress = useMotionValue(0);

  const closedClip = useTransform(progress, (p) => `inset(0 ${100 - p}% 0 0)`);
  const openClip = useTransform(progress, (p) => `inset(0 0 0 ${p}%)`);
  const sliderLeft = useTransform(progress, (p) => `${p}%`);

  useMotionValueEvent(progress, "change", (latest) => setCount(Math.round(latest)));

  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}

    if (seen) {
      // The inline script in the layout already hid the loader before paint.
      markPageReady();
      const frame = requestAnimationFrame(() => setPhase("done"));
      return () => cancelAnimationFrame(frame);
    }

    let cancelled = false;
    const timers = [];
    setScrollLocked(true);

    // Ease towards 90% while the page loads, then run home once it's ready.
    const toNinety = animate(progress, 90, { duration: 2.4, ease: [0.3, 0.6, 0.4, 1] });
    const minimumTime = new Promise((resolve) => timers.push(setTimeout(resolve, 1600)));

    Promise.all([waitForPage(), minimumTime]).then(() => {
      if (cancelled) return;
      toNinety.stop();
      animate(progress, 100, {
        duration: 0.7,
        ease,
        onComplete: () => {
          if (cancelled) return;
          try {
            window.sessionStorage.setItem(SEEN_KEY, "1");
          } catch {}

          timers.push(
            setTimeout(() => {
              setPhase("closing");
              timers.push(setTimeout(markPageReady, 300));
              timers.push(
                setTimeout(() => {
                  setScrollLocked(false);
                  setPhase("done");
                }, 1300)
              );
            }, 350)
          );
        },
      });
    });

    return () => {
      cancelled = true;
      toNinety.stop();
      timers.forEach(clearTimeout);
      setScrollLocked(false);
    };
  }, [progress]);

  if (phase === "done") return null;

  const closing = phase === "closing";

  return (
    <div
      className={`af7-loader ${closing ? "is-closing" : ""}`}
      aria-live="polite"
      aria-label="Loading AF7"
    >
      <motion.div
        className="af7-loader__panel af7-loader__panel--top"
        animate={closing ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 1.1, ease: split, delay: 0.1 }}
      />
      <motion.div
        className="af7-loader__panel af7-loader__panel--bottom"
        animate={closing ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 1.1, ease: split, delay: 0.1 }}
      />

      <motion.div
        className="af7-loader__content"
        animate={closing ? { opacity: 0, scale: 0.98 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease }}
      >
        <div className="af7-loader__top">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Zipper Manufacturing &amp; Garment Accessories
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            Lahore · Pakistan
          </motion.span>
        </div>

        <div className="af7-loader__center">
          <motion.div
            className="af7-loader__logo"
            initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
            animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease }}
          >
            <Image
              src="/logos/af7logofornavybg.svg"
              alt="AF7"
              width={220}
              height={76}
              preload
            />
          </motion.div>

          <motion.div
            className="af7-zip"
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            aria-hidden="true"
          >
            <motion.div className="af7-zip__layer af7-zip__layer--closed" style={{ clipPath: closedClip }}>
              <span className="af7-zip__tape af7-zip__tape--top" />
              <span className="af7-zip__teeth af7-zip__teeth--top" />
              <span className="af7-zip__teeth af7-zip__teeth--bottom" />
              <span className="af7-zip__tape af7-zip__tape--bottom" />
            </motion.div>

            <motion.div className="af7-zip__layer af7-zip__layer--open" style={{ clipPath: openClip }}>
              <span className="af7-zip__tape af7-zip__tape--top" />
              <span className="af7-zip__teeth af7-zip__teeth--top" />
              <span className="af7-zip__teeth af7-zip__teeth--bottom" />
              <span className="af7-zip__tape af7-zip__tape--bottom" />
            </motion.div>

            <motion.div className="af7-zip__slider" style={{ left: sliderLeft }}>
              <svg viewBox="0 0 40 64" width="30" height="48">
                <defs>
                  <linearGradient id="af7-silver" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f4f6f8" />
                    <stop offset="0.45" stopColor="#bcc6cc" />
                    <stop offset="1" stopColor="#7d8793" />
                  </linearGradient>
                </defs>
                <path d="M6 4h28a4 4 0 0 1 4 4v14l-8 8H10l-8-8V8a4 4 0 0 1 4-4z" fill="url(#af7-silver)" />
                <rect x="13" y="26" width="14" height="34" rx="7" fill="url(#af7-silver)" />
                <rect x="17" y="40" width="6" height="14" rx="3" fill="#243146" opacity="0.55" />
              </svg>
            </motion.div>
          </motion.div>

          <motion.p
            className="af7-loader__tagline"
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.32em" }}
            transition={{ duration: 1.4, delay: 0.5, ease }}
          >
            Precision in Every Detail
          </motion.p>
        </div>

        <div className="af7-loader__bottom">
          <span className="af7-loader__status">
            {count < 100 ? "Loading experience" : "Ready"}
          </span>
          <span className="af7-loader__count">
            <span>{String(count).padStart(3, "0")}</span>
            <small>%</small>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
