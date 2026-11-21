import type { MetadataRoute } from "next";
import { allCases } from "@/data/all-cases";
import { aeoCases } from "@/data/aeo";
import { SITE } from "@/data/site";

// Bing 建議 sitemap 提供正確的 lastmod，協助 AI 搜尋判斷內容是否更新
const SITE_UPDATED = "2026-11-21";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: SITE_UPDATED, priority: 1 },
    { url: `${SITE.url}/about`, lastModified: SITE_UPDATED, priority: 0.9 },
    { url: `${SITE.url}/work/jb-salad`, lastModified: SITE_UPDATED, priority: 0.9 },
    { url: `${SITE.url}/method`, lastModified: SITE_UPDATED, priority: 0.8 },
    ...allCases.map((p) => ({ url: `${SITE.url}/work/${p.id}`, lastModified: aeoCases[p.id]?.updated ?? SITE_UPDATED, priority: 0.7 })),
  ];
}
