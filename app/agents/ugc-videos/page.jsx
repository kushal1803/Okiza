"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Clapperboard,
  CheckCircle2,
  ArrowRight,
  Play,
  Film,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Video,
  Zap,
} from "lucide-react";

export default function UGCVideosAgentPage() {
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website.trim()) {
      setSubmitted(true);
    }
  };

  const sampleBriefs = [
    {
      title: "The 'Don't Make This Mistake' Hook",
      format: "9:16 TikTok & Reels",
      targetAudience: "B2B SaaS Founders",
      predictedRetention: "88% 3s Hook Rate",
      duration: "32s",
      openingLine:
        "If you're still spending $5k/mo on an agency retainers for marketing, stop scrolling right now...",
      visualCue: "Split-screen reaction with founder pointing at live automated agent dashboard.",
      cta: "Link in bio to try 7-day free trial",
    },
    {
      title: "Before vs After Workflow Transformation",
      format: "9:16 Shorts & TikTok",
      targetAudience: "Growth Marketers",
      predictedRetention: "92% 3s Hook Rate",
      duration: "28s",
      openingLine:
        "This one AI tool did in 10 minutes what used to take our entire marketing department 3 weeks...",
      visualCue: "Fast zoom into competitor ranking radar showing immediate green keyword gaps.",
      cta: "Scan your website for free at okiza.ai",
    },
    {
      title: "Founder Behind-the-Scenes Story",
      format: "9:16 LinkedIn Video & Reels",
      targetAudience: "Early Stage Tech Teams",
      predictedRetention: "85% 3s Hook Rate",
      duration: "45s",
      openingLine:
        "Everyone told us autonomous AI CMOs wouldn't work. Here's our exact revenue dashboard after 90 days...",
      visualCue: "Casual handheld walk-and-talk with screen recording overlay of real metrics.",
      cta: "Comment 'GROWTH' for the full case study",
    },
  ];

  const statItems = [
    { label: "Script Generation Time", value: "< 30 sec" },
    { label: "Hook Retention Lift", value: "+44%" },
    { label: "Ad Variations / Brief", value: "10 Hooks" },
    { label: "Average Paid ROAS", value: "3.8x" },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION */}
        <section className="w-full pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-[#fb923c]/5 blur-[130px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase font-sans">
              OKIZA AI CMO
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#e4e4e7] font-medium">
              <Clapperboard className="w-3.5 h-3.5 text-[#fb923c]" strokeWidth={2} />
              <span>UGC Videos Agent</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            UGC Videos Agent
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            Turn product URLs into viral short-form video briefs, creator scripts, and TikTok/Reels
            ad hooks. From storyboard generation to ad variations in minutes.
          </p>

          {/* Interactive Input Bar */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
            <div className="p-1.5 rounded-2xl bg-[#242120] border border-[#383332] shadow-2xl flex items-center justify-between gap-2 focus-within:border-[#524b48] transition-all">
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter your product URL or website"
                className="bg-transparent text-white placeholder-[#71717a] px-4 py-2.5 text-sm sm:text-base outline-none flex-1 min-w-0"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#d4d4d8] hover:bg-white text-black font-semibold text-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Generate Video Briefs</span>
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
                  Briefs Generated for {website}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#fb923c]/10 text-[#fb923c]">
                  3 Storyboards Ready
                </span>
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
                Extracted product hooks, pain points, and target demographic. Storyboard scripts generated below.
              </p>
              <a
                href="#briefs"
                className="inline-flex items-center gap-1 text-xs text-[#fb923c] font-semibold hover:underline"
              >
                <span>View creator-ready storyboards</span>
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
                <span className="text-xs font-semibold uppercase tracking-widest text-[#fb923c] block mb-3 font-mono">
                  Definition
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                  What a UGC Videos agent actually does
                </h2>
                <div className="p-4 rounded-xl bg-[#1c1a19] border border-[#2e2a28] text-xs text-[#a1a1aa] space-y-1">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Film className="w-4 h-4 text-[#fb923c]" />
                    <span>Algorithmic Short-Form Hooks</span>
                  </div>
                  <p>Trained on 10,000+ top-performing TikTok, Reels, and Shorts ads.</p>
                </div>
              </div>

              <div className="md:w-7/12 space-y-6 text-[#a1a1aa] text-base leading-relaxed">
                <p>
                  Most creative video production stalls at the scriptwriting and briefing stage. Marketers spend hours trying to figure out what hooks stop the scroll, how to pace the video, and what creators to guide.
                </p>
                <p>
                  Okiza’s UGC Videos Agent scans your product features, customer reviews, and competitors to generate creator-ready storyboards. Each brief specifies visual cues, audio timing, on-screen text overlays, and 10 hook variations designed to combat ad fatigue.
                </p>
                <div className="p-5 rounded-2xl bg-[#141211] border border-[#2e2a28] text-white">
                  <p className="text-sm font-medium leading-relaxed flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-[#fb923c] shrink-0 mt-0.5" />
                    <span>
                      Scale viral reach: <strong>Hand complete, high-converting briefs directly to your creators</strong> and iterate 10x faster.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE BRIEFS SHOWCASE */}
        <section id="briefs" className="w-full border-t border-[#262423] py-24 px-6 bg-[#000000]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#fb923c] block mb-2 font-mono">
                Creator-Ready Briefs
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Shortboards Ready for Production
              </h2>
              <p className="text-base text-[#a1a1aa]">
                Hand these exact storyboards to internal creators or external influencers for instant filming.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sampleBriefs.map((b, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#2e2a28] bg-[#141211] p-6 flex flex-col justify-between hover:border-[#4a4441] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-[#fb923c] font-semibold bg-[#fb923c]/10 px-2.5 py-0.5 rounded-full border border-[#fb923c]/20 font-mono">
                        {b.format}
                      </span>
                      <span className="text-[#71717a] font-mono">{b.duration}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#fb923c] transition-colors leading-snug">
                      {b.title}
                    </h3>

                    <div className="p-3 rounded-xl bg-[#1c1a19] border border-[#262423] mb-4">
                      <span className="text-[10px] font-semibold text-[#71717a] uppercase tracking-wider block mb-1">
                        First 3-Second Hook
                      </span>
                      <p className="text-xs text-white font-medium italic leading-relaxed">
                        &ldquo;{b.openingLine}&rdquo;
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-[#a1a1aa]">
                      <div>
                        <span className="text-[#71717a] block text-[10px] uppercase font-semibold">
                          Visual Direction:
                        </span>
                        <span>{b.visualCue}</span>
                      </div>
                      <div>
                        <span className="text-[#71717a] block text-[10px] uppercase font-semibold">
                          Audience Focus:
                        </span>
                        <span className="text-white">{b.targetAudience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#262423] flex items-center justify-between">
                    <span className="text-xs text-[#4ade80] font-semibold font-mono">
                      {b.predictedRetention}
                    </span>
                    <button className="px-3.5 py-1.5 rounded-xl bg-[#242120] hover:bg-[#2c2826] border border-[#383332] text-xs font-semibold text-white transition-all cursor-pointer">
                      Export Brief →
                    </button>
                  </div>
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
              Scale Your Video Ad Pipeline on Autopilot
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mb-8 leading-relaxed">
              Connect your store or website and let Okiza’s UGC Videos Agent generate viral short-form briefs that keep your ROAS high.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-lg"
              >
                Generate Video Briefs →
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

