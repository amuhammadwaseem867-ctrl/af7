import "./globals.css";
import Preloader from "@/components/Preloader";
import FloatingContact from "@/components/FloatingContact";

export const metadata = {
  title: {
    default: "AF7 | Apparel Fastener",
    template: "%s | AF7 Apparel Fastener",
  },
  description:
    "AF7 Apparel Fastener develops premium zipper and fastening components for apparel, bags, denim, footwear, sportswear and outerwear applications.",
  keywords: [
    "AF7",
    "Apparel Fastener",
    "zippers",
    "zipper manufacturer",
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
    title: "AF7 | Apparel Fastener",
    description:
      "Premium zipper and fastening components for apparel, bags, footwear and outerwear applications from Lahore, Pakistan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AF7 | Apparel Fastener",
    description:
      "Premium zipper and fastening components for apparel, bags, footwear and outerwear applications from Lahore, Pakistan.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}