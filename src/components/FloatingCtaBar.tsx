"use client";

import React, { useState, useEffect } from "react";
import { Calendar, ArrowUp, X } from "lucide-react";

export default function FloatingCtaBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 400px and if not manually dismissed
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#demo-form");
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <aside aria-label="Quick scheduling action" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 max-w-lg bg-[#101D35]/95 backdrop-blur-md text-white border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-2.5 overflow-hidden">
        <div className="w-9 h-9 rounded-xl bg-[#2878D0] flex items-center justify-center shrink-0 text-white">
          <Calendar className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold text-white truncate">
            Ready to streamline your agency ops?
          </p>
          <p className="text-[11px] text-slate-300 truncate">
            Personalized 20-min workflow demo
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={handleScrollToForm}
          className="px-3.5 py-2 rounded-lg text-xs font-bold bg-[#2878D0] hover:bg-[#1e63b0] text-white transition-colors shadow-xs"
        >
          Book Demo
        </button>

        <button
          type="button"
          onClick={handleScrollToTop}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="Back to Top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="p-1 text-slate-400 hover:text-slate-200"
          title="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
