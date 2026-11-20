"use client";

import React, { useState } from "react";
import { 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  SlidersHorizontal
} from "lucide-react";

export default function OperationsAssessment() {
  const [selectedBottleneck, setSelectedBottleneck] = useState<string>("order-loading");

  const bottlenecks = [
    {
      id: "order-loading",
      label: "Delayed Order Loading & Intake Lag",
      problem: "Assignments from forwarders and lenders sit in email or portal queues for hours before dispatchers can key them into RDN or Clearplan.",
      solution: "Our intake specialists monitor feeds continuously, vet zip codes, attach collateral documents, and load assignments immediately upon transmission.",
      serviceLink: "Order Loading & Intake Support",
      formTopic: "Order Loading"
    },
    {
      id: "condition-reports",
      label: "Condition Report & Photo Backlogs",
      problem: "Field agents recover vehicles but inspection photos, odometer readings, and condition logs sit unfinished, delaying vehicle release and client billing.",
      solution: "We audit photos, verify damage notations, format multi-point condition reports, and upload compliant files to client portals within required hours.",
      serviceLink: "Condition Report Management",
      formTopic: "Post-Recovery Documentation"
    },
    {
      id: "realtime-status",
      label: "Missed Status Update SLAs",
      problem: "Clients and forwarders penalize agencies or place holds on accounts when status updates, drive-by notes, or on-hook confirmations are late.",
      solution: "We synchronize field activity into portals in real time, logging spotter pings, address verifications, and timestamps reliably.",
      serviceLink: "Real-Time Order Status Updates",
      formTopic: "Order Management & Processing"
    },
    {
      id: "skip-tracing",
      label: "Elusive Accounts & Stale Addresses",
      problem: "Unrecovered accounts stall in field queues with dead addresses, while field agents spend wasted fuel checking outdated locations.",
      solution: "Our skip tracing specialists conduct in-depth investigative research across IDI Core and data intelligence platforms to uncover actionable verified leads.",
      serviceLink: "Dedicated Skip Tracing Support",
      formTopic: "Skip Tracing Services"
    }
  ];

  const current = bottlenecks.find((b) => b.id === selectedBottleneck) || bottlenecks[0];

  const handleSelectAndScroll = (topic: string) => {
    const topicSelect = document.getElementById("talkAbout") as HTMLSelectElement | null;
    if (topicSelect) {
      topicSelect.value = topic;
      // dispatch change event
      topicSelect.dispatchEvent(new Event("change", { bubbles: true }));
    }
    const formElement = document.getElementById("demo-form");
    if (formElement) {
      const navHeight = 80;
      const elementPosition = formElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#183B63] text-xs font-semibold uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#2878D0]" />
            <span>Interactive Operational Evaluator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D35] tracking-tight">
            Where Is Your Agency Losing the Most Operational Hours?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Select your agency&apos;s primary operational bottleneck to see how our dedicated team resolves it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Bottleneck Selector Pills */}
          <div className="lg:col-span-5 space-y-3">
            {bottlenecks.map((item) => {
              const isSelected = selectedBottleneck === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedBottleneck(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all text-sm font-semibold flex items-center justify-between ${
                    isSelected
                      ? "bg-[#101D35] text-white border-[#2878D0] shadow-md ring-2 ring-[#2878D0]/30"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100/80"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#43BBD8]" : "bg-slate-300"}`} />
                    {item.label}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? "text-[#43BBD8]" : "text-slate-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Solution Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 mb-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>The Operational Challenge</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#101D35] mb-2">
              {current.label}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {current.problem}
            </p>

            <div className="p-4 rounded-xl bg-[#eaf3fc] border border-blue-100 mb-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#183B63] mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2878D0] shrink-0" />
                <span>The RepoDesk Solution</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                {current.solution}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-500 font-medium">
                Solution Focus: <strong className="text-slate-700">{current.serviceLink}</strong>
              </span>

              <button
                type="button"
                onClick={() => handleSelectAndScroll(current.formTopic)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#2878D0] hover:bg-[#1e63b0] transition-colors flex items-center justify-center gap-2"
              >
                <span>Discuss This in Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
