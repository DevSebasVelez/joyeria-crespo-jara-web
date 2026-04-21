"use client";

import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function HomeAtelierSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [
      { selector: ".copy", direction: "right", duration: 0.58 },
      { selector: ".media", direction: "left", duration: 0.62, at: 0.12 },
    ],
    { start: "top 76%" },
  );

  return (
    <section ref={rootRef} className="bg-[#f2ebe0] py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-8 lg:grid-cols-2">
        <article className="copy rounded-4xl border border-[#d6bfa0] bg-white p-8">
          <p className="text-xs tracking-[0.2em] text-[#8b6f4d] uppercase">
            Atelier Crespo Jara
          </p>
          <h2 className="mt-3 text-3xl text-[#271d15] md:text-5xl">
            Materiales nobles, procesos precisos
          </h2>
          <p className="mt-4 text-[#5f4f3e]">
            Trabajamos con oro 750, plata 9.25 y acero inoxidable 3.16 bajo
            estandares de control para lograr piezas durables, refinadas y
            equilibradas.
          </p>
          <Link
            href="/materiales"
            className="mt-8 inline-flex rounded-full bg-[#1c140e] px-6 py-3 text-sm tracking-[0.14em] text-[#f2debc] uppercase"
          >
            Ver materiales y cuidados
          </Link>
        </article>
        <article className="media relative min-h-[380px] overflow-hidden rounded-4xl border border-[#cdb493]">
          <Image
            src="/images/gallery/DSC09530.jpg"
            alt="Proceso de alta joyeria"
            fill
            className="object-cover"
          />
        </article>
      </div>
    </section>
  );
}
