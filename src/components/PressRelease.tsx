"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Download,
  FileText,
  Globe2,
  Lightbulb,
  Mail,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PROGRAMME_PDF_PATH = "/EmpowaHER-Programme-2026.pdf";
const PRESS_RELEASE_PDF_PATH = "/EmpowaHer-Media-Release-2026.pdf";
const MEDIA_ENQUIRY_EMAIL =
  "mailto:boitumelo@empowaworx.co.za?subject=EmpowaHer%20Leadership%20Summit%202026%20Press%20Enquiry";

interface MetricCard {
  id: string;
  stat: string;
  label: string;
  sublabel: string;
  source: string;
  icon: typeof Calendar;
}

const keyEvidenceMetrics: MetricCard[] = [
  {
    id: "parity-gap",
    stat: "123 YEARS",
    label: "To Global Gender Parity",
    sublabel: "At prevailing rate of progress",
    source: "WEF Global Gender Gap Report 2025",
    icon: Clock,
  },
  {
    id: "executive-gap",
    stat: "27.4%",
    label: "JSE Top 40 Executive Roles",
    sublabel: "Versus 38% of board seats",
    source: "Just Share 2025 Assessment",
    icon: BarChart3,
  },
  {
    id: "ceo-representation",
    stat: "3 OF 40",
    label: "JSE Top 40 Female CEOs",
    sublabel: "Glaring leadership pipeline deficit",
    source: "Just Share 2025 Assessment",
    icon: TrendingUp,
  },
  {
    id: "summit-cohort",
    stat: "200 LEADERS",
    label: "From 200 Organisations",
    sublabel: "29–31 October 2026 • Randburg",
    source: "EmpowaWorx House Cohort",
    icon: Users,
  },
];

const strategicPriorities = [
  {
    number: "01",
    title: "Digital Leadership & AI Innovation",
    summary:
      "Navigating artificial intelligence, algorithmic governance, digital transformation, and responsible technological influence across enterprise systems.",
    icon: Lightbulb,
    tags: ["Artificial Intelligence", "Digital Transformation", "Future of Work"],
  },
  {
    number: "02",
    title: "Entrepreneurship, Innovation & Funding",
    summary:
      "Commercial venture scaling, access to early and growth-stage capital, market integration, and building commercially resilient enterprises.",
    icon: Briefcase,
    tags: ["Venture Capital", "Market Access", "Enterprise Growth"],
  },
  {
    number: "03",
    title: "Leadership, Governance & Board Readiness",
    summary:
      "Mastering boardroom dynamics, fiduciary accountability, ethical institutional governance, and direct pathways to executive board appointments.",
    icon: ShieldCheck,
    tags: ["Board Readiness", "Fiduciary Duty", "Executive Governance"],
  },
  {
    number: "04",
    title: "Personal Leadership & Career Transformation",
    summary:
      "Cultivating executive presence, sustainable high-performance habits, strategic career mapping, and commanding decision-making authority.",
    icon: Compass,
    tags: ["Executive Presence", "Sponsorship", "Career Mobility"],
  },
];

const partnerActionPillars = [
  {
    title: "Strategic Sponsorship & Funding",
    description:
      "Underwrite high-potential women leaders to attend the summit, removing financial barriers and providing them with an immersive accelerator experience.",
  },
  {
    title: "Executive Mentorship & Boardroom Sponsorship",
    description:
      "Pair participants with seasoned C-suite executives and board directors who actively champion their advancement in closed-door decision rooms.",
  },
  {
    title: "High-Stakes Assignments & Market Access",
    description:
      "Open strategic operational mandates, cross-functional leadership projects, and commercial supply-chain opportunities within your enterprise.",
  },
  {
    title: "Accountable 100-Day Plan Support",
    description:
      "Provide formal internal infrastructure, executive check-ins, and resource allocations to back each delegate’s 100-day workplace execution roadmap.",
  },
];

const highlights = [
  {
    title: "EmpowaWomen™ Leadership Summit 2026 Event Feature",
    action: "View Video",
    href: "https://www.youtube.com/watch?v=g2T0dzTqQZk&pp=0gcJCf4LAYcqIYzv",
  },
  {
    title: "3rd Annual EmpowaWomen™ Bubbles & Nibbles Leadership Awards",
    action: "View Video",
    href: "https://www.youtube.com/watch?v=hWWpX0kw26M",
  },
];

