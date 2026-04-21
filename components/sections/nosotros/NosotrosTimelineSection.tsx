"use client";

import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

const MILESTONES = [
  {
    year: "2001",
    detail: "Inicio de Joyeria Crespo Jara con enfoque artesanal.",
  },
  {
    year: "2010",
    detail: "Expansion de colecciones de alta rotacion y piezas de gala.",
  },
  { year: "2018", detail: "Consolidacion del servicio premium personalizado." },
  {
    year: "2026",
    detail: "Evolucion digital para acompanar una experiencia omnicanal.",
  },
];

export default function NosotrosTimelineSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [
      {
        selector: ".milestone",
        direction: "left",
        duration: 0.58,
        stagger: 0.11,
      },
    ],
    { start: "top 78%" },
  );
  return (
    <section ref={rootRef} className="bg-[#1a130d] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <h2 className="text-3xl text-white md:text-5xl">
          Linea de tiempo institucional
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {MILESTONES.map((item) => (
            <article
              key={item.year}
              className="milestone rounded-3xl border border-[#4a3825] bg-[#241a12] p-5"
            >
              <p className="text-lg tracking-[0.12em] text-[#e4c99e]">
                {item.year}
              </p>
              <p className="mt-2 text-sm text-white/72">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
