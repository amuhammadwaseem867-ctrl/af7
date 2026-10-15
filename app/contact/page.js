import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { contactCopy, brand } from "@/data/company";
import { contact } from "@/data/navigation";
import "./contact.css";

export const metadata = {
  title: "Contact AF7",
  description:
    "Contact AF7 in Lahore, Pakistan for product enquiries, samples, specifications, customization or manufacturing requirements.",
};

const contactChannels = [
  {
    number: "01",
    label: "PHONE",
    title: "+92 313 4710325",
    href: "tel:+923134710325",
    action: "Call AF7",
  },
  {
    number: "02",
    label: "INSTAGRAM",
    title: "@af7trims",
    href: "https://www.instagram.com/af7trims?stkn=ZmVyNscHJrY2J1",
    action: "Open Instagram",
    external: true,
  },
  {
    number: "03",
    label: "FACEBOOK",
    title: "AF7 · Zipper Manufacturing",
    href: "https://www.facebook.com/profile.php?id=61584996430125&mibextid=wwXIfr",
    action: "Open Facebook",
    external: true,
  },
];

export default function ContactPage() {
  return (

      <main className="contact-page">
        <section className="contact-intro">
          <div className="contact-container">
            <Reveal className="contact-topline" y={16}>
              <div className="contact-topline-left">
                <span className="contact-index">05</span>
                <span>Contact</span>
              </div>

              <span className="contact-topline-right">
                AF7 · ZIPPER MANUFACTURING
              </span>
            </Reveal>

            <div className="contact-intro-grid">
              <div className="contact-intro-heading">
                <span className="contact-eyebrow">
                  AF7 / CONTACT
                </span>

                <SplitText
                  as="h1"
                  lines={["Let's Create the", "Right Connection."]}
                  accent={[1]}
                  animateOnMount
                  delay={0.2}
                />
              </div>

              <Reveal className="contact-intro-copy" delay={0.4}>
                <p>{contactCopy.text}</p>

                <div className="contact-intro-meta">
                  <span>{brand.descriptor.toUpperCase()}</span>
                  <span>LAHORE · PAKISTAN</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="contact-channels">
          <div className="contact-container">
            <div className="contact-section-heading">
              <div>
                <span className="contact-section-label">
                  DIRECT CONTACT
                </span>

                <SplitText as="h2" lines={["Choose how", "to connect."]} accent={[1]} />
              </div>

              <p>
                Reach AF7 directly through our phone and social channels.
              </p>
            </div>

            <Stagger className="contact-channel-list" stagger={0.1}>
              {contactChannels.map((channel) => (
                <StaggerItem key={channel.number}>
                <a
                  key={channel.number}
                  href={channel.href}
                  className="contact-channel"
                  target={channel.external ? "_blank" : undefined}
                  rel={
                    channel.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div className="contact-channel-number">
                    {channel.number}
                  </div>

                  <div className="contact-channel-content">
                    <span className="contact-channel-label">
                      {channel.label}
                    </span>

                    <strong>{channel.title}</strong>
                  </div>

                  <div className="contact-channel-action">
                    <span>{channel.action}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="contact-main">
          <div className="contact-container">
            <div className="contact-main-grid">
              <Reveal className="contact-details">
                <span className="contact-section-label">
                  GET IN TOUCH
                </span>

                <SplitText as="h2" lines={["Start a", "conversation."]} accent={[1]} />

                <div className="contact-detail-list">
                  <div className="contact-detail">
                    <span className="contact-detail-label">
                      PHONE
                    </span>

                    <a href="tel:+923134710325">
                      +92 313 4710325
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <div className="contact-detail">
                    <span className="contact-detail-label">
                      INSTAGRAM
                    </span>

                    <a
                      href="https://www.instagram.com/af7trims?stkn=ZmVyNscHJrY2J1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @af7trims
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <div className="contact-detail">
                    <span className="contact-detail-label">
                      FACEBOOK
                    </span>

                    <a
                      href="https://www.facebook.com/profile.php?id=61584996430125&mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AF7 · Zipper Manufacturing
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <div className="contact-detail">
                    <span className="contact-detail-label">
                      LOCATION
                    </span>

                    <span className="contact-detail-value">
                      33B, Punjab Small Industries Corporation,
                      <br />
                      Sunder II, Lahore, Pakistan
                    </span>
                  </div>
                </div>
              </Reveal>

              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>

        <section className="contact-location">
          <div className="contact-container">
            <div className="contact-location-grid">
              <div>
                <span className="contact-section-label">
                  AF7 / LOCATION
                </span>

                <SplitText as="h2" lines={["Lahore,", "Pakistan."]} accent={[1]} />
              </div>

              <div className="contact-location-copy">
                <span className="contact-location-label">
                  FACTORY ADDRESS
                </span>

                <p>
                  33B, Punjab Small Industries Corporation,
                  <br />
                  Sunder II, Lahore, Pakistan
                </p>

                <a
                  className="contact-map-link"
                  href={contact.map}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Open Location</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <div className="contact-location-meta">
                  <span>AF7</span>
                  <span>ZIPPER MANUFACTURING</span>
                  <span>LAHORE · PAKISTAN</span>
                </div>
              </div>
            </div>

            <Reveal className="contact-map" y={60}>
              <iframe
                title="AF7 factory location on Google Maps"
                src="https://www.google.com/maps?q=Punjab+Small+Industries+Corporation+Sunder+II+Lahore+Pakistan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>

        <section className="contact-closing">
          <div className="contact-container">
            <div className="contact-closing-top">
              <span>AF7 / ZIPPER MANUFACTURING</span>
              <span>LAHORE · PAKISTAN</span>
            </div>

            <div className="contact-closing-content">
              <span>AF7 · {brand.descriptor.toUpperCase()}</span>

              <SplitText as="h2" lines={["Precision in", "every detail."]} />

              <Link
                href="/products"
                className="contact-closing-link"
              >
                <span>Explore Product Range</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}