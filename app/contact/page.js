import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import "./contact.css";

export const metadata = {
  title: "Contact AF7",
  description:
    "Contact AF7 Apparel Fastener in Lahore, Pakistan for zipper and fastening component inquiries.",
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
    title: "AF7 · Apparel Fastener",
    href: "https://www.facebook.com/profile.php?id=61584996430125&mibextid=wwXIfr",
    action: "Open Facebook",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-intro">
          <div className="contact-container">
            <div className="contact-topline">
              <div className="contact-topline-left">
                <span className="contact-index">05</span>
                <span>Contact</span>
              </div>

              <span className="contact-topline-right">
                AF7 · APPAREL FASTENER
              </span>
            </div>

            <div className="contact-intro-grid">
              <div className="contact-intro-heading">
                <span className="contact-eyebrow">
                  AF7 / CONTACT
                </span>

                <h1>
                  Let&apos;s
                  <br />
                  <span>Connect.</span>
                </h1>
              </div>

              <div className="contact-intro-copy">
                <p>
                  Looking for the right fastening solution, requesting
                  samples or discussing a new requirement? Connect with
                  AF7 and start the conversation.
                </p>

                <div className="contact-intro-meta">
                  <span>APPAREL FASTENER</span>
                  <span>LAHORE · PAKISTAN</span>
                </div>
              </div>
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

                <h2>
                  Choose how
                  <br />
                  <span>to connect.</span>
                </h2>
              </div>

              <p>
                Reach AF7 directly through our phone and social channels.
              </p>
            </div>

            <div className="contact-channel-list">
              {contactChannels.map((channel) => (
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
              ))}
            </div>
          </div>
        </section>

        <section className="contact-main">
          <div className="contact-container">
            <div className="contact-main-grid">
              <div className="contact-details">
                <span className="contact-section-label">
                  GET IN TOUCH
                </span>

                <h2>
                  Start a
                  <br />
                  <span>conversation.</span>
                </h2>

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
                      AF7 · Apparel Fastener
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <div className="contact-detail">
                    <span className="contact-detail-label">
                      LOCATION
                    </span>

                    <span className="contact-detail-value">
                      33b Punjab Small Industries Corporation
                      <br />
                      Sunder II Lahore Pakistan
                    </span>
                  </div>
                </div>
              </div>

              <ContactForm />
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

                <h2>
                  Lahore,
                  <br />
                  <span>Pakistan.</span>
                </h2>
              </div>

              <div className="contact-location-copy">
                <span className="contact-location-label">
                  ADDRESS
                </span>

                <p>
                  33b Punjab Small Industries Corporation
                  <br />
                  Sunder II Lahore Pakistan
                </p>

                <a
                  className="contact-map-link"
                  href="https://www.google.com/maps/search/?api=1&query=33b%20Punjab%20Small%20Industries%20Corporation%20Sunder%20II%20Lahore%20Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Open Location</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <div className="contact-location-meta">
                  <span>AF7</span>
                  <span>APPAREL FASTENER</span>
                  <span>LAHORE · PAKISTAN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-closing">
          <div className="contact-container">
            <div className="contact-closing-top">
              <span>AF7 / APPAREL FASTENER</span>
              <span>LAHORE · PAKISTAN</span>
            </div>

            <div className="contact-closing-content">
              <span>PRODUCTS · APPLICATIONS · QUALITY</span>

              <h2>
                Built for the
                <br />
                products you create.
              </h2>

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

      <Footer />
    </>
  );
}