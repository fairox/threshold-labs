"use client";

import { ArrowUpRight } from "lucide-react";

export function Events() {
    return (
        <section className="w-full px-4 md:px-12 pb-12 bg-background text-foreground">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="w-full md:w-1/2 lg:w-1/3 ml-auto">
                    <div className="w-full aspect-[4/3] bg-[var(--accent)] text-[var(--accent-foreground)] p-6 relative flex flex-col justify-between hover:bg-neutral-800 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-bold underline underline-offset-4 decoration-1">EVENTS</span>

                            <div className="w-32 h-32 rounded-full border border-current flex items-center justify-center -mr-2 -mt-2 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-[10px] font-bold text-center leading-tight uppercase">CHANGE<br />STARTS<br />WITHIN.</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end">
                            <ArrowUpRight className="w-12 h-12 stroke-[1]" />
                            <span className="text-xl font-bold">10</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
