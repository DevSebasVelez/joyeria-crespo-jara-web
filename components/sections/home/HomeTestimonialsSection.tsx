"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TESTIMONIALS = [
  {
    quote:
      "Excelente asesoria. Me ayudaron a elegir una pieza elegante y duradera para un aniversario importante.",
    author: "Cliente verificado",
    channel: "WhatsApp",
  },
  {
    quote:
      "La diferencia se nota en el acabado. Se siente una joyeria con criterio profesional y buen gusto.",
    author: "Cliente recurrente",
    channel: "Instagram",
  },
  {
    quote:
      "Atencion impecable y recomendaciones claras sobre materiales. Experiencia premium de inicio a fin.",
    author: "Cliente en tienda",
    channel: "Visita presencial",
  },
];

export default function HomeTestimonialsSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".head"), { autoAlpha: 0, y: 20 });
      gsap.set(q(".card"), { autoAlpha: 0, y: 24 });
      gsap
        .timeline({
          scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
        })
        .to(q(".head"), { autoAlpha: 1, y: 0, duration: 0.55 })
        .to(
          q(".card"),
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 },
          0.14,
        );
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="bg-[#f8f2e9] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="head mb-10 max-w-3xl">
          <p className="text-xs tracking-[0.2em] text-[#8a6f4c] uppercase">
            Confianza de clientes
          </p>
          <h2 className="mt-3 text-3xl text-[#241c14] md:text-5xl">
            Experiencias reales que respaldan nuestra calidad
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.quote}
              className="card rounded-3xl border border-[#dbc7a5] bg-white p-6"
            >
              <p className="text-[#4f4032]">“{item.quote}”</p>
              <p className="mt-5 text-sm font-medium text-[#2f241a]">
                {item.author}
              </p>
              <p className="text-xs tracking-[0.12em] text-[#8a6f4c] uppercase">
                {item.channel}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
