"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MaterialesCareSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".card"), { autoAlpha: 0, y: 24 });
      gsap.to(q(".card"), {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
      });
    },
    { scope: rootRef },
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
