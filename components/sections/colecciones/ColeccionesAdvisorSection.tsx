"use client";

import { useMemo, useRef, useState } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";
import gsap from "gsap";
import { FiChevronDown } from "react-icons/fi";

type Purpose = "regalo" | "uso-diario" | "evento";
type Budget = "medio" | "alto" | "premium";
type Style = "clasico" | "moderno" | "minimalista";
type MaterialPreference = "indistinto" | "oro-750" | "plata-925" | "acero-316";
type Urgency = "hoy" | "esta-semana" | "este-mes" | "sin-prisa";

const OPTIONS = {
  purpose: ["regalo", "uso-diario", "evento"] as Purpose[],
  budget: ["medio", "alto", "premium"] as Budget[],
  style: ["clasico", "moderno", "minimalista"] as Style[],
  materialPreference: [
    "indistinto",
    "oro-750",
    "plata-925",
    "acero-316",
  ] as MaterialPreference[],
  urgency: ["hoy", "esta-semana", "este-mes", "sin-prisa"] as Urgency[],
};

const LABELS = {
  purpose: {
    regalo: "Regalo",
    "uso-diario": "Uso diario",
    evento: "Evento especial",
  } satisfies Record<Purpose, string>,
  budget: {
    medio: "Medio",
    alto: "Alto",
    premium: "Premium",
  } satisfies Record<Budget, string>,
  style: {
    clasico: "Clasico",
    moderno: "Moderno",
    minimalista: "Minimalista",
  } satisfies Record<Style, string>,
  materialPreference: {
    indistinto: "Indistinto",
    "oro-750": "Oro 750",
    "plata-925": "Plata 9.25",
    "acero-316": "Acero 3.16",
  } satisfies Record<MaterialPreference, string>,
  urgency: {
    hoy: "Hoy",
    "esta-semana": "Esta semana",
    "este-mes": "Este mes",
    "sin-prisa": "Sin prisa",
  } satisfies Record<Urgency, string>,
};

