import type { Metadata } from "next";
import JbSaladView from "@/components/JbSaladView";
import { jbSalad } from "@/data/real-cases";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "實戰案例：JB Salad 輕蔬食官網健檢與優化建議書",
  description: jbSalad.short.zh,
  alternates: { canonical: "/work/jb-salad" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: jbSalad.title.zh,
  description: jbSalad.short.zh,
  genre: "實戰案例",
  url: `${SITE.url}/work/jb-salad`,
  author: { "@id": `${SITE.url}/#person` },
  about: { "@type": "Organization", name: "JB Salad 輕蔬食", url: jbSalad.site },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JbSaladView />
    </>
  );
}
