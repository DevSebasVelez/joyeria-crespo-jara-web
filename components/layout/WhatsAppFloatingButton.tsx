import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_HREF = "https://wa.me/593986517333";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-[max(1rem,env(safe-area-inset-right,0px))] bottom-[max(1rem,env(safe-area-inset-bottom,0px))] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(0,0,0,0.28)] ring-1 ring-white/25 transition-transform duration-200 hover:scale-105 hover:shadow-[0_10px_32px_rgba(0,0,0,0.32)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] active:scale-95 sm:right-6 sm:bottom-6 sm:h-15 sm:w-15"
      aria-label="Escribir por WhatsApp a Joyería Crespo Jara"
    >
      <FaWhatsapp
        className="h-[1.65rem] w-[1.65rem] sm:h-7 sm:w-7"
        aria-hidden
      />
    </a>
  );
}