export default function ColeccionesAdvisorSection() {
  const rootRef = useRef<HTMLElement>(null);
  const resultRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [purpose, setPurpose] = useState<Purpose>("regalo");
  const [budget, setBudget] = useState<Budget>("medio");
  const [style, setStyle] = useState<Style>("minimalista");
  const [materialPreference, setMaterialPreference] =
    useState<MaterialPreference>("indistinto");
  const [urgency, setUrgency] = useState<Urgency>("esta-semana");

  const summaryItems = useMemo(
    () => [
      { label: "Ocasion", value: LABELS.purpose[purpose] },
      { label: "Rango", value: LABELS.budget[budget] },
      { label: "Estilo", value: LABELS.style[style] },
      {
        label: "Material",
        value: LABELS.materialPreference[materialPreference],
      },
      { label: "Urgencia", value: LABELS.urgency[urgency] },
    ],
    [purpose, budget, style, materialPreference, urgency],
  );

  const whatsappMessage = useMemo(() => {
    const lines = [
      "Hola, quisiera una asesoria personalizada!",
      "",
      "Estoy buscando una joya para:",
      `- Ocasion: ${LABELS.purpose[purpose]}`,
      `- Rango: ${LABELS.budget[budget]}`,
      `- Estilo: ${LABELS.style[style]}`,
      `- Material preferido: ${LABELS.materialPreference[materialPreference]}`,
      `- Urgencia: ${LABELS.urgency[urgency]}`,
      "",
      "Me gustaria recibir opciones recomendadas segun estos criterios.",
    ];
    return lines.join("\n");
  }, [purpose, budget, style, materialPreference, urgency]);

  const whatsappHref = `https://wa.me/593986517333?text=${encodeURIComponent(whatsappMessage)}`;

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

  const handleFieldFocus = (target: HTMLSelectElement) => {
    gsap.to(target, {
      borderColor: "#d8bc8d",
      boxShadow: "0 0 0 3px rgba(219,195,154,0.2)",
      duration: 0.24,
      ease: "power2.out",
    });
  };

  const handleFieldBlur = (target: HTMLSelectElement) => {
    gsap.to(target, {
      borderColor: "#5a4530",
      boxShadow: "0 0 0 0 rgba(219,195,154,0)",
      duration: 0.24,
      ease: "power2.out",
    });
  };

  const handleSelectionChange = <T extends string>(
    value: T,
    setter: (val: T) => void,
  ) => {
    setter(value);
    animateResultRefresh();
  };

  return (
    <section
      ref={rootRef}
      id="asesor-colecciones"
      className="scroll-mt-28 bg-[#17110c] py-24"
    >
      <div className="mx-auto grid w-[min(92%,1200px)] gap-8 lg:grid-cols-2">
        <article className="advisor-form rounded-4xl border border-[#4b3926] bg-[#21170f] p-8">
          <p className="text-xs tracking-[0.2em] text-[#d6b98a] uppercase">
            Asesor inteligente
          </p>
          <h2 className="mt-3 text-3xl text-white md:text-5xl">
            Encuentra la joya ideal
          </h2>
          <p className="mt-4 text-white/74">
            Selecciona tus criterios y envia un briefing listo por WhatsApp para
            que un asesor te atienda con opciones exactas.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-white/78">
              Ocasion
              <div className="relative mt-2">
                <select
                  value={purpose}
                  onChange={(e) =>
                    handleSelectionChange(
                      e.target.value as Purpose,
                      setPurpose as (val: Purpose) => void,
                    )
                  }
                  onFocus={(e) => handleFieldFocus(e.currentTarget)}
                  onBlur={(e) => handleFieldBlur(e.currentTarget)}
                  className="w-full appearance-none rounded-xl border border-[#5a4530] bg-[#150f0a] py-3 pr-11 pl-3 text-white"
                >
                  {OPTIONS.purpose.map((item) => (
                    <option key={item} value={item}>
                      {LABELS.purpose[item]}
                    </option>
                  ))}
                </select>
                <FiChevronDown
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#d6b98a]"
                  size={17}
                />
              </div>
            </label>
            <label className="text-sm text-white/78">
              Rango
              <div className="relative mt-2">
                <select
                  value={budget}
                  onChange={(e) =>
                    handleSelectionChange(
                      e.target.value as Budget,
                      setBudget as (val: Budget) => void,
                    )
                  }
                  onFocus={(e) => handleFieldFocus(e.currentTarget)}
                  onBlur={(e) => handleFieldBlur(e.currentTarget)}
                  className="w-full appearance-none rounded-xl border border-[#5a4530] bg-[#150f0a] py-3 pr-11 pl-3 text-white"
                >
                  {OPTIONS.budget.map((item) => (
                    <option key={item} value={item}>
                      {LABELS.budget[item]}
                    </option>
                  ))}
                </select>
                <FiChevronDown
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#d6b98a]"
                  size={17}
                />
              </div>
            </label>
            <label className="text-sm text-white/78">
              Estilo
              <div className="relative mt-2">
                <select
                  value={style}
                  onChange={(e) =>
                    handleSelectionChange(
                      e.target.value as Style,
                      setStyle as (val: Style) => void,
                    )
                  }
                  onFocus={(e) => handleFieldFocus(e.currentTarget)}
                  onBlur={(e) => handleFieldBlur(e.currentTarget)}
                  className="w-full appearance-none rounded-xl border border-[#5a4530] bg-[#150f0a] py-3 pr-11 pl-3 text-white"
                >
                  {OPTIONS.style.map((item) => (
                    <option key={item} value={item}>
                      {LABELS.style[item]}
                    </option>
                  ))}
                </select>
                <FiChevronDown
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#d6b98a]"
                  size={17}
                />
              </div>
            </label>
            <label className="text-sm text-white/78">
              Material preferido
              <div className="relative mt-2">
                <select
                  value={materialPreference}
                  onChange={(e) =>
                    handleSelectionChange(
                      e.target.value as MaterialPreference,
                      setMaterialPreference as (
                        val: MaterialPreference,
                      ) => void,
                    )
                  }
                  onFocus={(e) => handleFieldFocus(e.currentTarget)}
                  onBlur={(e) => handleFieldBlur(e.currentTarget)}
                  className="w-full appearance-none rounded-xl border border-[#5a4530] bg-[#150f0a] py-3 pr-11 pl-3 text-white"
                >
                  {OPTIONS.materialPreference.map((item) => (
                    <option key={item} value={item}>
                      {LABELS.materialPreference[item]}
                    </option>
                  ))}
                </select>
                <FiChevronDown
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#d6b98a]"
                  size={17}
                />
              </div>
            </label>
            <label className="text-sm text-white/78 sm:col-span-2">
              Urgencia de compra
              <div className="relative mt-2">
                <select
                  value={urgency}
                  onChange={(e) =>
                    handleSelectionChange(
                      e.target.value as Urgency,
                      setUrgency as (val: Urgency) => void,
                    )
                  }
                  onFocus={(e) => handleFieldFocus(e.currentTarget)}
                  onBlur={(e) => handleFieldBlur(e.currentTarget)}
                  className="w-full appearance-none rounded-xl border border-[#5a4530] bg-[#150f0a] py-3 pr-11 pl-3 text-white"
                >
                  {OPTIONS.urgency.map((item) => (
                    <option key={item} value={item}>
                      {LABELS.urgency[item]}
                    </option>
                  ))}
                </select>
                <FiChevronDown
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#d6b98a]"
                  size={17}
                />
              </div>
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
          <p className="text-xs tracking-[0.16em] text-[#d6b98a] uppercase">
            Resumen para asesoria
          </p>
          <h3 className="mt-3 text-3xl text-white">
            Tu seleccion lista para WhatsApp
          </h3>
          <p className="mt-3 text-white/74">
            Envia estos parametros y un asesor te respondera con opciones
            alineadas a tu estilo, presupuesto y urgencia.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {summaryItems.map((item) => (
              <span
                key={item.label}
                className="rounded-full border border-[#6a5237] bg-[#1a120c] px-3 py-1.5 text-[11px] tracking-[0.04em] text-white/82"
              >
                {item.label}: {item.value}
              </span>
            ))}
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#dbc39a] px-6 py-3 text-sm font-semibold tracking-[0.14em] text-[#332717] uppercase"
          >
            Enviar briefing por WhatsApp
          </a>
        </article>
      </div>
    </section>
  );
}
