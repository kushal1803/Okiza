"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Megaphone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  Zap,
  Star,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export default function InfluencerAgentPage() {
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website.trim()) {
      setSubmitted(true);
    }
  };

  const sampleCreators = [
    {
      name: "Alex Rivera",
      handle: "@arivera_growth",
      platform: "X (Twitter)",
      followers: "142K",
      niche: "B2B SaaS & AI",
      engagement: "4.8%",
      rate: "$450 / post",
      match: "98% Match",
      verified: true,
    },
    {
      name: "Sarah Chen",
      handle: "in/sarahchen-scale",
      platform: "LinkedIn",
      followers: "89K",
      niche: "Product Strategy & Startups",
      engagement: "5.2%",
      rate: "$650 / post",
      match: "96% Match",
      verified: true,
    },
    {
      name: "Marcus Vance",
      handle: "@marcus_techradar",
      platform: "X (Twitter)",
      followers: "220K",
      niche: "DevTools & Cloud Infrastructure",
      engagement: "3.9%",
      rate: "$800 / post",
      match: "94% Match",
      verified: true,
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Input Your Brief",
      desc: "Provide your URL or target ICP. The agent scans your positioning, audience, and value proposition.",
    },
    {
      step: "02",
      title: "Match & Lock Rates",
      desc: "AI identifies creators on X and LinkedIn, negotiates rates directly within your target budget, and drafts contracts.",
    },
    {
      step: "03",
      title: "Approve Deliverables",
      desc: "Review drafts in your brand voice before publication. Provide 1-click feedback or instant approval.",
    },
    {
      step: "04",
      title: "Automated Escrow Payout",
      desc: "Deliverable verification triggers automated payout. Zero manual invoices, zero back-and-forth emails.",
    },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      {/* Top sticky navigation bar */}
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION matching user screenshot */}
        <section className="w-full pt-20 pb-24 md:pt-28 md:pb-32 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f97316]/5 blur-[120px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge matching screenshot */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase font-sans">
              OKIZA AI CMO
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#e4e4e7] font-medium">
              <Megaphone className="w-3.5 h-3.5 text-[#f97316]" strokeWidth={2} />
              <span>Influencer Agent</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            Influencer Agent
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            The AI influencer marketing platform for X and LinkedIn. Match creators,
            lock rates, track deliverables, and auto-pay, from brief to payout, all in one
            conversation. No agency.
          </p>

          {/* Interactive Input Bar */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
            <div className="p-1.5 rounded-2xl bg-[#242120] border border-[#383332] shadow-2xl flex items-center justify-between gap-2 focus-within:border-[#524b48] transition-all">
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter your website"
                className="bg-transparent text-white placeholder-[#71717a] px-4 py-2.5 text-sm sm:text-base outline-none flex-1 min-w-0"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#d4d4d8] hover:bg-white text-black font-semibold text-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Launch a Campaign</span>
                <span className="text-base font-bold">→</span>
              </button>
            </div>
            <p className="text-xs text-[#71717a] mt-4">
              7-day free trial · Cancel anytime
            </p>
          </form>

          {/* Feedback on launch click */}
          {submitted && (
            <div className="mt-6 p-4 rounded-xl bg-[#1c1a19] border border-[#383332] max-w-md text-sm text-[#4ade80] flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>
                Analyzing <strong>{website}</strong>... Found 42 verified creator matches for your niche!
              </span>
            </div>
          )}
        </section>

        {/* LIVE CREATOR MATCH RADAR SHOWCASE */}
        <section className="w-full max-w-6xl mx-auto px-6 pb-24">
          <div className="rounded-3xl border border-[#2e2a28] bg-[#141211]/90 p-6 md:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#262423]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#f97316] block mb-1">
                  Live Match Pipeline
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Creators ready to promote your product
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-xs font-medium text-[#4ade80]">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  Auto-Negotiation Active
                </span>
              </div>
            </div>

            {/* Creator Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              {sampleCreators.map((creator, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#2e2a28] bg-[#1a1817] p-5 flex flex-col justify-between hover:border-[#423d3a] transition-all group"
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-[#f97316] transition-colors">
                          {creator.name}
                        </h4>
                        <span className="text-xs text-[#71717a] font-mono">
                          {creator.handle}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                        {creator.match}
                      </span>
                    </div>

                    <div className="space-y-2 py-3 border-y border-[#262423] text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#a1a1aa]">Platform</span>
                        <span className="text-white font-medium">{creator.platform}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#a1a1aa]">Audience</span>
                        <span className="text-white font-medium">{creator.followers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#a1a1aa]">Engagement</span>
                        <span className="text-[#4ade80] font-medium">{creator.engagement}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#a1a1aa]">Niche</span>
                        <span className="text-white font-medium">{creator.niche}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#71717a] uppercase block">
                        Locked Rate
                      </span>
                      <span className="text-sm font-bold text-white">
                        {creator.rate}
                      </span>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-[#242120] hover:bg-[#2e2a28] border border-[#383332] text-xs font-semibold text-white transition-all cursor-pointer">
                      Contract Agent →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-STEP WORKFLOW */}
        <section className="w-full max-w-6xl mx-auto px-6 pb-28">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#71717a] block mb-2">
              Autonomous Campaign Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              From brief to payout in one loop
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#2e2a28] bg-[#161413] p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-[#383332] block mb-4 font-mono">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="w-full border-t border-[#262423] py-20 px-6 text-center bg-[#0d0c0c]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Scale creator reach without an agency
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mb-8 leading-relaxed">
              Let OKIZA’s Influencer Agent match vetted creators, lock in predictable pricing,
              and execute end-to-end viral campaigns on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-lg"
              >
                Launch Your First Campaign →
              </a>
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1c1a19] border border-[#383332] text-sm font-semibold text-white hover:bg-[#242120] transition-all"
              >
                Return to Overview
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

