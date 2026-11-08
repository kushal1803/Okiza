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
      className="flex flex-col gap-4 p-5 rounded-lg border border-[#2a2825] bg-[#161513] hover:border-[#c8f04d]/40 transition-all duration-300 hover:translate-y-[-2px] group cursor-pointer"
      data-component="@components/CapabilityCard.jsx"
    >
      {/* Visual Preview Box */}
      <div
        className="w-full rounded-md overflow-hidden border border-[#2a2825] transition-colors group-hover:border-[#c8f04d]/20"
        style={{ height: 72, background: "#111009" }}
      >
        {previewContent}
      </div>

      {/* Title & Icon */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-7 h-7 rounded flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
          style={{ background: "rgba(200, 240, 77, 0.1)" }}
        >
          {icon}
        </div>
        <span className="text-base font-semibold text-[#f0ede8] group-hover:text-[#c8f04d] transition-colors">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-[#8a8580] leading-relaxed flex-1">
        {description}
      </p>

      {/* Action link */}
      <div className="text-xs text-[#c8f04d] font-medium flex items-center gap-1 group-hover:gap-1.5 transition-all">
        <span>Learn more</span>
        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
      </div>
    </div>
  );
}

