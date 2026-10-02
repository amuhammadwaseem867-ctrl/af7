import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./applications.css";

export const metadata = {
  title: "Applications",
  description:
    "AF7 fastening components are designed for apparel, bags, denim, footwear, jackets and sportswear applications.",
};

const applications = [
  {
    number: "01",
    title: "Apparel",
    category: "APPLICATION",
    description:
      "Fastening components integrated into apparel products where construction, movement and finishing work together.",
    image: "/images/applications/apparel.webp",
    href: "/applications/apparel",
  },
  {
    number: "02",
    title: "Bags",
    category: "APPLICATION",
    description:
      "Zippers and fastening components designed for bags and accessories where reliable operation and finished appearance are essential.",
    image: "/images/applications/bags.webp",
    href: "/applications/bags",
  },
  {
    number: "03",
    title: "Denim",
    category: "APPLICATION",
    description:
      "Durable fastening solutions suited to denim products where material character, construction and finishing require dependable components.",
    image: "/images/applications/denim.webp",
    href: "/applications/denim",
  },
  {
    number: "04",
    title: "Footwear",
    category: "APPLICATION",
    description:
      "Fastening components developed for footwear applications where movement, usability and product construction come together.",
    image: "/images/applications/footwear.webp",
    href: "/applications/footwear",
  },
  {
    number: "05",
    title: "Jackets",
    category: "APPLICATION",
    description:
      "Zipper systems and fastening components for jackets and outerwear, balancing practical performance with a refined finished appearance.",
    image: "/images/applications/jackets.webp",
    href: "/applications/jackets",
  },
  {
    number: "06",
    title: "Sportswear",
    category: "APPLICATION",
    description:
      "Lightweight and functional fastening solutions for sportswear where movement, construction and everyday performance matter.",
    image: "/images/applications/sportswear.webp",
    href: "/applications/sportswear",
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <Header />

      <main className="applications-page">
        <section className="applications-intro">
          <div className="applications-container">
            <div className="applications-topline">
              <div className="applications-topline-left">
                <span className="applications-index">04</span>
                <span>Applications</span>
              </div>

              <span className="applications-topline-right">
                AF7 · APPAREL FASTENER
              </span>
            </div>

            <div className="applications-intro-grid">
              <div className="applications-intro-heading">
                <span className="applications-eyebrow">
                  Apparel · Bags · Denim · Footwear
                </span>

                <h1>
                  Built For
                  <br />
                  <span>Every Application.</span>
                </h1>
              </div>

              <div className="applications-intro-copy">
                <p>
                  AF7 fastening components are developed to integrate
                  naturally into different product categories, supporting
                  construction, movement, usability and finished appearance.
                </p>

                <div className="applications-intro-meta">
                  <span>APPLICATION PROFILE</span>
                  <span>LAHORE · PAKISTAN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="applications-range">
          <div className="applications-container">
            <div className="applications-range-header">
              <div className="applications-range-title">
                <span>AF7 / APPLICATION RANGE</span>
                <h2>Where Components Become Product.</h2>
              </div>

              <p>
                From everyday apparel to performance-led products, AF7
                fastening components are selected according to the needs of
                each application.
              </p>
            </div>

            <div className="applications-list">
              {applications.map((application) => (
                <article
                  className="application-profile"
                  key={application.number}
                >
                  <div className="application-profile-header">
                    <div className="application-number">
                      <span>{application.number}</span>
                      <span className="application-number-line" />
                      <span>
                        {String(applications.length).padStart(2, "0")}
                      </span>
                    </div>

                    <span className="application-category">
                      {application.category}
                    </span>
                  </div>

                  <div className="application-profile-grid">
                    <div className="application-information">
                      <span className="application-label">
                        AF7 / APPLICATION PROFILE
                      </span>

                      <h2>{application.title}</h2>

                      <p>{application.description}</p>

                      <Link
                        href={application.href}
                        className="application-link"
                      >
                        <span>View Application</span>
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </div>

                    <Link
                      href={application.href}
                      className="application-visual"
                      aria-label={`View ${application.title} application`}
                    >
                      <div className="application-image">
                        <Image
                          src={application.image}
                          alt={`AF7 ${application.title}`}
                          fill
                          sizes="(max-width: 700px) 100vw, 62vw"
                        />
                      </div>

                      <div className="application-visual-meta">
                        <span>AF7</span>
                        <span>{application.number}</span>
                      </div>

                      <span className="application-visual-label">
                        VIEW APPLICATION
                      </span>
                    </Link>
                  </div>

                  <div className="application-divider" />
                </article>
              ))}
            </div>

            <div className="applications-footer-meta">
              <span>AF7 / APPLICATION RANGE</span>
              <span>LAHORE · PAKISTAN</span>
              <span>{applications.length} APPLICATIONS</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}