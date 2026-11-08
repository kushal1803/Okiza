"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2, Globe } from "lucide-react";

export default function HeroSection({ onAnalyze }) {
  const [website, setWebsite] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [analysisResult, setAnalysisResult] = useState(null);

  const steps = [
    "Crawling brand positioning & core offerings...",
    "Benchmarking organic & AI answer engine visibility...",
    "Scanning competitor query overlaps & market gaps...",
    "Synthesizing high-impact growth roadmap...",
  ];

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!website.trim()) {
      alert("Please enter a valid business website or domain (e.g. acme.com)");
      return;
    }

    setAnalyzing(true);
    setAnalysisStep(0);
    setAnalysisResult(null);

    const interval = setInterval(() => {
      setAnalysisStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setAnalyzing(false);
          const domain = website.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
          setAnalysisResult({
            domain,
            brandScore: 78,
            searchVis: "42%",
            aiVis: "64%",
            marketGaps: 4,
            keyFinding: `Competitors are actively winning high-intent buyer searches in your niche. You can capture +35% organic share with 3 strategic category pages.`,
          });
          return prev;
        }
      });
    }, 900);
  };

  return (
    <section
      id="analyze"
      className="w-full flex flex-col items-center text-center px-6 md:px-10 pt-20 md:pt-28 pb-16 bg-[#000000] relative overflow-hidden"
      data-component="@components/HeroSection.jsx"
    >
      {/* Background monochrome glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Intro Pill Badge */}
      <div
        className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#262626] mb-8 transition-transform hover:scale-105 cursor-default"
        style={{ background: "rgba(255, 255, 255, 0.04)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff] inline-block animate-pulse" />
        <span className="text-xs font-medium tracking-widest text-[#ffffff] uppercase font-sans">
          Introducing Okiza — The AI Growth Operating System
        </span>
      </div>

      {/* Main Heading */}
      <h1
        className="font-semibold text-[#ffffff] leading-[1.1] mb-6 relative tracking-[-0.03em] max-w-[840px] text-4xl sm:text-5xl md:text-6xl lg:text-[64px]"
      >
        Your next stage of growth starts with intelligence.
      </h1>

      {/* Subheading */}
      <p
        className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed mb-10 relative max-w-[620px]"
      >
        From understanding your competitors to discovering market opportunities,
        building strategies and creating campaigns — Okiza brings your entire growth
        workflow into one intelligent platform.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-14 relative z-10">
        <a
          href="#showcase"
          className="flex items-center gap-2 bg-[#ffffff] hover:bg-[#e4e4e7] text-[#000000] font-semibold text-base px-6 py-3 rounded-md transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] cursor-pointer"
        >
          <span>Explore the Platform</span>
          <span>→</span>
        </a>
        <a
          href="#workflow"
          className="flex items-center gap-2 border border-[#262626] hover:border-[#a1a1aa] text-[#ffffff] font-medium text-base px-6 py-3 rounded-md bg-transparent transition-colors cursor-pointer"
        >
          <span>See How It Works</span>
        </a>
      </div>

      {/* Business URL Analyzer Input */}
      <div className="relative flex flex-col items-center gap-3 w-full max-w-[580px] z-10">
        <form
          onSubmit={handleAnalyze}
          className="w-full flex flex-col sm:flex-row items-center gap-0 rounded-lg border border-[#262626] overflow-hidden shadow-2xl focus-within:border-[#ffffff]/70 transition-colors"
          style={{ background: "#111111" }}
        >
          <div className="flex items-center flex-1 w-full px-4 py-3 gap-2">
            <Globe className="w-4 h-4 text-[#a1a1aa] shrink-0" />
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="yourcompany.com"
              className="w-full bg-transparent text-sm text-[#ffffff] placeholder-[#71717a] focus:outline-none font-sans"
            />
          </div>
          <button
            type="submit"
            disabled={analyzing}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#ffffff] hover:bg-[#e4e4e7] text-[#000000] text-sm font-semibold whitespace-nowrap transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-75"
          >
            {analyzing ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-[#000000] border-t-transparent rounded-full animate-spin" />
                <span>Scanning...</span>
              </>
            ) : (
              <>
                <span>Start free trial</span>
                <span>→</span>
              </>
            )}
          </button>
        </form>

        <span className="text-xs text-[#a1a1aa]">
          7-day free trial · Cancel anytime
        </span>

        {/* Live Analysis Progress */}
        {analyzing && (
          <div className="w-full mt-4 p-4 rounded-lg border border-[#333333] bg-[#111111]/95 backdrop-blur-md text-left transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#ffffff] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 animate-spin text-[#ffffff]" />
                Live Business Intelligence Scan
              </span>
              <span className="text-xs text-[#a1a1aa]">{analysisStep + 1} of 4</span>
            </div>
            <p className="text-sm text-[#ffffff] mb-2.5 font-mono">{steps[analysisStep]}</p>
            <div className="w-full bg-[#262626] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#ffffff] h-full transition-all duration-500 rounded-full"
                style={{ width: `${((analysisStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Live Analysis Result */}
        {analysisResult && (
          <div className="w-full mt-4 p-5 rounded-xl border border-[#262626] bg-[#111111] text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ffffff]" />
                <span className="font-semibold text-sm text-[#ffffff]">
                  Intelligence Generated for {analysisResult.domain}
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-[#ffffff]/10 text-[#ffffff] border border-[#ffffff]/20 font-medium">
                Live Preview
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 my-3">
              <div className="p-2.5 rounded bg-[#000000] border border-[#262626]">
                <span className="text-[10px] text-[#a1a1aa] block">Brand Score</span>
                <span className="text-base font-bold text-[#ffffff]">
                  {analysisResult.brandScore}/100
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#000000] border border-[#262626]">
                <span className="text-[10px] text-[#a1a1aa] block">Search Share</span>
                <span className="text-base font-bold text-[#ffffff]">
                  {analysisResult.searchVis}
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#000000] border border-[#262626]">
                <span className="text-[10px] text-[#a1a1aa] block">AI Visibility</span>
                <span className="text-base font-bold text-[#ffffff]">
                  {analysisResult.aiVis}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
              <strong className="text-[#ffffff]">High-Impact Growth Opportunity: </strong>
              {analysisResult.keyFinding}
            </p>

            <a
              href="#showcase"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffffff] hover:underline"
            >
              <span>View full competitor breakdown in the dashboard below</span>
              <span>↓</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
