'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import type { PortfolioItem } from '@/data/portfolio-data';
import type { AeoCase } from '@/data/aeo/types';
import { allCases } from '@/data/all-cases';
import { caseMeta, categories } from '@/data/case-meta';
import { SITE } from '@/data/site';
import Markdown from './Markdown';
import CaseCard from './CaseCard';
import Cover from './Cover';

const typeLabel = { gov: '政府機關', law: '法規', intl: '國際組織', academic: '學術研究' } as const;

/** AEO 標準 v1.0 版面：答案摘要 → 正文 → 我的觀點 → 常見問題 → 事實卡 → 來源 */
export default function AeoCaseView({ item, aeo }: { item: PortfolioItem; aeo: AeoCase }) {
    const { l, language } = useLanguage();
    const meta = caseMeta[item.id];
    const cat = categories.find((c) => c.id === meta.category)!;
    const order = new Map(aeo.sources.map((s, i) => [s.id, i + 1]));
    const cite = (id: string) => order.get(id);
    const md = (t: string) => <Markdown text={t} accent={meta.accent} cite={cite} />;
    const related = allCases
        .map((p, index) => ({ p, index }))
        .filter(({ p }) => p.id !== item.id && caseMeta[p.id]?.category === meta.category)
        .slice(0, 4);

    return (
        <main className="pt-14">
            <article>
                <header className="px-4 sm:px-6 pt-10 sm:pt-14 pb-6">
                    <div className="max-w-3xl mx-auto">
                        <nav aria-label="breadcrumb" className="text-xs text-gray-400 mb-6">
                            <Link href="/" className="hover:text-gray-700">{l({ zh: '首頁', en: 'Home' })}</Link>
                            <span className="mx-1.5">›</span>
                            <Link href="/#work" className="hover:text-gray-700">{l(cat.label)}</Link>
                            <span className="mx-1.5">›</span>
                            <span className="text-gray-600">{l(item.industry)}</span>
                        </nav>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded bg-amber-50 border border-amber-200 px-2 py-0.5 text-xs text-amber-800">{l({ zh: '模擬提案｜非客戶委託', en: 'Spec work | not client-commissioned' })}</span>
                            <Link href="/method" className="rounded bg-teal-50 border border-teal-200 px-2 py-0.5 text-xs text-teal-800 hover:bg-teal-100">{l({ zh: '依 AEO 標準 v1.0 撰寫 →', en: 'Written to AEO standard v1.0 →' })}</Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">{l(item.industry)}｜{l(item.subtitle)}</p>
                        <h1 className="mt-1 text-2xl sm:text-4xl font-bold text-gray-900 leading-snug">{aeo.question}</h1>
                        <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                            作者：<Link href="/about" className="underline underline-offset-2">水彥捷</Link>
                            <span className="mx-1.5">·</span>更新：<time dateTime={aeo.updated}>{aeo.updated}</time>
                            <span className="mx-1.5">·</span>製作方式：AI 輔助整理，數據由作者逐條對照官方來源
                        </p>
                    </div>
                </header>

                <div className="px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto relative aspect-[21/9] rounded-xl overflow-hidden bg-gray-100">
                        <Cover item={item} priority sizes="(min-width: 1024px) 1024px, 100vw" />
                    </div>
                </div>

                <div className="px-4 sm:px-6 py-10">
                    <div className="max-w-3xl mx-auto">
                        {/* 答案摘要 */}
                        <section aria-labelledby="answer" className="rounded-xl border-l-4 bg-gray-50 px-5 py-4" style={{ borderColor: meta.accent }}>
                            <h2 id="answer" className="text-xs font-semibold tracking-widest text-gray-500">{l({ zh: '答案摘要', en: 'Short answer' })}</h2>
                            <div className="mt-1">{md(aeo.answer)}</div>
                            {language === 'en' && (
                                <p className="mt-3 text-sm text-gray-700 border-t border-gray-200 pt-3">
                                    {aeo.answerEn}
                                    <span className="block mt-2 text-xs text-gray-500">The full case below is in Traditional Chinese.</span>
                                </p>
                            )}
                        </section>

                        {/* 正文 */}
                        {aeo.sections.map((s) => (
                            <section key={s.h} className="mt-10">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{s.h}</h2>
                                {md(s.body)}
                            </section>
                        ))}

                        {/* 我的觀點 */}
                        <section className="mt-12 rounded-xl bg-teal-50/60 border border-teal-100 px-5 py-5">
                            <h2 className="text-lg font-bold text-gray-900">我的觀點</h2>
                            <div className="mt-2">{md(aeo.view)}</div>
                        </section>

                        {/* 常見問題 */}
                        <section className="mt-12">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">常見問題</h2>
                            <div className="divide-y divide-gray-100 border-y border-gray-100">
                                {aeo.faqs.map((f) => (
                                    <div key={f.q} className="py-4">
                                        <h3 className="font-semibold text-gray-900">{f.q}</h3>
                                        <div className="mt-1">{md(f.a)}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 事實卡 */}
                        <section className="mt-12">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">事實卡</h2>
                            <div className="overflow-x-auto rounded-lg border border-gray-200">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50 text-left">
                                        <tr>
                                            <th scope="col" className="px-3 py-2.5 font-semibold text-gray-900">項目</th>
                                            <th scope="col" className="px-3 py-2.5 font-semibold text-gray-900">數值</th>
                                            <th scope="col" className="px-3 py-2.5 font-semibold text-gray-900">出處</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {aeo.facts.map((f) => (
                                            <tr key={f.label} className="border-t border-gray-100">
                                                <td className="px-3 py-2.5 text-gray-700">{f.label}</td>
                                                <td className="px-3 py-2.5 font-medium text-gray-900 whitespace-nowrap">{f.value}</td>
                                                <td className="px-3 py-2.5"><a href={`#src-${f.src}`} className="text-teal-700 hover:underline">[{cite(f.src)}]</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 社群版情境文案 */}
                        <details className="mt-12 rounded-xl border border-gray-200 px-5 py-4 group">
                            <summary className="cursor-pointer font-semibold text-gray-900">社群版情境文案<span className="ml-2 text-xs font-normal text-gray-500">虛構情境，非事實陳述</span></summary>
                            <div className="mt-3">{md(l(item.content.geo))}</div>
                        </details>

                        {/* GA4 */}
                        <section className="mt-12">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">成效追蹤設計（GA4）</h2>
                            <p className="text-sm text-gray-500 mb-4">上線前的追蹤規劃，不是實際數據。</p>
                            <div className="overflow-x-auto rounded-lg border border-gray-200">
                                <table className="w-full text-sm">
                                    <tbody>
                                        {meta.ga4.map((e) => (
                                            <tr key={e.name} className="border-t first:border-0 border-gray-100">
                                                <td className="px-3 py-2.5 font-mono text-xs text-gray-900">{e.name}</td>
                                                <td className="px-3 py-2.5 text-gray-700">{l(e.trigger)}</td>
                                                <td className="px-3 py-2.5 text-xs">{e.primary ? <span className="rounded bg-teal-50 text-teal-800 px-2 py-0.5">主要轉換</span> : <span className="text-gray-500">輔助指標</span>}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 資料來源 */}
                        <section className="mt-12">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">資料來源</h2>
                            <ol className="space-y-3 text-sm">
                                {aeo.sources.map((s, i) => (
                                    <li key={s.id} id={`src-${s.id}`} className="scroll-mt-20 flex gap-2">
                                        <span className="text-gray-400 tabular-nums">[{i + 1}]</span>
                                        <span>
                                            <span className="text-gray-500">{s.publisher}｜{typeLabel[s.type]}</span><br />
                                            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-gray-900 underline underline-offset-2 decoration-gray-300 hover:decoration-teal-700 break-words">{s.title}</a>
                                            <span className="text-gray-400 text-xs ml-1">（查閱 {s.accessed}）</span>
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    </div>
                </div>
            </article>

            {related.length > 0 && (
                <section className="px-4 sm:px-6 py-14 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">{l({ zh: `同為「${cat.label.zh}」的案例`, en: `More in ${cat.label.en}` })}</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 sm:gap-6">
                            {related.map(({ p, index }) => <CaseCard key={p.id} item={p} index={index} />)}
                        </div>
                    </div>
                </section>
            )}

            <section className="px-4 sm:px-6 py-16 text-center">
                <div className="flex justify-center gap-3 flex-wrap">
                    <a href={`mailto:${SITE.email}`} className="rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm hover:bg-teal-800">{l({ zh: '寄信給我', en: 'Email me' })}</a>
                    <Link href="/#work" className="rounded-full border border-gray-300 px-5 py-2.5 text-sm text-gray-800 hover:border-gray-900">{l({ zh: '看其他產業', en: 'Other industries' })}</Link>
                </div>
            </section>
        </main>
    );
}
