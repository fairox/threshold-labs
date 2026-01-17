"use client";

import { motion } from "framer-motion";
import { ResearchAsset } from "@/lib/data/assets";

interface TrumpCardProps {
    asset: ResearchAsset;
}

export function TrumpCard({ asset }: TrumpCardProps) {
    return (
        <div className="group relative w-full aspect-[2/3] perspective-1000">
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500 will-change-transform hover:[transform:rotateY(180deg)]"
            >
                {/* FRONT */}
                <div className="absolute inset-0 w-full h-full bg-white dark:bg-neutral-900 border-2 border-black dark:border-white rounded-xl overflow-hidden backface-hidden flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b border-black dark:border-white flex justify-between items-start">
                        <div>
                            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{asset.suit}</div>
                            <h3 className="text-xl font-bold uppercase leading-none">{asset.title}</h3>
                        </div>
                        <div className="font-mono text-xs font-bold border border-black dark:border-white px-1">
                            {asset.id}
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="flex-grow bg-neutral-100 dark:bg-neutral-800 relative p-4">
                        {/* Abstract placeholder visual if no image */}
                        <div className="w-full h-full border border-dashed border-neutral-400 flex items-center justify-center">
                            <span className="text-[10px] font-mono text-neutral-400">IMG: {asset.meta.fileRef}</span>
                        </div>
                    </div>

                    {/* Stats Footer */}
                    <div className="p-4 border-t border-black dark:border-white space-y-2">
                        <StatBar label="Complexity" value={asset.stats.complexity} color="bg-blue-500" />
                        <StatBar label="Resilience" value={asset.stats.resilience} color="bg-green-500" />
                        <StatBar label="Impact" value={asset.stats.impact} color="bg-red-500" />
                        <StatBar label="Velocity" value={asset.stats.velocity} color="bg-yellow-500" />
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 w-full h-full bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white rounded-xl overflow-hidden backface-hidden [transform:rotateY(180deg)] p-6 flex flex-col justify-between">
                    <div>
                        <div className="text-xs font-mono mb-4 text-neutral-400 dark:text-neutral-600">
                            {asset.meta.location} // {asset.meta.year}
                        </div>
                        <h4 className="text-lg font-bold uppercase mb-2">{asset.subtitle}</h4>
                        <p className="text-xs leading-relaxed font-medium opacity-90">
                            {asset.description}
                        </p>
                    </div>

                    <div className="text-[10px] font-mono border-t border-neutral-700 dark:border-neutral-300 pt-2">
                        THRESHOLD LAB ARCHIVES <br />
                        REF: {asset.meta.fileRef}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function StatBar({ label, value, color }: { label: string, value: number, color: string }) {
    return (
        <div className="flex items-center gap-2">
            <div className="w-16 text-[9px] font-bold uppercase shrink-0">{label}</div>
            <div className="flex-grow h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <div
                    className={`h-full ${color}`}
                    style={{ width: `${(value / 10) * 100}%` }}
                />
            </div>
            <div className="w-4 text-[9px] font-mono text-right">{value}</div>
        </div>
    )
}
