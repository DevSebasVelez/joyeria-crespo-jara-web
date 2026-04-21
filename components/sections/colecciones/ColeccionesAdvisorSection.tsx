"use client";

import { useMemo, useRef, useState } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";
import gsap from "gsap";

type Purpose = "regalo" | "uso-diario" | "evento";
type Budget = "medio" | "alto" | "premium";
type Style = "clasico" | "moderno" | "minimalista";

const OPTIONS = {
  purpose: ["regalo", "uso-diario", "evento"] as Purpose[],
  budget: ["medio", "alto", "premium"] as Budget[],
  style: ["clasico", "moderno", "minimalista"] as Style[],
};

const RECOMMENDATIONS: Record<
  string,
  { title: string; material: string; reason: string }
> = {
  "regalo-medio-minimalista": {
    title: "Pulsera elegante de plata 9.25",
    material: "Plata 9.25",
    reason: "Ideal para un detalle refinado, versatil y con alta aceptacion.",
  },
  "regalo-alto-clasico": {
    title: "Collar clasico con acabado premium",
    material: "Oro 750",
    reason: "Equilibrio entre valor emocional, presencia y durabilidad.",
  },
  "evento-premium-moderno": {
    title: "Set protagonista de gala",
    material: "Oro 750",
    reason: "Maxima presencia visual para celebraciones y ocasiones formales.",
  },
};

const fallback = {
  title: "Asesoria personalizada de coleccion",
  material: "Segun perfil",
  reason:
    "Con esta combinacion recomendamos sesion guiada para afinar pieza, talla y acabado.",
};

export default function ColeccionesAdvisorSection() {
  const rootRef = useRef<HTMLElement>(null);
  const resultRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [purpose, setPurpose] = useState<Purpose>("regalo");
  const [budget, setBudget] = useState<Budget>("medio");
  const [style, setStyle] = useState<Style>("minimalista");

  const result = useMemo(() => {
    return RECOMMENDATIONS[`${purpose}-${budget}-${style}`] ?? fallback;
  }, [purpose, budget, style]);

  useScrollStairReveal(
    rootRef,
    [
      { selector: ".advisor-form", direction: "right", duration: 0.62 },
      {
        selector: ".advisor-result",
        direction: "left",
        duration: 0.64,
        at: 0.12,
      },
    ],
    { start: "top 78%" },
  );

  const animateResultRefresh = () => {
    if (resultRef.current) {
      gsap.fromTo(
        resultRef.current,
        { y: 10, autoAlpha: 0.85 },
        { y: 0, autoAlpha: 1, duration: 0.36, ease: "power2.out" },
      );
    }
    if (glowRef.current) {
      gsap.fromTo(
        glowRef.current,
        { autoAlpha: 0.4, scale: 0.95 },
        { autoAlpha: 0, scale: 1.04, duration: 0.55, ease: "power2.out" },
      );
    }
  };

  const handleSelectFocus = (target: HTMLSelectElement) => {
    gsap.to(target, {
      borderColor: "#d8bc8d",
      boxShadow: "0 0 0 3px rgba(219,195,154,0.2)",
      duration: 0.24,
      ease: "power2.out",
    });
  };

  const handleSelectBlur = (target: HTMLSelectElement) => {
    gsap.to(target, {
      borderColor: "#5a4530",
      boxShadow: "0 0 0 0 rgba(219,195,154,0)",
      duration: 0.24,
      ease: "power2.out",
    });
  };

  return (
    <section ref={rootRef} className="bg-[#17110c] py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-8 lg:grid-cols-2">
        <article className="advisor-form rounded-4xl border border-[#4b3926] bg-[#21170f] p-8">
          <p className="text-xs tracking-[0.2em] text-[#d3b587] uppercase">
            Asesor inteligente
          </p>
          <h2 className="mt-3 text-3xl text-[#f3dfbc] md:text-5xl">
            Encuentra la joya ideal
          </h2>
          <p className="mt-4 text-[#d7c6ab]">
            Selecciona tu objetivo, rango y estilo. Te devolvemos una
            recomendacion orientativa util para iniciar la asesoria.
          </p>
          <div className="mt-6 grid gap-4">
            <label className="text-sm text-[#d7c6ab]">
              Ocasion
              <select
                value={purpose}
                onChange={(e) => {
                  setPurpose(e.target.value as Purpose);
                  animateResultRefresh();
                }}
                onFocus={(e) => handleSelectFocus(e.currentTarget)}
                onBlur={(e) => handleSelectBlur(e.currentTarget)}
                className="mt-2 w-full rounded-xl border border-[#5a4530] bg-[#150f0a] p-3 text-[#f3dfbc]"
              >
                {OPTIONS.purpose.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-[#d7c6ab]">
              Rango
              <select
                value={budget}
                onChange={(e) => {
                  setBudget(e.target.value as Budget);
                  animateResultRefresh();
                }}
                onFocus={(e) => handleSelectFocus(e.currentTarget)}
                onBlur={(e) => handleSelectBlur(e.currentTarget)}
                className="mt-2 w-full rounded-xl border border-[#5a4530] bg-[#150f0a] p-3 text-[#f3dfbc]"
              >
                {OPTIONS.budget.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-[#d7c6ab]">
              Estilo
              <select
                value={style}
                onChange={(e) => {
                  setStyle(e.target.value as Style);
                  animateResultRefresh();
                }}
                onFocus={(e) => handleSelectFocus(e.currentTarget)}
                onBlur={(e) => handleSelectBlur(e.currentTarget)}
                className="mt-2 w-full rounded-xl border border-[#5a4530] bg-[#150f0a] p-3 text-[#f3dfbc]"
              >
                {OPTIONS.style.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </article>

        <article
          ref={resultRef}
          className="advisor-result relative overflow-hidden rounded-4xl border border-[#4b3926] bg-[#241a12] p-8"
        >
          <div
            ref={glowRef}
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(219,195,154,0.3),transparent_60%)] opacity-0"
          />
          <p className="text-xs tracking-[0.16em] text-[#d3b587] uppercase">
            Recomendacion inicial
          </p>
          <h3 className="mt-3 text-3xl text-[#f3dfbc]">{result.title}</h3>
          <p className="mt-4 text-[#d7c6ab]">
            <strong>Material sugerido:</strong> {result.material}
          </p>
          <p className="mt-3 text-[#d7c6ab]">{result.reason}</p>
          <a
            href="https://wa.me/593986517333"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#dbc39a] px-6 py-3 text-sm font-semibold tracking-[0.14em] text-[#332717] uppercase"
          >
            Solicitar asesoria con esta seleccion
          </a>
        </article>
      </div>
    </section>
  );
}
