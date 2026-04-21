import HeroSection from "@/components/sections/home/HeroSection";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavbar from "@/components/layout/SiteNavbar";
import HomeAtelierSection from "@/components/sections/home/HomeAtelierSection";
import HomeFinalCtaSection from "@/components/sections/home/HomeFinalCtaSection";
import HomeJewelryCareGuideSection from "@/components/sections/home/HomeJewelryCareGuideSection";
import HomeLuxuryGridSection from "@/components/sections/home/HomeLuxuryGridSection";
import HomeMaterialsInsightsSection from "@/components/sections/home/HomeMaterialsInsightsSection";
import HomeSignatureSection from "@/components/sections/home/HomeSignatureSection";
import type { Metadata } from "next";
import HomeTestimonialsSection from "@/components/sections/home/HomeTestimonialsSection";
import HomeBuyingGuideSection from "@/components/sections/home/HomeBuyingGuideSection";
import HomeAdvisorPromoSection from "@/components/sections/home/HomeAdvisorPromoSection";

export const metadata: Metadata = {
  title: "Joyeria Crespo Jara | Inicio",
  description:
    "Alta joyeria con diseno exclusivo, colecciones premium y asesoria personalizada en Joyeria Crespo Jara.",
};

export default function Home() {
  return (
    <div className="bg-[#f5f1ea]">
      <SiteNavbar />
      <HeroSection />
      <HomeAdvisorPromoSection />
      <HomeSignatureSection />
      <HomeLuxuryGridSection />
      <HomeMaterialsInsightsSection />
      <HomeJewelryCareGuideSection />
      <HomeTestimonialsSection />
      <HomeBuyingGuideSection />
      <HomeAtelierSection />
      <HomeFinalCtaSection />
      <SiteFooter />
    </div>
  );
}
