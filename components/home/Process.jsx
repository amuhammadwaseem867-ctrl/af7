"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { manufacturing } from "@/data/company";

export default function Process() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="home-process" aria-labelledby="process-title">
      <div className="home-container home-process-grid">
        <div className="home-process-intro">
          <Reveal as="span" className="section-eyebrow" y={16}>
            Manufacturing
          </Reveal>
          <SplitText
            id="process-title"
            as="h2"
            lines={["From tape to", "finished zipper."]}
            accent={[1]}
            className="home-heading"
          />
          <Reveal delay={0.2}>
            <p className="home-section-copy">
              {manufacturing.intro}
            </p>
          </Reveal>
        </div>

        <ol className="home-process-list" ref={listRef}>
          <span className="home-process-rail" aria-hidden="true">
            <motion.span style={{ scaleY }} />
          </span>
          {manufacturing.steps.map((step, index) => (
            <Reveal as="li" className="home-process-step" key={step.title} x={30} y={0}>
              <span className="home-process-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
