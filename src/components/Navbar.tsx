"use client";

import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E0DBD1] transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Editorial Brand Masthead (Zero icons, high-fashion editorial styling) */}
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#121212] leading-none">
            Repo<span className="italic font-normal text-[#2878D0]">Desk</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500 border-l border-[#E0DBD1] pl-3 py-0.5">
            US Repossession Operational Desk
          </span>
        </div>

        {/* Direct Phone Call Link (Zero icons, razor-thin editorial typography) */}
        <div>
          <a
            href="tel:+14079000208"
            className="text-right block group"
          >
            <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-slate-500">
              Direct Operational Desk
            </span>
            <span className="font-mono font-bold text-sm sm:text-base text-[#121212] group-hover:text-[#2878D0] transition-colors">
              +1 407 900 0208
            </span>
          </a>
        </div>

      </div>
    </header>
  );
}
