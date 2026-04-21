import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavbar from "@/components/layout/SiteNavbar";
import NosotrosCtaSection from "@/components/sections/nosotros/NosotrosCtaSection";
import NosotrosHeroSection from "@/components/sections/nosotros/NosotrosHeroSection";
import NosotrosMissionVisionSection from "@/components/sections/nosotros/NosotrosMissionVisionSection";
import NosotrosTimelineSection from "@/components/sections/nosotros/NosotrosTimelineSection";
import NosotrosValuesGallerySection from "@/components/sections/nosotros/NosotrosValuesGallerySection";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la historia, misión, visión y valores de Joyería Crespo Jara, marca de alta joyería fundada en 2001.",
  openGraph: {
    url: "/nosotros",
    description:
      "Historia, misión, visión y valores de una marca de alta joyería fundada en 2001.",
  },
  alternates: { canonical: "/nosotros" },
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
