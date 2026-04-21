"use client";

import { useRef } from "react";
import JewelryMosaicGallery, {
  type JewelryGalleryItem,
} from "@/components/gallery/JewelryMosaicGallery";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

const ITEMS: JewelryGalleryItem[] = [
  {
    src: "/images/gallery/DSC09427.jpg",
    alt: "Lookbook — composición en tonos cálidos",
  },
  { src: "/images/gallery/DSC09446.jpg", alt: "Detalle de textura y brillo" },
  { src: "/images/gallery/DSC09501.jpg", alt: "Pieza curada para el lookbook" },
  { src: "/images/gallery/DSC09475.jpg", alt: "Colección en ambiente natural" },
  { src: "/images/gallery/DSC09531.jpg", alt: "Contraste luz y metal" },
  { src: "/images/gallery/DSC09484.jpg", alt: "Cierre del lookbook" },
];

export default function ColeccionesGallerySection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [{ selector: ".item", direction: "zoom", duration: 0.66, stagger: 0.1 }],
    { start: "top 78%" },
  );
  return (
    <section ref={rootRef} className="bg-[#f8f1e8] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <h2 className="mb-10 text-3xl text-[#241c14] md:text-5xl">
          Lookbook curado
        </h2>
        <JewelryMosaicGallery items={ITEMS} theme="light" />
      </div>
    </section>
  );
}
