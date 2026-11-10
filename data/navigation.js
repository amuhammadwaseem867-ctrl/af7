export const navItems = [
  { label: "About AF7", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Quality Assurance", href: "/quality" },
  { label: "Customization", href: "/customization" },
  { label: "Applications", href: "/applications" },
  { label: "Enquire on WhatsApp", href: "/whatsapp-enquiry" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  phone: "+92 313 4710325",
  phoneHref: "tel:+923134710325",
  whatsapp: "923134710325",
  instagram: "https://www.instagram.com/af7trims?stkn=ZmVyNscHJrY2J1",
  instagramHandle: "@af7trims",
  facebook:
    "https://www.facebook.com/profile.php?id=61584996430125&mibextid=wwXIfr",
  address: "33B, Punjab Small Industries Corporation, Sunder II, Lahore, Pakistan",
  // Exact pin for the factory on Google Maps.
  map: "https://www.google.com/maps/place/Apparel+Fastener/@31.3153592,74.1544612,20z/data=!4m6!3m5!1s0x391855001d700fb3:0xb32bce98e5fa04be!8m2!3d31.3152995!4d74.1545036!16s%2Fg%2F11lzklmg8w",
};

// WhatsApp Business enquiries (AF7 Website Content, appendix).
export const whatsapp = {
  number: "+92 313 4710325",
  hours: "9:00 AM to 6:00 PM (PKT)",
  base: `https://wa.me/${contact.whatsapp}`,
};

const enquiryFields = ["Product type", "Size", "Finish/Colour", "Quantity", "Application"];

/**
 * WhatsApp chat link with AF7's pre-filled enquiry template.
 * Pass a product name to fill in the "Product type" line.
 */
export function whatsappLink(product) {
  const lines = [
    "Hello AF7, I would like to enquire about your zippers/accessories.",
    ...enquiryFields.map((field) =>
      field === "Product type" && product ? `${field}: ${product}` : `${field}:`
    ),
  ];
  return `${whatsapp.base}?text=${encodeURIComponent(lines.join("\n"))}`;
}
