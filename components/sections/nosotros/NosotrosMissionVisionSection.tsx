"use client";

import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function NosotrosMissionVisionSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [{ selector: ".card", direction: "right", duration: 0.62, stagger: 0.14 }],
    { start: "top 78%" },
  );
  return (
    <section ref={rootRef} className="bg-[#f6efe5] py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-6 lg:grid-cols-2">
        <article className="card rounded-4xl border border-[#d9c4a2] bg-white p-8">
          <h2 className="text-3xl text-[#2d2218]">Mision</h2>
          <p className="mt-4 leading-relaxed text-[#5f4f3f]">
            Ofrecer joyas de alta calidad que reflejen elegancia, estilo y
            significado, con materiales finos y servicio personalizado para cada
            momento especial.
          </p>
        </article>
        <article className="card rounded-4xl border border-[#45331f] bg-[#16110d] p-8">
          <h2 className="text-3xl text-[#f3dfbc]">Vision</h2>
          <p className="mt-4 leading-relaxed text-[#d8c7aa]">
            Ser referentes nacionales e internacionales por excelencia en
            diseno, calidad, innovacion y confianza dentro del universo de alta
            joyeria.
          </p>
        </article>
      </div>
    </section>
  );
}
