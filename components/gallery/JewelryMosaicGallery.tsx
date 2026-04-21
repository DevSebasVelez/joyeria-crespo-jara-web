"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export type JewelryGalleryItem = {
  src: string;
  alt: string;
};

type Theme = "dark" | "light";

const borderByTheme: Record<Theme, string> = {
  dark: "border-[#3f3122] hover:border-[#5c4834]",
  light: "border-[#dbc7a6] hover:border-[#c4a882]",
};

export default function JewelryMosaicGallery({
  items,
  theme,
}: {
  items: JewelryGalleryItem[];
  theme: Theme;
}) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => {
        if (i === null) return null;
        const n = items.length;
        return (i + dir + n) % n;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close, go]);

  const border = borderByTheme[theme];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className={`item group relative aspect-3/4 w-full cursor-zoom-in overflow-hidden rounded-2xl border bg-black/10 text-left transition-colors sm:rounded-3xl ${border}`}
            onClick={() => setActive(index)}
            aria-label={`Ampliar imagen ${index + 1} de ${items.length}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <span
              className={`pointer-events-none absolute inset-0 bg-linear-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                theme === "dark"
                  ? "from-black/55 via-transparent to-transparent"
                  : "from-[#1a140f]/45 via-transparent to-transparent"
              }`}
            />
            <span className="pointer-events-none absolute bottom-3 left-3 right-3 translate-y-1 text-[10px] font-medium tracking-[0.2em] text-white/95 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 uppercase">
              Ver pieza
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-90 flex items-center justify-center bg-black/92 p-4 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imágenes"
          onClick={close}
        >
          <div
            className="flex h-[min(92vh,880px)] w-full max-w-6xl flex-col gap-3 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 text-white/90">
              <p className="truncate text-xs tracking-[0.18em] text-[#e8d5b5] uppercase">
                {active + 1} / {items.length}
              </p>
              <button
                type="button"
                onClick={close}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                aria-label="Cerrar visor"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center">
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-0 z-1 hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 sm:flex"
                aria-label="Imagen anterior"
              >
                <FiChevronLeft size={22} />
              </button>
              <div className="relative mx-auto h-[min(72vh,760px)] w-full max-w-5xl">
                <Image
                  src={items[active].src}
                  alt={items[active].alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-0 z-1 hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 sm:flex"
                aria-label="Imagen siguiente"
              >
                <FiChevronRight size={22} />
              </button>
            </div>

            <p className="text-center text-sm text-white/70">
              {items[active].alt}
            </p>

            <div className="flex justify-center gap-2 pb-2 sm:hidden">
              <button
                type="button"
                onClick={() => go(-1)}
                className="rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.12em] text-white uppercase"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.12em] text-white uppercase"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
