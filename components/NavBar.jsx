"use client";

import { useState } from "react";
import Link from "next/link";
import OkizaLogo from "./OkizaLogo";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full flex items-center justify-between px-6 md:px-10 py-4 border-b border-[#2a2825] bg-[#0b0a09]/90 backdrop-blur-md transition-all"
      style={{ borderColor: "rgba(42, 40, 37, 0.8)" }}
      data-component="@components/NavBar.jsx"
    >
      {/* Brand */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="transition-transform group-hover:scale-105">
          <OkizaLogo size={28} />
        </div>
        <span className="font-semibold tracking-tight text-[#f0ede8] text-xl font-sans">
          okiza
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <div className="relative group">
          <button
            onClick={() => toggleDropdown("platform")}
            className="flex items-center gap-1.5 text-sm text-[#8a8580] hover:text-[#f0ede8] font-medium transition-colors cursor-pointer"
          >
            Platform
            <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-[#2a2825] bg-[#161513] p-2 shadow-xl opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-150 z-50">
            <Link
              href="#capabilities"
              className="block px-3 py-2 text-xs text-[#8a8580] hover:text-[#f0ede8] hover:bg-[#2a2825]/50 rounded-md transition-colors"
            >
              Brand Intelligence
            </Link>
            <Link
              href="#competitive"
              className="block px-3 py-2 text-xs text-[#8a8580] hover:text-[#f0ede8] hover:bg-[#2a2825]/50 rounded-md transition-colors"
            >
              Competitive Intelligence
            </Link>
            <Link
              href="#capabilities"
              className="block px-3 py-2 text-xs text-[#8a8580] hover:text-[#f0ede8] hover:bg-[#2a2825]/50 rounded-md transition-colors"
            >
              SEO & AI Answer Engines
            </Link>
            <Link
              href="#showcase"
              className="block px-3 py-2 text-xs text-[#8a8580] hover:text-[#f0ede8] hover:bg-[#2a2825]/50 rounded-md transition-colors"
            >
              Executive Growth Dashboard
            </Link>
          </div>
        </div>

        <div className="relative group">
          <button
            onClick={() => toggleDropdown("solutions")}
            className="flex items-center gap-1.5 text-sm text-[#8a8580] hover:text-[#f0ede8] font-medium transition-colors cursor-pointer"
          >
            Solutions
            <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-[#2a2825] bg-[#161513] p-2 shadow-xl opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-150 z-50">
            <Link
              href="#solutions"
              className="block px-3 py-2 text-xs text-[#8a8580] hover:text-[#f0ede8] hover:bg-[#2a2825]/50 rounded-md transition-colors"
            >
              B2B SaaS & Tech
            </Link>
            <Link
              href="#solutions"
              className="block px-3 py-2 text-xs text-[#8a8580] hover:text-[#f0ede8] hover:bg-[#2a2825]/50 rounded-md transition-colors"
            >
              E-Commerce & Retail
            </Link>
            <Link
              href="#solutions"
              className="block px-3 py-2 text-xs text-[#8a8580] hover:text-[#f0ede8] hover:bg-[#2a2825]/50 rounded-md transition-colors"
            >
              Agencies & Consultancies
            </Link>
          </div>
        </div>

        <div className="relative group">
          <button
            onClick={() => toggleDropdown("resources")}
            className="flex items-center gap-1.5 text-sm text-[#8a8580] hover:text-[#f0ede8] font-medium transition-colors cursor-pointer"
          >
            Resources
            <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-[#2a2825] bg-[#161513] p-2 shadow-xl opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-150 z-50">
            <Link
              href="#workflow"
              className="block px-3 py-2 text-xs text-[#8a8580] hover:text-[#f0ede8] hover:bg-[#2a2825]/50 rounded-md transition-colors"
            >
              Growth Methodology
            </Link>
            <Link
              href="#faq"
              className="block px-3 py-2 text-xs text-[#8a8580] hover:text-[#f0ede8] hover:bg-[#2a2825]/50 rounded-md transition-colors"
            >
              Knowledge Base & FAQ
            </Link>
            <Link
              href="#showcase"
              className="block px-3 py-2 text-xs text-[#8a8580] hover:text-[#f0ede8] hover:bg-[#2a2825]/50 rounded-md transition-colors"
            >
              Customer Case Studies
            </Link>
          </div>
        </div>

        <Link
          href="#pricing"
          className="text-sm text-[#8a8580] hover:text-[#f0ede8] font-medium transition-colors"
        >
          Pricing
        </Link>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={() => alert("Sign in modal demo")}
          className="text-sm text-[#8a8580] hover:text-[#f0ede8] font-medium px-4 py-2 transition-colors cursor-pointer"
        >
          Log in
        </button>
        <a
          href="#analyze"
          className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-md bg-[#c8f04d] text-[#0b0a09] hover:bg-[#d8f967] transition-all hover:shadow-[0_0_20px_rgba(200,240,77,0.4)] cursor-pointer"
        >
          <span>Get Started</span>
          <span>→</span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-[#8a8580] hover:text-[#f0ede8] p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0b0a09] border-b border-[#2a2825] px-6 py-6 flex flex-col gap-4 shadow-2xl">
          <Link
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#f0ede8] py-1 border-b border-[#2a2825]/50"
          >
            Platform
          </Link>
          <Link
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#f0ede8] py-1 border-b border-[#2a2825]/50"
          >
            Solutions
          </Link>
          <Link
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#f0ede8] py-1 border-b border-[#2a2825]/50"
          >
            How It Works
          </Link>
          <Link
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#f0ede8] py-1 border-b border-[#2a2825]/50"
          >
            Pricing
          </Link>
          <div className="flex flex-col gap-3 pt-3">
            <button
              onClick={() => alert("Sign in demo")}
              className="w-full text-center py-2.5 text-sm border border-[#2a2825] rounded-md text-[#f0ede8]"
            >
              Log in
            </button>
            <a
              href="#analyze"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold rounded-md bg-[#c8f04d] text-[#0b0a09]"
            >
              Get Started →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

