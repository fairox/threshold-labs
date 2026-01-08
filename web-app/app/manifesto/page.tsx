"use client";

import { Header } from "@/components/layout/Header";

export default function ManifestoPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
            <Header />

            <div className="pt-32 px-4 md:px-12 pb-24 max-w-[1000px] mx-auto">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-12 text-zinc-800">
                    Mani<br />festo
                </h1>

                <article className="space-y-16 text-lg md:text-2xl leading-normal font-medium max-w-2xl">
                    <section>
                        <h2 className="text-red-500 text-xs font-mono uppercase mb-4 tracking-widest">01. The Delta</h2>
                        <p>
                            We stand at the intersection of ancestral logic and computational future. To "Design by Threshold" is to acknowledge that the smartest algorithms were written in the soil centuries ago. Litema is not just pattern; it is code.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-red-500 text-xs font-mono uppercase mb-4 tracking-widest">02. Interrogation</h2>
                        <p>
                            We do not simply produce. We interrogate. Every render is a question: "Does this advance the human condition, or merely decorate it?" If the answer is decoration, delete the file.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-red-500 text-xs font-mono uppercase mb-4 tracking-widest">03. Gamified Truth</h2>
                        <p>
                            Research is not a static PDF. It is a playable dynamic. By reducing complex architectural theory to 'Trump Card' metrics, we force ourselves to be honest about Impact, Resilience, and Velocity. If you cannot quantify your intent, you do not have one.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-red-500 text-xs font-mono uppercase mb-4 tracking-widest">04. Signal Processing</h2>
                        <p>
                            From the digital voids of the web to the physical plains of Lesotho, the Lab exists where the connection is made. We are not a studio. We are a signal processor.
                        </p>
                    </section>

                    <div className="pt-12 text-4xl md:text-6xl font-black uppercase tracking-tight text-white/90">
                        Change starts within.
                    </div>
                </article>
            </div>
        </main>
    )
}
