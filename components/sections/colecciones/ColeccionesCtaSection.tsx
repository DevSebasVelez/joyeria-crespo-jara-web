"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ColeccionesCtaSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        rootRef.current,
        { autoAlpha: 0, y: 24 },
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
    <section ref={rootRef} className="bg-[#100c08] py-20">
      <div className="mx-auto flex w-[min(92%,1200px)] flex-wrap items-center justify-between gap-4">
        <h3 className="text-2xl text-[#f2debc] md:text-4xl">
          Coordina una visita y prueba tu seleccion favorita
        </h3>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/593986517333"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#dbc39a] px-6 py-3 text-sm font-semibold tracking-[0.14em] text-[#332717] uppercase"
          >
            WhatsApp directo
          </a>
          <Link
            href="/contacto"
            className="rounded-full border border-[#d8bc8d]/45 px-6 py-3 text-sm tracking-[0.14em] text-[#f2debc] uppercase"
          >
            Ver ubicacion
          </Link>
        </div>
      </div>
    </section>
  );
}
