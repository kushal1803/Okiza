"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Sparkles,
  TrendingUp,
  Search,
  Check,
  Copy,
  Zap,
  BarChart3,
  Bot,
  ExternalLink,
} from "lucide-react";

export default function SEOAgentPage() {
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website.trim()) {
      setSubmitted(true);
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard?.writeText(text);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const aiProviders = [
    { name: "ChatGPT", score: 92, status: "Dominant Source", color: "text-[#10a37f]", bg: "bg-[#10a37f]/10" },
    { name: "Claude", score: 88, status: "High Citation", color: "text-[#d97706]", bg: "bg-[#d97706]/10" },
    { name: "Perplexity", score: 75, status: "Active Citation", color: "text-[#3b82f6]", bg: "bg-[#3b82f6]/10" },
    { name: "Gemini", score: 60, status: "Growing Share", color: "text-[#8b5cf6]", bg: "bg-[#8b5cf6]/10" },
  ];

  const dailyFixes = [
    {
      agent: "SEO Agent",
      title: "Fix Broken Internal Links",
      severity: "Critical",
      severityColor: "bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/20",
      category: "Technical",
      categoryColor: "bg-[#3b82f6]/10 text-[#60a5fa] border-[#3b82f6]/20",
      time: "Today",
      impact: "+4 Crawl Efficiency",
      codeSnippet: `// 3 redirect rules ready to commit
RewriteRule ^pricing-old$ /pricing [R=301,L]
RewriteRule ^features/ai$ /agents [R=301,L]`,
    },
    {
      agent: "SEO Agent",
      title: "Missing Meta Descriptions",
      severity: "High",
      severityColor: "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/20",
      category: "On-Page",
      categoryColor: "bg-[#a855f7]/10 text-[#c084fc] border-[#a855f7]/20",
      time: "Today",
      impact: "+18% CTR on SERP",
      codeSnippet: `<meta name="description" content="Okiza autonomous AI growth platform. Discover ranking gaps, ship daily SEO fixes, and monitor ChatGPT citations on autopilot." />`,
    },
    {
      agent: "SEO Agent",
      title: "Optimize Large Images",
      severity: "Medium",
      severityColor: "bg-[#eab308]/10 text-[#eab308] border-[#eab308]/20",
      category: "Performance",
      categoryColor: "bg-[#10b981]/10 text-[#34d399] border-[#10b981]/20",
      time: "Today",
      impact: "+0.6s LCP Speedup",
      codeSnippet: `// Next.js Image Optimization
import Image from "next/image";
<Image src="/hero.png" width={1200} height={630} priority quality={80} />`,
    },
  ];

  const statItems = [
    { label: "Searches Per Day", value: "5.6B+" },
    { label: "Experiences Start w/ Search", value: "68%" },
    { label: "ROI vs Paid Ads", value: "10x" },
    { label: "Fixes Delivered", value: "2 / day" },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      {/* Top sticky navigation bar */}
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* ======================================================== */}
        {/* HERO SECTION matching user screenshot */}
        {/* ======================================================== */}
        <section className="w-full pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle blue background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-[#38bdf8]/5 blur-[130px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge matching screenshot */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase font-sans">
              OKIZA AI CMO
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#e4e4e7] font-medium">
              <Globe className="w-3.5 h-3.5 text-[#38bdf8]" strokeWidth={2} />
              <span>SEO Agent</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            AI SEO Agent
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            Daily technical audits, keyword fixes, and AI visibility tracking on autopilot:
            2 ready-to-ship fixes every day, plus tracking across ChatGPT, Claude,
            Perplexity, and Gemini. Connect Google Search Console for data-driven insights.
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
                <span>Get Free SEO Audit</span>
                <span className="text-base font-bold">→</span>
              </button>
            </div>
            <p className="text-xs text-[#71717a] mt-4">
              7-day free trial · Cancel anytime
            </p>
          </form>

          {/* Simulation Output */}
          {submitted && (
            <div className="mt-8 p-5 rounded-2xl bg-[#1c1a19] border border-[#383332] max-w-lg text-left shadow-2xl animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-[#2e2a28] mb-3">
                <span className="text-xs font-semibold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  Audit Complete for {website}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#4ade80]/10 text-[#4ade80]">
                  Score: 85/100
                </span>
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
                We found 3 critical indexation fixes and 18 high-intent competitor ranking gaps. Scroll down to view your 2 ready-to-ship fixes today.
              </p>
              <a
                href="#definition"
                className="inline-flex items-center gap-1 text-xs text-[#38bdf8] font-semibold hover:underline"
              >
                <span>Explore full audit & flywheel</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          )}
        </section>

        {/* ======================================================== */}
        {/* DEFINITION SECTION */}
        {/* ======================================================== */}
        <section id="definition" className="w-full border-t border-[#262423] py-24 px-6 bg-[#0a0908]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
              {/* Left Column: Heading & Button */}
              <div className="md:w-5/12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#38bdf8] block mb-3 font-mono">
                  Definition
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                  What an AI SEO agent actually does
                </h2>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1c1a19] hover:bg-[#242120] border border-[#383332] text-sm font-semibold text-white transition-all shadow-md cursor-pointer"
                >
                  <span>See My SEO Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right Column: Explanatory Copy */}
              <div className="md:w-7/12 space-y-6 text-[#a1a1aa] text-base leading-relaxed">
                <p>
                  An AI SEO agent is software that runs your SEO work autonomously. It audits your site, finds keyword and competitor gaps, and ships fixes — instead of just handing you a dashboard of warnings.
                </p>
                <p>
                  Okiza&apos;s agent goes a step further: it also tracks how your brand appears in AI answers across ChatGPT, Claude, Perplexity, and Gemini, so you&apos;re optimizing for both Google and the engines buyers increasingly ask. You get 2 ready-to-ship fixes every day with copy-paste snippets — not a 200-item issues list you&apos;ll never work through.
                </p>
                <div className="p-5 rounded-2xl bg-[#141211] border border-[#2e2a28] text-white">
                  <p className="text-sm font-medium leading-relaxed flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>
                      The result is a continuous SEO flywheel: <strong>audit → prioritize → fix → reaudit</strong>, running automatically while you focus on your product.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* HOW IT WORKS / 3 STEPS WITH RICH MOCKUPS */}
        {/* ======================================================== */}
        <section id="how-it-works" className="w-full border-t border-[#262423] py-24 px-6 bg-[#000000]">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#38bdf8] block mb-2 font-mono">
                How it works
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                How the AI SEO Agent Improves Your Rankings
              </h2>
              <p className="text-base text-[#a1a1aa] mb-6">
                Set it up once. The agent delivers fixes daily.
              </p>
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-md"
              >
                <span>Get Free SEO Audit</span>
                <span className="text-base">→</span>
              </a>
            </div>

            {/* 3 Steps Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* STEP 01 */}
              <div className="rounded-3xl border border-[#2e2a28] bg-[#141211] p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] font-mono">
                      Step 01
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#242120] text-[#71717a] font-mono">
                      Daily Snapshot
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    Run the Automated SEO Audit
                  </h3>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed mb-6">
                    Full snapshot of your site&apos;s SEO and technical health — SEO score, performance, on-page issues, backlinks, and a live SERP snapshot. Runs daily, automatically.
                  </p>
                </div>

                {/* UI Mockup for Step 1: Score & Breakdown */}
                <div className="rounded-2xl border border-[#2e2a28] bg-[#1c1a19] p-5">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#262423]">
                    <span className="text-xs font-semibold text-[#a1a1aa]">SEO Score</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-white font-mono">85</span>
                      <span className="text-xs text-[#71717a]">of 100</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#242120]">
                      <span className="flex items-center gap-1.5 text-white">
                        <AlertCircle className="w-3.5 h-3.5 text-[#ef4444]" />
                        <span>3 Critical</span>
                      </span>
                      <span className="text-[11px] text-[#ef4444] font-semibold">Immediate Fix</span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#242120]">
                      <span className="flex items-center gap-1.5 text-white">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#f59e0b]" />
                        <span>4 Warnings</span>
                      </span>
                      <span className="text-[11px] text-[#f59e0b] font-semibold">Scheduled</span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#242120]">
                      <span className="flex items-center gap-1.5 text-white">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                        <span>12 Passed</span>
                      </span>
                      <span className="text-[11px] text-[#10b981] font-semibold">Optimal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 02 */}
              <div className="rounded-3xl border border-[#2e2a28] bg-[#141211] p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] font-mono">
                      Step 02
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#242120] text-[#71717a] font-mono">
                      GEO Tracking
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    Track Your AI Visibility
                  </h3>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed mb-6">
                    GEO score, platform checklist, visibility, sentiment, and position across ChatGPT, Perplexity, Claude, and Gemini — the engines where buyers now start their research.
                  </p>
                </div>

                {/* UI Mockup for Step 2: AI Provider Table */}
                <div className="rounded-2xl border border-[#2e2a28] bg-[#1c1a19] p-5">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#71717a] pb-2.5 border-b border-[#262423] mb-3">
                    <span>Provider</span>
                    <span>Visibility Score</span>
                  </div>

                  <div className="space-y-2.5">
                    {aiProviders.map((prov, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${prov.color.replace("text-", "bg-")}`} />
                          {prov.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${prov.bg} ${prov.color} font-medium hidden sm:inline`}>
                            {prov.status}
                          </span>
                          <span className="font-mono font-bold text-white bg-[#242120] px-2 py-0.5 rounded border border-[#383332]">
                            {prov.score}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* STEP 03 */}
              <div className="rounded-3xl border border-[#2e2a28] bg-[#141211] p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] font-mono">
                      Step 03
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#242120] text-[#71717a] font-mono">
                      Daily Shipped
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    Get 2 Fixes Every Day
                  </h3>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed mb-6">
                    2 high-impact recommendations daily with step-by-step guides and copy-ready snippets. Manageable, consistent, and compound over time — no SEO expertise needed.
                  </p>
                </div>

                {/* UI Mockup for Step 3: Daily Fixes List */}
                <div className="rounded-2xl border border-[#2e2a28] bg-[#1c1a19] p-4 space-y-2.5">
                  {dailyFixes.map((fix, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#242120] border border-[#383332] text-xs hover:border-[#4a4441] transition-all"
                    >
                      <div className="flex items-center justify-between text-[10px] text-[#71717a] mb-1">
                        <span className="font-medium text-[#38bdf8]">{fix.agent}</span>
                        <span>{fix.time}</span>
                      </div>
                      <h4 className="font-semibold text-white text-xs mb-2 leading-snug">
                        {fix.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] px-2 py-0.5 rounded border ${fix.severityColor} font-semibold`}>
                            {fix.severity}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded border ${fix.categoryColor} font-medium`}>
                            {fix.category}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#4ade80] font-mono">
                          {fix.impact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* WHY SEO AGENT? & STATS SECTION */}
        {/* ======================================================== */}
        <section className="w-full border-t border-[#262423] py-24 px-6 bg-[#0a0908]">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#38bdf8] block mb-2 font-mono">
                Why SEO Agent?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Google Is Where Discovery Happens.
              </h2>
              <p className="text-base text-[#a1a1aa] leading-relaxed">
                Organic search is still the primary driver of web traffic — and AI is changing where buyers start their research. Okiza&apos;s AI SEO Agent ensures you&apos;re visible on both.
              </p>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statItems.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#2e2a28] bg-[#141211] p-6 text-center flex flex-col justify-center items-center hover:border-[#423d3a] transition-all"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white block mb-2 font-mono tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#a1a1aa] font-medium leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* BOTTOM CALL TO ACTION */}
        {/* ======================================================== */}
        <section className="w-full border-t border-[#262423] py-20 px-6 text-center bg-[#000000]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Start Your Autonomous SEO Flywheel
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mb-8 leading-relaxed">
              Audit your domain in seconds, lock in daily compounding fixes, and dominate both Google search results and AI citations with Okiza.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-lg"
              >
                Get Free SEO Audit →
              </a>
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1c1a19] border border-[#383332] text-sm font-semibold text-white hover:bg-[#242120] transition-all"
              >
                Return to Home
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

