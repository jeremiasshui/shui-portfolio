'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PortfolioItem } from '@/data/portfolio-data';

interface ModalProps {
    item: PortfolioItem;
    onClose: () => void;
}

type TabType = 'seo' | 'aeo' | 'geo' | 'aieo';

// Industry-specific color themes
const industryThemes: Record<string, {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    text: string;
    tabActive: string;
    tabHover: string;
}> = {
    '01-health': {
        primary: '#0EA5E9',
        secondary: '#0284C7',
        accent: '#38BDF8',
        bg: 'from-sky-50 to-blue-50',
        text: 'text-sky-900',
        tabActive: 'bg-sky-600',
        tabHover: 'hover:bg-sky-100',
    },
    '02-aesthetic': {
        primary: '#EC4899',
        secondary: '#DB2777',
        accent: '#F472B6',
        bg: 'from-pink-50 to-rose-50',
        text: 'text-pink-900',
        tabActive: 'bg-pink-500',
        tabHover: 'hover:bg-pink-100',
    },
    '03-pet': {
        primary: '#F59E0B',
        secondary: '#D97706',
        accent: '#FBBF24',
        bg: 'from-amber-50 to-orange-50',
        text: 'text-amber-900',
        tabActive: 'bg-amber-500',
        tabHover: 'hover:bg-amber-100',
    },
    '04-education': {
        primary: '#8B5CF6',
        secondary: '#7C3AED',
        accent: '#A78BFA',
        bg: 'from-violet-50 to-purple-50',
        text: 'text-violet-900',
        tabActive: 'bg-violet-600',
        tabHover: 'hover:bg-violet-100',
    },
    '05-green': {
        primary: '#10B981',
        secondary: '#059669',
        accent: '#34D399',
        bg: 'from-emerald-50 to-teal-50',
        text: 'text-emerald-900',
        tabActive: 'bg-emerald-600',
        tabHover: 'hover:bg-emerald-100',
    },
    '06-beverage': {
        primary: '#92400E',
        secondary: '#78350F',
        accent: '#B45309',
        bg: 'from-amber-50 to-yellow-50',
        text: 'text-amber-900',
        tabActive: 'bg-amber-700',
        tabHover: 'hover:bg-amber-100',
    },
    '07-ecommerce': {
        primary: '#EF4444',
        secondary: '#DC2626',
        accent: '#F87171',
        bg: 'from-red-50 to-orange-50',
        text: 'text-red-900',
        tabActive: 'bg-red-500',
        tabHover: 'hover:bg-red-100',
    },
    '08-fitness': {
        primary: '#3B82F6',
        secondary: '#2563EB',
        accent: '#60A5FA',
        bg: 'from-blue-50 to-indigo-50',
        text: 'text-blue-900',
        tabActive: 'bg-blue-600',
        tabHover: 'hover:bg-blue-100',
    },
    '09-coffee': {
        primary: '#78716C',
        secondary: '#57534E',
        accent: '#A8A29E',
        bg: 'from-stone-50 to-neutral-100',
        text: 'text-stone-900',
        tabActive: 'bg-stone-600',
        tabHover: 'hover:bg-stone-100',
    },
    '10-delivery': {
        primary: '#06B6D4',
        secondary: '#0891B2',
        accent: '#22D3EE',
        bg: 'from-cyan-50 to-sky-50',
        text: 'text-cyan-900',
        tabActive: 'bg-cyan-600',
        tabHover: 'hover:bg-cyan-100',
    },
    '11-coldchain': {
        primary: '#6366F1',
        secondary: '#4F46E5',
        accent: '#818CF8',
        bg: 'from-indigo-50 to-slate-50',
        text: 'text-indigo-900',
        tabActive: 'bg-indigo-600',
        tabHover: 'hover:bg-indigo-100',
    },
};

const defaultTheme = industryThemes['01-health'];

