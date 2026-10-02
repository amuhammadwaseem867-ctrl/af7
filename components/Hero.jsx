"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Hero.css";

const applicationSlides = [
  {
    src: "/images/applications/apparel.webp",
    label: "APPAREL",
    eyebrow: "PRECISION FOR APPAREL",
    title: "Built for",
    accent: "every layer.",
    description:
      "Reliable fastening components designed to complement modern apparel construction, finishing and everyday performance.",
  },
  {
    src: "/images/applications/bags.webp",
    label: "BAGS",
    eyebrow: "ENGINEERED FOR BAGS",
    title: "Made to",
    accent: "carry more.",
    description:
      "Durable zipper and fastening solutions designed for bags where function, movement and refined finishing come together.",
  },
  {
    src: "/images/applications/denim.webp",
    label: "DENIM",
    eyebrow: "MADE FOR DENIM",
    title: "Strength meets",
    accent: "character.",
    description:
      "Fastening components developed for denim products where robust construction and distinctive finishing matter.",
  },
  {
    src: "/images/applications/footwear.webp",
    label: "FOOTWEAR",
    eyebrow: "PRECISION FOR FOOTWEAR",
    title: "Designed to",
    accent: "move.",
    description:
      "Functional fastening components created for footwear applications that demand dependable performance and refined detail.",
  },
  {
    src: "/images/applications/jackets.webp",
    label: "JACKETS",
    eyebrow: "ENGINEERED FOR OUTERWEAR",
    title: "Ready for",
    accent: "every element.",
    description:
      "Zippers and fastening components designed for jackets and outerwear where construction, protection and appearance work together.",
  },
  {
    src: "/images/applications/sportswear.webp",
    label: "SPORTSWEAR",
    eyebrow: "BUILT FOR PERFORMANCE",
    title: "Precision in",
    accent: "motion.",
    description:
      "Fastening solutions developed for sportswear where smooth operation, dependable construction and clean design come together.",
  },
];

const SLIDE_DURATION = 4500;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) =>
        current === applicationSlides.length - 1 ? 0 : current + 1
      );
    }, SLIDE_DURATION);

    return () => window.clearInterval(interval);
  }, []);

  const slide = applicationSlides[activeSlide];

  return (
    <section className="hero" aria-label="AF7 Apparel Fastener">

      <div className="hero-image-slider" aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.src}
            className="hero-image-layer"
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                ease: "easeInOut",
              },
              scale: {
                duration: SLIDE_DURATION / 1000 + 0.3,
                ease: "linear",
              },
            }}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              className="hero-image"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-container">

        <motion.div
          className="hero-topline"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span>PRECISION FASTENING COMPONENTS</span>
          <span>LAHORE · PAKISTAN</span>
        </motion.div>

        <div className="hero-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -18,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="hero-label">
                <span className="hero-label-line" />
                <span>{slide.eyebrow}</span>
              </div>

              <h1>
                {slide.title}
                <br />
                <span>{slide.accent}</span>
              </h1>

              <p className="hero-description">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <Link
              href="/products"
              className="hero-button hero-button-primary"
            >
              <span>Explore Products</span>
              <span className="hero-button-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>

            <Link
              href="/contact"
              className="hero-button hero-button-secondary"
            >
              <span>Start an Inquiry</span>
              <span className="hero-button-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero-bottom"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
        >

          <div className="hero-meta">
            <span className="hero-meta-number">
              0{activeSlide + 1}
            </span>

            <span>{slide.label}</span>
          </div>

          <div className="hero-scroll">
            <div className="hero-current-application">
              <span className="hero-current-index">
                0{activeSlide + 1}
              </span>

              <span>{slide.label}</span>
            </div>

            <div
              className="hero-scroll-line"
              role="progressbar"
              aria-label={`Current application: ${slide.label}`}
              aria-valuemin="1"
              aria-valuemax={applicationSlides.length}
              aria-valuenow={activeSlide + 1}
            >
              <motion.span
                key={activeSlide}
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: SLIDE_DURATION / 1000,
                  ease: "linear",
                }}
              />
            </div>
          </div>

          <div className="hero-meta hero-meta-right">
            <span>APPAREL FASTENER</span>
            <span>06 APPLICATIONS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}