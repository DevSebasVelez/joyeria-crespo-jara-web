import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavbar from "@/components/layout/SiteNavbar";
import MaterialesCareSection from "@/components/sections/materiales/MaterialesCareSection";
import MaterialesCtaSection from "@/components/sections/materiales/MaterialesCtaSection";
import MaterialesHeroSection from "@/components/sections/materiales/MaterialesHeroSection";
import MaterialesProcessSection from "@/components/sections/materiales/MaterialesProcessSection";
import MaterialesSpecsSection from "@/components/sections/materiales/MaterialesSpecsSection";

export const metadata: Metadata = {
  title: "Joyeria Crespo Jara | Materiales",
  description:
    "Conoce los materiales premium de Joyeria Crespo Jara: oro 750, plata 9.25 y acero inoxidable 3.16 con garantia de calidad.",
};

export default function MaterialesPage() {
  return (
    <div className="bg-[#f5f1ea]">
      <SiteNavbar />
      <MaterialesHeroSection />
      <MaterialesSpecsSection />
      <MaterialesProcessSection />
      <MaterialesCareSection />
      <MaterialesCtaSection />
      <SiteFooter />
    </div>
  );
}
