"use client";

import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function ContactoHeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(rootRef, [
    { selector: ".item", direction: "right", duration: 0.6, stagger: 0.11 },
  ]);
  return (
    <section ref={rootRef} className="bg-[#120e0a] pt-36 pb-20">
      <div className="mx-auto w-[min(92%,1200px)]">
        <p className="item text-xs tracking-[0.2em] text-[#d6b98a] uppercase">
          Contacto
        </p>
        <h1 className="item mt-4 max-w-4xl text-4xl text-white md:text-6xl">
          Atencion directa, profesional y sin formularios
        </h1>
        <p className="item mt-6 max-w-2xl text-white/75">
          Te atendemos por WhatsApp, Instagram o Facebook y coordinamos tu
          visita con asesoria personalizada.
        </p>
      </div>
    </section>
  );
}
