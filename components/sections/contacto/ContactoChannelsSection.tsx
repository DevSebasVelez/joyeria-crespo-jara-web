"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap.set(q(".channel"), { autoAlpha: 0, y: 22 });
      gsap.to(q(".channel"), {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
      });
    },
    { scope: rootRef },
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
