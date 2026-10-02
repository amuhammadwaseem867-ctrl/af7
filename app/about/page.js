import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./about.css";

export const metadata = {
  title: "About AF7",
  description:
    "Learn about AF7 Apparel Fastener, a premium zipper and fastening components brand from Lahore, Pakistan.",
};

const companyImages = [
  {
    image: "/images/about/5.webp",
    alt: "AF7 Apparel Fastener",
    label: "AF7 / APPAREL FASTENER",
  },
  {
    image: "/images/about/factory.webp",
    alt: "AF7 production facility",
    label: "PRODUCTION / LAHORE",
  },
  {
    image: "/images/about/machinery.webp",
    alt: "AF7 manufacturing machinery",
    label: "MANUFACTURING / MACHINERY",
  },
  {
    image: "/images/about/production.webp",
    alt: "AF7 production process",
    label: "PRODUCTION / PROCESS",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about-page">
        <section className="about-intro">
          <div className="about-container">
            <div className="about-topline">
              <div className="about-topline-left">
                <span className="about-index">03</span>
                <span>About AF7</span>
              </div>

              <span className="about-topline-right">
                AF7 · APPAREL FASTENER
              </span>
            </div>

            <div className="about-intro-grid">
              <div className="about-intro-heading">
                <span className="about-eyebrow">
                  COMPANY PROFILE / LAHORE · PAKISTAN
                </span>

                <h1>
                  The Detail
                  <br />
                  <span>That Connects.</span>
                </h1>
              </div>

              <div className="about-intro-copy">
                <p>
                  AF7 is an apparel fastening brand focused on the components
                  that bring garments, bags and related products together.
                  From zipper systems to slider components, our work sits at
                  the intersection of construction, function and finished
                  appearance.
                </p>

                <div className="about-intro-meta">
                  <span>APPAREL FASTENER</span>
                  <span>LAHORE · PAKISTAN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-feature">
          <div className="about-container">
            <div className="about-feature-image">
              <Image
                src={companyImages[0].image}
                alt={companyImages[0].alt}
                fill
                priority
                sizes="(max-width: 700px) 100vw, 100vw"
              />

              <div className="about-image-meta">
                <span>AF7</span>
                <span>01 / 04</span>
              </div>

              <span className="about-image-label">
                {companyImages[0].label}
              </span>
            </div>
          </div>
        </section>

        <section className="about-story">
          <div className="about-container">
            <div className="about-story-grid">
              <div className="about-story-heading">
                <span className="about-section-label">
                  OUR APPROACH
                </span>

                <h2>
                  Precision
                  <br />
                  <span>in every connection.</span>
                </h2>
              </div>

              <div className="about-story-copy">
                <p>
                  A fastening component may be small, but its role within a
                  finished product is significant. AF7 approaches fastening
                  through the complete relationship between component,
                  construction and application.
                </p>

                <p>
                  Our focus is on dependable zipper and slider components
                  intended for different product environments, with attention
                  to consistency, finishing and the way each component
                  integrates into the final product.
                </p>

                <div className="about-story-meta">
                  <div>
                    <span>FOCUS</span>
                    <strong>FASTENING COMPONENTS</strong>
                  </div>

                  <div>
                    <span>LOCATION</span>
                    <strong>LAHORE · PAKISTAN</strong>
                  </div>

                  <div>
                    <span>BRAND</span>
                    <strong>APPAREL FASTENER</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-production">
          <div className="about-container">
            <div className="about-production-heading">
              <div>
                <span className="about-section-label">
                  INSIDE AF7
                </span>

                <h2>
                  From component
                  <br />
                  <span>to finished product.</span>
                </h2>
              </div>

              <p>
                Our production environment brings together machinery,
                processes and people around the precise requirements of
                fastening components.
              </p>
            </div>

            <div className="about-production-grid">
              {companyImages.slice(1).map((item, index) => (
                <figure className="about-production-item" key={item.image}>
                  <div className="about-production-image">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                  </div>

                  <figcaption>
                    <span>
                      {String(index + 2).padStart(2, "0")}
                    </span>

                    <span>{item.label}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="about-positioning">
          <div className="about-container">
            <div className="about-positioning-grid">
              <div>
                <span className="about-section-label">
                  AF7 / POSITION
                </span>

                <h2>
                  Built around
                  <br />
                  <span>what connects.</span>
                </h2>
              </div>

              <div className="about-positioning-copy">
                <p>
                  AF7 operates within the apparel and fastening ecosystem,
                  connecting component manufacturing with the needs of
                  product makers, designers and manufacturers.
                </p>

                <p>
                  The brand is grounded in a simple principle: fastening
                  components should work as naturally as they belong within
                  the product itself.
                </p>

                <Link href="/products" className="about-positioning-link">
                  <span>Explore Product Range</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="about-closing">
          <div className="about-container">
            <div className="about-closing-top">
              <span>AF7 / COMPANY PROFILE</span>
              <span>LAHORE · PAKISTAN</span>
            </div>

            <div className="about-closing-content">
              <span>APPAREL FASTENER</span>

              <h2>
                Made to become
                <br />
                part of the product.
              </h2>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}