import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavbar from "@/components/layout/SiteNavbar";
import ContactoChannelsSection from "@/components/sections/contacto/ContactoChannelsSection";
import ContactoCtaSection from "@/components/sections/contacto/ContactoCtaSection";
import ContactoHeroSection from "@/components/sections/contacto/ContactoHeroSection";
import ContactoMapSection from "@/components/sections/contacto/ContactoMapSection";
import ContactoVisitSection from "@/components/sections/contacto/ContactoVisitSection";

export const metadata: Metadata = {
  title: "Joyeria Crespo Jara | Contacto",
  description:
    "Contacta a Joyeria Crespo Jara por WhatsApp, Instagram o Facebook. Revisa horarios y ubicacion en mapa.",
};

export default function ContactoPage() {
  return (
    <div className="bg-[#f5f1ea]">
      <SiteNavbar />
      <ContactoHeroSection />
      <ContactoChannelsSection />
      <ContactoVisitSection />
      <ContactoMapSection />
      <ContactoCtaSection />
      <SiteFooter />
    </div>
  );
}
