import Image from "next/image";
import Link from "next/link";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/ImageReveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { quality, finishes } from "@/data/company";
import "./quality.css";

export const metadata = {
  title: "Quality",
  description:
    "Quality in every stage: AF7 checks construction, teeth alignment, operation, finishing and conformity with agreed specifications through final inspection and packing.",
};

const qualityImages = [
  {
    image: "/images/quality/detail.webp",
    alt: "AF7 zipper component detail",
    label: "COMPONENT / DETAIL",
  },
  {
    image: "/images/quality/inspection.webp",
    alt: "AF7 quality inspection",
    label: "INSPECTION / CONTROL",
  },
  {
    image: "/images/quality/slider-check.webp",
    alt: "AF7 slider inspection",
    label: "SLIDER / INSPECTION",
  },
  {
    image: "/images/quality/zipper-check.webp",
    alt: "AF7 zipper inspection",
    label: "ZIPPER / INSPECTION",
  },
];

export default function QualityPage() {
  return (
    <main className="quality-page">
      <section className="quality-intro">
        <div className="quality-container">
          <Reveal className="quality-topline" y={16}>
            <div className="quality-topline-left">
              <span className="quality-index">04</span>
              <span>Quality</span>
            </div>
            <span className="quality-topline-right">AF7 · ZIPPER MANUFACTURING</span>
          </Reveal>

          <div className="quality-intro-grid">
            <div className="quality-intro-heading">
              <Reveal as="span" className="quality-eyebrow" y={12}>
                QUALITY / INSPECTION / CONSISTENCY
              </Reveal>
              <SplitText
                as="h1"
                lines={["Quality In", "Every Stage."]}
                accent={[1]}
                animateOnMount
                delay={0.2}
              />
            </div>

            <Reveal className="quality-intro-copy" delay={0.4}>
              <p>
                {quality.intro} From tape and teeth to finishing, assembly and
                final inspection, every stage contributes to the finished zipper.
              </p>
              <div className="quality-intro-meta">
                <span>AF7 / QUALITY</span>
                <span>LAHORE · PAKISTAN</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="quality-feature">
        <div className="quality-container">
          <div className="quality-feature-image">
            <ImageReveal fill zoom={0.15}>
              <Image
                src={qualityImages[0].image}
                alt={qualityImages[0].alt}
                fill
                preload
                sizes="100vw"
              />
            </ImageReveal>
            <div className="quality-image-meta">
              <span>AF7</span>
              <span>QUALITY / 01</span>
            </div>
            <span className="quality-image-label">{qualityImages[0].label}</span>
          </div>
        </div>
      </section>

      <section className="quality-approach">
        <div className="quality-container">
          <div className="quality-approach-grid">
            <div className="quality-approach-heading">
              <Reveal as="span" className="quality-section-label" y={10}>
                OUR QUALITY FOCUS
              </Reveal>
              <SplitText as="h2" lines={["Every detail", "has a role."]} accent={[1]} />
            </div>

            <div className="quality-approach-copy">
              <Reveal as="p">
                At AF7, quality is considered throughout the manufacturing
                process — not only at the end of it. Our quality focus includes:
              </Reveal>

              <Stagger className="quality-principles" stagger={0.08}>
                {quality.focus.map((item, index) => (
                  <StaggerItem className="quality-principle" key={item} y={20}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{item.toUpperCase()}</strong>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-inspection">
        <div className="quality-container">
          <div className="quality-inspection-heading">
            <div>
              <Reveal as="span" className="quality-section-label" y={10}>
                FINISHING &amp; QUALITY INSPECTION
              </Reveal>
              <SplitText
                as="h2"
                lines={["Looking closer", "at every component."]}
                accent={[1]}
              />
            </div>
            <Reveal as="p" delay={0.2}>
              Inspection checks construction, appearance, finishing, operation
              and conformity with agreed requirements before products are
              packed and prepared for delivery.
            </Reveal>
          </div>

          <Stagger className="quality-inspection-grid" stagger={0.12}>
            {qualityImages.slice(1).map((item, index) => (
              <StaggerItem as="figure" className="quality-inspection-item" key={item.image} y={60}>
                <div className="quality-inspection-image">
                  <ImageReveal fill zoom={0.18}>
                    <Image
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

      <section className="quality-finishes" aria-labelledby="quality-finishes-title">
        <div className="quality-container">
          <div className="quality-inspection-heading">
            <div>
              <Reveal as="span" className="quality-section-label" y={10}>
                CONTROLLED FINISHING
              </Reveal>
              <SplitText
                id="quality-finishes-title"
                as="h2"
                lines={["Finishing that", "completes the product."]}
                accent={[1]}
              />
            </div>
            <Reveal as="p" delay={0.2}>
              Plating, lacquering and waxing are integrated into production for
              applicable products. {finishes.intro}
            </Reveal>
          </div>

          <Stagger className="quality-finish-grid" stagger={0.05}>
            {finishes.items.map((finish) => (
              <StaggerItem className="quality-finish" key={finish.name} y={20}>
                <span className="quality-finish-swatch" style={{ background: finish.swatch }} />
                <span>{finish.name}</span>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="quality-finish-note">{finishes.note}</p>
        </div>
      </section>

      <section className="quality-system">
        <div className="quality-container">
          <div className="quality-system-grid">
            <div>
              <Reveal as="span" className="quality-section-label" y={10}>
                OUR OBJECTIVE
              </Reveal>
              <SplitText as="h2" lines={["Built around", "consistency."]} accent={[1]} />
            </div>

            <Reveal className="quality-system-copy" delay={0.15}>
              <p className="quality-objective">{quality.objective}</p>
              <div className="quality-system-meta">
                <div>
                  <span>FOCUS</span>
                  <strong>CONSTRUCTION &amp; FINISH</strong>
                </div>
                <div>
                  <span>PROCESS</span>
                  <strong>INSPECTION &amp; PACKING</strong>
                </div>
                <div>
                  <span>STANDARD</span>
                  <strong>AGREED SPECIFICATIONS</strong>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="quality-closing">
        <div className="quality-container">
          <div className="quality-closing-top">
            <span>AF7 / QUALITY</span>
            <span>LAHORE · PAKISTAN</span>
          </div>

          <div className="quality-closing-content">
            <span>AF7</span>
            <SplitText as="h2" lines={["Precision in", "every detail."]} />
            <Link href="/products" className="quality-closing-link">
              <span>Explore Product Range</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
