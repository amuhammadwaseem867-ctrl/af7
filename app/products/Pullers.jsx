"use client";

import Image from "@/components/BaseImage";
import { motion } from "framer-motion";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { pullers, pullersIntro } from "@/data/products";

const ease = [0.16, 1, 0.3, 1];

export default function Pullers() {
  return (
    <section className="products-pullers" id="pullers" aria-labelledby="pullers-title">
      <div className="products-container">
        <div className="products-pullers-head">
          <div>
            <Reveal as="span" className="section-eyebrow" y={12}>
              Zipper Pullers
            </Reveal>
            <SplitText
              id="pullers-title"
              as="h2"
              lines={["Pullers for", "#4.5 and #5 zippers."]}
              accent={[1]}
            />
          </div>
          <Reveal as="p" className="products-pullers-intro" delay={0.2}>
            {pullersIntro}
          </Reveal>
        </div>

        <ul className="products-pullers-grid">
          {pullers.map((puller, index) => (
            <motion.li
              key={puller.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: (index % 4) * 0.08, ease }}
            >
              <figure className="products-puller">
                <div className="products-puller-image">
                  <Image
                    src={puller.image}
                    alt={`${puller.finish} zipper puller`}
                    fill
                    sizes="(max-width: 600px) 50vw, (max-width: 1100px) 33vw, 25vw"
                  />
                </div>
                <figcaption>
                  <span>{puller.code}</span>
                  <strong>{puller.finish}</strong>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
