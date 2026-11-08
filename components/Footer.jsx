"use client";

import Link from "next/link";
import OkizaLogo from "./OkizaLogo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#2a2825] bg-[#080706] text-[#8a8580] px-6 sm:px-12 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand info */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <OkizaLogo size={24} />
              <span className="font-semibold text-lg text-[#f0ede8] tracking-tight">
                okiza
              </span>
            </div>
            <p className="text-xs text-[#8a8580] max-w-sm leading-relaxed">
              The AI Growth Operating System. Empowering brands with continuous market
              intelligence, competitor analysis, and automated execution.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-[#c8f04d] animate-pulse" />
              <span className="text-[11px] font-mono text-[#c8f04d]">
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#f0ede8] uppercase tracking-wider">
              Platform
            </span>
            <Link href="#capabilities" className="text-xs hover:text-[#f0ede8] transition-colors">
              Brand Intelligence
            </Link>
            <Link href="#competitive" className="text-xs hover:text-[#f0ede8] transition-colors">
              Competitive Intelligence
            </Link>
            <Link href="#capabilities" className="text-xs hover:text-[#f0ede8] transition-colors">
              SEO & AI Search
            </Link>
            <Link href="#capabilities" className="text-xs hover:text-[#f0ede8] transition-colors">
              Creative Studio
            </Link>
            <Link href="#capabilities" className="text-xs hover:text-[#f0ede8] transition-colors">
              Influencer Studio
            </Link>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#f0ede8] uppercase tracking-wider">
              Resources
            </span>
            <Link href="#workflow" className="text-xs hover:text-[#f0ede8] transition-colors">
              Methodology
            </Link>
            <Link href="#showcase" className="text-xs hover:text-[#f0ede8] transition-colors">
              Product Tour
            </Link>
            <Link href="#faq" className="text-xs hover:text-[#f0ede8] transition-colors">
              Documentation
            </Link>
            <Link href="#faq" className="text-xs hover:text-[#f0ede8] transition-colors">
              API Reference
            </Link>
            <Link href="#pricing" className="text-xs hover:text-[#f0ede8] transition-colors">
              Pricing Plans
            </Link>
          </div>

          {/* Links Column 3 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#f0ede8] uppercase tracking-wider">
              Company
            </span>
            <Link href="#" className="text-xs hover:text-[#f0ede8] transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-xs hover:text-[#f0ede8] transition-colors">
              Careers
            </Link>
            <Link href="#" className="text-xs hover:text-[#f0ede8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs hover:text-[#f0ede8] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:text-[#f0ede8] transition-colors">
              Security & Trust
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2a2825] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2025 Okiza Inc. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#f0ede8] transition-colors">
              Twitter / X
            </a>
            <a href="#" className="hover:text-[#f0ede8] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-[#f0ede8] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
