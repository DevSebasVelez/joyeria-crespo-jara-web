"use client";

import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function ColeccionesServiceSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [
      {
        selector: ".service",
        direction: "left",
        duration: 0.58,
        stagger: 0.11,
      },
    ],
    { start: "top 78%" },
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
