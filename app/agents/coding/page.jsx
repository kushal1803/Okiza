"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  CodeXml,
  CheckCircle2,
  ArrowRight,
  GitPullRequest,
  Check,
  Copy,
  Zap,
  Terminal,
  FileCode,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function CodingAgentPage() {
  const [repo, setRepo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (repo.trim()) {
      setSubmitted(true);
    }
  };

  const samplePullRequests = [
    {
      prNumber: "#42",
      title: "feat(seo): inject JSON-LD Product, FAQ & Organization Schema",
      branch: "okiza/auto-schema-inject",
      status: "Ready to Merge",
      filesChanged: 4,
      diffSummary: "+148 -12 lines",
      author: "Okiza Coding Agent",
      time: "2h ago",
      tags: ["Schema.org", "Structured Data", "Rich Snippets"],
    },
    {
      prNumber: "#43",
      title: "perf(vitals): preload above-the-fold hero image & fix LCP shift",
      branch: "okiza/perf-lcp-preload",
      status: "Ready to Merge",
      filesChanged: 2,
      diffSummary: "+24 -8 lines",
      author: "Okiza Coding Agent",
      time: "5h ago",
      tags: ["Core Web Vitals", "LCP < 1.2s", "Next/Image"],
    },
    {
      prNumber: "#44",
      title: "feat(geo): generate dynamic llms.txt for AI search crawlers",
      branch: "okiza/geo-llms-spec",
      status: "Ready to Merge",
      filesChanged: 3,
      diffSummary: "+92 -0 lines",
      author: "Okiza Coding Agent",
      time: "1d ago",
      tags: ["llms.txt", "Perplexity", "ChatGPT Bot"],
    },
  ];

  const statItems = [
    { label: "Core Web Vitals Score", value: "99/100" },
    { label: "PRs Auto-Generated", value: "48+" },
    { label: "Search Indexation", value: "100%" },
    { label: "Engineer Hours Saved", value: "16 hrs/mo" },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION */}
        <section className="w-full pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-[#22d3ee]/5 blur-[130px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase font-sans">
              OKIZA AI CMO
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#e4e4e7] font-medium">
              <CodeXml className="w-3.5 h-3.5 text-[#22d3ee]" strokeWidth={2} />
              <span>Coding Agent</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            AI Coding Agent
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            Automate technical SEO, structured schema markup, Core Web Vitals, and
            programmatic pages directly in your Git repository via automated pull requests.
          </p>

          {/* Interactive Input Bar */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
            <div className="p-1.5 rounded-2xl bg-[#242120] border border-[#383332] shadow-2xl flex items-center justify-between gap-2 focus-within:border-[#524b48] transition-all">
              <input
                type="text"
                value={repo}
                onChange={(e) => setRepo(e.target.value)}
                placeholder="Enter your GitHub repo or website URL"
                className="bg-transparent text-white placeholder-[#71717a] px-4 py-2.5 text-sm sm:text-base outline-none flex-1 min-w-0"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#d4d4d8] hover:bg-white text-black font-semibold text-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Scan My Codebase</span>
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
                  Codebase Scan Complete for {repo}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#22d3ee]/10 text-[#22d3ee]">
                  3 PRs Ready
                </span>
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
                Identified missing Schema.org JSON-LD tags, an outdated robots.txt, and unoptimized LCP images. Pull requests prepared below.
              </p>
              <a
                href="#pull-requests"
                className="inline-flex items-center gap-1 text-xs text-[#22d3ee] font-semibold hover:underline"
              >
                <span>View automated GitHub pull requests</span>
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
                <span className="text-xs font-semibold uppercase tracking-widest text-[#22d3ee] block mb-3 font-mono">
                  Definition
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                  What an AI Coding agent actually does
                </h2>
                <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-[#1c1a19] border border-[#2e2a28] text-xs text-[#a1a1aa]">
                  <Terminal className="w-4 h-4 text-[#22d3ee]" />
                  <span>Works with Next.js, Remix, Astro, Nuxt & HTML</span>
                </div>
              </div>

              <div className="md:w-7/12 space-y-6 text-[#a1a1aa] text-base leading-relaxed">
                <p>
                  Most SEO audits dump a 200-page PDF of warnings onto your engineering team&apos;s backlog, where it sits untouched for quarters. Okiza&apos;s Coding Agent breaks this bottleneck by directly writing the code fixes.
                </p>
                <p>
                  It clones your repository, writes clean schema markup, fixes broken redirects, generates canonical tags, and produces an <code className="text-xs px-1.5 py-0.5 rounded bg-[#242120] text-[#22d3ee] font-mono">llms.txt</code> file for AI engine crawlers. Then it opens a structured Pull Request on GitHub or GitLab for your review.
                </p>
                <div className="p-5 rounded-2xl bg-[#141211] border border-[#2e2a28] text-white">
                  <p className="text-sm font-medium leading-relaxed flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-[#22d3ee] shrink-0 mt-0.5" />
                    <span>
                      Zero engineering friction: <strong>Your developers simply review and click Merge</strong>, while technical SEO scores skyrocket.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE PULL REQUEST SHOWCASE */}
        <section id="pull-requests" className="w-full border-t border-[#262423] py-24 px-6 bg-[#000000]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#22d3ee] block mb-2 font-mono">
                Automated Pull Requests
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Code Shipped to Your Repo
              </h2>
              <p className="text-base text-[#a1a1aa]">
                Clean code, zero breaking changes, and full test coverage on every technical fix.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {samplePullRequests.map((pr, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#2e2a28] bg-[#141211] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#423d3a] transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#242120] border border-[#383332] flex items-center justify-center shrink-0 text-[#22d3ee]">
                      <GitPullRequest className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#22d3ee] font-mono">
                          {pr.prNumber}
                        </span>
                        <h3 className="font-semibold text-white text-sm group-hover:text-[#22d3ee] transition-colors">
                          {pr.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#71717a]">
                        <span className="font-mono text-[#a1a1aa]">{pr.branch}</span>
                        <span>•</span>
                        <span className="text-[#4ade80] font-mono">{pr.diffSummary}</span>
                        <span>•</span>
                        <span>{pr.time}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {pr.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#1c1a19] border border-[#262423] text-[#a1a1aa]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="px-4 py-2 rounded-xl bg-[#242120] hover:bg-[#2e2a28] border border-[#383332] text-xs font-semibold text-white transition-all shrink-0 flex items-center justify-center gap-1.5 cursor-pointer">
                    <span>Review PR</span>
                    <ArrowRight className="w-3 h-3" />
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
              Automate Technical SEO in Your Codebase
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mb-8 leading-relaxed">
              Connect your GitHub repository and let Okiza’s Coding Agent keep your schema, sitemaps, and Core Web Vitals pristine on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-lg"
              >
                Scan My Codebase →
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

