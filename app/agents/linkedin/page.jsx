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
  Users,
  Briefcase,
  Share2,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";

export default function LinkedInAgentPage() {
  const [profile, setProfile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profile.trim()) {
      setSubmitted(true);
    }
  };

  const samplePosts = [
    {
      format: "PDF Carousel Deck (8 Slides)",
      title: "The 2026 Autonomous B2B Growth Architecture",
      time: "Scheduled for Tuesday 8:00 AM EST",
      hook: "Most Series A startups spend 40% of their seed round on marketing headcount that can't scale.\n\nHere is the exact 4-agent system we used to scale to $2.4M ARR with 0 agency headcount 📌",
      projectedReactions: "840+",
      projectedComments: "128",
      projectedReposts: "64",
    },
    {
      format: "Founder Story & Milestone",
      title: "Lessons from Replacing Traditional Agencies",
      time: "Scheduled for Thursday 9:30 AM EST",
      hook: "12 months ago, I was reviewing 200-item SEO audit PDFs and managing 4 different marketing contractors.\n\nToday, 90% of our organic distribution runs autonomously on Okiza.\n\nHere are the 3 non-obvious lessons we learned along the way:",
      projectedReactions: "1.2K+",
      projectedComments: "210",
      projectedReposts: "92",
    },
    {
      format: "Industry Framework & Analysis",
      title: "Why AI Search Engine Optimization (GEO) Matters Now",
      time: "Scheduled for Friday 8:30 AM EST",
      hook: "If someone asks ChatGPT for software recommendations in your category, do they mention your product?\n\nIf the answer is no, you are losing 30% of high-intent buyers before they ever search Google.\n\nHere is how to inject your brand into the LLM Knowledge Graph:",
      projectedReactions: "950+",
      projectedComments: "165",
      projectedReposts: "78",
    },
  ];

  const statItems = [
    { label: "Avg Impressions Lift", value: "5.4x" },
    { label: "Inbound DMs / Month", value: "28+" },
    { label: "Hours Saved Weekly", value: "12 hrs" },
    { label: "Voice Calibration Accuracy", value: "98%" },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION */}
        <section className="w-full pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-[#0A66C2]/5 blur-[130px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase font-sans">
              OKIZA AI CMO
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#e4e4e7] font-medium">
              <div className="w-3.5 h-3.5 rounded-[3px] bg-[#0A66C2] flex items-center justify-center text-white text-[8px] font-bold">
                in
              </div>
              <span>LinkedIn Agent</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            LinkedIn Agent
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            Turn industry expertise and product milestones into viral LinkedIn thought
            leadership. Draft executive carousels, founder stories, and auto-schedule
            high-converting posts.
          </p>

          {/* Interactive Input Bar */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
            <div className="p-1.5 rounded-2xl bg-[#242120] border border-[#383332] shadow-2xl flex items-center justify-between gap-2 focus-within:border-[#524b48] transition-all">
              <input
                type="text"
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
                placeholder="Enter your company URL or LinkedIn profile link"
                className="bg-transparent text-white placeholder-[#71717a] px-4 py-2.5 text-sm sm:text-base outline-none flex-1 min-w-0"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#d4d4d8] hover:bg-white text-black font-semibold text-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Draft LinkedIn Posts</span>
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
                  Executive Voice Profile for {profile}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#0A66C2]/10 text-[#0A66C2]">
                  3 Posts Generated
                </span>
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
                Extracted company milestones, key frameworks, and positioning. High-converting thought leadership posts ready to review below.
              </p>
              <a
                href="#posts"
                className="inline-flex items-center gap-1 text-xs text-[#0A66C2] font-semibold hover:underline"
              >
                <span>Review drafted carousel and founder posts</span>
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
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0A66C2] block mb-3 font-mono">
                  Definition
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                  What a LinkedIn Agent actually does
                </h2>
                <div className="p-4 rounded-xl bg-[#1c1a19] border border-[#2e2a28] text-xs text-[#a1a1aa] space-y-1">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Briefcase className="w-4 h-4 text-[#0A66C2]" />
                    <span>Executive B2B Authority</span>
                  </div>
                  <p>Builds pipeline by speaking directly to enterprise decision makers.</p>
                </div>
              </div>

              <div className="md:w-7/12 space-y-6 text-[#a1a1aa] text-base leading-relaxed">
                <p>
                  LinkedIn is the #1 platform for B2B pipeline, but busy founders and marketing leaders rarely have the bandwidth to draft multiple insightful posts, carousels, and case studies each week.
                </p>
                <p>
                  Okiza’s LinkedIn Agent analyzes your company announcements, customer interviews, and industry frameworks. It synthesizes native, non-cringe LinkedIn posts that sound authentic to your leadership team. It structures eye-catching slide decks, formats clean single-line hooks, and auto-schedules to maximize viral engagement in the B2B morning window.
                </p>
                <div className="p-5 rounded-2xl bg-[#141211] border border-[#2e2a28] text-white">
                  <p className="text-sm font-medium leading-relaxed flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-[#0A66C2] shrink-0 mt-0.5" />
                    <span>
                      The payoff: <strong>Consistent executive brand presence</strong> that generates qualified inbound buyer DMs on autopilot.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE POSTS SHOWCASE */}
        <section id="posts" className="w-full border-t border-[#262423] py-24 px-6 bg-[#000000]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0A66C2] block mb-2 font-mono">
                Live Content Queue
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Posts Ready for Publication
              </h2>
              <p className="text-base text-[#a1a1aa]">
                Every post is tailored to your founder voice and formatted to beat LinkedIn&apos;s algorithm.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {samplePosts.map((post, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#2e2a28] bg-[#141211] p-6 flex flex-col justify-between hover:border-[#4a4441] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-[#0A66C2] font-semibold bg-[#0A66C2]/10 px-2.5 py-0.5 rounded-full border border-[#0A66C2]/20 font-mono">
                        {post.format}
                      </span>
                      <span className="text-[#71717a] text-[11px]">{post.time}</span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#0A66C2] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <div className="p-4 rounded-2xl bg-[#1c1a19] border border-[#262423] mb-4 text-xs text-white leading-relaxed whitespace-pre-line font-sans">
                      {post.hook}
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#71717a] py-2 border-y border-[#262423] mb-4 font-mono">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-3.5 h-3.5 text-[#0A66C2]" />
                        {post.projectedReactions}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-[#4ade80]" />
                        {post.projectedComments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="w-3.5 h-3.5 text-[#a855f7]" />
                        {post.projectedReposts}
                      </span>
                    </div>
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
              Turn LinkedIn into a Predictable B2B Funnel
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mb-8 leading-relaxed">
              Connect your LinkedIn profile or company page and let Okiza’s LinkedIn Agent scale your inbound pipeline.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-lg"
              >
                Draft LinkedIn Posts →
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

