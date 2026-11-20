 export const Header = ({ coin  }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] border-b border-white/10 shadow-lg backdrop-blur-md">
      <div className="max-w-[1120px] mx-auto w-full px-4 py-2.5 flex items-center justify-between">
        
        {/* Left: Cricket Logo + Brand Title */}
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-[#E7FE29]/40 via-amber-400/20 to-sky-400/30 shadow-md group-hover:scale-105 transition-transform duration-200">
            <div className="bg-[#131313] rounded-xl px-2 py-1 flex items-center justify-center border border-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 180 120"
                className="w-12 h-9 sm:w-14 sm:h-10 drop-shadow"
              >
                {/* Stumps */}
                <rect x="74" y="18" width="5" height="62" rx="2" fill="#FDE68A" />
                <rect x="87" y="18" width="5" height="62" rx="2" fill="#FDE68A" />
                <rect x="100" y="18" width="5" height="62" rx="2" fill="#FDE68A" />
                {/* Bails */}
                <rect x="73" y="14" width="13" height="3" rx="1.5" fill="#F59E0B" />
                <rect x="93" y="14" width="13" height="3" rx="1.5" fill="#F59E0B" />

                {/* Cricket Bat */}
                <g transform="translate(115, 20) rotate(28)">
                  <rect x="0" y="0" width="7" height="22" rx="2" fill="#92400E" />
                  <path
                    d="M-5 22 Q0 19 12 22 L14 68 Q1 72 -7 68 Z"
                    fill="#F59E0B"
                    stroke="#D97706"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Cricket Ball */}
                <circle cx="62" cy="70" r="15" fill="#EF4444" />
                <path
                  d="M52 58 Q62 70 52 82"
                  fill="none"
                  stroke="#FCA5A5"
                  strokeWidth="1.5"
                  strokeDasharray="3 2"
                />
                <path
                  d="M72 58 Q62 70 72 82"
                  fill="none"
                  stroke="#FCA5A5"
                  strokeWidth="1.5"
                  strokeDasharray="3 2"
                />

                {/* CRICKET Badge */}
                <rect
                  x="30"
                  y="84"
                  width="120"
                  height="28"
                  rx="7"
                  fill="#14532D"
                  stroke="#86EFAC"
                  strokeWidth="1.5"
                />
                <text
                  x="90"
                  y="103"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="15"
                  fontWeight="800"
                  letterSpacing="2"
                >
                  CRICKET
                </text>
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-[#E7FE29] to-amber-300 bg-clip-text text-transparent">
              Players
            </span>
            <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold hidden sm:block">
              Dream Squad Arena
            </span>
          </div>
        </a>

        {/* Right: Gorgeous Coin Pill */}
        <div className="flex items-center gap-2.5 bg-slate-900/90 hover:bg-slate-900 border border-amber-400/40 shadow-[0_0_20px_rgba(250,204,21,0.15)] px-4 py-2 rounded-2xl transition-all">
          <span className="text-lg sm:text-xl font-extrabold text-white">
            {coin.toLocaleString()}
          </span>
          <span className="text-sm sm:text-base font-bold text-[#E7FE29] tracking-wide">
            Coin
          </span>
          <div className="relative flex items-center justify-center">
            <div className="absolute w-7 h-7 rounded-full bg-yellow-400/30 blur-sm animate-pulse" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative w-7 h-7 text-yellow-400 drop-shadow"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                fill="#fef08a"
                d="M12 6.5a1 1 0 0 1 1 1v.6c1.1.25 1.9 1.05 1.9 2.15a1 1 0 1 1-2 0c0-.35-.35-.65-.9-.65s-.9.3-.9.65c0 .4.4.65 1.25.85 1.2.3 1.85.9 1.85 2.05 0 1.15-.8 1.95-1.9 2.15v.65a1 1 0 1 1-2 0v-.65c-1.15-.2-1.95-1-1.95-2.15a1 1 0 1 1 2 0c0 .4.4.7.95.7s.95-.3.95-.7c0-.4-.35-.65-1.2-.85-1.2-.3-1.9-.9-1.9-2.05 0-1.1.8-1.9 1.9-2.15v-.6a1 1 0 0 1 1-1Z"
              />
            </svg>
          </div>
        </div>

      </div>
    </header>
  );
};