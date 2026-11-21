// 驗證 src/data/aeo/*.ts：出處對應、來源網域、必要欄位
import fs from 'node:fs';
import path from 'node:path';

const dir = 'src/data/aeo';
const banned = /(udn\.com|ltn\.com|chinatimes|ettoday|setn\.com|tvbs|cna\.com\.tw|storm\.mg|businessweekly|cw\.com\.tw|wikipedia|medium\.com|blogspot|pixnet|vocus|facebook|youtube|news\.|\.news)/i;
const files = fs.readdirSync(dir).filter((f) => /^\d\d-.+\.ts$/.test(f));
let problems = 0;
for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  const ids = [...src.matchAll(/\{\s*id:\s*'([a-z0-9-]+)',\s*type:/g)].map((m) => m[1]);
  const idSet = new Set(ids);
  const cited = new Set([...src.matchAll(/\[s:([a-z0-9-]+)\]/g)].map((m) => m[1]));
  const factSrc = new Set([...src.matchAll(/src:\s*'([a-z0-9-]+)'/g)].map((m) => m[1]));
  const urls = [...src.matchAll(/url:\s*'([^']+)'/g)].map((m) => m[1]);
  const issues = [];
  for (const c of cited) if (!idSet.has(c)) issues.push(`引用了不存在的來源 ${c}`);
  for (const c of factSrc) if (!idSet.has(c)) issues.push(`事實卡來源不存在 ${c}`);
  for (const i of ids) if (!cited.has(i) && !factSrc.has(i)) issues.push(`來源未被引用 ${i}`);
  for (const u of urls) if (banned.test(u)) issues.push(`疑似非官方來源 ${u}`);
  if (ids.length < 4) issues.push(`來源太少（${ids.length}）`);
  const faqs = (src.match(/\{\s*q:/g) || []).length;
  if (faqs < 4) issues.push(`常見問題少於 4 題（${faqs}）`);
  const fid = f.replace('.ts', '');
  if (!src.includes(`id: '${fid}'`)) issues.push('id 與檔名不符');
  if (!/answerEn:/.test(src) || !/view:/.test(src)) issues.push('缺 answerEn 或 view');
  console.log(`${issues.length ? '✗' : '✓'} ${fid}｜來源 ${ids.length}｜引用 ${cited.size}｜FAQ ${faqs}${issues.length ? '\n    ' + issues.join('\n    ') : ''}`);
  problems += issues.length;
}
console.log(`\n${files.length} 個檔案，${problems} 個問題`);
process.exit(problems ? 1 : 0);
