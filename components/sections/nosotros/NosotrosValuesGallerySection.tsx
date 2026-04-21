"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAward, FaCrown, FaGem, FaHandshake } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const VALUES = [
  { title: "Excelencia", icon: FaAward },
  { title: "Exclusividad", icon: FaCrown },
  { title: "Artesania", icon: FaGem },
  { title: "Confianza", icon: FaHandshake },
];

export default function NosotrosValuesGallerySection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".item"), { autoAlpha: 0, y: 26 });
      gsap.to(q(".item"), {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
        scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
      });
    },
    { scope: rootRef },
  );
  return (
    <section ref={rootRef} className="bg-[#fff9f0] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="mb-10">
          <h2 className="text-3xl text-[#241c14] md:text-5xl">
            Valores que definen nuestra marca
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="item rounded-4xl border border-[#dbc8a7] bg-white p-6 lg:col-span-1">
            <div className="grid gap-3">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="flex items-center gap-3 rounded-2xl border border-[#e7d9c3] p-3"
                >
                  <value.icon className="text-[#b98d56]" />
                  <span className="text-[#3a2d20]">{value.title}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="item relative min-h-[420px] overflow-hidden rounded-4xl lg:col-span-2">
            <Image
              src="/images/gallery/DSC09509.jpg"
              alt="Artesania de Joyeria Crespo Jara"
              fill
              className="object-cover"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
