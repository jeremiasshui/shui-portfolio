'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function Header() {
    const { language, toggleLanguage, t } = useLanguage();
    const [copied, setCopied] = useState(false);

    const handleContact = () => {
        const email = 'hello@shui.design';
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="text-lg sm:text-xl font-light tracking-widest text-gray-900">
                    SHUI<span className="text-gray-400">.</span>
                </a>

                {/* Right Side Controls */}
                <div className="flex items-center gap-3 sm:gap-6">
                    {/* Contact Button */}
                    <button
                        onClick={handleContact}
                        className="text-xs sm:text-sm tracking-wider text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        {copied ? t('contact.copied') : t('nav.contact')}
                    </button>

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded border border-gray-200 hover:border-gray-400"
                    >
                        {language === 'en' ? '中' : 'EN'}
                    </button>
                </div>
            </div>
        </header>
    );
}
