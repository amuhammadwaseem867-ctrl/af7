import FitImage from "@/components/FitImage";
import Link from "next/link";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/ImageReveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import {
  about,
  technology,
  vision,
  mission,
  values,
  philosophy,
  brand,
} from "@/data/company";
import "./about.css";

export const metadata = {
  title: "About AF7",
  description:
    "AF7 is a specialized zipper manufacturing brand in Lahore, Pakistan, making metal, aluminium, nylon and Vislon zippers with integrated in-house production.",
};

const companyImages = [
  {
    image: "/images/factory-v2/assembly-line.webp",
    alt: "AF7 automated zipper assembly line",
    label: "AF7 / AUTOMATED ASSEMBLY",
  },
  {
    image: "/images/factory-v2/tape-looms.webp",
    alt: "Tape looms at the AF7 factory",
    label: "TAPE / PRODUCTION",
  },
  {
    image: "/images/factory-v2/chain-machine.webp",
    alt: "AF7 zipper chain machine",
    label: "MANUFACTURING / MACHINERY",
  },
  {
    image: "/images/factory-v2/assembly-row.webp",
    alt: "AF7 assembly area",
    label: "ASSEMBLY / LAHORE",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-intro">
        <div className="about-container">
          <Reveal className="about-topline" y={16}>
            <div className="about-topline-left">
              <span className="about-index">01</span>
              <span>About AF7</span>
            </div>
            <span className="about-topline-right">AF7 · ZIPPER MANUFACTURING</span>
          </Reveal>

          <div className="about-intro-grid">
            <div className="about-intro-heading">
              <Reveal as="span" className="about-eyebrow" y={12}>
                COMPANY PROFILE / LAHORE · PAKISTAN
              </Reveal>
              <SplitText
                as="h1"
                lines={["Precision in", "Every Detail."]}
                accent={[1]}
                animateOnMount
                delay={0.2}
              />
            </div>

            <Reveal className="about-intro-copy" delay={0.4}>
              <p>{about.overview}</p>
              <div className="about-intro-meta">
                <span>{brand.descriptor.toUpperCase()}</span>
                <span>LAHORE · PAKISTAN</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-feature">
        <div className="about-container">
          <div className="about-feature-image">
            <ImageReveal fill>
              <FitImage
                src={companyImages[0].image}
                alt={companyImages[0].alt}
                fill
                preload
                sizes="100vw"
              />
            </ImageReveal>
            <div className="about-image-meta">
              <span>AF7</span>
              <span>01 / 04</span>
            </div>
            <span className="about-image-label">{companyImages[0].label}</span>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-container">
          <div className="about-story-grid">
            <div className="about-story-heading">
              <Reveal as="span" className="about-section-label" y={10}>
                ABOUT AF7
              </Reveal>
              <SplitText
                as="h2"
                lines={["Precision.", "Technology.", "Reliability."]}
                accent={[1, 2]}
              />
            </div>

            <Reveal className="about-story-copy" delay={0.15}>
              <p>{about.operation}</p>
              <p>{about.range}</p>
              <p>{about.details}</p>
              <p className="about-philosophy">
                <strong>{about.promise}</strong>
              </p>

              <div className="about-story-meta">
                <div>
                  <span>FOCUS</span>
                  <strong>ZIPPERS &amp; ACCESSORIES</strong>
                </div>
                <div>
                  <span>LOCATION</span>
                  <strong>LAHORE · PAKISTAN</strong>
                </div>
                <div>
                  <span>PRODUCTION</span>
                  <strong>INTEGRATED IN-HOUSE</strong>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-production">
        <div className="about-container">
          <div className="about-production-heading">
            <div>
              <Reveal as="span" className="about-section-label" y={10}>
                MACHINERY &amp; TECHNOLOGY
              </Reveal>
              <SplitText
                as="h2"
                lines={["Modern equipment.", "Greater production control."]}
                accent={[1]}
              />
            </div>
            <Reveal delay={0.2}>
              <p>{technology.text}</p>
              <Link href="/manufacturing" className="about-positioning-link">
                <span>Discover Our Manufacturing</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          </div>

          <Stagger className="about-production-grid" stagger={0.12}>
            {companyImages.slice(1).map((item, index) => (
              <StaggerItem as="figure" className="about-production-item" key={item.image} y={60}>
                <div className="about-production-image">
                  <ImageReveal fill>
                    <FitImage
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                  </ImageReveal>
                </div>
                <figcaption>
                  <span>{String(index + 2).padStart(2, "0")}</span>
                  <span>{item.label}</span>
                </figcaption>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="about-process" aria-labelledby="about-values-title">
        <div className="about-container">
          <div className="about-process-head">
            <div>
              <Reveal as="span" className="about-section-label" y={10}>
                OUR VALUES
              </Reveal>
              <SplitText
                id="about-values-title"
                as="h2"
                lines={["What guides", "our work."]}
                accent={[1]}
              />
            </div>
            <Reveal as="p" delay={0.2}>
              Six principles shape how AF7 manufactures, communicates and
              delivers, from the first production stage to the finished order.
            </Reveal>
          </div>

          <Stagger className="about-process-grid about-values-grid" stagger={0.07}>
            {values.map((value, index) => (
              <StaggerItem as="article" className="about-process-step" key={value.title}>
                <span className="about-process-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="about-positioning">
        <div className="about-container">
          <Stagger className="about-vm-grid" stagger={0.15}>
            <StaggerItem as="article" className="about-vm-card">
              <span className="about-section-label">OUR VISION</span>
              <p>{vision}</p>
            </StaggerItem>
            <StaggerItem as="article" className="about-vm-card about-vm-card-dark">
              <span className="about-section-label">OUR MISSION</span>
              <p>{mission}</p>
            </StaggerItem>
          </Stagger>

          <div className="about-positioning-grid">
            <div>
              <Reveal as="span" className="about-section-label" y={10}>
                OUR MANUFACTURING PHILOSOPHY
              </Reveal>
              <SplitText
                as="h2"
                lines={["Precision is more", "than a promise."]}
                accent={[1]}
              />
            </div>

            <Reveal className="about-positioning-copy" delay={0.15}>
              <p>{philosophy.text}</p>
              <p>{philosophy.closing}</p>
              <Link href="/products" className="about-positioning-link">
                <span>Explore Our Products</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div className="about-container">
          <div className="about-closing-top">
            <span>AF7 / COMPANY PROFILE</span>
            <span>LAHORE · PAKISTAN</span>
          </div>

          <div className="about-closing-content">
            <span>AF7</span>
            <SplitText as="h2" lines={["Precision in", "every detail."]} />
          </div>
        </div>
      </section>
    </main>
  );
}
