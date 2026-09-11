"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  Building2,
  Calendar,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const HERO_IMAGE_PATH = "/feature-image12.jpg";
const PROPOSITION_IMAGE_PATH = "/feature-image16.jpg";
const PROGRAMME_PDF_PATH = "/EmpowaHER-Programme-2026.pdf";

const pressures = [
  {
    id: "pressure-01",
    number: "01",
    label: "ORGANISATIONAL PRESSURE",
    value: "BUILD FUTURE-READY TALENT & SUCCESSION PIPELINES",
    description:
      "Securing verified female leadership talent across management, specialist, and executive decision-making tiers.",
  },
  {
    id: "pressure-02",
    number: "02",
    label: "ORGANISATIONAL PRESSURE",
    value: "RESPOND TO AI & DIGITAL DISRUPTION",
    description:
      "Equipping next-generation leaders with digital fluency, AI capabilities, and technological agility.",
  },
  {
    id: "pressure-03",
    number: "03",
    label: "ORGANISATIONAL PRESSURE",
    value: "ACCELERATE WOMEN-OWNED ENTERPRISE",
    description:
      "Integrating scalable women-founded ventures into procurement, supplier diversity, and institutional capital.",
  },
  {
    id: "pressure-04",
    number: "04",
    label: "ORGANISATIONAL PRESSURE",
    value: "GROW CUSTOMER RELEVANCE",
    description:
      "Developing commercial strategies and products deeply resonant with Africa's fastest-growing consumer segments.",
  },
  {
    id: "pressure-05",
    number: "05",
    label: "ORGANISATIONAL PRESSURE",
    value: "CONVERT ESG INTO MEASURABLE OUTCOMES",
    description:
      "Translating gender equity and transformation pledges into verifiable, reportable socio-economic milestones.",
  },
  {
    id: "pressure-06",
    number: "06",
    label: "ORGANISATIONAL PRESSURE",
    value: "STRENGTHEN INSTITUTIONAL TRUST",
    description:
      "Cultivating ethical governance, transparency, and public accountability across enterprise and civic sectors.",
  },
];

const propositionRows = [
  {
    id: "capability",
    label: "CAPABILITY",
    value:
      "Leadership, digital fluency, financial acumen, governance literacy and enterprise-scaling skills.",
  },
  {
    id: "access",
    label: "ACCESS",
    value:
      "Direct exposure to employers, investors, procurement heads, continental markets, and top business schools.",
  },
  {
    id: "opportunity",
    label: "OPPORTUNITY",
    value:
      "Executive placements, supply-chain contracts, venture seed capital, senior mentorship, and board readiness pathways.",
  },
  {
    id: "progression",
    label: "PROGRESSION",
    value:
      "Structured 90/100-day post-summit action roadmaps with trackable advancement and measurable accountability.",
  },
];

const impactStats = [
  {
    id: "network",
    value: "200+",
    label: "Organisations in the Nominating Network",
    icon: Building2,
  },
  {
    id: "leaders",
    value: "18–35",
    label: "Target Age for Emerging Women Leaders",
    icon: Users,
  },
  {
    id: "intensive",
    value: "3 DAYS",
    label: "Of Intensive Executive Development",
    icon: Calendar,
  },
];

