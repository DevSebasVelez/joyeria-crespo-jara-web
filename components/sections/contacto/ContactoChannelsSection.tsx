"use client";

import { useRef } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useScrollStairReveal } from "@/lib/animations/useScrollStairReveal";

const CHANNELS = [
  {
    title: "WhatsApp",
    detail: "098 651 7333",
    href: "https://wa.me/593986517333",
    icon: FaWhatsapp,
  },
  {
    title: "Instagram",
    detail: "@joyeriacrespojara",
    href: "https://www.instagram.com/joyeriacrespojara/",
    icon: FaInstagram,
  },
  {
    title: "Facebook",
    detail: "Joyeria Crespo Jara",
    href: "https://www.facebook.com/profile.php?id=61576690946838",
    icon: FaFacebookF,
  },
];

export default function ContactoChannelsSection() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStairReveal(
    rootRef,
    [
      {
        selector: ".channel",
        direction: "left",
        duration: 0.58,
        stagger: 0.11,
      },
    ],
    { start: "top 80%" },
  );
  return (
    <section ref={rootRef} className="bg-[#f8f1e8] py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-4 md:grid-cols-3">
        {CHANNELS.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="channel rounded-3xl border border-[#dbc7a5] bg-white p-6"
          >
            <item.icon className="text-[#b98d55]" size={20} />
            <p className="mt-4 text-xs tracking-[0.15em] text-[#8a6f4d] uppercase">
              {item.title}
            </p>
            <p className="mt-1 text-lg text-[#2d2318]">{item.detail}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
