"use client";

import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function ContactoCtaSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [{ selector: "section > div", direction: "up", duration: 0.58 }],
    { start: "top 84%" },
  );
  return (
    <section ref={rootRef} className="bg-[#100c08] py-20">
      <div className="mx-auto flex w-[min(92%,1200px)] flex-wrap items-center justify-between gap-4">
        <h3 className="text-2xl text-[#f2debc] md:text-4xl">
          Respuesta rapida y acompanamiento profesional
        </h3>
        <a
          href="https://wa.me/593986517333"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#dbc39a] px-6 py-3 text-sm font-semibold tracking-[0.14em] text-[#332717] uppercase"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  );
}
