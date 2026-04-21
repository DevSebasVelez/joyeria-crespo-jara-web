"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function MaterialesHeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(rootRef, [
    { selector: ".hero-item", direction: "left", duration: 0.6, stagger: 0.11 },
  ]);
  return (
    <section
      ref={rootRef}
      className="relative min-h-[70vh] overflow-hidden bg-[#120e0a] pt-36 pb-20"
    >
      <Image
        src="/images/gallery/DSC09530.jpg"
        alt="Materiales de alta joyeria"
        fill
        className="object-cover opacity-35"
      />
      <div className="relative mx-auto w-[min(92%,1200px)]">
        <p className="hero-item text-xs tracking-[0.2em] text-[#d6b98a] uppercase">
          Materiales y calidad
        </p>
        <h1 className="hero-item mt-4 max-w-4xl text-4xl text-white md:text-6xl">
          La calidad se define en el detalle tecnico
        </h1>
        <p className="hero-item mt-6 max-w-2xl text-white/75">
          Oro 750, plata 9.25 y acero inoxidable 3.16 con protocolos de control
          y recomendaciones de cuidado.
        </p>
      </div>
    </section>
  );
}
