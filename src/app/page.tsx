"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";

const TALK_ABOUT_OPTIONS = [
  "Order Management & Processing",
  "Accepting / Declining Orders",
  "Order Status Updates",
  "Condition Reports",
  "Real-Time Field Support",
  "Skip Tracing Services",
  "Order Loading",
  "Coverage Area Verification",
  "Billing & Invoicing",
  "Post-Recovery Documentation",
  "Driver & Storage Management",
  "I-Beam Platform Support",
  "Complete Back-Office Support",
  "Other"
];

const PLATFORMS_CAPITAL = [
  { name: "RDN", desc: "Order Ingestion & Client Forwarder Portals" },
  { name: "RECOVERY CONNECT", desc: "Real-Time Direct Recovery Dispatch" },
  { name: "CLEARPLAN", desc: "Territory Mapping & Logistics Coordination" },
  { name: "CLEARDATA", desc: "Historical Recovery Records & Database Tracking" },
  { name: "WOMBAT (ALS)", desc: "Inspection Sheets & 360° Photo Auditing" },
  { name: "IDI CORE", desc: "Investigative Skip Tracing Intelligence" },
  { name: "WEBTRANSFER", desc: "Secure Collateral Loan File & Title Data" },
  { name: "I-BEAM", desc: "Integrated Recovery & Impound Lot Management" }
];

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    contactNumber: "",
    companyName: "",
    talkAbout: "",
    notes: "",
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [refId, setRefId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.businessEmail.trim() || !formData.businessEmail.includes("@")) {
      newErrors.businessEmail = "Valid business email is required.";
    }
    if (!formData.contactNumber.trim()) newErrors.contactNumber = "Phone number is required.";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required.";
    if (!formData.talkAbout) newErrors.talkAbout = "Please select an operational topic.";
    if (!formData.consent) newErrors.consent = "You must agree to be contacted.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          preferredDate: "Earliest Available",
          preferredTime: "Flexible"
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setRefId(data.submissionId);
        setSubmittedSuccess(true);
      } else {
        alert(data.message || "Failed to submit request.");
      }
    } catch {
      alert("Network error. Please try again or email enquiry@improxgroup.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#121212] font-sans antialiased selection:bg-[#101D35] selection:text-white">
      {/* Editorial Masthead */}
      <Navbar />

      <main className="flex-1">
        
        {/* =========================================================================
            SECTION 1: HERO - 100% VIEWPORT HEIGHT
            Improved Core Platforms & Documentation Badge Cards
           ========================================================================= */}
        <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center border-b border-[#E0DBD1] py-12 lg:py-0 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Typographic Narrative */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="block font-mono text-xs uppercase tracking-[0.25em] text-[#2878D0] font-semibold mb-3">
                    OPERATIONAL EXCELLENCE IN RECOVERY
                  </span>
                  <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#121212] tracking-tight leading-[1.05]">
                    Reliable Recovery Support.{" "}
                    <span className="italic font-light text-[#2878D0] block mt-1">
                      Smarter Agency Operations.
                    </span>
                  </h1>
                </div>

                <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed max-w-2xl font-light">
                  Helping US repossession agencies streamline order management, recovery operations, documentation, and back-office workflows with experienced operational support. Built to relieve administrative friction so your field teams stay focused on secured assets.
                </p>

                {/* IMPROVED PLATFORMS & DOCUMENTATION SECTION (Clean Box Layout with Badges) */}
                <div className="pt-6 border-t border-[#E0DBD1]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Core Platforms Box */}
                    <div className="bg-white p-5 border border-[#E0DBD1] rounded-xl shadow-xs space-y-2.5">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[#2878D0] font-bold">
                        CORE PLATFORMS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E0DBD1] rounded-md font-mono text-xs font-bold text-[#101D35]">
                          RDN
                        </span>
                        <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E0DBD1] rounded-md font-mono text-xs font-bold text-[#101D35]">
                          Clearplan
                        </span>
                        <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E0DBD1] rounded-md font-mono text-xs font-bold text-[#101D35]">
                          Recovery Connect
                        </span>
                        <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E0DBD1] rounded-md font-mono text-xs font-bold text-[#101D35]">
                          I-Beam
                        </span>
                      </div>
                    </div>

                    {/* Documentation Standards Box */}
                    <div className="bg-white p-5 border border-[#E0DBD1] rounded-xl shadow-xs space-y-1">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[#2878D0] font-bold mb-1">
                        DOCUMENTATION STANDARDS
                      </span>
                      <p className="font-serif text-base font-bold text-[#101D35] leading-snug">
                        Audit-Ready Condition Reports & Property
                      </p>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        Timestamped 360° photo sheets and accurate personal property custody logs.
                      </p>
                    </div>

                  </div>
                </div>

              </div>

              {/* Right Column: Custom Hero Image (From /public/hero image.jpg) */}
              <div className="lg:col-span-5">
                <div className="border border-[#E0DBD1] bg-white p-2.5 sm:p-3 shadow-sm rounded-xl">
                  <div className="h-[440px] sm:h-[480px] overflow-hidden bg-slate-100 flex items-center justify-center rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/hero image.jpg"
                      alt="Automotive recovery fleet operations and logistics"
                      className="w-full h-full object-cover transition-all duration-700"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION 2: FULL-WIDTH OVERVIEW (Box Type with Shadow for 4 Pillars)
           ========================================================================= */}
        <section id="overview" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E0DBD1]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="max-w-4xl space-y-4 mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2878D0] block font-bold">
                OPERATIONAL INFRASTRUCTURE & PARTNERSHIP
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#121212] leading-tight">
                Your Trusted Partner in{" "}
                <span className="italic text-[#2878D0]">Recovery Operations</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 font-light leading-relaxed max-w-3xl pt-2">
                Our team brings hands-on experience across widely used recovery industry platforms, helping agencies manage workflows, process assignments, and maintain operational consistency.
              </p>
            </div>

            {/* 4 Wide Information Pillars (Box Type with Shadow) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#E0DBD1]">
              
              <div className="bg-white p-7 sm:p-8 border border-[#E0DBD1] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3">
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#2878D0] font-bold">
                  FIELD FLUENCY
                </span>
                <h3 className="font-serif text-2xl text-[#121212] font-medium leading-snug">
                  Industry-Focused Experience
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-light">
                  Direct hands-on understanding of automotive recovery workflows, forwarding requirements, client SLAs, and lender expectations nationwide.
                </p>
              </div>

              <div className="bg-white p-7 sm:p-8 border border-[#E0DBD1] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3">
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#2878D0] font-bold">
                  PLATFORM MASTERY
                </span>
                <h3 className="font-serif text-2xl text-[#121212] font-medium leading-snug">
                  Experienced Platform Handling
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-light">
                  Seamless operation across RDN, Clearplan, I-Beam, and Recovery Connect without requiring repetitive retraining or workflow adjustments.
                </p>
              </div>

              <div className="bg-white p-7 sm:p-8 border border-[#E0DBD1] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3">
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#2878D0] font-bold">
                  LEGAL & RISK
                </span>
                <h3 className="font-serif text-2xl text-[#121212] font-medium leading-snug">
                  Accurate Documentation
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-light">
                  Rigorous vehicle condition reports, high-resolution photographic evidence, and personal property itemization protect against damage claims.
                </p>
              </div>

              <div className="bg-white p-7 sm:p-8 border border-[#E0DBD1] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3">
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#2878D0] font-bold">
                  DISPATCH COVERAGE
                </span>
                <h3 className="font-serif text-2xl text-[#121212] font-medium leading-snug">
                  Reliable Operational Support
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-light">
                  Continuous back-office dispatch and real-time field communication keeping your drivers safe, informed, and consistently moving.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION 3: PLATFORMS IN BIG CAPITAL LETTERS (Includes I-BEAM!)
           ========================================================================= */}
        <section id="platforms" className="py-20 lg:py-28 bg-[#F7F5F0] border-b border-[#E0DBD1]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-14 border-b border-[#E0DBD1] gap-6">
              <div className="max-w-2xl space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2878D0] font-semibold block">
                  TECHNOLOGY & PLATFORM FLUENCY
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#121212] tracking-tight">
                  Experienced Across the Platforms That Power Recovery Operations
                </h2>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-md font-light">
                Our team brings hands-on experience across widely used recovery industry platforms, helping agencies manage workflows, process assignments, and maintain operational consistency.
              </p>
            </div>

            {/* BIG CAPITAL LETTERS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {PLATFORMS_CAPITAL.map((plat) => (
                <div
                  key={plat.name}
                  className="p-8 bg-white border border-[#E0DBD1] rounded-xl flex flex-col justify-between hover:border-[#101D35] transition-all group shadow-xs"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 block mb-3 font-semibold">
                    INTEGRATED PLATFORM
                  </span>
                  
                  {/* BIG CAPITAL LETTER PLATFORM NAME */}
                  <span className="font-mono text-2xl sm:text-3xl font-black tracking-tight text-[#101D35] group-hover:text-[#2878D0] transition-colors leading-none">
                    {plat.name}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 pt-5 mt-4 border-t border-[#F0EBE1] font-light leading-snug">
                    {plat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION 4: ZIG-ZAG SERVICES (Clean User-Uploaded Images, All 10 Services)
           ========================================================================= */}
        <section id="services-zigzag" className="py-20 lg:py-28 bg-[#F7F5F0] border-b border-[#E0DBD1]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-24 lg:space-y-32">
            
            {/* ZIG-ZAG 01: Image Left, Text Right (Order Management & Real-Time Field Support) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6">
                <div className="border border-[#E0DBD1] bg-white p-2.5 sm:p-3 shadow-sm rounded-xl">
                  <div className="h-[380px] sm:h-[440px] overflow-hidden bg-slate-50 flex items-center justify-center rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/acceptdecline.webp"
                      alt="Order management, accepting and declining orders, and route dispatch"
                      className="w-full h-full object-cover transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2878D0] font-bold block">
                  ORDER MANAGEMENT & FIELD OPERATIONS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#121212] leading-tight">
                  Accepting / Declining Orders & Real-Time Field Support
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-light">
                  Assignments from forwarders and lenders require swift, disciplined evaluation. We review incoming orders against your service area parameters, accept eligible files immediately to satisfy client SLA requirements, and plot them directly into Clearplan zones for optimal driver routing.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#E0DBD1]">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Accepting / Declining Orders</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Process incoming assignments rapidly according to agency capacity, mileage margins, and client-specific criteria.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Order Status Updates</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Maintain accurate, timely recovery status updates across RDN, Clearplan, and client forwarder portals without lag.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Real-Time Field Support</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Provide operational coordination, live gate code checks, VIN verifications, and spotter communication for field drivers.
                    </p>
                  </div>
                </div>
              </div>

            </div>


            {/* ZIG-ZAG 02: Text Left, Image Right (Condition Reports & Post-Recovery Docs) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#183B63] font-bold block">
                  COMPLIANCE & DOCUMENTATION AUDITING
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#121212] leading-tight">
                  Condition Reports & Post-Recovery Documentation
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-light">
                  Protecting your repossession business from false damage claims requires rigorous, timestamped photographic evidence and meticulous personal property tracking. We compile comprehensive condition reports across Wombat (ALS) and audit portals to verify tire conditions, mechanical status, and personal property itemization.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#E0DBD1]">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Condition Reports</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Prepare and manage detailed multi-angle condition reports, tire tread captures, odometer readings, and photo uploads.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Post-Recovery Documentation</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Organize police notifications, debtor release authorizations, state compliance paperwork, and legal dockets.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Personal Property Management</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Itemized property custody logs, bag counts, and secure property release tracking protecting agency liability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="border border-[#E0DBD1] bg-white p-2.5 sm:p-3 shadow-sm rounded-xl">
                  <div className="h-[380px] sm:h-[440px] overflow-hidden bg-slate-50 flex items-center justify-center rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/documention.png"
                      alt="Condition reports and post-recovery documentation"
                      className="w-full h-full object-cover transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

            </div>


            {/* ZIG-ZAG 03: Image Left, Text Right (Skip Tracing, Order Loading & Coverage Area) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6">
                <div className="border border-[#E0DBD1] bg-white p-2.5 sm:p-3 shadow-sm rounded-xl">
                  <div className="h-[380px] sm:h-[440px] overflow-hidden bg-slate-50 flex items-center justify-center rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/skip traicng image.webp"
                      alt="Skip tracing intelligence, order loading, and territory coverage"
                      className="w-full h-full object-cover transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2878D0] font-bold block">
                  RECOVERY BACK-OFFICE & ADMINISTRATIVE SUPPORT
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#121212] leading-tight">
                  Skip Tracing, Order Loading & Coverage Area Verification
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-light">
                  Unlocated collateral and delinquent files stall your revenue pipeline. Our dedicated skip tracing researchers cross-reference utility dockets, current employer data, and secondary physical addresses using IDI Core. Simultaneously, our intake desk enters files into your platform without manual backlog.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#E0DBD1]">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Skip Tracing Services</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Support locating vehicle owners and recovery-related information using deep research across IDI Core and specialized databases.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Order Loading</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Manage and process incoming recovery assignments efficiently, attaching title packets, loan dockets, and keys into your dispatch portal.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Coverage Area Verification</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Verify service areas and geographical coverage before processing assignments, safeguarding driver efficiency and fuel overhead.
                    </p>
                  </div>
                </div>
              </div>

            </div>


            {/* ZIG-ZAG 04: Text Left, Image Right (Billing & Invoicing, Driver & Storage Management) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#183B63] font-bold block">
                  FINANCIAL SETTLEMENT & LOT LOGISTICS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#121212] leading-tight">
                  Billing, Invoicing & Driver / Storage Management
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-light">
                  Closing assignments without prompt billing delays cash flow. We assist with billing operations, storage fee reconciliation, mileage fee verification, and forwarder payment documentation so every dollar earned by your field team is invoiced accurately and collected on time.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#E0DBD1]">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Billing & Invoicing</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Assist with billing operations, invoice preparation, fee reconciliation, and payment documentation matching lender agreements and forwarder matrices.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Driver & Storage Management</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Coordinate field driver shift logs, territory coverage assignments, impound lot storage inventory, vehicle redemption appointments, and release custody.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#101D35]">Operational Consistency</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-1">
                      Maintain disciplined daily operational support so agency managers can focus on growing their fleet and securing more assignments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="border border-[#E0DBD1] bg-white p-2.5 sm:p-3 shadow-sm rounded-xl">
                  <div className="h-[380px] sm:h-[440px] overflow-hidden bg-slate-50 flex items-center justify-center rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/invoice image.webp"
                      alt="Billing, invoicing, and recovery lot settlement"
                      className="w-full h-full object-cover transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION 5: INQUIRY DOCKET / CONTACT FORM (Routed to enquiry@improxgroup.com)
           ========================================================================= */}
        <section id="inquiry" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E0DBD1]">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center mb-12 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2878D0] block font-bold">
                OPERATIONAL INQUIRY & INTAKE DOCKET
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#121212]">
                Let&apos;s Make Your Recovery Operations{" "}
                <span className="italic text-[#2878D0]">More Efficient</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 font-light max-w-xl mx-auto leading-relaxed">
                Tell us about your agency and operational requirements. Schedule a personalized demo to explore how our services can support your business.
              </p>
              <div className="pt-2 text-sm font-mono text-slate-600 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                <span>
                  DIRECT DESK:{" "}
                  <a href="tel:+14079000208" className="text-[#2878D0] font-bold hover:underline">
                    +1 407 900 0208
                  </a>
                </span>
                <span className="text-slate-400">·</span>
                <span>
                  EMAIL:{" "}
                  <a href="mailto:enquiry@improxgroup.com" className="text-[#2878D0] font-bold hover:underline">
                    enquiry@improxgroup.com
                  </a>
                </span>
              </div>
            </div>

            {/* The Crisp Editorial Form Container */}
            <div className="bg-white text-[#121212] p-8 sm:p-12 border border-[#E0DBD1] rounded-2xl shadow-lg">
              
              {submittedSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-700 block font-bold">
                    DOCKET SUBMITTED SUCCESSFULLY
                  </span>
                  <h3 className="font-serif text-3xl font-normal text-[#121212]">
                    Inquiry Confirmed
                  </h3>
                  <p className="text-slate-600 text-base max-w-md mx-auto font-light leading-relaxed">
                    Thank you. Your inquiry has been forwarded directly to our operations team at <strong className="text-[#101D35] font-semibold">enquiry@improxgroup.com</strong>. A coordinator will follow up shortly.
                  </p>
                  <div className="p-3 bg-[#EFECE4] inline-block font-mono text-xs font-bold text-slate-800 rounded-md">
                    REFERENCE ID: {refId}
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmittedSuccess(false)}
                      className="px-6 py-2.5 text-xs font-mono uppercase tracking-[0.18em] font-bold bg-[#101D35] text-white hover:bg-[#183B63] transition-colors rounded-lg"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* First & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 mb-1.5 font-bold">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5CEC2] rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#101D35]"
                      />
                      {errors.firstName && <p className="text-rose-600 text-xs mt-1 font-mono">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 mb-1.5 font-bold">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Smith"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5CEC2] rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#101D35]"
                      />
                      {errors.lastName && <p className="text-rose-600 text-xs mt-1 font-mono">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Business Email & Contact Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 mb-1.5 font-bold">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="john@agencyrecovery.com"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5CEC2] rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#101D35]"
                      />
                      {errors.businessEmail && <p className="text-rose-600 text-xs mt-1 font-mono">{errors.businessEmail}</p>}
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 mb-1.5 font-bold">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5CEC2] rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#101D35]"
                      />
                      {errors.contactNumber && <p className="text-rose-600 text-xs mt-1 font-mono">{errors.contactNumber}</p>}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 mb-1.5 font-bold">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Apex Recovery Operations LLC"
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5CEC2] rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#101D35]"
                    />
                    {errors.companyName && <p className="text-rose-600 text-xs mt-1 font-mono">{errors.companyName}</p>}
                  </div>

                  {/* Operational Topic Dropdown */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 mb-1.5 font-bold">
                      What Would You Like to Talk About? *
                    </label>
                    <select
                      name="talkAbout"
                      value={formData.talkAbout}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5CEC2] rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#101D35]"
                    >
                      <option value="">-- Select an Operational Area --</option>
                      {TALK_ABOUT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.talkAbout && <p className="text-rose-600 text-xs mt-1 font-mono">{errors.talkAbout}</p>}
                  </div>

                  {/* Tell Us More About Your Requirements */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 mb-1.5 font-bold">
                      Tell Us More About Your Requirements (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Current monthly volume, primary forwarding clients, platforms used..."
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5CEC2] rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#101D35]"
                    />
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-0.5 h-4 w-4 border-[#D5CEC2] rounded text-[#101D35] focus:ring-0"
                      />
                      <span className="text-sm text-slate-600 leading-normal">
                        I agree to be contacted regarding my inquiry. (Submissions route to <strong className="font-semibold text-slate-800">enquiry@improxgroup.com</strong>)
                      </span>
                    </label>
                    {errors.consent && <p className="text-rose-600 text-xs mt-1 font-mono">{errors.consent}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 font-mono text-xs uppercase tracking-[0.25em] font-bold text-white bg-[#101D35] hover:bg-[#183B63] transition-all disabled:opacity-60 rounded-xl border border-[#101D35]"
                    >
                      {isSubmitting ? "ROUTING TO ENQUIRY@IMPROXGROUP.COM..." : "SCHEDULE MY FREE DEMO"}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </section>

      </main>

      {/* Editorial Colophon / Minimalist Footer */}
      <footer className="bg-[#EFECE4] text-slate-600 py-12 border-t border-[#E0DBD1] text-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col md:flex-row items-baseline justify-between gap-6">
          <div className="space-y-1">
            <span className="font-serif text-lg font-normal text-[#121212]">
              Repo<span className="italic text-[#2878D0]">Desk</span> Solutions
            </span>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Professional operational, administrative, and recovery support services for US repossession agencies.
            </p>
          </div>
          <div className="font-mono text-xs text-slate-700 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              PHONE:{" "}
              <a href="tel:+14079000208" className="text-[#121212] hover:text-[#2878D0] font-bold">
                +1 407 900 0208
              </a>
            </span>
            <span className="text-slate-400">·</span>
            <span>
              DESK:{" "}
              <a href="mailto:enquiry@improxgroup.com" className="text-[#121212] hover:text-[#2878D0] font-bold">
                enquiry@improxgroup.com
              </a>
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
