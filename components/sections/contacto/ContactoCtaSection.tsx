"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactoCtaSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        rootRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          scrollTrigger: { trigger: rootRef.current, start: "top 84%" },
        },
      );
    },
    { scope: rootRef },
  );
  return (
    <section ref={rootRef} className="bg-[#f2ebe1] py-20">
      <div className="mx-auto flex w-[min(92%,1200px)] flex-wrap items-center justify-between gap-4">
        <h3 className="text-2xl text-[#2f2419] md:text-4xl">
          Respuesta rapida y acompanamiento profesional
        </h3>
        <a
          href="https://wa.me/593986517333"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#2a2016] px-6 py-3 text-sm tracking-[0.14em] text-[#f0ddbc] uppercase"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  );
}
