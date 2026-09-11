"use client";

import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PROGRAMME_PDF_PATH = "/EmpowaHER-Programme-2026.pdf";
const PROSPECTUS_EMAIL_HREF =
  "mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Prospectus%20Request";

const tracks = [
  {
    id: 1,
    name: "Entrepreneurship, Innovation & Funding",
    image: "/streams/Entrepreneurship.jpg",
    accentColor: "#0D4A5E",
  },
  {
    id: 2,
    name: "Digital Leadership, AI & Career Growth",
    image: "/streams/Digital-Transformation.jpg",
    accentColor: "#7B1FA0",
  },
  {
    id: 3,
    name: "Citizenship & Social Impact",
    image: "/streams/Social-Impact.jpg",
    accentColor: "#4A1942",
  },
  {
    id: 4,
    name: "Personal Leadership & Career Transformation",
    image: "/streams/Strategic-Leadership.jpg",
    accentColor: "#ed027e",
  },
  {
    id: 5,
    name: "Personal Finance & Wealth Creation",
    image: "/streams/Financial-Acumen.jpg",
    accentColor: "#B01060",
  },
  {
    id: 6,
    name: "Health, Wellness & Sustainable Performance",
    image: "/streams/People-Leadership.jpg",
    accentColor: "#3D0C6B",
  },
  {
    id: 7,
    name: "Rights, Relationships & Executive Parenting",
    image: "/streams/Communication.jpg",
    accentColor: "#ed027e",
  },
  {
    id: 8,
    name: "Education & Executive Development",
    image: "/streams/Africa-Centric.jpg",
    accentColor: "#7B0D3C",
  },
  {
    id: 9,
    name: "Leadership, Governance & Board Readiness",
    image: "/streams/Board-Readiness.jpg",
    accentColor: "#C4185C",
  },
];

const progressRows = [
  {
    number: "01",
    label: "Capability",
    value: "Leadership, digital, financial, governance and enterprise skills",
  },
  {
    number: "02",
    label: "Access",
    value:
      "Employers, funders, markets, business schools and professional networks",
  },
  {
    number: "03",
    label: "Opportunity",
    value: "Placements, procurement, capital, mentorship and board exposure",
  },
  {
    number: "04",
    label: "Progression",
    value: "Defined 90/100-day commitments and trackable advancement",
  },
];

