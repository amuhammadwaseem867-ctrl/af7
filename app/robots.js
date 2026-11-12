const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.afgroup.com.hk/af7";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