export function PressRelease() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2A2E35] selection:bg-[#ed027e] selection:text-white">
      {/* Official Site Navigation */}
      <Header currentPath="/press-release" />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden border-b border-black/10 bg-gradient-to-b from-stone-50 via-white to-white pb-14 pt-24 sm:pb-18 sm:pt-28 md:pt-32 lg:pb-22 lg:pt-36">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 md:px-12 lg:px-16">
          {/* Overline & Release Tag */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ed027e]/30 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] sm:text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-[#ed027e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ed027e]" />
              <span>Official Press Statement</span>
            </span>
            <span className="text-xs font-mono font-medium text-black/40">•</span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/60">
              For Immediate Release
            </span>
            <span className="text-xs font-mono font-medium text-black/40">•</span>
            <span className="text-xs font-mono font-semibold text-black/60">
              EmpowaWorx House, Randburg
            </span>
          </div>

          {/* Main Title Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-heading text-[clamp(2.25rem,4.5vw,4.25rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-[#11161F]">
                EmpowaHer Leadership Summit 2026{" "}
                <span className="text-[#ed027e] block sm:inline">
                  | The Future Is Female
                </span>
              </h1>

              <p className="font-heading text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-tight text-[#ed027e] leading-snug">
                Invest in Women. Strengthen the Leadership Pipeline. Shape the Future.
              </p>

              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#3f3f3f]">
                Women’s advancement must be a strategic investment in organisational performance, leadership succession and economic competitiveness.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-2">
                <Link
                  href="/nominate"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-all hover:bg-[#ff1a95] hover:scale-[1.02]"
                >
                  <span>Nominate An Emerging Leader</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <a
                  href={PROGRAMME_PDF_PATH}
                  download="EmpowaHER-Programme-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#11161F] px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#11161F] transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white hover:scale-[1.02]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Programme (PDF)</span>
                </a>

                <Link
                  href="/partnerships"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-black/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black/75 transition-all hover:border-[#ed027e] hover:text-[#ed027e]"
                >
                  <Building2 className="h-4 w-4" />
                  <span>Partner With Us</span>
                </Link>
              </div>
            </div>

            {/* Summit At-a-Glance Sidebar Card */}
            <div className="lg:col-span-4 bg-[#0E1218] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#ed027e]/20 blur-2xl"
              />
              <div className="relative z-10 space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                    SUMMIT CONVENING
                  </span>
                  <h2 className="mt-1 font-heading text-lg font-black uppercase tracking-tight text-white">
                    Key Summit Facts
                  </h2>
                </div>

                <div className="space-y-3.5 text-xs text-white/80">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-4 w-4 text-[#ed027e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-bold">29–31 October 2026</strong>
                      <span>Three-Day Intensive Accelerator</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 className="h-4 w-4 text-[#ed027e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-bold">EmpowaWorx House</strong>
                      <span>Randburg, Johannesburg, South Africa</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 text-[#ed027e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-bold">200 Emerging Leaders</strong>
                      <span>Representing 200 Distinct Organisations</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="h-4 w-4 text-[#ed027e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-bold">100-Day Execution Plan</strong>
                      <span>Accountable In-Company Implementation</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <p className="text-[0.6875rem] leading-relaxed text-white/60">
                    Convener: <span className="text-white font-semibold">Simphiwe Masiza</span>, Executive Producer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Evidence Demands Action — Hard Data Strip */}
      <section className="bg-[#11161F] text-white py-10 sm:py-12 border-y border-white/10">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/15 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <BarChart3 className="h-3 w-3" />
                <span>THE URGENT EVIDENCE</span>
              </div>
              <h2 className="mt-2 font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white">
                The Numbers That Demand Immediate Strategic Action
              </h2>
            </div>
            <p className="max-w-[46ch] text-xs text-white/70 leading-relaxed">
              Progress in board representation must urgently translate into executive operational pipelines and corporate succession.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {keyEvidenceMetrics.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all hover:border-[#ed027e]/60 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#ed027e]">
                      {item.stat}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="font-heading text-sm sm:text-base font-bold uppercase tracking-tight text-white">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs text-white/75">{item.sublabel}</p>
                  <span className="mt-3 block border-t border-white/10 pt-2 text-[0.625rem] font-mono uppercase tracking-wider text-[#ed027e]">
                    Source: {item.source}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Synthesised Editorial Body */}
      <main id="press-release-content" className="bg-white">
        {/* Core Thesis & Strategic Imperative */}
        <section className="reveal mx-auto max-w-[1240px] px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 border-b border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-4">
                <div className="border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                  <span>EXECUTIVE ANALYSIS</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase leading-[1.05] tracking-tight text-[#11161F]">
                  Talent Cannot Advance Without Access.
                </h2>
                <p className="text-sm leading-relaxed text-[#2A2E35]/80">
                  Leadership potential cannot deliver economic value without deliberate opportunity, sponsorship, and boardroom backing.
                </p>
                <div className="pt-2">
                  <div className="rounded-xl border border-black/10 bg-stone-50 p-4 text-xs space-y-2">
                    <p className="font-bold uppercase tracking-wide text-[#11161F]">
                      Key Statistical Reality:
                    </p>
                    <p className="text-black/75">
                      While women now hold <strong className="text-[#ed027e]">38%</strong> of JSE Top 40 board seats, they occupy only <strong className="text-[#ed027e]">27.4%</strong> of executive roles, with just <strong>3 female CEOs</strong> across 40 companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 text-base sm:text-[1.0625rem] leading-[1.75] text-[#2A2E35]/90">
              <p className="text-lg sm:text-xl font-semibold leading-relaxed text-[#11161F]">
                The evidence demands action. Just Share’s 2025 assessment of the JSE Top 40 found that women occupied 38% of board seats but only 27.4% of executive roles, with just three companies led by female CEOs.
              </p>

              <p>
                Progress in board representation must urgently translate into stronger executive pipelines. Board appointments demonstrate intentional governance, but true institutional transformation requires depth at the operational, divisional, and C-suite leadership levels.
              </p>

              <p>
                The World Economic Forum’s Global Gender Gap Report 2025 estimated that global gender parity remained <strong>123 years away</strong> at the prevailing pace. That unacceptable trajectory demands greater urgency, bolder capital allocation, and decisive interventions from those who control investment, executive appointments, and commercial opportunity.
              </p>

              <div className="rounded-2xl border-l-4 border-[#ed027e] bg-stone-50 p-6 sm:p-7 my-6 shadow-sm">
                <blockquote className="text-base sm:text-lg font-semibold italic text-[#11161F] leading-snug">
                  “Talent cannot advance without access. Leadership potential cannot deliver value without opportunity. As Executive Producer of EmpowaHer Leadership Summit 2026, my commitment is to help turn emerging talent into a stronger pipeline of women equipped to lead organisations, build enterprises and influence decisions.”
                </blockquote>
                <cite className="mt-3 block text-xs font-mono font-bold uppercase tracking-wider text-[#ed027e] not-italic">
                  — Simphiwe Masiza, Founder &amp; Group CEO: EmpowaWorx
                </cite>
              </div>

              <p>
                Taking place <strong>29–31 October 2026 at EmpowaWorx House, Randburg</strong>, the summit convenes <strong>200 young women representing 200 organisations</strong> across commerce, industry, public administration, and civil enterprise.
              </p>
            </div>
          </div>
        </section>

        {/* The 4 Strategic Priorities */}
        <section className="reveal mx-auto max-w-[1240px] px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 border-b border-black/10">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#ed027e]/30 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
              <Sparkles className="h-3 w-3" />
              <span>THE SUMMIT CURRICULUM</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#11161F]">
              Four Strategic Priorities Aligned to the Future Economy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-black/70 leading-relaxed">
              Designed to move young women from theoretical ambition into strategic boardroom agency, operational authority, and scalable commercial ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {strategicPriorities.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.number}
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-black/15 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#ed027e] hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="font-mono text-xs font-black tracking-widest text-[#ed027e]">
                        PRIORITY {track.number}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ed027e]/10 text-[#ed027e] transition-colors group-hover:bg-[#ed027e] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-[#11161F] group-hover:text-[#ed027e] transition-colors">
                      {track.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-[0.9375rem] leading-relaxed text-[#3f3f3f]/85 font-medium">
                      {track.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-black/10 flex flex-wrap gap-2">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-stone-100 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-black/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* The 100-Day Implementation Plan & Employer Value Proposition */}
        <section className="reveal bg-[#F8F9FA] py-14 sm:py-18 lg:py-20 border-b border-black/10">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                  <span>ACCOUNTABILITY &amp; ROI</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-tight text-[#11161F]">
                  Connecting Learning With Execution: The 100-Day Plan
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-[#2A2E35]/85">
                  The programme connects learning with execution through each participant’s <strong>100-day implementation plan</strong>, creating a practical route for applying insights within her organisation.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-[#2A2E35]/80">
                  For employers, sponsors, and institutional partners, the value proposition is unequivocal: <strong>develop future-ready talent, strengthen succession capacity, and support innovation through a broader leadership pipeline.</strong>
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#ed027e] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2A2E35]">
                      <strong>Tangible Workplace Application:</strong> Every delegate delivers a structured business impact initiative within 100 days of summit completion.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#ed027e] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2A2E35]">
                      <strong>Succession Risk Mitigation:</strong> Builds robust internal bench strength for operational, divisional, and executive leadership roles.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#ed027e] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2A2E35]">
                      <strong>Measurable Corporate Innovation:</strong> Injects high-calibre digital thinking, entrepreneurial vigor, and governance acumen into corporate teams.
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl sm:rounded-3xl border border-black/15 bg-white p-7 sm:p-9 shadow-xl relative overflow-hidden">
                  <div className="border-b border-black/10 pb-4 mb-6">
                    <span className="text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                      INSTITUTIONAL VALUE PROPOSITION
                    </span>
                    <h3 className="mt-1 font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-[#11161F]">
                      Why Leading Employers Are Sponsoring Delegates
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#2A2E35]/85">
                    <div className="rounded-xl bg-stone-50 p-4 border border-black/5">
                      <strong className="block text-sm font-bold text-[#11161F] mb-1">
                        1. Broaden Succession Depth
                      </strong>
                      <span>
                        Directly addresses the 27.4% executive representation shortfall by grooming young women aged 18–35 for mission-critical management trajectories.
                      </span>
                    </div>

                    <div className="rounded-xl bg-stone-50 p-4 border border-black/5">
                      <strong className="block text-sm font-bold text-[#11161F] mb-1">
                        2. Cross-Sector Mentorship &amp; Board Exposure
                      </strong>
                      <span>
                        Delegates receive direct masterclasses from board chairpersons, multinational CEOs, and cabinet ministers who provide rare boardroom perspectives.
                      </span>
                    </div>

                    <div className="rounded-xl bg-stone-50 p-4 border border-black/5">
                      <strong className="block text-sm font-bold text-[#11161F] mb-1">
                        3. Quantified Leadership Outcomes
                      </strong>
                      <span>
                        Post-summit reporting ensures nominating organisations receive actionable accountability updates on their delegate’s 100-day execution milestones.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action for Private Sector, Employers & Institutional Partners */}
        <section className="reveal mx-auto max-w-[1240px] px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 border-b border-black/10">
          <div className="max-w-3xl mb-10">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#ed027e]/30 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
              <Target className="h-3 w-3" />
              <span>THE CALL TO ACTION</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#11161F]">
              To the Private Sector, Employers and Institutional Partners:
            </h2>
            <p className="mt-3 text-base sm:text-lg text-black/75 leading-relaxed font-semibold">
              Commit resources, influence and opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {partnerActionPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-black/15 bg-white p-6 shadow-sm transition-all hover:border-[#ed027e] hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="h-8 w-8 rounded-full bg-[#ed027e]/10 text-[#ed027e] flex items-center justify-center font-mono text-xs font-black mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading text-lg font-black uppercase tracking-tight text-[#11161F]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#3f3f3f]/85 font-medium">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-black/10">
                  <span className="text-[0.625rem] font-mono font-bold uppercase tracking-wider text-[#ed027e]">
                    Institutional Mandate
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[#0E1218] text-white p-7 sm:p-9 border border-white/10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                How Will Success Be Measured?
              </h3>
              <p className="mt-2 max-w-[62ch] text-xs sm:text-sm text-white/75 leading-relaxed">
                Success must be measured through applied capability, expanded responsibilities, career progression and enterprise opportunities. Attendance begins the journey; sustained organisational commitment determines its impact.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/partnerships"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-all hover:scale-[1.03] hover:bg-[#ff1a95]"
              >
                <span>Sponsor A Cohort</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/nominate"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#ed027e]"
              >
                <span>Nominate Candidate</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Executive Manifest Quote Block */}
        <section
          className="reveal bg-[#0A0D12] py-16 sm:py-20 text-white relative overflow-hidden"
          aria-labelledby="executive-manifesto-heading"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-96 w-96 rounded-full bg-[#ed027e]/15 blur-3xl"
          />

          <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 md:px-12 lg:px-16">
            <h2 id="executive-manifesto-heading" className="sr-only">
              Executive Producer Manifesto
            </h2>

            <div className="mx-auto max-w-4xl border-l-4 border-[#ed027e] pl-6 sm:pl-10">
              <span
                className="block font-heading text-7xl sm:text-8xl font-black leading-none text-[#ed027e] opacity-35"
                aria-hidden="true"
              >
                “
              </span>

              <div className="mt-2 space-y-4 text-lg sm:text-2xl font-medium leading-[1.6] text-white/95">
                <p>
                  “The women who will shape our future are already here. The responsibility to invest in their advancement is ours.”
                </p>
                <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed">
                  “The Future Is Female. Invest now. Open pathways. Accelerate her leadership.”
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <strong className="block font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                    Simphiwe Masiza
                  </strong>
                  <span className="text-xs sm:text-sm font-mono text-[#ed027e] uppercase tracking-wider">
                    Executive Producer | EmpowaHer Leadership Summit 2026
                  </span>
                </div>

                <div className="text-xs font-mono text-white/50">
                  <span>Founder &amp; Group Chief Executive Officer • EmpowaWorx</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Nominations Guidelines */}
        <section
          id="nominations-guidelines"
          className="reveal mx-auto max-w-[1240px] px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 border-b border-black/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5 space-y-5">
              <div className="border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <span>SELECTION CRITERIA</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-tight text-[#11161F]">
                Institutional Nomination and Delegate Selection
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#2A2E35]/80">
                To promote institutional diversity and pan-African representation, <strong>only one delegate will be selected from each participating organisation</strong>.
              </p>
              <div className="rounded-xl border border-black/10 bg-stone-50 p-5 text-xs text-black/75 space-y-2">
                <p className="font-bold text-[#ed027e] uppercase tracking-wider">
                  Important Nomination Notice:
                </p>
                <p>
                  Candidates must be formally nominated or endorsed by an authorised senior executive, board member, vice-chancellor, director-general, or recognised mentor. <strong>Self-nominations are not accepted.</strong>
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/nominate"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
                >
                  <span>Submit Nomination</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/criteria"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-stone-50 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black/75 transition-colors hover:border-[#ed027e] hover:text-[#ed027e]"
                >
                  <span>View Full Criteria</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-2xl border border-black/15 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#11161F] mb-4">
                  Who Should Be Nominated?
                </h3>
                <p className="text-xs sm:text-sm text-black/75 leading-relaxed mb-4">
                  High-potential women aged 18–35 across diverse professional, technical, venture, and public leadership pathways:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-[#2A2E35]">
                  {[
                    "Graduates & Young Achievers",
                    "Emerging Corporate Professionals",
                    "Technical Specialists & STEM Pioneers",
                    "High-Potential Operational Managers",
                    "Managing Executives & General Managers",
                    "Young C-Suite Executives & Founders",
                    "Venture Entrepreneurs & SME Scalers",
                    "Social Impact Leaders & Policy Architects",
                    "Aspiring Board Directors & Fiduciaries",
                    "Youth Civic & Continental Diplomats",
                  ].map((role) => (
                    <div key={role} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ed027e] shrink-0" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-black/15 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#11161F] mb-3">
                  Authorised Nominators Include:
                </h3>
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                  Ministers, Directors-General, Board Chairpersons and Directors, Chief Executive Officers, Managing Directors, Vice-Chancellors, Deans of Faculty, Media Executives, established entrepreneurs, and recognized leadership practitioners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Highlights & Media Features */}
        <section
          className="reveal mx-auto max-w-[1240px] px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 border-b border-black/10"
          aria-labelledby="multimedia-highlights-heading"
        >
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-5">
            <div>
              <div className="border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <span>MULTIMEDIA ASSETS</span>
              </div>
              <h2
                id="multimedia-highlights-heading"
                className="mt-2 font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#11161F]"
              >
                Broadcast &amp; Event Features
              </h2>
            </div>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ed027e] hover:underline"
            >
              <span>Explore All Media Hub Features</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-4 rounded-2xl border border-black/15 bg-white p-6 transition-all hover:border-[#ed027e] hover:shadow-lg sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ed027e]/10 text-[#ed027e] transition-colors group-hover:bg-[#ed027e] group-hover:text-white">
                    <Play className="h-4 w-4 fill-current ml-0.5" />
                  </span>
                  <span className="font-heading text-sm sm:text-base font-bold uppercase tracking-tight text-[#11161F]">
                    {item.title}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ed027e] shrink-0">
                  <span>{item.action}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Editorial ENDS Signoff */}
        <div className="mx-auto max-w-[1240px] py-12 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-16 bg-black/20" aria-hidden="true" />
            <span className="text-xs font-black uppercase tracking-[0.35em] text-black/40">
              ENDS
            </span>
            <div className="h-px w-16 bg-black/20" aria-hidden="true" />
          </div>
        </div>
      </main>

      {/* Media & Press Relations Prefooter */}
      <section
        id="media-enquiries"
        aria-labelledby="media-enquiries-heading"
        className="w-full border-t-4 border-[#ed027e] bg-[#0A0D12] text-white"
      >
        <div className="reveal mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-18 md:px-12 md:py-20 lg:px-16">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Media Desk Overview & Assets */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
                  <span>Media &amp; Broadcast Relations</span>
                </div>
                <h2
                  id="media-enquiries-heading"
                  className="font-heading text-[clamp(1.75rem,3.2vw,2.5rem)] font-black uppercase leading-[1.05] tracking-tight text-white"
                >
                  Connect With Our Media &amp; Communications Desk
                </h2>
                <p className="mt-4 max-w-[50ch] text-[0.9375rem] font-medium leading-[1.65] text-white/70 sm:text-base">
                  EmpowaHer™ provides accredited media organisations, editors, and broadcast journalists with direct access to senior leadership, keynote speakers, and emerging women delegates. Contact our PR desk for interviews, press accreditation, high-resolution media assets, and broadcast arrangements.
                </p>
              </div>

              {/* Quick Action Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={PROGRAMME_PDF_PATH}
                  download="EmpowaHER-Programme-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all hover:border-[#ed027e] hover:bg-[#ed027e]"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Official Programme (PDF)</span>
                </a>
                <a
                  href={MEDIA_ENQUIRY_EMAIL}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all hover:border-[#ed027e] hover:bg-[#ed027e]"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Press Kit on Request</span>
                </a>
              </div>
            </div>

            {/* Right Column: PR Manager Executive Contact Card */}
            <div className="lg:col-span-5">
              <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-[#ed027e]/60">
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ed027e]/20 text-[#ed027e]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                      Boitumelo Mmakou
                    </h3>
                    <span className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-[#ed027e]">
                      Public Relations Manager • EmpowaHer™
                    </span>
                  </div>
                </div>

                <address className="mt-6 space-y-3.5 not-italic text-sm font-medium text-white/80 sm:text-[0.9375rem]">
                  <a
                    href="mailto:boitumelo@empowaworx.co.za"
                    className="flex items-center gap-3 transition-colors hover:text-[#ed027e]"
                  >
                    <Mail size={16} className="shrink-0 text-[#ed027e]" aria-hidden="true" />
                    <span>boitumelo@empowaworx.co.za</span>
                  </a>
                  <a
                    href="tel:+27714005152"
                    className="flex items-center gap-3 transition-colors hover:text-[#ed027e]"
                  >
                    <Phone size={16} className="shrink-0 text-[#ed027e]" aria-hidden="true" />
                    <span className="tabular-nums">+27 (0) 71 400 5152</span>
                  </a>
                  <a
                    href="tel:+27114827256"
                    className="flex items-center gap-3 transition-colors hover:text-[#ed027e]"
                  >
                    <Phone size={16} className="shrink-0 text-[#ed027e]" aria-hidden="true" />
                    <span className="tabular-nums">+27 (0) 11 482 7256 / 7257</span>
                  </a>
                  <a
                    href="https://www.empowaher.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors hover:text-[#ed027e]"
                  >
                    <Globe2 size={16} className="shrink-0 text-[#ed027e]" aria-hidden="true" />
                    <span>www.empowaher.co.za</span>
                  </a>
                </address>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <a
                    href={MEDIA_ENQUIRY_EMAIL}
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#ed027e] px-8 py-3.5 text-center text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/20 transition-all hover:bg-[#ff1a95] hover:scale-[1.02]"
                  >
                    <span>Send a Media Enquiry</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Official Site Footer */}
      <Footer />
    </div>
  );
}
