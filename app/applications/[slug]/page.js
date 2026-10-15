import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  applications,
  getApplication,
  getAdjacentApplications,
} from "@/data/applications";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/ImageReveal";
import "./application-detail.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const application = getApplication(slug);

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

export const dynamicParams = false;

export function generateStaticParams() {
  return applications.map((application) => ({
    slug: application.slug,
  }));
}

export default async function ApplicationDetailPage({ params }) {
  const { slug } = await params;
  const application = getApplication(slug);

  if (!application) {
    notFound();
  }

  const { previous, next } = getAdjacentApplications(slug);
  const previousSlug = previous?.slug;
  const nextSlug = next?.slug;

  return (

      <main className="application-detail-page">
        <section className="application-detail-intro">
          <div className="application-detail-container">
            <Reveal className="application-detail-topline" y={16}>
              <div className="application-detail-index">
                <span>{application.number}</span>

                <span className="application-detail-index-line" />

                <span>
                  {String(applications.length).padStart(2, "0")}
                </span>
              </div>

              <span>AF7 · ZIPPER MANUFACTURING</span>
            </Reveal>

            <div className="application-detail-grid">
              <Reveal className="application-detail-copy" delay={0.1}>
                <span className="application-detail-eyebrow">
                  AF7 / APPLICATION PROFILE
                </span>

                <SplitText as="h1" lines={[application.title]} animateOnMount delay={0.2} />

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
              </Reveal>

              <div className="application-detail-visual">
                <div className="application-detail-image">
                  <ImageReveal fill direction="left" zoom={0.08}>
                    <Image
                      src={application.image}
                      alt={`AF7 ${application.title} application`}
                      fill
                      preload
                      sizes="(max-width: 700px) 100vw, 58vw"
                    />
                  </ImageReveal>
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

                <SplitText as="h2" lines={["Components", "within context."]} accent={[1]} />
              </div>

              <Reveal className="application-detail-information-copy" delay={0.15}>
                <p>{application.focus}</p>
                <p className="application-detail-custom">
                  Zipper type and size, construction, tape colour, finish and
                  configuration can be discussed according to your application.{" "}
                  <Link href="/contact">Start an enquiry ↗</Link>
                </p>

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
                  <span>ZIPPER MANUFACTURING</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="application-detail-range">
          <div className="application-detail-container">
            <div className="application-detail-range-top">
              <span>AF7 / APPLICATION RANGE</span>

              <span>
                {application.number} /{" "}
                {String(applications.length).padStart(2, "0")}
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
                    {previous.title}
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
                    {next.title}
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
  );
}