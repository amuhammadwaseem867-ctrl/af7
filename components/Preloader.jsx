"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { setScrollLocked } from "@/components/motion/SmoothScroll";
import { markPageReady } from "@/components/motion/usePageReady";
import "./Preloader.css";

const SEEN_KEY = "af7-preloader-seen";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}

    if (seen) {
      markPageReady();
      // The inline script in the layout already hid the loader before paint.
      const frame = requestAnimationFrame(() => setVisible(false));
      return () => cancelAnimationFrame(frame);
    }

    let value = 0;
    setScrollLocked(true);

    const interval = setInterval(() => {
      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setComplete(true);
          setTimeout(markPageReady, 450);

          try {
            window.sessionStorage.setItem(SEEN_KEY, "1");
          } catch {}

          setTimeout(() => {
            setScrollLocked(false);
            setVisible(false);
          }, 1000);
        }, 300);

        return;
      }

      let step;

      if (value < 55) {
        step = Math.random() * 7 + 3;
      } else if (value < 85) {
        step = Math.random() * 4 + 2;
      } else {
        step = Math.random() * 2.5 + 1;
      }

      value = Math.min(value + step, 100);

      setProgress(Math.round(value));
    }, 70);

    return () => {
      clearInterval(interval);
      setScrollLocked(false);
    };
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="af7-loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.35,
            delay: 0.15,
            ease: "easeOut",
          },
        }}
      >
        <div className="af7-loader__bg" />

        <div className="af7-loader__watermark" aria-hidden="true">
          AF7
        </div>

        <div className="af7-loader__center">
          <motion.div
            className="af7-loader__logo"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Image
              src="/logos/af7logofornavybg.svg"
              alt="AF7 Apparel Fastener"
              width={260}
              height={90}
              preload
            />
          </motion.div>

          <motion.div
            className="af7-loader__bar"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="af7-loader__track">
              <motion.div
                className="af7-loader__fill"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              />

              <motion.div
                className="af7-loader__shine"
                animate={{
                  x: ["-150%", "600%"],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <span className="af7-loader__percent">
                {progress}%
              </span>
            </div>
          </motion.div>
        </div>

        <div className="af7-loader__bottom">
          <span>AF7 / APPAREL FASTENER</span>
          <span>LAHORE · PAKISTAN</span>
          <span>2026</span>
        </div>

        <AnimatePresence>
          {complete && (
            <motion.div
              className="af7-loader__complete"
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 70,
              }}
              transition={{
                duration: 1.05,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}