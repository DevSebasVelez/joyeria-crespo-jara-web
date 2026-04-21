"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function MaterialesHeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".hero-item"), { autoAlpha: 0, y: 22 });
      gsap.to(q(".hero-item"), {
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
    <section
      ref={rootRef}
      className="relative min-h-[70vh] overflow-hidden bg-[#120e0a] pt-36 pb-20"
    >
      <Image
        src="/images/gallery/DSC09530.jpg"
        alt="Materiales de alta joyeria"
        fill
        className="object-cover opacity-35"
      />
      <div className="relative mx-auto w-[min(92%,1200px)]">
        <p className="hero-item text-xs tracking-[0.2em] text-[#d7bc91] uppercase">
          Materiales y calidad
        </p>
        <h1 className="hero-item mt-4 max-w-4xl text-4xl text-[#f3dfbc] md:text-6xl">
          La calidad se define en el detalle tecnico
        </h1>
        <p className="hero-item mt-6 max-w-2xl text-white/75">
          Oro 750, plata 9.25 y acero inoxidable 3.16 con protocolos de control
          y recomendaciones de cuidado.
        </p>
      </div>
    </section>
  );
}
