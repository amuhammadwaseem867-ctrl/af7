"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { finishes } from "@/data/company";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function Finishes() {
  const [active, setActive] = useState(0);
  const current = finishes.items[active];

  return (
    <section className="home-finishes" aria-labelledby="finishes-title">
      <div className="home-container">
        <div className="home-section-head">
          <div>
            <Reveal as="span" className="section-eyebrow" y={16}>
              Finishes · {String(finishes.items.length).padStart(2, "0")}
            </Reveal>
            <SplitText
              id="finishes-title"
              as="h2"
              lines={["Finishing that", "completes the product."]}
              accent={[1]}
              className="home-heading"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="home-section-copy">{finishes.intro}</p>
          </Reveal>
        </div>

        <div className="home-finishes-layout">
          <Reveal className="home-finish-preview" y={50}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={current.name}
                className="home-finish-preview-swatch"
                style={{ background: current.swatch }}
                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                animate={{ clipPath: "circle(75% at 50% 50%)" }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              />
            </AnimatePresence>
            <div className="home-finish-preview-sheen" aria-hidden="true" />
            <div className="home-finish-preview-label">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <span aria-live="polite">{current.name}</span>
            </div>
          </Reveal>

          <div>
            <Stagger className="home-finish-grid" stagger={0.05}>
              {finishes.items.map((finish, index) => (
                <StaggerItem key={finish.name} y={24}>
                  <button
                    type="button"
                    className={`home-finish ${index === active ? "is-active" : ""}`}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    aria-pressed={index === active}
                  >
                    <span className="home-finish-swatch" style={{ background: finish.swatch }} />
                    <span className="home-finish-name">{finish.name}</span>
                  </button>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal as="p" className="home-finish-note" delay={0.2}>
              {finishes.note}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