export default function Modal({ item, onClose }: ModalProps) {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState<TabType>('seo');

    const theme = industryThemes[item.id] || defaultTheme;

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const tabs: { key: TabType; label: string }[] = [
        { key: 'seo', label: 'SEO' },
        { key: 'aeo', label: 'AEO' },
        { key: 'geo', label: 'GEO' },
        { key: 'aieo', label: 'AIEO' },
    ];

    const getContent = () => {
        const content = item.content[activeTab];
        return language === 'en' ? content.en : content.zh;
    };

    // Parse tables properly - normalize line endings first
    const parseTable = (lines: string[], startIndex: number): { rows: string[][]; endIndex: number; hasHeader: boolean } => {
        const rows: string[][] = [];
        let i = startIndex;
        let hasHeader = false;

        while (i < lines.length) {
            const line = lines[i].trim();
            if (!line.startsWith('|') || !line.endsWith('|')) break;

            const cells = line.split('|').filter(cell => cell.trim() !== '');

            // Check if this is a separator row
            if (cells.every(cell => cell.trim().match(/^[-:]+$/))) {
                hasHeader = true;
                i++;
                continue;
            }

            rows.push(cells.map(c => c.trim()));
            i++;
        }

        return { rows, endIndex: i - 1, hasHeader };
    };

    const renderContent = (text: string) => {
        // Normalize line endings (handle Windows \r\n and old Mac \r)
        const normalizedText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        const lines = normalizedText.split('\n');
        const elements: React.ReactNode[] = [];
        let i = 0;

        while (i < lines.length) {
            const line = lines[i];
            const trimmedLine = line.trim();

            // H3 Headers
            if (trimmedLine.startsWith('### ')) {
                elements.push(
                    <h3 key={i} className={`text-xl sm:text-2xl font-bold ${theme.text} mt-6 sm:mt-8 mb-3 sm:mb-4 first:mt-0`}>
                        {trimmedLine.replace('### ', '')}
                    </h3>
                );
                i++;
                continue;
            }

            // H4 Headers
            if (trimmedLine.startsWith('#### ')) {
                elements.push(
                    <h4 key={i} className={`text-lg sm:text-xl font-semibold ${theme.text} mt-5 sm:mt-6 mb-2 sm:mb-3`}>
                        {trimmedLine.replace('#### ', '')}
                    </h4>
                );
                i++;
                continue;
            }

            // Tables - Parse entire table at once
            if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
                const { rows, endIndex, hasHeader } = parseTable(lines, i);

                if (rows.length > 0) {
                    elements.push(
                        <div key={i} className="my-5 sm:my-6 overflow-x-auto rounded-lg border" style={{ borderColor: `${theme.primary}30` }}>
                            <table className="w-full text-sm">
                                {hasHeader && rows.length > 0 && (
                                    <thead>
                                        <tr className="bg-gray-50" style={{ backgroundColor: `${theme.primary}10` }}>
                                            {rows[0].map((cell, cellIndex) => (
                                                <th key={cellIndex} className={`px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold ${theme.text} border-b text-xs sm:text-sm`} style={{ borderColor: `${theme.primary}30` }}>
                                                    {cell}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                )}
                                <tbody>
                                    {rows.slice(hasHeader ? 1 : 0).map((row, rowIndex) => (
                                        <tr key={rowIndex} className="border-b last:border-b-0 hover:bg-gray-50" style={{ borderColor: `${theme.primary}15` }}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className="px-3 sm:px-4 py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    );
                }
                i = endIndex + 1;
                continue;
            }

            // Q&A format
            if (trimmedLine.match(/^\*\*Q[：:]/)) {
                elements.push(
                    <p key={i} className={`font-bold ${theme.text} mt-5 sm:mt-6 mb-2 text-base sm:text-lg`}>
                        {trimmedLine.replace(/\*\*/g, '')}
                    </p>
                );
                i++;
                continue;
            }

            // Bold standalone lines
            if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
                elements.push(
                    <p key={i} className="font-bold text-gray-800 mt-4 sm:mt-5 mb-2 text-base sm:text-lg">
                        {trimmedLine.replace(/\*\*/g, '')}
                    </p>
                );
                i++;
                continue;
            }

            // Blockquotes
            if (trimmedLine.startsWith('> ')) {
                elements.push(
                    <blockquote
                        key={i}
                        className="border-l-4 pl-3 sm:pl-4 py-2 sm:py-3 my-4 sm:my-6 italic text-gray-600 bg-gray-50 rounded-r-lg text-sm sm:text-base"
                        style={{ borderColor: theme.primary }}
                    >
                        {trimmedLine.replace('> ', '')}
                    </blockquote>
                );
                i++;
                continue;
            }

            // Empty lines
            if (trimmedLine === '') {
                elements.push(<div key={i} className="h-2 sm:h-3" />);
                i++;
                continue;
            }

            // Unordered list items
            if (trimmedLine.startsWith('- ')) {
                elements.push(
                    <li key={i} className="text-gray-700 leading-relaxed ml-4 sm:ml-5 list-disc mb-1.5 sm:mb-2 text-sm sm:text-base">
                        {trimmedLine.replace(/^- /, '')}
                    </li>
                );
                i++;
                continue;
            }

            // Ordered list with bold
            if (trimmedLine.match(/^\d+\.\s+\*\*/)) {
                const match = trimmedLine.match(/^\d+\.\s+\*\*(.+?)\*\*[：:]?\s*(.*)$/);
                if (match) {
                    elements.push(
                        <div key={i} className="flex items-start gap-2 mb-2 sm:mb-3 ml-1 text-sm sm:text-base">
                            <span className={`font-bold ${theme.text}`}>{match[1]}：</span>
                            <span className="text-gray-600">{match[2]}</span>
                        </div>
                    );
                    i++;
                    continue;
                }
            }

            // Regular ordered list
            if (trimmedLine.match(/^\d+\. /)) {
                elements.push(
                    <li key={i} className="text-gray-700 leading-relaxed ml-4 sm:ml-5 list-decimal mb-1.5 sm:mb-2 text-sm sm:text-base">
                        {trimmedLine.replace(/^\d+\. /, '')}
                    </li>
                );
                i++;
                continue;
            }

            // Regular paragraph - optimized line-height for reading
            elements.push(
                <p key={i} className="text-gray-700 leading-relaxed sm:leading-7 mb-2 sm:mb-3 text-sm sm:text-base">
                    {trimmedLine}
                </p>
            );
            i++;
        }

        return elements;
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={`bg-gradient-to-br ${theme.bg} rounded-xl sm:rounded-2xl w-full max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div
                        className="px-6 sm:px-8 py-5 border-b flex items-center justify-between flex-shrink-0"
                        style={{ borderColor: `${theme.primary}20` }}
                    >
                        <div>
                            <div
                                className="w-12 h-1 rounded-full mb-3"
                                style={{ backgroundColor: theme.primary }}
                            />
                            <h2 className={`text-2xl sm:text-3xl font-bold ${theme.text}`}>
                                {language === 'en' ? item.industry.en : item.industry.zh}
                            </h2>
                            <p className="text-base text-gray-500 mt-1">
                                {language === 'en' ? item.subtitle.en : item.subtitle.zh}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-white/50 rounded-full"
                            aria-label="Close modal"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Tabs - simplified labels */}
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border-b flex gap-2 overflow-x-auto flex-shrink-0 bg-white/50" style={{ borderColor: `${theme.primary}10` }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === tab.key
                                    ? `${theme.tabActive} text-white shadow-lg`
                                    : `bg-white text-gray-600 ${theme.tabHover} border border-gray-200`
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content - constrained width for better readability */}
                    <div className="flex-1 overflow-y-auto bg-white/80">
                        <div className="px-4 sm:px-8 lg:px-12 py-5 sm:py-8">
                            <motion.article
                                key={`${activeTab}-${language}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className="max-w-2xl mx-auto"
                            >
                                {renderContent(getContent())}
                            </motion.article>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
