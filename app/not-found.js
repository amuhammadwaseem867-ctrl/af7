import Link from "next/link";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-inner">
        <Reveal as="span" className="section-eyebrow" y={12}>
          AF7 / 404
        </Reveal>
        <SplitText
          as="h1"
          lines={["This page has", "come unzipped."]}
          accent={[1]}
          animateOnMount
          delay={0.1}
        />
        <Reveal as="p" delay={0.3}>
          The page you are looking for does not exist or has moved. Head back
          to the homepage or explore the AF7 product range.
        </Reveal>
        <Reveal className="not-found-actions" delay={0.4}>
          <Link href="/" className="af7-button af7-button-dark">
            <span>Return home</span>
            <span className="af7-button-arrow" aria-hidden="true">↗</span>
          </Link>
          <Link href="/products" className="af7-button af7-button-dark">
            <span>View products</span>
            <span className="af7-button-arrow" aria-hidden="true">↗</span>
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
