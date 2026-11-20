"use client";

import React from "react";
import { 
  Compass, 
  Layers, 
  FileCheck2, 
  LifeBuoy, 
  Zap, 
  MessageSquareCheck,
  ShieldCheck,
  Check
} from "lucide-react";

export default function WhyChooseUs() {
  const advantages = [
    {
      title: "Industry-Focused Experience",
      description: "Our team concentrates specifically on the US automotive repossession landscape, understanding the daily realities, terminology, and lender expectations that drive recovery operations.",
      icon: Compass,
      tag: "Specialized Focus"
    },
    {
      title: "Experienced Platform Handling",
      description: "Hands-on familiarity with systems like RDN, Recovery Connect, and Clearplan enables our specialists to plug directly into your established workflow without lengthy ramp-up periods.",
      icon: Layers,
      tag: "Zero Friction"
    },
    {
      title: "Accurate Documentation",
      description: "Meticulous record management for condition reports, personal property logs, and post-recovery paperwork helps safeguard your agency against compliance penalties and client disputes.",
      icon: FileCheck2,
      tag: "Audit-Ready"
    },
    {
      title: "Reliable Operational Support",
      description: "We provide structured administrative continuity so your in-house team and field agents can remain focused on vehicle recovery, route coverage, and driver safety.",
      icon: LifeBuoy,
      tag: "Operational Stability"
    },
    {
      title: "Efficient Order Processing",
      description: "Timely assignment intake, coverage verification, and continuous status tracking help minimize idle assignment lag and keep forwarders satisfied with prompt turnaround.",
      icon: Zap,
      tag: "Rapid Intake"
    },
    {
      title: "Dedicated Business Communication",
      description: "Transparent, responsive operational communication ensures agency owners and dispatchers are always up to date on pending orders, field updates, and completed files.",
      icon: MessageSquareCheck,
      tag: "Direct Alignment"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#F4F7FA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#183B63] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2878D0]" />
            <span>Why Repossession Agencies Partner With Us</span>
          </div>
          
          {/* Exact Required Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D35] tracking-tight">
            Your Trusted Partner in Recovery Operations
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Built from the ground up to solve the back-office bottlenecks that slow down repossession agencies, drain dispatcher time, and jeopardize client relationships.
          </p>
        </div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="group bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-[#2878D0] shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#eaf3fc] text-[#2878D0] flex items-center justify-center group-hover:bg-[#2878D0] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-[#2878D0] transition-colors">
                      {adv.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#101D35] group-hover:text-[#2878D0] transition-colors mb-3">
                    {adv.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Standard Operating Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Callout */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#101D35] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#43BBD8]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#101D35]">Honest, Dedicated Operational Support</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                No unverified claims or exaggerated promises. Just experienced personnel executing your recovery workflows with discipline and precision.
              </p>
            </div>
          </div>
          <a
            href="#demo-form"
            className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#183B63] hover:bg-[#101D35] text-white transition-colors"
          >
            Schedule Free Demo
          </a>
        </div>

      </div>
    </section>
  );
}
