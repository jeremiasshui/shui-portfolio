'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio-data';
import { caseMeta, categories, featured, type CategoryId } from '@/data/case-meta';
import { jbSalad } from '@/data/real-cases';
import { SITE, type Bi } from '@/data/site';
import CaseCard from './CaseCard';

const Section = ({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) => (
    <section id={id} className={`scroll-mt-20 px-4 sm:px-6 ${className}`}>
        <div className="max-w-6xl mx-auto">{children}</div>
    </section>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <p className="text-xs font-medium tracking-[0.2em] text-teal-700 mb-3">{children}</p>
);

export default function HomeView() {
    const { l } = useLanguage();
    const [cat, setCat] = useState<CategoryId | 'all'>('all');
    const list = portfolioData
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => cat === 'all' || caseMeta[item.id]?.category === cat);

    /* 唐崇達：不要忘記消費者的苦惱 */
    const pains: { q: Bi; a: Bi }[] = [
        {
            q: { zh: '網站有內容，流量卻一直沒起色', en: 'The site has content, but traffic never moves' },
            a: { zh: '每篇內容先確定讀者在搜尋什麼，再決定標題與段落結構。', en: 'Every piece starts from what readers actually search for, then sets headings and structure.' },
        },
        {
            q: { zh: '文章寫了不少，AI 搜尋卻從不提到你', en: 'Plenty of articles, yet AI search never mentions you' },
            a: { zh: '另寫一張 AI 讀得懂的速覽卡：事實、規格、適用對象，一條一條列清楚。', en: 'A separate fact card AI can parse: facts, specs and who it is for, line by line.' },
        },
        {
            q: { zh: '行銷做了很多，卻說不出哪一篇帶來詢問', en: 'Lots of marketing, but no idea which piece brought the enquiry' },
            a: { zh: '每份文案都附 GA4 事件設計，上線第一天就量得到。', en: 'Every piece ships with a GA4 event plan, measurable from day one.' },
        },
    ];

    /* 唐崇達：不要把共同利益當成獨門生意、不要忘記你還有情敵 */
    const compare: { k: Bi; common: Bi; mine: Bi }[] = [
        { k: { zh: '版本', en: 'Versions' }, common: { zh: '一篇文寫給所有人', en: 'One article for everyone' }, mine: { zh: '同一個產品寫四個版本，各自對應一個場景', en: 'Four versions of one product, each for a specific context' } },
        { k: { zh: '起點', en: 'Starting point' }, common: { zh: '從產品優點開始寫', en: 'Starts from product features' }, mine: { zh: '從讀者的問題和疑慮開始寫', en: 'Starts from the reader’s questions and doubts' } },
        { k: { zh: '交付', en: 'Hand-off' }, common: { zh: '交完文案就結束', en: 'Ends when the copy is delivered' }, mine: { zh: '附 GA4 追蹤設計，知道哪一篇有效', en: 'Includes a GA4 tracking plan to see what works' } },
        { k: { zh: 'B2B 題材', en: 'B2B topics' }, common: { zh: '常寫得像消費品廣告', en: 'Often reads like a consumer ad' }, mine: { zh: '有採購與供應鏈背景，從買方的角度寫', en: 'Written from the buyer’s side, backed by procurement and supply-chain experience' } },
    ];

    return (
        <main className="pt-14">
            {/* 首屏：給 HR 的 5 秒 */}
            <Section className="pt-16 sm:pt-24 pb-16 sm:pb-20">
                <Eyebrow>{l(SITE.role)}</Eyebrow>
                <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight sm:leading-tight max-w-3xl">
                    {l({ zh: '你的顧客先問 Google，再問 AI，最後才問你。', en: 'Your customers ask Google, then AI, and only then ask you.' })}
                </h1>
                <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                    {l({
                        zh: '我是水彥捷 Jeremy。我把一個產品寫成四個版本：讓 Google 排得上、讓精選摘要答得出、讓社群讀得下去、讓 AI 願意引用。這裡有 21 個產業的模擬提案，和 1 個真實案例。',
                        en: 'I’m Jeremy Shui. I write each product four ways: to rank on Google, to win featured answers, to read well on social, and to be cited by AI. Here are 21 spec projects across industries, plus one real client case.',
                    })}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2 text-xs sm:text-sm">
                    {[
                        { zh: 'GA4 認證', en: 'GA4 Certified' },
                        { zh: 'SEO／AEO／GEO', en: 'SEO / AEO / GEO' },
                        { zh: 'AI 工作流程設計', en: 'AI Workflow Design' },
                        { zh: '10+ 年跨領域經驗', en: '10+ yrs cross-industry' },
                    ].map((t) => (
                        <li key={t.zh} className="rounded-full border border-gray-200 px-3 py-1 text-gray-700">{l(t)}</li>
                    ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#featured" className="rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm hover:bg-teal-800 transition-colors">
                        {l({ zh: '先看一個案例 →', en: 'See one case first →' })}
                    </a>
                    <a href={`mailto:${SITE.email}`} className="rounded-full border border-gray-300 px-5 py-2.5 text-sm text-gray-800 hover:border-gray-900">
                        {l({ zh: '寄信給我', en: 'Email me' })}
                    </a>
                </div>
            </Section>

            {/* 困擾 */}
            <Section className="py-16 bg-gray-50">
                <Eyebrow>{l({ zh: '你可能遇過', en: 'Sound familiar?' })}</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{l({ zh: '這三種狀況，我都有對應的做法', en: 'Three common problems, and what I do about each' })}</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                    {pains.map((p, i) => (
                        <div key={i} className="rounded-xl bg-white p-6 border border-gray-100">
                            <p className="font-semibold text-gray-900 leading-snug">「{l(p.q)}」</p>
                            <p className="mt-3 text-sm text-gray-600 leading-relaxed"><span className="text-teal-700 font-medium">{l({ zh: '我的做法：', en: 'My approach: ' })}</span>{l(p.a)}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 差異 */}
            <Section className="py-16">
                <Eyebrow>{l({ zh: '差在哪裡', en: 'The difference' })}</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{l({ zh: '常見的產品文案，和我交付的內容', en: 'Typical product copy vs. what I deliver' })}</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-left">
                            <tr>
                                <th scope="col" className="px-4 py-3 font-medium text-gray-500 w-24"></th>
                                <th scope="col" className="px-4 py-3 font-medium text-gray-500">{l({ zh: '常見做法', en: 'Typical' })}</th>
                                <th scope="col" className="px-4 py-3 font-semibold text-teal-800">{l({ zh: '我的做法', en: 'Mine' })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {compare.map((r) => (
                                <tr key={r.k.zh} className="border-t border-gray-100">
                                    <th scope="row" className="px-4 py-3 text-left font-medium text-gray-900 align-top">{l(r.k)}</th>
                                    <td className="px-4 py-3 text-gray-500 align-top">{l(r.common)}</td>
                                    <td className="px-4 py-3 text-gray-900 align-top">{l(r.mine)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* 精選導讀：不要放任海選 */}
            <Section id="featured" className="py-16 bg-gray-50">
                <Eyebrow>{l({ zh: '從這裡開始', en: 'Start here' })}</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{l({ zh: '不知道從哪一篇看起？依你的產業挑一篇', en: 'Not sure where to start? Pick by your industry' })}</h2>
                <p className="text-gray-600 mb-8">{l({ zh: '每篇都包含：讀者困擾、切角、四個版本，和 GA4 追蹤設計。', en: 'Each includes the reader’s problem, the angle, four versions and a GA4 plan.' })}</p>
                <div className="grid gap-5 sm:grid-cols-3">
                    {featured.map((f) => {
                        const item = portfolioData.find((p) => p.id === f.id)!;
                        return (
                            <Link key={f.id} href={`/work/${f.id}`} className="group rounded-xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative aspect-[16/9]">
                                    <Image src={item.image} alt={l(item.subtitle)} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs text-teal-700 font-medium">{l({ zh: '如果', en: 'If ' })}{l(f.who)}</p>
                                    <h3 className="mt-1 font-semibold text-gray-900">{l(item.industry)}｜{l(item.subtitle)}</h3>
                                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{l(f.why)}</p>
                                    <p className="mt-3 text-sm text-gray-900 group-hover:text-teal-800">{l({ zh: '看這個案例 →', en: 'Read this case →' })}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Section>

            {/* 實戰案例 */}
            <Section className="py-16">
                <Eyebrow>{l({ zh: '實戰案例', en: 'Real client case' })}</Eyebrow>
                <Link href={`/work/${jbSalad.slug}`} className="block rounded-xl border-2 border-teal-700/20 p-6 sm:p-8 hover:border-teal-700 transition-colors">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{l(jbSalad.title)}</h2>
                    <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl">{l(jbSalad.short)}</p>
                    <p className="mt-4 text-sm text-gray-900">{l({ zh: '看完整案例 →', en: 'Read the full case →' })}</p>
                </Link>
            </Section>

            {/* 全部作品 + 分類篩選 */}
            <Section id="work" className="py-16 bg-gray-50">
                <Eyebrow>{l({ zh: '全部作品', en: 'All work' })}</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{l({ zh: '21 個產業，各寫四個版本', en: '21 industries, four versions each' })}</h2>
                <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label={l({ zh: '依產業篩選', en: 'Filter by industry' })}>
                    {[{ id: 'all' as const, label: { zh: '全部', en: 'All' } }, ...categories].map((c) => (
                        <button
                            key={c.id}
                            onClick={() => setCat(c.id)}
                            aria-pressed={cat === c.id}
                            className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${cat === c.id ? 'bg-gray-900 text-white border-gray-900' : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'}`}
                        >
                            {l(c.label)}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 sm:gap-6">
                    {list.map(({ item, index }) => <CaseCard key={item.id} item={item} index={index} />)}
                </div>
            </Section>

            {/* 誠實聲明：唐崇達「親筆保證」 */}
            <Section className="py-16">
                <div className="rounded-xl bg-amber-50 border border-amber-100 p-6 sm:p-8 max-w-3xl">
                    <h2 className="text-lg font-bold text-gray-900">{l({ zh: '先說清楚', en: 'To be clear' })}</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        {l({
                            zh: '這 21 個案例都是我自己設定題目的模擬提案，不是客戶委託，也沒有任何虛構的成效數字。我把它們標出來，是因為你該知道自己在看什麼。真實的客戶案例，請看 JB Salad。',
                            en: 'All 21 projects are self-initiated spec work: no client commissioned them, and there are no invented results. I label them because you should know what you are looking at. For a real client case, see JB Salad.',
                        })}
                    </p>
                </div>
            </Section>

            {/* 關於我 */}
            <Section id="about" className="py-16 bg-gray-50">
                <Eyebrow>{l({ zh: '關於我', en: 'About' })}</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{l(SITE.name)} <span className="text-gray-400 font-normal text-xl">{l({ zh: 'Jeremy Shui', en: '水彥捷' })}</span></h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 max-w-4xl">
                    <p className="text-gray-700 leading-relaxed">
                        {l({
                            zh: '我做過國際採購、航運、供應鏈、政府專案和行銷，累積十年以上的跨領域經驗。因為站過買方的位置，寫 B2B 內容時，我知道對方在擔心什麼。現在我把這些經驗，用在內容策略與 AI 搜尋優化上。',
                            en: 'I have 10+ years across international procurement, shipping, supply chain, government projects and marketing. Having sat on the buyer’s side, I know what B2B readers worry about. Today I apply that to content strategy and AI search optimization.',
                        })}
                    </p>
                    <dl className="text-sm space-y-3">
                        <div><dt className="text-gray-400">{l({ zh: '證照', en: 'Certification' })}</dt><dd className="text-gray-900">{l({ zh: 'Google Analytics 4（GA4）認證', en: 'Google Analytics 4 (GA4) certified' })}</dd></div>
                        <div><dt className="text-gray-400">{l({ zh: '學歷', en: 'Education' })}</dt><dd className="text-gray-900">{l({ zh: '國立臺灣海洋大學 航運管理碩士、銘傳大學 管理碩士', en: 'M.S. Shipping Management, National Taiwan Ocean University; M.S. Management, Ming Chuan University' })}</dd></div>
                        <div><dt className="text-gray-400">{l({ zh: '擅長', en: 'Skills' })}</dt><dd className="text-gray-900">{l({ zh: 'SEO／AEO／GEO 內容結構、GA4 追蹤設計、Claude Skills 與 AI 工作流程', en: 'SEO/AEO/GEO content structure, GA4 tracking design, Claude Skills & AI workflows' })}</dd></div>
                    </dl>
                </div>
            </Section>

            {/* 聯絡：唐崇達「不要對買家下命令」 */}
            <Section className="py-20 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 max-w-2xl mx-auto leading-snug">
                    {l({ zh: '如果你的團隊需要一個能寫、能拆結構、也看得懂數據的人', en: 'If your team needs someone who can write, structure content and read the data' })}
                </h2>
                <p className="mt-4 text-gray-600">{l({ zh: '歡迎來信，聊聊你們正在處理的題目。', en: 'Drop me a line about what your team is working on.' })}</p>
                <a href={`mailto:${SITE.email}`} className="mt-8 inline-block rounded-full bg-gray-900 text-white px-6 py-3 text-sm hover:bg-teal-800 transition-colors">
                    {SITE.email}
                </a>
            </Section>
        </main>
    );
}
