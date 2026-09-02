"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

const PROGRAMME_PDF_PATH = "/EmpowaHER-Programme-2026.pdf";
const PROSPECTUS_PDF_PATH = "/EmpowaHer%E2%84%A2-Leadership-Programme-2026-Partnership-Proposal-&-Prospectu.pdf";

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
    value: "Emerging women leaders, graduates, professionals, entrepreneurs, executives and aspiring board members aged 18–35",
    revealDelay: "180ms",
  },
  {
    id: "delegate-model",
    number: "05",
    label: "DELEGATE MODEL",
    value: "Selected and vetted through a curated nomination process involving 200 leading organisations",
    revealDelay: "240ms",
  },
  {
    id: "nominating-network",
    number: "06",
    label: "NOMINATING NETWORK",
    value: "Leading brands and organisations across industries, communities, academia, multinationals, foundations and civic organisations",
    revealDelay: "300ms",
  },
  {
    id: "core-outcome",
    number: "07",
    label: "CORE OUTCOME",
    value: "A high-potential leadership pipeline connected to capability, capital, careers, global exposure and board opportunity",
    revealDelay: "360ms",
  },
];

export function SocialIcons({ compact = false }: { compact?: boolean }) {
  const socialLinkClasses = compact
    ? "flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white"
    : "flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white";

  return (
    <nav aria-label="Social media links" className="flex items-center gap-2">
      <a
        href="https://www.linkedin.com/showcase/empowawomen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="EmpowaWomen on LinkedIn"
        className={socialLinkClasses}
      >
        <LinkedinIcon className="h-4 w-4" />
      </a>
      <a
        href="https://www.instagram.com/empowawomen/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="EmpowaWomen on Instagram"
        className={socialLinkClasses}
      >
        <InstagramIcon className="h-4 w-4" />
      </a>
      <a
        href="https://x.com/EmpowaWomen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="EmpowaWomen on X"
        className={socialLinkClasses}
      >
        <XIcon className="h-3.5 w-3.5" />
      </a>
      <a
        href="https://www.facebook.com/people/EmpowaWomen/100093644768130/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="EmpowaWomen on Facebook"
        className={socialLinkClasses}
      >
        <FacebookIcon className="h-4 w-4" />
      </a>
      <a
        href="https://www.youtube.com/@EmpowaWomen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="EmpowaWomen on YouTube"
        className={socialLinkClasses}
      >
        <YoutubeIcon className="h-4 w-4" />
      </a>
    </nav>
  );
}

