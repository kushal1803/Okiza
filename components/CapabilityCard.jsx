import { ArrowRight } from "lucide-react";

export default function CapabilityCard({
  title,
  description,
  icon,
  previewContent,
  link = "#",
  onSelect,
}) {
  return (
    <div
      onClick={onSelect}
      className="flex flex-col gap-4 p-5 rounded-xl border border-[#262626] bg-[#111111] hover:border-[#ffffff]/50 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] group cursor-pointer"
      data-component="@components/CapabilityCard.jsx"
    >
      {/* Visual Preview Box */}
      <div
        className="w-full rounded-lg overflow-hidden border border-[#262626] transition-colors group-hover:border-[#ffffff]/25 relative"
        style={{ minHeight: 112, background: "#0a0a0c" }}
      >
        {previewContent}
      </div>

      {/* Title & Icon */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[#1c1c1f] border border-[#2e2e32] transition-transform group-hover:scale-105 group-hover:border-[#ffffff]/30"
        >
          {icon}
        </div>
        <span className="text-base font-semibold text-[#ffffff] group-hover:text-[#ffffff] transition-colors">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed flex-1">
        {description}
      </p>

      {/* Action link */}
      <div className="text-xs text-[#ffffff] font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all">
        <span>Learn more</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
}
