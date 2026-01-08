"use client";

import { Header } from "@/components/layout/Header";
import { TrumpCard } from "@/components/research/TrumpCard";
import { researchAssets } from "@/lib/data/assets";

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-foreground">
            <Header />

            <div className="pt-32 px-4 md:px-12 pb-12 max-w-[1400px] mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                        Research<br />Protocols
                    </h1>
                    <p className="max-w-md text-sm text-neutral-500">
                        Gamified index of active lab assets. Hover cards to reveal intelligence notes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {researchAssets.map((asset) => (
                        <TrumpCard key={asset.id} asset={asset} />
                    ))}

                    {/* Placeholder for "Add New" or Coming Soon */}
                    <div className="w-full aspect-[2/3] border-2 border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 text-xs font-mono uppercase tracking-widest">
                        [Incoming Signals]
                    </div>
                </div>
            </div>
        </main>
    )
}
