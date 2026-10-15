"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import { accessories } from "@/data/company";
import { contact } from "@/data/navigation";

const inquiryTypes = [
  "Product Enquiry",
  "Samples",
  "Specifications",
  "Customization",
  "Manufacturing Requirements",
];

const productOptions = [
  ...products.map((product) => product.title),
  ...accessories.map((item) => item.title),
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselected = products.find(
    (product) => product.slug === searchParams.get("product")
  );

  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const missing = ["name", "email", "inquiry", "message"].filter(
      (field) => !String(data[field] || "").trim()
    );

    if (missing.length) {
      setStatus({
        type: "error",
        text: "Please complete the required fields before sending your enquiry.",
      });
      form.querySelector(`[name="${missing[0]}"]`)?.focus();
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(String(data.email))) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      form.querySelector('[name="email"]')?.focus();
      return;
    }

    const lines = [
      `Hello AF7, I have a ${data.inquiry.toLowerCase()}.`,
      "",
      `Name: ${data.name}`,
      data.company ? `Company: ${data.company}` : null,
      `Email: ${data.email}`,
      data.product ? `Product: ${data.product}` : null,
      "",
      data.message,
    ].filter((line) => line !== null);

    const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setStatus({
      type: "success",
      text: "Your enquiry is ready in WhatsApp — press send there to reach the AF7 team.",
    });
    form.reset();
  };

  return (
    <motion.div
      className="contact-form-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="contact-form-heading">
        <span>ENQUIRY / 01</span>
        <p>
          Product enquiries, samples, specifications, customization or
          manufacturing requirements — tell us what you need.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-row">
          <div className="contact-form-field">
            <label htmlFor="name">NAME *</label>
            <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </div>

          <div className="contact-form-field">
            <label htmlFor="email">EMAIL *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className="contact-form-row">
          <div className="contact-form-field">
            <label htmlFor="company">COMPANY</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company name"
              autoComplete="organization"
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="inquiry">ENQUIRY TYPE *</label>
            <select id="inquiry" name="inquiry" defaultValue={preselected ? "Product Enquiry" : ""} required>
              <option value="" disabled>
                Select enquiry type
              </option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="contact-form-field">
          <label htmlFor="product">PRODUCT</label>
          <select id="product" name="product" defaultValue={preselected?.title ?? ""}>
            <option value="">Not sure yet / multiple products</option>
            {productOptions.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>

        <div className="contact-form-field contact-form-message">
          <label htmlFor="message">MESSAGE *</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Zipper type and size, material, tape colour, finish, quantity…"
            required
          />
        </div>

        <button type="submit" className="contact-submit">
          <span>Send via WhatsApp</span>
          <span aria-hidden="true">↗</span>
        </button>

        <div aria-live="polite">
          <AnimatePresence mode="wait">
            {status ? (
              <motion.p
                key={status.text}
                className={`contact-form-status is-${status.type}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {status.text}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </form>
    </motion.div>
  );
}
