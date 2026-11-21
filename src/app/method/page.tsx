import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "AEO 標準 v1.0：我怎麼寫能被 AI 引用的內容（附研究出處）",
  description: "整理 Google 官方指南與 KDD 2024 同儕審查研究，說明本作品集每個案例的寫作標準：先給答案、數據附官方出處、寫出自己的觀點、標示作者與更新日期，以及刻意不做的 AI 把戲。",
  alternates: { canonical: "/method" },
};

const ACCESSED = "2026-11-21";

const sources = [
  { id: "g-ai", publisher: "Google Search Central", title: "Optimizing your website for generative AI features on Google Search", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide", level: "官方" },
  { id: "g-feat", publisher: "Google Search Central", title: "AI features and your website", url: "https://developers.google.com/search/docs/appearance/ai-features", level: "官方" },
  { id: "g-help", publisher: "Google Search Central", title: "Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content", level: "官方" },
  { id: "g-faq", publisher: "Google Search Central Blog", title: "Changes to HowTo and FAQ rich results（2023-08）", url: "https://developers.google.com/search/blog/2023/08/howto-faq-changes", level: "官方" },
  { id: "sej-faq", publisher: "Search Engine Journal", title: "Google Drops FAQ Rich Results From Search（2026）", url: "https://www.searchenginejournal.com/google-drops-faq-rich-results/574429/", level: "產業媒體" },
  { id: "geo", publisher: "Aggarwal et al., KDD 2024（ACM SIGKDD）", title: "GEO: Generative Engine Optimization", url: "https://arxiv.org/abs/2311.09735", level: "同儕審查" },
];
const n = (id: string) => sources.findIndex((s) => s.id === id) + 1;
const Ref = ({ id }: { id: string }) => <sup><a href={`#m-${id}`} className="text-teal-700 hover:underline px-0.5">[{n(id)}]</a></sup>;

const rules: { rule: string; why: React.ReactNode; level: string }[] = [
  { rule: "開頭先回答主問題，再展開", why: <>Google 建議以段落、章節與清楚的標題組織頁面<Ref id="g-ai" />。先給答案是為了讀者，不是為了討好 AI。</>, level: "官方＋業界共識" },
  { rule: "每個數字都附官方或學術出處", why: <>GEO 研究中，「加入統計數據」讓內容在生成式引擎回答中的能見度提升 30.6%，「引用來源」提升 27.5%<Ref id="geo" />。</>, level: "同儕審查" },
  { rule: "引用原文（法規、官方說明）", why: <>同一研究中效果最好的是「加入引述」，提升 40.9%<Ref id="geo" />。所以案例中引用法規條文時，會用引號標出原文。</>, level: "同儕審查" },
  { rule: "寫出自己的觀點，不寫大眾化清單", why: <>Google 要求提供獨特觀點與專業或親身經驗，避免只重述現有資訊的「大眾化內容」<Ref id="g-ai" />。每個案例都有一段「我的觀點」。</>, level: "官方" },
  { rule: "標示作者、製作方式與更新日期", why: <>Google 建議用「Who、How、Why」檢視內容，並加上正確的作者資訊<Ref id="g-help" />。案例頁標明由 AI 輔助整理、作者逐條查核。</>, level: "官方" },
  { rule: "不堆砌關鍵字", why: <>GEO 研究中，關鍵字堆砌是唯一讓能見度下降的方法（−8.3%）<Ref id="geo" />。</>, level: "同儕審查" },
];

const myths: { myth: string; fact: React.ReactNode }[] = [
  { myth: "AEO、GEO 是另一套獨立的寫法", fact: <>Google 明說，為生成式 AI 搜尋做優化就是為搜尋體驗做優化，「仍然是 SEO」；出現在 AI 摘要中也沒有額外的要求<Ref id="g-ai" /><Ref id="g-feat" />。</> },
  { myth: "要把內容切成小段，AI 才讀得懂", fact: <>Google 表示沒有這個必要，也沒有理想的頁面長度<Ref id="g-ai" />。</> },
  { myth: "要放 llms.txt 或特殊標記", fact: <>Google 表示不需要；llms.txt 對其他服務可以有，但對 Google 搜尋沒有幫助也沒有傷害<Ref id="g-ai" />。</> },
  { myth: "加 FAQ 結構化資料就能多佔一塊搜尋結果", fact: <>2023 年起只剩權威的政府與健康網站能顯示<Ref id="g-faq" />，2026 年 5 月起已全面停止顯示<Ref id="sej-faq" />。</> },
  { myth: "針對每種問法各做一頁", fact: <>為操縱排名或 AI 回答而大量產頁，違反 Google 的大規模內容濫用政策<Ref id="g-ai" />。</> },
];

export default function MethodPage() {
  return (
    <main className="pt-14">
      <article className="px-4 sm:px-6 pt-10 sm:pt-14 pb-16">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="breadcrumb" className="text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-700">首頁</Link><span className="mx-1.5">›</span><span className="text-gray-600">AEO 標準</span>
          </nav>
          <p className="text-xs font-medium tracking-[0.2em] text-teal-700 mb-3">方法</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">AEO 標準 v1.0：怎麼寫才能被 AI 引用？</h1>
          <p className="mt-3 text-xs text-gray-500">作者：水彥捷 · 更新：{ACCESSED} · 依據：Google 官方文件與 KDD 2024 同儕審查研究</p>

          <section className="mt-8 rounded-xl border-l-4 border-teal-700 bg-gray-50 px-5 py-4">
            <h2 className="text-xs font-semibold tracking-widest text-gray-500">答案摘要</h2>
            <p className="mt-1 text-gray-800 leading-relaxed">
              能被 AI 引用的內容，不靠特殊寫法，而是靠「直接回答、證據可查、觀點獨特」。Google 表示為生成式 AI 做優化「仍然是 SEO」<Ref id="g-ai" />；學術研究則顯示，加入引述、統計與來源，能明顯提高內容出現在 AI 回答中的機會<Ref id="geo" />。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">本作品集遵守的 6 條標準</h2>
            <div className="space-y-4">
              {rules.map((r, i) => (
                <div key={r.rule} className="rounded-lg border border-gray-200 px-4 py-3">
                  <h3 className="font-semibold text-gray-900">{i + 1}. {r.rule}<span className="ml-2 text-[11px] font-normal rounded bg-gray-100 px-1.5 py-0.5 text-gray-600">{r.level}</span></h3>
                  <p className="mt-1 text-[15px] text-gray-700 leading-relaxed">{r.why}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">刻意不做的 5 件事</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left"><tr><th scope="col" className="px-3 py-2.5 font-semibold">常見說法</th><th scope="col" className="px-3 py-2.5 font-semibold">依據</th></tr></thead>
                <tbody>{myths.map((m) => <tr key={m.myth} className="border-t border-gray-100"><td className="px-3 py-2.5 text-gray-900 align-top w-2/5">{m.myth}</td><td className="px-3 py-2.5 text-gray-700 align-top">{m.fact}</td></tr>)}</tbody>
              </table>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">我修正過的觀念</h2>
            <ul className="space-y-3 text-[15px] text-gray-700 leading-relaxed list-disc pl-5">
              <li><strong>舊：</strong>每個產品寫 SEO、AEO、GEO、AIEO 四個平行版本。<strong>新：</strong>一頁分層——答案摘要、正文、觀點、常見問題、事實卡、來源。因為官方指南並不支持另寫一份「AI 專用稿」<Ref id="g-ai" />。</li>
              <li><strong>舊：</strong>GEO 是「地理／情境優化」。<strong>新：</strong>GEO 是 Generative Engine Optimization，生成式引擎優化<Ref id="geo" />。</li>
              <li><strong>舊：</strong>為了不捏造數字，乾脆不放數字。<strong>新：</strong>只放查得到官方出處的數字，每個都附連結。</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">研究的限制</h2>
            <p className="text-[15px] text-gray-700 leading-relaxed">GEO 研究在研究團隊建立的測試集與生成式引擎上進行，作者也指出各方法的效果會因領域而不同<Ref id="geo" />。沒有任何第三方工具能存取 Google 內部的排名或 AI 系統<Ref id="g-ai" />，所以這份標準提高的是「被引用的機會」，不保證結果。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">資料來源</h2>
            <ol className="space-y-3 text-sm">
              {sources.map((s, i) => (
                <li key={s.id} id={`m-${s.id}`} className="scroll-mt-20 flex gap-2">
                  <span className="text-gray-400 tabular-nums">[{i + 1}]</span>
                  <span><span className="text-gray-500">{s.publisher}｜{s.level}</span><br /><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-gray-900 underline underline-offset-2 decoration-gray-300 hover:decoration-teal-700 break-words">{s.title}</a><span className="text-gray-400 text-xs ml-1">（查閱 {ACCESSED}）</span></span>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-14 text-center">
            <Link href="/work/11-coldchain" className="rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm hover:bg-teal-800">看依此標準重寫的範例 →</Link>
            <p className="mt-4 text-xs text-gray-400"><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          </div>
        </div>
      </article>
    </main>
  );
}
