import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./quality.css";

export const metadata = {
  title: "Quality",
  description:
    "AF7 quality focus is grounded in detail, consistency, control and inspection for zipper and fastening components.",
};

const qualityImages = [
  {
    image: "/images/quality/detail.webp",
    alt: "AF7 zipper component detail",
    label: "COMPONENT / DETAIL",
  },
  {
    image: "/images/quality/inspection.webp",
    alt: "AF7 quality inspection",
    label: "INSPECTION / CONTROL",
  },
  {
    image: "/images/quality/slider-check.webp",
    alt: "AF7 slider inspection",
    label: "SLIDER / INSPECTION",
  },
  {
    image: "/images/quality/zipper-check.webp",
    alt: "AF7 zipper inspection",
    label: "ZIPPER / INSPECTION",
  },
];

export default function QualityPage() {
  return (
    <>
      <Header />

      <main className="quality-page">
        <section className="quality-intro">
          <div className="quality-container">
            <div className="quality-topline">
              <div className="quality-topline-left">
                <span className="quality-index">04</span>
                <span>Quality</span>
              </div>

              <span className="quality-topline-right">
                AF7 · APPAREL FASTENER
              </span>
            </div>

            <div className="quality-intro-grid">
              <div className="quality-intro-heading">
                <span className="quality-eyebrow">
                  QUALITY / CONTROL / CONSISTENCY
                </span>

                <h1>
                  Precision
                  <br />
                  <span>In The Detail.</span>
                </h1>
              </div>

              <div className="quality-intro-copy">
                <p>
                  Quality at AF7 is approached through attention to the
                  component itself. Detail, construction, movement and
                  finished appearance are considered throughout the
                  fastening process.
                </p>

                <div className="quality-intro-meta">
                  <span>AF7 / QUALITY</span>
                  <span>LAHORE · PAKISTAN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quality-feature">
          <div className="quality-container">
            <div className="quality-feature-image">
              <Image
                src={qualityImages[0].image}
                alt={qualityImages[0].alt}
                fill
                priority
                sizes="(max-width: 700px) 100vw, 100vw"
              />

              <div className="quality-image-meta">
                <span>AF7</span>
                <span>QUALITY / 01</span>
              </div>

              <span className="quality-image-label">
                {qualityImages[0].label}
              </span>
            </div>
          </div>
        </section>

        <section className="quality-approach">
          <div className="quality-container">
            <div className="quality-approach-grid">
              <div className="quality-approach-heading">
                <span className="quality-section-label">
                  OUR QUALITY APPROACH
                </span>

                <h2>
                  Every detail
                  <br />
                  <span>has a role.</span>
                </h2>
              </div>

              <div className="quality-approach-copy">
                <p>
                  A zipper is a functional component that becomes part of a
                  much larger product. Its movement, construction and visual
                  finish all contribute to the final result.
                </p>

                <p>
                  AF7 places attention on these details so that fastening
                  components can integrate naturally into the products they
                  are designed for.
                </p>

                <div className="quality-principles">
                  <div className="quality-principle">
                    <span>01</span>

                    <div>
                      <strong>DETAIL</strong>
                      <p>
                        Close attention to component construction and
                        finished appearance.
                      </p>
                    </div>
                  </div>

                  <div className="quality-principle">
                    <span>02</span>

                    <div>
                      <strong>CONSISTENCY</strong>
                      <p>
                        A controlled approach to components across product
                        requirements.
                      </p>
                    </div>
                  </div>

                  <div className="quality-principle">
                    <span>03</span>

                    <div>
                      <strong>CONTROL</strong>
                      <p>
                        Inspection focused on the details that influence
                        fastening performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quality-inspection">
          <div className="quality-container">
            <div className="quality-inspection-heading">
              <div>
                <span className="quality-section-label">
                  INSPECTION
                </span>

                <h2>
                  Looking closer
                  <br />
                  <span>at every component.</span>
                </h2>
              </div>

              <p>
                Inspection brings attention to the physical characteristics
                of zipper systems and slider components, from individual
                details to finished construction.
              </p>
            </div>

            <div className="quality-inspection-grid">
              {qualityImages.slice(1).map((item, index) => (
                <figure className="quality-inspection-item" key={item.image}>
                  <div className="quality-inspection-image">
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

        <section className="quality-system">
          <div className="quality-container">
            <div className="quality-system-grid">
              <div>
                <span className="quality-section-label">
                  AF7 / QUALITY SYSTEM
                </span>

                <h2>
                  Built around
                  <br />
                  <span>consistency.</span>
                </h2>
              </div>

              <div className="quality-system-copy">
                <p>
                  Quality is not limited to the final appearance of a
                  component. It is connected to how the component is
                  constructed, inspected and prepared for its intended
                  application.
                </p>

                <p>
                  This approach allows AF7 to maintain a clear relationship
                  between product requirements and the fastening components
                  supplied for them.
                </p>

                <div className="quality-system-meta">
                  <div>
                    <span>FOCUS</span>
                    <strong>COMPONENT QUALITY</strong>
                  </div>

                  <div>
                    <span>PROCESS</span>
                    <strong>INSPECTION & CONTROL</strong>
                  </div>

                  <div>
                    <span>APPLICATION</span>
                    <strong>APPAREL & RELATED PRODUCTS</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quality-closing">
          <div className="quality-container">
            <div className="quality-closing-top">
              <span>AF7 / QUALITY</span>
              <span>LAHORE · PAKISTAN</span>
            </div>

            <div className="quality-closing-content">
              <span>APPAREL FASTENER</span>

              <h2>
                Small components.
                <br />
                Considered precisely.
              </h2>

              <Link
                href="/products"
                className="quality-closing-link"
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