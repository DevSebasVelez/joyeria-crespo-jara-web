"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".milestone"), { autoAlpha: 0, y: 20 });
      gsap.to(q(".milestone"), {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
      });
    },
    { scope: rootRef },
  );
  return (
    <section ref={rootRef} className="bg-[#1a130d] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <h2 className="text-3xl text-[#f3dfbc] md:text-5xl">
          Linea de tiempo institucional
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {MILESTONES.map((item) => (
            <article
              key={item.year}
              className="milestone rounded-3xl border border-[#4a3825] bg-[#241a12] p-5"
            >
              <p className="text-lg tracking-[0.12em] text-[#dcbf92]">
                {item.year}
              </p>
              <p className="mt-2 text-sm text-[#d4c3a8]">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
