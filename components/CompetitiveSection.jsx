"use client";

import { Check, Zap, ArrowRight } from "lucide-react";

export default function CompetitiveSection() {
  const competitorRows = [
    {
      name: "You (Okiza)",
      isYou: true,
      search: { value: "38%", filled: 1 },
      aiSearch: { value: "61%", filled: 2 },
      social: { value: "44%", filled: 1 },
      brandScore: { value: "74%", filled: 2 },
    },
    {
      name: "Rival Co",
      isYou: false,
      search: { value: "72%", filled: 2 },
      aiSearch: { value: "45%", filled: 1 },
      social: { value: "68%", filled: 2 },
      brandScore: { value: "61%", filled: 2 },
    },
    {
      name: "GrowthBase",
      isYou: false,
      search: { value: "65%", filled: 2 },
      aiSearch: { value: "38%", filled: 1 },
      social: { value: "55%", filled: 2 },
      brandScore: { value: "58%", filled: 2 },
    },
    {
      name: "MarketIQ",
      isYou: false,
      search: { value: "51%", filled: 2 },
      aiSearch: { value: "29%", filled: 1 },
      social: { value: "71%", filled: 2 },
      brandScore: { value: "52%", filled: 2 },
    },
  ];

  const features = [
    "Direct & indirect competitor discovery",
    "Pricing & positioning comparison",
    "Search + AI visibility benchmarking",
    "Strengths, weaknesses & market gaps",
    "Geographic competitor mapping",
  ];

  return (
    <section
      id="competitive"
      className="w-full px-6 sm:px-12 md:px-20 py-20 bg-[#000000]"
      data-component="@components/CompetitiveSection.jsx"
    >
      <div className="border-t border-[#262626] pt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col w-full lg:max-w-[420px] lg:min-w-[360px]">
            <p className="text-xs font-medium tracking-widest text-[#ffffff] uppercase mb-4">
              Competitive Intelligence
            </p>
            <h2
              className="font-semibold text-[#ffffff] mb-5 tracking-tight text-3xl sm:text-4xl md:text-[38px] leading-[1.15]"
            >
              Know your competitors. Find your advantage.
            </h2>
            <p className="text-base text-[#a1a1aa] mb-8 leading-relaxed">
              Okiza discovers relevant competitors, analyses how they position
              themselves and identifies the opportunities your business can capture
              before they do.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-3.5 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <Check className="w-2.5 h-2.5 text-[#ffffff]" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-[#a1a1aa]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Opportunity Callout Card */}
            <div
              className="rounded-lg border p-4 shadow-lg transition-all hover:border-[#ffffff]/40"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderColor: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-[#ffffff] flex items-center justify-center">
                  <Zap className="w-2.5 h-2.5 text-[#000000] fill-[#000000]" />
                </div>
                <span className="text-xs font-semibold text-[#ffffff]">
                  Opportunity detected
                </span>
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
                Your competitors have stronger search visibility for three
                high-intent customer queries. Build targeted landing pages to capture
                this demand.
              </p>
              <button
                onClick={() => alert("Launching Competitive Intelligence Explorer...")}
                className="text-xs text-[#ffffff] font-medium flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>Explore Competitive Intelligence</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right Column: Comparison Table */}
          <div className="flex-1 w-full flex flex-col gap-3">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-3 px-4 mb-1">
              <span className="text-xs text-[#a1a1aa] font-medium col-span-1">
                Business
              </span>
              <span className="text-xs text-[#a1a1aa] font-medium text-right">
                Search
              </span>
              <span className="text-xs text-[#a1a1aa] font-medium text-right">
                AI Search
              </span>
              <span className="text-xs text-[#a1a1aa] font-medium text-right">
                Social
              </span>
              <span className="text-xs text-[#a1a1aa] font-medium text-right">
                Brand Score
              </span>
            </div>

            {/* Table Rows */}
            {competitorRows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-5 items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
                  row.isYou
                    ? "border-[#ffffff]/30 bg-[#ffffff]/[0.05] shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    : "border-[#262626] bg-[#111111] hover:border-[#383838]"
                }`}
              >
                <span
                  className={`text-sm font-medium col-span-1 truncate ${
                    row.isYou ? "text-[#ffffff] font-semibold" : "text-[#ffffff]"
                  }`}
                >
                  {row.name}
                </span>

                {/* Search */}
                <div className="flex justify-end">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[0, 1, 2, 3].map((barIdx) => (
                        <div
                          key={barIdx}
                          className="w-1.5 h-4 rounded-sm"
                          style={{
                            background:
                              barIdx < row.search.filled
                                ? row.isYou
                                  ? "#ffffff"
                                  : "#52525b"
                                : "#262626",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-xs font-mono w-7 text-right ${
                        row.isYou ? "text-[#ffffff] font-semibold" : "text-[#a1a1aa]"
                      }`}
                    >
                      {row.search.value}
                    </span>
                  </div>
                </div>

                {/* AI Search */}
                <div className="flex justify-end">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[0, 1, 2, 3].map((barIdx) => (
                        <div
                          key={barIdx}
                          className="w-1.5 h-4 rounded-sm"
                          style={{
                            background:
                              barIdx < row.aiSearch.filled
                                ? row.isYou
                                  ? "#ffffff"
                                  : "#52525b"
                                : "#262626",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-xs font-mono w-7 text-right ${
                        row.isYou ? "text-[#ffffff] font-semibold" : "text-[#a1a1aa]"
                      }`}
                    >
                      {row.aiSearch.value}
                    </span>
                  </div>
                </div>

                {/* Social */}
                <div className="flex justify-end">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[0, 1, 2, 3].map((barIdx) => (
                        <div
                          key={barIdx}
                          className="w-1.5 h-4 rounded-sm"
                          style={{
                            background:
                              barIdx < row.social.filled
                                ? row.isYou
                                  ? "#ffffff"
                                  : "#52525b"
                                : "#262626",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-xs font-mono w-7 text-right ${
                        row.isYou ? "text-[#ffffff] font-semibold" : "text-[#a1a1aa]"
                      }`}
                    >
                      {row.social.value}
                    </span>
                  </div>
                </div>

                {/* Brand Score */}
                <div className="flex justify-end">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[0, 1, 2, 3].map((barIdx) => (
                        <div
                          key={barIdx}
                          className="w-1.5 h-4 rounded-sm"
                          style={{
                            background:
                              barIdx < row.brandScore.filled
                                ? row.isYou
                                  ? "#ffffff"
                                  : "#52525b"
                                : "#262626",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-xs font-mono w-7 text-right ${
                        row.isYou ? "text-[#ffffff] font-semibold" : "text-[#a1a1aa]"
                      }`}
                    >
                      {row.brandScore.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Market Gaps Bottom Card */}
            <div
              className="mt-4 rounded-lg border border-[#262626] p-4 bg-[#111111] hover:border-[#ffffff]/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-[#ffffff] block mb-1">
                    Market Gaps Identified
                  </span>
                  <span className="text-xs text-[#a1a1aa]">
                    3 high-intent keyword clusters with no strong competitor dominance
                  </span>
                </div>
                <div className="text-4xl font-semibold text-[#ffffff] ml-6 font-mono">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
