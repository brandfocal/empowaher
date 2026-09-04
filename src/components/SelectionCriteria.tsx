"use client";

import { useEffect } from "react";
import {
  CheckCircle2,
  ArrowUpRight,
  Download,
  Users,
  Award,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PROGRAMME_PDF_PATH = "/EmpowaHER-Programme-2026.pdf";
const NOMINATION_EMAIL_HREF =
  "mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Leader%20Nomination";
const PROSPECTUS_EMAIL_HREF =
  "mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Prospectus%20Request";

const nominatorTypes = [
  {
    number: "01",
    role: "CEOs & Managing Directors",
    desc: "Executive leaders championing emerging women talent within corporate enterprises",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    accentColor: "#ed027e",
  },
  {
    number: "02",
    role: "Board Chairs & Non-Executive Directors",
    desc: "Governance leaders identifying future board and committee successors",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    accentColor: "#B01060",
  },
  {
    number: "03",
    role: "ExCo Members & C-Suite Executives",
    desc: "Functional heads sponsoring high-performing women across divisions",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    accentColor: "#7B1FA0",
  },
  {
    number: "04",
    role: "Directors-General & Public Sector Leaders",
    desc: "Civic and government heads developing next-generation public administrators",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    accentColor: "#3D0C6B",
  },
  {
    number: "05",
    role: "Vice-Chancellors & Academic Deans",
    desc: "Higher education leaders nominating exceptional postgraduates and researchers",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    accentColor: "#0D4A5E",
  },
  {
    number: "06",
    role: "Industry & Association Leaders",
    desc: "Professional bodies and network founders elevating sector innovators",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    accentColor: "#ed027e",
  },
];

const candidateTypes = [
  {
    number: "01",
    category: "High-Potential Corporate Professionals",
    desc: "Women in corporate pipelines preparing for executive and senior management roles",
    image:
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&q=80",
    accentColor: "#ed027e",
  },
  {
    number: "02",
    category: "Entrepreneurs & Venture Founders",
    desc: "Founders of commercial or social enterprises poised for scale and investment",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
    accentColor: "#B01060",
  },
  {
    number: "03",
    category: "Aspiring Board Members & Governance Fellows",
    desc: "Professionals seeking director-level readiness, board literacy, and committee exposure",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    accentColor: "#7B1FA0",
  },
  {
    number: "04",
    category: "Graduates & Academic Achievers",
    desc: "Top graduates and scholars demonstrating early leadership and intellectual capability",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    accentColor: "#3D0C6B",
  },
  {
    number: "05",
    category: "Civic Leaders & Social Innovators",
    desc: "Community champions translating social purpose into measurable regional impact",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    accentColor: "#4A1942",
  },
  {
    number: "06",
    category: "Women Actively Advancing Others",
    desc: "Leaders with an established record of mentoring, sponsorship, and peer empowerment",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    accentColor: "#ed027e",
  },
];

const commitments = [
  {
    number: "01",
    title: "Full Summit Attendance",
    detail: "Attend the complete three-day programme: 29–31 October 2026.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    accentColor: "#ed027e",
  },
  {
    number: "02",
    title: "Active Participation",
    detail: "Engage in all masterclasses, labs, simulations and executive tracks.",
    image:
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=800&q=80",
    accentColor: "#B01060",
  },
  {
    number: "03",
    title: "Executive Dialogue",
    detail: "Contribute proactively to peer exchanges and plenary boardroom sessions.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    accentColor: "#7B1FA0",
  },
  {
    number: "04",
    title: "100-Day Action Plan",
    detail: "Formulate and commit to a structured post-summit leadership roadmap.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    accentColor: "#3D0C6B",
  },
  {
    number: "05",
    title: "Knowledge Transfer",
    detail: "Share summit learnings, methodologies, and tools within your organization.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    accentColor: "#0D4A5E",
  },
  {
    number: "06",
    title: "Mentorship Pledge",
    detail: "Commit to mentoring at least one emerging young woman leader for 12 months.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    accentColor: "#ed027e",
  },
];

const criteria = [
  {
    number: "01",
    label: "Leadership Potential & Initiative",
    weight: "25%",
    numericWeight: 25,
    description:
      "Demonstrated ability to drive change, mobilize teams, and take accountability for outcomes.",
  },
  {
    number: "02",
    label: "Demonstrated Impact & Achievement",
    weight: "20%",
    numericWeight: 20,
    description:
      "Tangible professional, entrepreneurial, or academic milestones with verifiable results.",
  },
  {
    number: "03",
    label: "Integrity & Personal Accountability",
    weight: "15%",
    numericWeight: 15,
    description:
      "Uncompromising ethical standards, resilience, self-awareness, and values-led decision making.",
  },
  {
    number: "04",
    label: "Board & Executive Potential",
    weight: "15%",
    numericWeight: 15,
    description:
      "Strategic aptitude, governance readiness, and commercial or organizational acumen.",
  },
  {
    number: "05",
    label: "Future-Ready Capabilities",
    weight: "10%",
    numericWeight: 10,
    description:
      "Digital fluency, innovative mindset, adaptability, and cross-functional problem solving.",
  },
  {
    number: "06",
    label: "Commitment to Advancing Women",
    weight: "10%",
    numericWeight: 10,
    description:
      "Evidence of championing peers, mentorship involvement, and contributing to collective growth.",
  },
  {
    number: "07",
    label: "Post-Programme Impact Plan",
    weight: "5%",
    numericWeight: 5,
    description:
      "Clear, actionable vision for applying programme outcomes to create measurable value.",
  },
];

export function SelectionCriteria() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }
    const heroImg = document.getElementById("criteria-hero-parallax-img");
    if (!heroImg) {
      return;
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.3;
      heroImg.style.transform = `translateY(${scrollY * speed}px) scale(1.12)`;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      id="top"
      className="min-h-screen bg-[#ffffff] font-sans text-[#3f3f3f] selection:bg-[#ed027e] selection:text-[#ffffff]"
    >
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col">
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Header Navigation */}
          <Header currentPath="/selection-criteria" />

          {/* Background Image with Ambient Overlay */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img
              id="criteria-hero-parallax-img"
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1800&q=85&fit=crop"
              alt="African professional woman leader in an executive workspace"
              className="h-full w-full scale-[1.15] object-cover object-center will-change-transform"
              style={{
                transform: "translateY(0) scale(1.12)",
              }}
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/60 to-black/35"
            aria-hidden="true"
          />

          {/* Hero Main Content */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-5 px-5 pb-10 sm:px-8 sm:pb-14 md:px-12 md:pb-16 lg:px-16 lg:pb-14">
            {/* Status Badge */}
            <div
              className="hero-reveal flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:px-4 sm:text-[0.6875rem]"
              style={{
                animationDelay: "0ms",
              }}
            >
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ed027e] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ed027e]" />
              </span>
              <span>Selection Framework</span>
              <span className="mx-1 h-1 w-1 rounded-full bg-white/70 sm:mx-2" />
              <span>Summit 2026</span>
            </div>

            {/* Summit Overline */}
            <div
              className="hero-reveal flex flex-wrap items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/85 sm:text-xs lg:tracking-[0.2em]"
              style={{
                animationDelay: "60ms",
              }}
            >
              <span>EmpowaHer™ Leadership Programme</span>
              <span
                className="inline-block h-3 w-px bg-white/40 align-middle"
                aria-hidden="true"
              />
              <span className="rounded-full bg-[#ed027e] px-2.5 py-0.5 font-extrabold text-white">
                Candidate Selection &amp; Criteria
              </span>
            </div>

            {/* 3-Column Hero Layout */}
            <div className="grid w-full grid-cols-1 items-end gap-y-6 text-left lg:grid-cols-[2fr_1.2fr_1fr] lg:gap-x-12">
              <div
                className="hero-reveal flex flex-col border-white/15 lg:border-r lg:pr-8"
                style={{
                  animationDelay: "120ms",
                }}
              >
                <h1 className="font-heading text-[clamp(2.3rem,4.5vw,4.25rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white">
                  <span>IDENTIFYING AFRICA&apos;S</span>
                  <br />
                  <span className="text-[#ed027e]">EMERGING</span>
                  <br />
                  <span>LEADERS</span>
                </h1>

                {/* Hero CTAs */}
                <div
                  className="hero-reveal mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start"
                  style={{
                    animationDelay: "300ms",
                  }}
                >
                  <a
                    href={NOMINATION_EMAIL_HREF}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#ed027e]/90 hover:scale-[1.02] hover:shadow-xl sm:w-auto"
                  >
                    <span>Nominate a Leader</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href={PROGRAMME_PDF_PATH}
                    download="EmpowaHER-Programme-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:text-[#3f3f3f] hover:scale-[1.02] hover:shadow-lg sm:w-auto"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Criteria (PDF)</span>
                  </a>
                </div>
              </div>

              <div
                className="hero-reveal border-white/15 lg:border-r lg:pr-8"
                style={{
                  animationDelay: "180ms",
                }}
              >
                <h2 className="font-heading text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.25] tracking-[-0.01em] text-white/90">
                  <span>
                    A Curated, Merit-Based Selection Process for 200 Outstanding Women (18–35)
                  </span>
                </h2>
              </div>

              <div
                className="hero-reveal"
                style={{
                  animationDelay: "240ms",
                }}
              >
                <p className="font-sans text-[0.875rem] font-normal leading-[1.65] text-white/70">
                  <span>
                    EmpowaHer™ is an invitation-led accelerator designed to convene a credible cohort of women with demonstrated ambition, capability, and influence across Africa.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Eligibility Section */}
      <section
        id="eligibility"
        className="flex min-h-screen flex-col border-t-4 border-[#ed027e] bg-[#ffffff] text-[#3f3f3f] lg:flex-row"
      >
        <div className="flex min-h-screen w-full flex-col lg:flex-row">
          {/* Sticky Left Sidebar with Visual Image */}
          <aside className="relative order-2 flex w-full flex-col bg-[#ffffff] p-5 sm:p-8 lg:sticky lg:top-0 lg:order-1 lg:h-screen lg:min-h-[520px] lg:w-[40%] lg:self-start lg:p-10">
            <figure className="relative aspect-[4/3] min-h-0 flex-1 overflow-hidden rounded-2xl lg:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=85"
                alt="EmpowaHer eligible candidate in executive corporate setting"
                className="h-full w-full rounded-2xl object-cover object-top"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5"
                aria-hidden="true"
              />
            </figure>

            <p className="mt-4 text-right text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[#3f3f3f]/40">
              <span>Produced by EmpowaWorx™</span>
            </p>
          </aside>

          {/* Right Column with Eligibility Details */}
          <div className="order-1 flex flex-1 flex-col border-[#3f3f3f]/10 lg:order-2 lg:border-l">
            {/* Eligibility Header */}
            <div className="reveal border-b border-[#3f3f3f]/10 px-5 py-8 lg:px-12 lg:pb-14 lg:pt-12">
              <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
                <span>01 — Eligibility Criteria</span>
              </div>
              <h2 className="mb-2 font-heading text-[clamp(2rem,3.5vw,3rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
                <span>Who Qualifies?</span>
              </h2>
              <p className="max-w-[44ch] text-[0.875rem] font-normal leading-[1.65] text-[#3f3f3f]/70">
                <span>
                  We are looking for women aged 18–35 whose ambition is matched by verifiable evidence of influence, initiative, and an active commitment to advancing others.
                </span>
              </p>
            </div>

            {/* Subsection 1: Who May Nominate */}
            <div className="border-b border-[#3f3f3f]/10 px-5 py-10 lg:px-12 lg:py-12">
              <div className="reveal mb-6 flex items-center gap-2">
                <Users className="h-4 w-4 text-[#ed027e]" />
                <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                  <span>Who May Nominate</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                {nominatorTypes.map((item) => (
                  <article
                    key={item.number}
                    className="reveal group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-black p-6 shadow-md will-change-transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-xl sm:min-h-[240px]"
                  >
                    {/* Background Image with Zoom */}
                    <img
                      src={item.image}
                      alt={item.role}
                      className="absolute inset-0 h-full w-full object-cover object-center will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />

                    {/* Dark Ambient Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 transition-opacity duration-500 group-hover:opacity-90"
                      aria-hidden="true"
                    />

                    {/* Subtle Radial Color Glow */}
                    <div
                      className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                      style={{
                        background: `radial-gradient(circle at top right, ${item.accentColor} 0%, transparent 70%)`,
                      }}
                      aria-hidden="true"
                    />

                    {/* Top Accent Indicator */}
                    <div
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                      style={{ backgroundColor: item.accentColor }}
                    />

                    {/* Top Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-black/50 px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md border border-white/20 shadow-sm">
                        {item.number}
                      </span>
                      <span
                        className="h-2 w-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-150"
                        style={{ backgroundColor: item.accentColor }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mt-auto pt-4">
                      <h4 className="font-heading text-base sm:text-lg font-bold uppercase leading-tight text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                        {item.role}
                      </h4>
                      <p className="mt-1.5 font-sans text-xs sm:text-[0.8125rem] font-normal leading-[1.55] text-white/80 transition-opacity duration-300 group-hover:text-white">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Subsection 2: Eligible Candidates */}
            <div className="border-b border-[#3f3f3f]/10 px-5 py-10 lg:px-12 lg:py-12">
              <div className="reveal mb-6 flex items-center gap-2">
                <Award className="h-4 w-4 text-[#ed027e]" />
                <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                  <span>Eligible Candidates</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                {candidateTypes.map((item) => (
                  <article
                    key={item.number}
                    className="reveal group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-black p-6 shadow-md will-change-transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-xl sm:min-h-[240px]"
                  >
                    {/* Background Image with Zoom */}
                    <img
                      src={item.image}
                      alt={item.category}
                      className="absolute inset-0 h-full w-full object-cover object-center will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />

                    {/* Dark Ambient Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 transition-opacity duration-500 group-hover:opacity-90"
                      aria-hidden="true"
                    />

                    {/* Subtle Radial Color Glow */}
                    <div
                      className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                      style={{
                        background: `radial-gradient(circle at top right, ${item.accentColor} 0%, transparent 70%)`,
                      }}
                      aria-hidden="true"
                    />

                    {/* Top Accent Indicator */}
                    <div
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                      style={{ backgroundColor: item.accentColor }}
                    />

                    {/* Top Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-black/50 px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md border border-white/20 shadow-sm">
                        {item.number}
                      </span>
                      <span
                        className="h-2 w-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-150"
                        style={{ backgroundColor: item.accentColor }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mt-auto pt-4">
                      <h4 className="font-heading text-base sm:text-lg font-bold uppercase leading-tight text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                        {item.category}
                      </h4>
                      <p className="mt-1.5 font-sans text-xs sm:text-[0.8125rem] font-normal leading-[1.55] text-white/80 transition-opacity duration-300 group-hover:text-white">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Subsection 3: Mandatory Commitments */}
            <div className="px-5 py-10 lg:px-12 lg:py-12">
              <div className="reveal mb-6 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#ed027e]" />
                <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                  <span>Mandatory Commitments</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                {commitments.map((item) => (
                  <article
                    key={item.title}
                    className="reveal group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-black p-5 shadow-md will-change-transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-xl sm:min-h-[210px]"
                  >
                    {/* Background Image with Zoom */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover object-center will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />

                    {/* Dark Ambient Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 transition-opacity duration-500 group-hover:opacity-90"
                      aria-hidden="true"
                    />

                    {/* Subtle Radial Color Glow */}
                    <div
                      className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                      style={{
                        background: `radial-gradient(circle at top right, ${item.accentColor} 0%, transparent 70%)`,
                      }}
                      aria-hidden="true"
                    />

                    {/* Top Accent Indicator */}
                    <div
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                      style={{ backgroundColor: item.accentColor }}
                    />

                    {/* Top Badge & Check Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md border border-white/20 shadow-sm">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#ed027e]" />
                        <span>Commitment {item.number}</span>
                      </span>
                      <span
                        className="h-2 w-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-150"
                        style={{ backgroundColor: item.accentColor }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mt-auto pt-3">
                      <h4 className="font-heading text-sm sm:text-base font-bold uppercase leading-tight text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                        {item.title}
                      </h4>
                      <p className="mt-1 font-sans text-xs font-normal leading-[1.55] text-white/80 transition-opacity duration-300 group-hover:text-white">
                        {item.detail}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Selection Framework Section */}
      <section
        id="framework"
        className="w-full bg-[#0D0D0D] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="reveal mb-12 max-w-2xl">
            <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
              <span>02 — Assessment Framework</span>
            </div>
            <h2 className="font-heading text-[clamp(2.5rem,4.5vw,4.25rem)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-white">
              <span>How We Assess Potential</span>
            </h2>
            <p className="mt-3 font-sans text-[0.875rem] font-normal leading-[1.65] text-white/70">
              <span>
                A transparent, evidence-led weighting framework keeps the cohort credible, high-impact, and focused on the leadership Africa needs next.
              </span>
            </p>
          </div>

          <div className="border-t border-white/10">
            {criteria.map((item) => (
              <article
                key={item.number}
                className="reveal group relative grid cursor-default grid-cols-[3.5rem_1fr_auto] items-center gap-4 overflow-hidden border-b border-white/10 py-7 transition-[background-color,padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.04] hover:pl-5 sm:grid-cols-[5rem_1fr_auto] sm:gap-8 sm:py-8 sm:hover:pl-7"
              >
                {/* Interactive Left Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 bg-[#ed027e] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

                {/* Big Number */}
                <span
                  className="origin-left font-heading text-[3rem] font-black leading-none tracking-[-0.02em] text-white/10 transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[#ed027e]/30 group-hover:scale-105 sm:text-[4.25rem]"
                  aria-hidden="true"
                >
                  {item.number}
                </span>

                {/* Label & Description */}
                <div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-[color,letter-spacing] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[#ed027e] sm:text-base">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 max-w-[60ch] font-sans text-xs font-normal leading-[1.6] text-white/65 transition-colors duration-300 group-hover:text-white/85 sm:text-sm">
                    {item.description}
                  </p>
                  
                  {/* Subtle Visual Weight Progress Bar */}
                  <div className="mt-3.5 h-1 w-full max-w-[280px] overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#ed027e] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:brightness-125"
                      style={{ width: `${item.numericWeight * 3.5}%` }}
                    />
                  </div>
                </div>

                {/* Weight Percentage */}
                <div className="text-right">
                  <strong className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-black leading-none text-[#ed027e] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                    {item.weight}
                  </strong>
                  <span className="block font-heading text-[0.625rem] font-bold uppercase tracking-[0.18em] text-white/40">
                    Weighting
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Site Footer with Contact & Legal */}
      <Footer />
    </main>
  );
}
