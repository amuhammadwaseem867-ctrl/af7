"use client";

import { Phone, MapPin } from "lucide-react";
import { contact } from "@/data/navigation";
import "./FloatingContact.css";

const contactLinks = [
  {
    label: "Call AF7",
    href: contact.phoneHref,
    type: "phone",
    icon: Phone,
  },
  {
    label: "Instagram",
    href: contact.instagram,
    type: "instagram",
    external: true,
  },
  {
    label: "Facebook",
    href: contact.facebook,
    type: "facebook",
    external: true,
  },
  {
    label: "Location",
    href: contact.map,
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