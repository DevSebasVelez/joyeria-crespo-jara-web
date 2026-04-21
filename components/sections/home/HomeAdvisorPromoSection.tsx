import Link from "next/link";

export default function HomeAdvisorPromoSection() {
  return (
    <section className="border-y border-[#e5d8c4] bg-[#faf6f0] py-12">
      <div className="mx-auto flex w-[min(92%,1200px)] flex-col gap-6 rounded-3xl border border-[#dbc7a5] bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.2em] text-[#8a6f4c] uppercase">
            Asesor inteligente
          </p>
          <h2 className="mt-2 text-2xl text-[#241c14] md:text-3xl">
            Arma tu briefing y envialo por WhatsApp
          </h2>
          <p className="mt-2 text-sm text-[#5f4f3d] md:text-base">
            Selecciona ocasion, estilo, material y urgencia. Un asesor te
            responde con opciones reales alineadas a lo que buscas.
          </p>
        </div>
        <Link
          href="/colecciones#asesor-colecciones"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#1c140e] px-6 py-3.5 text-sm font-semibold tracking-[0.12em] text-[#f2debc] uppercase transition-colors hover:bg-[#2a2016]"
        >
          Abrir asesor
        </Link>
      </div>
    </section>
  );
}
