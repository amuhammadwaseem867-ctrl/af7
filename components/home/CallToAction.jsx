import Link from "next/link";
import Marquee from "@/components/motion/Marquee";
import Magnetic from "@/components/motion/Magnetic";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { contactCopy } from "@/data/company";

export default function CallToAction() {
  return (
    <section className="home-cta" aria-labelledby="cta-title">
      <Marquee
        className="home-cta-marquee"
        items={["Precision", "In every detail", "Precision", "In every detail"]}
        baseVelocity={-1.6}
      />

      <div className="home-container home-cta-inner">
        <SplitText
          id="cta-title"
          as="h2"
          lines={["Let's create the", "right connection."]}
          accent={[1]}
          className="home-cta-heading"
        />
        <Reveal className="home-cta-actions" delay={0.3}>
          <p>
            {contactCopy.text}
          </p>
          <div className="home-cta-buttons">
            <Magnetic>
              <Link href="/contact" className="af7-button af7-button-solid">
                <span>Start an Inquiry</span>
                <span className="af7-button-arrow" aria-hidden="true">↗</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <a href="tel:+923134710325" className="af7-button af7-button-light">
                <span>+92 313 4710325</span>
                <span className="af7-button-arrow" aria-hidden="true">↗</span>
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
