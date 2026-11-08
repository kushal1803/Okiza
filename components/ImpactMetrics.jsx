export default function ImpactMetrics() {
  const metrics = [
    {
      value: "+142%",
      label: "AI Answer Visibility",
      desc: "Average increase across ChatGPT, Gemini & Perplexity within 90 days",
    },
    {
      value: "3.4x",
      label: "Execution Velocity",
      desc: "From initial competitor discovery to live, published campaign assets",
    },
    {
      value: "-48%",
      label: "Customer Acquisition Cost",
      desc: "By capturing uncompetitive, high-intent buyer queries before rivals",
    },
    {
      value: "14,000+",
      label: "Growth Signals Tracked",
      desc: "Continuous real-time scans across search, social, and ad ecosystems",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-12 md:px-20 py-16 bg-[#0b0a09]">
      <div className="border-y border-[#2a2825] py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 p-4 rounded-lg bg-[#161513]/40 border border-[#2a2825]/60 hover:border-[#c8f04d]/30 transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-bold font-mono text-[#c8f04d] tracking-tight">
                {m.value}
              </span>
              <span className="text-sm font-semibold text-[#f0ede8]">
                {m.label}
              </span>
              <p className="text-xs text-[#8a8580] leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

