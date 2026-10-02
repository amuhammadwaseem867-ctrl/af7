import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./product-detail.css";

const products = {
  "2-way-zippers": {
    number: "01",
    title: "2-Way Brass Zippers",
    category: "ZIPPER SYSTEM",
    material: "BRASS",
    description:
      "Two-way brass zipper systems developed for applications requiring flexible opening, controlled movement and dependable fastening performance.",
    applications: "APPAREL · OUTERWEAR · BAGS",
    images: [
      "/images/products/2wayzippers/1.webp",
      "/images/products/2wayzippers/2.webp",
      "/images/products/2wayzippers/2way.webp",
      "/images/products/2wayzippers/2wayzipper.webp",
      "/images/products/2wayzippers/3.webp",
      "/images/products/2wayzippers/4.webp",
      "/images/products/2wayzippers/5brxxred_1024x1024.webp",
      "/images/products/2wayzippers/6.webp",
      "/images/products/2wayzippers/IMG_2104-optimized.webp",
      "/images/products/2wayzippers/silver-two-ways-zipper.webp",
    ],
  },

  "aluminium-zippers": {
    number: "02",
    title: "Aluminium Zippers",
    category: "ZIPPER SYSTEM",
    material: "ALUMINIUM",
    description:
      "Aluminium zipper constructions combining a refined metallic appearance with dependable fastening performance for contemporary product applications.",
    applications: "APPAREL · BAGS · OUTERWEAR",
    images: [
      "/images/products/alumuniumzippers/3.webp",
      "/images/products/alumuniumzippers/4.webp",
      "/images/products/alumuniumzippers/5.webp",
      "/images/products/alumuniumzippers/6.webp",
      "/images/products/alumuniumzippers/7.webp",
      "/images/products/alumuniumzippers/8.webp",
      "/images/products/alumuniumzippers/17eb0fb5be5ca47779ac246a5c767a13.jpg",
      "/images/products/alumuniumzippers/alumunium zipper.webp",
      "/images/products/alumuniumzippers/alumuniumzipper2.webp",
    ],
  },

  "brass-zippers-4-5": {
    number: "03",
    title: "Brass Zippers 4.5",
    category: "ZIPPER SYSTEM",
    material: "BRASS",
    description:
      "Brass zipper constructions developed for applications where durability, finish and precise fastening are essential.",
    applications: "APPAREL · DENIM · BAGS",
    images: [
      "/images/products/brasszippers4.5/4.5.webp",
      "/images/products/brasszippers4.5/IMG_2089.webp",
      "/images/products/brasszippers4.5/IMG_2091.webp",
      "/images/products/brasszippers4.5/IMG_2095.webp",
      "/images/products/brasszippers4.5/IMG_2100.webp",
      "/images/products/brasszippers4.5/IMG_2101.webp",
      "/images/products/brasszippers4.5/IMG_2102.webp",
    ],
  },

  "brass-zippers-5": {
    number: "04",
    title: "Brass Zippers 5",
    category: "ZIPPER SYSTEM",
    material: "BRASS",
    description:
      "Size 5 brass zipper components offering a balance of structure, durability and refined finishing across a range of product applications.",
    applications: "APPAREL · DENIM · OUTERWEAR",
    images: [
      "/images/products/brasszippers5/71sPgkXBneL.jpg",
      "/images/products/brasszippers5/alumunium.webp",
      "/images/products/brasszippers5/IMG_2071.webp",
      "/images/products/brasszippers5/IMG_2074.webp",
      "/images/products/brasszippers5/IMG_2076.webp",
      "/images/products/brasszippers5/IMG_2077.webp",
      "/images/products/brasszippers5/IMG_2078.webp",
      "/images/products/brasszippers5/IMG_2079.webp",
      "/images/products/brasszippers5/IMG_2080.webp",
      "/images/products/brasszippers5/IMG_2083.webp",
      "/images/products/brasszippers5/IMG_2085.webp",
      "/images/products/brasszippers5/IMG_2086.webp",
      "/images/products/brasszippers5/IMG_2087.webp",
      "/images/products/brasszippers5/IMG_2092.webp",
      "/images/products/brasszippers5/IMG_2093.webp",
      "/images/products/brasszippers5/IMG_2094.webp",
      "/images/products/brasszippers5/IMG_2103.webp",
    ],
  },

  "nylon-zippers": {
    number: "05",
    title: "Nylon Zippers",
    category: "ZIPPER SYSTEM",
    material: "NYLON",
    description:
      "Lightweight nylon zipper solutions designed for versatile apparel and product applications, including reversible and waterproof constructions.",
    applications: "SPORTSWEAR · APPAREL · BAGS",
    images: [
      "/images/products/nylonzippers/2.webp",
      "/images/products/nylonzippers/3.webp",
      "/images/products/nylonzippers/4.webp",
      "/images/products/nylonzippers/5.webp",
      "/images/products/nylonzippers/6.webp",
      "/images/products/nylonzippers/reversible nylon zipper.webp",
      "/images/products/nylonzippers/waterproofnylon zipper 2.webp",
      "/images/products/nylonzippers/waterproofnylonzipper.webp",
      "/images/products/nylonzippers/Zip003-edited.webp",
    ],
  },

  "slider-5": {
    number: "06",
    title: "Sliders 5",
    category: "SLIDER COMPONENT",
    material: "METAL",
    description:
      "Size 5 sliders designed to complement zipper systems with reliable movement, secure engagement and consistent finishing.",
    applications: "APPAREL · BAGS · OUTERWEAR",
    images: [
      "/images/products/slider5/IMG_2028.webp",
      "/images/products/slider5/IMG_2045.webp",
      "/images/products/slider5/IMG_2053.webp",
      "/images/products/slider5/IMG_2054.webp",
      "/images/products/slider5/IMG_2055.webp.tmp.webp",
      "/images/products/slider5/IMG_2056.webp.tmp.webp",
      "/images/products/slider5/IMG_2058.webp.tmp.webp",
      "/images/products/slider5/IMG_2059.webp",
      "/images/products/slider5/IMG_2060.webp",
      "/images/products/slider5/IMG_2061.webp",
      "/images/products/slider5/IMG_2062.webp",
      "/images/products/slider5/IMG_2063.webp",
      "/images/products/slider5/IMG_2064.webp",
      "/images/products/slider5/IMG_2070.webp.tmp.webp",
    ],
  },

  "sliders-4-5": {
    number: "07",
    title: "Y/G Sliders 4.5",
    category: "SLIDER COMPONENT",
    material: "METAL",
    description:
      "Y/G sliders in size 4.5, designed for dependable zipper operation with a clean and precise component profile.",
    applications: "APPAREL · BAGS · DENIM",
    images: [
      "/images/products/sliders4.5/slider.webp",
      "/images/products/sliders4.5/slider3.webp",
      "/images/products/sliders4.5/slider6.webp",
      "/images/products/sliders4.5/slider7.webp",
      "/images/products/sliders4.5/slider8.webp",
      "/images/products/sliders4.5/slider9.webp",
      "/images/products/sliders4.5/slider13.webp",
      "/images/products/sliders4.5/slider15.webp",
      "/images/products/sliders4.5/slider16.webp",
      "/images/products/sliders4.5/slider17.webp",
    ],
  },

  "vislon-zippers": {
    number: "08",
    title: "Vislon Zippers",
    category: "ZIPPER SYSTEM",
    material: "VISLON",
    description:
      "Vislon zipper systems offering a structured appearance and dependable fastening performance across apparel and related applications.",
    applications: "SPORTSWEAR · OUTERWEAR · APPAREL",
    images: [
      "/images/products/vislonzipper/1.webp",
      "/images/products/vislonzipper/2.webp",
      "/images/products/vislonzipper/3.webp",
      "/images/products/vislonzipper/4.webp",
      "/images/products/vislonzipper/5.webp",
      "/images/products/vislonzipper/7.webp",
      "/images/products/vislonzipper/8.webp",
      "/images/products/vislonzipper/9.webp",
      "/images/products/vislonzipper/10.webp",
      "/images/products/vislonzipper/aj1018ag-1-main-aj10.jpg",
      "/images/products/vislonzipper/vislon zip.webp",
      "/images/products/vislonzipper/vislon zip2.png",
      "/images/products/vislonzipper/vislon0.png",
      "/images/products/vislonzipper/vislon3.png",
      "/images/products/vislonzipper/vislon4.png",
      "/images/products/vislonzipper/vislon5.png",
      "/images/products/vislonzipper/vislon6.png",
      "/images/products/vislonzipper/vislon7.png",
      "/images/products/vislonzipper/vislon8.png",
      "/images/products/vislonzipper/vislon9.png",
    ],
  },
};

