"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function NosotrosMissionVisionSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".card"), { autoAlpha: 0, y: 28 });
      gsap.to(q(".card"), {
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
    <section ref={rootRef} className="bg-[#f6efe5] py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-6 lg:grid-cols-2">
        <article className="card rounded-4xl border border-[#d9c4a2] bg-white p-8">
          <h2 className="text-3xl text-[#2d2218]">Mision</h2>
          <p className="mt-4 leading-relaxed text-[#5f4f3f]">
            Ofrecer joyas de alta calidad que reflejen elegancia, estilo y
            significado, con materiales finos y servicio personalizado para cada
            momento especial.
          </p>
        </article>
        <article className="card rounded-4xl border border-[#45331f] bg-[#16110d] p-8">
          <h2 className="text-3xl text-[#f3dfbc]">Vision</h2>
          <p className="mt-4 leading-relaxed text-[#d8c7aa]">
            Ser referentes nacionales e internacionales por excelencia en
            diseno, calidad, innovacion y confianza dentro del universo de alta
            joyeria.
          </p>
        </article>
      </div>
    </section>
  );
}
