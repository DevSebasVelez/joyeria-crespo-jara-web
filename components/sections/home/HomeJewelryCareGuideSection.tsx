"use client";

import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import gsap from "gsap";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

const GUIDE = [
  {
    q: "Como conservar el brillo en joyas de lujo",
    a: "Guarda cada pieza por separado en estuche textil y evita friccion directa con otras superficies metalicas.",
  },
  {
    q: "Que evitar en el uso diario",
    a: "Perfumes, cloro, cremas abrasivas y golpes repetitivos reducen vida util de acabados y monturas.",
  },
  {
    q: "Cada cuanto hacer mantenimiento",
    a: "Para uso frecuente, una revision preventiva trimestral ayuda a preservar cierre, estructura y acabado.",
  },
];

export default function HomeJewelryCareGuideSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(0);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const iconRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useScrollStairReveal(
    rootRef,
    [
      { selector: ".head", direction: "right", duration: 0.58 },
      { selector: ".item", direction: "left", duration: 0.62, stagger: 0.1 },
    ],
    { start: "top 78%" },
  );

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (!content) return;
      gsap.to(content, {
        height: index === open ? content.scrollHeight : 0,
        duration: 0.42,
        ease: "power3.inOut",
      });
    });

    iconRefs.current.forEach((icon, index) => {
      if (!icon) return;
      gsap.to(icon, {
        rotate: index === open ? 180 : 0,
        duration: 0.34,
        ease: "power2.out",
      });
    });
  }, [open]);

  return (
    <section ref={rootRef} className="bg-[#130e0a] py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-8 lg:grid-cols-2">
        <div className="head">
          <p className="text-xs tracking-[0.2em] text-[#d4b587] uppercase">
            Guia de cuidado
          </p>
          <h2 className="mt-3 text-3xl text-[#f3dfbc] md:text-5xl">
            Recomendaciones para preservar tus joyas
          </h2>
          <p className="mt-4 text-[#d7c6ab]">
            Un cliente informado valora mejor su inversion. Esta guia resume
            practicas clave de conservacion profesional.
          </p>
        </div>
        <div className="space-y-3">
          {GUIDE.map((item, index) => (
            <button
              key={item.q}
              type="button"
              onClick={() => setOpen(index)}
              aria-expanded={open === index}
              className="item w-full rounded-2xl border border-[#4e3a26] bg-[#21170f] p-4 text-left"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[#f3dfbc]">{item.q}</span>
                <span
                  ref={(element) => {
                    iconRefs.current[index] = element;
                  }}
                  className="text-[#cfb084]"
                >
                  <FiChevronDown />
                </span>
              </div>
              <div
                ref={(element) => {
                  contentRefs.current[index] = element;
                }}
                className="h-0 overflow-hidden"
              >
                <p className="mt-3 text-sm text-[#d7c6ab]">{item.a}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
