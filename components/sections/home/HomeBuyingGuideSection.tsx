"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STEPS = [
  {
    title: "Define la ocasion",
    detail:
      "Regalo, uso diario o evento formal para ajustar estilo y protagonismo.",
  },
  {
    title: "Elige material correcto",
    detail:
      "Oro 750 para lujo premium, plata 9.25 para versatilidad, acero 3.16 para uso continuo.",
  },
  {
    title: "Confirma asesoramiento",
    detail:
      "Una asesoria guiada reduce errores de compra y mejora satisfaccion final.",
  },
];

export default function HomeBuyingGuideSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".head"), { autoAlpha: 0, y: 20 });
      gsap.set(q(".step"), { autoAlpha: 0, y: 24 });
      gsap
        .timeline({
          scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
        })
        .to(q(".head"), { autoAlpha: 1, y: 0, duration: 0.55 })
        .to(
          q(".step"),
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 },
          0.14,
        );
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="bg-[#140f0b] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="head mb-10 max-w-3xl">
          <p className="text-xs tracking-[0.2em] text-[#d3b586] uppercase">
            Guia de compra
          </p>
          <h2 className="mt-3 text-3xl text-[#f3dfbc] md:text-5xl">
            Tres pasos para elegir una joya con criterio profesional
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((item, index) => (
            <article
              key={item.title}
              className="step rounded-3xl border border-[#4a3825] bg-[#221910] p-6"
            >
              <p className="text-xs tracking-[0.12em] text-[#d3b586] uppercase">
                Paso {index + 1}
              </p>
              <h3 className="mt-3 text-2xl text-[#f3dfbc]">{item.title}</h3>
              <p className="mt-3 text-[#d7c6ab]">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="step mt-8">
          <Link
            href="/colecciones"
            className="inline-flex rounded-full bg-[#dbc39a] px-6 py-3 text-sm font-semibold tracking-[0.14em] text-[#332717] uppercase"
          >
            Aplicar esta guia en colecciones
          </Link>
        </div>
      </div>
    </section>
  );
}
