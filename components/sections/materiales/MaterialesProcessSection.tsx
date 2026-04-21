"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function MaterialesProcessSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [{ selector: ".item", direction: "right", duration: 0.62, stagger: 0.14 }],
    { start: "top 78%" },
  );
  return (
    <section ref={rootRef} className="bg-[#17110c] py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-8 lg:grid-cols-2">
        <article className="item rounded-4xl border border-[#463522] bg-[#221910] p-8">
          <h2 className="text-3xl text-white md:text-4xl">
            Control de calidad en 4 etapas
          </h2>
          <ol className="mt-6 space-y-3 text-white/72">
            <li>1. Verificacion de material y estructura.</li>
            <li>2. Revision de terminaciones y simetria.</li>
            <li>3. Prueba de resistencia segun tipo de pieza.</li>
            <li>4. Validacion final de brillo y presentacion.</li>
          </ol>
        </article>
        <article className="item relative min-h-[360px] overflow-hidden rounded-4xl border border-[#463522]">
          <Image
            src="/images/gallery/DSC09556.jpg"
            alt="Control de calidad joyera"
            fill
            className="object-cover"
          />
        </article>
      </div>
    </section>
  );
}
