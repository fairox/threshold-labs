import React from 'react';

interface LitemaTileProps {
  rotation?: 0 | 90 | 180 | 270;
  color?: string;
  className?: string;
}

/**
 * LitemaTile: A basic unit of Sesotho mural art.
 * Represents a "ploughed field" (ho lema) using geometric primitives.
 * 
 * Rules:
 * 1. 1x1 Aspect Ratio
 * 2. Diagonal symmetry
 * 3. Scalable SVG
 */
const LitemaTile: React.FC<LitemaTileProps> = ({ 
  rotation = 0, 
  color = "currentColor",
  className = ""
}) => {
  return (
    <div className={`w-full aspect-square relative ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full block"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Background */}
        <rect x="0" y="0" width="100" height="100" fill="transparent" />
        
        {/* The Furrow (Diagonal Cut) */}
        <path 
          d="M0 0 L100 100" 
          stroke={color} 
          strokeWidth="8" 
          strokeLinecap="square"
        />
        
        {/* The Seed (Circle) */}
        <circle 
          cx="30" 
          cy="70" 
          r="15" 
          fill={color} 
        />
        
        {/* Secondary Rhythm (Line) */}
        <path 
          d="M70 30 L100 0" 
          stroke={color} 
          strokeWidth="8" 
          strokeLinecap="square"
        />
         <path 
          d="M0 100 L30 70" 
          stroke={color} 
          strokeWidth="8" 
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};

export default LitemaTile;
