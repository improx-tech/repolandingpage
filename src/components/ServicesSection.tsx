"use client";

import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { 
  CheckSquare, 
  Clock, 
  FileSpreadsheet, 
  Radio, 
  SearchCheck, 
  UploadCloud, 
  MapPin, 
  Receipt, 
  FolderCheck,
  CheckCircle2, 
  ArrowUpRight, 
  Layers,
  X
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  CheckSquare,
  Clock,
  FileSpreadsheet,
  Radio,
  SearchCheck,
  UploadCloud,
  MapPin,
  Receipt,
  FolderCheck
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "field-ops" | "back-office">("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = activeCategory === "all"
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  const fieldOpsServices = servicesData.filter((s) => s.category === "field-ops");
  const backOfficeServices = servicesData.filter((s) => s.category === "back-office");

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F4F7FA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-[#183B63] text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#2878D0]" />
            <span>Comprehensive Agency Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D35] tracking-tight">
            Specialized Services For Recovery Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate operational friction, relieve administrative pressure, and maintain flawless compliance with our dedicated two-tier support framework.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-[#101D35] text-white shadow-md shadow-[#101D35]/20"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
            }`}
          >
            All Services ({servicesData.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("field-ops")}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeCategory === "field-ops"
                ? "bg-[#2878D0] text-white shadow-md shadow-[#2878D0]/25"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
            }`}
          >
            <span>Order Management & Field Operations</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200/60 font-mono">
              {fieldOpsServices.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("back-office")}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeCategory === "back-office"
                ? "bg-[#183B63] text-white shadow-md shadow-[#183B63]/25"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
            }`}
          >
            <span>Recovery Back-Office & Administrative Support</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200/60 font-mono">
              {backOfficeServices.length}
            </span>
          </button>
        </div>

        {/* If All is selected, we can present both categories with distinct visual sections, or render cards seamlessly */}
        {activeCategory === "all" ? (
          <div className="space-y-16">
            
            {/* Category A: Order Management & Field Operations */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-300 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2878D0]">Category A</span>
                  <h3 className="text-2xl font-bold text-[#101D35]">Order Management & Field Operations</h3>
                </div>
                <p className="text-sm text-slate-600 max-w-md">
                  Active coordination, rapid assignment review, real-time client status, and field agent support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fieldOpsServices.map((service) => {
                  const Icon = ICON_MAP[service.iconName] || CheckSquare;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className="group cursor-pointer bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#2878D0] shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[#eaf3fc] text-[#2878D0] flex items-center justify-center group-hover:bg-[#2878D0] group-hover:text-white transition-colors duration-200">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-[#2878D0] transition-colors">
                            {service.badge}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-[#101D35] group-hover:text-[#2878D0] transition-colors mb-2">
                          {service.title}
                        </h4>

                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                          {service.shortDesc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#2878D0]">
                        <span>View Workflow Details</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Category B: Recovery Back-Office & Administrative Support */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-300 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#183B63]">Category B</span>
                  <h3 className="text-2xl font-bold text-[#101D35]">Recovery Back-Office & Administrative Support</h3>
                </div>
                <p className="text-sm text-slate-600 max-w-md">
                  In-depth skip tracing, swift order loading, territory verification, billing reconciliation, and closing files.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {backOfficeServices.map((service) => {
                  const Icon = ICON_MAP[service.iconName] || CheckSquare;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className="group cursor-pointer bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#183B63] shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#183B63] flex items-center justify-center group-hover:bg-[#183B63] group-hover:text-white transition-colors duration-200">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 group-hover:bg-slate-200 group-hover:text-[#183B63] transition-colors">
                            {service.badge}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-[#101D35] group-hover:text-[#183B63] transition-colors mb-2">
                          {service.title}
                        </h4>

                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                          {service.shortDesc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#183B63]">
                        <span>View Workflow Details</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        ) : (
          /* Filtered Category Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const Icon = ICON_MAP[service.iconName] || CheckSquare;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#2878D0] shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#eaf3fc] text-[#2878D0] flex items-center justify-center group-hover:bg-[#2878D0] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                        {service.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#101D35] group-hover:text-[#2878D0] transition-colors mb-2">
                      {service.title}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#2878D0]">
                    <span>View Full Scope</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal for Service Detail */}
        {selectedService && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <div 
              className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Close Service Details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#183B63]/10 text-[#183B63]">
                  {selectedService.badge}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 font-mono">Service Code: {selectedService.id}</span>
              </div>

              <h3 id="service-modal-title" className="text-2xl font-bold text-[#101D35] mb-3">
                {selectedService.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                {selectedService.fullDesc}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Key Operational Deliverables
                </h4>
                <div className="space-y-2.5">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2878D0] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Customizable to your agency standard operating procedures.
                </span>
                <a
                  href="#demo-form"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#2878D0] hover:bg-[#1e63b0] text-center"
                >
                  Schedule Demo For This Service
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
