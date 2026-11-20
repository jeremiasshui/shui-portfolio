'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Bi } from '@/data/site';

type Language = 'zh' | 'en';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    l: (text: Bi) => string;
}

const STORAGE_KEY = 'shui-lang';
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    // 中文為主：預設一律中文，只有使用者主動切換才改英文
    const [language, setLanguage] = useState<Language>('zh');

    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            // 讀取使用者上次的語言選擇；SSR 一律先輸出中文，掛載後才套用，避免 hydration 不一致
            // eslint-disable-next-line react-hooks/set-state-in-effect
            if (saved === 'en') setLanguage('en');
        } catch { /* storage unavailable */ }
    }, []);

    useEffect(() => {
        document.documentElement.lang = language === 'zh' ? 'zh-Hant-TW' : 'en';
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const next = prev === 'zh' ? 'en' : 'zh';
            try { localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore */ }
            return next;
        });
    };

    const l = (text: Bi) => text[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, l }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
