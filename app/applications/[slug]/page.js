import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./application-detail.css";

const applications = {
  apparel: {
    number: "01",
    title: "Apparel",
    category: "APPLICATION PROFILE",
    description:
      "Fastening components integrated into apparel products where construction, movement and finishing work together.",
    image: "/images/applications/apparel.webp",
    focus:
      "Apparel fastening is shaped by the relationship between garment construction, movement and finished appearance. AF7 components are positioned within this system as functional elements of the finished product.",
    uses: "APPAREL · GARMENTS · FASHION",
  },

  bags: {
    number: "02",
    title: "Bags",
    category: "APPLICATION PROFILE",
    description:
      "Zippers and fastening components designed for bags and accessories where reliable operation and finished appearance are essential.",
    image: "/images/applications/bags.webp",
    focus:
      "Bag construction places emphasis on practical access, repeated movement and component integration. Fastening systems become part of both the function and visual character of the finished product.",
    uses: "BAGS · ACCESSORIES · CARRY PRODUCTS",
  },

  denim: {
    number: "03",
    title: "Denim",
    category: "APPLICATION PROFILE",
    description:
      "Durable fastening solutions suited to denim products where material character, construction and finishing require dependable components.",
    image: "/images/applications/denim.webp",
    focus:
      "Denim products combine a distinctive material character with structured construction. Fastening components form part of this construction while contributing to the finished appearance of the product.",
    uses: "DENIM · JEANS · GARMENTS",
  },

  footwear: {
    number: "04",
    title: "Footwear",
    category: "APPLICATION PROFILE",
    description:
      "Fastening components developed for footwear applications where movement, usability and product construction come together.",
    image: "/images/applications/footwear.webp",
    focus:
      "Footwear fastening systems operate within a product built around movement and repeated use. Component selection therefore works alongside construction and overall product design.",
    uses: "FOOTWEAR · SHOES · PERFORMANCE PRODUCTS",
  },

  jackets: {
    number: "05",
    title: "Jackets",
    category: "APPLICATION PROFILE",
    description:
      "Zipper systems and fastening components for jackets and outerwear, balancing practical performance with a refined finished appearance.",
    image: "/images/applications/jackets.webp",
    focus:
      "Jackets and outerwear rely on fastening systems that become highly visible elements of the garment. Their construction, movement and finishing contribute directly to the final product.",
    uses: "JACKETS · OUTERWEAR · GARMENTS",
  },

  sportswear: {
    number: "06",
    title: "Sportswear",
    category: "APPLICATION PROFILE",
    description:
      "Lightweight and functional fastening solutions for sportswear where movement, construction and everyday performance matter.",
    image: "/images/applications/sportswear.webp",
    focus:
      "Sportswear combines functional construction with freedom of movement. Fastening components are integrated into this relationship to support the structure and usability of the finished product.",
    uses: "SPORTSWEAR · ACTIVEWEAR · PERFORMANCE APPAREL",
  },
};

const applicationOrder = [
  "apparel",
  "bags",
  "denim",
  "footwear",
  "jackets",
  "sportswear",
];

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const application = applications[slug];

  if (!application) {
    return {
      title: "Application | AF7",
    };
  }

  return {
    title: application.title,
    description: application.description,
  };
}

export function generateStaticParams() {
  return applicationOrder.map((slug) => ({
    slug,
  }));
}

