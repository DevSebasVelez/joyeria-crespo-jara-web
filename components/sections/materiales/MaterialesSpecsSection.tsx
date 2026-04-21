"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SPECS = [
  {
    title: "Oro 750",
    detail:
      "Aleacion premium para piezas de lujo, brillo estable y alto valor percibido.",
  },
  {
    title: "Plata 9.25",
    detail:
      "Acabado elegante y versatil para estilos clasicos y contemporaneos.",
  },
  {
    title: "Acero 3.16",
    detail:
      "Resistencia superior, ideal para uso frecuente con minima deformacion.",
  },
];

export default function MaterialesSpecsSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".spec"), { autoAlpha: 0, y: 24 });
      gsap.to(q(".spec"), {
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
    <section ref={rootRef} className="bg-[#f8f1e8] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <h2 className="mb-10 text-3xl text-[#241c14] md:text-5xl">
          Especificaciones esenciales
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {SPECS.map((item) => (
            <article
              key={item.title}
              className="spec rounded-3xl border border-[#dbc7a5] bg-white p-6"
            >
              <h3 className="text-2xl text-[#2f241a]">{item.title}</h3>
              <p className="mt-3 text-[#5f4f3d]">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