export function EmpowaHerComingSoon() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
          <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-4 px-5 pb-6 pt-5 text-white sm:px-8 md:px-12">
            <a
              href="#top"
              aria-label="EmpowaHer Home"
              className="flex items-center transition-opacity hover:opacity-90"
            >
              <Image
                src="/empowaher-logo.png"
                alt="EmpowaHer Logo"
                width={440}
                height={120}
                className="h-[72px] w-auto brightness-0 invert object-contain sm:h-[88px] md:h-[96px]"
                priority
              />
            </a>

            <div className="flex items-center gap-3 text-[0.625rem] font-semibold uppercase tracking-[0.12em] sm:gap-6 sm:text-[0.6875rem]">
              <a
                href="#programme"
                className="block rounded-full border-2 border-white/40 bg-black/20 px-4 py-2.5 font-black text-white backdrop-blur-sm transition-all hover:border-[#ed027e] hover:bg-[#ed027e] sm:px-6"
              >
                <span>Programme Detail</span>
              </a>
              <div className="hidden sm:block">
                <SocialIcons compact />
              </div>
            </div>
          </header>

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
              <span className="inline-block h-3 w-px bg-white/40 align-middle" aria-hidden="true" />
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

                {/* Text-Only CTA Action Buttons (Icons Removed) */}
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
                    href={PROSPECTUS_PDF_PATH}
                    download="EmpowaHer-Leadership-Programme-2026-Prospectus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#3f3f3f] hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Download Prospectus</span>
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
                  <span>A Three-Day Leadership Experience for Africa&apos;s Next Generation of Women Leaders (18–35)</span>
                </h2>
              </div>

              <div
                className="hero-reveal"
                style={{
                  animationDelay: "240ms",
                }}
              >
                <p className="font-sans text-[0.875rem] font-normal leading-[1.65] text-white/70">
                  <span>EmpowaHer™ Leadership Summit — The Future Is Female™ is a three-day leadership experience designed to prepare Africa&apos;s next generation of women leaders to compete, lead and succeed across business, government, entrepreneurship, civil society and the boardroom.</span>
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
              <a
                href={PROGRAMME_PDF_PATH}
                download="EmpowaHER-Programme-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#ed027e] px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#ed027e]/90 sm:w-auto"
              >
                <span>Download Programme (PDF)</span>
              </a>
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

      {/* Dark Prefooter Section (Pure Black and Charcoal palette) */}
      <section className="bg-black px-5 pb-12 text-white sm:px-6 md:px-10 md:pb-16 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 lg:pt-16">
            {/* 01 — About */}
            <div
              className="reveal"
              style={{
                transitionDelay: "0ms",
              }}
            >
              <div className="mb-3 border-l-2 border-[#ed027e] pl-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                <span>01 — About</span>
              </div>
              <h3 className="mb-4 font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-black uppercase leading-[1.15] tracking-[-0.01em] text-white">
                <span>The Future Is Female™</span>
              </h3>
              <p className="mb-6 text-[0.9375rem] font-normal leading-[1.65] text-white/70 md:max-w-[42ch]">
                <span>EmpowaHer™ equips and elevates young African women leaders with executive mentorship, actionable masterclasses, and strategic networks to compete and lead across business, government, and the boardroom.</span>
              </p>
              <div className="flex flex-col gap-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                <a
                  href={PROGRAMME_PDF_PATH}
                  download="EmpowaHER-Programme-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-[#ed027e]"
                >
                  <span>Download Programme (PDF)</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={PROSPECTUS_PDF_PATH}
                  download="EmpowaHer-Leadership-Programme-2026-Prospectus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-[#ed027e]"
                >
                  <span>Download Prospectus (PDF)</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* 02 — Contact */}
            <div
              className="reveal"
              style={{
                transitionDelay: "80ms",
              }}
            >
              <div className="mb-3 border-l-2 border-[#ed027e] pl-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                <span>02 — Contact</span>
              </div>
              <h3 className="mb-4 font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-black uppercase leading-[1.15] tracking-[-0.01em] text-white">
                <span>Start A Conversation.</span>
              </h3>
              <div className="mb-4">
                <div className="text-base font-bold text-white">
                  <span>Doric Sithole</span>
                </div>
                <div className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-[#ed027e]">
                  <span>Managing Executive of EmpowaHer</span>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 text-sm leading-[1.55] text-white/70">
                <a
                  href="mailto:doric@empowaworx.co.za"
                  className="flex items-center gap-2.5 transition-colors hover:text-[#ed027e]"
                >
                  <Mail size={14} className="text-[#ed027e] shrink-0" />
                  <span>doric@empowaworx.co.za</span>
                </a>
                <a
                  href="tel:+27786489522"
                  className="flex items-center gap-2.5 transition-colors hover:text-[#ed027e]"
                >
                  <Phone size={14} className="text-[#ed027e] shrink-0" />
                  <span className="tabular-nums">+27 (0) 78 648 9522</span>
                </a>
                <a
                  href="tel:+27114827256"
                  className="flex items-center gap-2.5 transition-colors hover:text-[#ed027e]"
                >
                  <Phone size={14} className="text-[#ed027e] shrink-0" />
                  <span className="tabular-nums">+27 (0) 11 482 7256</span>
                </a>
                <div className="flex items-start gap-2.5 pt-1 text-xs text-white/60">
                  <MapPin size={15} className="text-[#ed027e] shrink-0 mt-0.5" />
                  <span>EmpowaWorx House, 364 Pine Avenue, Ferndale, Randburg 2194</span>
                </div>
              </div>
            </div>

            {/* 03 — Follow Us */}
            <div
              className="reveal md:col-span-2 lg:col-span-1"
              style={{
                transitionDelay: "160ms",
              }}
            >
              <div className="mb-3 border-l-2 border-[#ed027e] pl-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                <span>03 — Follow Us</span>
              </div>
              <h3 className="mb-4 font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-black uppercase leading-[1.15] tracking-[-0.01em] text-white">
                <span>Stay Connected.</span>
              </h3>
              <p className="mb-6 text-[0.9375rem] font-normal leading-[1.65] text-white/70 md:max-w-[42ch]">
                <span>Follow EmpowaWomen and meet the women engineering what comes next.</span>
              </p>
              <div className="flex items-center gap-2.5">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black px-5 py-8 text-white/60 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-3 text-left text-xs font-semibold uppercase tracking-[0.12em] md:flex-row md:items-center">
          <div>
            <span>© {new Date().getFullYear()} EMPOWAHER • AN EMPOWAWORX INITIATIVE • OFFICIAL WEBSITE LAUNCHING SOON.</span>
          </div>
          <div className="flex items-center gap-1.5 transition-colors hover:text-[#ed027e]">
            <span>— EMPOWERING WOMEN. ENGINEERING THE FUTURE.</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#ed027e]" />
          </div>
        </div>
      </footer>
    </main>
  );
}
