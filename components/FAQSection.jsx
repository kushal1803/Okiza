"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "How does Okiza track AI answer engine visibility?",
      a: "Okiza runs continuous automated synthetic queries across major generative AI platforms including ChatGPT, Gemini, Perplexity, and Claude. We measure mention frequencies, brand citation authority, competitive sentiment, and prompt placement to score your brand's AI search visibility.",
    },
    {
      q: "Can Okiza integrate with our existing CRM and analytics tools?",
      a: "Yes. Okiza provides native bidirectional connectors for Google Analytics 4, Google Search Console, HubSpot, Shopify, Meta Ads, and Stripe. You can also leverage our comprehensive REST API and webhooks on Growth and Scale plans.",
    },
    {
      q: "How does the Creative Studio ensure content doesn't sound like generic AI?",
      a: "Unlike standard prompt wrappers, Okiza builds a persistent Brand Intelligence Graph from your actual customer reviews, high-performing sales transcripts, brand guidelines, and tone-of-voice rules. Every output is strictly anchored to your established brand syntax.",
    },
    {
      q: "How long before we see measurable growth results?",
      a: "Most customers discover immediate quick-win opportunities (such as low-competition competitor query gaps) within their first 24 hours. Measurable organic traffic and AI search visibility improvements typically materialize within 30 to 60 days of executing recommended playbooks.",
    },
    {
      q: "Is there a long-term contract or cancellation penalty?",
      a: "No. You can switch between monthly and annual plans anytime or cancel directly from your settings dashboard with zero lock-in or cancellation fees.",
    },
  ];

  return (
    <section id="faq" className="w-full px-6 sm:px-12 md:px-20 py-20 bg-[#000000]">
      <div className="border-t border-[#262626] pt-20 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <p className="text-xs font-medium tracking-widest text-[#ffffff] uppercase mb-4">
            Got Questions?
          </p>
          <h2 className="font-semibold text-[#ffffff] mb-4 tracking-tight text-3xl sm:text-4xl leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#a1a1aa] max-w-md">
            Everything you need to know about the Okiza platform and our AI growth operating system.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-lg border border-[#262626] bg-[#111111] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-[#18181b] transition-colors"
                >
                  <span className="font-medium text-[#ffffff] text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#a1a1aa] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#ffffff]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed border-t border-[#262626]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
