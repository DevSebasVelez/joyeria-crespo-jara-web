"use client";

import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function ContactoVisitSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [{ selector: ".card", direction: "right", duration: 0.6, stagger: 0.14 }],
    { start: "top 80%" },
  );
  return (
    <section ref={rootRef} className="bg-[#19120d] py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-6 lg:grid-cols-2">
        <article className="card rounded-4xl border border-[#493724] bg-[#241a12] p-8">
          <h3 className="text-3xl text-white">Horarios y atencion</h3>
          <p className="mt-4 text-white/74">
            Martes a Domingo · 9:00 am - 6:00 pm
          </p>
          <p className="text-white/74">Abierto en feriados</p>
          <p className="mt-4 text-sm text-[#bfa98a]">
            Recomendamos coordinar por WhatsApp para una atencion mas precisa.
          </p>
        </article>
        <article className="card rounded-4xl border border-[#493724] bg-[#241a12] p-8">
          <h3 className="text-3xl text-white">Antes de tu visita</h3>
          <ul className="mt-4 space-y-2 text-white/74">
            <li>• Define ocasion y estilo preferido.</li>
            <li>• Indica rango estimado para una mejor curaduria.</li>
            <li>• Solicita ver opciones de material especifico.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
