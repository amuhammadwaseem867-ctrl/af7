import Image from "next/image";
import Link from "next/link";
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
          <h2 className="footer-statement">
            Precision in every
            <span>connection.</span>
          </h2>

          <p className="footer-supporting">
            Fastening components developed for products where detail,
            construction and finish come together.
          </p>
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
              33b Punjab Small Industries Corporation
              <br />
              Sunder II Lahore Pakistan
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
              priority
            />
          </Link>

          <p className="footer-logo-tagline">
            Precision in every connection.
          </p>
        </div>

        <div className="footer-bar">
          <span>© 2026 Apparel Fastener</span>

          <span className="footer-bar-center">
            Lahore · Pakistan
          </span>

          <div className="footer-bar-links">
            <span className="footer-privacy">Privacy</span>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}