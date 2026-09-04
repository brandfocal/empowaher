"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PROGRAMME_PDF_PATH = "/EmpowaHER-Programme-2026.pdf";
const PROSPECTUS_EMAIL_HREF =
  "mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Prospectus%20Request";

const programmeItems = [
  {
    id: "dates",
    number: "01",
    label: "DATES",
    value: "29–31 October 2026",
    revealDelay: "0ms",
  },
  {
    id: "venue",
    number: "02",
    label: "VENUE",
    value: "EmpowaWorx House, Randburg, Johannesburg",
    revealDelay: "60ms",
  },
  {
    id: "format",
    number: "03",
    label: "FORMAT",
    value: "Three-day, multi-track leadership and opportunity experience",
    revealDelay: "120ms",
  },
  {
    id: "audience",
    number: "04",
    label: "AUDIENCE",
    value:
      "Emerging women leaders, graduates, professionals, entrepreneurs, executives and aspiring board members aged 18–35",
    revealDelay: "180ms",
  },
  {
    id: "delegate-model",
    number: "05",
    label: "DELEGATE MODEL",
    value:
      "Selected and vetted through a curated nomination process involving 200 leading organisations",
    revealDelay: "240ms",
  },
  {
    id: "nominating-network",
    number: "06",
    label: "NOMINATING NETWORK",
    value:
      "Leading brands and organisations across industries, communities, academia, multinationals, foundations and civic organisations",
    revealDelay: "300ms",
  },
  {
    id: "core-outcome",
    number: "07",
    label: "CORE OUTCOME",
    value:
      "A high-potential leadership pipeline connected to capability, capital, careers, global exposure and board opportunity",
    revealDelay: "360ms",
  },
];

export function EmpowaHerComingSoon() {
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
    const heroImg = document.getElementById("hero-parallax-img");
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
          {/* Top Navigation */}
          <Header currentPath="/" />

          {/* Background Image with Ambient Overlay using feature-image8.jpg */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img
              id="hero-parallax-img"
              src="/feature-image8.jpg"
              alt="EmpowaHer Leadership Summit"
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
              <span>Official Website Under Construction</span>
              <span className="mx-1 h-1 w-1 rounded-full bg-white/70 sm:mx-2" />
              <span>Launching Soon</span>
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
                Summit 2026
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
                <h1 className="font-heading text-[clamp(2.5rem,4.5vw,4.25rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white">
                  <span>THE EMPOWAHER™</span>
                  <br />
                  <span className="text-[#ed027e]">EXPERIENCE</span>
                </h1>

                {/* Text-Only CTA Action Buttons */}
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
                    className="flex w-full items-center justify-center rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:bg-[#ed027e]/90 hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Download Programme (PDF)</span>
                  </a>

                  <a
                    href={PROSPECTUS_EMAIL_HREF}
                    className="flex w-full items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#3f3f3f] hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Prospectus on Request</span>
                  </a>

                  <Link
                    href="/partnerships"
                    className="flex w-full items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm transition-all hover:border-[#ed027e] hover:bg-[#ed027e]/15 hover:text-white hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Partnerships</span>
                  </Link>
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
                    A Three-Day Leadership Experience for Africa&apos;s Next Generation of Women Leaders (18–35)
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
                    EmpowaHer™ Leadership Summit — The Future Is Female™ is a three-day leadership experience designed to prepare Africa&apos;s next generation of women leaders to compete, lead and succeed across business, government, entrepreneurship, civil society and the boardroom.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Detail Section with feature-image9.jpg */}
      <section
        id="programme"
        className="flex min-h-screen flex-col border-t-4 border-[#ed027e] bg-[#ffffff] text-[#3f3f3f] lg:flex-row"
      >
        <div className="flex min-h-screen w-full flex-col lg:min-h-[800px] lg:flex-row">
          {/* Sticky Left Sidebar with feature-image9.jpg */}
          <aside className="relative order-2 flex w-full flex-col bg-[#ffffff] p-5 lg:sticky lg:top-0 lg:order-1 lg:h-screen lg:min-h-[520px] lg:w-[40%] lg:self-start lg:p-10">
            <figure className="relative aspect-[4/3] min-h-0 flex-1 overflow-hidden rounded-2xl lg:aspect-auto">
              <img
                src="/feature-image9.jpg"
                alt="EmpowaHer Programme Overview"
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

          {/* Right Pillar Rows */}
          <div className="order-1 flex flex-1 flex-col border-[#3f3f3f]/10 lg:order-2 lg:border-l">
            <div className="reveal border-b border-[#3f3f3f]/10 px-5 py-8 lg:px-12 lg:pb-14 lg:pt-12">
              <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
                <span>2026 SUMMIT OVERVIEW</span>
              </div>
              <h2 className="mb-2 font-heading text-[clamp(2rem,3.5vw,3rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
                <span>PROGRAMME DETAIL</span>
              </h2>
              <p className="mb-5 max-w-[42ch] text-[0.875rem] font-normal leading-[1.6] text-[#3f3f3f]/70">
                <span>Seven pillars of leadership, connection and opportunity</span>
              </p>
              {/* Text-Only CTA Button */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={PROGRAMME_PDF_PATH}
                  download="EmpowaHER-Programme-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#ed027e] px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#ed027e]/90"
                >
                  <span>Download Programme (PDF)</span>
                </a>
                <Link
                  href="/partnerships"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#3f3f3f] px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#3f3f3f] transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white"
                >
                  <span>Partnership Opportunities</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col" aria-label="Programme detail pillars">
              {programmeItems.map((item) => {
                const isCoreOutcome = item.id === "core-outcome";
                return (
                  <article
                    key={item.id}
                    className="programme-row reveal group relative flex w-full cursor-default flex-row items-start gap-4 border-b border-l-2 border-b-[#3f3f3f]/10 border-l-transparent bg-transparent px-5 py-6 transition-colors duration-300 ease-out lg:gap-8 lg:px-12 lg:py-10 lg:pl-[calc(3rem-2px)] lg:pr-12"
                    style={{
                      transitionDelay: item.revealDelay,
                    }}
                  >
                    <span
                      className="programme-row-number mt-[-0.5rem] w-[56px] shrink-0 select-none font-heading text-[3.5rem] font-black leading-none text-[#3f3f3f] lg:mt-[-0.75rem] lg:w-[80px] lg:text-[5rem]"
                      aria-hidden="true"
                    >
                      <span>{item.number}</span>
                    </span>
                    <div className="flex flex-1 flex-col gap-1 pt-1">
                      <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#ed027e]">
                        <span>{item.label}</span>
                      </h3>
                      <p
                        className={`text-[0.9375rem] leading-[1.55] text-[#3f3f3f] transition-colors ${
                          isCoreOutcome ? "font-bold text-[#ed027e]" : "font-medium"
                        }`}
                      >
                        <span>{item.value}</span>
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
