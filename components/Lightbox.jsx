"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { setScrollLocked } from "@/components/motion/SmoothScroll";
import "./Lightbox.css";

const ease = [0.16, 1, 0.3, 1];

/**
 * Full-screen image viewer: arrow keys, swipe, thumbnails and Escape.
 * `images` is a list of { src, alt, caption? }.
 */
export default function Lightbox({ images, title, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const [direction, setDirection] = useState(1);

  const show = useCallback(
    (step) => {
      setDirection(step);
      setCurrent((value) => (value + step + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
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
  }, [show, onClose]);

  const image = images[current];

  return (
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
        onClick={onClose}
      />

      <div className="lightbox-top">
        <span>
          {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <span>{title}</span>
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close gallery"
          autoFocus
        >
          Close ✕
        </button>
      </div>

      <div className="lightbox-stage">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={image.src}
            className="lightbox-image"
            custom={direction}
            variants={{
              enter: (dir) => ({ x: `${dir * 30}%`, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir) => ({ x: `${dir * -30}%`, opacity: 0 }),
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
            <Image src={image.src} alt={image.alt} fill sizes="90vw" draggable={false} />
          </motion.div>
        </AnimatePresence>

        <button type="button" className="lightbox-nav lightbox-prev" onClick={() => show(-1)} aria-label="Previous image">
          ←
        </button>
        <button type="button" className="lightbox-nav lightbox-next" onClick={() => show(1)} aria-label="Next image">
          →
        </button>
      </div>

      {image.caption ? <p className="lightbox-caption">{image.caption}</p> : null}

      <div className="lightbox-thumbs">
        {images.map((item, itemIndex) => (
          <button
            type="button"
            key={item.src}
            className={`lightbox-thumb ${itemIndex === current ? "is-active" : ""}`}
            onClick={() => {
              setDirection(itemIndex > current ? 1 : -1);
              setCurrent(itemIndex);
            }}
            aria-label={`Show image ${itemIndex + 1}`}
          >
            <Image src={item.src} alt="" fill sizes="80px" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
