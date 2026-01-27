import React from 'react';
import LitemaGrid from '../LitemaGrid';
import LitemaTile from '../LitemaTile';

// --- Theme Components ---

const BedrockVisual = () => (
    <div className="opacity-80">
        <LitemaGrid>
            {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="aspect-square bg-transparent border border-neutral-700">
                    <LitemaTile rotation={0} color="#525252" />
                </div>
            ))}
        </LitemaGrid>
    </div>
);

const HistoryVisual = () => (
    <LitemaGrid>
        {Array.from({ length: 16 }).map((_, i) => {
            const col = i % 4;
            const rotation = (col % 2 === 0) ? 0 : 90;
            return (
                <div key={i} className="aspect-square bg-red-900 border border-red-950">
                    <LitemaTile rotation={rotation as any} color="#feaaca" />
                </div>
            );
        })}
    </LitemaGrid>
);

const EngineVisual = () => (
    <div className="p-4 bg-red-50 border border-red-200 text-center">
        <LitemaGrid>
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="aspect-square bg-white border border-red-100">
                    <LitemaTile rotation={(i * 90) as any} color="#dc2626" />
                </div>
            ))}
        </LitemaGrid>
        <p className="mt-4 font-mono text-xs text-red-600">
            <a href="/litema" className="underline hover:text-red-800">Launch Litema Engine →</a>
        </p>
    </div>
);

const ProcessVisual = () => (
    <LitemaGrid>
        {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="aspect-square bg-orange-100 border border-orange-200">
                <LitemaTile rotation={(Math.floor(Math.random() * 4) * 90) as any} color="#9a3412" />
            </div>
        ))}
    </LitemaGrid>
);

const AdaptationVisual = () => (
    <LitemaGrid>
        {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="aspect-square bg-neutral-100 border border-neutral-300">
                <LitemaTile
                    rotation={90}
                    color={i % 2 === 0 ? "#b91c1c" : "#2563eb"}
                />
            </div>
        ))}
    </LitemaGrid>
);

const FutureVisual = () => (
    <LitemaGrid>
        {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="aspect-square bg-black border border-green-900">
                <LitemaTile rotation={270} color="#22c55e" />
            </div>
        ))}
    </LitemaGrid>
);

// --- Registry ---

export const ThemeVisuals: Record<string, React.FC> = {
    bedrock: BedrockVisual,
    history: HistoryVisual,
    engine: EngineVisual,
    process: ProcessVisual,
    adaptation: AdaptationVisual,
    future: FutureVisual,
};

export const FallbackVisual = () => (
    <div className="aspect-square bg-neutral-200 flex items-center justify-center">
        <span className="font-mono text-xs">Visuals Loading...</span>
    </div>
);
