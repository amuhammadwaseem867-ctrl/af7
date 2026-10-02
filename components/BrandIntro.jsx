import Image from "next/image";
import Link from "next/link";
import "./BrandIntro.css";

const companyImages = [
  {
    src: "/images/about/factory.webp",
    alt: "AF7 manufacturing facility",
    label: "Manufacturing",
    number: "01",
  },
  {
    src: "/images/about/machinery.webp",
    alt: "AF7 manufacturing machinery",
    label: "Machinery",
    number: "02",
  },
  {
    src: "/images/about/production.webp",
    alt: "AF7 production process",
    label: "Production",
    number: "03",
  },
];

export default function BrandIntro() {
  return (
    <section className="brand-intro">
      <div className="brand-intro-container">
        <div className="brand-intro-header">
          <div className="brand-intro-header-left">
            <span className="brand-intro-index">02</span>
            <span>About AF7</span>
          </div>

          <span className="brand-intro-header-right">
            Apparel Fastener · Lahore
          </span>
        </div>

        <div className="brand-intro-introduction">
          <div className="brand-intro-title">
            <span className="brand-intro-eyebrow">
              Apparel Fastener
            </span>

            <h2>
              Built Around
              <br />
              <span>Precision.</span>
            </h2>
          </div>

          <div className="brand-intro-statement">
            <p className="brand-intro-lead">
              AF7 Apparel Fastener develops and manufactures
              fastening components for the global apparel and
              fashion industry.
            </p>

            <p>
              From zippers and sliders to application-specific
              fastening solutions, our work is shaped around
              dependable construction, precise finishing and the
              demands of modern product design.
            </p>

            <Link href="/about" className="brand-intro-link">
              <span>Discover AF7</span>
              <span className="brand-intro-link-arrow">↗</span>
            </Link>
          </div>
        </div>

        <div className="brand-intro-feature">
          <div className="brand-intro-feature-image">
            <Image
              src="/images/about/5.webp"
              alt="AF7 Apparel Fastener"
              width={2200}
              height={1400}
              sizes="(max-width: 700px) 100vw, 68vw"
            />
          </div>

          <div className="brand-intro-feature-copy">
            <span className="brand-intro-feature-label">
              Made In Lahore
            </span>

            <h3>
              Made For The
              <br />
              <span>World.</span>
            </h3>

            <p>
              Based in Lahore, Pakistan, AF7 brings manufacturing
              and product expertise together to serve apparel,
              denim, bags, footwear and sportswear applications.
            </p>

            <div className="brand-intro-feature-meta">
              <span>AF7 / APPAREL FASTENER</span>
              <span>LAHORE · PAKISTAN</span>
            </div>
          </div>
        </div>

        <div className="brand-intro-gallery">
          {companyImages.map((image) => (
            <figure
              className="brand-intro-gallery-item"
              key={image.src}
            >
              <div className="brand-intro-gallery-image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1100}
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>

              <figcaption className="brand-intro-gallery-caption">
                <span>{image.number}</span>
                <span>{image.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="brand-intro-bottom">
          <div className="brand-intro-bottom-line" />

          <p>
            Every component is developed with the finished product
            in mind — its construction, appearance, movement and
            everyday use.
          </p>
        </div>
      </div>
    </section>
  );
}