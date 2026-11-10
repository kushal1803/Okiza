"use client";

import { use, useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Megaphone,
  Globe,
  CodeXml,
  Clapperboard,
  PenTool,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

const AGENTS_DATA = {
  seo: {
    title: "SEO Agent",
    pillTag: "OKIZA AI CMO",
    iconName: "Globe",
    iconColor: "text-[#38bdf8]",
    description:
      "The autonomous organic search engine platform. Crawl ranking gaps, auto-generate high-intent programmatic pages, and outrank legacy enterprise competitors on autopilot.",
    placeholder: "Enter your domain (e.g. yourbrand.com)",
    buttonText: "Audit My SEO",
    metric1: { label: "Average Traffic Lift", value: "+312%" },
    metric2: { label: "Pages Ranked Top 3", value: "84%" },
    metric3: { label: "Keyword Radar Gaps", value: "1,200+" },
    capabilities: [
      {
        title: "Automated Competitor Gap Radar",
        desc: "Pinpoint keywords your rivals rank for that you don't. Automatically prioritize by buyer intent.",
      },
      {
        title: "Programmatic Landing Pages",
        desc: "Generate complete, high-converting feature vs competitor comparison pages tailored to your brand.",
      },
      {
        title: "Real-time Rank Telemetry",
        desc: "Monitor rank shifts on Google daily and automatically refresh declining pages with new data.",
      },
    ],
  },
  coding: {
    title: "Coding Agent",
    pillTag: "OKIZA AI CMO",
    iconName: "CodeXml",
    iconColor: "text-[#22d3ee]",
    description:
      "Automate technical SEO, structured schema markup, Core Web Vitals, and programmatic page code directly in your Git repository via automated pull requests.",
    placeholder: "Enter your GitHub repo or website",
    buttonText: "Scan Technical SEO",
    metric1: { label: "Core Web Vitals Score", value: "99/100" },
    metric2: { label: "Automated PRs Merged", value: "48+" },
    metric3: { label: "Indexation Rate", value: "100%" },
    capabilities: [
      {
        title: "Schema & JSON-LD Generation",
        desc: "Inject rich snippet markup, breadcrumbs, and Organization schema across every page.",
      },
      {
        title: "Automated Pull Requests",
        desc: "Creates PRs for canonical tags, Open Graph images, internal linking, and meta tags.",
      },
      {
        title: "Sitemap & Robots Automation",
        desc: "Dynamic XML sitemap sync that updates the instant new content is published.",
      },
    ],
  },
  "ugc-videos": {
    title: "UGC Videos Agent",
    pillTag: "OKIZA AI CMO",
    iconName: "Clapperboard",
    iconColor: "text-[#fb923c]",
    description:
      "Turn product URLs into viral short-form video briefs, creator scripts, and TikTok/Reels ad hooks. From storyboard generation to ad variations in minutes.",
    placeholder: "Enter your product URL",
    buttonText: "Generate Video Briefs",
    metric1: { label: "Script Generation Time", value: "< 30 sec" },
    metric2: { label: "Hook Retention Lift", value: "+44%" },
    metric3: { label: "Ad Variations / Brief", value: "10 Hooks" },
    capabilities: [
      {
        title: "High-Retention Hook Engine",
        desc: "Generates opening 3-second visual and audio hooks that stop scrolling in TikTok and Reels feeds.",
      },
      {
        title: "Creator-Ready Storyboards",
        desc: "Includes scene-by-scene actor directions, on-screen text overlays, and audio cues.",
      },
      {
        title: "Performance Iteration Loop",
        desc: "Analyzes winning ad metrics and drafts iterate clips targeting fatigue before ROAS drops.",
      },
    ],
  },
  linkedin: {
    title: "LinkedIn Agent",
    pillTag: "OKIZA AI CMO",
    iconName: "LinkedIn",
    iconColor: "text-[#0A66C2]",
    description:
      "Turn industry expertise and product milestones into viral LinkedIn thought leadership. Draft executive carousels, founder stories, and auto-schedule high-converting posts.",
    placeholder: "Enter your company URL or LinkedIn profile",
    buttonText: "Generate Posts",
    metric1: { label: "Avg Impressions Lift", value: "5.4x" },
    metric2: { label: "Inbound DMs / Month", value: "28+" },
    metric3: { label: "Executive Hours Saved", value: "12 hrs/wk" },
    capabilities: [
      {
        title: "Founder Voice Modeling",
        desc: "Analyzes your past top posts to capture your cadence, vocabulary, and authentic point of view.",
      },
      {
        title: "Carousel & Visual Synthesizer",
        desc: "Turns complex frameworks into clean PDF slide decks optimized for LinkedIn engagement algorithms.",
      },
      {
        title: "Engagement & Comment Drafter",
        desc: "Surfaces relevant industry discussions and drafts insightful replies to build executive authority.",
      },
    ],
  },
  reddit: {
    title: "Reddit Agent",
    pillTag: "OKIZA AI CMO",
    iconName: "Reddit",
    iconColor: "text-[#FF4500]",
    description:
      "Scan high-intent discussions across 50,000+ subreddits in real time. Draft helpful, authentic brand recommendations that drive referral traffic without getting banned.",
    placeholder: "Enter your niche or target keywords",
    buttonText: "Monitor Subreddits",
    metric1: { label: "Subreddits Monitored", value: "50,000+" },
    metric2: { label: "Referral Conversion Rate", value: "6.8%" },
    metric3: { label: "Detection / Ban Rate", value: "0%" },
    capabilities: [
      {
        title: "Intent Query Radar",
        desc: "Flags threads asking 'What is the best alternative to...' or 'How do you solve...' in real time.",
      },
      {
        title: "Native Community Tone",
        desc: "Drafts responses that follow specific subreddit rules, tone guidelines, and karma requirements.",
      },
      {
        title: "Referral Click Tracking",
        desc: "Measure exact attribution from Reddit threads down to individual signups and trial starts.",
      },
    ],
  },
  writer: {
    title: "Writer Agent",
    pillTag: "OKIZA AI CMO",
    iconName: "PenTool",
    iconColor: "text-[#c084fc]",
    description:
      "Synthesize long-form guides, thought leadership, customer case studies, and email sequences that sound exactly like your best human writers. Trained on your ICP voice.",
    placeholder: "Enter your blog or website",
    buttonText: "Analyze Brand Voice",
    metric1: { label: "Production Speedup", value: "10x" },
    metric2: { label: "Reader Retention", value: "72%" },
    metric3: { label: "Brand Voice Accuracy", value: "98%" },
    capabilities: [
      {
        title: "Deep Voice Calibration",
        desc: "Extracts tone, forbidden buzzwords, formatting rules, and sentence structures from your best writing.",
      },
      {
        title: "End-to-End Content Generation",
        desc: "From outline to final draft complete with quotes, stats, markdown tables, and callouts.",
      },
      {
        title: "Omnichannel Repurposing",
        desc: "Turn one blog post into an X thread, a LinkedIn post, a newsletter issue, and 3 ad hooks.",
      },
    ],
  },
  geo: {
    title: "GEO Agent",
    pillTag: "OKIZA AI CMO",
    iconName: "Globe",
    iconColor: "text-[#60a5fa]",
    description:
      "Generative Engine Optimization for ChatGPT, Perplexity, Claude, and Google AI Overviews. Monitor your citation share and ensure AI engines recommend your product first.",
    placeholder: "Enter your brand name or website",
    buttonText: "Audit AI Citations",
    metric1: { label: "AI Search Share", value: "64%" },
    metric2: { label: "Perplexity Citation Rate", value: "88%" },
    metric3: { label: "Prompt Tests / Day", value: "500+" },
    capabilities: [
      {
        title: "AI Answer Reverse Engineering",
        desc: "Track which competitor sources ChatGPT and Perplexity cite when answering buyer prompts.",
      },
      {
        title: "Knowledge Base Injection",
        desc: "Format website documentation and press releases so LLMs can easily parse and cite your brand.",
      },
      {
        title: "Real-time AI Sentiment Radar",
        desc: "Alerts you the instant an AI engine hallucinates or portrays your pricing or product inaccurately.",
      },
    ],
  },
  "x-twitter": {
    title: "X (Twitter) Agent",
    pillTag: "OKIZA AI CMO",
    iconName: "X",
    iconColor: "text-white",
    description:
      "Generate high-engagement threads, viral commentary, and daily founder posts ready to refine and publish. Build an audience of qualified enterprise buyers on X.",
    placeholder: "Enter your X handle or website",
    buttonText: "Draft X Threads",
    metric1: { label: "Viral Post Rate", value: "+38%" },
    metric2: { label: "Follower Growth", value: "3.2x" },
    metric3: { label: "Profile Clicks / Mo", value: "14,500+" },
    capabilities: [
      {
        title: "Breakdown & Thread Engine",
        desc: "Transforms complex industry case studies and product launches into viral unroll threads.",
      },
      {
        title: "Trending Niche Commentary",
        desc: "Monitors tech & industry trending topics and suggests sharp, authoritative takes within minutes.",
      },
      {
        title: "Smart Auto-Scheduling",
        desc: "Publishes during peak engagement windows for your specific follower timezone cluster.",
      },
    ],
  },
};

function renderAgentIcon(iconName, iconColor) {
  switch (iconName) {
    case "Globe":
      return <Globe className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2} />;
    case "CodeXml":
      return <CodeXml className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2} />;
    case "Clapperboard":
      return <Clapperboard className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2} />;
    case "PenTool":
      return <PenTool className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2} />;
    case "LinkedIn":
      return (
        <span className="w-3.5 h-3.5 rounded-[2px] bg-[#0A66C2] text-white flex items-center justify-center text-[8px] font-bold">
          in
        </span>
      );
    case "Reddit":
      return <span className="w-3.5 h-3.5 rounded-full bg-[#FF4500] inline-block" />;
    case "X":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return <Megaphone className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2} />;
  }
}

