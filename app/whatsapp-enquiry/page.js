import Link from "next/link";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappEnquiry as w } from "@/data/company";
import { whatsapp } from "@/data/navigation";
import "../profile.css";
import "./whatsapp.css";

export const metadata = {
  title: "Enquire on WhatsApp",
  description:
    "Start your product enquiry with AF7 on WhatsApp Business. Share your zipper or accessory requirements and discuss suitable specifications with our team in Lahore, Pakistan.",
};

const templateLines = ["Product type:", "Size:", "Finish/Colour:", "Quantity:", "Application:"];

export default function WhatsAppEnquiryPage() {
  return (
    <main className="pf-page wa-page">
      <section className="pf-intro">
        <div className="pf-container">
          <Reveal className="pf-topline" y={16}>
            <span>
              <strong>07</strong>Enquire on WhatsApp
            </span>
            <span>AF7 · WhatsApp Business</span>
          </Reveal>

          <div className="pf-intro-grid">
            <div>
              <Reveal as="span" className="pf-eyebrow" y={12}>
                {w.subtitle}
              </Reveal>
              <SplitText
                as="h1"
                lines={["Start Your Product", "Enquiry on WhatsApp."]}
                accent={[1]}
                animateOnMount
                delay={0.2}
              />
            </div>

            <Reveal className="pf-intro-copy" delay={0.4}>
              <p>{w.intro}</p>
              <div className="pf-actions">
                <WhatsAppButton label={w.primaryLabel} />
              </div>
              <p className="wa-hours">Business hours: {whatsapp.hours}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pf-section pf-section-mist" aria-labelledby="how-title">
        <div className="pf-container">
          <div className="pf-head">
            <div>
              <Reveal as="span" className="section-eyebrow" y={12}>
                How It Works
              </Reveal>
              <SplitText
                id="how-title"
                as="h2"
                className="pf-heading"
                lines={["Four steps from", "chat to dispatch."]}
                accent={[1]}
              />
            </div>
            <Reveal as="p" delay={0.2}>
              One click opens a WhatsApp Business chat with the AF7 team. From
              there, we take your requirement through to order confirmation.
            </Reveal>
          </div>

          <Stagger className="pf-steps" stagger={0.08}>
            {w.steps.map((step, index) => (
              <StaggerItem className="pf-step" key={step.title} y={30}>
                <span className="pf-step-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pf-section" aria-labelledby="details-title">
        <div className="pf-container pf-split">
          <div>
            <Reveal as="span" className="section-eyebrow" y={12}>
              Details That Help Us Assist You Faster
            </Reveal>
            <SplitText
              id="details-title"
              as="h2"
              className="pf-heading"
              lines={["Share the details,", "we confirm the options."]}
              accent={[1]}
            />

            <Reveal className="wa-chat" delay={0.2}>
              <div className="wa-chat-head">
                <span className="wa-chat-avatar">
                  <WhatsAppIcon size={18} />
                </span>
                <div>
                  <strong>AF7</strong>
                  <span>WhatsApp Business · {whatsapp.number}</span>
                </div>
              </div>
              <div className="wa-chat-body">
                <div className="wa-bubble">
                  <p>Hello AF7, I would like to enquire about your zippers/accessories.</p>
                  {templateLines.map((line) => (
                    <p key={line} className="wa-bubble-line">
                      {line}
                    </p>
                  ))}
                  <span className="wa-bubble-meta">Pre-filled for you</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Stagger as="ul" className="pf-list" stagger={0.06}>
            {w.details.map((detail, index) => (
              <StaggerItem as="li" key={detail} y={16}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {detail}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pf-section pf-section-dark" aria-labelledby="why-title">
        <div className="pf-container pf-split">
          <div>
            <Reveal as="span" className="section-eyebrow" y={12}>
              Who Can Enquire
            </Reveal>
            <SplitText
              as="h2"
              className="pf-heading"
              lines={["Built for garment", "and accessory businesses."]}
              accent={[1]}
            />
            <Reveal as="p" className="wa-who" delay={0.15}>
              {w.who}
            </Reveal>
          </div>

          <div>
            <Reveal as="span" className="section-eyebrow" y={12}>
              <span id="why-title">Why Enquire With AF7</span>
            </Reveal>
            <Stagger as="ul" className="wa-why" stagger={0.08}>
              {w.why.map((item, index) => (
                <StaggerItem as="li" key={item} y={16}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="pf-closing">
        <div className="pf-container">
          <Reveal as="span" className="section-eyebrow" y={12}>
            AF7 · Precision in Every Detail
          </Reveal>
          <SplitText
            as="h2"
            lines={["Precision begins with", "the right conversation."]}
            accent={[1]}
          />
          <Reveal as="p" delay={0.2}>
            Message AF7 on WhatsApp today. {w.response}
          </Reveal>
          <Reveal className="pf-actions" delay={0.3}>
            <WhatsAppButton label={w.alternativeLabels[0]} />
            <Link href="/contact" className="af7-button af7-button-dark">
              <span>Contact Page</span>
              <span className="af7-button-arrow" aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
