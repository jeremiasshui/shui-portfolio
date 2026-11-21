import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allCases } from "@/data/all-cases";
import { caseMeta, categories } from "@/data/case-meta";
import { SITE } from "@/data/site";
import CaseView from "@/components/CaseView";
import AeoCaseView from "@/components/AeoCaseView";
import { aeoCases } from "@/data/aeo";

export const dynamicParams = false;

export function generateStaticParams() {
  return allCases.map((p) => ({ id: p.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = allCases.find((p) => p.id === id);
  if (!item) return {};
  const meta = caseMeta[id];
  const aeo = aeoCases[id];
  const title = aeo ? aeo.question : `${item.industry.zh}文案提案：${item.subtitle.zh}`;
  const description = aeo
    ? aeo.answer.replace(/\[s:[a-z0-9-]+\]/g, "").slice(0, 150)
    : `${item.subtitle.zh}的 SEO、AEO、GEO 四版本文案模擬提案。目標讀者：${meta.audience.zh}。附 GA4 成效追蹤設計。`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${id}` },
    openGraph: { title, description, type: "article", ...(item.image ? { images: [item.image] } : {}) },
  };
}

export default async function CasePage({ params }: Props) {
  const { id } = await params;
  const item = allCases.find((p) => p.id === id);
  if (!item) notFound();
  const meta = caseMeta[id];
  const cat = categories.find((c) => c.id === meta.category)!;
  const url = `${SITE.url}/work/${id}`;
  const aeo = aeoCases[id];
  if (aeo) {
    const articleLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${url}#article`,
          headline: aeo.question,
          description: aeo.answer.replace(/\[s:[a-z0-9-]+\]/g, ""),
          inLanguage: "zh-Hant-TW",
          dateModified: aeo.updated,
          author: { "@id": `${SITE.url}/#person` },
          ...(item.image ? { image: `${SITE.url}${item.image}` } : {}),
          citation: aeo.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, publisher: s.publisher, url: s.url })),
          url,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "首頁", item: SITE.url },
            { "@type": "ListItem", position: 2, name: cat.label.zh, item: `${SITE.url}/#work` },
            { "@type": "ListItem", position: 3, name: item.industry.zh, item: url },
          ],
        },
      ],
    };
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
        <AeoCaseView item={item} aeo={aeo} />
      </>
    );
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: `${item.industry.zh}｜${item.subtitle.zh}`,
        description: meta.angle.zh,
        genre: "模擬提案（Spec work）",
        inLanguage: ["zh-Hant-TW", "en"],
        ...(item.image ? { image: `${SITE.url}${item.image}` } : {}),
        url,
        author: { "@id": `${SITE.url}/#person` },
        audience: { "@type": "Audience", audienceType: meta.audience.zh },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "首頁", item: SITE.url },
          { "@type": "ListItem", position: 2, name: cat.label.zh, item: `${SITE.url}/#work` },
          { "@type": "ListItem", position: 3, name: item.industry.zh, item: url },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseView item={item} />
    </>
  );
}
