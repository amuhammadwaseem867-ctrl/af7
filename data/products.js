// Product range, mirrors the AF7 company profile catalogue (names, order,
// reference codes, copy and photography).
const P = "/images/products";

export const productFilters = [
  { id: "all", label: "All" },
  { id: "metal", label: "Metal" },
  { id: "aluminium", label: "Aluminium" },
  { id: "synthetic", label: "Nylon & Vislon" },
  { id: "accessories", label: "Accessories" },
];

// Tape colour options shown on the product page. The finish stays the same
// while only the tape colour changes.
const T = `${P}/tape-colours`;
const TAPE_SET = [
  ["black", "Black", "#1c1c1e"],
  ["navy", "Navy", "#1f2b47"],
  ["burgundy", "Burgundy", "#6b1d2c"],
  ["red", "Red", "#b0262f"],
  ["forest-green", "Forest Green", "#2e4a38"],
  ["olive", "Olive", "#4d5130"],
  ["brown", "Brown", "#4a3427"],
  ["grey", "Grey", "#85888c"],
];

const tapesFor = (folder) =>
  TAPE_SET.map(([slug, name, color]) => ({
    name,
    color,
    image: `${T}/${folder}/${slug}.webp`,
  }));

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
    tapes: tapesFor("metal5-black-golden-brass-separating"),
    images: [
      `${P}/photos/metal5-cream-antique-brass.webp`,
      `${P}/photos/metal5-black-golden-brass-separating.webp`,
      `${P}/photos/metal5-black-antique-brass-separating.webp`,
      `${P}/photos/metal5-olive-nickel-separating.webp`,
      `${P}/photos/metal5-black-antique-silver-separating.webp`,
      `${P}/photos/metal5-brown-antique-brass-separating.webp`,
      `${P}/photos/metal5-black-antique-brass-separating-2.webp`,
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
    tapes: tapesFor("metal45-black-antique-brass"),
    images: [
      `${P}/photos/metal45-black-golden-brass.webp`,
      `${P}/photos/metal45-black-antique-copper.webp`,
      `${P}/photos/metal45-black-antique-brass-2.webp`,
      `${P}/photos/metal45-black-antique-brass.webp`,
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
    tapes: tapesFor("alu5-black-silver-separating-2"),
    images: [
      `${P}/photos/alu5-black-silver-separating-2.webp`,
      `${P}/photos/alu5-navy-silver-separating.webp`,
      `${P}/photos/alu5-black-silver-separating.webp`,
      `${P}/photos/alu5-black-silver-separating-3.webp`,
      `${P}/photos/alu5-navy-silver-separating-2.webp`,
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
    tapes: tapesFor("alu45-black-light-gold"),
    images: [
      `${P}/photos/alu45-black-light-gold.webp`,
      `${P}/photos/alu45-white-silver.webp`,
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
    tapes: [
      { name: "Black", color: "#1c1c1e", image: `${P}/two-way/black.webp` },
      { name: "Navy", color: "#1f2b47", image: `${P}/two-way/navy.webp` },
      { name: "Grey", color: "#7d7570", image: `${P}/two-way/grey.webp` },
      { name: "White", color: "#f1efe9", image: `${P}/two-way/white.webp` },
    ],
    images: [
      `${P}/two-way/black.webp`,
      `${P}/two-way/black2.webp`,
      `${P}/two-way/burgandry.webp`,
      `${P}/two-way/grey.webp`,
      `${P}/two-way/navy.webp`,
      `${P}/two-way/nvy.webp`,
      `${P}/two-way/white.webp`,
      `${P}/two-way/white-tape.webp`,
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
    tapes: tapesFor("nylon-black-silver-slider"),
    images: [
      `${P}/photos/nylon-black-silver-slider.webp`,
      `${P}/photos/nylon-black-invisible.webp`,
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
    tapes: [
      { name: "Blue", color: "#1f4fb8", image: `${T}/vislon/blue.webp` },
      { name: "Red", color: "#d0202a", image: `${T}/vislon/red.webp` },
      { name: "Orange", color: "#f07a1a", image: `${T}/vislon/orange.webp` },
      { name: "Yellow", color: "#f2cf2e", image: `${T}/vislon/yellow.webp` },
      { name: "Green", color: "#3f9a45", image: `${T}/vislon/green.webp` },
      { name: "Purple", color: "#5b2a8c", image: `${T}/vislon/purple.webp` },
      { name: "Pink", color: "#e8579b", image: `${T}/vislon/pink.webp` },
      { name: "Black", color: "#1c1c1e", image: `${T}/vislon/black.webp` },
    ],
    images: [
      `${T}/vislon/blue.webp`,
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
    images: [
      `${P}/photos/tagstring-black-1.webp`,
      `${P}/photos/tagstring-white-1.webp`,
      `${P}/photos/tagstring-black-2.webp`,
      `${P}/photos/tagstring-white-2.webp`,
      `${P}/photos/tagstring-black-3.webp`,
      `${P}/photos/tagstring-white-3.webp`,
      `${P}/photos/tagstring-white-4.webp`,
    ],
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
    images: [
      `${P}/photos/tipping-black-1.webp`,
      `${P}/photos/tipping-white-1.webp`,
      `${P}/photos/tipping-black-2.webp`,
      `${P}/photos/tipping-white-2.webp`,
    ],
  },
];

export const products = range.map((product, index) => ({
  ...product,
  number: String(index + 1).padStart(2, "0"),
  title: product.size ? `${product.size} ${product.name}` : product.name,
  cover: product.cover ?? product.images[0],
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

// Zipper pullers, shown as their own section on the products page.
export const pullersIntro =
  "Pullers for #4.5 and #5 zippers, produced in a range of shapes and metal finishes. Shape, size and finish can be matched to the zipper and the garment.";

const pullerList = [
  [195, "Matt nickel"], [197, "Black"], [199, "Gunmetal"], [201, "Nickel"],
  [203, "Gold"], [205, "Nickel"], [207, "Antique brass"], [209, "Black nickel"],
  [211, "Gunmetal"], [213, "Nickel"], [215, "Nickel"], [217, "Nickel"],
  [221, "Black nickel"], [223, "Nickel"], [225, "Antique brass"], [227, "Gunmetal"],
  [229, "Gunmetal"], [231, "Gold"], [233, "Gunmetal"], [235, "Antique brass"],
  [237, "Gold"], [239, "Nickel"], [241, "Matt nickel"], [243, "Nickel"],
  [245, "Nickel"], [247, "Golden brass"], [249, "Gunmetal"], [251, "Antique copper"],
];

export const pullers = pullerList.map(([n, finish], index) => ({
  code: `P·${String(index + 1).padStart(2, "0")}`,
  finish,
  image: `${P}/pullers/p${n}.webp`,
}));
