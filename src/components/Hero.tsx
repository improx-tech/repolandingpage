"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Activity, 
  FileText, 
  Navigation
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"intake" | "field" | "compliance">("intake");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F7FA] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#101D35" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Subtle Ambient Radial Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#2878D0]/10 to-[#43BBD8]/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Category / Target Audience Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183B63]/10 border border-[#183B63]/20 text-[#183B63] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2878D0]"></span>
              <span>Dedicated Operational Support for US Repossession Agencies</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#101D35] tracking-tight leading-[1.15] mb-6">
              Reliable Recovery Support.{" "}
              <span className="text-[#2878D0] block mt-1">Smarter Agency Operations.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Helping US repossession agencies streamline order management, recovery operations, documentation, and back-office workflows with experienced operational support.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#demo-form"
                onClick={(e) => handleScrollTo(e, "#demo-form")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-[#2878D0] hover:bg-[#1e63b0] shadow-lg shadow-[#2878D0]/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#2878D0]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2878D0]"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Schedule a Free Demo</span>
                <ArrowRight className="w-4 h-4 text-sky-200" />
              </a>

              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, "#services")}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-[#183B63] bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#183B63]"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Core Trust Pillars */}
            <div className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2878D0] shrink-0" />
                <span className="font-medium">US Repossession Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2878D0] shrink-0" />
                <span className="font-medium">Multi-Platform Fluency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2878D0] shrink-0" />
                <span className="font-medium">Audit-Ready Documentation</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Interactive Operations Command Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#183B63] to-[#2878D0] rounded-2xl blur-md opacity-20"></div>

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-[#101D35] border border-slate-800 text-white shadow-2xl overflow-hidden">
                
                {/* Header Window Bar */}
                <div className="px-5 py-3.5 bg-[#0a1120] border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">
                      RepoDesk // Operations Desk Simulator
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    SYNCHRONIZED
                  </div>
                </div>

                {/* Simulated Platform Selector / Operational Status */}
                <div className="p-5 pb-3">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Daily Operations Control</p>
                      <h2 className="text-base font-semibold text-slate-100 flex items-center gap-2 mt-0.5">
                        <Activity className="w-4 h-4 text-[#43BBD8]" />
                        Active Workflow Stream
                      </h2>
                    </div>
                    <span className="text-xs font-mono text-[#43BBD8] bg-[#183B63]/60 px-2.5 py-1 rounded-md border border-[#2878D0]/30">
                      All Systems Active
                    </span>
                  </div>

                  {/* Operational Segment Tabs */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#183B63]/40 rounded-lg mb-4 text-xs font-medium border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setActiveTab("intake")}
                      className={`py-1.5 px-2 rounded-md transition-all text-center flex items-center justify-center gap-1.5 ${
                        activeTab === "intake"
                          ? "bg-[#2878D0] text-white shadow-xs"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Order Intake</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("field")}
                      className={`py-1.5 px-2 rounded-md transition-all text-center flex items-center justify-center gap-1.5 ${
                        activeTab === "field"
                          ? "bg-[#2878D0] text-white shadow-xs"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Field Support</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("compliance")}
                      className={`py-1.5 px-2 rounded-md transition-all text-center flex items-center justify-center gap-1.5 ${
                        activeTab === "compliance"
                          ? "bg-[#2878D0] text-white shadow-xs"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Condition Docs</span>
                    </button>
                  </div>
                </div>

                {/* Dynamic Operational Cards Display */}
                <div className="px-5 pb-5 space-y-3 font-sans">
                  {activeTab === "intake" && (
                    <>
                      <div className="p-3.5 rounded-xl bg-[#183B63]/30 border border-slate-700/60 hover:border-[#2878D0]/50 transition-colors">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                            RDN Order Ingestion & Vetting
                          </span>
                          <span className="font-mono text-slate-400">Order #8849-FL</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          Coverage verified in Primary Zone. Zip 32801 confirmed. Loaded to agency queue with complete loan balance and collateral tags.
                        </p>
                        <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">RDN</span>
                          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">Clearplan Staged</span>
                          <span className="text-emerald-400 font-medium ml-auto">Accepted in SLA</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#183B63]/30 border border-slate-700/60 hover:border-[#2878D0]/50 transition-colors">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            Skip Trace Verification
                          </span>
                          <span className="font-mono text-slate-400">IDI Core Query</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          New verified workplace identified. Address cross-referenced with utility database and dispatched to secondary night-run route.
                        </p>
                        <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">IDI Core</span>
                          <span className="text-slate-400">Lead Confidence: High</span>
                          <span className="text-[#43BBD8] font-medium ml-auto">Dispatched</span>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "field" && (
                    <>
                      <div className="p-3.5 rounded-xl bg-[#183B63]/30 border border-slate-700/60 hover:border-[#2878D0]/50 transition-colors">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            Live On-Hook Notification
                          </span>
                          <span className="font-mono text-slate-400">Unit 14 // Spotter 03</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          VIN match confirmed on 2023 Ford F-150. Immediate client portal update pushed to RDN & Recovery Connect within 4 minutes of secure staging.
                        </p>
                        <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                          <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/40 font-mono">Secure Staging</span>
                          <span className="text-slate-400 font-mono text-[10px]">Client Update Dispatched</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#183B63]/30 border border-slate-700/60 hover:border-[#2878D0]/50 transition-colors">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                            Clearplan Zone Coordination
                          </span>
                          <span className="font-mono text-slate-400">Territory Delta</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          Route re-optimized following LPR hit notification. Agent route updated dynamically with zero manual input required from agency owner.
                        </p>
                        <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">Clearplan</span>
                          <span className="text-emerald-400 font-medium ml-auto">Synchronized</span>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "compliance" && (
                    <>
                      <div className="p-3.5 rounded-xl bg-[#183B63]/30 border border-slate-700/60 hover:border-[#2878D0]/50 transition-colors">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            Condition Report Packet Complete
                          </span>
                          <span className="font-mono text-slate-400">CR-2026-901</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          18 high-resolution inspection photos audited, tire tread recorded, odometer stamped, personal property itemized and filed for debtor release.
                        </p>
                        <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">Wombat / ALS</span>
                          <span className="text-emerald-400 font-medium ml-auto">Audit-Ready</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#183B63]/30 border border-slate-700/60 hover:border-[#2878D0]/50 transition-colors">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                            Billing & Forwarder Invoicing
                          </span>
                          <span className="font-mono text-slate-400">Inv #4412-RC</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          Tow fee, mileage, storage charges, and key cut invoices populated and transmitted through WebTransfer to forwarder accounting.
                        </p>
                        <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">WebTransfer</span>
                          <span className="text-slate-300 font-medium ml-auto">Submitted for Payment</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Footer Bar */}
                <div className="px-5 py-3 bg-[#0c1626] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#43BBD8]" />
                    <span>Lender Compliance Standardized</span>
                  </div>
                  <span className="text-slate-300 font-medium">Zero Backlog Goal</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
