'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
    // Header
    'nav.contact': { en: 'CONTACT', zh: '聯繫' },
    'nav.darkMode': { en: 'Dark Mode', zh: '深色模式' },

    // Gallery
    'gallery.title': { en: 'Portfolio', zh: '作品集' },
    'gallery.subtitle': { en: 'Explore creative works across industries', zh: '探索跨產業的創意作品' },

    // Modal Tabs
    'tab.seo': { en: 'SEO', zh: 'SEO' },
    'tab.aeo': { en: 'AEO', zh: 'AEO' },
    'tab.geo': { en: 'GEO', zh: 'GEO' },
    'tab.aieo': { en: 'AIEO', zh: 'AIEO' },

    // Tab Descriptions
    'tab.seo.desc': { en: 'Search Engine Optimization', zh: '搜尋引擎優化' },
    'tab.aeo.desc': { en: 'Answer Engine Optimization', zh: '答案引擎優化' },
    'tab.geo.desc': { en: 'Geo/Context Optimization', zh: '地理/情境優化' },
    'tab.aieo.desc': { en: 'AI Engine Optimization', zh: 'AI引擎優化' },

    // Modal
    'modal.close': { en: 'Close', zh: '關閉' },

    // Footer
    'footer.copyright': { en: '© 2024 SHUI. All rights reserved.', zh: '© 2024 水一. 版權所有.' },

    // Contact
    'contact.email': { en: 'Copy Email', zh: '複製信箱' },
    'contact.copied': { en: 'Copied!', zh: '已複製！' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');

    // Detect browser language on mount
    useEffect(() => {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('zh')) {
            setLanguageState('zh');
        } else {
            setLanguageState('en');
        }
    }, []);

    const toggleLanguage = () => {
        setLanguageState((prev) => (prev === 'en' ? 'zh' : 'en'));
    };

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const t = (key: string): string => {
        return translations[key]?.[language] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
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