export function VisionImpact() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }
    const heroImg = document.getElementById("vision-hero-parallax-img");
    if (!heroImg) {
      return;
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.18;
      heroImg.style.transform = `translateY(${scrollY * speed}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      id="top"
      className="min-h-screen bg-white font-sans text-[#3f3f3f] selection:bg-[#ed027e] selection:text-white"
    >
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col bg-[#0D0D0D]">
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Header Navigation */}
          <Header currentPath="/about-us" />

          {/* Background Image with Ambient Overlay */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img
              id="vision-hero-parallax-img"
              src={HERO_IMAGE_PATH}
              alt="Professional African woman leader with laptop in executive workspace"
              className="h-full w-full object-cover object-[78%_4rem] sm:object-[72%_4.5rem] will-change-transform"
              style={{
                transform: "translateY(0)",
                transformOrigin: "top right",
              }}
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20"
            aria-hidden="true"
          />

          {/* Hero Main Content */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-5 px-5 pb-10 sm:px-8 sm:pb-14 md:px-12 md:pb-16 lg:px-16 lg:pb-14">
            {/* Status Badge */}
            <div className="hero-reveal flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:px-4 sm:text-[0.6875rem]">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ed027e] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ed027e]" />
              </span>
              <span>About Us | Strategic Imperative</span>
              <span className="mx-1 h-1 w-1 rounded-full bg-white/70 sm:mx-2" />
              <span>Summit 2026</span>
            </div>

            {/* Summit Overline */}
            <div className="hero-reveal flex flex-wrap items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/85 sm:text-xs lg:tracking-[0.2em]">
              <span>EmpowaHer™ Leadership Programme</span>
              <span
                className="inline-block h-3 w-px bg-white/40 align-middle"
                aria-hidden="true"
              />
              <span className="rounded-full bg-[#ed027e] px-2.5 py-0.5 font-extrabold text-white">
                About Us
              </span>
            </div>

            {/* 3-Column Hero Layout */}
            <div className="grid w-full grid-cols-1 items-end gap-y-6 text-left lg:grid-cols-[2fr_1.2fr_1fr] lg:gap-x-12">
              <div className="hero-reveal flex flex-col border-white/15 lg:border-r lg:pr-8">
                <h1 className="font-heading text-[clamp(2.4rem,5.2vw,4.75rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-white">
                  <span>ABOUT</span>
                  <br />
                  <span className="text-[#ed027e]">EMPOWAHER</span>
                  <br />
                  <span>PLATFORM</span>
                </h1>

                {/* Hero CTAs */}
                <div className="hero-reveal mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start">
                  <Link
                    href="/partnerships"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ed027e] px-8 py-3.5 font-heading text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:bg-[#ed027e]/90 hover:shadow-xl sm:w-auto"
                  >
                    <span>Partner With Us</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <a
                    href="#purpose"
                    className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 font-heading text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:text-[#0D0D0D] hover:scale-105 hover:shadow-lg sm:w-auto"
                  >
                    <span>Our Purpose</span>
                  </a>
                </div>
              </div>

              <div className="hero-reveal border-white/15 lg:border-r lg:pr-8">
                <h2 className="font-heading text-[clamp(1.2rem,2.1vw,1.75rem)] font-bold uppercase leading-[1.22] tracking-[-0.01em] text-white/95">
                  <span>
                    Equipping Africa&apos;s Next Generation of Women Leaders for Measurable Impact
                  </span>
                </h2>
              </div>

              <div className="hero-reveal">
                <p className="font-sans text-[0.9375rem] font-normal leading-[1.65] text-white/80">
                  <span>
                    EmpowaHer™ is an invitation-led executive leadership accelerator and opportunity platform designed to identify, develop, connect, and advance 200 exceptional emerging women leaders aged 18–35. We bridge the gap between potential and power by linking ambition directly to executive sponsorship, venture capital, commercial supply chains, and board-level influence.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Strip */}
      <section className="border-b border-white/15 bg-[#0D0D0D] py-8 text-white sm:py-10" aria-label="Impact statistics">
        <div className="mx-auto grid max-w-[1380px] gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-14">
          {impactStats.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="flex items-center gap-4 border-b border-white/10 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8 last:border-b-0 last:md:border-r-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-[#ed027e]" />
                </div>
                <div>
                  <strong className="block font-heading text-3xl sm:text-4xl font-black uppercase tracking-[-0.03em] text-[#ed027e]">
                    <span>{item.value}</span>
                  </strong>
                  <span className="mt-1 block font-heading text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                    {item.label}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 01 — The Challenge: Six Organisational Pressures */}
      <section
        id="pressure-points"
        className="border-t-4 border-[#ed027e] bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-24 text-[#3f3f3f]"
        aria-labelledby="challenge-heading"
      >
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
                <span>01 — Strategic Relevance</span>
              </p>
              <h2
                id="challenge-heading"
                className="font-heading text-[clamp(2.35rem,5.5vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#0D0D0D]"
              >
                <span>Six Organisational Pressures</span>
              </h2>
            </div>
            <p className="max-w-[42ch] font-sans text-[0.95rem] leading-[1.65] text-[#3f3f3f]/75 lg:justify-self-end">
              <span>
                The critical economic, governance, and technological conditions shaping how Africa&apos;s leading institutions attract, retain, and elevate high-impact female talent.
              </span>
            </p>
          </div>

          <div className="border-t border-[#3f3f3f]/15">
            {pressures.map((item) => {
              const isHighlight = item.number === "06";
              return (
                <article
                  key={item.id}
                  className={`group grid items-center gap-4 border-b py-7 transition-all ${
                    isHighlight
                      ? "border-[#ed027e] bg-[#ed027e] px-5 sm:px-8 text-white rounded-sm shadow-md"
                      : "border-[#3f3f3f]/15 px-2 hover:bg-[#F9F4F7]/70"
                  } grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr_1.8fr] lg:grid-cols-[6rem_1.2fr_2fr]`}
                >
                  <span
                    className={`font-heading text-[3.25rem] sm:text-[4.25rem] font-black leading-none tracking-[-0.06em] ${
                      isHighlight ? "text-white" : "text-[#ed027e]"
                    }`}
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                  <div>
                    <span
                      className={`font-heading text-[0.6875rem] font-black uppercase tracking-[0.2em] ${
                        isHighlight ? "text-white/80" : "text-[#ed027e]"
                      }`}
                    >
                      {item.label}
                    </span>
                    <p
                      className={`mt-1 text-xs leading-relaxed hidden sm:block ${
                        isHighlight ? "text-white/85" : "text-[#3f3f3f]/70"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                  <h3
                    className={`col-span-2 sm:col-span-1 font-heading text-[clamp(1.15rem,2.2vw,1.75rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] ${
                      isHighlight ? "text-white" : "text-[#0D0D0D]"
                    }`}
                  >
                    <span>{item.value}</span>
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 02 — The Response: One Integrated Platform */}
      <section
        id="purpose"
        className="border-t-4 border-[#ed027e] bg-[#F9F4F7] px-5 py-16 sm:px-8 lg:px-14 lg:py-24 text-[#3f3f3f]"
        aria-labelledby="purpose-heading"
      >
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-10 max-w-[800px]">
            <p className="mb-4 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
              <span>02 — Our Purpose</span>
            </p>
            <h2
              id="purpose-heading"
              className="font-heading text-[clamp(2.35rem,5.5vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#0D0D0D]"
            >
              <span>One Integrated Leadership Platform</span>
            </h2>
          </div>

          <div className="rounded-2xl border border-[#3f3f3f]/15 bg-white p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
            <span
              aria-hidden="true"
              className="absolute -right-6 -bottom-10 select-none font-heading text-[12rem] font-black leading-none text-[#ed027e]/[0.05]"
            >
              &ldquo;
            </span>
            <blockquote className="relative z-10 max-w-[1000px] font-heading text-[clamp(1.35rem,2.8vw,2.35rem)] font-bold italic leading-[1.25] tracking-[-0.02em] text-[#0D0D0D]">
              <span>
                &ldquo;EmpowaHer™ translates leadership ambition into verified economic and governance authority. Through an integrated continuum of immersive learning, C-suite mentorship, venture enablement, and boardroom exposure, we ensure emerging women leaders don&apos;t merely participate in Africa&apos;s economy—they shape its trajectory.&rdquo;
              </span>
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-[#3f3f3f]/10">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ed027e]/10 px-4 py-1.5 font-heading text-xs font-black uppercase tracking-wider text-[#ed027e]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Curated Talent Pipeline</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0D0D0D]/5 px-4 py-1.5 font-heading text-xs font-black uppercase tracking-wider text-[#0D0D0D]">
                <span>200 Emerging Leaders</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0D0D0D]/5 px-4 py-1.5 font-heading text-xs font-black uppercase tracking-wider text-[#0D0D0D]">
                <span>9 Executive Tracks</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — The Proposition: Not a Conference. A Pipeline. */}
      <section
        id="impact"
        className="border-t-4 border-[#ed027e] bg-[#0D0D0D] px-5 py-16 sm:px-8 lg:px-14 lg:py-24 text-white"
        aria-labelledby="proposition-heading"
      >
        <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start" aria-label="EmpowaHer proposition context">
            <figure className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <img
                src={PROPOSITION_IMAGE_PATH}
                alt="EmpowaHer executive woman leader"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <figcaption className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center rounded-full bg-[#ed027e] px-3.5 py-1 font-heading text-xs font-black uppercase tracking-wider text-white">
                  The Leadership Compact
                </span>
                <p className="mt-2 font-heading text-sm font-bold uppercase tracking-wide text-white/90">
                  Direct Pipeline into Africa&apos;s Boardrooms &amp; Executive Suites
                </p>
              </figcaption>
            </figure>
          </aside>

          <div>
            <p className="mb-4 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
              <span>03 — Measurable Impact</span>
            </p>
            <h2
              id="proposition-heading"
              className="max-w-[12ch] font-heading text-[clamp(2.5rem,5.5vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white"
            >
              <span>Not a Conference.</span>
              <br />
              <span className="text-[#ed027e]">A Pipeline.</span>
            </h2>

            <div className="mt-12 border-t border-white/15">
              {propositionRows.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-3 border-b border-white/15 py-7 sm:grid-cols-[140px_1fr] sm:gap-8 items-start"
                >
                  <h3 className="font-heading text-xs font-black uppercase tracking-[0.2em] text-[#ed027e] pt-0.5">
                    <span>{item.label}</span>
                  </h3>
                  <p className="max-w-[46ch] font-sans text-[0.96rem] leading-[1.65] text-white/80">
                    <span>{item.value}</span>
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/partnerships"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-8 py-3.5 font-heading text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg transition-all hover:scale-105 hover:bg-[#ed027e]/90"
              >
                <span>Become A Partner</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/nomination-form"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/5 px-8 py-3.5 font-heading text-xs font-black uppercase tracking-[0.14em] text-white transition-all hover:bg-white hover:text-[#0D0D0D]"
              >
                <span>Nominate a Leader</span>
              </Link>
              <a
                href={PROGRAMME_PDF_PATH}
                download="EmpowaHER-Programme-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white/90 transition-colors hover:border-[#ed027e] hover:text-[#ed027e]"
              >
                <Download className="h-4 w-4" />
                <span>Programme</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Official Site Footer */}
      <Footer />
    </main>
  );
}

export default VisionImpact;
