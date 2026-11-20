"use client";

import React, { useState } from "react";
import { platformsData, platformSupportingStatement, PlatformItem } from "@/data/platformsData";
import { 
  Check, 
  Cpu, 
  ArrowRight
} from "lucide-react";

export default function PlatformsSection() {
  const [activePlatform, setActivePlatform] = useState<PlatformItem>(platformsData[0]);

  return (
    <section id="platforms" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183B63]/10 border border-[#183B63]/20 text-[#183B63] text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#2878D0]" />
            <span>Platform Agnostic Integration</span>
          </div>
          
          {/* Exact Required Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D35] tracking-tight">
            Experienced Across the Platforms That Power Recovery Operations
          </h2>
          
          {/* Exact Required Supporting Statement */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {platformSupportingStatement}
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {platformsData.map((plat) => {
            const isSelected = activePlatform.id === plat.id;
            return (
              <div
                key={plat.id}
                onClick={() => setActivePlatform(plat)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#101D35] text-white border-[#2878D0] shadow-xl ring-2 ring-[#2878D0]/40 -translate-y-1"
                    : "bg-[#F4F7FA] text-slate-800 border-slate-200/90 hover:bg-white hover:border-[#2878D0]/60 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Clean text-based brand representation (No fake official logos) */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`h-11 px-3.5 rounded-xl font-mono font-bold text-sm tracking-wider flex items-center justify-center border ${
                        isSelected
                          ? "bg-[#183B63] text-[#43BBD8] border-slate-700"
                          : "bg-white text-[#183B63] border-slate-200 shadow-2xs"
                      }`}
                    >
                      {plat.shortCode}
                    </div>
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isSelected
                          ? "bg-[#183B63] text-sky-200"
                          : "bg-slate-200/70 text-slate-600"
                      }`}
                    >
                      {plat.role}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-1.5 ${
                      isSelected ? "text-white" : "text-[#101D35]"
                    }`}
                  >
                    {plat.name}
                  </h3>

                  <p
                    className={`text-xs uppercase tracking-wider font-semibold mb-3 ${
                      isSelected ? "text-[#43BBD8]" : "text-[#2878D0]"
                    }`}
                  >
                    {plat.category}
                  </p>

                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {plat.description}
                  </p>
                </div>

                <div
                  className={`pt-3 border-t text-xs font-medium flex items-center justify-between ${
                    isSelected ? "border-slate-800 text-sky-200" : "border-slate-200 text-[#183B63]"
                  }`}
                >
                  <span>Select to inspect workflow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Platform In-Depth Preview Panel */}
        <div className="rounded-2xl bg-[#101D35] border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-[#183B63] border border-[#2878D0]/40 flex items-center justify-center font-mono font-bold text-lg text-[#43BBD8]">
                {activePlatform.shortCode}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#43BBD8]">{activePlatform.category}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400">Direct Agency Integration</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-0.5">{activePlatform.name} Workflow Handling</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-slate-400">Security & Access</p>
                <p className="text-xs font-semibold text-emerald-400">Restricted Sub-User Access</p>
              </div>
              <a
                href="#demo-form"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#2878D0] hover:bg-[#1e63b0] text-white transition-colors flex items-center gap-2"
              >
                <span>Request Platform Demo</span>
              </a>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activePlatform.capabilities.map((cap, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#183B63]/40 border border-slate-800 flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-[#2878D0]/20 border border-[#2878D0]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#43BBD8]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Workflow 0{idx + 1}</p>
                  <p className="text-sm font-semibold text-slate-100 mt-0.5">{cap}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <p>
              Notice: Platform trademarks, product names, and registered logos belong to their respective owners. We operate as authorized operator delegates using customer-provided agency credentials.
            </p>
            <span className="shrink-0 text-slate-300 font-medium">SOC-2 Mindset & Data Confidentiality</span>
          </div>
        </div>

      </div>
    </section>
  );
}
