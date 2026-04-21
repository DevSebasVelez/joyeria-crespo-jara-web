"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MaterialesCtaSection() {
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
    <section ref={rootRef} className="bg-[#100c08] py-20">
      <div className="mx-auto flex w-[min(92%,1200px)] flex-wrap items-center justify-between gap-4">
        <h3 className="text-2xl text-[#f2debc] md:text-4xl">
          Necesitas asesoria segun tipo de joya y uso real
        </h3>
        <Link
          href="/contacto"
          className="rounded-full bg-[#dbc39a] px-6 py-3 text-sm font-semibold tracking-[0.14em] text-[#332717] uppercase"
        >
          Hablar con especialista
        </Link>
      </div>
    </section>
  );
}