const productOrder = [
  "2-way-zippers",
  "aluminium-zippers",
  "brass-zippers-4-5",
  "brass-zippers-5",
  "nylon-zippers",
  "slider-5",
  "sliders-4-5",
  "vislon-zippers",
];

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products[slug];

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

export function generateStaticParams() {
  return productOrder.map((slug) => ({ slug }));
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    return null;
  }

  const currentIndex = productOrder.indexOf(slug);

  const previousSlug =
    currentIndex > 0 ? productOrder[currentIndex - 1] : null;

  const nextSlug =
    currentIndex < productOrder.length - 1
      ? productOrder[currentIndex + 1]
      : null;

  const isSliderProduct =
    slug === "slider-5" || slug === "sliders-4-5";

  return (
    <>
      <Header />

      <main className="product-detail-page">
        <section className="product-detail-intro">
          <div className="product-detail-container">
            <div className="product-detail-topline">
              <div className="product-detail-index">
                <span>{product.number}</span>
                <span className="product-detail-index-line" />
                <span>{String(productOrder.length).padStart(2, "0")}</span>
              </div>

              <span>AF7 · APPAREL FASTENER</span>
            </div>

            <div className="product-detail-grid">
              <div className="product-detail-copy">
                <span className="product-detail-eyebrow">
                  AF7 / PRODUCT PROFILE
                </span>

                <h1>{product.title}</h1>

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
              </div>

              <div
                className={`product-detail-visual ${
                  isSliderProduct ? "product-detail-visual-slider" : ""
                }`}
              >
                <div className="product-detail-image">
                  <Image
                    src={product.images[0]}
                    alt={`AF7 ${product.title}`}
                    fill
                    priority
                    sizes="(max-width: 700px) 100vw, 58vw"
                  />
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
                <h2>Product Collection</h2>
              </div>

              <p>
                A complete visual selection from the {product.title} range.
              </p>
            </div>

            <div
              className={`product-catalog-grid ${
                isSliderProduct ? "product-catalog-grid-slider" : ""
              }`}
            >
              {product.images.map((image, index) => (
                <figure
                  className={`product-catalog-item ${
                    index === 0 ? "product-catalog-item-featured" : ""
                  }`}
                  key={image}
                >
                  <div className="product-catalog-image">
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                  </div>

                  <figcaption>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>AF7 · {product.title}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

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

                <h2>
                  Designed around
                  <br />
                  <span>precision.</span>
                </h2>
              </div>

              <div className="product-detail-information-copy">
                <p>
                  AF7 fastening components are developed around the
                  relationship between construction, movement and
                  finished appearance. Each product category is
                  selected according to its intended application and
                  component requirements.
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
                    {products[previousSlug].title}
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
                    {products[nextSlug].title}
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

      <Footer />
    </>
  );
}