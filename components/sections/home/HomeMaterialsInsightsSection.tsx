"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const INSIGHTS = [
  {
    material: "Oro 750",
    ideal: "Piezas de alto valor y uso ocasional premium",
    expertTip: "Mantener separado de otras joyas para evitar micro rayaduras.",
  },
  {
    material: "Plata 9.25",
    ideal: "Uso frecuente con estilo clasico o contemporaneo",
    expertTip: "Limpiar con pano suave despues de contacto con humedad.",
  },
  {
    material: "Acero 3.16",
    ideal: "Uso diario, alta resistencia y minimo mantenimiento",
    expertTip: "Perfecto para clientes que priorizan durabilidad continua.",
  },
];

export default function HomeMaterialsInsightsSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".head"), { autoAlpha: 0, y: 24 });
      gsap.set(q(".card"), { autoAlpha: 0, y: 24 });
      gsap
        .timeline({
          scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
        })
        .to(q(".head"), { autoAlpha: 1, y: 0, duration: 0.55 })
        .to(
          q(".card"),
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 },
          0.15,
        );
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="bg-[#fff9f0] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="head mb-10 max-w-3xl">
          <p className="text-xs tracking-[0.2em] text-[#8a6f4c] uppercase">
            Criterio profesional
          </p>
          <h2 className="mt-3 text-3xl text-[#241c14] md:text-5xl">
            Como elegir material segun uso real
          </h2>
          <p className="mt-4 text-[#5f4f3d]">
            Esta referencia ayuda a entender cuando conviene priorizar
            presencia, versatilidad o resistencia.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {INSIGHTS.map((item) => (
            <article
              key={item.material}
              className="card rounded-3xl border border-[#dbc7a5] bg-white p-6"
            >
              <h3 className="text-2xl text-[#2f241a]">{item.material}</h3>
              <p className="mt-3 text-sm text-[#5f4f3d]">
                <strong>Ideal para:</strong> {item.ideal}
              </p>
              <p className="mt-3 text-sm text-[#5f4f3d]">
                <strong>Tip experto:</strong> {item.expertTip}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
