"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaAward, FaCrown, FaGem, FaHandshake } from "react-icons/fa";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

const VALUES = [
  { title: "Excelencia", icon: FaAward },
  { title: "Exclusividad", icon: FaCrown },
  { title: "Artesania", icon: FaGem },
  { title: "Confianza", icon: FaHandshake },
];

export default function NosotrosValuesGallerySection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [{ selector: ".item", direction: "zoom", duration: 0.66, stagger: 0.16 }],
    { start: "top 78%" },
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
