import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/data/navigation";
import "./WhatsAppButton.css";

/** "Chat with AF7 on WhatsApp" call to action, opening the pre-filled enquiry. */
export default function WhatsAppButton({
  product,
  label = "Chat with AF7 on WhatsApp",
  variant = "solid",
  className = "",
}) {
  return (
    <a
      href={whatsappLink(product)}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button whatsapp-button-${variant} ${className}`}
    >
      <WhatsAppIcon size={18} className="whatsapp-button-icon" />
      <span>{label}</span>
      <span className="whatsapp-button-arrow" aria-hidden="true">↗</span>
    </a>
  );
}
