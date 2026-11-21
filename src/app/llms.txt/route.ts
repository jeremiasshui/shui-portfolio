import { allCases } from "@/data/all-cases";
import { aeoCases } from "@/data/aeo";
import { SITE } from "@/data/site";

export const dynamic = "force-static";

/** llms.txt：給 AI 工具的網站導覽。Google 表示對其搜尋無幫助也無傷害；其他服務是否採用未有官方證實，屬低成本補充。 */
export function GET() {
  const strip = (s: string) => s.replace(/\[s:[a-z0-9-]+\]/g, "");
  const cases = allCases
    .map((c) => {
      const a = aeoCases[c.id];
      return `- [${c.industry.zh}｜${a ? a.question : c.subtitle.zh}](${SITE.url}/work/${c.id})${a ? `：${strip(a.answer).slice(0, 80)}…` : ""}`;
    })
    .join("\n");
  const body = `# 水彥捷 Jeremy Shui｜行銷企劃作品集

> 內容策略 × AI 搜尋優化。36 個產業的模擬提案（非客戶委託），數據皆附政府、法規、國際組織或學術出處；另有 1 個真實客戶案例。具 GA4 認證，10 年以上採購、航運、供應鏈與行銷經驗。

## 主要頁面
- [首頁](${SITE.url}/)
- [經歷（可依職能篩選）](${SITE.url}/about)
- [AEO 標準與研究依據](${SITE.url}/method)
- [實戰案例：JB Salad 官網健檢建議書](${SITE.url}/work/jb-salad)

## 模擬提案
${cases}

## 聯絡
- Email：${SITE.email}
- GitHub：${SITE.github}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
