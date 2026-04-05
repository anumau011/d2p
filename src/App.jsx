import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Snowflake({ style }) {
  return <div className="absolute -top-2.5 bg-white rounded-full animate-snowfall blur-[0.5px]" style={style} />;
}

function Snowfall() {
  const snowflakes = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 8 + 6}s`,
      animationDelay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.7 + 0.3,
      size: Math.random() * 5 + 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {snowflakes.map((flake) => (
        <Snowflake
          key={flake.id}
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            opacity: flake.opacity,
            width: flake.size,
            height: flake.size,
          }}
        />
      ))}
    </div>
  );
}

// export function Home() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#06060e] text-[#e8e8f0] font-[Inter,-apple-system,BlinkMacSystemFont,sans-serif] flex flex-col items-center justify-center relative overflow-hidden">
//       <Snowfall />

//       {/* Ambient glow orbs */}
//       <div className="absolute rounded-full blur-[120px] pointer-events-none z-0 w-[500px] h-[500px] bg-indigo-500/[0.12] -top-[10%] -left-[10%] animate-float-orb-1" />
//       <div className="absolute rounded-full blur-[120px] pointer-events-none z-0 w-[400px] h-[400px] bg-purple-500/10 -bottom-[5%] -right-[8%] animate-float-orb-2" />
//       <div className="absolute rounded-full blur-[120px] pointer-events-none z-0 w-[300px] h-[300px] bg-blue-500/[0.08] top-[40%] right-[20%] animate-float-orb-3" />

//       {/* Content */}
//       <div className={`relative z-[2] text-center px-6 py-10 max-w-[700px] w-full transition-all duration-1000 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
//         {/* Logo */}
//         <div className="flex items-center justify-center gap-3 mb-10 animate-fade-slide-down [animation-delay:0.2s]">
//           <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-extrabold text-sm -tracking-tight shadow-[0_4px_24px_rgba(99,102,241,0.4)]">
//             <span>D2P</span>
//           </div>
//           <div className="font-bold text-xl -tracking-tight text-white">Drop2Print</div>
//         </div>

//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/[0.12] text-indigo-300 border border-indigo-500/25 mb-8 animate-fade-slide-down [animation-delay:0.4s]">
//           <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse-dot" />
//           We&apos;re Building Something Amazing
//         </div>

//         {/* Main heading with animated text */}
//         <h1 className="text-[clamp(36px,8vw,56px)] font-extrabold leading-[1.05] -tracking-wider mb-5 overflow-hidden">
//           <span className="block text-white animate-slide-in-left [animation-delay:0.5s]">Coming</span>
//           <span className="block animate-slide-in-right [animation-delay:0.7s]">
//             <span className="bg-gradient-to-br from-indigo-500 via-purple-400 to-fuchsia-400 bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-shift">Soon</span>
//           </span>
//         </h1>

//         {/* Subtitle */}
//         <p className="text-base leading-relaxed text-gray-500 max-w-[480px] mx-auto mb-9 animate-fade-slide-down [animation-delay:0.9s]">
//           We&apos;re crafting a seamless document printing experience.
//           <br />
//           Upload, print, and pick up — all from your phone.
//         </p>

//         {/* Animated divider */}
//         <div className="flex items-center gap-4 justify-center mb-9 animate-fade-slide-down [animation-delay:1s]">
//           <div className="w-15 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
//           <div className="text-indigo-500 animate-pulse-icon">
//             <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//           </div>
//           <div className="w-15 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
//         </div>

//         {/* Feature pills */}
//         <div className="flex flex-wrap justify-center gap-2.5 mb-10 animate-fade-slide-down [animation-delay:1.1s] max-sm:flex-col max-sm:items-center">
//           <div className="flex items-center gap-2 px-4.5 py-2.5 rounded-full text-[13px] font-semibold text-indigo-300 bg-indigo-500/[0.08] border border-indigo-500/20 transition-all duration-300 hover:bg-indigo-500/15 hover:border-indigo-500/40 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]">
//             <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//             </svg>
//             Upload Documents
//           </div>
//           <div className="flex items-center gap-2 px-4.5 py-2.5 rounded-full text-[13px] font-semibold text-indigo-300 bg-indigo-500/[0.08] border border-indigo-500/20 transition-all duration-300 hover:bg-indigo-500/15 hover:border-indigo-500/40 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]">
//             <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" />
//             </svg>
//             Instant Print
//           </div>
//           <div className="flex items-center gap-2 px-4.5 py-2.5 rounded-full text-[13px] font-semibold text-indigo-300 bg-indigo-500/[0.08] border border-indigo-500/20 transition-all duration-300 hover:bg-indigo-500/15 hover:border-indigo-500/40 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]">
//             <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             Nearby Pickup
//           </div>
//         </div>

//         {/* CTA / Links + Footer */}
//         <div className="flex items-center justify-center gap-3.5 flex-wrap animate-fade-slide-down [animation-delay:1.3s] max-sm:flex-col">
//           <a href="https://play.google.com/store/apps/details?id=com.drop2print.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 py-2.5 pr-6 pl-4.5 rounded-[14px] bg-black border-[1.5px] border-white/20 text-white no-underline cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a] hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] max-sm:w-full max-sm:justify-center">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.697-2.302 2.697-2.302zM5.864 3.469L16.8 9.802 14.5 12.104 5.864 3.469z"/>
//             </svg>
//             <div className="flex flex-col text-left leading-none">
//               <span className="text-[9px] font-medium tracking-wider uppercase opacity-80">GET IT ON</span>
//               <span className="text-[17px] font-bold -tracking-tight mt-0.5">Google Play</span>
//             </div>
//           </a>
//           <Link to="/privacy" className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-[14px] bg-white/5 border border-white/10 text-gray-400 font-semibold text-sm no-underline cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white hover:-translate-y-0.5 max-sm:w-full max-sm:justify-center">
//             Privacy Policy
//             <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <polyline points="9 18 15 12 9 6" />
//             </svg>
//           </Link>
//         </div>

//         <div className="mt-10 text-xs text-gray-700 animate-fade-slide-down [animation-delay:1.5s]">
//           © 2026 Drop2Print. All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// }

import HowItWorks from './pages/HowItWorks.jsx'
import FindShops from './pages/FindShops.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Contact from './pages/Contact.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import DeleteAccount from './pages/DeleteAccount.jsx'


export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          {/* <Route path="/shops" element={<FindShops />} /> */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
)
}