export default function AgentPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug || "seo";
  const agent = AGENTS_DATA[slug] || AGENTS_DATA.seo;

  const [inputVal, setInputVal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* HERO SECTION matching reference layout */}
        <section className="w-full pt-20 pb-24 md:pt-28 md:pb-32 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle background ambiance */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-[#242120] border border-[#383332] mb-8 shadow-md">
            <span className="bg-white text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase font-sans">
              {agent.pillTag}
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#e4e4e7] font-medium">
              {renderAgentIcon(agent.iconName, agent.iconColor)}
              <span>{agent.title}</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            {agent.title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            {agent.description}
          </p>

          {/* Interactive Input Bar */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
            <div className="p-1.5 rounded-2xl bg-[#242120] border border-[#383332] shadow-2xl flex items-center justify-between gap-2 focus-within:border-[#524b48] transition-all">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={agent.placeholder}
                className="bg-transparent text-white placeholder-[#71717a] px-4 py-2.5 text-sm sm:text-base outline-none flex-1 min-w-0"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#d4d4d8] hover:bg-white text-black font-semibold text-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm active:scale-95"
              >
                <span>{agent.buttonText}</span>
                <span className="text-base font-bold">→</span>
              </button>
            </div>
            <p className="text-xs text-[#71717a] mt-4">
              7-day free trial · Cancel anytime
            </p>
          </form>

          {submitted && (
            <div className="mt-6 p-4 rounded-xl bg-[#1c1a19] border border-[#383332] max-w-md text-sm text-[#4ade80] flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>
                Connected to <strong>{inputVal}</strong>. Running agent radar scan...
              </span>
            </div>
          )}
        </section>

        {/* METRICS & CAPABILITIES */}
        <section className="w-full max-w-5xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-6 rounded-2xl bg-[#171514] border border-[#2e2a28] text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-white block mb-1">
                {agent.metric1.value}
              </span>
              <span className="text-xs text-[#a1a1aa] uppercase tracking-wider font-medium">
                {agent.metric1.label}
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#171514] border border-[#2e2a28] text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-white block mb-1">
                {agent.metric2.value}
              </span>
              <span className="text-xs text-[#a1a1aa] uppercase tracking-wider font-medium">
                {agent.metric2.label}
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#171514] border border-[#2e2a28] text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-white block mb-1">
                {agent.metric3.value}
              </span>
              <span className="text-xs text-[#a1a1aa] uppercase tracking-wider font-medium">
                {agent.metric3.label}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agent.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#171514] border border-[#2e2a28] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    {cap.desc}
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
              Deploy {agent.title} in minutes
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mb-8 leading-relaxed">
              Activate your autonomous agent, connect your channels, and let OKIZA handle the heavy lifting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-lg"
              >
                Start 7-Day Free Trial →
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

