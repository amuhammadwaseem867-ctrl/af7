import FitImage from "@/components/FitImage";
import Link from "next/link";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/ImageReveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { customization, finishes } from "@/data/company";
import "../profile.css";

export const metadata = {
  title: "Customization",
  description:
    "Discuss zipper type and size, material, finish, tape colour matching, configuration and packing requirements with AF7 before production.",
};

const enquiryDetails = [
  "Zipper size",
  "Material",
  "Tape colour",
  "Finish",
  "Construction",
  "Quantity",
  "Intended application",
];

export default function CustomizationPage() {
  return (
    <main className="pf-page">
      <section className="pf-intro">
        <div className="pf-container">
          <Reveal className="pf-topline" y={16}>
            <span>
              <strong>05</strong>Customization
            </span>
            <span>AF7 · Product Development</span>
          </Reveal>

          <div className="pf-intro-grid">
            <div>
              <Reveal as="span" className="pf-eyebrow" y={12}>
                Customization &amp; product development
              </Reveal>
              <SplitText
                as="h1"
                lines={["Built Around", "Your Requirements."]}
                accent={[1]}
                animateOnMount
                delay={0.2}
              />
            </div>

            <Reveal className="pf-intro-copy" delay={0.4}>
              <p>{customization.intro}</p>
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
            src="/images/factory-v2/brass-sliders.webp"
            alt="Brass sliders in a feeder bowl at AF7"
            position="center 82%"
            fill
            preload
            sizes="100vw"
          />
        </ImageReveal>
      </div>

      <section className="pf-section" aria-labelledby="options-title">
        <div className="pf-container pf-split">
          <div>
            <Reveal as="span" className="section-eyebrow" y={12}>
              What we can discuss
            </Reveal>
            <SplitText
              id="options-title"
              as="h2"
              className="pf-heading"
              lines={["Your specification,", "point by point."]}
              accent={[1]}
            />
            <Reveal as="p" className="pf-note" delay={0.2}>
              Options are subject to the product type and manufacturing
              capabilities.
            </Reveal>
          </div>

          <Stagger as="ul" className="pf-list" stagger={0.07}>
            {customization.options.map((option, index) => (
              <StaggerItem as="li" key={option} y={18}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {option}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pf-section pf-section-dark" aria-labelledby="enquiry-title">
        <div className="pf-container pf-split">
          <div>
            <Reveal as="span" className="section-eyebrow" y={12}>
              Starting an enquiry
            </Reveal>
            <SplitText
              id="enquiry-title"
              as="h2"
              className="pf-heading"
              lines={["What to share", "with our team."]}
              accent={[1]}
            />
          </div>
          <div>
            <Reveal as="p" delay={0.15}>
              {finishes.enquiry}
            </Reveal>
            <Stagger as="ul" className="pf-chips" stagger={0.04}>
              {enquiryDetails.map((detail) => (
                <StaggerItem as="li" key={detail} y={12}>
                  {detail}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="pf-closing">
        <div className="pf-container">
          <Reveal as="span" className="section-eyebrow" y={12}>
            Your requirements. Our manufacturing expertise.
          </Reveal>
          <SplitText
            as="h2"
            lines={["Let's Build", "Something Precise."]}
            accent={[1]}
          />
          <Reveal as="p" delay={0.2}>
            {customization.closing}
          </Reveal>
          <Reveal className="pf-actions" delay={0.3}>
            <Link href="/contact" className="af7-button af7-button-dark">
              <span>Send a Product Enquiry</span>
              <span className="af7-button-arrow" aria-hidden="true">↗</span>
            </Link>
            <Link href="/manufacturing" className="af7-button af7-button-dark">
              <span>Discover Our Manufacturing</span>
              <span className="af7-button-arrow" aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