export function LeadershipProgramme() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }
    const heroImg = document.getElementById("leadership-hero-parallax-img");
    if (!heroImg) {
      return;
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.18;
      heroImg.style.transform = `translateY(${scrollY * speed}px)`;
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
          <Header currentPath="/leadership-programme" />

          {/* Background Image with Ambient Overlay */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img
              id="leadership-hero-parallax-img"
              src="/feature-image11.jpg"
              alt="Senior African businesswoman leading a boardroom discussion"
              className="h-full w-full object-cover object-[59%_4rem] sm:object-[58%_4.5rem] will-change-transform"
              style={{
                transform: "translateY(0)",
                transformOrigin: "top center",
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
              <span>Leadership Programme</span>
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
                Nine Integrated Tracks
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
                  <span>NINE INTEGRATED</span>
                  <br />
                  <span className="text-[#ed027e]">LEADERSHIP</span>
                  <br />
                  <span>TRACKS</span>
                </h1>

                {/* Hero CTAs */}
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
                    className="flex w-full items-center justify-center rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#ed027e]/90 hover:scale-[1.02] hover:shadow-xl sm:w-auto"
                  >
                    <span>Download Programme (PDF)</span>
                  </a>

                  <a
                    href={PROSPECTUS_EMAIL_HREF}
                    className="flex w-full items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:text-[#3f3f3f] hover:scale-[1.02] hover:shadow-lg sm:w-auto"
                  >
                    <span>Prospectus on Request</span>
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
                    Developing the Whole Leader for Africa&apos;s Next Economy
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
                    A future-focused development journey combining executive insight, applied learning, and direct access to board-level opportunities.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Leadership Tracks Section */}
      <section
        id="tracks"
        className="border-t-4 border-[#ed027e] bg-[#f9f9f9] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="reveal mb-12 max-w-2xl">
            <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
              <span>01 — Leadership Tracks</span>
            </div>
            <h2 className="font-heading text-[clamp(2.35rem,4.5vw,4rem)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-[#3f3f3f]">
              <span>The Full Development Journey</span>
            </h2>
            <p className="mt-3 font-sans text-[0.875rem] font-normal leading-[1.6] text-[#3f3f3f]/70">
              <span>
                One connected experience designed to move ambitious women from capability to meaningful opportunity.
              </span>
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-6 pb-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            aria-label="Leadership tracks card grid"
          >
            {tracks.map((track, i) => (
              <article
                key={track.id}
                className="reveal group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl p-7 shadow-lg border border-white/15 bg-black will-change-transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl sm:min-h-[360px] sm:p-8 lg:min-h-[390px] lg:p-9"
              >
                {/* Background Image with Smooth Hover Zoom */}
                <img
                  src={track.image}
                  alt={track.name}
                  className="absolute inset-0 h-full w-full object-cover object-center will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />

                {/* Dark Gradient Ambient Overlay for Maximum Text Contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 transition-opacity duration-500 group-hover:opacity-90"
                  aria-hidden="true"
                />

                {/* Subtle Radial Color Tint Overlay on Hover */}
                <div
                  className="absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-45"
                  style={{
                    background: `radial-gradient(circle at top right, ${track.accentColor} 0%, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Top Interactive Accent Indicator */}
                <div
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  style={{ backgroundColor: track.accentColor }}
                />

                {/* Track Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-black/50 px-3.5 py-1 font-heading text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md border border-white/20 shadow-md transition-colors duration-300 group-hover:bg-black/70">
                    Track {String(i + 1).padStart(2, "0")}/{String(tracks.length).padStart(2, "0")}
                  </span>
                  <span
                    className="h-2 w-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-150 shadow-sm"
                    style={{ backgroundColor: track.accentColor }}
                    aria-hidden="true"
                  />
                </div>

                {/* Card Content */}
                <div className="relative z-10 mt-auto pt-6">
                  <h3 className="font-heading text-[clamp(1.25rem,2.2vw,1.75rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                    {track.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — The Framework Section */}
      <section
        id="framework"
        className="w-full bg-[#0D0D0D] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="reveal mb-12 max-w-2xl">
            <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
              <span>02 — The Framework</span>
            </div>
            <h2 className="font-heading text-[clamp(2.5rem,4.5vw,4.25rem)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-white">
              <span>An Integrated Progression Model</span>
            </h2>
            <p className="mt-3 font-sans text-[0.875rem] font-normal leading-[1.65] text-white/70">
              <span>
                From capability building to board exposure, each phase connects directly to measurable progression.
              </span>
            </p>
          </div>

          <div className="border-t border-white/10">
            {progressRows.map((row) => (
              <article
                key={row.number}
                className="reveal group relative grid cursor-default grid-cols-[3.5rem_1fr] items-center gap-4 overflow-hidden border-b border-white/10 py-7 transition-[background-color,padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.04] hover:pl-5 sm:grid-cols-[5rem_10rem_1fr] sm:gap-8 sm:py-9 sm:hover:pl-7"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 bg-[#ed027e] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

                <span
                  className="origin-left font-heading text-[3.5rem] font-black leading-none tracking-[-0.02em] text-white/10 transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[#ed027e]/30 group-hover:scale-105 sm:text-[4.5rem]"
                  aria-hidden="true"
                >
                  {row.number}
                </span>

                <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#ed027e] transition-[color,letter-spacing] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:tracking-[0.22em] group-hover:text-white sm:text-sm">
                  {row.label}
                </h3>

                <p className="col-span-2 font-sans text-[0.9375rem] font-medium leading-[1.55] text-white/80 transition-colors duration-300 group-hover:text-white sm:col-span-1 sm:text-base">
                  {row.value}
                </p>
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
