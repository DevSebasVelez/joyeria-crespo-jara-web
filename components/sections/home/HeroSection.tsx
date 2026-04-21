"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaInstagram } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP);

const HEADLINES = [
  "Elegancia que trasciende generaciones",
  "JOYERIA CRESPO JARA",
  "Lujo artesanal desde 2001",
];

const STATS = [
  { value: "2001", label: "Fundacion" },
  { value: "9:00 - 18:00", label: "Martes a Domingo" },
  { value: "Oro 750", label: "Material premium" },
];

export default function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(bgRef.current, { scale: 1.08 });
      gsap.set(q(".hero-badge"), { autoAlpha: 0, y: -16 });
      gsap.set(q(".hero-line"), { autoAlpha: 0, yPercent: 100 });
      gsap.set(q(".hero-copy"), { autoAlpha: 0, y: 20 });
      gsap.set(q(".hero-cta"), { autoAlpha: 0, y: 20 });
      gsap.set(q(".hero-stat"), { autoAlpha: 0, y: 14 });

      tl.to(bgRef.current, { scale: 1, duration: 2.1, ease: "power2.out" }, 0)
        .to(q(".hero-badge"), { autoAlpha: 1, y: 0, duration: 0.55 }, 0.2)
        .to(
          q(".hero-line"),
          { autoAlpha: 1, yPercent: 0, duration: 0.65, stagger: 0.1 },
          0.35,
        )
        .to(q(".hero-copy"), { autoAlpha: 1, y: 0, duration: 0.6 }, 0.62)
        .to(
          q(".hero-cta"),
          { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08 },
          0.72,
        )
        .to(
          q(".hero-stat"),
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08 },
          0.8,
        );
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#080605]"
    >
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/gallery/DSC09565.jpg"
          alt="Joyas de lujo de Joyeria Crespo Jara"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(7,5,4,0.95) 0%, rgba(7,5,4,0.82) 35%, rgba(7,5,4,0.3) 75%, rgba(7,5,4,0.1) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(7,5,4,0.72) 0%, rgba(7,5,4,0.16) 42%, transparent 72%)",
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-28 md:py-32">
          <div className="max-w-[760px]">
            <div className="hero-badge inline-flex items-center gap-3 mb-8 rounded-full border border-[#dbc39a]/30 bg-[#1e1712]/55 px-4 py-2 backdrop-blur-sm">
              <span className="text-[11px] tracking-[0.2em] text-[#f0d9b5] uppercase">
                Alta joyeria ecuatoriana
              </span>
            </div>

            <h1 className="mb-7 space-y-1">
              {HEADLINES.map((line, i) => (
                <div key={line} className="overflow-hidden">
                  <span
                    className={`hero-line block leading-[1.05] tracking-tight ${
                      i === 1
                        ? "text-[#f4e5c8] text-[clamp(2rem,6vw,4.75rem)]"
                        : "text-white/90 text-[clamp(1.2rem,3vw,2rem)]"
                    }`}
                  >
                    {line}
                  </span>
                </div>
              ))}
            </h1>

            <p className="hero-copy max-w-[620px] text-[1.05rem] md:text-[1.12rem] leading-relaxed text-white/72">
              Ofrecemos joyas de alta calidad que reflejan elegancia, estilo y
              significado, con materiales finos, diseno exclusivo y un servicio
              personalizado para momentos realmente especiales.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/593986517333"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta inline-flex items-center rounded-full bg-[#dbc39a] px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-[#322617] uppercase transition-all duration-200 hover:bg-[#ecd8b5]"
              >
                Agendar asesoria
              </a>
              <a
                href="https://www.instagram.com/joyeriacrespojara/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta inline-flex items-center gap-2 text-sm tracking-[0.12em] text-white/82 uppercase"
              >
                <FaInstagram />
                Ver Instagram
                <FiArrowUpRight />
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="hero-stat rounded-2xl border border-white/14 bg-white/6 p-4 backdrop-blur-sm"
                >
                  <p className="text-lg md:text-xl tracking-[0.12em] text-[#f4e5c8] uppercase">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] tracking-[0.14em] text-white/62 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
