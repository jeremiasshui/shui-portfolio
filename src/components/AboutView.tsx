'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { jobs, skillTags, highlights, projects, education, certs, type SkillId } from '@/data/experience';
import { SITE } from '@/data/site';

export default function AboutView() {
    const { l } = useLanguage();
    const [skill, setSkill] = useState<SkillId | 'all'>('all');
    const label = (id: SkillId) => l(skillTags.find((t) => t.id === id)!.label);

    return (
        <main className="pt-14">
            {/* 開場：不把自己限定在單一職務 */}
            <section className="px-4 sm:px-6 pt-12 sm:pt-16 pb-10">
                <div className="max-w-4xl mx-auto">
                    <nav aria-label="breadcrumb" className="text-xs text-gray-400 mb-6">
                        <Link href="/" className="hover:text-gray-700">{l({ zh: '首頁', en: 'Home' })}</Link>
                        <span className="mx-1.5">›</span>
                        <span className="text-gray-600">{l({ zh: '經歷', en: 'Experience' })}</span>
                    </nav>
                    <p className="text-xs font-medium tracking-[0.2em] text-teal-700 mb-3">{l({ zh: '經歷', en: 'Experience' })}</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                        {l(SITE.name)} <span className="text-gray-400 font-normal text-2xl">{l({ zh: 'Jeremy Shui', en: '水彥捷' })}</span>
                    </h1>
                    <p className="mt-5 text-lg text-gray-700 leading-relaxed max-w-3xl">
                        {l({
                            zh: '十年以上，我在貿易、船務、政府機關、研究院、醫院、新創與食品品牌之間工作，處理的多半是同一類問題：資訊分散、各方立場不同、時間有限，而主管需要在資訊不完整時做決定。我的工作，是把資料、流程和共識重新整理好，讓事情往前走。',
                            en: 'For over ten years I have worked across trading, shipping, government, research institutes, a hospital, startups and food brands. The problem is usually the same: scattered information, competing interests, tight deadlines, and a manager who must decide without the full picture. My job is to rebuild the data, the process and the consensus so things move forward.',
                        })}
                    </p>
                    <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                        {l({
                            zh: '近兩年，我把這套做法延伸到生成式 AI：AI 負責加速，人負責把關。每一份產出都要能回到來源、經過人工審核。',
                            en: 'In the past two years I have extended this to generative AI: AI speeds things up, people stay accountable. Every output must trace back to a source and pass human review.',
                        })}
                    </p>
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-3xl rounded-lg bg-gray-50 px-4 py-3">
                        {l({
                            zh: '關於近年的任職時間：2020 到 2025 年間，我協助母親照顧生病的父親，因此多選擇約聘與專案工作。現在照護已經結束，我希望找一份能長期投入的全職工作。',
                            en: 'About my recent tenures: from 2020 to 2025 I helped my mother care for my ill father, so I mostly took contract and project roles. That period has ended, and I am now looking for a long-term, full-time position.',
                        })}
                    </p>
                </div>
            </section>

            {/* 代表數字 */}
            <section className="px-4 sm:px-6 pb-12">
                <dl className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {highlights.map((h) => (
                        <div key={h.num} className="rounded-xl bg-gray-50 p-4">
                            <dt className="sr-only">{l(h.label)}</dt>
                            <dd className="text-2xl font-bold text-gray-900">{h.num}</dd>
                            <dd className="mt-1 text-xs text-gray-600 leading-relaxed">{l(h.label)}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* 依職能篩選 */}
            <section className="px-4 sm:px-6 pb-14">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900">{l({ zh: '依你在找的職務看我的經歷', en: 'View my experience by the role you are hiring for' })}</h2>
                    <p className="mt-2 text-sm text-gray-500">{l({ zh: '點選職能，只顯示相關的工作。', en: 'Pick a function to show only the relevant roles.' })}</p>
                    <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label={l({ zh: '依職能篩選', en: 'Filter by function' })}>
                        {[{ id: 'all' as const, label: { zh: '全部', en: 'All' } }, ...skillTags].map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setSkill(t.id)}
                                aria-pressed={skill === t.id}
                                className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${skill === t.id ? 'bg-gray-900 text-white border-gray-900' : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'}`}
                            >
                                {l(t.label)}
                            </button>
                        ))}
                    </div>

                    <ol className="mt-8 relative border-l border-gray-200 ml-2 space-y-8">
                        {jobs.filter((j) => skill === 'all' || j.skills.includes(skill)).map((j) => (
                            <li key={j.period + j.org.zh} className="pl-6 relative">
                                <span className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${j.gap ? 'bg-gray-300' : j.selfStudy ? 'bg-white border-2 border-teal-700' : 'bg-teal-700'}`} />
                                <p className="text-xs text-gray-500 tabular-nums">{j.period}</p>
                                <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                                    {l(j.title)}<span className="text-gray-300 mx-1.5">｜</span><span className="font-normal text-gray-700">{l(j.org)}</span>
                                </h3>
                                <ul className="mt-2 space-y-1.5 text-[15px] text-gray-700 leading-relaxed list-disc pl-5">
                                    {j.points.map((p, i) => <li key={i}>{l(p)}</li>)}
                                </ul>
                                <p className="mt-2 flex flex-wrap gap-1.5">
                                    {j.skills.map((s) => (
                                        <span key={s} className={`text-[11px] rounded px-1.5 py-0.5 ${s === skill ? 'bg-teal-700 text-white' : 'bg-gray-100 text-gray-600'}`}>{label(s)}</span>
                                    ))}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* 專案 */}
            <section className="px-4 sm:px-6 py-14 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{l({ zh: '個人專案', en: 'Projects' })}</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {projects.map((p) => (
                            <div key={p.title.zh} className="rounded-xl bg-white border border-gray-100 p-5">
                                <p className="text-xs text-gray-500">{p.period}</p>
                                <h3 className="mt-1 font-semibold text-gray-900">
                                    {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-gray-300 hover:decoration-teal-700">{l(p.title)} ↗</a> : l(p.title)}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{l(p.desc)}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-5 text-sm">
                        <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-teal-800 underline underline-offset-4">{l({ zh: '在 GitHub 看程式碼', en: 'See the code on GitHub' })}</a>
                    </p>
                </div>
            </section>

            {/* 學歷與證照 */}
            <section className="px-4 sm:px-6 py-14">
                <div className="max-w-4xl mx-auto grid gap-10 sm:grid-cols-2">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">{l({ zh: '學歷', en: 'Education' })}</h2>
                        <ul className="space-y-2 text-gray-700">{education.map((e) => <li key={e.zh}>{l(e)}</li>)}</ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">{l({ zh: '證照與進修', en: 'Certifications & training' })}</h2>
                        <ul className="space-y-2 text-gray-700">{certs.map((c) => <li key={c.zh}>{l(c)}</li>)}</ul>
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 py-16 text-center border-t border-gray-100">
                <p className="text-gray-700">{l({ zh: '想進一步了解，歡迎來信。', en: 'Happy to tell you more. Drop me a line.' })}</p>
                <div className="mt-5 flex justify-center gap-3 flex-wrap">
                    <a href={`mailto:${SITE.email}`} className="rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm hover:bg-teal-800">{SITE.email}</a>
                    <Link href="/#work" className="rounded-full border border-gray-300 px-5 py-2.5 text-sm text-gray-800 hover:border-gray-900">{l({ zh: '看作品', en: 'See the work' })}</Link>
                </div>
            </section>
        </main>
    );
}
