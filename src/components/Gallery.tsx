'use client';

import { useState } from 'react';
import { portfolioData, PortfolioItem } from '@/data/portfolio-data';
import GalleryItem from './GalleryItem';
import Modal from './Modal';

export default function Gallery() {
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    const handleOpenModal = (item: PortfolioItem) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Gallery Grid - RWD: 1 column on mobile, 2 on tablet, 3 on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {portfolioData.map((item, index) => (
                            <GalleryItem
                                key={item.id}
                                item={item}
                                index={index}
                                onOpenModal={handleOpenModal}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedItem && (
                <Modal item={selectedItem} onClose={handleCloseModal} />
            )}
        </>
    );
}
