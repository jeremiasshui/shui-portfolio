import type { Metadata } from "next";
import AboutView from "@/components/AboutView";
import { jobs } from "@/data/experience";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "經歷：採購、船務、政府專案、行銷企劃到 AI 工作流程",
  description: "水彥捷 Jeremy Shui 的完整經歷：十年以上橫跨國際採購、船務、政府機關、研究院、醫院、新創與食品品牌，以及生成式 AI 工作流程。可依職能篩選。",
  alternates: { canonical: "/about" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE.url}/about`,
  mainEntity: {
    "@id": `${SITE.url}/#person`,
    "@type": "Person",
    name: "水彥捷",
    alternateName: "Jeremy Shui",
    hasOccupation: jobs.filter((j) => !j.selfStudy).map((j) => ({ "@type": "Occupation", name: j.title.zh })),
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutView />
    </>
  );
}
