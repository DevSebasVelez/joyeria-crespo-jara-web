"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ITEMS = [
  "/images/gallery/DSC09427.jpg",
  "/images/gallery/DSC09446.jpg",
  "/images/gallery/DSC09501.jpg",
  "/images/gallery/DSC09475.jpg",
  "/images/gallery/DSC09531.jpg",
  "/images/gallery/DSC09484.jpg",
];

export default function ColeccionesGallerySection() {
  const rootRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".item"), { autoAlpha: 0, y: 24, scale: 0.98 });
      gsap.to(q(".item"), {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.08,
        scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
      });
    },
    { scope: rootRef },
  );
  return (
    <section ref={rootRef} className="bg-[#f8f1e8] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <h2 className="mb-10 text-3xl text-[#241c14] md:text-5xl">
          Lookbook curado
        </h2>
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {ITEMS.map((src, i) => (
            <article
              key={src}
              className={`item relative overflow-hidden rounded-3xl border border-[#dbc7a6] ${
                i === 0 || i === 4 ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={src}
                alt="Lookbook Joyeria Crespo Jara"
                fill
                className="object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
