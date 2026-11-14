import Link from "next/link";
import ProductsExplorer from "./ProductsExplorer";
import Pullers from "./Pullers";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { customization, portfolio } from "@/data/company";
import "./products.css";

export const metadata = {
  title: "Products",
  description:
    "AF7 product range: #5 and #4.5 metal and aluminium zippers, two-way, nylon and Vislon zippers, tag strings, tipping and TPU tippings, manufactured in Lahore, Pakistan.",
};

export default function ProductsPage() {
  return (
    <main className="products-page">
      <section className="products-intro">
        <div className="products-container">
          <Reveal className="products-topline" y={16}>
            <div className="products-topline-left">
              <span className="products-index">02</span>
              <span>Our Product Range</span>
            </div>
            <span className="products-topline-right">AF7 · ZIPPER MANUFACTURING</span>
          </Reveal>

          <div className="products-intro-grid">
            <div className="products-intro-heading">
              <Reveal as="span" className="products-eyebrow" y={12}>
                Zippers · Garment Accessories
              </Reveal>
              <SplitText
                as="h1"
                lines={["Zippers and garment", "accessories, by line."]}
                accent={[1]}
                animateOnMount
                delay={0.2}
              />
            </div>

            <Reveal className="products-intro-copy" delay={0.4}>
              <p>{portfolio.intro}</p>
              <div className="products-intro-meta">
                <span>PRODUCT PROFILE</span>
                <span>LAHORE · PAKISTAN</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="products-range" aria-label="Zippers and garment accessories">
        <div className="products-container">
          <ProductsExplorer />
        </div>
      </section>

      <Pullers />

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
              <Link href="/customization" className="af7-button af7-button-light">
                <span>Explore Customization</span>
                <span className="af7-button-arrow" aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
