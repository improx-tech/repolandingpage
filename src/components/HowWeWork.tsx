"use client";

import React, { useState } from "react";
import { 
  ClipboardList, 
  Workflow, 
  Headphones, 
  BarChart3, 
  CheckCircle
} from "lucide-react";

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      title: "Understand Your Requirements",
      subtitle: "Initial Operational Assessment",
      description: "We begin with a detailed review of your agency footprint, active fleet size, primary client networks (forwarders, direct lenders), order volumes, and key operational pain points.",
      icon: ClipboardList,
      details: [
        "Review monthly assignment volume and staffing load",
        "Identify specific bottlenecks (e.g. condition reports, intake lag)",
        "Determine required coverage hours and response SLA parameters",
        "Establish security and communication protocols"
      ]
    },
    {
      step: "02",
      title: "Understand Your Existing Workflow",
      subtitle: "Platform & Process Mapping",
      description: "We map your current operating procedures across platforms such as RDN, Recovery Connect, and Clearplan, ensuring we adopt your established nomenclature and reporting standards.",
      icon: Workflow,
      details: [
        "Audit existing software setups and user role permissions",
        "Align with your dispatch territories and driver route zones",
        "Standardize vehicle condition report photo checklists",
        "Configure direct dispatch escalation rules"
      ]
    },
    {
      step: "03",
      title: "Provide Dedicated Operational Support",
      subtitle: "Live Execution & Daily Management",
      description: "Our trained specialists integrate directly into your daily operations—reviewing assignments, verifying coverage, pushing real-time status updates, and preparing condition reports.",
      icon: Headphones,
      details: [
        "Prompt order acceptance and loading upon client transmission",
        "Active communication support for field agents during recoveries",
        "Thorough skip tracing research on stale accounts",
        "Timely client portal updates to keep forwarders informed"
      ]
    },
    {
      step: "04",
      title: "Maintain Consistent Communication & Reporting",
      subtitle: "Transparency & Quality Reviews",
      description: "We hold daily operational alignment and continuous reporting channels so agency leadership remains in complete control with zero ambiguity on account progress.",
      icon: BarChart3,
      details: [
        "End-of-day assignment summary and status logs",
        "Weekly review of unrecovered files and skip progress",
        "Audit-ready archive for post-recovery paperwork",
        "Continuous feedback loop to adapt to changing client needs"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183B63]/10 border border-[#183B63]/20 text-[#183B63] text-xs font-semibold uppercase tracking-wider mb-4">
            <Workflow className="w-3.5 h-3.5 text-[#2878D0]" />
            <span>Structured Four-Step Onboarding</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D35] tracking-tight">
            How We Integrate With Your Agency
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A seamless, non-disruptive process designed to relieve operational pressure without forcing your agency to change how you work.
          </p>
        </div>

        {/* Desktop Horizontal Process Timeline (Hidden on small screens) */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Horizontal Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-6 z-0" />
            
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {steps.map((st, index) => {
                const Icon = st.icon;
                const isActive = activeStep === index;
                return (
                  <div
                    key={st.step}
                    onClick={() => setActiveStep(index)}
                    className="cursor-pointer group flex flex-col items-center text-center"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-lg mb-6 transition-all duration-300 border-2 ${
                        isActive
                          ? "bg-[#2878D0] text-white border-white shadow-lg shadow-[#2878D0]/40 scale-110"
                          : "bg-white text-[#101D35] border-slate-300 group-hover:border-[#2878D0] group-hover:scale-105"
                      }`}
                    >
                      <span>{st.step}</span>
                    </div>

                    {/* Step Card */}
                    <div
                      className={`w-full p-6 rounded-2xl border text-left transition-all duration-200 ${
                        isActive
                          ? "bg-[#101D35] text-white border-slate-700 shadow-xl"
                          : "bg-[#F4F7FA] text-slate-800 border-slate-200/80 hover:bg-white hover:border-[#2878D0]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            isActive ? "text-[#43BBD8]" : "text-[#2878D0]"
                          }`}
                        >
                          Step {st.step}
                        </span>
                        <Icon
                          className={`w-5 h-5 ${
                            isActive ? "text-sky-300" : "text-slate-500"
                          }`}
                        />
                      </div>

                      <h3
                        className={`text-base font-bold mb-2 leading-snug ${
                          isActive ? "text-white" : "text-[#101D35]"
                        }`}
                      >
                        {st.title}
                      </h3>

                      <p
                        className={`text-xs leading-relaxed ${
                          isActive ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {st.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline (Hidden on lg screens) */}
        <div className="block lg:hidden space-y-6 mb-12">
          <div className="relative pl-8 border-l-2 border-[#2878D0]/40 ml-4 space-y-8">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div key={st.step} className="relative">
                  {/* Step Marker on timeline */}
                  <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#2878D0] text-white font-mono text-xs font-bold flex items-center justify-center ring-4 ring-white shadow-sm">
                    {st.step}
                  </div>

                  <div className="bg-[#F4F7FA] rounded-2xl p-6 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-[#2878D0]" />
                      <span className="text-xs font-bold text-[#183B63] uppercase tracking-wider">
                        {st.subtitle}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#101D35] mb-2">
                      {st.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {st.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-200/60">
                      {st.details.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Dive on Active Step for Desktop */}
        <div className="hidden lg:block bg-gradient-to-r from-[#101D35] to-[#183B63] rounded-2xl p-8 text-white shadow-lg">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-[#2878D0] font-mono text-xs font-bold text-white">
                Step {steps[activeStep].step} Scope
              </span>
              <h3 className="text-xl font-bold text-white">
                {steps[activeStep].title} — Operational Checkpoints
              </h3>
            </div>
            <span className="text-xs text-slate-300 font-mono">
              Phase {activeStep + 1} of 4
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {steps[activeStep].details.map((detail, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-700/60 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#43BBD8] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 leading-relaxed">{detail}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
