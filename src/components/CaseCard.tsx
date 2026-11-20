'use client';

import Link from 'next/link';
import Cover from './Cover';
import { useLanguage } from '@/contexts/LanguageContext';
import type { PortfolioItem } from '@/data/portfolio-data';

export default function CaseCard({ item, index }: { item: PortfolioItem; index: number }) {
    const { l } = useLanguage();
    return (
        <Link href={`/work/${item.id}`} className="group block">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                <Cover item={item} sizes="(min-width: 1024px) 25vw, 50vw" className="transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" />
                <span className="absolute top-2 left-2 rounded bg-white/90 px-1.5 py-0.5 text-[10px] tracking-wide text-gray-600">
                    {l({ zh: '模擬提案', en: 'Spec work' })}
                </span>
            </div>
            <div className="mt-3">
                <p className="text-[11px] text-gray-400 tracking-widest">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="text-base font-medium text-gray-900 group-hover:text-teal-800">{l(item.industry)}</h3>
                <p className="text-sm text-gray-500 line-clamp-1">{l(item.subtitle)}</p>
            </div>
        </Link>
    );
}
