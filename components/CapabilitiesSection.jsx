"use client";

import CapabilityCard from "./CapabilityCard";
import {
  Fingerprint,
  Swords,
  Search,
  Palette,
  Users,
  Map,
  BarChart2,
} from "lucide-react";

export default function CapabilitiesSection({ onSelectCapability }) {
  return (
    <section
      id="capabilities"
      className="w-full px-6 sm:px-12 md:px-20 py-24 bg-[#0b0a09]"
      data-component="@components/CapabilitiesSection.jsx"
    >
      <div className="w-full border-t border-[#2a2825] pt-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#c8f04d] uppercase mb-4">
            The Platform
          </p>
          <h2
            className="font-semibold text-[#f0ede8] mb-5 tracking-tight text-3xl sm:text-4xl md:text-[44px] leading-[1.1] max-w-[640px]"
          >
            One platform. Every growth opportunity.
          </h2>
          <p
            className="text-base text-[#8a8580] max-w-[520px] leading-[1.7]"
          >
            Stop switching between disconnected tools. Bring your business
            intelligence, marketing strategy and execution into one connected
            workspace.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-4">
          {/* Row 1: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Brand Intelligence */}
            <CapabilityCard
              title="Brand Intelligence"
              description="Give AI a complete understanding of your business, products, positioning and customers."
              icon={<Fingerprint className="w-3.5 h-3.5 text-[#c8f04d]" />}
              previewContent={
                <div className="w-full h-full flex flex-col gap-1.5 p-2 justify-center">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-6 h-6 rounded bg-[#c8f04d] opacity-30" />
                    <div className="h-2 w-16 rounded-sm bg-[#2a2825]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-1.5 rounded-sm w-16 bg-[#2a2825]" />
                    <div className="h-1.5 rounded-sm w-8 bg-[#c8f04d] opacity-50" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-1.5 rounded-sm w-16 bg-[#2a2825]" />
                    <div className="h-1.5 rounded-sm w-8 bg-[#c8f04d] opacity-50" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-1.5 rounded-sm w-16 bg-[#2a2825]" />
                    <div className="h-1.5 rounded-sm w-8 bg-[#c8f04d] opacity-50" />
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("brand")}
            />

            {/* 2. Competitive Intelligence */}
            <CapabilityCard
              title="Competitive Intelligence"
              description="Know who you're competing with, how they position themselves and where you can win."
              icon={<Swords className="w-3.5 h-3.5 text-[#c8f04d]" />}
              previewContent={
                <div className="w-full h-full flex flex-col gap-1.5 p-2 justify-center">
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 rounded-sm bg-[#2a2825] w-7 shrink-0" />
                    <div className="h-1.5 rounded-sm bg-[#c8f04d] opacity-60 w-[80%]" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 rounded-sm bg-[#2a2825] w-7 shrink-0" />
                    <div className="h-1.5 rounded-sm bg-[#c8f04d] opacity-60 w-[55%]" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 rounded-sm bg-[#2a2825] w-7 shrink-0" />
                    <div className="h-1.5 rounded-sm bg-[#c8f04d] opacity-60 w-[40%]" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 rounded-sm bg-[#2a2825] w-7 shrink-0" />
                    <div className="h-1.5 rounded-sm bg-[#c8f04d] opacity-60 w-[65%]" />
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("competitors")}
            />

            {/* 3. SEO & AI Search */}
            <CapabilityCard
              title="SEO & AI Search"
              description="Get discovered across traditional search engines and AI-powered answer platforms."
              icon={<Search className="w-3.5 h-3.5 text-[#c8f04d]" />}
              previewContent={
                <div className="w-full h-full flex flex-col gap-1.5 p-2 justify-center">
                  <div className="flex gap-1">
                    <div className="flex-1 rounded p-1 bg-[#1e1c1a]">
                      <div className="h-1.5 rounded-sm w-full mb-1 bg-[#2a2825]" />
                      <div className="h-3 rounded-sm w-4/5 bg-[#c8f04d] opacity-40" />
                    </div>
                    <div className="flex-1 rounded p-1 bg-[#1e1c1a]">
                      <div className="h-1.5 rounded-sm w-full mb-1 bg-[#2a2825]" />
                      <div className="h-3 rounded-sm w-3/5 bg-[#c8f04d] opacity-25" />
                    </div>
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("seo")}
            />

            {/* 4. Creative Studio */}
            <CapabilityCard
              title="Creative Studio"
              description="Create campaigns and content that actually sound like your brand, not generic AI output."
              icon={<Palette className="w-3.5 h-3.5 text-[#c8f04d]" />}
              previewContent={
                <div className="w-full h-full flex gap-1 p-2 items-center">
                  <div className="flex-1 rounded bg-[#c8f04d]/15 h-10 flex items-center justify-center border border-[#c8f04d]/30">
                    <div className="w-3 h-3 rounded-sm bg-[#c8f04d] opacity-80" />
                  </div>
                  <div className="flex-1 rounded bg-[#2a2825] h-10" />
                  <div className="flex-1 rounded bg-[#1e1c1a] h-10" />
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("creative")}
            />
          </div>

          {/* Row 2: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 5. Influencer Studio */}
            <CapabilityCard
              title="Influencer Studio"
              description="Find the right creators to reach the right audience for your growth objectives."
              icon={<Users className="w-3.5 h-3.5 text-[#c8f04d]" />}
              previewContent={
                <div className="w-full h-full flex flex-col gap-1.5 p-2 justify-center">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-[#c8f04d] opacity-30 shrink-0" />
                    <div className="h-1.5 rounded-sm flex-1 bg-[#2a2825]" />
                    <div className="h-1.5 rounded-sm w-6 bg-[#c8f04d] opacity-50 shrink-0" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-[#c8f04d] opacity-30 shrink-0" />
                    <div className="h-1.5 rounded-sm flex-1 bg-[#2a2825]" />
                    <div className="h-1.5 rounded-sm w-6 bg-[#c8f04d] opacity-50 shrink-0" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-[#c8f04d] opacity-30 shrink-0" />
                    <div className="h-1.5 rounded-sm flex-1 bg-[#2a2825]" />
                    <div className="h-1.5 rounded-sm w-6 bg-[#c8f04d] opacity-50 shrink-0" />
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("influencers")}
            />

            {/* 6. Growth Strategy */}
            <CapabilityCard
              title="Growth Strategy"
              description="Turn market insights into a prioritised, actionable growth roadmap for your business."
              icon={<Map className="w-3.5 h-3.5 text-[#c8f04d]" />}
              previewContent={
                <div className="w-full h-full p-2 flex flex-col justify-between">
                  <div className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8f04d] mt-0.5 opacity-70 shrink-0" />
                    <div className="h-1.5 rounded-sm w-full bg-[#2a2825]" />
                  </div>
                  <div className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8f04d] mt-0.5 opacity-70 shrink-0" />
                    <div className="h-1.5 rounded-sm w-full bg-[#2a2825]" />
                  </div>
                  <div className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8f04d] mt-0.5 opacity-70 shrink-0" />
                    <div className="h-1.5 rounded-sm w-full bg-[#2a2825]" />
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("strategy")}
            />

            {/* 7. Performance Studio */}
            <CapabilityCard
              title="Performance Studio"
              description="Understand what's working, identify weak points and improve your next marketing actions."
              icon={<BarChart2 className="w-3.5 h-3.5 text-[#c8f04d]" />}
              previewContent={
                <div className="w-full h-full p-2 flex flex-col justify-end">
                  <div className="flex items-end gap-1 h-10">
                    <div className="flex-1 rounded-sm bg-[#c8f04d] opacity-35" style={{ height: "30%" }} />
                    <div className="flex-1 rounded-sm bg-[#c8f04d] opacity-35" style={{ height: "50%" }} />
                    <div className="flex-1 rounded-sm bg-[#c8f04d] opacity-35" style={{ height: "40%" }} />
                    <div className="flex-1 rounded-sm bg-[#c8f04d] opacity-35" style={{ height: "65%" }} />
                    <div className="flex-1 rounded-sm bg-[#c8f04d] opacity-35" style={{ height: "55%" }} />
                    <div className="flex-1 rounded-sm bg-[#c8f04d] opacity-100 shadow-[0_0_8px_#c8f04d]" style={{ height: "80%" }} />
                    <div className="flex-1 rounded-sm bg-[#c8f04d] opacity-35" style={{ height: "70%" }} />
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("performance")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

