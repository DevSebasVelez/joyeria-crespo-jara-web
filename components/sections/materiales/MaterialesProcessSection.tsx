"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MaterialesProcessSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".item"), { autoAlpha: 0, y: 24 });
      gsap.to(q(".item"), {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.1,
        scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
      });
    },
    { scope: rootRef },
  );
  return (
    <section ref={rootRef} className="bg-[#17110c] py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-8 lg:grid-cols-2">
        <article className="item rounded-4xl border border-[#463522] bg-[#221910] p-8">
          <h2 className="text-3xl text-[#f3dfbc] md:text-4xl">
            Control de calidad en 4 etapas
          </h2>
          <ol className="mt-6 space-y-3 text-[#d7c6ab]">
            <li>1. Verificacion de material y estructura.</li>
            <li>2. Revision de terminaciones y simetria.</li>
            <li>3. Prueba de resistencia segun tipo de pieza.</li>
            <li>4. Validacion final de brillo y presentacion.</li>
          </ol>
        </article>
        <article className="item relative min-h-[360px] overflow-hidden rounded-4xl border border-[#463522]">
          <Image
            src="/images/gallery/DSC09556.jpg"
            alt="Control de calidad joyera"
            fill
            className="object-cover"
          />
        </article>
      </div>
    </section>
  );
}
