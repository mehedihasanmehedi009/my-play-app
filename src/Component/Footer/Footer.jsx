 

 
import { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#131313] to-[#090d16] text-white border-t border-white/10">
      {/* Decorative Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#E7FE29]/15 blur-3xl" />

      {/* Center Cricket Logo Badge Floating Over Top */}
      <div className="max-w-[1120px] mx-auto px-4 pt-12 pb-10 relative z-10">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-gradient-to-tr from-[#E7FE29]/40 via-amber-400/20 to-sky-400/30 shadow-lg mb-3">
            <div className="bg-[#131313] rounded-xl px-4 py-2 border border-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 180 120"
                className="w-16 h-12 drop-shadow"
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
          <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-white via-[#E7FE29] to-amber-300 bg-clip-text text-transparent">
            Players Dream Squad
          </span>
        </div>

        {/* 3-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E7FE29]" />
              About Us
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We are a passionate cricket squad platform dedicated to building the ultimate fantasy XI for our fans with smart credit strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-[#E7FE29] transition-colors">
                  • Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E7FE29] transition-colors">
                  • Available Players
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E7FE29] transition-colors">
                  • Selected Squad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E7FE29] transition-colors">
                  • Claim Free Credit
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Subscribe
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to our newsletter for the latest player updates and bonus credits.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex items-center bg-white/5 border border-white/15 rounded-xl overflow-hidden focus-within:border-[#E7FE29] transition-colors"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2.5 text-sm font-bold text-[#131313] bg-gradient-to-r from-amber-300 via-[#E7FE29] to-pink-400 hover:opacity-95 transition-opacity cursor-pointer shrink-0"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-[#E7FE29] mt-2 font-medium">
                ✓ Thanks for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-400">
          <p>©2026 Players Dream Squad. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};