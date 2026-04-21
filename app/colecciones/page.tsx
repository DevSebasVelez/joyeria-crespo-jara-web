import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavbar from "@/components/layout/SiteNavbar";
import ColeccionesAdvisorSection from "@/components/sections/colecciones/ColeccionesAdvisorSection";
import ColeccionesCtaSection from "@/components/sections/colecciones/ColeccionesCtaSection";
import ColeccionesGallerySection from "@/components/sections/colecciones/ColeccionesGallerySection";
import ColeccionesHeroSection from "@/components/sections/colecciones/ColeccionesHeroSection";
import ColeccionesServiceSection from "@/components/sections/colecciones/ColeccionesServiceSection";

export const metadata: Metadata = {
  title: "Colecciones",
  description:
    "Explora colecciones de anillos, collares y pulseras exclusivas en Joyería Crespo Jara con asesoría personalizada.",
  openGraph: {
    url: "/colecciones",
    description:
      "Explora colecciones de anillos, collares y pulseras exclusivas con asesoría personalizada.",
  },
  alternates: { canonical: "/colecciones" },
};

export default function ColeccionesPage() {
  return (
    <div className="bg-[#f5f1ea]">
      <SiteNavbar />
      <ColeccionesHeroSection />
      <ColeccionesGallerySection />
      <ColeccionesAdvisorSection />
      <ColeccionesServiceSection />
      <ColeccionesCtaSection />
      <SiteFooter />
    </div>
  );
}
