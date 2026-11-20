"use client";

import React, { useState } from "react";
import { faqData } from "@/data/faqData";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export default function FAQSection() {
  const [openIds, setOpenIds] = useState<string[]>([faqData[0].id]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F4F7FA] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#183B63] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-[#2878D0]" />
            <span>Common Inquiries</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Clear answers about our operational support, platform capabilities, and onboarding integration for repossession companies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-[#101D35] hover:text-[#2878D0] focus:outline-none focus-visible:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#2878D0] bg-blue-50 px-2 py-0.5 rounded-md">
                      0{index + 1}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                      isOpen
                        ? "bg-[#2878D0] text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in slide-in-from-top-1 duration-200"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-bold text-[#101D35] text-base">Have a specific operational question?</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Our operational specialists are happy to discuss your specific agency platform setups.
            </p>
          </div>
          <a
            href="#demo-form"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#2878D0] hover:bg-[#1e63b0] text-white transition-colors shrink-0"
          >
            Ask in Demo Session
          </a>
        </div>

      </div>
    </section>
  );
}
