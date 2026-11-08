"use client";

import { useState } from "react";
import {
  Eye,
  Telescope,
  Map,
  Palette,
  Send,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function WorkflowSection() {
  const [selectedStep, setSelectedStep] = useState(null);

  const steps = [
    {
      num: "01",
      title: "Understand",
      icon: Eye,
      description:
        "Analyse your business, brand, market and audience with deep AI intelligence.",
      detail:
        "AI synthesizes your unique value propositions, ICP personas, and product catalogs to form a foundational intelligence graph.",
    },
    {
      num: "02",
      title: "Discover",
      icon: Telescope,
      description:
        "Identify competitors, market gaps and growth opportunities you didn't know existed.",
      detail:
        "Continuously monitors rival messaging, search engines, and AI answer platforms to spotlight untapped market share.",
    },
    {
      num: "03",
      title: "Strategise",
      icon: Map,
      description:
        "Build a prioritised, actionable growth roadmap aligned to your objectives.",
      detail:
        "Translates raw signals into high-impact, sprint-ready growth roadmaps ranked by estimated ROI and resource effort.",
    },
    {
      num: "04",
      title: "Create",
      icon: Palette,
      description:
        "Generate high-converting campaigns, tailored landing pages and brand-aligned assets.",
      detail:
        "Produces tone-perfect copy, SEO briefs, ad variants, and multi-channel creative tailored to your brand voice.",
    },
    {
      num: "05",
      title: "Distribute",
      icon: Send,
      description:
        "Amplify your message across search, AI answer engines, and creator partnerships.",
      detail:
        "Deploys multi-channel distribution across search visibility, influencer discovery, and programmatic content syndication.",
    },
    {
      num: "06",
      title: "Optimise",
      icon: TrendingUp,
      description:
        "Continuously track performance, benchmark rivals, and scale winning initiatives.",
      detail:
        "Closes the feedback loop with automated metric monitoring, win/loss tracking, and algorithmic growth iterations.",
    },
  ];

  return (
    <section
      id="workflow"
      className="w-full px-6 sm:px-12 md:px-20 py-20 bg-[#0b0a09]"
      data-component="@components/WorkflowSection.jsx"
    >
      <div className="border-t border-[#2a2825] pt-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#c8f04d] uppercase mb-4">
            How It Works
          </p>
          <h2
            className="font-semibold text-[#f0ede8] mb-4 tracking-tight text-3xl sm:text-4xl md:text-[44px] leading-[1.1] max-w-[580px]"
          >
            Insights are useful. Execution creates growth.
          </h2>
          <p
            className="text-base text-[#8a8580] max-w-[460px] leading-[1.7]"
          >
            Okiza takes you from first understanding to measurable results — in one
            connected workflow.
          </p>
        </div>

        {/* 6-Step Connected Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-0 relative">
          {/* Connector line (hidden on mobile, visible on desktop) */}
          <div
            className="hidden lg:block absolute top-7 left-8 right-8 border-t border-[#2a2825] z-0 pointer-events-none"
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHighlighted = idx === 0 || selectedStep === idx;

            return (
              <div
                key={step.num}
                onClick={() => setSelectedStep(idx)}
                className="flex flex-col items-center text-center px-4 relative z-10 group cursor-pointer"
              >
                {/* Circle Icon Badge */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-110 ${
                    isHighlighted
                      ? "bg-[#c8f04d]/10 border-[#c8f04d]/40 text-[#c8f04d] shadow-[0_0_20px_rgba(200,240,77,0.25)]"
                      : "bg-[#161513] border-[#2a2825] text-[#8a8580] group-hover:border-[#c8f04d]/40 group-hover:text-[#c8f04d]"
                  }`}
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>

                <span
                  className={`text-xs mb-1 font-mono ${
                    isHighlighted ? "text-[#c8f04d] font-semibold" : "text-[#8a8580]"
                  }`}
                >
                  {step.num}
                </span>

                <h4 className="font-semibold text-[#f0ede8] mb-2 text-base group-hover:text-[#c8f04d] transition-colors">
                  {step.title}
                </h4>

                <p className="text-xs text-[#8a8580] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card when clicked */}
        {selectedStep !== null && (
          <div className="mt-12 p-6 rounded-xl border border-[#c8f04d]/30 bg-[#161513] max-w-2xl mx-auto shadow-2xl animate-fadeIn">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs px-2.5 py-1 rounded bg-[#c8f04d]/10 text-[#c8f04d] font-mono font-semibold">
                STEP {steps[selectedStep].num}
              </span>
              <h5 className="font-semibold text-lg text-[#f0ede8]">
                {steps[selectedStep].title}: Operational Deep Dive
              </h5>
            </div>
            <p className="text-sm text-[#8a8580] leading-relaxed">
              {steps[selectedStep].detail}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

