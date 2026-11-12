"use client";

import { useState } from "react";
import { finishes } from "@/data/company";
import Image from "@/components/BaseImage";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const DEFAULT_FINISH = Math.max(
  0,
  finishes.items.findIndex((finish) => finish.slug === "golden-brass"),
);

/**
 * One zipper photo, built from two stacked layers: the tape (one image per
 * tape colour) and the metal teeth, slider and stops (one image per finish).
 * Every layer is rendered up front and only the selected pair is visible,
 * so switching is instant and the zipper never moves. Hidden layers load
 * eagerly too: lazy loading would skip them, since they are invisible.
 */
export default function Finishes() {
  const [finishIndex, setFinishIndex] = useState(DEFAULT_FINISH);
  const [tapeIndex, setTapeIndex] = useState(0);
  const finish = finishes.items[finishIndex];
  const tape = finishes.tapes[tapeIndex];

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
            <div
              className="home-finish-zipper"
              role="img"
              aria-label={`Open-end metal zipper with ${finish.name} finish on ${tape.name} tape`}
            >
              {finishes.tapes.map((item, index) => (
                <Image
                  key={item.slug}
                  src={`/images/finishes/zipper-v3/tape-${item.slug}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 92vw, 560px"
                  loading="eager"
                  className={`home-finish-layer ${index === tapeIndex ? "is-active" : ""}`}
                />
              ))}
              {finishes.items.map((item, index) => (
                <Image
                  key={item.slug}
                  src={`/images/finishes/zipper-v3/metal-${item.slug}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 92vw, 560px"
                  loading="eager"
                  className={`home-finish-layer ${index === finishIndex ? "is-active" : ""}`}
                />
              ))}
            </div>
            <div className="home-finish-preview-label" aria-live="polite">
              <span>{finish.name}</span>
              <span>{tape.name} tape</span>
            </div>
          </Reveal>

          <div>
            <Reveal as="h3" className="home-finish-group-title" y={16}>
              Metal finish
            </Reveal>
            <Stagger className="home-finish-grid" stagger={0.05}>
              {finishes.items.map((item, index) => (
                <StaggerItem key={item.slug} y={24}>
                  <button
                    type="button"
                    className={`home-finish ${index === finishIndex ? "is-active" : ""}`}
                    onClick={() => setFinishIndex(index)}
                    aria-pressed={index === finishIndex}
                  >
                    <span className="home-finish-swatch" style={{ background: item.swatch }} />
                    <span className="home-finish-name">{item.name}</span>
                  </button>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal as="h3" className="home-finish-group-title home-finish-group-title-tape" y={16}>
              Tape colour
            </Reveal>
            <Reveal className="home-tape-grid" delay={0.1}>
              {finishes.tapes.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  className={`home-tape ${index === tapeIndex ? "is-active" : ""}`}
                  onClick={() => setTapeIndex(index)}
                  aria-pressed={index === tapeIndex}
                  aria-label={`${item.name} tape`}
                  title={item.name}
                >
                  <span className="home-tape-swatch" style={{ background: item.color }} />
                </button>
              ))}
            </Reveal>

            <Reveal as="p" className="home-finish-note" delay={0.2}>
              {finishes.note}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
