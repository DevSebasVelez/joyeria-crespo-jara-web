"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ColeccionesServiceSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".service"), { autoAlpha: 0, y: 24 });
      gsap.to(q(".service"), {
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
    <section ref={rootRef} className="bg-[#fff8ef] py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-4 md:grid-cols-3">
        {[
          {
            title: "Curaduria por perfil",
            copy: "Sugerimos piezas segun ocasion, estilo personal y presupuesto.",
          },
          {
            title: "Reserva y seguimiento",
            copy: "Aseguramos disponibilidad y acompanamos la decision sin presion.",
          },
          {
            title: "Entrega con recomendaciones",
            copy: "Incluimos pautas de cuidado para preservar brillo y acabado.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="service rounded-3xl border border-[#dbc7a5] bg-white p-6"
          >
            <h3 className="text-2xl text-[#2f241a]">{item.title}</h3>
            <p className="mt-3 text-[#5f4f3d]">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
