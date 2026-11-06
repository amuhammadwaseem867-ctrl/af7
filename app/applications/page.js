import FitImage from "@/components/FitImage";
import Link from "next/link";
import { applications } from "@/data/applications";
import { applicationAreas } from "@/data/company";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/ImageReveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import "./applications.css";

export const metadata = {
  title: "Applications",
  description:
    "AF7 zippers and accessories for apparel and fashion, denim, jackets and outerwear, casualwear and sportswear, bags, footwear, hangtags, labels, cords and drawstring finishing.",
};

export default function ApplicationsPage() {
  return (

      <main className="applications-page">
        <section className="applications-intro">
          <div className="applications-container">
            <Reveal className="applications-topline" y={16}>
              <div className="applications-topline-left">
                <span className="applications-index">06</span>
                <span>Applications</span>
              </div>

              <span className="applications-topline-right">
                AF7 · ZIPPER MANUFACTURING
              </span>
            </Reveal>

            <div className="applications-intro-grid">
              <div className="applications-intro-heading">
                <span className="applications-eyebrow">
                  Apparel · Bags · Denim · Footwear
                </span>

                <SplitText
                  as="h1"
                  lines={["Designed for", "Modern Apparel."]}
                  accent={[1]}
                  animateOnMount
                  delay={0.2}
                />
              </div>

              <Reveal className="applications-intro-copy" delay={0.4}>
                <p>
                  {applicationAreas.intro} {applicationAreas.closing}
                </p>

                <div className="applications-intro-meta">
                  <span>APPLICATION PROFILE</span>
                  <span>LAHORE · PAKISTAN</span>
                </div>
              </Reveal>
            </div>

            <Stagger as="ul" className="applications-areas" stagger={0.05}>
              {applicationAreas.items.map((area, index) => (
                <StaggerItem as="li" key={area} y={16}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {area}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="applications-range">
          <div className="applications-container">
            <div className="applications-range-header">
              <div className="applications-range-title">
                <span>AF7 / APPLICATION RANGE</span>
                <SplitText as="h2" lines={["Where Components Become Product."]} />
              </div>

              <p>
                From everyday apparel to performance-led products, the
                appropriate zipper construction is selected according to the
                needs of each application.
              </p>
            </div>

            <div className="applications-list">
              {applications.map((application) => (
                <Reveal
                  as="article"
                  className="application-profile"
                  key={application.number}
                  y={70}
                  amount={0.1}
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
                      APPLICATION
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
                        href={`/applications/${application.slug}`}
                        className="application-link"
                      >
                        <span>View Application</span>
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </div>

                    <Link
                      href={`/applications/${application.slug}`}
                      className="application-visual"
                      aria-label={`View ${application.title} application`}
                    >
                      <div className="application-image">
                        <ImageReveal fill>
                          <FitImage
                            src={application.image}
                            alt={`AF7 ${application.title}`}
                            fill
                            sizes="(max-width: 700px) 100vw, 62vw"
                          />
                        </ImageReveal>
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
                </Reveal>
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
  );
}