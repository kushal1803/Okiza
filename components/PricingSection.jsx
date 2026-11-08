"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      badge: "For Emerging Brands",
      price: annual ? 79 : 99,
      desc: "Essential intelligence and competitor monitoring for single brands.",
      features: [
        "Up to 5 Tracked Competitors",
        "Weekly Brand Health & Score Audits",
        "Organic & AI Search Benchmarking",
        "3 Growth Opportunity Playbooks / mo",
        "Single Brand Workspace",
      ],
      isPopular: false,
    },
    {
      name: "Growth",
      badge: "Most Popular",
      price: annual ? 199 : 249,
      desc: "Comprehensive growth OS for fast-scaling companies and marketing teams.",
      features: [
        "Up to 20 Tracked Competitors",
        "Real-time Competitor Campaign Alerts",
        "Full AI Search & LLM Engine Tracking",
        "Creative Studio & Automated Ad Generator",
        "Influencer Discovery & Creator Database",
        "Priority Growth Roadmap Recommendations",
        "Up to 5 Team Seats",
      ],
      isPopular: true,
    },
    {
      name: "Scale",
      badge: "For Enterprises & Agencies",
      price: annual ? 499 : 599,
      desc: "Multi-brand intelligence, custom API integrations, and dedicated advisory.",
      features: [
        "Unlimited Competitor Tracking",
        "Custom Keyword & Query Cluster Monitoring",
        "Omnichannel Attribution & Performance Sync",
        "Dedicated Growth Strategist Review",
        "Unlimited Workspaces & Team Seats",
        "REST API & Webhooks Access",
        "SLA & Dedicated Account Manager",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="w-full px-6 sm:px-12 md:px-20 py-24 bg-[#000000]">
      <div className="border-t border-[#262626] pt-20">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#ffffff] uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-semibold text-[#ffffff] mb-4 tracking-tight text-3xl sm:text-4xl md:text-[44px] leading-[1.1]">
            Predictable pricing for exponential growth.
          </h2>
          <p className="text-base text-[#a1a1aa] max-w-[500px] leading-relaxed mb-8">
            Choose the intelligence plan that fits your growth ambitions. All plans include
            a 14-day risk-free trial.
          </p>

          {/* Billing Switch */}
          <div className="flex items-center gap-2 bg-[#111111] p-1.5 rounded-full border border-[#262626]">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                !annual ? "bg-[#262626] text-[#ffffff]" : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                annual ? "bg-[#ffffff] text-[#000000] font-semibold" : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              <span>Annual billing</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#000000]/15 font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between border relative transition-all duration-300 ${
                p.isPopular
                  ? "bg-[#111111] border-[#ffffff] shadow-[0_0_35px_rgba(255,255,255,0.12)] scale-[1.02]"
                  : "bg-[#111111]/60 border-[#262626] hover:border-[#404040]"
              }`}
            >
              {p.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#ffffff] text-[#000000] text-[11px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 fill-[#000000]" />
                  <span>{p.badge}</span>
                </div>
              )}

              <div>
                {!p.isPopular && (
                  <span className="text-xs text-[#a1a1aa] font-medium block mb-2">
                    {p.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#ffffff] mb-2">{p.name}</h3>
                <p className="text-xs text-[#a1a1aa] mb-6 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-extrabold text-[#ffffff] font-mono">
                    ${p.price}
                  </span>
                  <span className="text-xs text-[#a1a1aa]">/ month</span>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-[#262626]">
                  <span className="text-xs font-semibold text-[#ffffff] uppercase tracking-wider mb-1">
                    What&apos;s included:
                  </span>
                  {p.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#ffffff]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#ffffff]" strokeWidth={3} />
                      </div>
                      <span className="text-xs text-[#a1a1aa] leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#analyze"
                  className={`w-full py-3 rounded-md font-semibold text-sm text-center block transition-all cursor-pointer ${
                    p.isPopular
                      ? "bg-[#ffffff] hover:bg-[#e4e4e7] text-[#000000] shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                      : "bg-[#262626] hover:bg-[#333333] text-[#ffffff]"
                  }`}
                >
                  Start 14-Day Free Trial
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
