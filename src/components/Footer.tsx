'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { SITE } from '@/data/site';

export default function Footer() {
    const { l } = useLanguage();
    return (
        <footer className="border-t border-gray-100 py-10 px-4 text-center text-xs text-gray-400 space-y-2">
            <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-gray-700">{SITE.email}</a>
                <span className="mx-2">·</span>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">GitHub</a>
            </p>
            <p>© {new Date().getFullYear()} {l(SITE.name)} · {SITE.version}</p>
        </footer>
    );
}
