
import { SwissGrid, SwissColumn } from "@/components/litema/SwissGrid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LitemaPage() {
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-amber-500/30">
            <div className="pt-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                {/* SECTION 1: HERO / COVER */}
                <section className="pt-32 pb-24 md:pt-48 md:pb-32 border-b border-neutral-300">
                    <SwissGrid>
                        <SwissColumn span="col-span-4 md:col-span-8">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85]"
                            >
                                LITEMA<br />
                                <span className="text-neutral-400">THE LIVING</span><br />
                                ART.
                            </motion.h1>
                        </SwissColumn>

                        <SwissColumn span="col-span-4 md:col-span-3 md:col-start-10 flex flex-col justify-end">
                            <div className="mt-8 md:mt-0 pt-4 border-t border-black">
                                <p className="text-xs font-mono uppercase tracking-widest mb-1">Vol. 01</p>
                                <p className="text-sm font-medium">Coffee Table Book Concept</p>
                                <p className="text-xs text-neutral-500 mt-2">Format: 11" x 8.5"</p>
                            </div>
                        </SwissColumn>
                    </SwissGrid>
                </section>

                {/* SECTION 2: INTRODUCTION (Asymmetric) */}
                <section className="py-24">
                    <SwissGrid>
                        <SwissColumn span="col-span-4 md:col-span-3">
                            <span className="block w-4 h-4 bg-black mb-4"></span>
                            <h2 className="text-xs font-mono uppercase tracking-widest">The Language of Earth</h2>
                        </SwissColumn>

                        <SwissColumn span="col-span-4 md:col-span-6 md:col-start-5">
                            <p className="text-2xl md:text-3xl font-medium leading-tight mb-12">
                                "We do not decorate walls. We inscribe prayers."
                            </p>
                            <div className="columns-1 md:columns-2 gap-8 text-sm md:text-base leading-relaxed text-neutral-600">
                                <p className="mb-6 break-inside-avoid">
                                    Litema is a form of Sesotho mural art composed of decorative geometric patterns.
                                    Traditionally created by women, these designs are ephemeral, washed away by the rains,
                                    symbolizing the cycle of life.
                                </p>
                                <p className="break-inside-avoid">
                                    This book captures the tension between the temporary nature of the medium and the
                                    timelessness of the geometry. It is an archive of the soil.
                                </p>
                            </div>
                        </SwissColumn>
                    </SwissGrid>
                </section>

                {/* SECTION 3: VISUAL GRID (Placeholder Images) */}
                <section className="py-12 bg-white">
                    <SwissGrid className="gap-y-8">
                        <SwissColumn span="col-span-4 md:col-span-4">
                            <div className="aspect-square bg-neutral-200 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors" />
                                <span className="absolute bottom-2 left-3 text-[10px] font-mono">FIG 1.1 // PATTERN</span>
                            </div>
                        </SwissColumn>
                        <SwissColumn span="col-span-4 md:col-span-4">
                            <div className="aspect-square bg-neutral-800 text-white p-6 flex items-center justify-center">
                                <p className="text-center font-mono text-xs uppercase tracking-widest">
                                    The Geometry<br />of Soil
                                </p>
                            </div>
                        </SwissColumn>
                        <SwissColumn span="col-span-4 md:col-span-4">
                            <div className="aspect-square bg-neutral-200 relative">
                                <span className="absolute bottom-2 left-3 text-[10px] font-mono">FIG 1.2 // TEXTURE</span>
                            </div>
                        </SwissColumn>
                    </SwissGrid>
                </section>

                {/* SECTION 4: SPECS FOOTER & ENTER */}
                <section className="py-24 border-t border-neutral-200">
                    <SwissGrid>
                        <SwissColumn span="col-span-4 md:col-span-8 mb-24">
                            <h3 className="text-4xl font-bold mb-8">BOOK SPECS</h3>
                            <dl className="grid grid-cols-2 gap-8 font-mono text-xs uppercase">
                                <div>
                                    <dt className="text-neutral-400">Binding</dt>
                                    <dd>High-quality Hardcover</dd>
                                </div>
                                <div>
                                    <dt className="text-neutral-400">Paper</dt>
                                    <dd>Matte Art 150gsm</dd>
                                </div>
                                <div>
                                    <dt className="text-neutral-400">Typeface</dt>
                                    <dd>Helvetica Now / Geist</dd>
                                </div>
                                <div>
                                    <dt className="text-neutral-400">Pages</dt>
                                    <dd>100</dd>
                                </div>
                            </dl>
                        </SwissColumn>

                        <SwissColumn span="col-span-full">
                            <Link to="/litema/read" className="group block">
                                <div className="border-t-[10px] border-black pt-4 flex justify-between items-baseline">
                                    <span className="text-[10vw] font-bold leading-none tracking-tighter group-hover:text-red-600 transition-colors">
                                        ENTER
                                    </span>
                                    <span className="hidden md:inline-block font-mono text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                        Open Digital Archive &rarr;
                                    </span>
                                </div>
                            </Link>
                        </SwissColumn>
                    </SwissGrid>
                </section>

            </div>
        </main>
    );
}
