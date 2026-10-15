"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { products } from "@/data/products";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";

/**
 * Pinned section: vertical scroll drives a horizontal track of products.
 * On narrow screens it degrades to a native swipeable row.
 */
export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [pinned, setPinned] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const enablePin =
        window.innerWidth > 900 &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setPinned(enablePin);
      if (trackRef.current) {
        setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(rawX, { stiffness: 120, damping: 30, mass: 0.4 });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className={`home-showcase ${pinned ? "is-pinned" : ""}`}
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
      aria-labelledby="showcase-title"
    >
      <div className="home-showcase-sticky">
        <div className="home-showcase-head">
          <div>
            <Reveal as="span" className="section-eyebrow" y={16}>
              Product range · {String(products.length).padStart(2, "0")}
            </Reveal>
            <SplitText
            id="showcase-title"
              as="h2"
              lines={["Components that", "move with you."]}
              accent={[1]}
              className="home-heading"
            />
          </div>
          <Reveal className="home-showcase-aside" delay={0.2}>
            <p>
              Metal, aluminium, nylon and Vislon zippers with matching sliders,
              supported by tag strings and tipping solutions.
            </p>
            <Link href="/products" className="home-text-link">
              <span>View all products</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>

        <motion.div
          ref={trackRef}
          className="home-showcase-track"
          style={pinned ? { x } : undefined}
        >
          {products.map((product, index) => (
            <motion.article
              key={product.slug}
              className="home-product-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: Math.min(index, 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/products/${product.slug}`}
                className="home-product-link"
              >
                <div className="home-product-image">
                  <Image
                    src={product.cover}
                    alt={`AF7 ${product.title}`}
                    fill
                    sizes="(max-width: 900px) 80vw, 30vw"
                  />
                  <span className="home-product-material">{product.material}</span>
                </div>
                <div className="home-product-body">
                  <span className="home-product-number">{product.number}</span>
                  <h3>{product.title}</h3>
                  <span className="home-product-arrow" aria-hidden="true">↗</span>
                </div>
                <p>{product.summary}</p>
              </Link>
            </motion.article>
          ))}

          <Link href="/products" className="home-product-more">
            <span>All products</span>
            <span className="home-product-more-arrow" aria-hidden="true">→</span>
          </Link>
        </motion.div>

        {pinned ? (
          <div className="home-showcase-progress" aria-hidden="true">
            <motion.span style={{ scaleX: progress }} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
