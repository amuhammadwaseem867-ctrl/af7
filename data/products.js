// Product range: mirrors the AF7 company profile catalogue (names, order,
// reference codes, copy and photography).
const P = "/images/products";

export const productFilters = [
  { id: "all", label: "All" },
  { id: "metal", label: "Metal" },
  { id: "aluminium", label: "Aluminium" },
  { id: "synthetic", label: "Nylon & Vislon" },
  { id: "accessories", label: "Accessories" },
];

const range = [
  {
    slug: "metal-zippers-5",
    code: "M·05",
    size: "#5",
    name: "Metal Zippers",
    family: "metal",
    familyLabel: "Metal",
    category: "ZIPPER SYSTEM",
    material: "METAL",
    summary:
      "Robust metal zipper solutions for garments and applications requiring a distinctive, durable fastening component.",
    description:
      "AF7 manufactures #5 Metal Zippers for garment and accessory applications where metal teeth contribute to the product's appearance and fastening function. Attention is given to tooth formation, chain construction, finishing, and the intended application.",
    applications: "APPAREL · DENIM · OUTERWEAR",
    images: [
      `${P}/brasszippers5/1.webp`,
      `${P}/brasszippers5/2.webp`,
      `${P}/brasszippers5/3.webp`,
      `${P}/brasszippers5/4.webp`,
      `${P}/brasszippers5/5.webp`,
      `${P}/brasszippers5/6.webp`,
      `${P}/brasszippers5/7.webp`,
      `${P}/brasszippers5/8.webp`,
      `${P}/brasszippers5/9.webp`,
      `${P}/brasszippers5/10.webp`,
      `${P}/brasszippers5/alumunium.webp`,
      `${P}/brasszippers5/IMG_2071.webp`,
      `${P}/brasszippers5/IMG_2074.webp`,
      `${P}/brasszippers5/IMG_2077.webp`,
    ],
  },
  {
    slug: "metal-zippers-4-5",
    code: "M·4.5",
    size: "#4.5",
    name: "Metal Zippers",
    family: "metal",
    familyLabel: "Metal",
    category: "ZIPPER SYSTEM",
    material: "METAL",
    summary:
      "A refined metal zipper option for applications requiring a more compact profile with reliable functionality.",
    description:
      "AF7 manufactures #4.5 Metal Zippers for garment and accessory applications where metal teeth contribute to the product's appearance and fastening function. Attention is given to tooth formation, chain construction, finishing, and the intended application.",
    applications: "APPAREL · DENIM · BAGS",
    images: [
      `${P}/brasszippers4.5/1.webp`,
      `${P}/brasszippers4.5/2.webp`,
      `${P}/brasszippers4.5/3.webp`,
      `${P}/brasszippers4.5/4.webp`,
      `${P}/brasszippers4.5/images.webp`,
    ],
  },
  {
    slug: "aluminium-zippers-5",
    code: "A·05",
    size: "#5",
    name: "Aluminium Zippers",
    family: "aluminium",
    familyLabel: "Aluminium",
    category: "ZIPPER SYSTEM",
    material: "ALUMINIUM",
    summary:
      "Lightweight aluminium zipper solutions combining functional performance with a distinctive metallic appearance.",
    description:
      "Our #5 Aluminium Zippers provide aluminium-based fastening options for designs requiring a distinctive metallic look and functional performance. Suitable construction and finishing are considered according to the customer's product requirements.",
    applications: "APPAREL · BAGS · OUTERWEAR",
    images: [
      `${P}/alumuniumzipper5/1.webp`,
      `${P}/alumuniumzipper5/2.webp`,
      `${P}/alumuniumzipper5/3.webp`,
      `${P}/alumuniumzipper5/4.webp`,
    ],
  },
  {
    slug: "aluminium-zippers-4-5",
    code: "A·4.5",
    size: "#4.5",
    name: "Aluminium Zippers",
    family: "aluminium",
    familyLabel: "Aluminium",
    category: "ZIPPER SYSTEM",
    material: "ALUMINIUM",
    summary:
      "A compact aluminium zipper option for applications requiring a refined profile and metallic finish.",
    description:
      "Our #4.5 Aluminium Zippers provide aluminium-based fastening options for designs requiring a distinctive metallic look and functional performance. Suitable construction and finishing are considered according to the customer's product requirements.",
    applications: "APPAREL · BAGS · OUTERWEAR",
    images: [
      `${P}/alumuniumzippers4.5/1.webp`,
      `${P}/alumuniumzippers4.5/2.webp`,
      `${P}/alumuniumzippers4.5/3.webp`,
      `${P}/alumuniumzippers4.5/4.webp`,
      `${P}/alumuniumzippers4.5/images.webp`,
    ],
  },
  {
    slug: "two-way-zippers",
    code: "2W·01",
    size: null,
    name: "Two-Way Zippers",
    family: "synthetic",
    familyLabel: "Two-Way",
    category: "ZIPPER SYSTEM",
    material: "TWO-WAY",
    summary:
      "Versatile two-way zipper solutions for garments and applications requiring opening from both ends.",
    description:
      "Versatile two-way zipper solutions for garments and applications requiring opening from both ends. Zipper size, tape colour, construction and finish can be discussed according to the intended application.",
    applications: "OUTERWEAR · JACKETS · BAGS",
    images: [
      `${P}/2wayzippers/black.webp`,
      `${P}/2wayzippers/black2.webp`,
      `${P}/2wayzippers/burgandry.webp`,
      `${P}/2wayzippers/grey.webp`,
      `${P}/2wayzippers/navy.webp`,
      `${P}/2wayzippers/nvy.webp`,
      `${P}/2wayzippers/white.webp`,
      `${P}/2wayzippers/white-tape.webp`,
    ],
  },
  {
    slug: "nylon-zippers",
    code: "N·01",
    size: null,
    name: "Nylon Zippers",
    family: "synthetic",
    familyLabel: "Nylon",
    category: "ZIPPER SYSTEM",
    material: "NYLON",
    summary:
      "Flexible and versatile zipper solutions for a wide range of apparel and accessory applications.",
    description:
      "Nylon zippers offer a flexible and versatile fastening option for a wide variety of garments and accessories. Product selection can be discussed according to the intended application, zipper size, tape requirements, colour, and functional needs.",
    applications: "SPORTSWEAR · APPAREL · BAGS",
    images: [
      `${P}/nylonzippers/1.webp`,
      `${P}/nylonzippers/2.webp`,
      `${P}/nylonzippers/3.webp`,
      `${P}/nylonzippers/4.webp`,
      `${P}/nylonzippers/5.webp`,
      `${P}/nylonzippers/6.webp`,
    ],
  },
  {
    slug: "vislon-zippers",
    code: "V·01",
    size: null,
    name: "Vislon Zippers",
    family: "synthetic",
    familyLabel: "Vislon",
    category: "ZIPPER SYSTEM",
    material: "VISLON",
    summary:
      "Moulded-tooth zipper solutions suitable for casualwear, sportswear, outerwear, and other functional applications.",
    description:
      "Vislon-style zippers feature moulded plastic teeth and are used across a range of apparel and accessory applications. AF7 can discuss suitable options based on the desired appearance, construction, size, and end use.",
    applications: "CASUALWEAR · SPORTSWEAR · OUTERWEAR",
    images: [
      `${P}/vislonzipper/1.webp`,
      `${P}/vislonzipper/2.webp`,
      `${P}/vislonzipper/3.webp`,
      `${P}/vislonzipper/4.webp`,
    ],
  },
  {
    slug: "tag-strings",
    code: "T·01",
    size: null,
    name: "Tag Strings",
    family: "accessories",
    familyLabel: "Accessory",
    category: "GARMENT ACCESSORY",
    material: "ACCESSORY",
    summary:
      "Practical attachment solutions for garment tags, hangtags, labels, and product identification.",
    description:
      "Tag strings provide a practical attachment solution for hangtags, labels, and retail identification on garments and accessories. Specifications and presentation can be discussed according to the customer's product and branding requirements.",
    applications: "HANGTAGS · LABELS · RETAIL",
    images: [`${P}/tagstring/1.webp`, `${P}/tagstring/2.webp`],
  },
  {
    slug: "tipping",
    code: "T·02",
    size: null,
    name: "Tipping & TPU Tippings",
    family: "accessories",
    familyLabel: "Accessory",
    category: "GARMENT ACCESSORY",
    material: "ACCESSORY",
    summary:
      "Finishing components for suitable cords and drawstrings, designed for a neat and refined end finish.",
    description:
      "Tipping is used to finish the ends of suitable cords and drawstrings, helping create a neat and complete appearance. TPU tippings provide a thermoplastic polyurethane finishing option for compatible cords and drawstrings. Available material, shape, size, and colour options should be confirmed against the required application and production capabilities.",
    applications: "CORDS · DRAWSTRINGS · APPAREL",
    images: [`${P}/tipping/1.webp`, `${P}/tipping/2.webp`],
  },
];

export const products = range.map((product, index) => ({
  ...product,
  number: String(index + 1).padStart(2, "0"),
  title: product.size ? `${product.size} ${product.name}` : product.name,
  cover: product.images[0],
}));

export const productMaterials = ["All", ...new Set(products.map((p) => p.material))];

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export function getAdjacentProducts(slug) {
  const index = products.findIndex((product) => product.slug === slug);
  return {
    previous: index > 0 ? products[index - 1] : null,
    next: index < products.length - 1 ? products[index + 1] : null,
  };
}
