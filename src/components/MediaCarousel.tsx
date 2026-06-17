"use client";

import { useState } from 'react';
import Image from 'next/image';

export interface MediaItem {
    type: 'image' | 'video';
    url: string;
}

interface MediaCarouselProps {
    media: MediaItem[];
}

export const MediaCarousel = ({ media }: MediaCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    if (!media || media.length === 0) return null;

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % media.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

    const renderMedia = (isFullScreenMode: boolean) => {
    const item = media[currentIndex];
    const fitClass = isFullScreenMode ? "object-contain" : "object-cover"; 
    const colorClass = isFullScreenMode ? "" : "grayscale group-hover:grayscale-0 transition-all duration-500";

    return item.type === 'video' ? (
        <video
            src={item.url}
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full ${fitClass} ${colorClass}`}
        />
    ) : (
        <Image
            src={item.url}
            alt={`Slide ${currentIndex}`}
            fill
            className={`${fitClass} ${colorClass}`}
        />
    );
  };

    return (
        <>
            <div className="relative w-full h-64 md:h-96 border border-zinc-800 bg-zinc-950 group overflow-hidden">
                
                <div className="w-full h-full relative">
                    {renderMedia(false)}
                </div>

                <button onClick={(e) => { e.stopPropagation(); setIsExpanded(true); }}
                className="absolute bottom-4 right-4 bg-black/80 text-zinc-400 font-mono text-[10px] uppercase tracking-widest px-3 py-2 border border-white/20 hover:border-white hover:text-white hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100 z-10 rounded-none">
                [ + ] EXPAND
                </button>

                {media.length > 1 && (
                    <>
                        <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 text-white font-mono px-3 py-2 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100 z-10 rounded-none">
                        {"<"}
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 text-white font-mono px-3 py-2 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100 z-10 rounded-none">
                        {">"}
                        </button>
                    </>
                )}

                {media.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/50 px-3 py-2 border border-white/10">
                        {media.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                className={`w-3 h-3 border transition-colors rounded-none ${
                                idx === currentIndex 
                                    ? 'bg-white border-white' 
                                    : 'bg-transparent border-zinc-500 hover:border-white'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {isExpanded && (
                <div onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                className="fixed inset-0 z-[9999] bg-zinc-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12">
                    <button onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }} 
                    className="absolute top-6 right-6 z-50 bg-black text-white font-mono text-sm uppercase tracking-widest px-4 py-2 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-colors rounded-none">
                        [ X ] CLOSE
                    </button>

                    <div className="relative w-full h-full max-w-7xl max-h-[85vh] border border-zinc-800 bg-black" onClick={(e) => e.stopPropagation()}>
                        {renderMedia(true)}

                        {media.length > 1 && (
                            <>
                                <button onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 text-white font-mono px-4 py-3 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-colors z-10 rounded-none">
                                {"<"}
                                </button>
                                <button onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 text-white font-mono px-4 py-3 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-colors z-10 rounded-none">
                                {">"}
                                </button>
                            </>
                        )}
                        
                        <div className="absolute bottom-4 left-4 bg-black/80 border border-white/20 px-3 py-1 z-10 pointer-events-none">
                            <span className="font-mono text-xs text-zinc-400">
                                DATA_FEED: {currentIndex + 1} / {media.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};