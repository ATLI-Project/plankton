import { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = [
    "",
    "/services",
    "/how-we-work",
    "/credentials",
    "/about",
    "/team",
    "/careers",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
  ];
  return routes.map((path) => ({
    url: `${base}${path}/`,
    lastModified: new Date("2026-10-01"),
  }));
}
