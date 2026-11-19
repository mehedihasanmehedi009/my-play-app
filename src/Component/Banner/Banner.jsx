 import React from 'react';

export const Banner = ({ handleClaimCredit }) => {
  return (
    <div className="max-w-[1120px] mx-auto px-4 mt-6">
      <div className="relative overflow-hidden rounded-3xl bg-[#131313] text-white py-16 px-6 flex flex-col items-center justify-center text-center shadow-xl">
        
        {/* Top-Right Soft Warm/Pinkish Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-rose-300/35 via-amber-200/20 to-transparent blur-3xl" />

        {/* Bottom-Left Soft Blue/Indigo Glow */}
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400/35 via-indigo-400/20 to-transparent blur-3xl" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          
          {/* Built-in Cricket Logo (Bat, Ball & Stumps) */}
          <div className="mb-6 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 120"
              className="w-40 md:w-48 h-auto drop-shadow-lg"
            >
              {/* Stumps */}
              <rect x="74" y="20" width="5" height="62" rx="2" fill="#FDE68A" />
              <rect x="87" y="20" width="5" height="62" rx="2" fill="#FDE68A" />
              <rect x="100" y="20" width="5" height="62" rx="2" fill="#FDE68A" />
              {/* Bails */}
              <rect x="73" y="16" width="13" height="3" rx="1.5" fill="#F59E0B" />
              <rect x="93" y="16" width="13" height="3" rx="1.5" fill="#F59E0B" />

              {/* Cricket Bat (Tilted Right) */}
              <g transform="translate(115, 22) rotate(28)">
                <rect x="0" y="0" width="7" height="22" rx="2" fill="#92400E" />
                <path
                  d="M-5 22 Q0 19 12 22 L14 68 Q1 72 -7 68 Z"
                  fill="#F59E0B"
                  stroke="#D97706"
                  strokeWidth="1.5"
                />
              </g>

              {/* Cricket Ball */}
              <circle cx="62" cy="72" r="15" fill="#EF4444" />
              <path
                d="M52 60 Q62 72 52 84"
                fill="none"
                stroke="#FCA5A5"
                strokeWidth="1.5"
                strokeDasharray="3 2"
              />
              <path
                d="M72 60 Q62 72 72 84"
                fill="none"
                stroke="#FCA5A5"
                strokeWidth="1.5"
                strokeDasharray="3 2"
              />

              {/* CRICKET Badge */}
              <rect
                x="35"
                y="86"
                width="110"
                height="26"
                rx="6"
                fill="#14532D"
                stroke="#86EFAC"
                strokeWidth="1.5"
              />
              <text
                x="90"
                y="104"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="14"
                fontWeight="800"
                letterSpacing="2"
              >
                CRICKET
              </text>
            </svg>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold tracking-tight text-white mb-4">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300/80 text-base sm:text-lg md:text-xl font-medium mb-7">
            Beyond Boundaries Beyond Limits
          </p>

          {/* Double-Border Neon Yellow Button */}
          <div className="p-1.5 rounded-2xl border border-[#E7FE29]">
            <button
              onClick={handleClaimCredit}
              className="bg-[#E7FE29] hover:bg-[#d8ef1a] active:scale-95 transition-all text-[#131313] font-bold text-base px-6 py-3 rounded-xl cursor-pointer shadow-md"
            >
              Claim Free Credit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};