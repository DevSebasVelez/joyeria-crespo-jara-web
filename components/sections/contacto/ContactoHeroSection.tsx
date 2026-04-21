"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ContactoHeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".item"), { autoAlpha: 0, y: 20 });
      gsap.to(q(".item"), {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
        delay: 0.15,
      });
    },
    { scope: rootRef },
  );
  return (
    <section ref={rootRef} className="bg-[#120e0a] pt-36 pb-20">
      <div className="mx-auto w-[min(92%,1200px)]">
        <p className="item text-xs tracking-[0.2em] text-[#d7bc91] uppercase">
          Contacto
        </p>
        <h1 className="item mt-4 max-w-4xl text-4xl text-[#f3dfbc] md:text-6xl">
          Atencion directa, profesional y sin formularios
        </h1>
        <p className="item mt-6 max-w-2xl text-white/75">
          Te atendemos por WhatsApp, Instagram o Facebook y coordinamos tu
          visita con asesoria personalizada.
        </p>
      </div>
    </section>
  );
}
