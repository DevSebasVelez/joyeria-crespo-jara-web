"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Colecciones", href: "/colecciones" },
  { label: "Materiales", href: "/materiales" },
  { label: "Contacto", href: "/contacto" },
];

const ASESOR_HREF = "/colecciones#asesor-colecciones";

export default function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuTlRef = useRef<gsap.core.Timeline | null>(null);
  const burgerTopRef = useRef<HTMLSpanElement>(null);
  const burgerMiddleRef = useRef<HTMLSpanElement>(null);
  const burgerBottomRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!mobileMenuRef.current) return;
    gsap.set(mobileMenuRef.current, {
      height: 0,
      autoAlpha: 0,
      overflow: "hidden",
    });
    gsap.set(".mobile-nav-item", { y: 14, autoAlpha: 0 });
    gsap.set(
      [burgerTopRef.current, burgerMiddleRef.current, burgerBottomRef.current],
      {
        transformOrigin: "50% 50%",
      },
    );
    gsap.set(burgerTopRef.current, { y: -6, rotate: 0 });
    gsap.set(burgerMiddleRef.current, { y: 0, autoAlpha: 1, scaleX: 1 });
    gsap.set(burgerBottomRef.current, { y: 6, rotate: 0 });
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    mobileMenuTlRef.current?.kill();

    const menu = mobileMenuRef.current;
    const items = menu.querySelectorAll(".mobile-nav-item");
    const tl = gsap.timeline();

    if (open) {
      tl.to(menu, {
        height: "auto",
        autoAlpha: 1,
        duration: 0.42,
        ease: "power3.out",
      }).to(
        items,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.32,
          ease: "power2.out",
          stagger: 0.06,
        },
        0.08,
      );
    } else {
      tl.to(items, {
        y: 10,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power2.in",
        stagger: 0.04,
      }).to(
        menu,
        {
          height: 0,
          autoAlpha: 0,
          duration: 0.28,
          ease: "power2.inOut",
        },
        0.03,
      );
    }

    mobileMenuTlRef.current = tl;
  }, [open]);

  useEffect(() => {
    if (
      !burgerTopRef.current ||
      !burgerMiddleRef.current ||
      !burgerBottomRef.current
    )
      return;

    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: "power2.out" },
    });

    if (open) {
      tl.to(
        burgerTopRef.current,
        {
          y: 0,
          rotate: 45,
        },
        0,
      )
        .to(
          burgerMiddleRef.current,
          {
            autoAlpha: 0,
            scaleX: 0.4,
          },
          0,
        )
        .to(
          burgerBottomRef.current,
          {
            y: 0,
            rotate: -45,
          },
          0,
        );
    } else {
      tl.to(
        burgerTopRef.current,
        {
          y: -6,
          rotate: 0,
        },
        0,
      )
        .to(
          burgerBottomRef.current,
          {
            y: 6,
            rotate: 0,
          },
          0,
        )
        .to(
          burgerMiddleRef.current,
          {
            autoAlpha: 1,
            scaleX: 1,
          },
          0,
        );
    }
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex w-[min(95%,1240px)] max-w-[calc(100vw-1rem)] items-center justify-between rounded-full border border-white/15 bg-[#0f0c09]/80 px-4 py-2.5 shadow-[0_14px_40px_-20px_rgba(0,0,0,0.75)] backdrop-blur-xl md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logos/logo-white.png"
            alt="Joyeria Crespo Jara"
            width={38}
            height={38}
            className="h-9 w-9 object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-medium tracking-[0.2em] text-[#dbc39a] uppercase">
              Joyeria Crespo Jara
            </p>
            <p className="text-[10px] tracking-[0.26em] text-white/55 uppercase">
              Alta joyeria
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs tracking-[0.16em] uppercase transition-colors ${
                  active
                    ? "text-[#edd7b2]"
                    : "text-white/72 hover:text-[#edd7b2]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={ASESOR_HREF}
            className="rounded-full border border-[#dbc39a]/55 bg-[#dbc39a]/12 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#f4e4c6] uppercase transition-colors hover:bg-[#dbc39a]/22"
          >
            Asesor
          </Link>
        </nav>

        <a
          href="https://wa.me/593986517333"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-[#dbc39a]/40 px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-[#f4e4c6] uppercase transition-colors hover:bg-[#dbc39a]/15 md:inline-flex"
        >
          Agenda asesoria
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((state) => !state)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
        >
          <span className="relative block h-[18px] w-[20px]">
            <span
              ref={burgerTopRef}
              className="absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 rounded-full bg-current"
            />
            <span
              ref={burgerMiddleRef}
              className="absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 rounded-full bg-current"
            />
            <span
              ref={burgerBottomRef}
              className="absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 rounded-full bg-current"
            />
          </span>
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        className="mx-auto mt-3 w-[min(95%,1240px)] max-w-[calc(100vw-1rem)] rounded-3xl border border-white/15 bg-[#0f0c09]/95 backdrop-blur-xl lg:hidden"
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-4 p-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`mobile-nav-item text-sm tracking-[0.14em] uppercase ${
                pathname === item.href ? "text-[#edd7b2]" : "text-white/78"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ASESOR_HREF}
            onClick={() => setOpen(false)}
            className="mobile-nav-item inline-flex w-fit items-center rounded-full border border-[#dbc39a]/45 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-[#f4e4c6] uppercase"
          >
            Asesor inteligente
          </Link>
        </div>
      </div>
    </header>
  );
}
