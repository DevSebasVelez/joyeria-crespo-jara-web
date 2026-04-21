import Link from "next/link";

export default function HomeAdvisorPromoSection() {
  return (
    <section className="border-y border-[#e5d8c4] bg-[#faf6f0] py-12">
      <div className="mx-auto w-[min(92%,1200px)] rounded-3xl border border-[#dbc7a5] bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          <div
            className="hidden w-px shrink-0 bg-linear-to-b from-[#dbc39a]/0 via-[#dbc39a]/55 to-[#dbc39a]/0 lg:block"
            aria-hidden
          />
          <div className="min-w-0 flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dbc7a5]/80 bg-[#fdfaf5] px-3 py-1">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b98d55]"
                aria-hidden
              />
              <span className="text-[10px] font-medium tracking-[0.18em] text-[#6b5438] uppercase">
                Asesor inteligente
              </span>
            </div>
            <h2 className="mt-4 text-2xl text-[#241c14] md:text-3xl">
              Arma tu briefing y envialo por WhatsApp
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5f4f3d] md:text-base">
              Selecciona ocasion, estilo, material y urgencia. Un asesor te
              responde con opciones reales alineadas a lo que buscas.
            </p>
            <p className="mt-5 text-[11px] font-medium tracking-[0.22em] text-[#8a6f4c] uppercase">
              Una joya para toda la vida
            </p>
          </div>
          <div className="flex shrink-0 flex-col justify-center border-t border-[#ead9c4] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <Link
              href="/colecciones#asesor-colecciones"
              className="inline-flex items-center justify-center rounded-full bg-[#1c140e] px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-[#f2debc] uppercase transition-colors hover:bg-[#2a2016]"
            >
              Abrir asesor
            </Link>
            <p className="mt-3 text-center text-xs text-[#8a6f4c] lg:text-left">
              Respuesta humana, sin formularios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
