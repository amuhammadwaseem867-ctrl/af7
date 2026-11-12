"use client";

import { useCallback, useState } from "react";
import Image from "@/components/BaseImage";
import { AnimatePresence, motion } from "framer-motion";
import Lightbox from "@/components/Lightbox";

const ease = [0.16, 1, 0.3, 1];

export default function ProductGallery({ images, title, isSlider }) {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;
  const closeLightbox = useCallback(() => setOpenIndex(null), []);

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
              onClick={() => setOpenIndex(index)}
              aria-label={`Open ${title} image ${index + 1} of ${images.length}`}
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
          <Lightbox
            images={images.map((src, index) => ({ src, alt: `${title} ${index + 1}` }))}
            title={title}
            index={openIndex}
            onClose={closeLightbox}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
