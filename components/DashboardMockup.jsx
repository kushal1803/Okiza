"use client";

import { useState } from "react";
import OkizaLogo from "./OkizaLogo";
import {
  LayoutDashboard,
  Building2,
  Swords,
  Telescope,
  Search,
  Palette,
  Users,
  Map,
  BarChart2,
  Settings,
  Zap,
} from "lucide-react";

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState("overview");

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "business", label: "My Business", icon: Building2 },
    { id: "competitors", label: "Competitors", icon: Swords },
    { id: "opportunities", label: "Market Opportunities", icon: Telescope },
    { id: "seo", label: "SEO & AI Search", icon: Search },
    { id: "creative", label: "Creative Studio", icon: Palette },
    { id: "influencer", label: "Influencer Discovery", icon: Users },
    { id: "strategy", label: "Growth Strategy", icon: Map },
    { id: "performance", label: "Performance", icon: BarChart2 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div
      className="w-full rounded-xl border border-[#262626] overflow-hidden shadow-2xl transition-all"
      style={{ background: "#09090b", fontSize: "12px" }}
      data-component="@components/DashboardMockup.jsx"
    >
      {/* Top Browser Bar */}
      <div
        className="flex items-center gap-1.5 px-4 py-3 border-b border-[#262626]"
        style={{ background: "#0f0f10" }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1" />
        <div
          className="px-4 py-1 rounded border border-[#262626] text-[#a1a1aa] font-mono text-[11px] flex items-center gap-1.5"
          style={{ background: "#18181b" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff] animate-pulse" />
          <span>https://app.okiza.ai/{activeTab}</span>
        </div>
        <div className="flex-1" />
      </div>

      {/* Main Dashboard Layout */}
      <div className="flex flex-col md:flex-row min-h-[560px]">
        {/* Sidebar */}
        <div
          className="flex flex-col py-4 border-b md:border-b-0 md:border-r border-[#262626] shrink-0 w-full md:w-[190px]"
          style={{ background: "#000000" }}
        >
          {/* Logo brand */}
          <div className="px-4 mb-5">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded flex items-center justify-center p-0.5"
                style={{ background: "rgba(255, 255, 255, 0.1)" }}
              >
                <OkizaLogo size={16} variant="white" />
              </div>
              <span className="font-semibold text-[#ffffff] text-[13px]">
                okiza
              </span>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-0.5 px-2 md:px-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2.5 px-3 md:px-4 py-2 transition-all cursor-pointer whitespace-nowrap text-left w-full ${
                    isActive
                      ? "text-[#ffffff] bg-[#ffffff]/[0.08] md:border-l-2 md:border-[#ffffff]"
                      : "text-[#a1a1aa] hover:text-[#ffffff] hover:bg-[#18181b]/60 md:border-l-2 md:border-transparent"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive ? "text-[#ffffff]" : "text-[#71717a]"
                    }`}
                  />
                  <span className="text-[11px] font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content View */}
        <div
          className="flex-1 flex flex-col p-4 sm:p-5 overflow-hidden"
          style={{ background: "#0c0c0e" }}
        >
          {/* Welcome greeting */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div>
              <h3 className="font-semibold text-[#ffffff] mb-0.5 text-base sm:text-lg">
                Good morning. Here&apos;s your growth overview.
              </h3>
              <span className="text-xs text-[#a1a1aa]">
                Tuesday, 14 January 2025 • Active Intelligence Engine v4.2
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ffffff]/10 text-[#ffffff] border border-[#ffffff]/20 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff] animate-ping" />
                Live Sync Active
              </span>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            <div
              className="flex flex-col gap-1 p-3 rounded-lg border border-[#262626] hover:border-[#ffffff]/30 transition-colors"
              style={{ background: "#141416" }}
            >
              <span className="text-xs text-[#a1a1aa]">Brand Score</span>
              <span className="font-semibold text-[#ffffff] text-xl">
                74/100
              </span>
              <span className="text-xs text-[#ffffff] flex items-center gap-1 font-medium">
                <span>↑</span>
                <span>3pts this week</span>
              </span>
            </div>

            <div
              className="flex flex-col gap-1 p-3 rounded-lg border border-[#262626] hover:border-[#ffffff]/30 transition-colors"
              style={{ background: "#141416" }}
            >
              <span className="text-xs text-[#a1a1aa]">Search Visibility</span>
              <span className="font-semibold text-[#ffffff] text-xl">
                38%
              </span>
              <span className="text-xs text-[#71717a] flex items-center gap-1">
                <span>↓</span>
                <span>2% vs last month</span>
              </span>
            </div>

            <div
              className="flex flex-col gap-1 p-3 rounded-lg border border-[#262626] hover:border-[#ffffff]/30 transition-colors"
              style={{ background: "#141416" }}
            >
              <span className="text-xs text-[#a1a1aa]">AI Visibility</span>
              <span className="font-semibold text-[#ffffff] text-xl">
                61%
              </span>
              <span className="text-xs text-[#ffffff] flex items-center gap-1 font-medium">
                <span>↑</span>
                <span>8% vs last month</span>
              </span>
            </div>

            <div
              className="flex flex-col gap-1 p-3 rounded-lg border border-[#262626] hover:border-[#ffffff]/30 transition-colors"
              style={{ background: "#141416" }}
            >
              <span className="text-xs text-[#a1a1aa]">Competitors Tracked</span>
              <span className="font-semibold text-[#ffffff] text-xl">
                12
              </span>
              <span className="text-xs text-[#ffffff] flex items-center gap-1 font-medium">
                <span>↑</span>
                <span>2 new detected</span>
              </span>
            </div>
          </div>

          {/* 2-Column Main Workspace */}
          <div className="flex flex-col lg:flex-row gap-3 flex-1 overflow-hidden">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-3">
              {/* Competitor Search Visibility Bar Chart */}
              <div
                className="rounded-lg border border-[#262626] p-3"
                style={{ background: "#141416" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-[#ffffff]">
                    Competitor Search Visibility
                  </span>
                  <span className="text-xs text-[#a1a1aa]">vs. You</span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[#ffffff] font-semibold w-20 shrink-0 text-[11px]">
                      You (Okiza)
                    </span>
                    <div
                      className="flex-1 rounded-sm overflow-hidden bg-[#262626]"
                      style={{ height: 7 }}
                    >
                      <div
                        className="h-full rounded-sm bg-[#ffffff] shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        style={{ width: "38%" }}
                      />
                    </div>
                    <span className="text-[#ffffff] font-semibold w-8 text-right shrink-0 text-[11px]">
                      38%
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#a1a1aa] w-20 shrink-0 text-[10px]">
                      Rival Co
                    </span>
                    <div
                      className="flex-1 rounded-sm overflow-hidden bg-[#262626]"
                      style={{ height: 6 }}
                    >
                      <div
                        className="h-full rounded-sm bg-[#52525b]"
                        style={{ width: "72%" }}
                      />
                    </div>
                    <span className="text-[#a1a1aa] w-8 text-right shrink-0 text-[10px]">
                      72%
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#a1a1aa] w-20 shrink-0 text-[10px]">
                      GrowthBase
                    </span>
                    <div
                      className="flex-1 rounded-sm overflow-hidden bg-[#262626]"
                      style={{ height: 6 }}
                    >
                      <div
                        className="h-full rounded-sm bg-[#52525b]"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <span className="text-[#a1a1aa] w-8 text-right shrink-0 text-[10px]">
                      65%
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#a1a1aa] w-20 shrink-0 text-[10px]">
                      MarketIQ
                    </span>
                    <div
                      className="flex-1 rounded-sm overflow-hidden bg-[#262626]"
                      style={{ height: 6 }}
                    >
                      <div
                        className="h-full rounded-sm bg-[#52525b]"
                        style={{ width: "51%" }}
                      />
                    </div>
                    <span className="text-[#a1a1aa] w-8 text-right shrink-0 text-[10px]">
                      51%
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommended Actions */}
              <div
                className="rounded-lg border border-[#262626] p-3 flex-1"
                style={{ background: "#141416" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#ffffff]">
                    Recommended Actions
                  </span>
                  <span className="text-[10px] text-[#ffffff] font-medium">High Impact</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start gap-2 p-1.5 rounded hover:bg-[#262626]/40 transition-colors">
                    <div
                      className="w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <span className="text-[#ffffff] font-semibold text-[9px]">
                        1
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#ffffff] block text-[11px] font-medium leading-tight">
                        Build 3 targeted landing pages for high-intent keywords
                      </span>
                      <span className="text-[#a1a1aa] text-[10px]">
                        Projected traffic impact: +32% in 45 days
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-1.5 rounded hover:bg-[#262626]/40 transition-colors">
                    <div
                      className="w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <span className="text-[#ffffff] font-semibold text-[9px]">
                        2
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#ffffff] block text-[11px] font-medium leading-tight">
                        Update your brand positioning on key directory listings
                      </span>
                      <span className="text-[#a1a1aa] text-[10px]">
                        Fix 7 outdated citations across Gartner & G2
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-1.5 rounded hover:bg-[#262626]/40 transition-colors">
                    <div
                      className="w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <span className="text-[#ffffff] font-semibold text-[9px]">
                        3
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#ffffff] block text-[11px] font-medium leading-tight">
                        Launch a retargeting campaign for pricing page visitors
                      </span>
                      <span className="text-[#a1a1aa] text-[10px]">
                        Re-engage 1,420 high-intent drop-offs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[230px] flex flex-col gap-3">
              <div
                className="rounded-lg border p-3 flex-1 flex flex-col gap-3"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#ffffff] flex items-center justify-center shrink-0">
                    <Zap className="w-2.5 h-2.5 text-[#000000] fill-[#000000]" />
                  </div>
                  <span className="text-xs font-semibold text-[#ffffff]">
                    Your next growth move
                  </span>
                </div>

                <p className="text-[#a1a1aa] leading-relaxed text-[10px]">
                  Three of your closest competitors are ranking for high-intent local
                  searches that your business currently misses. Capturing just one of
                  these terms could significantly increase qualified traffic.
                </p>

                <button
                  onClick={() => alert("Simulating automated Opportunity Blueprint generation...")}
                  className="flex items-center gap-1 text-[#ffffff] font-semibold text-[10px] hover:underline cursor-pointer"
                >
                  Explore Opportunity →
                </button>

                <div className="mt-auto border-t border-[#262626] pt-3">
                  <div className="flex flex-col gap-2">
                    <div
                      className="flex items-start gap-2 p-2.5 rounded-lg border"
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        borderColor: "rgba(255, 255, 255, 0.12)",
                      }}
                    >
                      <div className="w-4 h-4 rounded-full bg-[#ffffff] mt-0.5 shrink-0 flex items-center justify-center">
                        <Zap className="w-2 h-2 text-[#000000] fill-[#000000]" />
                      </div>
                      <span className="text-[11px] text-[#ffffff] leading-tight">
                        2 new competitor campaigns detected
                      </span>
                    </div>

                    <div
                      className="flex items-start gap-2 p-2.5 rounded-lg border"
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        borderColor: "rgba(255, 255, 255, 0.12)",
                      }}
                    >
                      <div className="w-4 h-4 rounded-full bg-[#ffffff] mt-0.5 shrink-0 flex items-center justify-center">
                        <Zap className="w-2 h-2 text-[#000000] fill-[#000000]" />
                      </div>
                      <span className="text-[11px] text-[#ffffff] leading-tight">
                        AI search share up 8% this month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
