"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { applications } from "@/data/applications";
import Magnetic from "@/components/motion/Magnetic";
import usePageReady from "@/components/motion/usePageReady";
import "./Hero.css";

const SLIDE_DURATION = 6000;
const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const sectionRef = useRef(null);
  const ready = usePageReady();
  const reduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);

  const slide = applications[activeSlide];

  const goTo = useCallback((index) => {
    setActiveSlide((index + applications.length) % applications.length);
    setCycle((current) => current + 1);
  }, []);

  // Auto-advance; restarts whenever the user picks a slide.
  useEffect(() => {
    if (paused || !ready) return;
    const timer = window.setTimeout(() => goTo(activeSlide + 1), SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [activeSlide, paused, ready, cycle, goTo]);

  useEffect(() => {
    const handleVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Scroll-linked depth: image sinks, copy lifts and fades.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Pointer parallax on the imagery.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 60, damping: 20 });

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const { innerWidth, innerHeight } = window;
    pointerX.set((event.clientX / innerWidth - 0.5) * -24);
    pointerY.set((event.clientY / innerHeight - 0.5) * -16);
  };

  const showIntro = ready || reduceMotion;

  return (
    <section
      ref={sectionRef}
      className="hero"
      aria-label="AF7 Apparel Fastener"
      onPointerMove={handlePointerMove}
    >
      <motion.div
        className="hero-image-slider"
        style={reduceMotion ? undefined : { y: imageY }}
        aria-hidden="true"
      >
        <motion.div
          className="hero-image-pointer"
          style={{ x: smoothX, y: smoothY }}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={slide.slug}
              className="hero-image-layer"
              initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ opacity: 1, transition: { duration: 1.4 } }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            >
              <motion.div
                className="hero-image-zoom"
                initial={{ scale: 1.18 }}
                animate={{ scale: 1.04 }}
                transition={{ duration: SLIDE_DURATION / 1000 + 1.6, ease: "linear" }}
              >
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  preload={activeSlide === 0}
                  sizes="100vw"
                  className="hero-image"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <motion.div
        className="hero-container"
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="hero-topline"
          initial={{ opacity: 0, y: -10 }}
          animate={showIntro ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, delay: 0.6, ease }}
        >
          <span>ZIPPER MANUFACTURING &amp; GARMENT ACCESSORIES</span>
          <span>LAHORE · PAKISTAN</span>
        </motion.div>

        <div className="hero-content">
          <AnimatePresence mode="wait">
            {showIntro ? (
              <motion.div key={slide.slug} className="hero-copy" initial="hidden" animate="visible" exit="exit">
                <motion.div
                  className="hero-label"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
                    exit: { opacity: 0, transition: { duration: 0.3 } },
                  }}
                >
                  <span className="hero-label-line" />
                  <span>{slide.hero.eyebrow}</span>
                </motion.div>

                <h1 aria-label={`${slide.hero.title} ${slide.hero.accent}`}>
                  {[slide.hero.title, slide.hero.accent].map((line, lineIndex) => (
                    <span
                      className={`hero-line ${lineIndex === 1 ? "hero-line-accent" : ""}`}
                      key={line}
                      aria-hidden="true"
                    >
                      <motion.span
                        className="hero-line-inner"
                        variants={{
                          hidden: { y: "115%", rotate: 3 },
                          visible: {
                            y: "0%",
                            rotate: 0,
                            transition: { duration: 1.1, delay: 0.1 + lineIndex * 0.1, ease },
                          },
                          exit: {
                            y: "-115%",
                            transition: { duration: 0.5, delay: lineIndex * 0.05, ease: [0.76, 0, 0.24, 1] },
                          },
                        }}
                      >
                        {line}
                      </motion.span>
                    </span>
                  ))}
                </h1>

                <motion.p
                  className="hero-description"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.35, ease } },
                    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
                  }}
                >
                  {slide.hero.description}
                </motion.p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={showIntro ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, delay: 0.7, ease }}
          >
            <Magnetic>
              <Link href="/products" className="af7-button af7-button-solid">
                <span>Explore Products</span>
                <span className="af7-button-arrow" aria-hidden="true">↗</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/contact" className="af7-button af7-button-light">
                <span>Start an Inquiry</span>
                <span className="af7-button-arrow" aria-hidden="true">↗</span>
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={showIntro ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, delay: 0.9, ease }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="hero-tabs" role="tablist" aria-label="Applications">
            {applications.map((application, index) => {
              const isActive = index === activeSlide;
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  key={application.slug}
                  className={`hero-tab ${isActive ? "is-active" : ""}`}
                  onClick={() => goTo(index)}
                >
                  <span className="hero-tab-meta">
                    <span>{application.number}</span>
                    <span>{application.title}</span>
                  </span>
                  <span className="hero-tab-track">
                    {isActive ? (
                      <motion.span
                        key={`${application.slug}-${cycle}`}
                        className="hero-tab-fill"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: paused || !ready ? 0.0001 : 1 }}
                        transition={{
                          duration: paused || !ready ? 0.3 : SLIDE_DURATION / 1000,
                          ease: "linear",
                        }}
                      />
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hero-scroll-cue" aria-hidden="true">
            <span>Scroll</span>
            <span className="hero-scroll-cue-line" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
