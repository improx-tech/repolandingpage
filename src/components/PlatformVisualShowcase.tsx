"use client";

import React, { useState } from "react";
import { 
  Database, 
  Map, 
  FileCheck2, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  Check
} from "lucide-react";

export default function PlatformVisualShowcase() {
  const [activeTab, setActiveTab] = useState<"rdn" | "clearplan" | "condition" | "skip">("rdn");

  return (
    <section className="py-20 lg:py-28 bg-[#0a1120] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#2878D0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#43BBD8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183B63] border border-[#2878D0]/40 text-[#43BBD8] text-xs font-semibold uppercase tracking-wider mb-4">
            <Database className="w-3.5 h-3.5 text-[#43BBD8]" />
            <span>Platform Workflow Previews</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See How We Operate Inside Your Core Platforms
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Real operational visual previews of how our back-office specialists manage orders in RDN, coordinate field routes in Clearplan, audit vehicle condition reports, and run skip intelligence.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab("rdn")}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
              activeTab === "rdn"
                ? "bg-[#2878D0] text-white shadow-lg shadow-[#2878D0]/30 scale-105"
                : "bg-[#101D35] text-slate-300 hover:text-white hover:bg-[#183B63] border border-slate-800"
            }`}
          >
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/30">RDN</span>
            <span>Recovery Database Network</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("clearplan")}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
              activeTab === "clearplan"
                ? "bg-[#2878D0] text-white shadow-lg shadow-[#2878D0]/30 scale-105"
                : "bg-[#101D35] text-slate-300 hover:text-white hover:bg-[#183B63] border border-slate-800"
            }`}
          >
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/30">CP</span>
            <span>Clearplan Logistics</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("condition")}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
              activeTab === "condition"
                ? "bg-[#2878D0] text-white shadow-lg shadow-[#2878D0]/30 scale-105"
                : "bg-[#101D35] text-slate-300 hover:text-white hover:bg-[#183B63] border border-slate-800"
            }`}
          >
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/30">CR</span>
            <span>Condition Reports & Photos</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("skip")}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
              activeTab === "skip"
                ? "bg-[#2878D0] text-white shadow-lg shadow-[#2878D0]/30 scale-105"
                : "bg-[#101D35] text-slate-300 hover:text-white hover:bg-[#183B63] border border-slate-800"
            }`}
          >
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/30">IDI</span>
            <span>Skip Tracing Locates</span>
          </button>
        </div>

        {/* Tab 1: RDN Mockup & Workflow Showcase */}
        {activeTab === "rdn" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101D35] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl animate-in fade-in duration-300">
            
            {/* Visual Interface Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#0a1120] border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-xs">
                
                {/* RDN Window Header */}
                <div className="bg-[#183B63] px-4 py-3 flex items-center justify-between border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-white tracking-wider flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#43BBD8]"></span>
                      RDN // Recovery Database Network
                    </span>
                    <span className="text-[10px] text-sky-200 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800">
                      Agency Portal v4.2
                    </span>
                  </div>
                  <span className="text-emerald-400 font-sans text-[11px] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Sync Active
                  </span>
                </div>

                {/* Assignment Queue List */}
                <div className="p-4 bg-[#0d1829] border-b border-slate-800 flex items-center justify-between text-slate-300 text-[11px]">
                  <span>Filter: <strong className="text-white">Active Queue (Region South)</strong></span>
                  <span className="text-[#43BBD8]">6 Assignments Managed Today</span>
                </div>

                <div className="divide-y divide-slate-800/80">
                  
                  {/* Order 1 */}
                  <div className="p-4 hover:bg-[#132238] transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-[#43BBD8]">Order #RDN-98421</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-semibold border border-emerald-800/50">
                        STATUS: ON-HOOK CONFIRMED
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-300 text-[11px] mb-2 font-sans">
                      <div>Collateral: <strong className="text-white">2023 Ford F-150 SuperCrew</strong></div>
                      <div>Debtor Zip: <strong className="text-white">32801 (Orlando, FL)</strong></div>
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans bg-slate-900/70 p-2 rounded border border-slate-800">
                      <span className="text-sky-300 font-mono">Latest Update (14:32 EST):</span> Vehicle secured without incident. Towed to primary secure yard. Client portal timestamp pushed within 5 mins of staging.
                    </div>
                  </div>

                  {/* Order 2 */}
                  <div className="p-4 hover:bg-[#132238] transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-[#43BBD8]">Order #RDN-98419</span>
                      <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px] font-semibold border border-amber-800/50">
                        STATUS: ORDER LOADED / INTAKE
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-300 text-[11px] mb-2 font-sans">
                      <div>Collateral: <strong className="text-white">2022 Honda Accord Sport</strong></div>
                      <div>Forwarder: <strong className="text-white">National Forwarder Network</strong></div>
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans bg-slate-900/70 p-2 rounded border border-slate-800">
                      <span className="text-amber-300 font-mono">RepoDesk Action:</span> Order verified against territory parameters. Loan packet attached. Staged directly to Clearplan driver dispatch.
                    </div>
                  </div>

                </div>

                {/* RDN Status Bar */}
                <div className="p-3 bg-[#0a1120] text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800">
                  <span>Sub-User: <span className="text-slate-200">repodesk_operator_desk</span></span>
                  <span className="text-emerald-400">Zero Pending Assignment Backlog</span>
                </div>

              </div>
            </div>

            {/* Explanatory Content */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#43BBD8]">
                Master Recovery Portal Execution
              </span>
              <h3 className="text-2xl font-bold text-white">
                Eliminate RDN Update Delays & Ingestion Friction
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                RDN is the lifeline between your repossession agency, forwarding networks, and lending clients. We handle the constant back-and-forth updates so your dispatchers are not glued to typing screens all day.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Immediate order acceptance within designated client SLAs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Prompt status logging of drive-bys, gate pings, and field observations</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Condition report packet and invoice transmission direct to forwarders</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#demo-form"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#43BBD8] hover:text-white transition-colors"
                >
                  <span>Schedule RDN Workflow Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Clearplan Logistics & Mapping */}
        {activeTab === "clearplan" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101D35] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl animate-in fade-in duration-300">
            
            {/* Visual Map Interface Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#0a1120] border border-slate-700/80 shadow-2xl overflow-hidden font-sans">
                
                {/* Header */}
                <div className="bg-[#183B63] px-4 py-3 flex items-center justify-between border-b border-slate-700">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Map className="w-4 h-4 text-[#43BBD8]" />
                    <span>Clearplan // Territory & Route Dispatch</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Zone A-1 Optimized
                  </span>
                </div>

                {/* Simulated Territory Visualizer */}
                <div className="relative h-64 bg-slate-900 overflow-hidden flex items-center justify-center p-4">
                  {/* Subtle Grid Map Background */}
                  <div className="absolute inset-0 opacity-15">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="cp-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2878D0" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#cp-grid)" />
                    </svg>
                  </div>

                  {/* Route & Pin Overlays */}
                  <div className="relative z-10 w-full max-w-md space-y-2.5">
                    <div className="p-3 rounded-xl bg-slate-800/90 border border-[#2878D0]/60 flex items-center justify-between shadow-lg">
                      <div className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></span>
                        <div>
                          <p className="text-xs font-bold text-white">Hot Account Staged: 2024 GMC Sierra</p>
                          <p className="text-[11px] text-slate-300">Sector: North Metro // Driver Unit 08 Assigned</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-800">HOT SHEET</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between shadow-lg">
                      <div className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                        <div>
                          <p className="text-xs font-bold text-white">Check-in Verified: Elm Street Residence</p>
                          <p className="text-[11px] text-slate-300">Last scanned: 18 mins ago by Spotter 02</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">CHECKED</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between shadow-lg">
                      <div className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full bg-sky-400"></span>
                        <div>
                          <p className="text-xs font-bold text-white">Route Optimized: 14 Accounts Clustered</p>
                          <p className="text-[11px] text-slate-300">Estimated Dead-Head Reduction: 38 Miles</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">ACTIVE</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#0a1120] text-xs text-slate-300 flex items-center justify-between border-t border-slate-800">
                  <span>Driver Territory Management</span>
                  <span className="text-[#43BBD8] font-mono text-[11px]">Clearplan Sync: Instant</span>
                </div>

              </div>
            </div>

            {/* Text Description */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#43BBD8]">
                Logistics & Dispatch Coordination
              </span>
              <h3 className="text-2xl font-bold text-white">
                Optimize Every Mile & Keep Field Drivers Focused
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Wasted fuel and haphazard driver runs eat away at agency profit margins. We plot new accounts directly into Clearplan zones, organize driver sequences, and monitor check-in timestamps.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Immediate account plotting upon assignment reception</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Territory alignment preventing drivers from crossing boundaries</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Hot account prioritization and real-time route adjustments</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#demo-form"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#43BBD8] hover:text-white transition-colors"
                >
                  <span>Explore Clearplan Support</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Condition Reports & Photo Audits */}
        {activeTab === "condition" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101D35] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl animate-in fade-in duration-300">
            
            {/* Condition Report Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-2xl overflow-hidden font-sans">
                
                {/* Header */}
                <div className="bg-[#183B63] px-5 py-3.5 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5 text-[#43BBD8]" />
                    <span className="font-bold text-sm">Standard Vehicle Condition Report (CR)</span>
                  </div>
                  <span className="text-[11px] font-mono bg-[#2878D0] px-2 py-0.5 rounded text-white">
                    Audit-Ready
                  </span>
                </div>

                <div className="p-5 space-y-4 text-xs">
                  
                  {/* Vehicle details */}
                  <div className="grid grid-cols-3 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-slate-500 block text-[10px]">VIN (17-DIGIT)</span>
                      <strong className="font-mono text-slate-800">1FTFW1ED4NFC9****</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">ODOMETER</span>
                      <strong className="text-slate-800">41,208 mi (Actual)</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">DRIVABLE</span>
                      <strong className="text-emerald-600">Yes // Keys Cut</strong>
                    </div>
                  </div>

                  {/* Inspection Checkpoints */}
                  <div>
                    <span className="font-bold text-slate-800 block mb-2 text-xs">Photo Inspection & Audit Status:</span>
                    <div className="grid grid-cols-2 gap-2 text-slate-700">
                      <div className="flex items-center gap-1.5 p-2 rounded bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>360° Exterior (8 High-Res Angles)</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-2 rounded bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Interior & Dash Gauges Verified</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-2 rounded bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Tire Tread & Wheel Rim Inspection</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-2 rounded bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Personal Property Itemized & Logged</span>
                      </div>
                    </div>
                  </div>

                  {/* Compliance Notice */}
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-between text-[11px]">
                    <span className="font-semibold">Lender & Forwarder SLA Status:</span>
                    <span className="font-bold">Uploaded within 12 Hours of Secure Staging</span>
                  </div>

                </div>

              </div>
            </div>

            {/* Text Description */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#43BBD8]">
                Documentation & Risk Mitigation
              </span>
              <h3 className="text-2xl font-bold text-white">
                Eliminate Damage Claims with Flawless Condition Reports
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Incomplete condition reports lead to costly damage disputes, withheld client fees, and audit failures. We audit every photograph, stamp mileage, itemize personal property, and upload complete packets into client portals promptly.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Standardized multi-point vehicle condition audits</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Personal property inventory tracking protecting agency liability</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Rapid portal upload satisfying strict lender turnaround times</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#demo-form"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#43BBD8] hover:text-white transition-colors"
                >
                  <span>Request Condition Report Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: Skip Tracing Locates */}
        {activeTab === "skip" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101D35] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl animate-in fade-in duration-300">
            
            {/* Skip Trace Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#0a1120] border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-xs">
                
                <div className="bg-[#183B63] px-4 py-3 flex items-center justify-between border-b border-slate-700 font-sans">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Search className="w-4 h-4 text-[#43BBD8]" />
                    <span>IDI Core // Investigative Intelligence Search</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Confidence: 94%
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  
                  <div className="p-3 bg-[#132238] rounded-xl border border-slate-700">
                    <div className="text-[#43BBD8] font-bold text-xs mb-1">Target Subject: Verified Active Leads</div>
                    <div className="text-slate-300 text-[11px] font-sans space-y-1">
                      <p>Primary Staging: <strong>742 Evergreen Terrace (Moved 60 days ago)</strong></p>
                      <p className="text-emerald-400">Current Verified Address: <strong>1844 Industrial Pkwy, Unit B (Utility Active)</strong></p>
                      <p>Current Employer (POE): <strong>Apex Distribution Logistics // Shifts: 07:00 - 15:30</strong></p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#0d1829] rounded-xl border border-slate-800 text-[11px] font-sans text-slate-300">
                    <strong className="text-white block mb-1">Co-Borrower & Relative Cross-Reference:</strong>
                    <p className="text-slate-400">Secondary address plotted on Clearplan route for spotter night run. High probability of vehicle overnight parking.</p>
                  </div>

                </div>

                <div className="p-3 bg-[#0a1120] text-xs text-slate-400 flex items-center justify-between border-t border-slate-800">
                  <span>GLBA & Consumer Privacy Compliant</span>
                  <span className="text-[#43BBD8] font-mono text-[11px]">Actionable Lead Pushed to Field</span>
                </div>

              </div>
            </div>

            {/* Text Description */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#43BBD8]">
                Investigative Research Support
              </span>
              <h3 className="text-2xl font-bold text-white">
                Turn Stale Accounts into Recovered Collateral
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                When debtors move or hide collateral, field agents waste precious time checking empty driveways. Our dedicated skip tracing team conducts thorough research across IDI Core and specialized databases to provide your drivers with fresh, actionable addresses.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Place of employment (POE) identification & shift schedules</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Utility record cross-referencing for active physical presence</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct lead push straight into active Clearplan driver routes</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#demo-form"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#43BBD8] hover:text-white transition-colors"
                >
                  <span>Inquire About Skip Tracing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
