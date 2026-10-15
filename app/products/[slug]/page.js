import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct, getAdjacentProducts } from "@/data/products";
import { finishes } from "@/data/company";
import ProductGallery from "./ProductGallery";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/ImageReveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import "./product-detail.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product | AF7",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const { previous, next } = getAdjacentProducts(slug);
  const previousSlug = previous?.slug;
  const nextSlug = next?.slug;

  const isSliderProduct = product.category === "SLIDER COMPONENT";
  const isMetalProduct = ["METAL", "BRASS"].includes(product.material);

  return (
    <>

      <main className="product-detail-page">
        <section className="product-detail-intro">
          <div className="product-detail-container">
            <Reveal className="product-detail-topline" y={16}>
              <div className="product-detail-index">
                <span>{product.number}</span>
                <span className="product-detail-index-line" />
                <span>{String(products.length).padStart(2, "0")}</span>
              </div>

              <span>AF7 · ZIPPER MANUFACTURING</span>
            </Reveal>

            <div className="product-detail-grid">
              <Reveal className="product-detail-copy" delay={0.1}>
                <span className="product-detail-eyebrow">
                  AF7 / PRODUCT PROFILE
                </span>

                <SplitText as="h1" lines={[product.title]} animateOnMount delay={0.2} />

                <p>{product.description}</p>

                <div className="product-detail-specs">
                  <div>
                    <span>PRODUCT TYPE</span>
                    <strong>{product.category}</strong>
                  </div>

                  <div>
                    <span>MATERIAL</span>
                    <strong>{product.material}</strong>
                  </div>

                  <div>
                    <span>APPLICATIONS</span>
                    <strong>{product.applications}</strong>
                  </div>
                </div>

                <Link
                  href={`/contact?product=${product.slug}`}
                  className="af7-button af7-button-dark product-detail-enquire"
                >
                  <span>Enquire about this product</span>
                  <span className="af7-button-arrow" aria-hidden="true">↗</span>
                </Link>
              </Reveal>

              <div
                className={`product-detail-visual ${
                  isSliderProduct ? "product-detail-visual-slider" : ""
                }`}
              >
                <div className="product-detail-image">
                  <ImageReveal fill direction="left" zoom={0.08}>
                    <Image
                      src={product.images[0]}
                      alt={`AF7 ${product.title}`}
                      fill
                      preload
                      sizes="(max-width: 700px) 100vw, 58vw"
                    />
                  </ImageReveal>
                </div>

                <div className="product-detail-visual-meta">
                  <span>AF7</span>
                  <span>{product.number}</span>
                </div>

                <span className="product-detail-visual-label">
                  PRODUCT DETAIL
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="product-catalog">
          <div className="product-detail-container">
            <div className="product-catalog-heading">
              <div>
                <span>AF7 / PRODUCT CATALOG</span>
                <SplitText as="h2" lines={["Product Collection"]} />
              </div>

              <p>
                A complete visual selection from the {product.title} range.
              </p>
            </div>

            <ProductGallery
              images={product.images}
              title={product.title}
              isSlider={isSliderProduct}
            />

            <div className="product-catalog-footer">
              <span>{product.images.length} PRODUCT VIEWS</span>
              <span>AF7 · APPAREL FASTENER</span>
              <span>LAHORE · PAKISTAN</span>
            </div>
          </div>
        </section>

        <section className="product-detail-information">
          <div className="product-detail-container">
            <div className="product-detail-information-grid">
              <div>
                <span className="product-detail-section-label">
                  PRODUCT CHARACTER
                </span>

                <SplitText as="h2" lines={["Precision in", "every detail."]} accent={[1]} />
              </div>

              <div className="product-detail-information-copy">
                <p>
                  AF7 zippers are produced through an integrated process —
                  from tape making and teeth manufacturing to finishing,
                  assembly, quality inspection and packing — with key
                  stages managed under one roof in Lahore. Zipper type,
                  size, tape colour, finish and configuration can be
                  discussed according to your application.
                </p>

                <div className="product-detail-information-meta">
                  <span>CONSTRUCTION</span>
                  <span>{product.category}</span>
                </div>

                <div className="product-detail-information-meta">
                  <span>MATERIAL</span>
                  <span>{product.material}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {isMetalProduct ? (
          <section className="product-finishes" aria-labelledby="product-finishes-title">
            <div className="product-detail-container">
              <div className="product-finishes-head">
                <span className="product-detail-section-label">AVAILABLE FINISHES</span>
                <SplitText
                  id="product-finishes-title"
                  as="h2"
                  lines={["Finishing that", "completes the product."]}
                  accent={[1]}
                />
              </div>
              <Stagger className="product-finishes-grid" stagger={0.05}>
                {finishes.items.map((finish) => (
                  <StaggerItem className="product-finish" key={finish.name} y={20}>
                    <span
                      className="product-finish-swatch"
                      style={{ background: finish.swatch }}
                    />
                    <span>{finish.name}</span>
                  </StaggerItem>
                ))}
              </Stagger>
              <p className="product-finishes-note">{finishes.note}</p>
            </div>
          </section>
        ) : null}

        <section className="product-detail-navigation">
          <div className="product-detail-container">
            <div className="product-detail-navigation-top">
              <span>AF7 / PRODUCT RANGE</span>
              <span>LAHORE · PAKISTAN</span>
            </div>

            <div className="product-detail-navigation-links">
              {previousSlug ? (
                <Link
                  href={`/products/${previousSlug}`}
                  className="product-detail-nav-link"
                >
                  <span className="product-detail-nav-label">
                    PREVIOUS
                  </span>

                  <span className="product-detail-nav-title">
                    {previous.title}
                  </span>

                  <span className="product-detail-nav-arrow">↙</span>
                </Link>
              ) : (
                <Link
                  href="/products"
                  className="product-detail-nav-link"
                >
                  <span className="product-detail-nav-label">
                    BACK TO
                  </span>

                  <span className="product-detail-nav-title">
                    Product Range
                  </span>

                  <span className="product-detail-nav-arrow">↙</span>
                </Link>
              )}

              {nextSlug ? (
                <Link
                  href={`/products/${nextSlug}`}
                  className="product-detail-nav-link product-detail-nav-link-next"
                >
                  <span className="product-detail-nav-label">
                    NEXT
                  </span>

                  <span className="product-detail-nav-title">
                    {next.title}
                  </span>

                  <span className="product-detail-nav-arrow">↗</span>
                </Link>
              ) : (
                <Link
                  href="/products"
                  className="product-detail-nav-link product-detail-nav-link-next"
                >
                  <span className="product-detail-nav-label">
                    BACK TO
                  </span>

                  <span className="product-detail-nav-title">
                    Product Range
                  </span>

                  <span className="product-detail-nav-arrow">↗</span>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}