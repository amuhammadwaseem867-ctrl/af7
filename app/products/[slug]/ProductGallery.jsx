"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { setScrollLocked } from "@/components/motion/SmoothScroll";

const ease = [0.16, 1, 0.3, 1];

export default function ProductGallery({ images, title, isSlider }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [direction, setDirection] = useState(1);
  const isOpen = openIndex !== null;

  const show = useCallback(
    (step) => {
      setDirection(step);
      setOpenIndex((current) => (current + step + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") show(1);
      if (event.key === "ArrowLeft") show(-1);
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("overlay-open");
    setScrollLocked(true);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("overlay-open");
      setScrollLocked(false);
    };
  }, [isOpen, show]);

  return (
    <>
      <div className={`product-catalog-grid ${isSlider ? "product-catalog-grid-slider" : ""}`}>
        {images.map((image, index) => (
          <motion.figure
            className={`product-catalog-item ${index === 0 ? "product-catalog-item-featured" : ""}`}
            key={image}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: (index % 2) * 0.1, ease }}
          >
            <button
              type="button"
              className="product-catalog-open"
              onClick={() => {
                setDirection(1);
                setOpenIndex(index);
              }}
              aria-label={`Open ${title} image ${index + 1} of ${images.length}`}
              data-cursor="Zoom"
            >
              <div className="product-catalog-image">
                <div className="product-catalog-zoom">
                  <Image
                    src={image}
                    alt={`${title} ${index + 1}`}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
              </div>
            </button>

            <figcaption>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>AF7 · {title}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} gallery`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            data-lenis-prevent
          >
            <button
              type="button"
              className="lightbox-backdrop"
              aria-label="Close gallery"
              onClick={() => setOpenIndex(null)}
            />

            <div className="lightbox-top">
              <span>
                {String(openIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>
              <span>{title}</span>
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setOpenIndex(null)}
                aria-label="Close gallery"
                autoFocus
              >
                Close ✕
              </button>
            </div>

            <div className="lightbox-stage">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={images[openIndex]}
                  className="lightbox-image"
                  custom={direction}
                  variants={{
                    enter: (dir) => ({ x: `${dir * 30}%`, opacity: 0, scale: 0.96 }),
                    center: { x: 0, opacity: 1, scale: 1 },
                    exit: (dir) => ({ x: `${dir * -30}%`, opacity: 0, scale: 0.96 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.7, ease }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) show(1);
                    else if (info.offset.x > 80) show(-1);
                  }}
                >
                  <Image
                    src={images[openIndex]}
                    alt={`${title} ${openIndex + 1}`}
                    fill
                    sizes="90vw"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              <button type="button" className="lightbox-nav lightbox-prev" onClick={() => show(-1)} aria-label="Previous image">
                ←
              </button>
              <button type="button" className="lightbox-nav lightbox-next" onClick={() => show(1)} aria-label="Next image">
                →
              </button>
            </div>

            <div className="lightbox-thumbs">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={`lightbox-thumb ${index === openIndex ? "is-active" : ""}`}
                  onClick={() => {
                    setDirection(index > openIndex ? 1 : -1);
                    setOpenIndex(index);
                  }}
                  aria-label={`Show image ${index + 1}`}
                >
                  <Image src={image} alt="" fill sizes="80px" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
