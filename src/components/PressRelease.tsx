"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  Clock,
  Compass,
  Download,
  FileText,
  MapPin,
  Printer,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PRESS_RELEASE_PDF_PATH = "/EmpowaHer-Media-Release-2026.pdf";
const PROGRAMME_PDF_PATH = "/Updated-Programme-EmpowaHer-2026.pdf";

export function PressRelease() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1D2129] selection:bg-[#ed027e] selection:text-white">
      {/* Site Header */}
      <Header currentPath="/press-release" />

      {/* Magazine Editorial Masthead */}
      <header className="relative border-b border-black/10 bg-white pb-12 pt-24 sm:pb-16 sm:pt-28 md:pt-32 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-[960px] px-5 sm:px-8 md:px-12">
          {/* Eyebrow metadata banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-5 mb-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black/60">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e]/10 px-3 py-1 text-[0.6875rem] font-bold text-[#ed027e]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ed027e]" />
                Official Press Statement
              </span>
              <span className="text-black/30">•</span>
              <span>For Immediate Release</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-black/70 transition-colors hover:border-[#ed027e] hover:text-[#ed027e]"
                title="Print press release"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>Print</span>
              </button>
              <a
                href={PROGRAMME_PDF_PATH}
                download="Updated-Programme-EmpowaHer-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e] px-4 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#ff1a95]"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[0.6875rem] font-mono font-bold uppercase tracking-widest text-black/70">
              <Sparkles className="h-3 w-3 text-[#ed027e]" />
              <span>The Future Is Female</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase leading-[1.02] tracking-tight text-[#11161F]">
              EmpowaHer Leadership Summit 2026{" "}
              <span className="text-[#ed027e]">| The Future Is Female</span>
            </h1>

            <p className="font-heading text-xl sm:text-2xl font-bold uppercase leading-snug tracking-tight text-[#ed027e] pt-1">
              Invest in Women. Strengthen the Leadership Pipeline. Shape the Future.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-black/60 pt-2 border-t border-black/5">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#ed027e]" />
                <strong className="text-black/80">29–31 October 2026</strong>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#ed027e]" />
                <span>EmpowaWorx House, Randburg</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-[#ed027e]" />
                <span>200 Young Women • 200 Organisations</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Press Statement Core Article */}
      <main className="py-12 sm:py-16 lg:py-20">
        <article className="mx-auto max-w-[960px] px-5 sm:px-8 md:px-12">
          {/* Executive Opening Lead */}
          <div className="rounded-2xl border-l-4 border-[#ed027e] bg-white p-6 sm:p-8 shadow-sm mb-10">
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-[#11161F]">
              Women’s advancement must be a strategic investment in organisational performance, leadership succession and economic competitiveness.
            </p>
          </div>

          {/* Key Facts / Evidence Callout Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="rounded-xl border border-black/10 bg-white p-4 text-center shadow-xs">
              <span className="block font-heading text-2xl sm:text-3xl font-black text-[#ed027e]">
                38%
              </span>
              <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-black/70 mt-1">
                Board Seats Held
              </span>
              <span className="block text-[0.625rem] text-black/45 mt-0.5">JSE Top 40 (Just Share 2025)</span>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-4 text-center shadow-xs">
              <span className="block font-heading text-2xl sm:text-3xl font-black text-[#ed027e]">
                27.4%
              </span>
              <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-black/70 mt-1">
                Executive Roles
              </span>
              <span className="block text-[0.625rem] text-black/45 mt-0.5">JSE Top 40 (Just Share 2025)</span>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-4 text-center shadow-xs">
              <span className="block font-heading text-2xl sm:text-3xl font-black text-[#ed027e]">
                3 of 40
              </span>
              <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-black/70 mt-1">
                Female CEOs
              </span>
              <span className="block text-[0.625rem] text-black/45 mt-0.5">JSE Top 40 Companies</span>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-4 text-center shadow-xs">
              <span className="block font-heading text-2xl sm:text-3xl font-black text-[#ed027e]">
                123 YRS
              </span>
              <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-black/70 mt-1">
                To Gender Parity
              </span>
              <span className="block text-[0.625rem] text-black/45 mt-0.5">WEF Global Report 2025</span>
            </div>
          </div>

          {/* Content Narrative */}
          <div className="space-y-7 text-base sm:text-lg leading-[1.8] text-[#2C313A]">
            <p>
              The evidence demands action. Just Share’s 2025 assessment of the JSE Top 40 found that women occupied 38% of board seats but only 27.4% of executive roles, with just three companies led by female CEOs. Progress in board representation must translate into stronger executive pipelines. The World Economic Forum’s Global Gender Gap Report 2025 estimated that global gender parity remained 123 years away at the prevailing pace. That trajectory demands greater urgency from those who control investment, appointments and opportunity.
            </p>

            {/* High-Impact Statement Callout */}
            <div className="my-8 rounded-2xl bg-[#0E1218] p-7 sm:p-9 text-white shadow-xl relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ed027e]/25 blur-3xl"
              />
              <p className="font-heading text-xl sm:text-2xl font-black uppercase leading-snug tracking-tight text-white relative z-10">
                Talent cannot advance without access. Leadership potential cannot deliver value without opportunity.
              </p>
            </div>

            <p>
              As Executive Producer of EmpowaHer Leadership Summit 2026, my commitment is to help turn emerging talent into a stronger pipeline of women equipped to lead organisations, build enterprises and influence decisions.
            </p>

            <p>
              Taking place <strong>29–31 October at EmpowaWorx House, Randburg</strong>, the summit brings together <strong>200 young women representing 200 organisations</strong>, aligned to four strategic priorities:
            </p>

            {/* Four Strategic Priorities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="rounded-xl border border-black/10 bg-white p-5 shadow-xs">
                <span className="font-mono text-xs font-bold text-[#ed027e] uppercase tracking-wider block mb-1">
                  Priority 01
                </span>
                <h2 className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-[#11161F]">
                  Digital Leadership
                </h2>
              </div>

              <div className="rounded-xl border border-black/10 bg-white p-5 shadow-xs">
                <span className="font-mono text-xs font-bold text-[#ed027e] uppercase tracking-wider block mb-1">
                  Priority 02
                </span>
                <h2 className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-[#11161F]">
                  Entrepreneurship, Innovation and Funding
                </h2>
              </div>

              <div className="rounded-xl border border-black/10 bg-white p-5 shadow-xs">
                <span className="font-mono text-xs font-bold text-[#ed027e] uppercase tracking-wider block mb-1">
                  Priority 03
                </span>
                <h2 className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-[#11161F]">
                  Leadership, Governance and Board Readiness
                </h2>
              </div>

              <div className="rounded-xl border border-black/10 bg-white p-5 shadow-xs">
                <span className="font-mono text-xs font-bold text-[#ed027e] uppercase tracking-wider block mb-1">
                  Priority 04
                </span>
                <h2 className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-[#11161F]">
                  Personal Leadership and Career Transformation
                </h2>
              </div>
            </div>

            <p>
              The programme connects learning with execution through each participant’s <strong>100-day implementation plan</strong>, creating a practical route for applying insights within her organisation. For employers and partners, the value proposition is clear: <strong>develop future-ready talent, strengthen succession capacity and support innovation through a broader leadership pipeline.</strong>
            </p>

            {/* Direct Call to Private Sector & Institutional Partners */}
            <div className="rounded-2xl border border-black/15 bg-white p-6 sm:p-8 my-8 shadow-sm">
              <h2 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#11161F] mb-4">
                To the private sector, employers and institutional partners: commit resources, influence and opportunity.
              </h2>
              <ul className="space-y-3 pl-1 text-sm sm:text-base text-[#2C313A]">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ed027e] mt-2 shrink-0" />
                  <span>Invest through sponsorship &amp; funding;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ed027e] mt-2 shrink-0" />
                  <span>Provide executive mentorship and sponsorship;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ed027e] mt-2 shrink-0" />
                  <span>Open access to meaningful assignments and markets; and</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ed027e] mt-2 shrink-0" />
                  <span>Back participants’ implementation plans with accountable organisational support.</span>
                </li>
              </ul>
            </div>

            <p>
              Success must be measured through applied capability, expanded responsibilities, career progression and enterprise opportunities. Attendance begins the journey; sustained organisational commitment determines its impact.
            </p>

            <p className="text-lg sm:text-xl font-semibold text-[#11161F] pt-2">
              The women who will shape our future are already here. The responsibility to invest in their advancement is ours.
            </p>

            {/* Closing Mantra Callout */}
            <div className="rounded-2xl bg-gradient-to-r from-[#ed027e]/15 via-[#ed027e]/5 to-transparent p-6 sm:p-8 border-l-4 border-[#ed027e] my-8">
              <p className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-[#ed027e]">
                The Future Is Female. Invest now. Open pathways. Accelerate her leadership.
              </p>
            </div>

            {/* Sign-Off */}
            <div className="pt-8 border-t border-black/15 mt-10">
              <strong className="block font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-[#11161F]">
                Simphiwe Masiza
              </strong>
              <span className="block text-sm font-mono text-[#ed027e] uppercase tracking-wider font-semibold mt-1">
                Executive Producer | EmpowaHer Leadership Summit 2026
              </span>
            </div>
          </div>

          {/* Formal ENDS Terminal Mark */}
          <div className="pt-16 pb-6 text-center">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-14 bg-black/20" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-[0.35em] text-black/40 font-mono">
                ENDS
              </span>
              <div className="h-px w-14 bg-black/20" aria-hidden="true" />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-black/10">
            <Link
              href="/nominate"
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#ed027e] px-8 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-md transition-all hover:bg-[#ff1a95] hover:scale-[1.02]"
            >
              <span>Nominate An Emerging Leader</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/partnerships"
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black/80 transition-all hover:border-[#ed027e] hover:text-[#ed027e]"
            >
              <span>Partner With EmpowaHer</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
