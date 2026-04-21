"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Colecciones", href: "/colecciones" },
  { label: "Materiales", href: "/materiales" },
  { label: "Contacto", href: "/contacto" },
];

export default function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex w-[min(95%,1240px)] items-center justify-between rounded-full border border-white/15 bg-[#0f0c09]/80 px-4 py-2.5 shadow-[0_14px_40px_-20px_rgba(0,0,0,0.75)] backdrop-blur-xl md:px-6">
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
          aria-label="Abrir menu"
          onClick={() => setOpen((state) => !state)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
        >
          {open ? <HiOutlineX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
        </button>
      </div>

      <div
        className={`mx-auto mt-3 w-[min(95%,1240px)] overflow-hidden rounded-3xl border border-white/15 bg-[#0f0c09]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "max-h-80 p-5 opacity-100" : "max-h-0 p-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-[0.14em] uppercase ${
                pathname === item.href ? "text-[#edd7b2]" : "text-white/78"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
