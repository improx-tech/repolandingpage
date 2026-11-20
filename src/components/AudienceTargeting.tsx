"use client";

import React from "react";
import { 
  Building2, 
  Briefcase, 
  Sliders, 
  Truck, 
  ShieldAlert, 
  CheckCircle,
  TrendingUp,
  Cpu
} from "lucide-react";

export default function AudienceTargeting() {
  const audiences = [
    {
      title: "Repossession Agency Owners",
      description: "Focus on growing your fleet and lender contracts while offloading heavy administrative coordination, order loading, and compliance paperwork.",
      highlight: "Overcome staffing constraints & streamline operations",
      icon: Building2
    },
    {
      title: "Recovery Company Managers",
      description: "Equip your organization with dependable, structured operational support that ensures prompt order updates and accurate condition reports.",
      highlight: "Maintain flawless SLA compliance across forwarders",
      icon: Briefcase
    },
    {
      title: "Operations Managers",
      description: "Gain capable hands to handle high assignment volumes, manage portal updates, coordinate field agents, and resolve daily administrative bottlenecks.",
      highlight: "Eliminate intake backlogs & dispatch delays",
      icon: Sliders
    },
    {
      title: "Independent Repossession Companies",
      description: "Compete effectively with large national operators by maintaining enterprise-grade back-office professionalism without massive overhead.",
      highlight: "Professional back-office without heavy payroll",
      icon: Truck
    },
    {
      title: "Automotive Recovery Businesses",
      description: "Scale operations smoothly across multiple counties and client platforms with dedicated support for skip tracing, condition reports, and billing.",
      highlight: "Operational agility across expanding coverage zones",
      icon: TrendingUp
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#183B63] text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#2878D0]" />
            <span>Built Specifically For The Recovery Industry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
            Tailored For Modern Repossession Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Positioning your company as an experienced, reliable, knowledgeable, and technology-enabled business partner across every recovery assignment.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, index) => {
            const IconComponent = aud.icon;
            return (
              <div
                key={aud.title}
                className={`p-6 rounded-2xl border transition-all duration-200 bg-[#F4F7FA]/60 hover:bg-white hover:border-[#2878D0]/40 hover:shadow-md ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#183B63] mb-5">
                  <IconComponent className="w-6 h-6 text-[#2878D0]" />
                </div>
                <h3 className="text-lg font-bold text-[#101D35] mb-2">
                  {aud.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {aud.description}
                </p>
                <div className="pt-3 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-[#183B63]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#2878D0] shrink-0" />
                  <span>{aud.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Assurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#101D35] to-[#183B63] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2878D0]/20 border border-[#43BBD8]/30 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 text-[#43BBD8]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">An Operational Extension of Your Agency</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                We work inside your systems, under your agency identity, conforming strictly to your state rules and client guidelines.
              </p>
            </div>
          </div>
          <a
            href="#demo-form"
            className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#2878D0] hover:bg-[#1e63b0] text-white transition-colors"
          >
            Discuss Your Agency Needs
          </a>
        </div>

      </div>
    </section>
  );
}
