"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ColeccionesHeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".item"), { autoAlpha: 0, y: 22 });
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
    <section
      ref={rootRef}
      className="relative min-h-[70vh] overflow-hidden bg-[#120e0a] pt-36 pb-20"
    >
      <Image
        src="/images/gallery/DSC09533.jpg"
        alt="Colecciones Joyeria Crespo Jara"
        fill
        className="object-cover opacity-35"
      />
      <div className="relative mx-auto w-[min(92%,1200px)]">
        <p className="item text-xs tracking-[0.2em] text-[#d7bc91] uppercase">
          Colecciones
        </p>
        <h1 className="item mt-4 max-w-4xl text-4xl text-[#f3dfbc] md:text-6xl">
          Piezas exclusivas para estilo diario y ocasiones especiales
        </h1>
        <p className="item mt-6 max-w-2xl text-white/75">
          Seleccionamos colecciones con enfoque de diseno, equilibrio visual y
          calidad estructural.
        </p>
      </div>
    </section>
  );
}
