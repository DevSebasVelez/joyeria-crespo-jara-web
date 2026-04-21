"use client";

import { useRef } from "react";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

export default function ContactoMapSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [
      { selector: ".head", direction: "down", amount: 20, duration: 0.56 },
      { selector: ".map", direction: "up", duration: 0.62, at: 0.12 },
    ],
    { start: "top 80%" },
  );
  return (
    <section ref={rootRef} className="bg-[#fffaf3] py-24">
      <div className="mx-auto w-[min(92%,1200px)]">
        <h2 className="head text-3xl text-[#241c14] md:text-5xl">
          Ubicacion y referencia
        </h2>
        <div className="map mt-8 overflow-hidden rounded-4xl border border-[#d8c3a0] bg-white p-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3984.60931090086!2d-78.78137492502977!3d-2.9280999970482116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwNTUnNDEuMiJTIDc4wrA0Nic0My43Ilc!5e0!3m2!1ses!2sec!4v1776803089262!5m2!1ses!2sec"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full rounded-2xl"
            title="Mapa Joyeria Crespo Jara"
          />
        </div>
      </div>
    </section>
  );
}
