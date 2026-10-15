import { whyAf7 } from "@/data/company";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function WhyAf7() {
  return (
    <section className="home-why" aria-labelledby="why-title">
      <div className="home-container">
        <div className="home-section-head">
          <div>
            <Reveal as="span" className="section-eyebrow" y={16}>
              Why AF7
            </Reveal>
            <SplitText
              id="why-title"
              as="h2"
              lines={["One manufacturing partner.", "Multiple solutions."]}
              accent={[1]}
              className="home-heading"
            />
          </div>
        </div>

        <Stagger className="home-why-grid" stagger={0.08}>
          {whyAf7.reasons.map((reason, index) => (
            <StaggerItem as="article" className="home-why-card" key={reason.title}>
              <span className="home-why-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
