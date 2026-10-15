import Link from "next/link";
import ProductsExplorer from "./ProductsExplorer";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { accessories, customization } from "@/data/company";
import "./products.css";

export const metadata = {
  title: "Products",
  description:
    "AF7 product range: #5 and #4.5 metal zippers, aluminium zippers, nylon and Vislon zippers, sliders, tag strings and TPU tippings — manufactured in Lahore, Pakistan.",
};

export default function ProductsPage() {
  return (
    <main className="products-page">
      <section className="products-intro">
        <div className="products-container">
          <Reveal className="products-topline" y={16}>
            <div className="products-topline-left">
              <span className="products-index">01</span>
              <span>Product Range</span>
            </div>
            <span className="products-topline-right">AF7 · ZIPPER MANUFACTURING</span>
          </Reveal>

          <div className="products-intro-grid">
            <div className="products-intro-heading">
              <Reveal as="span" className="products-eyebrow" y={12}>
                Zippers · Sliders · Garment Accessories
              </Reveal>
              <SplitText
                as="h1"
                lines={["Products", "Built To Perform."]}
                accent={[1]}
                animateOnMount
                delay={0.2}
              />
            </div>

            <Reveal className="products-intro-copy" delay={0.4}>
              <p>
                Metal, aluminium, nylon and Vislon zippers along with selected
                garment accessories — produced through an integrated process from
                tape making and teeth manufacturing to finishing, assembly and
                inspection.
              </p>
              <div className="products-intro-meta">
                <span>PRODUCT PROFILE</span>
                <span>LAHORE · PAKISTAN</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="products-range" aria-label="Zippers and sliders">
        <div className="products-container">
          <ProductsExplorer />
        </div>
      </section>

      <section className="products-accessories" aria-labelledby="accessories-title">
        <div className="products-container">
          <div className="products-section-head">
            <Reveal as="span" className="section-eyebrow" y={12}>
              Garment Accessories
            </Reveal>
            <SplitText
              id="accessories-title"
              as="h2"
              lines={["Beyond", "the zipper."]}
              accent={[1]}
            />
          </div>

          <Stagger className="products-accessory-grid">
            {accessories.map((item, index) => (
              <StaggerItem as="article" className="products-accessory" key={item.title}>
                <span className="products-accessory-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href="/contact" className="products-accessory-link">
                  <span>Enquire</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="products-custom" aria-labelledby="custom-title">
        <div className="products-container products-custom-grid">
          <div>
            <Reveal as="span" className="section-eyebrow" y={12}>
              Customization
            </Reveal>
            <SplitText
              id="custom-title"
              as="h2"
              lines={["Built around", "your requirements."]}
              accent={[1]}
            />
            <Reveal as="p" className="products-custom-intro" delay={0.2}>
              {customization.intro}
            </Reveal>
          </div>

          <div>
            <Reveal as="span" className="products-custom-label" y={10}>
              We can discuss
            </Reveal>
            <Stagger as="ul" className="products-custom-list" stagger={0.06}>
              {customization.options.map((option, index) => (
                <StaggerItem as="li" key={option} y={16}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {option}
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="products-custom-closing" delay={0.2}>
              <strong>{customization.closing}</strong>
              <Link href="/contact" className="af7-button af7-button-light">
                <span>Discuss your requirements</span>
                <span className="af7-button-arrow" aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
