"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function NosotrosHeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(bgRef.current, { scale: 1.06 });
      gsap.set(q(".hero-item"), { autoAlpha: 0, y: 24 });
      gsap
        .timeline()
        .to(bgRef.current, { scale: 1, duration: 1.9 })
        .to(
          q(".hero-item"),
          { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08 },
          0.2,
        );
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="relative min-h-[72vh] overflow-hidden bg-[#0f0c09] pt-36 pb-20"
    >
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src="/images/gallery/DSC09466.jpg"
          alt="Historia Joyeria Crespo Jara"
          fill
          className="object-cover opacity-35"
        />
      </div>
      <div className="relative mx-auto w-[min(92%,1200px)]">
        <p className="hero-item text-xs tracking-[0.2em] text-[#d8be95] uppercase">
          Nosotros
        </p>
        <h1 className="hero-item mt-4 max-w-4xl text-4xl text-[#f3dfbc] md:text-6xl">
          Tradicion joyera, lujo contemporaneo y confianza
        </h1>
        <p className="hero-item mt-6 max-w-2xl text-white/75">
          Desde 2001 construimos una marca basada en excelencia tecnica y
          asesoramiento personalizado.
        </p>
      </div>
    </section>
  );
}
