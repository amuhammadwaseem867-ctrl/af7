/** @type {import('next').NextConfig} */
const legacyProductSlugs = {
  "2-way-zippers": "two-way-zippers",
  "aluminium-zippers": "aluminium-zippers-5",
  "brass-zippers-4-5": "metal-zippers-4-5",
  "brass-zippers-5": "metal-zippers-5",
  "slider-5": null,
  "sliders-4-5": null,
};

// The site is served at https://www.afgroup.com.hk/af7: the main
// afgroup.com.hk site forwards /af7 requests here.
const basePath = "/af7";

const nextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  async redirects() {
    return Object.entries(legacyProductSlugs).map(([from, to]) => ({
      source: `/products/${from}`,
      destination: to ? `/products/${to}` : "/products",
      permanent: true,
    }));
  },
};

export default nextConfig;
