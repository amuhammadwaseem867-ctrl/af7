import { products } from "@/data/products";
import { applications } from "@/data/applications";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap() {
  const staticRoutes = ["", "/products", "/applications", "/about", "/quality", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...applications.map((application) => ({
      url: `${siteUrl}/applications/${application.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
