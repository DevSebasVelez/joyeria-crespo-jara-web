"use client";

import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function MaterialesCareSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [{ selector: ".card", direction: "right", duration: 0.6, stagger: 0.14 }],
    { start: "top 80%" },
  );
  return (
    <section ref={rootRef} className="bg-[#fff8ef] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <h2 className="mb-10 text-3xl text-[#241c14] md:text-5xl">
          Guia de cuidado profesional
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card rounded-3xl border border-[#dbc7a5] bg-white p-6">
            <h3 className="text-2xl text-[#2f241a]">
              Mantenimiento preventivo
            </h3>
            <ul className="mt-3 space-y-2 text-[#5f4f3d]">
              <li>• Guardar por separado cada pieza.</li>
              <li>• Evitar contacto con quimicos y perfumes.</li>
              <li>• Limpieza suave despues de uso frecuente.</li>
            </ul>
          </article>
          <article className="card rounded-3xl border border-[#dbc7a5] bg-white p-6">
            <h3 className="text-2xl text-[#2f241a]">Servicio postventa</h3>
            <ul className="mt-3 space-y-2 text-[#5f4f3d]">
              <li>• Recomendaciones segun material.</li>
              <li>• Ajustes de uso y conservacion.</li>
              <li>• Asesoria para brillo y vida util prolongada.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
