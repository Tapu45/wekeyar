import React from "react";

export default function DotBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="dotGradient" cx="0.7" cy="0.2" r="1">
            <stop offset="0%" stopColor="#e63946" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#e63946" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Dots grid */}
        {Array.from({ length: 20 }).map((_, row) =>
          Array.from({ length: 30 }).map((_, col) => {
            const x = col * 20 + 10;
            const y = row * 20 + 10;
            return (
              <circle
                key={`${row}-${col}`}
                cx={x}
                cy={y}
                r={3}
                fill="url(#dotGradient)"
                opacity={0.7 - row * 0.03}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}
