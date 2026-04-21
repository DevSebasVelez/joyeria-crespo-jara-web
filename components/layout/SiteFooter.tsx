import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#2b2118] bg-[#0d0a08] py-14">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logos/logo-white.png"
              alt="Joyeria Crespo Jara"
              width={42}
              height={42}
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="text-xs tracking-[0.2em] text-[#dac39d] uppercase">
                Joyeria Crespo Jara
              </p>
              <p className="text-[11px] text-white/55">Fundada en 2001</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/62">
            Piezas exclusivas que combinan tradicion, lujo y diseno
            contemporaneo para cada momento inolvidable.
          </p>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.14em] text-[#d9bc8e] uppercase">
            Navegacion
          </h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/72">
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/colecciones">Colecciones</Link>
            <Link href="/materiales">Materiales</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.14em] text-[#d9bc8e] uppercase">
            Contacto
          </h3>
          <p className="mt-4 text-sm text-white/75">Martes a Domingo</p>
          <p className="text-sm text-white/75">9:00 am - 6:00 pm</p>
          <p className="text-sm text-white/75">098 651 7333</p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61576690946838"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/85"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/joyeriacrespojara/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/85"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/593986517333"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/85"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 w-[min(92%,1200px)] border-t border-white/10 pt-4 text-xs text-white/45">
        © {new Date().getFullYear()} Joyeria Crespo Jara. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
