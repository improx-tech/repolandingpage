"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  ArrowRight
} from "lucide-react";
import LegalModals from "./LegalModals";

export default function Footer() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <footer id="contact" className="bg-[#0a1120] text-slate-300 border-t border-slate-800">
        
        {/* Top Pre-Footer Call to Action Banner */}
        <div className="border-b border-slate-800/80 bg-gradient-to-r from-[#101D35] via-[#183B63] to-[#101D35] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#43BBD8] block mb-1">
                Take Your Agency Operations to the Next Level
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Eliminate Your Back-Office Bottlenecks?
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                Schedule a 20-minute operational review to see how we manage intake, status updates, and condition reports.
              </p>
            </div>
            <a
              href="#demo-form"
              onClick={(e) => handleScrollTo(e, "#demo-form")}
              className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#2878D0] hover:bg-[#1e63b0] shadow-lg shadow-[#2878D0]/30 transition-all hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main Footer Links & Company Information */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Column 1: Company Profile (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-4">
              <a
                href="#hero"
                onClick={(e) => handleScrollTo(e, "#hero")}
                className="flex items-center gap-3 focus:outline-none"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#183B63] to-[#2878D0] flex items-center justify-center text-white shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#43BBD8]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white leading-none">
                    Repo<span className="text-[#2878D0]">Desk</span>
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mt-1">
                    Agency Support Services
                  </span>
                </div>
              </a>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
                We provide professional back-office, operational, recovery support, and documentation services to US repossession agencies. Helping recovery company owners streamline daily workflows, reduce administrative workload, and maintain operational consistency.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Active US Operations Support Desk</span>
              </div>
            </div>

            {/* Column 2: Services Quick Links (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Core Support Services
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#43BBD8] transition-colors">
                    Accepting / Declining Orders
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#43BBD8] transition-colors">
                    Order Status Updates
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#43BBD8] transition-colors">
                    Vehicle Condition Reports
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#43BBD8] transition-colors">
                    Real-Time Field Coordination
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#43BBD8] transition-colors">
                    Skip Tracing & Locates
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#43BBD8] transition-colors">
                    Order Loading & Ingestion
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#43BBD8] transition-colors">
                    Coverage Area Verification
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#43BBD8] transition-colors">
                    Billing & Invoicing Preparation
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Technology & Platforms (lg:col-span-2) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Platform Experience
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#platforms" onClick={(e) => handleScrollTo(e, "#platforms")} className="hover:text-[#43BBD8] transition-colors">RDN Platform</a></li>
                <li><a href="#platforms" onClick={(e) => handleScrollTo(e, "#platforms")} className="hover:text-[#43BBD8] transition-colors">Recovery Connect</a></li>
                <li><a href="#platforms" onClick={(e) => handleScrollTo(e, "#platforms")} className="hover:text-[#43BBD8] transition-colors">Clearplan Logistics</a></li>
                <li><a href="#platforms" onClick={(e) => handleScrollTo(e, "#platforms")} className="hover:text-[#43BBD8] transition-colors">ClearData LPR</a></li>
                <li><a href="#platforms" onClick={(e) => handleScrollTo(e, "#platforms")} className="hover:text-[#43BBD8] transition-colors">Wombat (ALS)</a></li>
                <li><a href="#platforms" onClick={(e) => handleScrollTo(e, "#platforms")} className="hover:text-[#43BBD8] transition-colors">IDI Core Intelligence</a></li>
                <li><a href="#platforms" onClick={(e) => handleScrollTo(e, "#platforms")} className="hover:text-[#43BBD8] transition-colors">WebTransfer</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Information Placeholders (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Contact & Operating Hours
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#43BBD8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">+1 (800) 555-REPO</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">(Identifiable Placeholder)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#43BBD8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">operations@repodesk-placeholder.com</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">(Identifiable Placeholder)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#43BBD8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-300">Serving Repossession Agencies Nationwide</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">United States Operations</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#43BBD8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-300">Mon – Fri: 8:00 AM – 8:00 PM EST</span>
                    <span className="text-[10px] text-slate-500">Emergency & On-Hook Queue Monitoring Available</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <p>© {new Date().getFullYear()} RepoDesk Solutions. All rights reserved. Specialized B2B Support for US Repossession Agencies.</p>
              <p className="text-[11px] text-slate-600 mt-1">
                Notice: All company phone numbers, addresses, and email contacts on this demonstration website are clearly identifiable placeholders pending client onboarding.
              </p>
            </div>

            <div className="flex items-center gap-6 shrink-0">
              <button
                type="button"
                onClick={() => setLegalModal("privacy")}
                className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setLegalModal("terms")}
                className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Document Modals */}
      <LegalModals
        isOpen={legalModal !== null}
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </>
  );
}
