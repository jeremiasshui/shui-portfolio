'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { SITE } from '@/data/site';

export default function Header() {
    const { language, toggleLanguage, l } = useLanguage();

    const nav = [
        { href: '/#work', label: { zh: '作品', en: 'Work' } },
        { href: '/work/jb-salad', label: { zh: '實戰案例', en: 'Real Case' } },
        { href: '/about', label: { zh: '經歷', en: 'Experience' } },
    ];

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
                <Link href="/" className="text-lg font-light tracking-[0.25em] text-gray-900 shrink-0">
                    SHUI<span className="text-teal-700">.</span>
                </Link>

                <nav className="flex items-center gap-3 sm:gap-6 text-sm text-gray-600">
                    {nav.map((n) => (
                        <Link key={n.href} href={n.href} className="hidden sm:inline hover:text-gray-900 transition-colors">
                            {l(n.label)}
                        </Link>
                    ))}
                    <a href={`mailto:${SITE.email}`} className="rounded-full bg-gray-900 text-white px-3.5 py-1.5 text-xs sm:text-sm hover:bg-teal-800 transition-colors">
                        {l({ zh: '聯絡我', en: 'Contact' })}
                    </a>
                    <button
                        onClick={toggleLanguage}
                        aria-label={language === 'zh' ? 'Switch to English' : '切換為中文'}
                        className="text-xs font-medium px-2 py-1 rounded border border-gray-200 hover:border-gray-400"
                    >
                        {language === 'zh' ? 'EN' : '中'}
                    </button>
                </nav>
            </div>
        </header>
    );
}
