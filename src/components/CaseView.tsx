'use client';

import { useState } from 'react';
import Link from 'next/link';
import Cover from './Cover';
import { useLanguage } from '@/contexts/LanguageContext';
import type { PortfolioItem } from '@/data/portfolio-data';
import { allCases } from '@/data/all-cases';
import { caseMeta, categories, versionTabs } from '@/data/case-meta';
import { SITE } from '@/data/site';
import Markdown from './Markdown';
import CaseCard from './CaseCard';

type TabKey = (typeof versionTabs)[number]['key'];

export default function CaseView({ item }: { item: PortfolioItem }) {
    const { l } = useLanguage();
    const meta = caseMeta[item.id];
    const [tab, setTab] = useState<TabKey>('seo');
    const cat = categories.find((c) => c.id === meta.category)!;
    const related = allCases
        .map((p, index) => ({ p, index }))
        .filter(({ p }) => p.id !== item.id && caseMeta[p.id]?.category === meta.category)
        .slice(0, 4);

    const brief = [
        { k: { zh: '目標讀者', en: 'Audience' }, v: meta.audience },
        { k: { zh: '讀者的困擾', en: 'Their problem' }, v: meta.pain },
        { k: { zh: '我的切角', en: 'My angle' }, v: meta.angle },
    ];

    return (
        <main className="pt-14">
            <article>
                <header className="px-4 sm:px-6 pt-10 sm:pt-14 pb-8">
                    <div className="max-w-3xl mx-auto">
                        <nav aria-label="breadcrumb" className="text-xs text-gray-400 mb-6">
                            <Link href="/" className="hover:text-gray-700">{l({ zh: '首頁', en: 'Home' })}</Link>
                            <span className="mx-1.5">›</span>
                            <Link href="/#work" className="hover:text-gray-700">{l(cat.label)}</Link>
                            <span className="mx-1.5">›</span>
                            <span className="text-gray-600">{l(item.industry)}</span>
                        </nav>
                        <span className="inline-block rounded bg-amber-50 border border-amber-200 px-2 py-0.5 text-xs text-amber-800">
                            {l({ zh: '模擬提案｜非客戶委託', en: 'Spec work | not client-commissioned' })}
                        </span>
                        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                            {l(item.industry)}<span className="text-gray-300 mx-2">｜</span>{l(item.subtitle)}
                        </h1>
                    </div>
                </header>

                <div className="px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto relative aspect-[21/9] rounded-xl overflow-hidden bg-gray-100">
                        <Cover item={item} priority sizes="(min-width: 1024px) 1024px, 100vw" />
                    </div>
                </div>

                {/* 問題 → 切角 */}
                <section className="px-4 sm:px-6 py-12">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl font-bold text-gray-900 mb-5">{l({ zh: '這份提案要解決什麼', en: 'What this brief solves' })}</h2>
                        <dl className="grid gap-4">
                            {brief.map((b) => (
                                <div key={b.k.zh} className="rounded-lg border-l-4 bg-gray-50 px-4 py-3" style={{ borderColor: meta.accent }}>
                                    <dt className="text-xs font-medium text-gray-500">{l(b.k)}</dt>
                                    <dd className="mt-1 text-gray-900 leading-relaxed">{l(b.v)}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                {/* 四個版本：全部輸出在 HTML，切換只改顯示，搜尋引擎讀得到 */}
                <section className="px-4 sm:px-6 pb-12">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">{l({ zh: '同一個產品，四個版本', en: 'One product, four versions' })}</h2>
                        <p className="text-sm text-gray-500 mb-5">{l({ zh: '每個版本對應不同的讀者場景。', en: 'Each version serves a different reading context.' })}</p>
                        <div role="tablist" aria-label={l({ zh: '文案版本', en: 'Copy versions' })} className="grid grid-cols-4 border-b border-gray-200">
                            {versionTabs.map((t) => (
                                <button
                                    key={t.key}
                                    role="tab"
                                    id={`tab-${t.key}`}
                                    aria-selected={tab === t.key}
                                    aria-controls={`panel-${t.key}`}
                                    onClick={() => setTab(t.key)}
                                    className={`px-1 sm:px-4 py-2.5 text-[13px] sm:text-sm border-b-2 -mb-px transition-colors ${tab === t.key ? 'font-semibold text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                                    style={tab === t.key ? { borderColor: meta.accent } : undefined}
                                >
                                    {l(t.label)}
                                </button>
                            ))}
                        </div>
                        {versionTabs.map((t) => (
                            <div key={t.key} role="tabpanel" id={`panel-${t.key}`} aria-labelledby={`tab-${t.key}`} hidden={tab !== t.key} className="pt-5">
                                <p className="text-xs text-gray-500 bg-gray-50 rounded px-3 py-2 mb-6">{l(t.desc)}</p>
                                <Markdown text={l(item.content[t.key])} accent={meta.accent} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* GA4 追蹤設計 */}
                <section className="px-4 sm:px-6 pb-14">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">{l({ zh: '成效追蹤設計（GA4）', en: 'Measurement plan (GA4)' })}</h2>
                        <p className="text-sm text-gray-500 mb-5">{l({ zh: '這是上線前的追蹤規劃，不是實際數據。', en: 'This is a pre-launch tracking plan, not actual data.' })}</p>
                        <div className="overflow-x-auto rounded-lg border border-gray-200">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 text-left">
                                    <tr>
                                        <th scope="col" className="px-3 py-2.5 font-semibold text-gray-900">{l({ zh: '事件名稱', en: 'Event' })}</th>
                                        <th scope="col" className="px-3 py-2.5 font-semibold text-gray-900">{l({ zh: '觸發時機', en: 'Trigger' })}</th>
                                        <th scope="col" className="px-3 py-2.5 font-semibold text-gray-900">{l({ zh: '角色', en: 'Role' })}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {meta.ga4.map((e) => (
                                        <tr key={e.name} className="border-t border-gray-100">
                                            <td className="px-3 py-2.5 font-mono text-xs text-gray-900">{e.name}</td>
                                            <td className="px-3 py-2.5 text-gray-700">{l(e.trigger)}</td>
                                            <td className="px-3 py-2.5">
                                                {e.primary
                                                    ? <span className="rounded bg-teal-50 text-teal-800 px-2 py-0.5 text-xs">{l({ zh: '主要轉換', en: 'Key event' })}</span>
                                                    : <span className="text-xs text-gray-500">{l({ zh: '輔助指標', en: 'Supporting' })}</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
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
                <p className="text-gray-700">{l({ zh: '想聊聊你們的產品可以怎麼寫？', en: 'Want to talk about how your product could be written?' })}</p>
                <div className="mt-5 flex justify-center gap-3 flex-wrap">
                    <a href={`mailto:${SITE.email}`} className="rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm hover:bg-teal-800">{l({ zh: '寄信給我', en: 'Email me' })}</a>
                    <Link href="/#work" className="rounded-full border border-gray-300 px-5 py-2.5 text-sm text-gray-800 hover:border-gray-900">{l({ zh: '看其他產業', en: 'Other industries' })}</Link>
                </div>
            </section>
        </main>
    );
}
