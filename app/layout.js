import { Montserrat, Poppins } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SmoothScroll from "@/components/motion/SmoothScroll";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Cursor from "@/components/motion/Cursor";
import PageTransition from "@/components/motion/PageTransition";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AF7 | Zipper Manufacturing & Garment Accessories",
    template: "%s | AF7",
  },
  description:
    "AF7 is a specialized zipper manufacturer in Lahore, Pakistan — metal, aluminium, nylon and Vislon zippers, tag strings and TPU tippings, made through integrated in-house production. Precision in every detail.",
  keywords: [
    "AF7",
    "Apparel Fastener",
    "zippers",
    "zipper manufacturer",
    "metal zippers",
    "aluminium zippers",
    "nylon zippers",
    "vislon zippers",
    "tag strings",
    "TPU tippings",
    "garment accessories",
    "fasteners",
    "sliders",
    "apparel accessories",
    "Lahore",
    "Pakistan",
  ],
  authors: [{ name: "AF7 Apparel Fastener" }],
  creator: "AF7 Apparel Fastener",
  publisher: "AF7 Apparel Fastener",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "AF7 | Precision in Every Detail",
    description:
      "Zipper manufacturing & garment accessories from Lahore, Pakistan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AF7 | Precision in Every Detail",
    description:
      "Zipper manufacturing & garment accessories from Lahore, Pakistan.",
  },
};

export const viewport = {
  themeColor: "#243146",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("af7-preloader-seen")==="1")document.documentElement.setAttribute("data-preloaded","")}catch(e){}`,
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <Preloader />
        <Header />
        <PageTransition>
          {children}
          <Footer />
        </PageTransition>
        <FloatingContact />
        <Cursor />
      </body>
    </html>
  );
}