export default async function ApplicationDetailPage({ params }) {
  const { slug } = await params;
  const application = applications[slug];

  if (!application) {
    return null;
  }

  const currentIndex = applicationOrder.indexOf(slug);

  const previousSlug =
    currentIndex > 0 ? applicationOrder[currentIndex - 1] : null;

  const nextSlug =
    currentIndex < applicationOrder.length - 1
      ? applicationOrder[currentIndex + 1]
      : null;

  return (
    <>
      <Header />

      <main className="application-detail-page">
        <section className="application-detail-intro">
          <div className="application-detail-container">
            <div className="application-detail-topline">
              <div className="application-detail-index">
                <span>{application.number}</span>

                <span className="application-detail-index-line" />

                <span>
                  {String(applicationOrder.length).padStart(2, "0")}
                </span>
              </div>

              <span>AF7 · APPAREL FASTENER</span>
            </div>

            <div className="application-detail-grid">
              <div className="application-detail-copy">
                <span className="application-detail-eyebrow">
                  AF7 / APPLICATION PROFILE
                </span>

                <h1>{application.title}</h1>

                <p>{application.description}</p>

                <div className="application-detail-specs">
                  <div>
                    <span>APPLICATION TYPE</span>
                    <strong>{application.category}</strong>
                  </div>

                  <div>
                    <span>PRODUCT USE</span>
                    <strong>{application.uses}</strong>
                  </div>
                </div>
              </div>

              <div className="application-detail-visual">
                <div className="application-detail-image">
                  <Image
                    src={application.image}
                    alt={`AF7 ${application.title} application`}
                    fill
                    priority
                    sizes="(max-width: 700px) 100vw, 58vw"
                  />
                </div>

                <div className="application-detail-visual-meta">
                  <span>AF7</span>
                  <span>{application.number}</span>
                </div>

                <span className="application-detail-visual-label">
                  APPLICATION DETAIL
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="application-detail-information">
          <div className="application-detail-container">
            <div className="application-detail-information-grid">
              <div className="application-detail-information-heading">
                <span className="application-detail-section-label">
                  APPLICATION CHARACTER
                </span>

                <h2>
                  Components
                  <br />
                  <span>within context.</span>
                </h2>
              </div>

              <div className="application-detail-information-copy">
                <p>{application.focus}</p>

                <div className="application-detail-meta-row">
                  <span>APPLICATION</span>
                  <span>{application.title.toUpperCase()}</span>
                </div>

                <div className="application-detail-meta-row">
                  <span>PRODUCT USE</span>
                  <span>{application.uses}</span>
                </div>

                <div className="application-detail-meta-row">
                  <span>AF7</span>
                  <span>APPAREL FASTENER</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="application-detail-range">
          <div className="application-detail-container">
            <div className="application-detail-range-top">
              <span>AF7 / APPLICATION RANGE</span>

              <span>
                {application.number} /{" "}
                {String(applicationOrder.length).padStart(2, "0")}
              </span>
            </div>

            <div className="application-detail-range-links">
              {previousSlug ? (
                <Link
                  href={`/applications/${previousSlug}`}
                  className="application-detail-range-link"
                >
                  <span className="application-detail-range-label">
                    PREVIOUS
                  </span>

                  <span className="application-detail-range-title">
                    {applications[previousSlug].title}
                  </span>

                  <span className="application-detail-range-arrow">
                    ↙
                  </span>
                </Link>
              ) : (
                <Link
                  href="/applications"
                  className="application-detail-range-link"
                >
                  <span className="application-detail-range-label">
                    BACK TO
                  </span>

                  <span className="application-detail-range-title">
                    Applications
                  </span>

                  <span className="application-detail-range-arrow">
                    ↙
                  </span>
                </Link>
              )}

              {nextSlug ? (
                <Link
                  href={`/applications/${nextSlug}`}
                  className="application-detail-range-link application-detail-range-link-next"
                >
                  <span className="application-detail-range-label">
                    NEXT
                  </span>

                  <span className="application-detail-range-title">
                    {applications[nextSlug].title}
                  </span>

                  <span className="application-detail-range-arrow">
                    ↗
                  </span>
                </Link>
              ) : (
                <Link
                  href="/applications"
                  className="application-detail-range-link application-detail-range-link-next"
                >
                  <span className="application-detail-range-label">
                    BACK TO
                  </span>

                  <span className="application-detail-range-title">
                    Applications
                  </span>

                  <span className="application-detail-range-arrow">
                    ↗
                  </span>
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