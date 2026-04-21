"use client";

import Link from "next/link";
import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function HomeFinalCtaSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [{ selector: "section > div", direction: "up", duration: 0.58 }],
    { start: "top 84%" },
  );
  return (
    <section ref={rootRef} className="bg-[#0f0b08] py-20">
      <div className="mx-auto flex w-[min(92%,1200px)] flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl text-[#f3dfbd] md:text-4xl">
          Agenda una asesoria y encuentra la joya ideal
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/colecciones"
            className="rounded-full border border-[#d8bc8d]/45 px-6 py-3 text-sm tracking-[0.14em] text-[#f3dfbd] uppercase"
          >
            Explorar colecciones
          </Link>
          <Link
            href="/contacto"
            className="rounded-full bg-[#dbc39a] px-6 py-3 text-sm font-semibold tracking-[0.14em] text-[#332717] uppercase"
          >
            Contactar ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
