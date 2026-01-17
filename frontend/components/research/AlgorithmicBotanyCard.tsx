"use client";

import { TrumpCard } from "./TrumpCard";
import { ResearchAsset } from "@/lib/data/assets";

/**
 * SKILL APPLICATION:
 * 1. Truth Quantifier: Data structure and metrics defined below.
 * 2. Litema Logic: Procedural SVG generation (Recursion/Symmetry).
 * 3. Swiss Grid Architect: Strict layout and type hierarchy.
 */

// Define the asset locally or import from assets.ts
// We use a custom object here to strictly demonstrate the Truth Quantifier skill output
const ALGORITHMIC_BOTANY_DATA: ResearchAsset = {
    id: "BIO-099",
    title: "Algorithmic Botany",
    subtitle: "Morphogenetic Code",
    suit: "Signal",
    image: "", // We will inject the custom visual
    stats: {
        complexity: 9.2,
        resilience: 9.8,
        impact: 8.5,
        velocity: 4.5,
    },
    meta: {
        location: "Lab Simulation",
        year: "2026",
        fileRef: "L_SYSTEMS_V4.py",
    },
    description: "Deciphering the recursive growth signatures of organic matter. Using L-systems to generate architectural blueprints from soil logic.",
};

export function AlgorithmicBotanyCard() {
    return (
        <div className="w-full max-w-md mx-auto p-4 bg-neutral-50">
            {/* Using existing TrumpCard but wrapping it to inject custom visual */}
            <div className="relative">
                <TrumpCard asset={ALGORITHMIC_BOTANY_DATA} />

                {/* 
                    LITEMA LOGIC VISUAL INJECTION 
                    Overlaying the 'image' area with code-generated geometry.
                    In a real app, we'd pass this as a component prop, but for this demo 
                    we position it absolutely over the image slot area of the TrumpCard.
                    
                    Note: This is a bit of a hack since TrumpCard doesn't accept children for the image slot yet.
                    A better approach would be to refactor TrumpCard, but here we demonstrate the *visual* skill.
                */}
                <div className="absolute top-[80px] left-[20px] right-[20px] bottom-[110px] bg-neutral-100 dark:bg-neutral-800 pointer-events-none overflow-hidden flex items-center justify-center">
                    <LitemaBotanyPattern />
                </div>
            </div>
        </div>
    );
}

// SKILL: LITEMA LOGIC
// "Start with a square grid. Divide it diagonally. Symmetry operations."
function LitemaBotanyPattern() {
    return (
        <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] text-neutral-900 dark:text-neutral-100 opacity-80">
            {/* Base Grid - The "Soil" */}
            <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />

            {/* Recursive L-System Representation (Simplified for SVG) */}
            {/* Central Axis */}
            <line x1="50" y1="100" x2="50" y2="20" stroke="currentColor" strokeWidth="1" />

            {/* Branch Level 1 */}
            <path d="M50 80 L20 50" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M50 80 L80 50" stroke="currentColor" strokeWidth="1" fill="none" />

            {/* Branch Level 2 (Recursion/Symmetry) */}
            <path d="M20 50 L10 20" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M20 50 L30 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M80 50 L90 20" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M80 50 L70 40" stroke="currentColor" strokeWidth="0.5" fill="none" />

            {/* The "Seed" / Geometric Terminal Nodes */}
            <circle cx="50" cy="20" r="2" fill="currentColor" />
            <rect x="8" y="18" width="4" height="4" fill="currentColor" className="animate-pulse" /> // "Living"
            <rect x="88" y="18" width="4" height="4" fill="currentColor" className="animate-pulse" />
        </svg>
    )
}
