import React from 'react';

interface LitemaGridProps {
    children: React.ReactNode;
}

/**
 * LitemaGrid: A Swiss Grid container for Litema tiles.
 * Enforces the "Grid over Flex" philosophy.
 * 
 * grid-cols-4 (mobile) -> grid-cols-12 (desktop)
 */
export default function LitemaGrid({ children }: LitemaGridProps) {
    return (
        <div className="w-full border-x border-neutral-900 bg-neutral-50 grid grid-cols-4 md:grid-cols-12 auto-rows-fr gap-px p-px">
            {/* The 'gap-px' and 'bg-neutral-50' with parent background creates the grid lines if parent is dark, 
            but here we rely on the tiles themselves or border logic. 
            For a strict grid visual, we might need borders on children or gap hacking. 
            Design System says: "Prioritize Structure".
         */}
            {children}
        </div>
    );
}
