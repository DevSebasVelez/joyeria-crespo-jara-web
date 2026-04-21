"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGem, FaRegClock, FaUserTie } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PILLARS = [
  {
    title: "Curaduria exclusiva",
    copy: "Cada pieza se selecciona por diseno, equilibrio y valor estetico real.",
    icon: FaGem,
  },
  {
    title: "Atencion personalizada",
    copy: "Acompanamos cada compra con asesoria humana y criterio profesional.",
    icon: FaUserTie,
  },
  {
    title: "Experiencia premium",
    copy: "Procesos claros, respuesta rapida y seguimiento posterior a la entrega.",
    icon: FaRegClock,
  },
];

export default function HomeSignatureSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".heading"), { autoAlpha: 0, y: 24 });
      gsap.set(q(".pillar"), { autoAlpha: 0, y: 28 });
      gsap
        .timeline({
          scrollTrigger: { trigger: rootRef.current, start: "top 76%" },
        })
        .to(q(".heading"), { autoAlpha: 1, y: 0, duration: 0.55 })
        .to(
          q(".pillar"),
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.09 },
          0.16,
        );
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="bg-[#f7f1e8] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="heading max-w-3xl">
          <p className="text-xs tracking-[0.2em] text-[#8a6f4c] uppercase">
            Nuestra firma
          </p>
          <h2 className="mt-3 text-3xl text-[#241c14] md:text-5xl">
            Alta joyeria con criterio, no con volumen
          </h2>
          <p className="mt-4 text-[#5f4f3d]">
            Disenamos una experiencia elegante donde cada decision tiene
            sentido: material, proporciones, estilo y ocasion.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PILLARS.map((item) => (
            <article
              key={item.title}
              className="pillar rounded-2xl border border-[#dac5a3] bg-white p-6"
            >
              <item.icon className="text-[#b98d55]" size={20} />
              <h3 className="mt-4 text-xl text-[#2f251b]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#625240]">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
