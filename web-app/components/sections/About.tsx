export function About() {
    return (
        <section id="about" className="w-full px-4 md:px-12 py-12 bg-background text-foreground">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="w-full border-t border-black/20 dark:border-white/20 mb-12" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="text-xs font-bold uppercase">About</div>

                    <div className="space-y-6 text-xs md:text-sm font-medium leading-relaxed max-w-sm">
                        <p>
                            We at Rabbit Lab could not allow for the coffee production to lose its artistic elements and soul. Some world needs automatic, masterful baristas that keep the higher essence of coffee in tact.
                        </p>
                    </div>

                    <div className="space-y-6 text-xs md:text-sm font-medium leading-relaxed max-w-sm">
                        <p>
                            For this reason, we digitized the processes of professional & traditional European coffee making.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
