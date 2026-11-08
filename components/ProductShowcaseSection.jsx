import DashboardMockup from "./DashboardMockup";

export default function ProductShowcaseSection() {
  return (
    <section
      id="showcase"
      className="w-full px-6 sm:px-12 md:px-20 py-20 bg-[#0b0a09]"
      data-component="@components/ProductShowcaseSection.jsx"
    >
      <div className="border-t border-[#2a2825] pt-20">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-xs font-medium tracking-widest text-[#c8f04d] uppercase mb-4">
            The Product
          </p>
          <h2
            className="font-semibold text-[#f0ede8] mb-4 tracking-tight text-3xl sm:text-4xl md:text-[44px] leading-[1.1]"
          >
            One workspace. Every growth signal.
          </h2>
          <p
            className="text-base text-[#8a8580] max-w-[540px] leading-[1.7]"
          >
            Okiza surfaces the intelligence your team needs — from brand health to
            competitor moves, market opportunities and AI-optimised content — in
            one connected dashboard.
          </p>
        </div>

        {/* Dashboard Mockup Display */}
        <DashboardMockup />
      </div>
    </section>
  );
}

