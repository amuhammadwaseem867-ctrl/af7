import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./products.css";

export const metadata = {
  title: "Products",
  description:
    "Explore AF7 zipper and fastening component categories including brass, aluminium, nylon, sliders and vislon systems.",
};

const products = [
  {
    number: "01",
    title: "2-Way Brass Zippers",
    description:
      "Two-way zipper systems designed for applications requiring flexible opening, controlled movement and dependable fastening performance.",
    image: "/images/products/2wayzippers/2wayzipper.webp",
    href: "/products/2-way-zippers",
    category: "ZIPPER SYSTEM",
    material: "BRASS",
  },
  {
    number: "02",
    title: "Aluminium Zippers",
    description:
      "Aluminium zipper constructions combining a refined metallic appearance with dependable fastening performance for contemporary applications.",
    image: "/images/products/alumuniumzippers/alumunium zipper.webp",
    href: "/products/aluminium-zippers",
    category: "ZIPPER SYSTEM",
    material: "ALUMINIUM",
  },
  {
    number: "03",
    title: "Brass Zippers 4.5",
    description:
      "Brass zipper constructions developed for applications where durability, finish and precise fastening are essential.",
    image: "/images/products/brasszippers4.5/4.5.webp",
    href: "/products/brass-zippers-4-5",
    category: "ZIPPER SYSTEM",
    material: "BRASS",
  },
  {
    number: "04",
    title: "Brass Zippers 5",
    description:
      "Size 5 zipper components offering a balance of structure, durability and refined finishing for a range of product applications.",
    image: "/images/products/brasszippers5/IMG_2071.webp",
    href: "/products/brass-zippers-5",
    category: "ZIPPER SYSTEM",
    material: "BRASS",
  },
  {
    number: "05",
    title: "Nylon Zippers",
    description:
      "Lightweight nylon zipper solutions designed for versatile apparel and product applications, including reversible and waterproof constructions.",
    image: "/images/products/nylonzippers/2.webp",
    href: "/products/nylon-zippers",
    category: "ZIPPER SYSTEM",
    material: "NYLON",
  },
  {
    number: "06",
    title: "Sliders 5",
    description:
      "Size 5 sliders designed to complement zipper systems with reliable movement, secure engagement and consistent finishing.",
    image: "/images/products/slider5/IMG_2028.webp",
    href: "/products/slider-5",
    category: "SLIDER COMPONENT",
    material: "METAL",
  },
  {
    number: "07",
    title: "Y/G Sliders 4.5",
    description:
      "Y/G sliders in size 4.5, designed for dependable zipper operation with a clean and precise component profile.",
    image: "/images/products/sliders4.5/slider.webp",
    href: "/products/sliders-4-5",
    category: "SLIDER COMPONENT",
    material: "METAL",
  },
  {
    number: "08",
    title: "Vislon Zippers",
    description:
      "Vislon zipper systems offering a structured appearance and dependable fastening performance across apparel and related applications.",
    image: "/images/products/vislonzipper/vislon zip.webp",
    href: "/products/vislon-zippers",
    category: "ZIPPER SYSTEM",
    material: "VISLON",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main className="products-page">
        <section className="products-intro">
          <div className="products-container">
            <div className="products-topline">
              <div className="products-topline-left">
                <span className="products-index">03</span>
                <span>Product Range</span>
              </div>

              <span className="products-topline-right">
                AF7 · APPAREL FASTENER
              </span>
            </div>

            <div className="products-intro-grid">
              <div className="products-intro-heading">
                <span className="products-eyebrow">
                  Zippers · Sliders · Fastening Components
                </span>

                <h1>
                  Products
                  <br />
                  <span>Built To Perform.</span>
                </h1>
              </div>

              <div className="products-intro-copy">
                <p>
                  A focused range of fastening components developed
                  for apparel, bags, footwear, denim and other product
                  applications where construction, movement and
                  finishing matter.
                </p>

                <div className="products-intro-meta">
                  <span>PRODUCT PROFILE</span>
                  <span>LAHORE · PAKISTAN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="products-range">
          <div className="products-container">
            <div className="products-range-header">
              <div className="products-range-title">
                <span>AF7 / PRODUCT RANGE</span>
                <h2>Fastening Components</h2>
              </div>

              <p>
                Each product category is presented with its core
                construction, application context and product
                characteristics.
              </p>
            </div>

            <div className="products-list">
              {products.map((product) => {
                const isSlider = product.category === "SLIDER COMPONENT";

                return (
                  <article
                    className="product-profile"
                    key={product.number}
                  >
                    <div className="product-profile-header">
                      <div className="product-number">
                        <span>{product.number}</span>
                        <span className="product-number-line" />
                        <span>
                          {String(products.length).padStart(2, "0")}
                        </span>
                      </div>

                      <span className="product-category">
                        {product.category}
                      </span>
                    </div>

                    <div className="product-profile-grid">
                      <div className="product-information">
                        <span className="product-label">
                          AF7 / PRODUCT PROFILE
                        </span>

                        <h2>{product.title}</h2>

                        <p>{product.description}</p>

                        <div className="product-specification">
                          <div>
                            <span>CONSTRUCTION</span>
                            <strong>{product.category}</strong>
                          </div>

                          <div>
                            <span>MATERIAL</span>
                            <strong>{product.material}</strong>
                          </div>
                        </div>

                        <Link
                          href={product.href}
                          className="product-link"
                        >
                          <span>View Product Profile</span>
                          <span aria-hidden="true">↗</span>
                        </Link>
                      </div>

                      <Link
                        href={product.href}
                        className={`product-visual ${
                          isSlider ? "product-visual-slider" : ""
                        }`}
                        aria-label={`View ${product.title} product profile`}
                      >
                        <div className="product-image">
                          <Image
                            src={product.image}
                            alt={`AF7 ${product.title}`}
                            fill
                            sizes="(max-width: 700px) 100vw, 62vw"
                          />
                        </div>

                        <div className="product-visual-meta">
                          <span>AF7</span>
                          <span>{product.number}</span>
                        </div>
                      </Link>
                    </div>

                    <div className="product-divider" />
                  </article>
                );
              })}
            </div>

            <div className="products-footer-meta">
              <span>AF7 / APPAREL FASTENER</span>
              <span>LAHORE · PAKISTAN</span>
              <span>{products.length} PRODUCT CATEGORIES</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}