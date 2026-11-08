"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="w-full px-6 sm:px-12 md:px-20 py-20 bg-[#0b0a09] relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #c8f04d 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto rounded-2xl border border-[#2a2825] bg-gradient-to-b from-[#161513] to-[#0e0d0c] p-8 sm:p-14 text-center relative z-10 shadow-2xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8f04d]/10 text-[#c8f04d] text-xs font-semibold mb-6 border border-[#c8f04d]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Your Free 14-Day Growth Trial</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0ede8] tracking-tight mb-4 leading-tight">
          Ready to turn intelligence into your unfair advantage?
        </h2>

        <p className="text-base text-[#8a8580] max-w-xl mx-auto mb-8 leading-relaxed">
          Join over 1,200 ambitious brands using Okiza to outmaneuver competitors,
          dominate AI search, and scale predictable revenue.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c8f04d]/15 border border-[#c8f04d]/40 text-[#c8f04d] text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Success! Welcome aboard. Check your inbox for your access link.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              required
              className="w-full px-4 py-3 rounded-md bg-[#0b0a09] border border-[#2a2825] text-sm text-[#f0ede8] placeholder-[#8a8580] focus:outline-none focus:border-[#c8f04d]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#c8f04d] hover:bg-[#d8f967] text-[#0b0a09] font-semibold text-sm whitespace-nowrap transition-all shadow-[0_0_20px_rgba(200,240,77,0.3)] cursor-pointer"
            >
              Get Started Free →
            </button>
          </form>
        )}

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-[#8a8580]">
          <span>✓ No credit card required</span>
          <span>✓ Full access to all 7 studios</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}

