"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { applications } from "@/data/applications";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";

const ease = [0.16, 1, 0.3, 1];

export default function ApplicationsAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section className="home-applications" aria-labelledby="applications-title">
      <div className="home-container">
        <div className="home-section-head">
          <div>
            <Reveal as="span" className="section-eyebrow" y={16}>
              Applications
            </Reveal>
            <SplitText
            id="applications-title"
              as="h2"
              lines={["Where components", "become product."]}
              accent={[1]}
              className="home-heading"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="home-section-copy">
              Hover or tap an application to see where AF7 fastening components
              do their work.
            </p>
          </Reveal>
        </div>

        <Reveal className="home-accordion" y={60}>
          {applications.map((application, index) => {
            const isActive = index === active;
            return (
              <div
                key={application.slug}
                className={`home-accordion-panel ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => setActive(index)}
              >
                <Image
                  src={application.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="home-accordion-image"
                />
                <div className="home-accordion-shade" />

                <button
                  type="button"
                  className="home-accordion-label"
                  onClick={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  aria-expanded={isActive}
                >
                  <span>{application.number}</span>
                  <span>{application.title}</span>
                </button>

                <AnimatePresence>
                  {isActive ? (
                    <motion.div
                      className="home-accordion-content"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.25, ease } }}
                      exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    >
                      <span className="home-accordion-eyebrow">{application.hero.eyebrow}</span>
                      <h3>{application.title}</h3>
                      <p>{application.description}</p>
                      <Link
                        href={`/applications/${application.slug}`}
                        className="home-accordion-link"
                      >
                        <span>Explore {application.title}</span>
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
