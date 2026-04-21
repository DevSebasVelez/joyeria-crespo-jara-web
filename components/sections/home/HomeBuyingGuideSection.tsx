"use client";

import Link from "next/link";
import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

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
  useScrollStairReveal(
    rootRef,
    [
      { selector: ".head", direction: "down", amount: 22, duration: 0.55 },
      { selector: ".step", direction: "left", duration: 0.6, stagger: 0.12 },
    ],
    { start: "top 78%" },
  );

  return (
    <section ref={rootRef} className="bg-[#140f0b] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="head mb-10 max-w-3xl">
          <p className="text-xs tracking-[0.2em] text-[#d3b586] uppercase">
            Guia de compra
          </p>
          <h2 className="mt-3 text-3xl text-white md:text-5xl">
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
              <h3 className="mt-3 text-2xl text-white">{item.title}</h3>
              <p className="mt-3 text-white/72">{item.detail}</p>
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
