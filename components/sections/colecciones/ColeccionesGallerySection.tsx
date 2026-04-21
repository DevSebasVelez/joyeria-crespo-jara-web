"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

const ITEMS = [
  "/images/gallery/DSC09427.jpg",
  "/images/gallery/DSC09446.jpg",
  "/images/gallery/DSC09501.jpg",
  "/images/gallery/DSC09475.jpg",
  "/images/gallery/DSC09531.jpg",
  "/images/gallery/DSC09484.jpg",
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
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {ITEMS.map((src, i) => (
            <article
              key={src}
              className={`item relative overflow-hidden rounded-3xl border border-[#dbc7a6] ${
                i === 0 || i === 4 ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={src}
                alt="Lookbook Joyeria Crespo Jara"
                fill
                className="object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
