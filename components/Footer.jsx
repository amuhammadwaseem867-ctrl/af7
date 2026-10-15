import Image from "next/image";
import Link from "next/link";
import SplitText from "./motion/SplitText";
import Reveal from "./motion/Reveal";
import FooterClock from "./FooterClock";
import { brand } from "@/data/company";
import { contact } from "@/data/navigation";
import "./Footer.css";

const footerLinks = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "About", href: "/about" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-branding">
          <SplitText
            as="h2"
            className="footer-statement"
            lines={["Precision in", "every detail."]}
            accent={[1]}
          />

          <Reveal as="p" className="footer-supporting" delay={0.2}>
            {brand.descriptor}. Metal, aluminium, nylon and Vislon zippers,
            tag strings and tippings — manufactured in Lahore, Pakistan.
          </Reveal>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="footer-nav-item"
            >
              <span className="footer-nav-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="footer-nav-label">
                {link.label}
              </span>

              <span className="footer-nav-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </nav>

        <div className="footer-meta">
          <div className="footer-meta-block">
            <span className="footer-label">CONTACT</span>

            <div className="footer-meta-list">
              <a href="tel:+923134710325">
                +92 313 4710325
              </a>

              <a
                href="https://www.instagram.com/af7trims?stkn=ZmVyNscHJrY2J1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @af7trims
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61584996430125&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                AF7 · Apparel Fastener
              </a>
            </div>
          </div>

          <div className="footer-meta-block">
            <span className="footer-label">LOCATION</span>

            <p className="footer-address">
              33B, Punjab Small Industries Corporation,
              <br />
              Sunder II, Lahore, Pakistan
            </p>

            <a
              className="footer-map-link"
              href="https://www.google.com/maps/search/?api=1&query=33b%20Punjab%20Small%20Industries%20Corporation%20Sunder%20II%20Lahore%20Pakistan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open Location</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-brand-lockup">
          <Link
            href="/"
            className="footer-logo-lockup"
            aria-label="AF7 Apparel Fastener home"
          >
            <Image
              src="/logos/af7logofornavybg.svg"
              alt="AF7 Apparel Fastener"
              width={420}
              height={118}
            />
          </Link>

          <p className="footer-logo-tagline">
            {brand.tagline}
          </p>
        </div>

        <div className="footer-bar">
          <span>© 2026 Apparel Fastener</span>

          <FooterClock />

          <div className="footer-bar-links">
            <Link href="/contact">Contact</Link>
            <a href={contact.phoneHref}>Call</a>
          </div>
        </div>
      </div>
    </footer>
  );
}