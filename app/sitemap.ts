import { MetadataRoute } from "next";
import { cases } from "@/content/cases";
import { insights } from "@/content/insights";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPages = [
    "",
    "/services",
    "/method",
    "/sectors",
    "/work",
    "/about",
    "/insights",
    "/careers",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const caseUrls = cases.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: new Date(),
  }));
  const insightUrls = insights.map((i) => ({
    url: `${base}/insights/${i.slug}`,
    lastModified: new Date(i.date),
  }));

  return [...staticPages, ...caseUrls, ...insightUrls];
}
