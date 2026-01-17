export function About() {
    return (
        <section id="about" className="w-full px-4 md:px-12 py-12 bg-background text-foreground">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="w-full border-t border-black/20 dark:border-white/20 mb-12" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="text-xs font-bold uppercase">About</div>

                    <div className="space-y-6 text-xs md:text-sm font-medium leading-relaxed max-w-sm">
                        <p>
                            We operate within a 3-layer architecture designed to turn probabilistic data into deterministic studio intelligence. We do not simply produce; we interrogate.
                        </p>
                    </div>

                    <div className="space-y-6 text-xs md:text-sm font-medium leading-relaxed max-w-sm">
                        <p>
                            From Signal Intelligence to Material Forensics, our work bridges the gap between digital voids and physical reality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
