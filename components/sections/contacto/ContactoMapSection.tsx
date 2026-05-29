"use client";

import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

const LOCATIONS = [
  {
    label: "Local Principal",
    address: "Carlos Serrano 6-40 y 23 de enero · Chordeleg, Ecuador",
    mapSrc:
      "https://maps.google.com/maps?q=-2.9224516559367264,-78.77657501976198&z=18&output=embed",
    mapTitle: "Local Principal — Joyería Crespo Jara",
  },
  {
    label: "Sucursal",
    address: "5 de Febrero y Juan Bautista Cobos, Esquina · Chordeleg, Ecuador",
    mapSrc:
      "https://maps.google.com/maps?q=-2.9220672739955638,-78.77566681540038&z=18&output=embed",
    mapTitle: "Sucursal — Joyería Crespo Jara",
  },
];

export default function ContactoMapSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [
      { selector: ".head", direction: "down", amount: 20, duration: 0.56 },
      {
        selector: ".map-card",
        direction: "up",
        duration: 0.62,
        stagger: 0.14,
        at: 0.12,
      },
    ],
    { start: "top 80%" },
  );
  return (
    <section ref={rootRef} className="bg-[#fffaf3] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <h2 className="head text-3xl text-[#241c14] md:text-5xl">
          Ubicación y referencia
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.label}
              className="map-card overflow-hidden rounded-4xl border border-[#d8c3a0] bg-white p-3"
            >
              <iframe
                src={loc.mapSrc}
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full rounded-2xl"
                title={loc.mapTitle}
              />
              <div className="px-3 py-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#b98d55] uppercase">
                  {loc.label}
                </p>
                <p className="mt-1 text-sm text-[#4f3e2d]">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
