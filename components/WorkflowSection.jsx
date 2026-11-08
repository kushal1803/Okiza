"use client";

import { useState, useEffect, useRef } from "react";
import {
  Eye,
  Telescope,
  Map,
  Palette,
  Send,
  TrendingUp,
  Play,
  Pause,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Terminal,
  Activity,
  Zap,
  Globe,
  Radio,
  BarChart3,
  Search,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Understand",
      subtitle: "Brand Graph Synthesis",
      icon: Eye,
      description:
        "Analyse your business, brand, market and audience with deep AI intelligence.",
      badge: "Foundation Model",
      liveStatus: "Indexing Brand Graph",
      command: "okiza.brand.synthesize({ source: 'yourcompany.com', depth: 'full' })",
      stats: [
        { label: "Attributes Indexed", value: "142 traits" },
        { label: "Voice Drift Margin", value: "0.0%" },
        { label: "ICP Personas", value: "4 tiers" },
      ],
      interactiveType: "graph",
    },
    {
      num: "02",
      title: "Discover",
      subtitle: "Market Gap Radar",
      icon: Telescope,
      description:
        "Identify competitors, market gaps and growth opportunities you didn't know existed.",
      badge: "Real-time Radar",
      liveStatus: "Scanning LLM Answer Engines",
      command: "okiza.radar.detectGaps({ llmAnswers: true, competitorMatrix: 'live' })",
      stats: [
        { label: "Competitors Tracked", value: "12 rivals" },
        { label: "Market Gaps Found", value: "3 clusters" },
        { label: "Win Probability", value: "88.4%" },
      ],
      interactiveType: "radar",
    },
    {
      num: "03",
      title: "Strategise",
      subtitle: "Sprint Growth Roadmap",
      icon: Map,
      description:
        "Build a prioritised, actionable growth roadmap aligned to your objectives.",
      badge: "Sprint Engine",
      liveStatus: "Ranking Growth Sprints",
      command: "okiza.strategy.generateSprint({ target: 'revenue-velocity', horizon: '30d' })",
      stats: [
        { label: "Sprint Items", value: "6 playbooks" },
        { label: "Projected Pipeline", value: "+38% ARR" },
        { label: "Time-to-Value", value: "14 days" },
      ],
      interactiveType: "roadmap",
    },
    {
      num: "04",
      title: "Create",
      subtitle: "Tone-Perfect Studio",
      icon: Palette,
      description:
        "Generate high-converting campaigns, tailored landing pages and brand-aligned assets.",
      badge: "Multi-Modal Studio",
      liveStatus: "Generating Verified Creatives",
      command: "okiza.creative.buildCampaign({ audience: 'Founders', assets: ['LandingPage', 'X'] })",
      stats: [
        { label: "Assets Generated", value: "18 variants" },
        { label: "Predicted CTR", value: "4.8% (Top 1%)" },
        { label: "Brand Tone Match", value: "100.0%" },
      ],
      interactiveType: "studio",
    },
    {
      num: "05",
      title: "Distribute",
      subtitle: "Omnichannel Syndication",
      icon: Send,
      description:
        "Amplify your message across search, AI answer engines, and creator partnerships.",
      badge: "Citation Network",
      liveStatus: "Syndicating to Answer Engines",
      command: "okiza.distribute.deploy({ networks: ['llm-citations', 'organic', 'creators'] })",
      stats: [
        { label: "Answer Engines", value: "ChatGPT, Perplexity" },
        { label: "Creators Synced", value: "8 partners" },
        { label: "Indexed Keywords", value: "480 terms" },
      ],
      interactiveType: "syndicate",
    },
    {
      num: "06",
      title: "Optimise",
      subtitle: "Closed-Loop Telemetry",
      icon: TrendingUp,
      description:
        "Continuously track performance, benchmark rivals, and scale winning initiatives.",
      badge: "Live Telemetry",
      liveStatus: "Feeding Data to Next Sprint",
      command: "okiza.telemetry.listen({ autoTune: true, feedbackLoop: 'closed' })",
      stats: [
        { label: "Organic Lift", value: "+142%" },
        { label: "CAC Reduction", value: "-48%" },
        { label: "Attribution Fit", value: "99.1%" },
      ],
      interactiveType: "telemetry",
    },
  ];

  // Auto-play progress timer
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50; // update every 50ms
    const stepDuration = 5000; // 5 seconds per step
    const stepIncrement = (intervalTime / stepDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((curr) => (curr + 1) % steps.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, activeStep, steps.length]);

  const handleSelectStep = (idx) => {
    setActiveStep(idx);
    setProgress(0);
  };

  const current = steps[activeStep];
  const progressPercent = (activeStep / (steps.length - 1)) * 100;

  return (
    <section
      id="workflow"
      className="w-full px-6 sm:px-10 lg:px-16 py-28 bg-[#000000] relative overflow-hidden border-t border-white/[0.08]"
      data-component="@components/WorkflowSection.jsx"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full opacity-20 pointer-events-none animate-ambient"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-5 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-300 uppercase font-semibold">
              How It Works
            </span>
          </div>

          <h2 className="font-semibold text-white mb-4 tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[1.12] max-w-[700px]">
            Insights are useful.{" "}
            <span className="text-zinc-400">Execution creates growth.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-[540px] leading-relaxed mb-6">
            Okiza takes you from first understanding to measurable results — in one
            connected, autonomous workflow.
          </p>

          {/* Autoplay / Manual Controls Pill */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#111114] border border-white/10 text-xs font-mono text-zinc-400">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 text-white hover:text-zinc-300 transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-white fill-white" />
                  <span>Autoplay Active</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-white fill-white" />
                  <span>Paused</span>
                </>
              )}
            </button>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span className="text-zinc-500">
              Step {current.num} of 06
            </span>
          </div>
        </div>

        {/* 6-Step Connected Modern Rail (Cards with Laser Progress) */}
        <div className="relative mb-12">
          {/* Animated Connecting Laser Rail (Desktop Only) */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[2px] z-0 pointer-events-none">
            {/* Background inactive track */}
            <div className="w-full h-full bg-[#1c1c20]" />
            {/* Active filled beam up to current step */}
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-white/20 via-white to-white shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
            {/* Traveling photon laser particle */}
            <div className="absolute top-[-2px] left-0 w-24 h-[6px] bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] animate-laser" />
          </div>

          {/* 6 Connected Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <div
                  key={step.num}
                  onClick={() => handleSelectStep(idx)}
                  className={`group relative rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-[#141418] border border-white/60 shadow-[0_12px_32px_-8px_rgba(255,255,255,0.18)] -translate-y-1.5"
                      : "bg-[#0b0b0d]/90 border border-[#202024] hover:border-zinc-500 hover:bg-[#111115] hover:-translate-y-1"
                  }`}
                >
                  {/* Active Top Edge Laser Glow */}
                  {isActive && (
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_8px_#ffffff]" />
                  )}

                  <div>
                    {/* Top Node Row: Icon Pod + Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      {/* Circular Icon Pod */}
                      <div className="relative">
                        {isActive && (
                          <div className="absolute -inset-1 rounded-full border border-white/40 animate-ping opacity-30 pointer-events-none" />
                        )}
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                              : isPast
                              ? "bg-[#18181c] text-white border border-white/30"
                              : "bg-[#121215] text-zinc-400 border border-[#27272c] group-hover:text-white group-hover:border-zinc-400"
                          }`}
                        >
                          <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Step Number Monospace Badge */}
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-md font-semibold transition-colors ${
                          isActive
                            ? "bg-white/15 text-white border border-white/30"
                            : "bg-[#141418] text-zinc-500 border border-[#222226] group-hover:text-zinc-300"
                        }`}
                      >
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-base font-semibold text-white tracking-tight mb-1 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-400 mb-2 truncate">
                      {step.subtitle}
                    </p>

                    {/* Step Short Description */}
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  {/* Active Progress Bar (Shows timing when active) */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06]">
                    {isActive ? (
                      <div className="w-full bg-[#222228] h-1 rounded-full overflow-hidden">
                        <div
                          className="bg-white h-full rounded-full transition-all duration-75 ease-linear shadow-[0_0_6px_#ffffff]"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300">
                        <span>{isPast ? "Completed" : "Phase"}</span>
                        <span>{isPast ? "✓" : "→"}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Visual Stage (The "Execution Engine" Showcase) */}
        <div className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-[#121216] via-[#0c0c0f] to-[#070709] p-6 sm:p-8 lg:p-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Subtle top edge illumination & scanline */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

          {/* Showcase Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-white/[0.08] gap-4 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-white text-black shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                PHASE {current.num}
              </span>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white tracking-tight flex items-center gap-2">
                  <span>{current.title}</span>
                  <span className="text-zinc-500 font-normal">/</span>
                  <span className="text-sm font-normal text-zinc-400 font-mono">
                    {current.subtitle}
                  </span>
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {current.liveStatus}
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1 pl-2 border-l border-white/10">
                <button
                  onClick={() =>
                    handleSelectStep((activeStep - 1 + steps.length) % steps.length)
                  }
                  className="px-2.5 py-1 text-xs font-mono text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                >
                  Prev
                </button>
                <button
                  onClick={() =>
                    handleSelectStep((activeStep + 1) % steps.length)
                  }
                  className="px-2.5 py-1 text-xs font-mono text-white bg-white/10 hover:bg-white/20 rounded transition-colors flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Showcase Body: Split Dynamic Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center relative z-10">
            {/* Left 6 cols: Architectural Explanation + Metrics + Shell */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                  Autonomous Engine Capability
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-light">
                  {current.description} Okiza coordinates machine intelligence across brand synthesis, search visibility, automated copy generation, and closed-loop conversion attribution without human bottleneck.
                </p>

                {/* 3 Metric Benchmark Pods */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {current.stats.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all"
                    >
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono block truncate mb-1">
                        {s.label}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white font-mono block">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CLI Command Shell */}
              <div className="rounded-xl bg-[#060608] border border-white/[0.08] p-3.5 flex items-center gap-3 font-mono text-xs overflow-x-auto shadow-inner">
                <Terminal className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="text-zinc-600 select-none">$</span>
                <span className="text-zinc-200 truncate">{current.command}</span>
              </div>
            </div>

            {/* Right 6 cols: Live Dynamic Visual Interactive Canvas */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-white/10 bg-[#070709] p-5 relative overflow-hidden shadow-2xl min-h-[290px] flex flex-col justify-between">
                {/* Header of the visual stage */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="ml-2 text-zinc-300">okiza://stage/{current.title.toLowerCase()}</span>
                  </div>
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    LIVE
                  </span>
                </div>

                {/* Stage Canvas Switcher based on current step */}
                <div className="py-5">
                  {current.interactiveType === "graph" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-400">Brand Graph Resolution</span>
                        <span className="text-white font-mono font-bold">99.4% Synthesized</span>
                      </div>
                      <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white">Tone & ICP Vector Space</div>
                            <div className="text-[11px] text-zinc-500">142 multidimensional traits indexed</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white border border-white/20">
                          Active
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-zinc-300 flex items-center justify-between">
                          <span>Voice Drift</span>
                          <span className="text-white font-bold">0.0%</span>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-zinc-300 flex items-center justify-between">
                          <span>Target ICPs</span>
                          <span className="text-white font-bold">4 Tiers</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {current.interactiveType === "radar" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-400">Competitor & LLM Answer Radar</span>
                        <span className="text-white font-mono font-bold">12 Rivals Scanned</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Radio className="w-4 h-4 text-white animate-pulse" />
                          <span className="text-zinc-200">High-Intent Market Gap Detected</span>
                        </div>
                        <span className="text-white font-mono font-bold">+88.4% win rate</span>
                      </div>
                      <div className="space-y-1.5 text-xs font-mono">
                        <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                          <span className="text-zinc-400">Perplexity / AI Engine Query Gaps</span>
                          <span className="text-white font-semibold">3 Uncontested</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                          <span className="text-zinc-400">Google SGE Share of Voice</span>
                          <span className="text-white font-semibold">+42% Opportunity</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {current.interactiveType === "roadmap" && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-400">Sprint Execution Queue</span>
                        <span className="text-white font-mono font-bold">+38% ARR Pipeline</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/20 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-white text-black font-mono font-bold">P0</span>
                          <span className="text-white font-medium">Capture High-Intent Answer Queries</span>
                        </div>
                        <span className="text-zinc-400 font-mono text-[11px]">Sprint 1</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/10 text-white font-mono">P1</span>
                          <span className="text-zinc-300">Competitor Comparison Playbook</span>
                        </div>
                        <span className="text-zinc-400 font-mono text-[11px]">Sprint 2</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/10 text-white font-mono">P2</span>
                          <span className="text-zinc-300">Top-of-Funnel Creator Syndication</span>
                        </div>
                        <span className="text-zinc-400 font-mono text-[11px]">Sprint 3</span>
                      </div>
                    </div>
                  )}

                  {current.interactiveType === "studio" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-400">Creative Generation Engine</span>
                        <span className="text-white font-mono font-bold">18 Variants Ready</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.03] border border-white/15">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-white">B2B Ad Creative #04</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-black font-bold">
                            100% Brand Fit
                          </span>
                        </div>
                        <p className="text-xs text-zinc-300 italic">
                          &ldquo;Stop switching between 6 disjointed tools. Run your complete AI growth loop in one continuous intelligence OS.&rdquo;
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                        <span>Predicted CTR: <strong className="text-white">4.8% (Top 1%)</strong></span>
                        <span>Formats: <strong className="text-white">Web, Ads, X</strong></span>
                      </div>
                    </div>
                  )}

                  {current.interactiveType === "syndicate" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-400">Syndication Mesh Status</span>
                        <span className="text-white font-mono font-bold">3 Networks Synced</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            <span className="text-zinc-200">ChatGPT & Perplexity LLM Citations</span>
                          </div>
                          <span className="font-mono text-white text-[11px]">Active Cited</span>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-white/40" />
                            <span className="text-zinc-300">Organic Search Indexing</span>
                          </div>
                          <span className="font-mono text-zinc-400 text-[11px]">480 Terms</span>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-white/40" />
                            <span className="text-zinc-300">Verified Creator Network</span>
                          </div>
                          <span className="font-mono text-zinc-400 text-[11px]">8 Partners</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {current.interactiveType === "telemetry" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-400">Closed-Loop Attribution Telemetry</span>
                        <span className="text-white font-mono font-bold">Feedback Active</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                          <span className="text-[10px] font-mono text-zinc-500 uppercase block">Organic Surge</span>
                          <span className="text-xl font-bold text-white font-mono">+142%</span>
                          <span className="text-[10px] text-zinc-400 block mt-0.5">vs 90-day baseline</span>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                          <span className="text-[10px] font-mono text-zinc-500 uppercase block">CAC Reduction</span>
                          <span className="text-xl font-bold text-white font-mono">-48%</span>
                          <span className="text-[10px] text-zinc-400 block mt-0.5">Automated feedback tuning</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-zinc-300 flex items-center justify-between">
                        <span>Closing Loop: Re-feeding win signals into Step 01</span>
                        <span className="text-white font-bold">✓ 100% Loop</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer status line of the visual stage */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Engine: Okiza Autonomous OS v2.4</span>
                  <span className="text-zinc-400">Continuous 24/7 Run</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Rail */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-zinc-400 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span className="text-zinc-300">
                Phase {current.num} of 06 automatically executes and synchronises across all 7 platform studios
              </span>
            </div>

            <a
              href="#showcase"
              className="inline-flex items-center gap-2 text-white hover:text-zinc-300 font-medium transition-colors group"
            >
              <span>Explore live platform dashboard</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
