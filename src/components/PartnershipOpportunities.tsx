"use client";

import { useEffect } from "react";
import {
  BarChart3,
  BriefcaseBusiness,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PROSPECTUS_EMAIL_HREF =
  "mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Prospectus%20Request";
const PARTNERSHIP_INQUIRY_HREF =
  "mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Partnership%20Inquiry";

const commercialValues = [
  {
    number: "01",
    icon: TrendingUp,
    title: "BUILD BRAND LEADERSHIP",
    description:
      "Premium association across the programme strengthens visibility, relevance and brand preference among participants and influential stakeholders.",
  },
  {
    number: "02",
    icon: Users,
    title: "STRENGTHEN TALENT PIPELINES",
    description:
      "Identify and engage a curated pool of high-potential graduates, professionals, entrepreneurs, and emerging executives.",
  },
  {
    number: "03",
    icon: Target,
    title: "ACCELERATE CUSTOMER GROWTH",
    description:
      "Consent-based engagement can generate qualified leads, product interest, referrals and long-term customer affinity.",
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "ORIGINATE ENTERPRISE OPPORTUNITIES",
    description:
      "Discover women-owned businesses with potential to enter funding, procurement, supplier-development and market-access pipelines.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "ADVANCE ESG COMMITMENTS",
    description:
      "Translate inclusion, skills development and transformation strategies into visible, measurable and reportable action.",
  },
];

const partnershipTracks = [
  {
    id: "scholarships",
    number: "01",
    label: "SCHOLARSHIPS AND BURSARIES",
    value: "ACCESS TO TERTIARY, PROFESSIONAL AND EXECUTIVE EDUCATION",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    imageAlt:
      "Young professional women studying together in an academic setting",
  },
  {
    id: "placements",
    number: "02",
    label: "GRADUATE PLACEMENTS AND INTERNSHIPS",
    value: "WORKPLACE EXPERIENCE AND MEANINGFUL EMPLOYMENT",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    imageAlt: "Professional African woman in a business workplace setting",
  },
  {
    id: "funding",
    number: "03",
    label: "FUNDING AND PROCUREMENT",
    value: "CAPITAL, SUPPLIER DEVELOPMENT AND COMMERCIAL OPPORTUNITIES",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    imageAlt: "Women in an enterprise business meeting discussing commerce",
  },
];

export function PartnershipOpportunities() {
  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }
    const heroImg = document.getElementById("partnerships-hero-parallax-img");
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
          {/* Top Header */}
          <Header currentPath="/partnerships" />

          {/* Background Image with Ambient Overlay */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img
              id="partnerships-hero-parallax-img"
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&q=85"
              alt="Professional women collaborating in a bright contemporary workplace"
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
              <span>Partnership Ecosystem</span>
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
                Partnership Opportunities
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
                  <span>A HIGH-VALUE LEADERSHIP,</span>
                  <br />
                  <span className="text-[#ed027e]">TALENT &amp; ENTERPRISE</span>
                  <br />
                  <span>ECOSYSTEM</span>
                </h1>

                {/* Hero CTAs */}
                <div
                  className="hero-reveal mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start"
                  style={{
                    animationDelay: "300ms",
                  }}
                >
                  <a
                    href={PROSPECTUS_EMAIL_HREF}
                    className="flex w-full items-center justify-center rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:bg-[#ed027e]/90 hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Prospectus on Request</span>
                  </a>
                  <a
                    href={PARTNERSHIP_INQUIRY_HREF}
                    className="flex w-full items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#3f3f3f] hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Contact Executive Team</span>
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
                    EmpowaHer is not a conventional sponsorship platform. It connects partners with Africa&apos;s next generation of women leaders through one integrated investment.
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
                    Designed for partners ready to build leadership visibility, strengthen talent pipelines, and convert inclusion commitments into measurable commercial opportunity.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Commercial Value Section */}
      <section
        id="commercial-value"
        className="border-t-4 border-[#ed027e] bg-[#ffffff] px-5 py-20 text-[#3f3f3f] sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="reveal mb-12 max-w-2xl">
            <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
              <span>01 — Commercial Value</span>
            </div>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#3f3f3f]">
              <span>Strategic Opportunity &amp; Return</span>
            </h2>
            <p className="mt-4 font-sans text-[0.875rem] font-normal leading-[1.6] text-[#3f3f3f]/70">
              <span>EmpowaHer delivers measurable business, talent and brand returns aligned with corporate strategic priorities.</span>
            </p>
          </div>

          <div className="border-t border-black/10">
            {commercialValues.map(({ number, icon: Icon, title, description }) => {
              const isPinkRow =
                number === "01" || number === "03" || number === "05";
              return (
                <article
                  key={number}
                  className={`reveal group relative grid grid-cols-[4rem_1fr] gap-5 border-b border-black/10 px-0 py-8 sm:grid-cols-[6rem_2rem_1fr] sm:gap-6 lg:grid-cols-[7rem_2.5rem_1fr] lg:py-10 ${
                    isPinkRow
                      ? "bg-[#ed027e] text-white hover:brightness-110 hover:scale-[1.01] hover:shadow-lg cursor-pointer transition-all duration-150 px-4 sm:px-6 rounded-lg"
                      : Number(number) % 2 === 0
                      ? "bg-[#F9F4F7] hover:bg-[#ed027e]/10 hover:scale-[1.01] hover:shadow-md cursor-pointer transition-all duration-150 px-4 sm:px-6 rounded-lg"
                      : "bg-white hover:bg-[#ed027e]/10 hover:scale-[1.01] hover:shadow-md cursor-pointer transition-all duration-150 px-4 sm:px-6 rounded-lg"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`font-heading text-[4.5rem] font-black leading-[0.72] tracking-[-0.08em] sm:text-[6rem] ${
                      isPinkRow ? "text-white/30" : "text-black/10"
                    }`}
                  >
                    {number}
                  </span>
                  <Icon
                    className={`mt-1 hidden h-6 w-6 sm:block ${
                      isPinkRow ? "text-white" : "text-[#ed027e]"
                    }`}
                    strokeWidth={1.8}
                  />
                  <div>
                    <h3
                      className={`font-heading text-lg font-black uppercase tracking-[-0.02em] sm:text-xl ${
                        isPinkRow ? "text-white" : "text-[#3f3f3f]"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`mt-2 max-w-[66ch] font-sans text-sm font-normal leading-[1.65] ${
                        isPinkRow ? "text-white/90" : "text-[#3f3f3f]/70"
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 02 — Signature Tracks Section */}
      <section
        id="tracks"
        className="w-full bg-[#0D0D0D] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="reveal grid w-full grid-cols-1 gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
                <span>02 — Signature Tracks</span>
              </div>
              <h2 className="font-heading text-[clamp(3.2rem,8vw,7.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-white">
                <span>Signature Tracks</span>
              </h2>
            </div>
            <p className="max-w-[34rem] self-end font-sans text-base font-normal leading-[1.7] text-white/70 lg:text-lg">
              Partner-owned opportunities designed for visible investment in education, workplace experience, capital access and commercial growth.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 pt-10 lg:grid-cols-[35fr_65fr] lg:gap-8">
            <figure className="reveal min-h-[520px] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Professional African woman in a business workplace setting"
                className="h-full w-full rounded-2xl object-cover object-center"
              />
            </figure>

            <div className="grid grid-cols-1 gap-6 lg:gap-8">
              {partnershipTracks.slice(0, 2).map((_mpRecord) => {
                const { id, number, label, value } = _mpRecord;
                return (
                  <article
                    key={id}
                    className="reveal flex min-h-[250px] flex-col justify-between rounded-2xl border-b-2 border-[#ed027e] bg-white/[0.025] p-8 transition-all duration-200 hover:scale-[1.01] hover:bg-white/5 lg:min-h-[310px] lg:p-10"
                  >
                    <span className="font-heading text-[0.625rem] font-black uppercase tracking-[0.28em] text-[#ed027e]">
                      Track {number}
                    </span>
                    <div>
                      <h3 className="max-w-[13ch] font-heading text-[clamp(2rem,4.2vw,4.4rem)] font-black uppercase leading-[0.88] tracking-[-0.055em] text-white">
                        {label}
                      </h3>
                      <p className="mt-5 max-w-[38ch] font-sans text-sm font-semibold uppercase leading-[1.55] tracking-[0.08em] text-white/70">
                        {value}
                      </p>
                    </div>
                  </article>
                );
              })}

              {partnershipTracks.slice(2).map((_mpRecord) => {
                const { id, number, label, value } = _mpRecord;
                return (
                  <article
                    key={id}
                    className="reveal flex min-h-[320px] flex-col justify-between rounded-2xl border-b-2 border-[#ed027e] bg-white/[0.025] p-8 transition-all duration-200 hover:scale-[1.01] hover:bg-white/5 lg:p-12"
                  >
                    <span className="font-heading text-[0.625rem] font-black uppercase tracking-[0.28em] text-[#ed027e]">
                      Track {number}
                    </span>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1fr] lg:items-end">
                      <h3 className="max-w-[13ch] font-heading text-[clamp(2.2rem,5vw,5.8rem)] font-black uppercase leading-[0.86] tracking-[-0.06em] text-white">
                        {label}
                      </h3>
                      <p className="max-w-[44ch] font-sans text-sm font-semibold uppercase leading-[1.65] tracking-[0.08em] text-white/70 lg:text-base">
                        {value}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Shared Site Footer with Contact & Legal */}
      <Footer />
    </main>
  );
}
