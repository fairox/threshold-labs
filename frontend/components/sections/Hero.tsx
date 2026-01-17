"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center px-4 md:px-12 pt-32 pb-12 bg-background text-foreground relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left decoration text */}
                <div className="hidden lg:block lg:col-span-2 pt-2">
                    <div className="text-xs font-medium leading-tight lowercase">
                        threshold<br />myth &<br />machine.
                    </div>
                </div>

                {/* Main Text */}
                <div className="col-span-1 lg:col-span-6 flex flex-col relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-[0.8] tracking-tighter uppercase break-words"
                    >
                        <div className="flex flex-col">
                            <span>DESIGN</span>
                            <span>BY</span>
                            <span>THRESHOLD</span>
                        </div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xs text-neutral-500 mt-8 max-w-[150px]"
                    >
                        applied research<br />division.
                    </motion.p>
                </div>

                {/* Red Box / Accent */}
                <div className="col-span-1 lg:col-span-4 flex justify-end lg:justify-start lg:pt-12">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-48 h-48 md:w-64 md:h-64 bg-[var(--accent)] text-[var(--accent-foreground)] p-6 relative flex flex-col justify-between cursor-pointer hover:bg-red-600 transition-colors"
                    >
                        <div className="text-right">
                            <div className="w-20 h-20 rounded-full border border-current flex items-center justify-center ml-auto">
                                <span className="text-[10px] font-bold text-center leading-tight uppercase">MYTH<br />&<br />MACHINE</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end">
                            <ArrowUpRight className="w-8 h-8" />
                            <span className="text-xs font-bold">10</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
