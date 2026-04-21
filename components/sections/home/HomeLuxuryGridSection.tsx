"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const IMAGES = [
  "/images/gallery/DSC09462.jpg",
  "/images/gallery/DSC09501.jpg",
  "/images/gallery/DSC09477.jpg",
  "/images/gallery/DSC09533.jpg",
  "/images/gallery/DSC09484.jpg",
];

export default function HomeLuxuryGridSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".item"), { autoAlpha: 0, y: 30, scale: 0.98 });
      gsap.to(q(".item"), {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        scrollTrigger: { trigger: rootRef.current, start: "top 76%" },
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="bg-[#120e0a] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <h2 className="mb-10 text-3xl text-[#f1dfbf] md:text-5xl">
          Selecciones destacadas de la semana
        </h2>
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
          {IMAGES.map((src, index) => (
            <article
              key={src}
              className={`item group relative overflow-hidden rounded-3xl border border-[#3f3122] ${
                index === 0 || index === 3 ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={src}
                alt="Pieza destacada Joyeria Crespo Jara"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
