import Image from "next/image";
import Link from "next/link";
import ImageReveal from "./ImageReveal";
import Reveal from "./motion/Reveal";
import SplitText from "./motion/SplitText";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { about } from "@/data/company";
import "./BrandIntro.css";

const companyImages = [
  {
    src: "/images/about/factory.webp",
    alt: "AF7 manufacturing facility",
    label: "Manufacturing",
    number: "01",
  },
  {
    src: "/images/about/machinery.webp",
    alt: "AF7 manufacturing machinery",
    label: "Machinery",
    number: "02",
  },
  {
    src: "/images/about/production.webp",
    alt: "AF7 production process",
    label: "Production",
    number: "03",
  },
];

export default function BrandIntro() {
  return (
    <section className="brand-intro">
      <div className="brand-intro-container">
        <Reveal className="brand-intro-header" y={20}>
          <div className="brand-intro-header-left">
            <span className="brand-intro-index">02</span>
            <span>About AF7</span>
          </div>

          <span className="brand-intro-header-right">
            Apparel Fastener · Lahore
          </span>
        </Reveal>

        <div className="brand-intro-introduction">
          <div className="brand-intro-title">
            <span className="brand-intro-eyebrow">
              Zipper Manufacturing
            </span>

            <SplitText as="h2" lines={["Precision.", "Technology.", "Reliability."]} accent={[1, 2]} />
          </div>

          <Reveal className="brand-intro-statement" delay={0.15}>
            <p className="brand-intro-lead">{about.intro}</p>

            <p>{about.facility}</p>

            <Link href="/about" className="brand-intro-link">
              <span>Discover AF7</span>
              <span className="brand-intro-link-arrow">↗</span>
            </Link>
          </Reveal>
        </div>

        <div className="brand-intro-feature">
          <div className="brand-intro-feature-image">
            <ImageReveal fill direction="left">
              <Image
                src="/images/about/5.webp"
                alt="AF7 Apparel Fastener"
                width={2200}
                height={1400}
                sizes="(max-width: 700px) 100vw, 68vw"
              />
            </ImageReveal>
          </div>

          <Reveal className="brand-intro-feature-copy" delay={0.3}>
            <span className="brand-intro-feature-label">
              Made In Lahore
            </span>

            <SplitText as="h3" lines={["Made For The", "World."]} accent={[1]} />

            <p>{about.focus}</p>

            <div className="brand-intro-feature-meta">
              <span>AF7 / APPAREL FASTENER</span>
              <span>LAHORE · PAKISTAN</span>
            </div>
          </Reveal>
        </div>

        <Stagger className="brand-intro-gallery" stagger={0.12}>
          {companyImages.map((image) => (
            <StaggerItem
              as="figure"
              className="brand-intro-gallery-item"
              key={image.src}
              y={70}
            >
              <div className="brand-intro-gallery-image">
                <ImageReveal fill zoom={0.18}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={1100}
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </ImageReveal>
              </div>

              <figcaption className="brand-intro-gallery-caption">
                <span>{image.number}</span>
                <span>{image.label}</span>
              </figcaption>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="brand-intro-bottom">
          <div className="brand-intro-bottom-line" />

          <p>
            <strong>Our philosophy is simple:</strong> {about.philosophy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}