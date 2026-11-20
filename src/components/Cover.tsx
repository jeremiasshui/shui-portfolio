'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import type { PortfolioItem } from '@/data/portfolio-data';
import { caseMeta } from '@/data/case-meta';

/** 有圖用圖；沒有圖的案例用產業色做文字封面 */
export default function Cover({ item, sizes, priority = false, className = '' }: { item: PortfolioItem; sizes: string; priority?: boolean; className?: string }) {
    const { l } = useLanguage();
    if (item.image) {
        return <Image src={item.image} alt={l(item.subtitle)} fill priority={priority} sizes={sizes} className={`object-cover ${className}`} />;
    }
    const accent = caseMeta[item.id]?.accent ?? '#0F766E';
    return (
        <div
            role="img"
            aria-label={l(item.subtitle)}
            className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-5 ${className}`}
            style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accent}CC 55%, #111827 100%)` }}
        >
            <span className="text-white/70 text-[11px] tracking-[0.2em]">{l(item.industry)}</span>
            <span className="text-white font-bold text-base sm:text-lg leading-snug line-clamp-2">{l(item.subtitle)}</span>
        </div>
    );
}
