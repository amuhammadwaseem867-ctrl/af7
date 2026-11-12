import FitImage from "@/components/FitImage";
import Link from "next/link";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/ImageReveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import FactoryGallery from "@/components/FactoryGallery";
import { factoryPhotos } from "@/data/factory";
import Finishes from "@/components/home/Finishes";
import {
  manufacturing,
  technology,
  packaging,
  philosophy,
} from "@/data/company";
import "@/components/home/Home.css";
import "../profile.css";

export const metadata = {
  title: "Manufacturing",
  description:
    "AF7's Lahore factory brings key zipper manufacturing stages under one roof — tape making, teeth manufacturing, plating, lacquering, waxing, automated assembly, inspection and dispatch.",
};

const gallery = [
  { src: "/images/factory-v2/assembly-machines.webp", alt: "Row of AF7 zipper assembly machines" },
  { src: "/images/factory-v2/forming-machine.webp", alt: "AF7 production machinery" },
];

export default function ManufacturingPage() {
  return (
    <main className="pf-page">
      <section className="pf-intro">
        <div className="pf-container">
          <Reveal className="pf-topline" y={16}>
            <span>
              <strong>03</strong>Manufacturing
            </span>
            <span>AF7 · Lahore Factory</span>
          </Reveal>

          <div className="pf-intro-grid">
            <div>
              <Reveal as="span" className="pf-eyebrow" y={12}>
                In-house manufacturing process
              </Reveal>
              <SplitText
                as="h1"
                lines={["From Tape to", "Finished Zipper."]}
                accent={[1]}
                animateOnMount
                delay={0.2}
              />
            </div>

            <Reveal className="pf-intro-copy" delay={0.4}>
              <p>{manufacturing.intro}</p>
              <div className="pf-actions">
                <Link href="/contact" className="af7-button af7-button-dark">
                  <span>Send a Product Enquiry</span>
                  <span className="af7-button-arrow" aria-hidden="true">↗</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pf-feature">
        <ImageReveal fill>
          <FitImage
            src="/images/factory-v2/assembly-line.webp"
            alt="AF7 automated zipper assembly line"
            fill
            preload
            sizes="100vw"
          />
        </ImageReveal>
      </div>

      <section className="pf-section" aria-labelledby="process-title">
        <div className="pf-container">
          <div className="pf-head">
            <div>
              <Reveal as="span" className="section-eyebrow" y={12}>
                {String(manufacturing.steps.length).padStart(2, "0")} production stages
              </Reveal>
              <SplitText
                id="process-title"
                as="h2"
                className="pf-heading"
                lines={["Under one roof,", "stage by stage."]}
                accent={[1]}
              />
            </div>
            <Reveal as="p" delay={0.2}>
              Each stage is coordinated in-house, so construction, finishing and
              assembly stay under direct oversight from component preparation
              to the finished order.
            </Reveal>
          </div>

          <Stagger className="pf-steps" stagger={0.07}>
            {manufacturing.steps.map((step, index) => (
              <StaggerItem as="article" className="pf-step" key={step.title}>
                <span className="pf-step-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal as="p" className="pf-note">
            {manufacturing.note}
          </Reveal>
        </div>
      </section>

      <section className="pf-section pf-section-dark" aria-labelledby="technology-title">
        <div className="pf-container">
          <div className="pf-split">
            <div>
              <Reveal as="span" className="section-eyebrow" y={12}>
                Machinery &amp; Technology
              </Reveal>
              <SplitText
                id="technology-title"
                as="h2"
                className="pf-heading"
                lines={["Modern Equipment.", "Greater Production Control."]}
                accent={[1]}
              />
            </div>
            <Reveal className="pf-split-copy" delay={0.15}>
              <p>{technology.text}</p>
              <p>{technology.closing}</p>
            </Reveal>
          </div>

          <Stagger className="pf-gallery" stagger={0.12}>
            {gallery.map((item) => (
              <StaggerItem className="pf-gallery-item" key={item.src} y={60}>
                <ImageReveal fill>
                  <FitImage src={item.src} alt={item.alt} fill sizes="(max-width: 600px) 100vw, 50vw" />
                </ImageReveal>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pf-section" aria-labelledby="factory-title">
        <div className="pf-container">
          <div className="pf-head">
            <div>
              <Reveal as="span" className="section-eyebrow" y={12}>
                Inside the factory · {String(factoryPhotos.length).padStart(2, "0")} photos
              </Reveal>
              <SplitText
                id="factory-title"
                as="h2"
                className="pf-heading"
                lines={["A closer look", "at AF7, Lahore."]}
                accent={[1]}
              />
            </div>
            <Reveal as="p" delay={0.2}>
              Tape weaving, automated assembly, slider feeding and the
              machinery behind every AF7 zipper. Select any photo to view it
              full screen.
            </Reveal>
          </div>
          <FactoryGallery photos={factoryPhotos} />
        </div>
      </section>

      <Finishes />

      <section className="pf-section pf-section-mist" aria-labelledby="packaging-title">
        <div className="pf-container pf-split">
          <div>
            <Reveal as="span" className="section-eyebrow" y={12}>
              {packaging.title}
            </Reveal>
            <SplitText
              id="packaging-title"
              as="h2"
              className="pf-heading"
              lines={["Prepared with care,", "dispatched with clarity."]}
              accent={[1]}
            />
          </div>
          <Reveal className="pf-split-copy" delay={0.15}>
            <p>{packaging.text}</p>
            <p>{packaging.closing}</p>
          </Reveal>
        </div>
      </section>

      <section className="pf-closing">
        <div className="pf-container">
          <Reveal as="span" className="section-eyebrow" y={12}>
            Our Manufacturing Philosophy
          </Reveal>
          <SplitText
            as="h2"
            lines={["Precision Is More", "Than a Promise."]}
            accent={[1]}
          />
          <Reveal as="p" delay={0.2}>
            {philosophy.text} {philosophy.closing}
          </Reveal>
          <Reveal className="pf-actions" delay={0.3}>
            <Link href="/contact" className="af7-button af7-button-dark">
              <span>Send a Product Enquiry</span>
              <span className="af7-button-arrow" aria-hidden="true">↗</span>
            </Link>
            <Link href="/products" className="af7-button af7-button-dark">
              <span>Explore Our Products</span>
              <span className="af7-button-arrow" aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
