import type { MetadataRoute } from "next";
import { allCases } from "@/data/all-cases";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, priority: 1 },
    { url: `${SITE.url}/work/jb-salad`, priority: 0.9 },
    { url: `${SITE.url}/about`, priority: 0.9 },
    { url: `${SITE.url}/method`, priority: 0.8 },
    ...allCases.map((p) => ({ url: `${SITE.url}/work/${p.id}`, priority: 0.7 })),
  ];
}
