export const applications = [
  {
    slug: "apparel",
    number: "01",
    title: "Apparel",
    category: "APPLICATION PROFILE",
    description: "Fastening components integrated into apparel products where construction, movement and finishing work together.",
    image: "/images/applications/apparel.webp",
    focus: "Apparel fastening is shaped by the relationship between garment construction, movement and finished appearance. AF7 components are positioned within this system as functional elements of the finished product.",
    uses: "APPAREL · GARMENTS · FASHION",
    hero: {
      eyebrow: "PRECISION FOR APPAREL",
      title: "Built for",
      accent: "every layer.",
      description: "Reliable fastening components designed to complement modern apparel construction, finishing and everyday performance."
    }
  },
  {
    slug: "bags",
    number: "02",
    title: "Bags",
    category: "APPLICATION PROFILE",
    description: "Zippers and fastening components designed for bags and accessories where reliable operation and finished appearance are essential.",
    image: "/images/applications/bags.webp",
    focus: "Bag construction places emphasis on practical access, repeated movement and component integration. Fastening systems become part of both the function and visual character of the finished product.",
    uses: "BAGS · ACCESSORIES · CARRY PRODUCTS",
    hero: {
      eyebrow: "ENGINEERED FOR BAGS",
      title: "Made to",
      accent: "carry more.",
      description: "Durable zipper and fastening solutions designed for bags where function, movement and refined finishing come together."
    }
  },
  {
    slug: "denim",
    number: "03",
    title: "Denim",
    category: "APPLICATION PROFILE",
    description: "Durable fastening solutions suited to denim products where material character, construction and finishing require dependable components.",
    image: "/images/applications/denim.webp",
    focus: "Denim products combine a distinctive material character with structured construction. Fastening components form part of this construction while contributing to the finished appearance of the product.",
    uses: "DENIM · JEANS · GARMENTS",
    hero: {
      eyebrow: "MADE FOR DENIM",
      title: "Strength meets",
      accent: "character.",
      description: "Fastening components developed for denim products where robust construction and distinctive finishing matter."
    }
  },
  {
    slug: "footwear",
    number: "04",
    title: "Footwear",
    category: "APPLICATION PROFILE",
    description: "Fastening components developed for footwear applications where movement, usability and product construction come together.",
    image: "/images/applications/footwear.webp",
    focus: "Footwear fastening systems operate within a product built around movement and repeated use. Component selection therefore works alongside construction and overall product design.",
    uses: "FOOTWEAR · SHOES · PERFORMANCE PRODUCTS",
    hero: {
      eyebrow: "PRECISION FOR FOOTWEAR",
      title: "Designed to",
      accent: "move.",
      description: "Functional fastening components created for footwear applications that demand dependable performance and refined detail."
    }
  },
  {
    slug: "jackets",
    number: "05",
    title: "Jackets",
    category: "APPLICATION PROFILE",
    description: "Zipper systems and fastening components for jackets and outerwear, balancing practical performance with a refined finished appearance.",
    image: "/images/applications/jackets.webp",
    focus: "Jackets and outerwear rely on fastening systems that become highly visible elements of the garment. Their construction, movement and finishing contribute directly to the final product.",
    uses: "JACKETS · OUTERWEAR · GARMENTS",
    hero: {
      eyebrow: "ENGINEERED FOR OUTERWEAR",
      title: "Ready for",
      accent: "every element.",
      description: "Zippers and fastening components designed for jackets and outerwear where construction, protection and appearance work together."
    }
  },
  {
    slug: "sportswear",
    number: "06",
    title: "Sportswear",
    category: "APPLICATION PROFILE",
    description: "Lightweight and functional fastening solutions for sportswear where movement, construction and everyday performance matter.",
    image: "/images/applications/sportswear.webp",
    focus: "Sportswear combines functional construction with freedom of movement. Fastening components are integrated into this relationship to support the structure and usability of the finished product.",
    uses: "SPORTSWEAR · ACTIVEWEAR · PERFORMANCE APPAREL",
    hero: {
      eyebrow: "BUILT FOR PERFORMANCE",
      title: "Precision in",
      accent: "motion.",
      description: "Fastening solutions developed for sportswear where smooth operation, dependable construction and clean design come together."
    }
  }
];

export function getApplication(slug) {
  return applications.find((application) => application.slug === slug);
}

export function getAdjacentApplications(slug) {
  const index = applications.findIndex((application) => application.slug === slug);
  return {
    previous: index > 0 ? applications[index - 1] : null,
    next: index < applications.length - 1 ? applications[index + 1] : null,
  };
}
