"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  RefreshCw,
  Copy,
  Check
} from "lucide-react";

interface FormState {
  firstName: string;
  lastName: string;
  businessEmail: string;
  contactNumber: string;
  companyName: string;
  talkAbout: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  consent: boolean;
}

const TALK_ABOUT_OPTIONS = [
  "Order Management & Processing",
  "Skip Tracing Services",
  "Order Loading",
  "Coverage Area Verification",
  "Billing & Invoicing",
  "Post-Recovery Documentation",
  "Real-Time Field Support",
  "Complete Back-Office Support",
  "Platform & Workflow Support",
  "Other"
];

const TIME_OPTIONS = [
  "09:00 AM - 10:00 AM EST",
  "10:30 AM - 11:30 AM EST",
  "01:00 PM - 02:00 PM EST",
  "02:30 PM - 03:30 PM EST",
  "04:00 PM - 05:00 PM EST",
  "Flexible / Any Morning",
  "Flexible / Any Afternoon"
];

export default function DemoFormSection() {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    businessEmail: "",
    contactNumber: "",
    companyName: "",
    talkAbout: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    submissionId: string;
    details: {
      agencyName: string;
      contactPerson: string;
      businessEmail: string;
      topic: string;
      preferredDate: string;
      preferredTime: string;
      receivedAt: string;
    };
  } | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Today's date string in YYYY-MM-DD format for min date restriction
  const todayStr = new Date().toISOString().split("T")[0];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = "Business email is required.";
    } else if (!emailRegex.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = "Please enter a valid business email address.";
    }

    const phoneRegex = /^[0-9+()\-.\s]{7,25}$/;
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact phone number is required.";
    } else if (!phoneRegex.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Please enter a valid contact telephone number.";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Repossession agency or company name is required.";
    }

    if (!formData.talkAbout) {
      newErrors.talkAbout = "Please select a discussion topic.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to be contacted regarding your inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to schedule demo request.");
      }

      setSubmissionSuccess({
        submissionId: result.submissionId,
        details: result.details
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to connect to the scheduling service.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyId = () => {
    if (submissionSuccess) {
      navigator.clipboard.writeText(submissionSuccess.submissionId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      businessEmail: "",
      contactNumber: "",
      companyName: "",
      talkAbout: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
      consent: false
    });
    setSubmissionSuccess(null);
    setErrors({});
  };

  return (
    <section id="demo-form" className="py-20 lg:py-28 bg-[#101D35] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2878D0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#43BBD8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183B63] border border-[#2878D0]/40 text-[#43BBD8] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#43BBD8]" />
            <span>Personalized Operational Walkthrough</span>
          </div>
          
          {/* Exact Required Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Make Your Recovery Operations More Efficient
          </h2>
          
          {/* Exact Required Supporting Text */}
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Tell us about your agency and operational requirements. Schedule a personalized demo to explore how our services can support your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Demo Value & Agency Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#183B63]/40 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xs">
              <h3 className="text-xl font-bold text-white mb-3">
                What to Expect During Your Demo
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                A focused 20-minute session with a recovery operations specialist to evaluate your workflow and platform requirements:
              </p>

              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#2878D0]/20 border border-[#2878D0]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#43BBD8]" />
                  </div>
                  <div>
                    <strong className="text-white block">Workflow Assessment</strong>
                    <span className="text-xs text-slate-300">
                      We review your current order loading times, RDN / Clearplan setup, and condition report turnaround.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#2878D0]/20 border border-[#2878D0]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#43BBD8]" />
                  </div>
                  <div>
                    <strong className="text-white block">Platform Integration Plan</strong>
                    <span className="text-xs text-slate-300">
                      How we use authorized delegate sub-logins to maintain security without sharing master credentials.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#2878D0]/20 border border-[#2878D0]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#43BBD8]" />
                  </div>
                  <div>
                    <strong className="text-white block">Custom Operational Scope</strong>
                    <span className="text-xs text-slate-300">
                      Whether you need intake support, skip tracing, condition reports, or complete back-office coverage.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/80 flex items-center gap-3 text-xs text-slate-400">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Strict non-disclosure standards. Your agency client lists and account data remain strictly confidential.</span>
              </div>
            </div>

            {/* Quick Contact Info Box */}
            <div className="bg-[#183B63]/20 border border-slate-800 rounded-2xl p-6 text-xs text-slate-300 space-y-2">
              <p className="font-semibold text-slate-200">Need Immediate Operational Assistance?</p>
              <p>Email our desk: <span className="font-mono text-[#43BBD8]">operations@repodesk-placeholder.com</span></p>
              <p>Call toll-free: <span className="font-mono text-slate-200">+1 (800) 555-REPO</span> <span className="text-slate-500">(Placeholder)</span></p>
            </div>
          </div>

          {/* Right Column: Premium Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200 relative">
              
              {submissionSuccess ? (
                /* Success State Card */
                <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#101D35] mb-2">
                    Demo Request Confirmed
                  </h3>
                  
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    Thank you. We have received your agency&apos;s operational requirements and registered your session.
                  </p>

                  <div className="bg-[#F4F7FA] rounded-xl p-5 border border-slate-200 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto mb-6">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-500 font-medium">Confirmation Reference</span>
                      <div className="flex items-center gap-1.5 font-mono font-bold text-[#183B63]">
                        <span>{submissionSuccess.submissionId}</span>
                        <button
                          type="button"
                          onClick={handleCopyId}
                          className="p-1 hover:bg-slate-200 rounded text-slate-500"
                          title="Copy Confirmation ID"
                        >
                          {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Agency Name:</span>
                      <span className="font-semibold text-slate-800">{submissionSuccess.details.agencyName}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Contact:</span>
                      <span className="font-semibold text-slate-800">{submissionSuccess.details.contactPerson}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Discussion Focus:</span>
                      <span className="font-semibold text-[#2878D0]">{submissionSuccess.details.topic}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Preferred Timeframe:</span>
                      <span className="font-semibold text-slate-800">
                        {submissionSuccess.details.preferredDate} ({submissionSuccess.details.preferredTime})
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-6">
                    An operational coordinator will reach out shortly via email to confirm the video meeting link and review any requested prep materials.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-[#101D35] hover:bg-[#183B63] text-white transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Submit Another Operational Request</span>
                  </button>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {submitError && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold">Submission Failed</strong>
                        <span>{submitError}</span>
                      </div>
                    </div>
                  )}

                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        First Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="e.g. John"
                          aria-invalid={!!errors.firstName}
                          aria-describedby={errors.firstName ? "firstName-error" : undefined}
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none ${
                            errors.firstName
                              ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                              : "border-slate-300 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0]"
                          }`}
                        />
                      </div>
                      {errors.firstName && (
                        <p id="firstName-error" className="mt-1 text-xs text-rose-600 font-medium">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Last Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="e.g. Smith"
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? "lastName-error" : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none ${
                          errors.lastName
                            ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                            : "border-slate-300 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0]"
                        }`}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="mt-1 text-xs text-rose-600 font-medium">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessEmail" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Business Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="businessEmail"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="john@agencyrecovery.com"
                        aria-invalid={!!errors.businessEmail}
                        aria-describedby={errors.businessEmail ? "businessEmail-error" : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none ${
                          errors.businessEmail
                            ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                            : "border-slate-300 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0]"
                        }`}
                      />
                      {errors.businessEmail && (
                        <p id="businessEmail-error" className="mt-1 text-xs text-rose-600 font-medium">{errors.businessEmail}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contactNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Contact Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        aria-invalid={!!errors.contactNumber}
                        aria-describedby={errors.contactNumber ? "contactNumber-error" : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none ${
                          errors.contactNumber
                            ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                            : "border-slate-300 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0]"
                        }`}
                      />
                      {errors.contactNumber && (
                        <p id="contactNumber-error" className="mt-1 text-xs text-rose-600 font-medium">{errors.contactNumber}</p>
                      )}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Apex Recovery Services LLC"
                      aria-invalid={!!errors.companyName}
                      aria-describedby={errors.companyName ? "companyName-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none ${
                        errors.companyName
                          ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                          : "border-slate-300 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0]"
                      }`}
                    />
                    {errors.companyName && (
                      <p id="companyName-error" className="mt-1 text-xs text-rose-600 font-medium">{errors.companyName}</p>
                    )}
                  </div>

                  {/* Topic Select */}
                  <div>
                    <label htmlFor="talkAbout" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      What Would You Like to Talk About? <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="talkAbout"
                      name="talkAbout"
                      value={formData.talkAbout}
                      onChange={handleChange}
                      aria-invalid={!!errors.talkAbout}
                      aria-describedby={errors.talkAbout ? "talkAbout-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white transition-colors focus:outline-none ${
                        errors.talkAbout
                          ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                          : "border-slate-300 focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0]"
                      }`}
                    >
                      <option value="">-- Select Your Area of Interest --</option>
                      {TALK_ABOUT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.talkAbout && (
                      <p id="talkAbout-error" className="mt-1 text-xs text-rose-600 font-medium">{errors.talkAbout}</p>
                    )}
                  </div>

                  {/* Demo Schedule Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Demo Date (Optional)
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        min={todayStr}
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0]"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Demo Time (Optional)
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0]"
                      >
                        <option value="">-- Any Available Slot --</option>
                        {TIME_OPTIONS.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes / Optional Requirements */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Tell Us More About Your Requirements (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Current monthly order volume, primary forwarding clients, software platforms used, or particular pain points..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2878D0] focus:ring-1 focus:ring-[#2878D0]"
                    />
                  </div>

                  {/* Required Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        aria-invalid={!!errors.consent}
                        aria-describedby={errors.consent ? "consent-error" : undefined}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#2878D0] focus:ring-[#2878D0]"
                      />
                      <span className="text-xs text-slate-600 leading-normal">
                        I agree to be contacted regarding my inquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="consent-error" className="mt-1 text-xs text-rose-600 font-medium pl-7">{errors.consent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-bold text-white bg-[#2878D0] hover:bg-[#1e63b0] shadow-lg shadow-[#2878D0]/30 transition-all hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2878D0] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Processing Your Scheduling Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Schedule My Free Demo</span>
                        </>
                      )}
                    </button>
                    <p className="mt-2.5 text-center text-[11px] text-slate-500">
                      Zero obligation. Direct conversation with recovery operations professionals.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
