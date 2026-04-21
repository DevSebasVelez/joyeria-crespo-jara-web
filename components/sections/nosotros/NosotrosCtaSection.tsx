"use client";

import Link from "next/link";
import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function NosotrosCtaSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [{ selector: "section > div", direction: "up", duration: 0.58 }],
    { start: "top 84%" },
  );
  return (
    <section ref={rootRef} className="bg-[#f4ede3] py-20">
      <div className="mx-auto flex w-[min(92%,1200px)] flex-wrap items-center justify-between gap-4">
        <h3 className="text-2xl text-[#2f2419] md:text-4xl">
          Conoce nuestras piezas insignia y ediciones especiales
        </h3>
        <Link
          href="/colecciones"
          className="rounded-full bg-[#2a2016] px-6 py-3 text-sm tracking-[0.14em] text-[#f0ddbc] uppercase"
        >
          Ir a colecciones
        </Link>
      </div>
    </section>
  );
}
