import React, { useState } from 'react';
import LitemaGrid from '../components/litema/LitemaGrid';
import LitemaTile from '../components/litema/LitemaTile';
import { MainLayout } from '../components/layout/MainLayout';

const Litema: React.FC = () => {
    // Determine symmetries for a visually interesting pattern
    // In a real "Engine", this would be an algorithm. 
    // Here we manually curate a "Field" pattern.

    const [color, setColor] = useState("#b91c1c"); // red-700 (Letsoku/Ochre)

    // Generate 48 tiles (4x12 grid area roughly)
    const tiles = Array.from({ length: 48 }, (_, i) => {
        // Simple algorithmic pattern: vary rotation based on position
        const row = Math.floor(i / 12);
        const col = i % 12;

        // Example: Checkerboard symmetry
        const isEve = (row + col) % 2 === 0;
        const rotation = isEve ? 0 : 90;

        return { id: i, rotation: rotation as 0 | 90 | 180 | 270 };
    });

    return (
        <MainLayout>
            <div className="min-h-screen bg-neutral-100 p-4 md:p-12 font-sans">

                {/* Header Section (Swiss Typography) */}
                <header className="mb-12 max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase text-neutral-900 mb-6">
                        Litema
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 font-medium max-w-2xl leading-tight">
                        The Living Art of the Basotho. <br />
                        Ancestral Logic meeting Computational Futures.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button
                            onClick={() => setColor("#b91c1c")}
                            className={`w-8 h-8 rounded-full bg-red-700 border-2 ${color === "#b91c1c" ? "border-neutral-900" : "border-transparent"}`}
                            aria-label="Ochre"
                        />
                        <button
                            onClick={() => setColor("#171717")}
                            className={`w-8 h-8 rounded-full bg-neutral-900 border-2 ${color === "#171717" ? "border-black" : "border-transparent"}`}
                            aria-label="Black Earth" // Ntsu
                        />
                        <button
                            onClick={() => setColor("#ea580c")}
                            className={`w-8 h-8 rounded-full bg-orange-600 border-2 ${color === "#ea580c" ? "border-neutral-900" : "border-transparent"}`}
                            aria-label="Clay"
                        />
                    </div>
                </header>

                {/* The Engine (Grid) */}
                <section className="border-t border-neutral-900 pt-12">
                    <h2 className="font-mono text-xs uppercase mb-4 tracking-widest text-neutral-500">System: 1x1 Seed / Diagonal Symmetry</h2>
                    <LitemaGrid>
                        {tiles.map((tile) => (
                            <div key={tile.id} className="border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors">
                                <LitemaTile rotation={tile.rotation} color={color} />
                            </div>
                        ))}
                    </LitemaGrid>
                </section>

                {/* Footer / Context */}
                <footer className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-neutral-300 pt-12">
                    <div>
                        <h3 className="font-bold uppercase mb-4">Sacred Geometry</h3>
                        <p className="text-neutral-600">
                            "The geometric nature of Litema is not accidental but reflects fundamental
                            Basotho understandings about the structure of reality."
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold uppercase mb-4">Algorithm</h3>
                        <p className="font-mono text-sm text-neutral-600">
                            SEED: 1x1 square<br />
                            OPERATION: Rotation (90deg)<br />
                            GRID: 12-col Swiss Layout
                        </p>
                    </div>
                </footer>

            </div>
        </MainLayout>
    );
};

export default Litema;
