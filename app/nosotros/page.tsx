import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavbar from "@/components/layout/SiteNavbar";
import NosotrosCtaSection from "@/components/sections/nosotros/NosotrosCtaSection";
import NosotrosHeroSection from "@/components/sections/nosotros/NosotrosHeroSection";
import NosotrosMissionVisionSection from "@/components/sections/nosotros/NosotrosMissionVisionSection";
import NosotrosTimelineSection from "@/components/sections/nosotros/NosotrosTimelineSection";
import NosotrosValuesGallerySection from "@/components/sections/nosotros/NosotrosValuesGallerySection";

export const metadata: Metadata = {
  title: "Joyeria Crespo Jara | Nosotros",
  description:
    "Conoce la historia, mision, vision y valores de Joyeria Crespo Jara, marca de alta joyeria fundada en 2001.",
};

export default function NosotrosPage() {
  return (
    <div className="bg-[#f5f1ea]">
      <SiteNavbar />
      <NosotrosHeroSection />
      <NosotrosMissionVisionSection />
      <NosotrosTimelineSection />
      <NosotrosValuesGallerySection />
      <NosotrosCtaSection />
      <SiteFooter />
    </div>
  );
}
