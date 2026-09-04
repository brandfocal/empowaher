"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Mail,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PROGRAMME_PDF_PATH = "/EmpowaHER-Programme-2026.pdf";
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
    delay: "0ms",
  },
  {
    number: "02",
    icon: Users,
    title: "STRENGTHEN TALENT PIPELINES",
    description:
      "Identify and engage a curated pool of high-potential graduates, professionals, entrepreneurs, and emerging executives.",
    delay: "60ms",
  },
  {
    number: "03",
    icon: Target,
    title: "ACCELERATE CUSTOMER GROWTH",
    description:
      "Consent-based engagement can generate qualified leads, product interest, referrals and long-term customer affinity.",
    delay: "120ms",
  },
  {
    number: "04",
    icon: Briefcase,
    title: "ORIGINATE ENTERPRISE OPPORTUNITIES",
    description:
      "Discover women-owned businesses with potential to enter funding, procurement, supplier-development and market-access pipelines.",
    delay: "180ms",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "ADVANCE ESG COMMITMENTS",
    description:
      "Translate inclusion, skills development and transformation strategies into visible, measurable and reportable action.",
    delay: "240ms",
  },
];

const partnershipTracks = [
  {
    id: "scholarships",
    number: "01",
    label: "Scholarships and Bursaries",
    value: "Access to tertiary, professional and executive education",
    image: "/feature-image4.jpeg",
    imageAlt: "Young professional women in an executive learning environment",
  },
  {
    id: "placements",
    number: "02",
    label: "Graduate Placements & Internships",
    value: "Workplace experience and meaningful employment pathways",
    image: "/feature-image7.jpg",
    imageAlt: "African women professionals leading corporate innovation",
  },
  {
    id: "funding",
    number: "03",
    label: "Funding and Procurement",
    value: "Capital, supplier development and commercial market access",
    image: "/feature-image6.jpg",
    imageAlt: "Enterprise founders and leaders in strategic discussions",
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
    <main className="min-h-screen w-full bg-[#ffffff] font-sans text-[#3f3f3f] selection:bg-[#ed027e] selection:text-[#ffffff]">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col">
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Unified Site Header */}
          <Header currentPath="/partnerships" />

          {/* Background Image with Ambient Overlay */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img
              id="partnerships-hero-parallax-img"
              src="/feature-image2.jpg"
              alt="EmpowaHer Leadership Partnership Ecosystem"
              className="h-full w-full object-cover object-center will-change-transform"
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

                {/* CTA Action Buttons */}
                <div
                  className="hero-reveal mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start"
                  style={{
                    animationDelay: "300ms",
                  }}
                >
                  <a
                    href={PROGRAMME_PDF_PATH}
                    download="EmpowaHER-Programme-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-full bg-[#ed027e] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:bg-[#ed027e]/90 hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Download Programme (PDF)</span>
                  </a>

                  <a
                    href={PROSPECTUS_EMAIL_HREF}
                    className="flex w-full items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#3f3f3f] hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Prospectus on Request</span>
                  </a>

                  <a
                    href={PARTNERSHIP_INQUIRY_HREF}
                    className="flex w-full items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm transition-all hover:border-[#ed027e] hover:bg-[#ed027e]/15 hover:text-white hover:scale-[1.02] sm:w-auto"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#ed027e]" />
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
        className="border-t-4 border-[#ed027e] bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="reveal mb-12 max-w-2xl">
            <div className="mb-3 border-l-2 border-[#ed027e] pl-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#ed027e]">
              <span>01 — Commercial Value</span>
            </div>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-[#3f3f3f]">
              <span>Strategic Opportunity &amp; Return</span>
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[#3f3f3f]/75">
              EmpowaHer delivers measurable business, talent and brand returns aligned with corporate strategic priorities.
            </p>
          </div>

          <div className="border-t border-black/10">
            {commercialValues.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.number}
                  className="reveal group relative grid grid-cols-[3.5rem_1fr] items-center gap-4 border-b border-black/10 px-3 py-7 transition-all duration-200 hover:border-l-4 hover:border-l-[#ed027e] hover:bg-[#ed027e]/[0.03] hover:pl-5 sm:grid-cols-[5rem_3rem_1fr] sm:gap-6 sm:py-8 lg:grid-cols-[6rem_3.5rem_1fr] lg:py-9"
                  style={{
                    transitionDelay: item.delay,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="font-heading text-[3.5rem] font-black leading-none tracking-[-0.06em] text-black/10 transition-colors group-hover:text-[#ed027e]/30 sm:text-[4.5rem]"
                  >
                    {item.number}
                  </span>

                  <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-xl bg-[#ed027e]/10 text-[#ed027e] transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#ed027e] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-black uppercase tracking-[-0.01em] text-[#3f3f3f] transition-colors group-hover:text-[#ed027e] sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[68ch] text-sm leading-[1.65] text-[#3f3f3f]/70">
                      {item.description}
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
        className="w-full bg-[#0D0D0D] px-5 py-16 text-white sm:px-8 md:px-12 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="reveal grid w-full grid-cols-1 gap-6 border-b border-white/15 pb-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <div className="mb-3 border-l-2 border-[#ed027e] pl-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                <span>02 — Signature Tracks</span>
              </div>
              <h2 className="font-heading text-[clamp(2.4rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white">
                <span>Signature Tracks</span>
              </h2>
            </div>
            <p className="max-w-[34rem] self-end text-sm leading-[1.7] text-white/70 lg:text-base">
              Partner-owned opportunities designed for visible investment in education, workplace experience, capital access and commercial growth.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 pt-10 md:grid-cols-3 lg:gap-8">
            {partnershipTracks.map((track, idx) => (
              <article
                key={track.id}
                className="reveal group flex flex-col justify-between overflow-hidden rounded-2xl border-b-2 border-[#ed027e] bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-[#ed027e]/10"
                style={{
                  transitionDelay: `${idx * 80}ms`,
                }}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={track.image}
                    alt={track.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-[#ed027e] px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.16em] text-white shadow-md">
                      Track {track.number}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <h3 className="font-heading text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-white group-hover:text-[#ed027e] transition-colors">
                      {track.label}
                    </h3>
                    <p className="mt-3 text-xs font-semibold uppercase leading-relaxed tracking-[0.08em] text-white/60">
                      {track.value}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/10 text-xs font-bold uppercase tracking-[0.12em] text-[#ed027e] group-hover:text-white transition-colors">
                    <a
                      href={PARTNERSHIP_INQUIRY_HREF}
                      className="flex items-center gap-1.5"
                    >
                      <span>Inquire About Track</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Site Footer with Contact & Legal */}
      <Footer />
    </main>
  );
}
