import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/data/navigation";
import "./FloatingWhatsApp.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with AF7 on WhatsApp"
    >
      <WhatsAppIcon size={26} />
      <span className="floating-whatsapp-tooltip" role="tooltip">
        Chat with AF7
      </span>
    </a>
  );
}
