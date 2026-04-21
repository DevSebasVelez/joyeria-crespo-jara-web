"use client";

import { useRef } from "react";
import JewelryMosaicGallery, {
  type JewelryGalleryItem,
} from "@/components/gallery/JewelryMosaicGallery";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

const ITEMS: JewelryGalleryItem[] = [
  {
    src: "/images/gallery/DSC09462.jpg",
    alt: "Selección destacada — oro y piedras",
  },
  { src: "/images/gallery/DSC09501.jpg", alt: "Detalle de acabado artesanal" },
  { src: "/images/gallery/DSC09477.jpg", alt: "Pieza en vitrina, luz cálida" },
  {
    src: "/images/gallery/DSC09533.jpg",
    alt: "Arete con diseño contemporáneo",
  },
  { src: "/images/gallery/DSC09484.jpg", alt: "Joyería fina Crespo Jara" },
  {
    src: "/images/gallery/DSC09466.jpg",
    alt: "Anillo con diseño contemporáneo",
  },
];

export default function HomeLuxuryGridSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [{ selector: ".item", direction: "zoom", duration: 0.66, stagger: 0.12 }],
    { start: "top 76%" },
  );

  return (
    <section ref={rootRef} className="bg-[#120e0a] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <h2 className="mb-10 text-3xl text-[#f1dfbf] md:text-5xl">
          Selecciones destacadas de la semana
        </h2>
        <JewelryMosaicGallery items={ITEMS} theme="dark" />
      </div>
    </section>
  );
}
