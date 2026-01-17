export type AssetSuit = "Urban" | "Cultural" | "Signal";

export interface ResearchAsset {
    id: string;
    title: string;
    subtitle: string;
    suit: AssetSuit;
    image: string; // Placeholder or path
    stats: {
        complexity: number; // 0-10
        resilience: number; // 0-10
        impact: number;     // 0-10
        velocity: number;   // 0-10
    };
    meta: {
        location?: string;
        year: string;
        fileRef: string;
    };
    description: string;
}

export const researchAssets: ResearchAsset[] = [
    {
        id: "REL-001",
        title: "Litema: Living Art",
        subtitle: "Cultural Documentation",
        suit: "Cultural",
        image: "/assets/litema_pattern.jpg", // Needs placeholder
        stats: {
            complexity: 8.5,
            resilience: 9.0, // Ancient tradition
            impact: 7.5,
            velocity: 2.0, // Slow evolution
        },
        meta: {
            location: "Lesotho",
            year: "2025",
            fileRef: "Litema_Research_Findings.md",
        },
        description: "A comprehensive framework for analyzing the geometric heritage of Basotho mural art, decoding it as an algorithmic language of soil and prayer.",
    },
    {
        id: "URB-082",
        title: "Sustainable Village",
        subtitle: "Ecological Prototype",
        suit: "Urban",
        image: "/assets/village_iso.jpg",
        stats: {
            complexity: 6.0,
            resilience: 9.5,
            impact: 10.0,
            velocity: 5.5,
        },
        meta: {
            location: "Highlands",
            year: "2026",
            fileRef: "A+SUSTAINABLE+ECO.pdf",
        },
        description: "A net-zero spatial strategy integrating traditional kraal typologies with modern renewable grids. Floor Area Ratio: 2.03.",
    },
    {
        id: "SIG-003",
        title: "PAB 2026",
        subtitle: "Official Invitation",
        suit: "Signal",
        image: "/assets/pab_invite.jpg",
        stats: {
            complexity: 4.0,
            resilience: 3.0,
            impact: 8.0,
            velocity: 9.0, // Event based
        },
        meta: {
            location: "Global",
            year: "2026",
            fileRef: "PAB_One_Pager.pdf",
        },
        description: "Strategic invitation protocol for the Pan-African Biennale. Testing the velocity of diplomatic design signals.",
    },
    {
        id: "BIO-099",
        title: "Algorithmic Botany",
        subtitle: "Morphogenetic Code",
        suit: "Signal",
        image: "", // Will be procedurally generated in component
        stats: {
            complexity: 9.2, // High mathematical complexity
            resilience: 9.8, // Analysis of nature's timeless code
            impact: 8.5,     // Bio-mimicry potential
            velocity: 4.5,   // Academic but accelerating
        },
        meta: {
            location: "Lab Simulation",
            year: "2026",
            fileRef: "L_SYSTEMS_V4.py",
        },
        description: "Deciphering the recursive growth signatures of organic matter. Using L-systems to generate architectural blueprints from soil logic.",
    }
];
