"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaInstagram } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP);

const SLOGAN = "Una joya para toda la vida";

const HEADLINES_DESKTOP = [
  "Elegancia que trasciende generaciones",
  "JOYERIA CRESPO JARA",
  SLOGAN,
];

const HERO_COPY_DESKTOP =
  "Ofrecemos joyas de alta calidad que reflejan elegancia, estilo y significado, con materiales finos, diseno exclusivo y un servicio personalizado para momentos realmente especiales. Nuestro compromiso: una joya para toda la vida.";

const HERO_COPY_MOBILE =
  "Alta joyeria en Chordeleg. Asesoria personalizada y piezas seleccionadas con criterio.";

const STATS = [
  { value: "Chordeleg", label: "Tienda y atelier" },
  { value: "9:00 - 18:00", label: "Martes a Domingo" },
  { value: "Oro 750", label: "Material de confianza" },
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
      gsap.set(q(".hero-mobile-tag"), { autoAlpha: 0, y: 12 });
      gsap.set(q(".hero-copy"), { autoAlpha: 0, y: 16 });
      gsap.set(q(".hero-cta"), { autoAlpha: 0, y: 18 });
      gsap.set(q(".hero-stat"), { autoAlpha: 0, y: 12 });

      tl.to(bgRef.current, { scale: 1, duration: 2.1, ease: "power2.out" }, 0)
        .to(q(".hero-badge"), { autoAlpha: 1, y: 0, duration: 0.5 }, 0.18)
        .to(
          q(".hero-line"),
          { autoAlpha: 1, yPercent: 0, duration: 0.62, stagger: 0.09 },
          0.32,
        )
        .to(q(".hero-mobile-tag"), { autoAlpha: 1, y: 0, duration: 0.45 }, 0.48)
        .to(q(".hero-copy"), { autoAlpha: 1, y: 0, duration: 0.52 }, 0.58)
        .to(
          q(".hero-cta"),
          { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.07 },
          0.68,
        )
        .to(
          q(".hero-stat"),
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.06 },
          0.78,
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
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7,5,4,0.88) 0%, rgba(7,5,4,0.5) 42%, rgba(7,5,4,0.15) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
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
            "linear-gradient(to top, rgba(7,5,4,0.78) 0%, rgba(7,5,4,0.12) 48%, transparent 78%)",
        }}
      />

      <div className="relative z-10 flex min-h-dvh items-center justify-center px-5 pb-10 pt-24 sm:px-6 md:min-h-screen md:px-12 md:py-32 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-[min(100%,42rem)] lg:max-w-[760px]">
            <div className="hero-badge mb-5 inline-flex items-center gap-2 rounded-full border border-[#dbc39a]/30 bg-[#1e1712]/55 px-3.5 py-1.5 backdrop-blur-sm md:mb-8 md:px-4 md:py-2">
              <span
                className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-[#dbc39a]/90 md:inline-block"
                aria-hidden
              />
              <span className="text-[10px] tracking-[0.16em] text-[#f0d9b5] uppercase md:text-[11px] md:tracking-[0.2em]">
                <span className="md:hidden">Alta joyeria · Chordeleg</span>
                <span className="hidden md:inline">
                  Alta joyeria ecuatoriana
                </span>
              </span>
            </div>

            <h1 className="mb-5 md:mb-8">
              <span className="hidden md:block">
                <span className="space-y-1.5">
                  {HEADLINES_DESKTOP.map((line, i) => (
                    <span key={line} className="block overflow-hidden">
                      <span
                        className={`hero-line block leading-[1.08] ${
                          i === 1
                            ? "text-[clamp(2.1rem,5.2vw,4.5rem)] tracking-tight text-[#f4e5c8]"
                            : i === 2
                              ? "text-[clamp(0.95rem,2vw,1.35rem)] tracking-[0.22em] text-[#f0d9b5]/95 uppercase"
                              : "text-[clamp(1.05rem,2.4vw,1.85rem)] tracking-tight text-white/88"
                        }`}
                      >
                        {line}
                      </span>
                    </span>
                  ))}
                </span>
              </span>

              <span className="md:hidden">
                <span className="block overflow-hidden">
                  <span className="hero-line block text-[clamp(1.85rem,9vw,2.65rem)] leading-[1.06] tracking-tight text-[#f4e5c8]">
                    JOYERIA CRESPO JARA
                  </span>
                </span>
                <div className="hero-mobile-tag mt-3 max-w-88 space-y-2">
                  <p className="text-[0.78rem] leading-snug tracking-[0.2em] text-[#f0d9b5]/95 uppercase">
                    {SLOGAN}
                  </p>
                  <p className="text-[0.9rem] leading-snug text-white/68">
                    Joyeria de autor en Chordeleg.
                  </p>
                </div>
              </span>
            </h1>

            <div className="hero-copy">
              <p className="hidden max-w-[620px] text-[1.05rem] leading-relaxed text-white/72 md:block md:text-[1.12rem]">
                {HERO_COPY_DESKTOP}
              </p>
              <p className="max-w-88 text-sm leading-relaxed text-white/70 md:hidden">
                {HERO_COPY_MOBILE}
              </p>
            </div>

            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="https://wa.me/593986517333"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta inline-flex w-full items-center justify-center rounded-full bg-[#dbc39a] px-6 py-3.5 text-sm font-semibold tracking-[0.12em] text-[#322617] uppercase transition-all duration-200 hover:bg-[#ecd8b5] sm:w-auto sm:px-7"
              >
                Agendar asesoria
              </a>
              <a
                href="https://www.instagram.com/joyeriacrespojara/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/18 bg-white/5 px-5 py-3 text-sm tracking-widest text-white/88 uppercase backdrop-blur-sm transition-colors hover:border-white/28 hover:bg-white/10 sm:w-auto md:justify-start md:border-transparent md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none"
              >
                <FaInstagram className="shrink-0" />
                <span>Instagram</span>
                <FiArrowUpRight className="shrink-0 opacity-80" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-2 md:mt-12 md:hidden">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="hero-stat rounded-full border border-white/16 bg-white/8 px-3 py-2 backdrop-blur-sm"
                >
                  <p className="text-[11px] font-medium tracking-widest text-[#f4e5c8] uppercase">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[9px] tracking-[0.08em] text-white/55 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 hidden gap-4 md:mt-12 md:grid md:grid-cols-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="hero-stat rounded-2xl border border-white/14 bg-white/6 p-4 backdrop-blur-sm"
                >
                  <p className="text-lg tracking-widest text-[#f4e5c8] uppercase md:text-xl md:tracking-[0.12em]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] tracking-[0.12em] text-white/60 uppercase">
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
