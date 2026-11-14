"use client";

import { useState } from "react";
import Image from "@/components/BaseImage";
import { AnimatePresence, motion } from "framer-motion";
import SplitText from "@/components/motion/SplitText";

const ease = [0.16, 1, 0.3, 1];

export default function TapeColours({ tapes, title, isVislon }) {
  const [active, setActive] = useState(0);
  const tape = tapes[active];

  return (
    <section className="product-tapes" aria-labelledby="product-tapes-title">
      <div className="product-detail-container">
        <div className="product-tapes-grid">
          <div className="product-tapes-visual">
            <AnimatePresence initial={false}>
              <motion.div
                key={tape.image}
                className="product-tapes-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                <Image
                  src={tape.image}
                  alt={`AF7 ${title}, ${tape.name.toLowerCase()} tape`}
                  fill
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="product-tapes-copy">
            <span className="product-detail-section-label">TAPE COLOUR</span>
            <SplitText
              id="product-tapes-title"
              as="h2"
              lines={isVislon ? ["One zipper,", "many colours."] : ["Same finish,", "your tape colour."]}
              accent={[1]}
            />

            <p className="product-tapes-lead">
              {isVislon
                ? "Pick a colour to see the zipper in it. Tape and teeth come in the same colour."
                : "Pick a colour to see this zipper with a different tape. The teeth, slider and finish stay the same."}
            </p>

            <div className="product-tapes-current">
              <span>SELECTED</span>
              <strong>{tape.name}</strong>
            </div>

            <div className="product-tapes-list" role="radiogroup" aria-label="Tape colour">
              {tapes.map((option, index) => (
                <button
                  key={option.name}
                  type="button"
                  role="radio"
                  aria-checked={index === active}
                  aria-label={option.name}
                  title={option.name}
                  className={index === active ? "is-active" : ""}
                  onClick={() => setActive(index)}
                >
                  <span style={{ background: option.color }} />
                </button>
              ))}
            </div>

            <p className="product-tapes-note">
              {isVislon
                ? "Shown in the colours photographed. Other tape and teeth colours are available on request."
                : "Colours are a guide. Exact shades are matched to your sample on request."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
