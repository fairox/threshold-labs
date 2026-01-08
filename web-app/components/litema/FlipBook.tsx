"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookPage } from "@/lib/data/book-content";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";

interface FlipBookProps {
    pages: BookPage[];
}

export function FlipBook({ pages }: FlipBookProps) {
    // Current spread index (0 = Cover, 2 = Pages 1-2, etc.)
    // We treat the book as having even spreads mostly.
    const [currentSpread, setCurrentSpread] = useState(0);
    const [direction, setDirection] = useState(0);

    // Calculate total spreads (roughly pages / 2)
    const totalSpreads = Math.ceil(pages.length / 2) + 1;

    const goNext = () => {
        if (currentSpread < totalSpreads - 1) {
            setDirection(1);
            setCurrentSpread(prev => prev + 1);
        }
    };

    const goPrev = () => {
        if (currentSpread > 0) {
            setDirection(-1);
            setCurrentSpread(prev => prev - 1);
        }
    };

    // Get pages for current spread
    // Spread 0: [null, Page 0 (Cover)]
    // Spread 1: [Page 1, Page 2]
    // Spread 2: [Page 3, Page 4]

    // Adjusted logic:
    // Index 0 (Cover): Left=Null, Right=Page[0]
    // Index 1: Left=Page[1], Right=Page[2]
    // ...

    const leftPageIndex = currentSpread === 0 ? -1 : (currentSpread * 2) - 1;
    const rightPageIndex = currentSpread === 0 ? 0 : (currentSpread * 2);

    const leftPage = leftPageIndex >= 0 ? pages[leftPageIndex] : null;
    const rightPage = rightPageIndex < pages.length ? pages[rightPageIndex] : null;

    return (
        <div className="fixed inset-0 bg-neutral-900 flex flex-col items-center justify-center overflow-hidden z-50">
            {/* Controls / Header */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center text-white z-50">
                <div className="text-xs font-mono tracking-widest opacity-50">
                    SPREAD {currentSpread + 1} / {totalSpreads}
                </div>
                <Link href="/litema" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <X className="w-6 h-6" />
                </Link>
            </div>

            {/* Book Stage */}
            <div className="relative w-full max-w-6xl aspect-[16/10] flex items-center justify-center perspective-[2000px]">

                {/* PREV BUTTON AREA */}
                <div
                    onClick={goPrev}
                    className="absolute left-0 top-0 bottom-0 w-1/4 z-40 cursor-w-resize flex items-center justify-start pl-8 group"
                >
                    <ChevronLeft className={cn("w-12 h-12 text-white/20 group-hover:text-white transition-colors", currentSpread === 0 && "hidden")} />
                </div>

                {/* NEXT BUTTON AREA */}
                <div
                    onClick={goNext}
                    className="absolute right-0 top-0 bottom-0 w-1/4 z-40 cursor-e-resize flex items-center justify-end pr-8 group"
                >
                    <ChevronRight className={cn("w-12 h-12 text-white/20 group-hover:text-white transition-colors", currentSpread >= totalSpreads - 1 && "hidden")} />
                </div>

                {/* THE BOOK */}
                <motion.div
                    className="relative flex w-[90%] h-[85%] bg-white shadow-2xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Spine Shadow */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-12 -ml-6 bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-300 z-20 blur-sm opacity-50 pointer-events-none" />

                    {/* Left Page Render */}
                    <div className="flex-1 bg-[#fdfdfd] text-neutral-900 border-r border-neutral-200 overflow-hidden relative">
                        {leftPage && <PageContent page={leftPage} side="left" />}
                        {!leftPage && currentSpread > 0 && <div className="absolute inset-0 bg-neutral-100" />} {/* Blank End/Start */}
                    </div>

                    {/* Right Page Render */}
                    <div className="flex-1 bg-[#fdfdfd] text-neutral-900 overflow-hidden relative">
                        {rightPage && <PageContent page={rightPage} side="right" />}
                    </div>

                    {/* Animation Layer (The Flipping Page) */}
                    <AnimatePresence initial={false}>
                        {/* We could add a complex 3D filp div here, but for "Rigid" feel, just updating state is often cleaner in React unless we need the visual swing. 
                            Given the complexity of 3D transforms in a single file without libraries, a quick fade/slide is safer for "Swiss" objectivity. 
                            However, let's try a simple overlay for transition. 
                        */}
                    </AnimatePresence>

                </motion.div>
            </div>
        </div>
    );
}

function PageContent({ page, side }: { page: BookPage, side: 'left' | 'right' }) {
    // 1. OPENER: Le Corbusier Grid
    if (page.type === 'opener') {
        const isLeft = side === 'left';
        if (isLeft) {
            return (
                <div className="h-full relative p-8 flex flex-col justify-between border-r border-carbon/10 bg-clay text-carbon">
                    {/* Grid Rules */}
                    <div className="absolute inset-0 pointer-events-none grid grid-cols-6 gap-4 p-8 opacity-20">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="border-r border-carbon h-full last:border-0"></div>
                        ))}
                    </div>

                    <div className="relative z-10 top-0 left-0">
                        <span className="block text-[120px] leading-[0.8] font-bold tracking-tighter font-sans text-carbon">
                            {String(page.chapterNumber).padStart(2, '0')}
                        </span>
                        <h2 className="text-4xl font-bold tracking-tight mt-4 uppercase border-t-2 border-carbon pt-4 inline-block">
                            {page.title}
                        </h2>
                    </div>

                    <div className="relative z-10 mt-auto font-mono text-xs tracking-widest uppercase">
                        {page.content?.substring(0, 100)}...
                    </div>
                </div>
            );
        } else {
            return (
                <div className="h-full w-full relative bg-clay">
                    {page.image && (
                        <img src={page.image} alt="Panorama" className="absolute inset-0 w-full h-full object-cover" />
                    )}
                    {/* Grain Overlay */}
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
                </div>
            );
        }
    }

    // 2. TECHNICAL: 4-Cell Grid
    if (page.type === 'technical') {
        return (
            <div className="h-full p-12 bg-clay text-carbon relative">
                <h3 className="text-xs font-mono uppercase tracking-widest mb-8 text-slate border-b border-slate/30 pb-2">
                    Technique Analysis // {page.title}
                </h3>
                <div className="grid grid-cols-2 grid-rows-2 h-[80%] gap-4">
                    {(page.images || [page.image, page.image, page.image, page.image]).map((img, idx) => (
                        <div key={idx} className="relative border border-carbon/10 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden group">
                            {img && <img src={img} className="w-full h-full object-cover" alt={`Step ${idx + 1}`} />}
                            <div className="absolute bottom-0 left-0 right-0 p-2 bg-clay/90 text-[8px] font-mono border-t border-carbon/10 translate-y-full group-hover:translate-y-0 transition-transform">
                                STEP 0{idx + 1} // MIXING
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 text-xs font-serif italic text-slate leading-relaxed">
                    {page.content}
                </div>
            </div>
        );
    }

    // 3. TYPOGRAPHIC: Weight Spectrum
    if (page.type === 'typographic') {
        const patterns = page.content ? page.content.split('\n').filter(l => l.length > 0) : ['Marabaraba', 'Litema', 'Khomo', 'Pelo', 'Hlolo'];
        const weights = ['font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black'];

        return (
            <div className="h-full p-16 bg-clay flex flex-col justify-center items-start space-y-2 overflow-hidden">
                {patterns.slice(0, 7).map((text, i) => (
                    <div key={i} className={`text-6xl ${weights[Math.min(i, 6)]} tracking-tight text-carbon uppercase transform hover:translate-x-4 transition-transform duration-300 cursor-default`}>
                        {text.replace(/^- /, '')}
                    </div>
                ))}
                <div className="mt-auto pt-12 border-t border-carbon/20 w-full">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ochre">Sacred Geometry // Nomenclature</p>
                </div>
            </div>
        );
    }

    // 4. DIVIDER: Left (Ochre) / Right (Clay)
    if (page.type === 'divider') {
        if (side === 'left') {
            return (
                <div className="h-full bg-ochre flex items-center justify-center relative overflow-hidden">
                    {/* Litema Triangle Motif - SVG */}
                    <svg className="w-64 h-64 text-clay" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 15 L85 85 L15 85 Z" />
                        <path d="M50 35 L70 75 L30 75 Z" fill="#B2422E" /> {/* Inner negative space */}
                    </svg>
                    <div className="absolute bottom-12 text-clay font-mono text-xs tracking-[0.3em] uppercase opacity-80">
                        Figure {page.chapterNumber}.0
                    </div>
                </div>
            );
        } else {
            return (
                <div className="h-full bg-clay flex items-center justify-center p-16">
                    <blockquote className="font-serif text-3xl md:text-4xl text-carbon leading-snug text-center italic">
                        "{page.content}"
                    </blockquote>
                    <div className="absolute bottom-12 text-slate font-mono text-[10px] tracking-widest">
                        {page.title}
                    </div>
                </div>
            )
        }
    }

    // COVER
    if (page.type === 'cover') {
        return (
            <div className="h-full flex flex-col justify-center items-center p-12 bg-carbon text-clay text-center relative overflow-hidden">
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-white/2 mix-blend-overlay pointer-events-none" />

                {page.image && (
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img src={page.image} alt={page.title} className="w-full h-full object-cover grayscale contrast-125" />
                    </div>
                )}

                <div className="relative z-10 w-full h-full border-[1px] border-clay/20 flex flex-col items-center justify-center p-12">
                    <p className="text-sm font-mono tracking-[0.4em] uppercase text-ochre mb-8">Threshold Labs Presents</p>
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-clay mix-blend-difference">{page.title}</h1>
                    <div className="w-16 h-16 border-2 border-ochre rotate-45 my-8"></div>
                    <p className="text-xl font-serif tracking-wide italic text-clay/80">{page.content}</p>
                </div>
            </div>
        )
    }

    if (page.type === 'chapter-title') {
        return (
            <div className="h-full flex flex-col justify-center p-12 md:p-16 relative overflow-hidden bg-ochre text-clay group">
                {page.image && (
                    <div className="absolute inset-0 z-0 opacity-20 hover:opacity-30 transition-opacity duration-700">
                        <img src={page.image} alt="Chapter" className="w-full h-full object-cover grayscale" />
                    </div>
                )}
                <div className="relative z-10">
                    <span className="text-[200px] leading-none font-bold text-black/10 absolute -top-10 -left-10 select-none">
                        {page.chapterNumber}
                    </span>
                    <h2 className="text-6xl font-bold tracking-tighter mb-8 max-w-lg uppercase">{page.title}</h2>
                    <p className="text-lg font-serif font-light text-clay/80 max-w-md ml-auto border-l border-clay/30 pl-6">{page.content}</p>
                </div>
            </div>
        )
    }

    // STANDARD TEXT
    return (
        <div className="h-full p-8 md:p-16 flex flex-col bg-clay text-carbon overflow-y-auto scrollbar-hide">
            {/* Grid Lines Subtle */}
            <div className="absolute top-0 bottom-0 left-12 w-px bg-slate/10 h-full pointer-events-none" />

            {page.title && (
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-mono text-ochre">0{page.chapterNumber || '0'}</span>
                    <h3 className="text-xs font-bold font-sans uppercase tracking-[0.2em] text-slate pb-2 border-b border-slate/20 flex-grow">
                        {page.title}
                    </h3>
                </div>
            )}

            {page.image && (
                <div className="mb-8 w-full aspect-video relative overflow-hidden flex-shrink-0 border border-slate/10">
                    <img src={page.image} alt={page.title || 'Illustration'} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    {page.caption && <p className="absolute bottom-2 right-2 text-[8px] font-mono bg-clay/90 px-2 py-1 text-slate">{page.caption}</p>}
                </div>
            )}

            <div className="prose prose-neutral prose-lg leading-relaxed whitespace-pre-line flex-shrink-0 font-serif text-carbon/90 pl-6">
                {page.content}
            </div>

            <div className="mt-auto pt-16 flex justify-between items-end border-t border-slate/10">
                <div className="text-[9px] font-mono text-slate uppercase tracking-widest">
                    Mokhethi Rampeta // 2025
                </div>
                <div className="w-4 h-4 bg-ochre"></div>
            </div>
        </div>
    )
}
