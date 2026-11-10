"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Flame,
  Search,
} from "lucide-react";

export default function RedditAgentPage() {
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website.trim()) {
      setSubmitted(true);
    }
  };

  const sampleThreads = [
    {
      subreddit: "r/SaaS",
      title: "Looking for an automated creator outreach tool that actually works in 2026",
      author: "u/techfounder_99",
      upvotes: 142,
      comments: 38,
      intentScore: "98% Buyer Intent",
      time: "24m ago",
      draftPreview:
        "We had the exact same issue with agencies charging $5k/mo retainers. Switched to an AI agent loop that monitors X/LinkedIn creator deliverables and auto-pays upon post. Saved about 80% of our budget.",
    },
    {
      subreddit: "r/startups",
      title: "How do you guys get initial traction without burning money on Meta ads?",
      author: "u/growth_pilot",
      upvotes: 289,
      comments: 94,
      intentScore: "95% Buyer Intent",
      time: "1h ago",
      draftPreview:
        "Reddit and organic X storytelling converted 3x better than paid ads for our seed stage. The key is monitoring buyer questions on niche subreddits rather than blasting spam links.",
    },
    {
      subreddit: "r/marketing",
      title: "What are your best tools for competitor gap analysis and SEO keyword radar?",
      author: "u/leadgen_pro",
      upvotes: 76,
      comments: 29,
      intentScore: "92% Buyer Intent",
      time: "3h ago",
      draftPreview:
        "Check out automated rival radar platforms that crawl competitor ranking changes daily. It finds keywords where rivals rank in top 5 and drafts programmatic pages to compete directly.",
    },
  ];

  const features = [
    {
      title: "High-Intent Thread Radar",
      desc: "Scans millions of discussions daily across 50,000+ subreddits, flagging active buyers asking for recommendations.",
    },
    {
      title: "Authentic Native Voice",
      desc: "Drafts nuanced, context-aware comments that add genuine value and comply with strict subreddit self-promotion rules.",
    },
    {
      title: "100% Ban-Safe Guarantee",
      desc: "You post directly from your own authenticated Reddit account with 1-click approvals. Zero bot accounts, zero shadowbans.",
    },
    {
      title: "Referral & Conversion Attribution",
      desc: "Track exact traffic, trial starts, and customers generated from every Reddit thread in your closed-loop dashboard.",
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF4500]/5 blur-[120px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge matching screenshot */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase font-sans">
              OKIZA AI CMO
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#e4e4e7] font-medium">
              <div className="w-4 h-4 rounded-full bg-[#FF4500] flex items-center justify-center p-0.5">
                <svg viewBox="0 0 24 24" fill="white" className="w-2.5 h-2.5" aria-hidden="true">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.56 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.197-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
              </div>
              <span>Reddit Agent</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            Reddit Agent
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-4">
            Find high-intent threads, draft authentic replies, and turn Reddit into
            customers. Ban-safe, on autopilot.
          </p>

          {/* Ban-Safe Tagline from Screenshot */}
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#71717a] uppercase mb-10 font-mono">
            YOU POST FROM YOUR OWN ACCOUNT. ALWAYS BAN-SAFE.
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
                <span>Find My Reddit Leads</span>
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
                Scanning Reddit for <strong>{website}</strong>... Found 68 active discussions ready for replies!
              </span>
            </div>
          )}
        </section>

        {/* LIVE THREAD RADAR SHOWCASE */}
        <section className="w-full max-w-6xl mx-auto px-6 pb-24">
          <div className="rounded-3xl border border-[#2e2a28] bg-[#141211]/90 p-6 md:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#262423]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FF4500] block mb-1">
                  Live Lead Feed
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  High-intent discussions detected right now
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/20 text-xs font-medium text-[#FF4500]">
                  <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
                  50,000+ Subreddits Crawling
                </span>
              </div>
            </div>

            {/* Thread Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8">
              {sampleThreads.map((thread, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#2e2a28] bg-[#1a1817] p-5 flex flex-col justify-between hover:border-[#423d3a] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-bold text-[#FF4500] bg-[#FF4500]/10 px-2 py-0.5 rounded-full border border-[#FF4500]/20 font-mono">
                        {thread.subreddit}
                      </span>
                      <span className="text-[#71717a]">{thread.time}</span>
                    </div>

                    <h4 className="font-semibold text-white text-sm mb-3 group-hover:text-[#FF4500] transition-colors leading-snug">
                      &ldquo;{thread.title}&rdquo;
                    </h4>

                    <div className="p-3 rounded-xl bg-[#141211] border border-[#262626] mb-4">
                      <span className="text-[10px] font-semibold text-[#71717a] uppercase tracking-wider block mb-1">
                        AI Drafted Reply (Ban-Safe)
                      </span>
                      <p className="text-xs text-[#a1a1aa] leading-relaxed italic">
                        &ldquo;{thread.draftPreview}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#262423] flex items-center justify-between text-xs">
                    <span className="text-[#4ade80] font-semibold">
                      {thread.intentScore}
                    </span>
                    <button className="px-3 py-1.5 rounded-lg bg-[#242120] hover:bg-[#2e2a28] border border-[#383332] text-xs font-semibold text-white transition-all cursor-pointer">
                      Review & Post →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 CORE ADVANTAGES */}
        <section className="w-full max-w-6xl mx-auto px-6 pb-28">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#71717a] block mb-2">
              Why Founders Choose OKIZA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Reddit marketing that actually converts
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#2e2a28] bg-[#161413] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#242120] border border-[#383332] flex items-center justify-center mb-4 text-[#FF4500]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    {feat.desc}
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
              Turn Reddit into your #1 organic acquisition engine
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mb-8 leading-relaxed">
              Find ready-to-buy customers, build organic brand goodwill, and post with 100% confidence from your own verified Reddit account.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-lg"
              >
                Find My Reddit Leads →
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
