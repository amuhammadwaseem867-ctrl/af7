"use client";

import { Phone, MapPin } from "lucide-react";
import "./FloatingContact.css";

const contactLinks = [
  {
    label: "Call AF7",
    href: "tel:+923134710325",
    type: "phone",
    icon: Phone,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/af7trims?stkn=ZmVyNscHJrY2J1",
    type: "instagram",
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61584996430125&mibextid=wwXIfr",
    type: "facebook",
    external: true,
  },
  {
    label: "Location",
    href: "https://www.google.com/maps/search/?api=1&query=33b%20Punjab%20Small%20Industries%20Corporation%20Sunder%20II%20Lahore%20Pakistan",
    type: "location",
    icon: MapPin,
    external: true,
  },
];

export default function FloatingContact() {
  return (
    <div className="floating-contact" aria-label="AF7 contact links">
      {contactLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            className="floating-contact__button"
            aria-label={item.label}
            title={item.label}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {item.type === "instagram" ? (
              <span
                className="floating-contact__instagram"
                aria-hidden="true"
              >
                ◎
              </span>
            ) : item.type === "facebook" ? (
              <span
                className="floating-contact__facebook"
                aria-hidden="true"
              >
                f
              </span>
            ) : (
              <Icon
                size={17}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            )}

            <span className="floating-contact__label">
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}