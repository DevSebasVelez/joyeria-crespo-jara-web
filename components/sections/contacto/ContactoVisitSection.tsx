"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactoVisitSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".card"), { autoAlpha: 0, y: 22 });
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
    <section ref={rootRef} className="bg-[#19120d] py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-6 lg:grid-cols-2">
        <article className="card rounded-4xl border border-[#493724] bg-[#241a12] p-8">
          <h3 className="text-3xl text-[#f3dfbc]">Horarios y atencion</h3>
          <p className="mt-4 text-[#d7c6ab]">
            Martes a Domingo · 9:00 am - 6:00 pm
          </p>
          <p className="text-[#d7c6ab]">Abierto en feriados</p>
          <p className="mt-4 text-sm text-[#bfa98a]">
            Recomendamos coordinar por WhatsApp para una atencion mas precisa.
          </p>
        </article>
        <article className="card rounded-4xl border border-[#493724] bg-[#241a12] p-8">
          <h3 className="text-3xl text-[#f3dfbc]">Antes de tu visita</h3>
          <ul className="mt-4 space-y-2 text-[#d7c6ab]">
            <li>• Define ocasion y estilo preferido.</li>
            <li>• Indica rango estimado para una mejor curaduria.</li>
            <li>• Solicita ver opciones de material especifico.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
