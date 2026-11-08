"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2, Search, Globe, ShieldCheck, Zap } from "lucide-react";

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
      className="w-full flex flex-col items-center text-center px-6 md:px-10 pt-20 md:pt-24 pb-16 bg-[#0b0a09] relative overflow-hidden"
      data-component="@components/HeroSection.jsx"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #c8f04d 0%, transparent 70%)",
        }}
      />

      {/* Intro Pill */}
      <div
        className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2a2825] mb-8 transition-transform hover:scale-105 cursor-default"
        style={{ background: "rgba(200, 240, 77, 0.06)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#c8f04d] inline-block animate-pulse" />
        <span className="text-xs font-medium tracking-widest text-[#c8f04d] uppercase font-sans">
          Introducing Okiza — The AI Growth Operating System
        </span>
      </div>

      {/* Main Heading */}
      <h1
        className="font-semibold text-[#f0ede8] leading-[1.1] mb-6 relative tracking-[-0.03em] max-w-[840px] text-4xl sm:text-5xl md:text-6xl lg:text-[64px]"
      >
        Your next stage of growth starts with intelligence.
      </h1>

      {/* Subheading */}
      <p
        className="text-base sm:text-lg text-[#8a8580] leading-relaxed mb-10 relative max-w-[620px]"
      >
        From understanding your competitors to discovering market opportunities,
        building strategies and creating campaigns — Okiza brings your entire growth
        workflow into one intelligent platform.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-14 relative z-10">
        <a
          href="#showcase"
          className="flex items-center gap-2 bg-[#c8f04d] hover:bg-[#d8f967] text-[#0b0a09] font-semibold text-base px-6 py-3 rounded-md transition-all shadow-[0_0_20px_rgba(200,240,77,0.25)] hover:shadow-[0_0_30px_rgba(200,240,77,0.45)] cursor-pointer"
        >
          <span>Explore the Platform</span>
          <span>→</span>
        </a>
        <a
          href="#workflow"
          className="flex items-center gap-2 border border-[#2a2825] hover:border-[#8a8580] text-[#f0ede8] font-medium text-base px-6 py-3 rounded-md bg-transparent transition-colors cursor-pointer"
        >
          <span>See How It Works</span>
        </a>
      </div>

      {/* Business URL Analyzer Input */}
      <div className="relative flex flex-col items-center gap-3 w-full max-w-[580px] z-10">
        <form
          onSubmit={handleAnalyze}
          className="w-full flex flex-col sm:flex-row items-center gap-0 rounded-lg border border-[#2a2825] overflow-hidden shadow-2xl focus-within:border-[#c8f04d]/70 transition-colors"
          style={{ background: "#161513" }}
        >
          <div className="flex items-center flex-1 w-full px-4 py-3 gap-2">
            <Globe className="w-4 h-4 text-[#8a8580] shrink-0" />
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="Enter your business website (e.g. yourcompany.com)..."
              className="w-full bg-transparent text-sm text-[#f0ede8] placeholder-[#8a8580] focus:outline-none font-sans"
            />
          </div>
          <button
            type="submit"
            disabled={analyzing}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#c8f04d] hover:bg-[#d8f967] text-[#0b0a09] text-sm font-semibold whitespace-nowrap transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-75"
          >
            {analyzing ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-[#0b0a09] border-t-transparent rounded-full animate-spin" />
                <span>Scanning...</span>
              </>
            ) : (
              <>
                <span>Analyse My Business</span>
                <span>→</span>
              </>
            )}
          </button>
        </form>

        <span className="text-xs text-[#8a8580]">
          Understand your business before you decide your next move.
        </span>

        {/* Live Analysis Progress / Result Modal */}
        {analyzing && (
          <div className="w-full mt-4 p-4 rounded-lg border border-[#c8f04d]/30 bg-[#161513]/90 backdrop-blur-md text-left transition-all animate-fadeIn">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#c8f04d] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                Live Business Intelligence Scan
              </span>
              <span className="text-xs text-[#8a8580]">{analysisStep + 1} of 4</span>
            </div>
            <p className="text-sm text-[#f0ede8] mb-2.5 font-mono">{steps[analysisStep]}</p>
            <div className="w-full bg-[#2a2825] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#c8f04d] h-full transition-all duration-500 rounded-full"
                style={{ width: `${((analysisStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {analysisResult && (
          <div className="w-full mt-4 p-5 rounded-xl border border-[#c8f04d]/40 bg-[#161513] text-left shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-[#2a2825]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#c8f04d]" />
                <span className="font-semibold text-sm text-[#f0ede8]">
                  Intelligence Generated for {analysisResult.domain}
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-[#c8f04d]/10 text-[#c8f04d] border border-[#c8f04d]/30 font-medium">
                Live Preview
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 my-3">
              <div className="p-2.5 rounded bg-[#0b0a09] border border-[#2a2825]">
                <span className="text-[10px] text-[#8a8580] block">Brand Score</span>
                <span className="text-base font-bold text-[#f0ede8]">
                  {analysisResult.brandScore}/100
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#0b0a09] border border-[#2a2825]">
                <span className="text-[10px] text-[#8a8580] block">Search Share</span>
                <span className="text-base font-bold text-[#c8f04d]">
                  {analysisResult.searchVis}
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#0b0a09] border border-[#2a2825]">
                <span className="text-[10px] text-[#8a8580] block">AI Visibility</span>
                <span className="text-base font-bold text-[#c8f04d]">
                  {analysisResult.aiVis}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8a8580] leading-relaxed mb-3">
              <strong className="text-[#f0ede8]">High-Impact Growth Opportunity: </strong>
              {analysisResult.keyFinding}
            </p>

            <a
              href="#showcase"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c8f04d] hover:underline"
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

