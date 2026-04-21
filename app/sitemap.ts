import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const PATHS = [
  "/",
  "/colecciones",
  "/contacto",
  "/materiales",
  "/nosotros",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  return PATHS.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
