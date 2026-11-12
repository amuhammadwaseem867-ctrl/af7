"use client";

import { useCallback, useState } from "react";
import Image from "@/components/BaseImage";
import BrandMark, { brandMarkFor } from "@/components/BrandMark";
import { AnimatePresence, motion } from "framer-motion";
import Lightbox from "./Lightbox";
import "./FactoryGallery.css";

const ease = [0.16, 1, 0.3, 1];

/**
 * Masonry gallery: every photo keeps its natural proportions (never
 * cropped) and opens in the full-screen lightbox.
 */
export default function FactoryGallery({ photos, title = "Inside the AF7 factory" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <>
      <div className="factory-gallery">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.src}
            className="factory-gallery-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: (index % 3) * 0.08, ease }}
          >
            <button
              type="button"
              className="factory-gallery-open"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open photo: ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
              {brandMarkFor(photo.src) && <BrandMark {...brandMarkFor(photo.src)} />}
              <span className="factory-gallery-zoom" aria-hidden="true">
                View ↗
              </span>
            </button>
            <figcaption>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{photo.caption}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null ? (
          <Lightbox images={photos} title={title} index={openIndex} onClose={close} />
        ) : null}
      </AnimatePresence>
    </>
  );
}
