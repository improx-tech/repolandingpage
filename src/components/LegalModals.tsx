"use client";

import React from "react";
import { X, ShieldCheck, FileText } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export default function LegalModals({ isOpen, type, onClose }: LegalModalProps) {
  if (!isOpen || !type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#101D35] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === "privacy" ? (
              <ShieldCheck className="w-5 h-5 text-[#43BBD8]" />
            ) : (
              <FileText className="w-5 h-5 text-[#43BBD8]" />
            )}
            <h3 id="legal-modal-title" className="font-bold text-lg">
              {type === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-xs">
            <strong>Placeholder Notice:</strong> This document represents a standard operational agreement template for RepoDesk Solutions. Final corporate legal disclosures will be updated upon client onboarding.
          </div>

          {type === "privacy" ? (
            <>
              <h4 className="font-bold text-slate-800 text-base">1. Information We Collect</h4>
              <p>
                RepoDesk Solutions provides operational and administrative back-office support to licensed US repossession agencies. In providing our services, we may receive business contact details (name, email, telephone, company name) submitted through this website, as well as operational assignment data processed on behalf of client agencies within authorized platforms (RDN, Clearplan, Recovery Connect).
              </p>

              <h4 className="font-bold text-slate-800 text-base">2. Gramm-Leach-Bliley Act (GLBA) & NPI Confidentiality</h4>
              <p>
                We treat all non-public personal information (NPI) pertaining to borrowers and vehicle owners with strict confidentiality. All operational data handled during skip tracing, condition reports, and assignment processing remains the exclusive property of the contracting repossession agency and its forwarding clients.
              </p>

              <h4 className="font-bold text-slate-800 text-base">3. Use of Information</h4>
              <p>
                Inquiries submitted via our scheduling forms are used solely to coordinate demo sessions, assess agency requirements, and establish business communications. We do not sell, rent, or lease agency information or client data to third parties.
              </p>

              <h4 className="font-bold text-slate-800 text-base">4. Data Security Standards</h4>
              <p>
                We enforce secure credential management, role-based sub-user authorizations, encrypted communication protocols, and strict non-disclosure obligations across all operational team members.
              </p>

              <h4 className="font-bold text-slate-800 text-base">5. Contact Information</h4>
              <p>
                For privacy compliance inquiries, contact our data protection desk at: <br />
                <span className="font-mono text-slate-800">privacy@repodesk-placeholder.com</span> (Placeholder)
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-slate-800 text-base">1. Operational Scope</h4>
              <p>
                RepoDesk Solutions operates as an independent administrative and operational back-office service provider assisting automotive repossession agencies. We do not own recovery equipment directly, nor do we act as a recovery forwarding broker; all services are rendered strictly as operational support delegates under the direction of the contracting agency.
              </p>

              <h4 className="font-bold text-slate-800 text-base">2. Platform Access & Authorization</h4>
              <p>
                Clients agree to provision dedicated, non-shared sub-user accounts on platforms such as RDN, Clearplan, Recovery Connect, or Wombat. The contracting agency maintains complete administrative control over credential permissions and revocations at all times.
              </p>

              <h4 className="font-bold text-slate-800 text-base">3. Compliance with Applicable Law</h4>
              <p>
                All back-office activities, skip tracing research, and condition documentation are executed in strict alignment with applicable state and federal laws governing collateral recovery, consumer privacy, and repossession notices.
              </p>

              <h4 className="font-bold text-slate-800 text-base">4. Limitation of Liability</h4>
              <p>
                RepoDesk Solutions exercises reasonable professional diligence in processing assignments and status updates. However, ultimate recovery decisions and field conduct remain the sole responsibility of the licensed recovery agency.
              </p>

              <h4 className="font-bold text-slate-800 text-base">5. Governing Terms</h4>
              <p>
                These terms are governed by the operational master service agreement (MSA) executed between RepoDesk Solutions and contracting recovery companies upon formal onboarding.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-lg bg-[#101D35] hover:bg-[#183B63] text-white transition-colors"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
}
