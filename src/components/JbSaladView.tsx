'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { jbSalad } from '@/data/real-cases';
import { SITE } from '@/data/site';

export default function JbSaladView() {
    const { l } = useLanguage();
    return (
        <main className="pt-14">
            <article className="px-4 sm:px-6 pt-10 sm:pt-14 pb-16">
                <div className="max-w-3xl mx-auto">
                    <nav aria-label="breadcrumb" className="text-xs text-gray-400 mb-6">
                        <Link href="/" className="hover:text-gray-700">{l({ zh: '首頁', en: 'Home' })}</Link>
                        <span className="mx-1.5">›</span>
                        <span className="text-gray-600">{l({ zh: '實戰案例', en: 'Real case' })}</span>
                    </nav>
                    <span className="inline-block rounded bg-teal-50 border border-teal-200 px-2 py-0.5 text-xs text-teal-800">
                        {l({ zh: '實戰案例｜真實客戶', en: 'Real case | actual client' })}
                    </span>
                    <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{l(jbSalad.title)}</h1>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">{l(jbSalad.short)}</p>

                    <section className="mt-12">
                        <h2 className="text-xl font-bold text-gray-900">{l({ zh: '背景', en: 'Background' })}</h2>
                        <p className="mt-3 text-gray-700 leading-relaxed">{l(jbSalad.background)}</p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-xl font-bold text-gray-900">{l({ zh: '任務', en: 'Brief' })}</h2>
                        <p className="mt-3 text-gray-700 leading-relaxed">{l(jbSalad.task)}</p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-xl font-bold text-gray-900">{l({ zh: '我怎麼做', en: 'How I approached it' })}</h2>
                        <ol className="mt-5 space-y-5">
                            {jbSalad.approach.map((a, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-teal-700 text-white text-sm flex items-center justify-center">{i + 1}</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{l(a.title)}</h3>
                                        <p className="mt-1 text-gray-700 leading-relaxed">{l(a.body)}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="mt-10 rounded-xl bg-gray-50 p-6">
                        <h2 className="text-xl font-bold text-gray-900">{l({ zh: '結果', en: 'Outcome' })}</h2>
                        <p className="mt-3 text-gray-700 leading-relaxed">{l(jbSalad.outcome)}</p>
                        <p className="mt-3 text-sm">
                            <a href={jbSalad.site} target="_blank" rel="noopener noreferrer" className="text-teal-800 underline underline-offset-4">jbsalad.com</a>
                        </p>
                    </section>

                    <div className="mt-14 text-center">
                        <a href={`mailto:${SITE.email}`} className="rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm hover:bg-teal-800">{l({ zh: '寄信給我', en: 'Email me' })}</a>
                    </div>
                </div>
            </article>
        </main>
    );
}
