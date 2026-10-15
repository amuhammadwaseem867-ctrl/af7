import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import Marquee from "@/components/motion/Marquee";
import Stats from "@/components/home/Stats";
import ProductShowcase from "@/components/home/ProductShowcase";
import ApplicationsAccordion from "@/components/home/ApplicationsAccordion";
import Process from "@/components/home/Process";
import Finishes from "@/components/home/Finishes";
import WhyAf7 from "@/components/home/WhyAf7";
import CallToAction from "@/components/home/CallToAction";
import "@/components/home/Home.css";

const tickerItems = [
  "#5 Metal Zippers",
  "#4.5 Metal Zippers",
  "Aluminium Zippers",
  "Nylon Zippers",
  "Vislon Zippers",
  "Tag Strings",
  "TPU Tippings",
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee className="home-ticker" items={tickerItems} />
      <BrandIntro />
      <Stats />
      <ProductShowcase />
      <ApplicationsAccordion />
      <Process />
      <Finishes />
      <WhyAf7 />
      <CallToAction />
    </main>
  );
}
