/**
 * Origen canónico del sitio (sin barra final).
 * En producción define `NEXT_PUBLIC_SITE_URL` (ej. https://www.tudominio.com).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) {
    const host = process.env.VERCEL_URL.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return "https://joyeriacrespojara.com";
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`);
}

export const SITE_NAME = "Joyería Crespo Jara";

export const SITE_DESCRIPTION =
  "Alta joyería en Ecuador: piezas exclusivas, diseño elegante, materiales finos y asesoría personalizada en Chordeleg.";
