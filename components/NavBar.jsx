"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import OkizaLogo from "./OkizaLogo";
import {
  ChevronDown,
  Menu,
  X,
  Layers,
  Rocket,
  ShoppingBag,
  Users,
  Briefcase,
  Store,
  Building2,
  TrendingUp,
  HeartPulse,
  UserPlus,
  Utensils,
  Scale,
  ArrowRight,
  Bot,
  Search,
  Sparkles,
  FileText,
  Share2,
  Workflow,
  ExternalLink,
  BookOpen,
  HelpCircle,
  FileCode,
  BarChart3,
  CreditCard,
  Megaphone,
} from "lucide-react";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // "usecases" | "agents" | "integrations" | "resources"
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  const customerStories = [
    {
      id: "foremark",
      tag: "CUSTOMER STORY",
      headline:
        "How Foremark Legal turned their seed announcement into a viral X story with Okiza",
      link: "#",
      company: "Foremark Legal",
      domain: "foremarklegal.com",
      initials: "FL",
    },
    {
      id: "novaflow",
      tag: "CUSTOMER STORY",
      headline:
        "How Novaflow captured 64% AI search share against incumbent enterprise rivals",
      link: "#",
      company: "Novaflow AI",
      domain: "novaflow.io",
      initials: "NF",
    },
    {
      id: "artisan",
      tag: "CUSTOMER STORY",
      headline:
        "How Artisan Goods scaled creator campaigns to $2.4M ARR with zero agency headcount",
      link: "#",
      company: "Artisan Goods",
      domain: "artisangoods.co",
      initials: "AG",
    },
  ];

  const useCasesList = [
    {
      title: "B2B SaaS",
      desc: "Pipeline from SEO and content.",
      icon: Layers,
      href: "#showcase",
    },
    {
      title: "Startups",
      desc: "Zero to your first users.",
      icon: Rocket,
      href: "#showcase",
    },
    {
      title: "Ecommerce",
      desc: "Creators, content and ads.",
      icon: ShoppingBag,
      href: "#showcase",
    },
    {
      title: "Digital Agencies",
      desc: "Run more accounts, one team.",
      icon: Users,
      href: "#showcase",
    },
    {
      title: "Professional Services",
      desc: "Turn expertise into demand.",
      icon: Briefcase,
      href: "#showcase",
    },
    {
      title: "Small Business",
      desc: "Marketing without the headcount.",
      icon: Store,
      href: "#showcase",
    },
    {
      title: "Real Estate",
      desc: "Listings and demand on autopilot.",
      icon: Building2,
      href: "#showcase",
    },
    {
      title: "Financial Advisors",
      desc: "Compliant content, more referrals.",
      icon: TrendingUp,
      href: "#showcase",
    },
    {
      title: "Healthcare",
      desc: "Fill the calendar with patients.",
      icon: HeartPulse,
      href: "#showcase",
    },
    {
      title: "Recruiters",
      desc: "Build a brand candidates trust.",
      icon: UserPlus,
      href: "#showcase",
    },
    {
      title: "Restaurants",
      desc: "Own local search and social.",
      icon: Utensils,
      href: "#showcase",
    },
    {
      title: "Law Firms",
      desc: "Rank for the cases you want.",
      icon: Scale,
      href: "#showcase",
    },
  ];

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const story = customerStories[activeStoryIdx];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b border-[#262626] bg-[#000000]/95 backdrop-blur-md transition-all"
      style={{ borderColor: "rgba(38, 38, 38, 0.9)" }}
      data-component="@components/NavBar.jsx"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3.5">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="transition-transform group-hover:scale-105">
            <OkizaLogo size={32} variant="white" />
          </div>
          <span className="font-semibold tracking-tight text-[#ffffff] text-xl font-sans">
            okiza
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {/* Agents */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("agents")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleMenu("agents")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeMenu === "agents"
                  ? "bg-[#18181b] border border-[#262626] text-[#ffffff]"
                  : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              <span>Agents</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "agents" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Agents dropdown */}
            {activeMenu === "agents" && (
              <div className="absolute top-full left-0 mt-3 w-72 rounded-xl border border-[#262626] bg-[#121212]/95 backdrop-blur-xl p-3 shadow-2xl animate-fadeIn z-50">
                <Link
                  href="#capabilities"
                  onClick={() => setActiveMenu(null)}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#1c1c1f] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-[#262626] flex items-center justify-center shrink-0 group-hover:border group-hover:border-[#ffffff]/20">
                    <Bot className="w-4 h-4 text-[#ffffff]" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#ffffff] block">
                      Brand Intelligence Agent
                    </span>
                    <span className="text-xs text-[#a1a1aa] block leading-tight">
                      Deep ICP & positioning modeling
                    </span>
                  </div>
                </Link>

                <Link
                  href="#competitive"
                  onClick={() => setActiveMenu(null)}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#1c1c1f] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-[#262626] flex items-center justify-center shrink-0 group-hover:border group-hover:border-[#ffffff]/20">
                    <Search className="w-4 h-4 text-[#ffffff]" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#ffffff] block">
                      Competitive Intelligence Agent
                    </span>
                    <span className="text-xs text-[#a1a1aa] block leading-tight">
                      Automated rival radar & gap scans
                    </span>
                  </div>
                </Link>

                <Link
                  href="#capabilities"
                  onClick={() => setActiveMenu(null)}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#1c1c1f] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-[#262626] flex items-center justify-center shrink-0 group-hover:border group-hover:border-[#ffffff]/20">
                    <Sparkles className="w-4 h-4 text-[#ffffff]" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#ffffff] block">
                      Creative Studio Agent
                    </span>
                    <span className="text-xs text-[#a1a1aa] block leading-tight">
                      Synthesize viral campaigns & ads
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Integrations */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("integrations")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleMenu("integrations")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeMenu === "integrations"
                  ? "bg-[#18181b] border border-[#262626] text-[#ffffff]"
                  : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              <span>Integrations</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "integrations" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Integrations dropdown */}
            {activeMenu === "integrations" && (
              <div className="absolute top-full left-0 mt-3 w-80 rounded-2xl border border-[#262626] bg-[#121212]/98 backdrop-blur-2xl p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)] animate-fadeIn z-50 text-left">
                <div className="flex flex-col gap-2">
                  <Link
                    href="#showcase"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#1a1a1c] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center shrink-0 group-hover:border-[#ffffff]/30 group-hover:bg-[#27272a] transition-all">
                      <BarChart3 className="w-4 h-4 text-[#ffffff] transition-transform group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#ffffff] group-hover:text-[#ffffff] transition-colors leading-tight">
                        Google Analytics 4 & Search Console
                      </span>
                      <span className="text-xs text-[#a1a1aa] mt-0.5 leading-snug">
                        Native query sync & telemetry
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="#showcase"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#1a1a1c] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center shrink-0 group-hover:border-[#ffffff]/30 group-hover:bg-[#27272a] transition-all">
                      <CreditCard className="w-4 h-4 text-[#ffffff] transition-transform group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#ffffff] group-hover:text-[#ffffff] transition-colors leading-tight">
                        Shopify & Stripe
                      </span>
                      <span className="text-xs text-[#a1a1aa] mt-0.5 leading-snug">
                        Revenue attribution & SKU tracking
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="#showcase"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#1a1a1c] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center shrink-0 group-hover:border-[#ffffff]/30 group-hover:bg-[#27272a] transition-all">
                      <Briefcase className="w-4 h-4 text-[#ffffff] transition-transform group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#ffffff] group-hover:text-[#ffffff] transition-colors leading-tight">
                        HubSpot & Salesforce
                      </span>
                      <span className="text-xs text-[#a1a1aa] mt-0.5 leading-snug">
                        CRM lifecycle intelligence
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="#showcase"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#1a1a1c] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center shrink-0 group-hover:border-[#ffffff]/30 group-hover:bg-[#27272a] transition-all">
                      <Megaphone className="w-4 h-4 text-[#ffffff] transition-transform group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#ffffff] group-hover:text-[#ffffff] transition-colors leading-tight">
                        Meta & TikTok Ads
                      </span>
                      <span className="text-xs text-[#a1a1aa] mt-0.5 leading-snug">
                        Automated creative feedback loops
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="#showcase"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#1a1a1c] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center shrink-0 group-hover:border-[#ffffff]/30 group-hover:bg-[#27272a] transition-all">
                      <Workflow className="w-4 h-4 text-[#ffffff] transition-transform group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#ffffff] group-hover:text-[#ffffff] transition-colors leading-tight">
                        Slack & Webhooks
                      </span>
                      <span className="text-xs text-[#a1a1aa] mt-0.5 leading-snug">
                        Real-time competitor shift triggers
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="pt-3 mt-3 border-t border-[#262626]/70">
                  <Link
                    href="#showcase"
                    onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffffff] hover:text-[#e4e4e7] transition-colors group cursor-pointer"
                  >
                    <span>View all 40+ integrations</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Use Cases (THE MEGA DROPDOWN from reference image) */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("usecases")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleMenu("usecases")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeMenu === "usecases"
                  ? "bg-[#18181b] border border-[#262626] text-[#ffffff] shadow-sm"
                  : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              <span>Use Cases</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "usecases" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mega Dropdown Panel */}
            {activeMenu === "usecases" && (
              <div
                className="absolute top-full -left-48 lg:-left-36 mt-3 w-[920px] lg:w-[980px] rounded-2xl border border-[#262626] bg-[#121212]/98 backdrop-blur-2xl p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] animate-fadeIn z-50 text-left"
              >
                <div className="grid grid-cols-12 gap-6">
                  {/* Left: 3 Columns Grid of 12 Use Cases */}
                  <div className="col-span-8 flex flex-col justify-between">
                    <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                      {useCasesList.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#1a1a1c] transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center shrink-0 group-hover:border-[#ffffff]/30 group-hover:bg-[#27272a] transition-all">
                              <Icon className="w-4 h-4 text-[#ffffff] transition-transform group-hover:scale-110" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-[#ffffff] group-hover:text-[#ffffff] transition-colors leading-tight">
                                {item.title}
                              </span>
                              <span className="text-xs text-[#a1a1aa] mt-0.5 leading-snug">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom Link: See more use cases → */}
                    <div className="pt-6 mt-4 border-t border-[#262626]/70 flex items-center justify-start">
                      <Link
                        href="#capabilities"
                        onClick={() => setActiveMenu(null)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffffff] hover:text-[#e4e4e7] transition-colors group cursor-pointer"
                      >
                        <span>See more use cases</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Featured Customer Story Card */}
                  <div className="col-span-4 flex flex-col">
                    <div className="h-full rounded-xl border border-[#2a2a2d] bg-[#18181b] p-6 flex flex-col justify-between shadow-lg relative overflow-hidden group">
                      {/* Top Content */}
                      <div>
                        <span className="text-[10px] font-semibold tracking-widest text-[#71717a] uppercase block mb-3">
                          {story.tag}
                        </span>

                        <h4 className="text-base font-semibold text-[#ffffff] leading-snug mb-3 tracking-tight">
                          {story.headline}
                        </h4>

                        <Link
                          href="#showcase"
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center gap-1 text-xs text-[#a1a1aa] hover:text-[#ffffff] transition-colors"
                        >
                          <span>Read full story</span>
                          <span>→</span>
                        </Link>
                      </div>

                      {/* Bottom Company Info & Carousel Dots */}
                      <div className="pt-6 mt-6 border-t border-[#262626]/80 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#242427] border border-[#333336] flex items-center justify-center font-bold text-xs text-[#ffffff] shrink-0">
                            {story.initials}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-[#ffffff] leading-tight">
                              {story.company}
                            </span>
                            <span className="text-xs text-[#71717a]">
                              {story.domain}
                            </span>
                          </div>
                        </div>

                        {/* Interactive Pagination Dots matching the image */}
                        <div className="flex items-center gap-1.5 pt-1">
                          {customerStories.map((s, dotIdx) => (
                            <button
                              key={s.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveStoryIdx(dotIdx);
                              }}
                              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                activeStoryIdx === dotIdx
                                  ? "w-5 bg-[#ffffff]"
                                  : "w-1.5 bg-[#3f3f46] hover:bg-[#71717a]"
                              }`}
                              aria-label={`Go to story ${dotIdx + 1}`}
                            />
                          ))}
                          {/* filler decorative dots matching reference */}
                          {[1, 2, 3, 4, 5].map((d) => (
                            <span
                              key={d}
                              className="w-1.5 h-1.5 rounded-full bg-[#27272a] inline-block"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pricing */}
          <Link
            href="#pricing"
            className="px-3 py-1.5 text-sm text-[#a1a1aa] hover:text-[#ffffff] font-medium transition-colors"
          >
            Pricing
          </Link>

          {/* Resources */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleMenu("resources")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeMenu === "resources"
                  ? "bg-[#18181b] border border-[#262626] text-[#ffffff]"
                  : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "resources" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Resources dropdown */}
            {activeMenu === "resources" && (
              <div className="absolute top-full right-0 mt-3 w-72 rounded-2xl border border-[#262626] bg-[#121212]/98 backdrop-blur-2xl p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)] animate-fadeIn z-50 text-left">
                <div className="flex flex-col gap-2">
                  <Link
                    href="#workflow"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#1a1a1c] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center shrink-0 group-hover:border-[#ffffff]/30 group-hover:bg-[#27272a] transition-all">
                      <BookOpen className="w-4 h-4 text-[#ffffff] transition-transform group-hover:scale-110" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#ffffff] block leading-tight">
                        Growth Methodology
                      </span>
                      <span className="text-xs text-[#a1a1aa] mt-0.5 block leading-snug">
                        The 6-step loop
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="#faq"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#1a1a1c] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center shrink-0 group-hover:border-[#ffffff]/30 group-hover:bg-[#27272a] transition-all">
                      <HelpCircle className="w-4 h-4 text-[#ffffff] transition-transform group-hover:scale-110" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#ffffff] block leading-tight">
                        Help Center & FAQ
                      </span>
                      <span className="text-xs text-[#a1a1aa] mt-0.5 block leading-snug">
                        Answers and tutorials
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="#showcase"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#1a1a1c] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1f1f22] border border-[#2e2e32] flex items-center justify-center shrink-0 group-hover:border-[#ffffff]/30 group-hover:bg-[#27272a] transition-all">
                      <FileCode className="w-4 h-4 text-[#ffffff] transition-transform group-hover:scale-110" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#ffffff] block leading-tight">
                        API Documentation
                      </span>
                      <span className="text-xs text-[#a1a1aa] mt-0.5 block leading-snug">
                        Webhooks & endpoints
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right CTA Button (matching reference 'Start free trial') */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#analyze"
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full bg-[#ffffff] text-[#000000] hover:bg-[#e4e4e7] transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] cursor-pointer"
          >
            <span>Start free trial</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#a1a1aa] hover:text-[#ffffff] p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#000000] border-b border-[#262626] px-6 py-6 flex flex-col gap-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          <span className="text-xs font-semibold text-[#71717a] uppercase tracking-wider">
            Use Cases
          </span>
          <div className="grid grid-cols-2 gap-2">
            {useCasesList.slice(0, 6).map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-[#ffffff] py-1.5 px-2 rounded bg-[#111111] border border-[#262626]"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <Link
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-[#ffffff] py-2 border-b border-[#262626]/50"
          >
            Agents & Platform
          </Link>
          <Link
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-[#ffffff] py-2 border-b border-[#262626]/50"
          >
            Methodology
          </Link>
          <Link
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-[#ffffff] py-2 border-b border-[#262626]/50"
          >
            Pricing
          </Link>

          <div className="pt-2">
            <a
              href="#analyze"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold rounded-full bg-[#ffffff] text-[#000000] block"
            >
              Start free trial →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
