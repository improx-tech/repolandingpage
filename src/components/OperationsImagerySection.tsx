"use client";

import React from "react";
import { ShieldCheck, CheckCircle } from "lucide-react";

export default function OperationsImagerySection() {
  const visualCards = [
    {
      title: "Real-Time RDN Order Ingestion",
      category: "Assignment Processing",
      description: "Direct monitoring of incoming forwarder orders, collateral verification, and immediate assignment to active driver zones.",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      tag: "Platform Intake"
    },
    {
      title: "Clearplan Logistics & Territory Dispatch",
      category: "Route Optimization",
      description: "Plotting accounts, clustering debtor locations, and coordinating driver check-ins to minimize wasted road mileage.",
      imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
      tag: "Field Mapping"
    },
    {
      title: "Vehicle Inspection & Condition Audits",
      category: "Liability Protection",
      description: "Auditing multi-angle photographs, odometer stamps, and personal property itemization for rapid client sign-off.",
      imageUrl: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      tag: "Condition Reports"
    },
    {
      title: "Fleet Logistics & Operational Continuity",
      category: "Dedicated Agency Support",
      description: "Structured back-office support that keeps your trucks rolling, your clients informed, and your team organized.",
      imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
      tag: "Fleet Support"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183B63]/10 border border-[#183B63]/20 text-[#183B63] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2878D0]" />
            <span>Modern Operations In Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
            Built For The Demands of Modern Recovery Fleets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Combining experienced back-office personnel with real-time platform discipline to power your daily recovery operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visualCards.map((card, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#F4F7FA] border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#2878D0] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  {/* Real high quality photograph */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101D35] via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#101D35]/90 text-[#43BBD8] border border-slate-700">
                    {card.tag}
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2878D0] block mb-1">
                    {card.category}
                  </span>
                  <h3 className="text-base font-bold text-[#101D35] group-hover:text-[#2878D0] transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <div className="pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs font-semibold text-[#183B63]">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Hands-on Support</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
