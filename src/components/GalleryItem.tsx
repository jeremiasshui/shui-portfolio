'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PortfolioItem } from '@/data/portfolio-data';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface GalleryItemProps {
    item: PortfolioItem;
    index: number;
    onOpenModal: (item: PortfolioItem) => void;
}

export default function GalleryItem({ item, index, onOpenModal }: GalleryItemProps) {
    const { language } = useLanguage();
    const isMobile = useIsMobile();
    const [isColorRevealed, setIsColorRevealed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (isMobile) {
            if (!isColorRevealed) {
                setIsColorRevealed(true);
                setTimeout(() => setIsColorRevealed(false), 3000);
            } else {
                onOpenModal(item);
            }
        } else {
            onOpenModal(item);
        }
    };

    const showColor = isMobile ? isColorRevealed : isHovered;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            {/* Image Container - RWD aspect ratio */}
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] bg-gray-100">
                <motion.div
                    className="w-full h-full bg-gray-300"
                    style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    animate={{
                        filter: showColor ? 'grayscale(0%)' : 'grayscale(100%)',
                        scale: showColor ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />

                {/* Placeholder for missing images */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-4xl sm:text-5xl lg:text-6xl font-light">
                    {String(index + 1).padStart(2, '0')}
                </div>
            </div>

            {/* Text Content - RWD text sizes */}
            <div className="mt-3 sm:mt-4 text-center">
                <p className="text-[10px] sm:text-xs text-gray-400 tracking-widest mb-0.5 sm:mb-1">
                    {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-0.5 sm:mb-1">
                    {language === 'en' ? item.industry.en : item.industry.zh}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                    {language === 'en' ? item.subtitle.en : item.subtitle.zh}
                </p>
            </div>
        </motion.div>
    );
}
