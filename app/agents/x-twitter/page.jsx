"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Repeat,
  Heart,
  Bookmark,
  Share2,
} from "lucide-react";

export default function XTwitterAgentPage() {
  const [handle, setHandle] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handle.trim()) {
      setSubmitted(true);
    }
  };

  const sampleThreads = [
    {
      topic: "Autonomous Marketing Flywheel",
      type: "7-Tweet Breakdown Thread",
      time: "Scheduled for 9:15 AM (Peak Window)",
      hook: "Most tech startups burn $5,000/month on marketing agencies that deliver zero pipeline.\n\nHere is how we replaced our entire agency with 4 autonomous AI agents—and tripled our inbound leads in 60 days 🧵👇",
      projectedLikes: "1.4K",
      projectedRetweets: "340",
      projectedBookmarks: "820",
    },
    {
      topic: "Generative Engine Optimization (GEO)",
      type: "Data-Driven Industry Insight",
      time: "Scheduled for 2:30 PM",
      hook: "Perplexity and ChatGPT are quietly stealing 20% of Google's commercial search traffic.\n\nIf you don't have an llms.txt file or structured entity schema, AI models are actively citing your competitors instead of you.\n\nHere is the 3-step fix:",
      projectedLikes: "890",
      projectedRetweets: "215",
      projectedBookmarks: "560",
    },
    {
      topic: "Founder Lesson & Transparency",
      type: "Story Post",
      time: "Scheduled for 6:00 PM",
      hook: "The single biggest mistake we made in our seed round was trying to run 6 marketing channels at once.\n\nPick ONE organic channel. Automate it with an agent until it's compounding. Then move to the next.\n\nFocus beats brute force every single time.",
      projectedLikes: "2.1K",
      projectedRetweets: "410",
      projectedBookmarks: "940",
    },
  ];

  const statItems = [
    { label: "Follower Growth", value: "3.2x" },
    { label: "Viral Thread Rate", value: "+38%" },
    { label: "Profile Clicks / Mo", value: "14,500+" },
    { label: "Hours Saved Weekly", value: "10 hrs" },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION */}
        <section className="w-full pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-white/[0.03] blur-[130px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase font-sans">
              OKIZA AI CMO
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#e4e4e7] font-medium">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X (Twitter) Agent</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            X (Twitter) Agent
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            Generate high-engagement threads, viral commentary, and daily founder posts ready
            to refine and publish. Build an audience of qualified enterprise buyers on X.
          </p>

          {/* Interactive Input Bar */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
            <div className="p-1.5 rounded-2xl bg-[#242120] border border-[#383332] shadow-2xl flex items-center justify-between gap-2 focus-within:border-[#524b48] transition-all">
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder="Enter your X handle (e.g. @yourfounder) or website"
                className="bg-transparent text-white placeholder-[#71717a] px-4 py-2.5 text-sm sm:text-base outline-none flex-1 min-w-0"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#d4d4d8] hover:bg-white text-black font-semibold text-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Draft My First Thread</span>
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
                  Tone Profile Extracted for {handle}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-white">
                  3 Threads Drafted
                </span>
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
                Identified top engagement hooks for your niche. Formatted with punchy single-line spacing and strong call-to-actions below.
              </p>
              <a
                href="#threads"
                className="inline-flex items-center gap-1 text-xs text-white font-semibold hover:underline"
              >
                <span>Review viral thread drafts</span>
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
                <span className="text-xs font-semibold uppercase tracking-widest text-[#a1a1aa] block mb-3 font-mono">
                  Definition
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                  What an X Agent actually does
                </h2>
                <div className="p-4 rounded-xl bg-[#1c1a19] border border-[#2e2a28] text-xs text-[#a1a1aa] space-y-1">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Zap className="w-4 h-4 text-[#e4e4e7]" />
                    <span>No Generic AI Fluff</span>
                  </div>
                  <p>Trained to avoid cliché emojis, robotic intros, and hollow platitudes.</p>
                </div>
              </div>

              <div className="md:w-7/12 space-y-6 text-[#a1a1aa] text-base leading-relaxed">
                <p>
                  Building an organic audience on X requires constant, high-cadence posting with authentic insights, strong hooks, and rapid commentary on breaking industry news. Most founders simply don&apos;t have 3 hours a day to write tweets.
                </p>
                <p>
                  Okiza’s X Agent acts as your autonomous ghostwriter. It studies your product positioning, scans trending niche discussions, and drafts ready-to-refine threads and standalone posts. You approve or tweak in 30 seconds, and the agent auto-publishes during your audience&apos;s peak activity windows.
                </p>
                <div className="p-5 rounded-2xl bg-[#141211] border border-[#2e2a28] text-white">
                  <p className="text-sm font-medium leading-relaxed flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4ade80] shrink-0 mt-0.5" />
                    <span>
                      You remain in control: <strong>Every post is published from your own authentic account</strong>, building compounding founder authority.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE THREAD QUEUE SHOWCASE */}
        <section id="threads" className="w-full border-t border-[#262423] py-24 px-6 bg-[#000000]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#a1a1aa] block mb-2 font-mono">
                Live Content Queue
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Threads Ready to Refine & Post
              </h2>
              <p className="text-base text-[#a1a1aa]">
                Review the opening hook, check predicted engagement, and schedule with one click.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sampleThreads.map((thread, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#2e2a28] bg-[#141211] p-6 flex flex-col justify-between hover:border-[#4a4441] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-white font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 font-mono">
                        {thread.type}
                      </span>
                      <span className="text-[#71717a] text-[11px]">{thread.topic}</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#1c1a19] border border-[#262423] mb-4 text-xs text-white leading-relaxed whitespace-pre-line font-sans">
                      {thread.hook}
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#71717a] py-2 border-y border-[#262423] mb-4 font-mono">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-[#ef4444]" />
                        {thread.projectedLikes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Repeat className="w-3.5 h-3.5 text-[#10b981]" />
                        {thread.projectedRetweets}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bookmark className="w-3.5 h-3.5 text-[#3b82f6]" />
                        {thread.projectedBookmarks}
                      </span>
                    </div>

                    <span className="text-[11px] text-[#71717a] block mb-4">
                      {thread.time}
                    </span>
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-[#242120] hover:bg-[#2c2826] border border-[#383332] text-xs font-semibold text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <span>Approve & Schedule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
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
              Build a Compounding Audience on X
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mb-8 leading-relaxed">
              Connect your X account and let Okiza’s X Agent turn your industry expertise into daily inbound leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-lg"
              >
                Draft My First Thread →
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

