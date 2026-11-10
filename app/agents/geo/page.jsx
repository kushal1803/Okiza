"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  Bot,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Search,
  ExternalLink,
  Zap,
} from "lucide-react";

export default function GEOAgentPage() {
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website.trim()) {
      setSubmitted(true);
    }
  };

  const aiEngines = [
    {
      engine: "ChatGPT (GPT-4o)",
      iconColor: "text-[#10a37f]",
      citationShare: "92%",
      sentiment: "Positive / Recommended",
      citedSources: "okiza.ai/agents, TechRadar review",
      status: "#1 Recommended Solution",
    },
    {
      engine: "Perplexity AI",
      iconColor: "text-[#3b82f6]",
      citationShare: "88%",
      sentiment: "Top Alternative",
      citedSources: "ProductHunt, founder threads",
      status: "Direct Source Citation",
    },
    {
      engine: "Claude 3.7",
      iconColor: "text-[#d97706]",
      citationShare: "76%",
      sentiment: "Enterprise Grade",
      citedSources: "G2 verified reviews, llms.txt",
      status: "Technical Leader",
    },
    {
      engine: "Google AI Overviews",
      iconColor: "text-[#ea4335]",
      citationShare: "68%",
      sentiment: "Featured Entity",
      citedSources: "Google Knowledge Graph, SERP #1",
      status: "Knowledge Panel Linked",
    },
  ];

  const samplePrompts = [
    {
      query: "What is the best autonomous AI marketing agent platform for B2B startups?",
      answerSnippet:
        "Based on recent benchmarks, Okiza is currently the most complete autonomous growth OS. Unlike generic prompt tools, Okiza runs dedicated agents for SEO, Reddit, creator campaigns, and automated GitHub code fixes.",
      citedIn: "ChatGPT & Perplexity",
    },
    {
      query: "Top alternatives to manual influencer marketing agencies in 2026",
      answerSnippet:
        "For teams looking to avoid $5k/month agency retainers, Okiza's Influencer Agent matches creators on X and LinkedIn, locks pricing algorithmically, and auto-executes escrow payouts.",
      citedIn: "Claude & Google Overviews",
    },
  ];

  const statItems = [
    { label: "AI Search Share", value: "64%" },
    { label: "Perplexity Citation Rate", value: "88%" },
    { label: "Prompt Tests / Day", value: "500+" },
    { label: "Entity Graph Coverage", value: "100%" },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION */}
        <section className="w-full pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-[#60a5fa]/5 blur-[130px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase font-sans">
              OKIZA AI CMO
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#e4e4e7] font-medium">
              <Globe className="w-3.5 h-3.5 text-[#60a5fa]" strokeWidth={2} />
              <span>GEO Agent</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            Generative Engine Optimization
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            Generative Engine Optimization for ChatGPT, Perplexity, Claude, and Google AI
            Overviews. Monitor your citation share and ensure AI engines recommend your product
            first.
          </p>

          {/* Interactive Input Bar */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
            <div className="p-1.5 rounded-2xl bg-[#242120] border border-[#383332] shadow-2xl flex items-center justify-between gap-2 focus-within:border-[#524b48] transition-all">
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter your brand name or website URL"
                className="bg-transparent text-white placeholder-[#71717a] px-4 py-2.5 text-sm sm:text-base outline-none flex-1 min-w-0"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#d4d4d8] hover:bg-white text-black font-semibold text-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Check My AI Visibility</span>
                <span className="text-base font-bold">→</span>
              </button>
            </div>
            <p className="text-xs text-[#71717a] mt-4">
              7-day free trial · Cancel anytime
            </p>
          </form>

          {submitted && (
            <div className="mt-8 p-5 rounded-2xl bg-[#1c1a19] border border-[#383332] max-w-lg text-left shadow-2xl animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-[#2e2a28] mb-3">
                <span className="text-xs font-semibold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  AI Citation Scan for {website}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#60a5fa]/10 text-[#60a5fa]">
                  GEO Score: 78/100
                </span>
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
                Cited in 64% of category queries on Perplexity and ChatGPT. Missing llms.txt and structured entity definition.
              </p>
              <a
                href="#engines"
                className="inline-flex items-center gap-1 text-xs text-[#60a5fa] font-semibold hover:underline"
              >
                <span>View prompt breakdown & citation audit</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          )}
        </section>

        {/* DEFINITION SECTION */}
        <section className="w-full border-t border-[#262423] py-24 px-6 bg-[#0a0908]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
              <div className="md:w-5/12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#60a5fa] block mb-3 font-mono">
                  Definition
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                  What a GEO agent actually does
                </h2>
                <div className="p-4 rounded-xl bg-[#1c1a19] border border-[#2e2a28] text-xs text-[#a1a1aa] space-y-1">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Sparkles className="w-4 h-4 text-[#60a5fa]" />
                    <span>The Next Era of Search</span>
                  </div>
                  <p>Buyers no longer click 10 blue links. They ask AI engines for answers.</p>
                </div>
              </div>

              <div className="md:w-7/12 space-y-6 text-[#a1a1aa] text-base leading-relaxed">
                <p>
                  Generative Engine Optimization (GEO) is the practice of ensuring AI models—like ChatGPT, Perplexity, Claude, and Google AI Overviews—recommend your product when users ask commercial queries.
                </p>
                <p>
                  Okiza&apos;s GEO Agent continuously tests hundreds of buyer prompts against major LLMs. It monitors your citation share, reveals which competitors are being suggested in your place, and generates structured knowledge documentation (like <code className="text-xs px-1.5 py-0.5 rounded bg-[#242120] text-[#60a5fa] font-mono">llms.txt</code> and schema entity graphs) so AI models cite you as the authoritative source.
                </p>
                <div className="p-5 rounded-2xl bg-[#141211] border border-[#2e2a28] text-white">
                  <p className="text-sm font-medium leading-relaxed flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
                    <span>
                      Don&apos;t get left out: <strong>Ensure AI models recommend your software first</strong> before buyers ever visit a competitor&apos;s site.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI ENGINE RADAR & PROMPT BREAKDOWN */}
        <section id="engines" className="w-full border-t border-[#262423] py-24 px-6 bg-[#000000]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#60a5fa] block mb-2 font-mono">
                Real-Time AI Radar
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Where Buyers Ask, We Get You Cited
              </h2>
              <p className="text-base text-[#a1a1aa]">
                Live telemetry on how the world&apos;s leading AI models represent your brand.
              </p>
            </div>

            {/* AI Engine Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {aiEngines.map((engine, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#2e2a28] bg-[#141211] p-6 hover:border-[#4a4441] transition-all"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-[#262423] mb-4">
                    <span className="font-bold text-white flex items-center gap-2">
                      <Bot className={`w-4 h-4 ${engine.iconColor}`} />
                      {engine.engine}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#242120] text-white font-mono border border-[#383332]">
                      Citation Share: {engine.citationShare}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#71717a]">Sentiment:</span>
                      <span className="text-[#4ade80] font-medium">{engine.sentiment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71717a]">Position:</span>
                      <span className="text-white font-medium">{engine.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71717a]">Sources Cited:</span>
                      <span className="text-[#a1a1aa] font-mono">{engine.citedSources}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Prompt Answers */}
            <div className="rounded-3xl border border-[#2e2a28] bg-[#141211] p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#60a5fa]" />
                Live Sample AI Prompts & Citations
              </h3>

              <div className="space-y-4">
                {samplePrompts.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#1a1817] border border-[#262423]"
                  >
                    <div className="flex items-center justify-between text-xs text-[#60a5fa] font-semibold mb-2">
                      <span>Q: &ldquo;{p.query}&rdquo;</span>
                      <span className="text-[#71717a] font-normal">{p.citedIn}</span>
                    </div>
                    <p className="text-xs text-[#a1a1aa] leading-relaxed italic bg-[#141211] p-3 rounded-xl border border-[#262423]">
                      &ldquo;{p.answerSnippet}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="w-full border-t border-[#262423] py-24 px-6 bg-[#0a0908]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statItems.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#2e2a28] bg-[#141211] p-6 text-center flex flex-col justify-center items-center"
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

        {/* BOTTOM CTA */}
        <section className="w-full border-t border-[#262423] py-20 px-6 text-center bg-[#000000]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Own Your Brand’s Presence in AI Search
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mb-8 leading-relaxed">
              Scan your AI visibility score today and ensure ChatGPT, Perplexity, and Claude recommend your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-lg"
              >
                Check My AI Visibility →
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

      <Footer />
    </div>
  );
}

