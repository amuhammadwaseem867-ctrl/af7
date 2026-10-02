"use client";

import { useState } from "react";

const inquiryTypes = [
  "Product Inquiry",
  "Sample Request",
  "Business Inquiry",
  "General Inquiry",
];

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const requiredFields = [
      formData.get("name"),
      formData.get("email"),
      formData.get("inquiry"),
      formData.get("message"),
    ];

    if (requiredFields.some((value) => !value || !String(value).trim())) {
      setStatusMessage("Please complete the required fields before sending your inquiry.");
      return;
    }

    setStatusMessage(
      "This form is ready for backend integration. Connect it to your preferred email or CRM endpoint to receive submissions."
    );
    form.reset();
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-heading">
        <span>INQUIRY / 01</span>
        <p>
          Tell us what you are looking for and we&apos;ll have the right conversation.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-row">
          <div className="contact-form-field">
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="email">EMAIL</label>
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
            <label htmlFor="inquiry">INQUIRY TYPE</label>
            <select id="inquiry" name="inquiry" defaultValue="" required>
              <option value="" disabled>
                Select inquiry type
              </option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="contact-form-field contact-form-message">
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder="Tell us about your requirement"
            required
          />
        </div>

        <button type="submit" className="contact-submit">
          <span>Send Inquiry</span>
          <span aria-hidden="true">↗</span>
        </button>

        {statusMessage ? (
          <p className="contact-form-status" aria-live="polite">
            {statusMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
}
