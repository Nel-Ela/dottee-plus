import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/products", "/about", "/quote"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://dotteeplus.com${route}`,
    lastModified: new Date("2026-06-29"),
  }));
}
