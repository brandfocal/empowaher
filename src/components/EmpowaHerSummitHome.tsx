"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { NewsBanner } from "./NewsBanner";

const programmeFeatures = [
  {
    id: "feature-01",
    number: "01",
    label: "LEADERSHIP IN ACTION",
    text: "A focused three-day experience spanning capability, confidence, connection and commercial opportunity.",
  },
  {
    id: "feature-02",
    number: "02",
    label: "A CURATED COHORT",
    text: "200 high-potential women leaders connected to the people, platforms and pathways that move Africa forward.",
  },
];

const programmeStats = [
  {
    id: "stat-leaders",
    value: "200",
    label: "Leaders",
  },
  {
    id: "stat-tracks",
    value: "9",
    label: "Tracks",
  },
  {
    id: "stat-days",
    value: "3",
    label: "Days",
  },
];

const partnershipPillars = [
  {
    id: "pillar-01",
    label: "TALENT PIPELINE",
    text: "Meet a credible, curated network of emerging women leaders ready for what comes next.",
  },
  {
    id: "pillar-02",
    label: "VISIBLE IMPACT",
    text: "Turn commitments to women into an experience with clear, measurable outcomes.",
  },
  {
    id: "pillar-03",
    label: "SHARED PLATFORM",
    text: "Shape the conversations, skills and opportunities that will define Africa’s next economy.",
  },
];

export function EmpowaHerSummitHome() {
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
        threshold: 0.12,
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
      className="min-h-screen w-full overflow-x-hidden bg-white font-sans text-[#3f3f3f] selection:bg-[#ed027e] selection:text-white"
    >
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
              className="h-full w-full object-cover object-[62%_0.75rem] sm:object-[60%_1rem] lg:object-[60%_top] will-change-transform"
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
            {/* Status Badge Eyebrow */}
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
              <span>EmpowaHer™ Leadership Summit 2026</span>
              <span className="mx-1 h-1 w-1 rounded-full bg-white/70 sm:mx-2" />
              <span>29–31 October 2026</span>
            </div>

            {/* Summit Overline */}
            <div
              className="hero-reveal flex flex-wrap items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/85 sm:text-xs lg:tracking-[0.2em]"
              style={{
                animationDelay: "60ms",
              }}
            >
              <span>EmpowaHer™ Leadership Summit</span>
              <span
                className="inline-block h-3 w-px bg-white/40 align-middle"
                aria-hidden="true"
              />
              <span className="rounded-full bg-[#ed027e] px-2.5 py-0.5 font-extrabold text-white">
                The Future Is Female™
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
                  <span>THE FUTURE</span>
                  <br />
                  <span className="text-[#ed027e]">IS FEMALE™</span>
                </h1>

                {/* Hero CTAs */}
                <div
                  className="hero-reveal mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start"
                  style={{
                    animationDelay: "300ms",
                  }}
                >
                  <Link
                    href="/nominate"
                    className="flex w-full items-center justify-center rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:bg-[#ed027e]/90 hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Nominate a Leader</span>
                  </Link>
                  <Link
                    href="/partnerships"
                    className="flex w-full items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#3f3f3f] hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Partner With Us</span>
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
                <p className="mt-3 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/60">
                  <span>EmpowaWorx House, Randburg, Johannesburg</span>
                </p>
              </div>

              <div
                className="hero-reveal"
                style={{
                  animationDelay: "240ms",
                }}
              >
                <p className="font-sans text-[0.875rem] font-normal leading-[1.65] text-white/70">
                  <span>
                    EmpowaHer™ is a three-day leadership experience designed to
                    prepare Africa’s next generation of women leaders to compete,
                    lead and succeed across business, government, entrepreneurship
                    and the boardroom.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Established News Banner */}
      <NewsBanner />

      {/* The Vision Section */}
      <section
        id="vision"
        className="border-t-[6px] border-[#ed027e] bg-white"
        aria-labelledby="vision-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
          <div className="border-b border-[#1C2128]/10 py-5">
            <p className="text-[0.62rem] font-black uppercase tracking-[0.3em] text-[#ed027e]">
              <span>THE VISION</span>
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[5fr_7fr]">
          <div className="relative hidden min-h-[420px] overflow-hidden rounded-2xl lg:block m-4">
            <img
              src="/simphiwe-masiza.jpg"
              alt="Simphiwe Masiza, Founder of EmpowaWorx"
              className="h-full w-full rounded-2xl object-cover object-[center_15%]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C2128]/95 via-[#1C2128]/50 to-transparent px-8 pb-8 pt-20">
              <p className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-white">
                <span>Simphiwe Masiza</span>
              </p>
              <p className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/60">
                <span>Founder &amp; Executive Producer, EmpowaWorx™</span>
              </p>
            </div>
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-[3px] bg-[#ed027e]"
            />
          </div>
          <div className="flex flex-col justify-center gap-10 px-4 py-16 md:px-6 lg:py-24 lg:pl-16 lg:pr-12">
            <h2
              id="vision-heading"
              className="font-heading max-w-[12ch] text-[clamp(2.75rem,5vw,4.5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-[#1C2128] [text-wrap:balance]"
            >
              <span>Women Lead What Comes Next.</span>
            </h2>
            <figure className="m-0">
              <blockquote className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-full before:bg-[#ed027e] before:content-['']">
                <p className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-black italic leading-[1.35] tracking-[-0.02em] text-[#1C2128] [text-wrap:balance]">
                  <span>
                    “Africa’s future will be shaped by the women who are
                    equipped, connected and empowered to lead it.”
                  </span>
                </p>
              </blockquote>
              <figcaption className="mt-6 pl-6 text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
                <span>— Simphiwe Masiza, Founder</span>
              </figcaption>
            </figure>
            <div className="flex items-center gap-4 border-t border-[#1C2128]/10 pt-6 lg:hidden">
              <img
                src="/simphiwe-masiza.jpg"
                alt="Simphiwe Masiza"
                className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-[#ed027e] ring-offset-2 ring-offset-white"
              />
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#1C2128]">
                  <span>Simphiwe Masiza</span>
                </p>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#3f3f3f]/60">
                  <span>Founder, EmpowaWorx™</span>
                </p>
              </div>
            </div>
            <div>
              <Link
                href="/vision-and-impact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ed027e] hover:underline"
              >
                <span>Explore the full Vision &amp; Impact</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Overview Section */}
      <section
        id="programme"
        className="border-t-[6px] border-[#ed027e] bg-[#1C2128] py-16 lg:py-28"
        aria-labelledby="programme-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 items-end gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-[0.62rem] font-black uppercase tracking-[0.3em] text-[#ed027e]">
                <span>PROGRAMME OVERVIEW</span>
              </p>
              <h2
                id="programme-heading"
                className="font-heading max-w-[14ch] text-[clamp(2.75rem,6vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-white [text-wrap:balance]"
              >
                <span>Accelerating Africa’s Female Talent</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <p className="max-w-[38ch] text-base leading-relaxed text-white/60 lg:text-right">
                EmpowaHer™ convenes ambitious women, senior leaders and
                purpose-led organisations around the practical pathways that
                turn potential into lasting influence.
              </p>
              <Link
                href="/programme"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#ed027e] px-6 py-3 text-[0.68rem] font-black uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
              >
                <span>View Full Programme &amp; Schedule</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid gap-[1px] bg-white/10 sm:grid-cols-1 md:grid-cols-3">
            {programmeFeatures.map((feature) => (
              <article
                key={feature.id}
                className="group flex cursor-default flex-col gap-6 bg-[#1C2128] p-8 transition-colors duration-300 hover:bg-[#252b35] lg:p-10"
              >
                <strong
                  className="font-heading block text-[clamp(4rem,8vw,7rem)] font-black leading-none tracking-[-0.08em] text-[#ed027e] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  {feature.number}
                </strong>
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-[clamp(1.2rem,2.5vw,2rem)] font-black uppercase leading-[1] tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#ed027e]">
                    <span>{feature.label}</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    <span>{feature.text}</span>
                  </p>
                </div>
              </article>
            ))}
            <figure className="relative m-0 overflow-hidden bg-[#1C2128]">
              <img
                src="/programme-overview.jpg"
                alt="EmpowaHer programme session in action"
                className="h-full min-h-[220px] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 lg:min-h-[320px]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#1C2128]/80 via-[#1C2128]/25 to-transparent"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 px-8 pb-8">
                <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/70">
                  EmpowaHer™ 2026
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="mt-[1px] grid grid-cols-3 gap-[1px] bg-white/10">
            {programmeStats.map((stat) => (
              <div
                key={stat.id}
                className="bg-[#1C2128] px-8 py-7 lg:px-10 text-center sm:text-left"
              >
                <strong className="font-heading block text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-[-0.05em] text-[#ed027e]">
                  <span>{stat.value}</span>
                </strong>
                <span className="mt-2 block text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nominations Section */}
      <section
        id="nominations"
        className="border-t-[6px] border-[#ed027e] bg-[#1C2128] text-white"
        aria-labelledby="nominations-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
          <div className="border-b border-white/10 py-12 lg:py-16">
            <p className="mb-5 text-[0.62rem] font-black uppercase tracking-[0.3em] text-[#ed027e]">
              <span>NOMINATIONS</span>
            </p>
            <h2
              id="nominations-heading"
              className="font-heading text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-[0.85] tracking-[-0.05em] text-white [text-wrap:balance]"
            >
              <span>Nominate a Leader</span>
            </h2>
          </div>
          <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
            <figure className="relative m-0 hidden overflow-hidden border-r border-white/10 lg:block py-6 pr-6">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Women collaborating in a professional setting"
                className="h-full min-h-[480px] w-full rounded-2xl object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1C2128]/60"
              />
              <figcaption className="absolute bottom-10 left-10 text-[0.58rem] font-black uppercase tracking-widest text-white/40">
                <span>EmpowaHer™ community</span>
              </figcaption>
            </figure>
            <div className="flex flex-col justify-center gap-8 px-0 py-12 lg:py-16 lg:pl-16">
              <p className="max-w-[42ch] text-base leading-relaxed text-white/70">
                <span>
                  Nominate a woman whose ambition is matched by evidence of
                  influence, initiative and a desire to advance others.
                </span>
              </p>
              <ul className="space-y-0 border-t border-white/10">
                <li className="flex items-start gap-3 border-b border-white/10 py-5 sm:gap-5">
                  <span className="mt-0.5 shrink-0 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                    01
                  </span>
                  <span className="text-sm font-semibold leading-relaxed text-white/90">
                    Recognise leadership beyond the title.
                  </span>
                </li>
                <li className="flex items-start gap-3 border-b border-white/10 py-5 sm:gap-5">
                  <span className="mt-0.5 shrink-0 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                    02
                  </span>
                  <span className="text-sm font-semibold leading-relaxed text-white/90">
                    Help build Africa’s next generation of leaders.
                  </span>
                </li>
                <li className="flex items-start gap-3 border-b border-white/10 py-5 sm:gap-5">
                  <span className="mt-0.5 shrink-0 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                    03
                  </span>
                  <span className="text-sm font-semibold leading-relaxed text-white/90">
                    Women aged 18–35 from across South Africa and the African
                    continent.
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/nominate"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-8 py-4 text-[0.68rem] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#ed027e] focus:ring-offset-2 focus:ring-offset-[#1C2128]"
                >
                  <span>Submit a Nomination</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/selection-criteria"
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/60 hover:text-white underline underline-offset-4"
                >
                  <span>View Selection Criteria</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section
        id="partnerships"
        className="bg-white"
        aria-labelledby="partnerships-heading"
      >
        <div className="bg-[#ed027e] px-4 py-14 md:px-6 lg:px-12 lg:py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-[0.62rem] font-black uppercase tracking-[0.3em] text-white/80">
              <span>STRATEGIC PARTNERSHIPS</span>
            </p>
            <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
              <h2
                id="partnerships-heading"
                className="font-heading text-[clamp(3.5rem,9vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.05em] text-white [text-wrap:balance]"
              >
                <span>Partner With Purpose.</span>
              </h2>
              <p className="max-w-[34ch] text-sm leading-relaxed text-white/85 lg:pb-2 lg:text-right">
                <span>
                  Partner with EmpowaHer™ to create meaningful access to the
                  women shaping Africa’s future.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
          <div className="divide-y divide-[#1C2128]/10">
            {partnershipPillars.map((pillar, i) => (
              <article
                key={pillar.id}
                className="group grid cursor-default grid-cols-1 items-center gap-6 py-10 transition-colors duration-300 hover:bg-[#fdf0f5] sm:grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_14rem_1fr] lg:grid-cols-[5rem_16rem_1fr] lg:py-12"
              >
                <span className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-[-0.08em] text-[#ed027e]/30 transition-all duration-300 group-hover:text-[#ed027e]">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-[clamp(1rem,2vw,1.5rem)] font-black uppercase leading-[1] tracking-[-0.03em] text-[#1C2128] transition-colors duration-300 group-hover:text-[#ed027e] sm:col-span-1">
                  <span>{pillar.label}</span>
                </h3>
                <p className="col-span-2 text-base leading-relaxed text-[#3f3f3f]/75 sm:col-span-1 md:col-span-1">
                  <span>{pillar.text}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="bg-[#1C2128] px-4 py-10 md:px-6 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-heading text-[clamp(1.25rem,2.5vw,2rem)] font-black uppercase leading-[1.1] tracking-[-0.03em] text-white">
              <span>
                Ready to invest in Africa’s next generation of women leaders?
              </span>
            </p>
            <div className="flex shrink-0 flex-col gap-2 sm:items-end">
              <Link
                href="/partnerships"
                className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-8 py-4 text-[0.68rem] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#ed027e] focus:ring-offset-2 focus:ring-offset-[#1C2128]"
              >
                <span>Explore Partnership Opportunities</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                <span>Limited positions available</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produced by EmpowaWorx Section */}
      <section
        id="about"
        className="bg-white"
        aria-labelledby="about-heading"
      >
        <div className="border-b border-[#1C2128]/10 px-4 pb-0 pt-12 md:px-6 lg:px-12 lg:pt-16">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mb-6 text-[0.62rem] font-black uppercase tracking-[0.3em] text-[#ed027e]">
              <span>PRODUCED BY EMPOWAWORX</span>
            </p>
          </div>
          <h2
            id="about-heading"
            className="font-heading -mb-3 select-none text-center text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.05em] text-[#1C2128]/15 [text-wrap:balance]"
          >
            <span>EmpowaWorx</span>
            <sup className="text-[0.35em] tracking-normal align-super">™</sup>
          </h2>
        </div>
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
          <div className="grid gap-0 divide-y divide-[#1C2128]/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-10 md:py-12 md:pr-10">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <span>About</span>
              </p>
              <p className="mt-4 max-w-[32ch] text-base leading-relaxed text-[#3f3f3f]/75">
                <span>
                  EmpowaWorx™ builds platforms that develop people, connect
                  possibility and move inclusive growth from intention to action.
                </span>
              </p>
            </div>
            <div className="py-10 md:px-10 md:py-12">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <span>Contact the team</span>
              </p>
              <p className="font-heading mt-4 text-2xl font-black uppercase leading-[1] tracking-[-0.03em] text-[#1C2128]">
                <span>Start a conversation.</span>
              </p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm leading-[1.55] text-[#3f3f3f]/80">
                <a
                  href="mailto:doric@empowaworx.co.za"
                  className="flex items-center gap-2.5 font-medium transition-colors hover:text-[#ed027e]"
                >
                  <Mail size={14} className="text-[#ed027e] shrink-0" />
                  <span>doric@empowaworx.co.za</span>
                </a>
                <a
                  href="tel:+27114827256"
                  className="flex items-center gap-2.5 font-medium transition-colors hover:text-[#ed027e]"
                >
                  <Phone size={14} className="text-[#ed027e] shrink-0" />
                  <span className="tabular-nums">+27 (0) 11 482 7256</span>
                </a>
                <div className="flex items-start gap-2.5 pt-1 text-xs text-[#3f3f3f]/70">
                  <MapPin size={15} className="text-[#ed027e] shrink-0 mt-0.5" />
                  <span>EmpowaWorx House, 364 Pine Avenue, Ferndale, Randburg 2194</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-10 md:py-12 md:pl-10">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <span>Get involved</span>
              </p>
              <p className="mt-4 max-w-[24ch] text-base leading-relaxed text-[#3f3f3f]/75">
                <span>
                  Partner with EmpowaHer™ and invest in Africa’s next generation.
                </span>
              </p>
              <Link
                href="/partnerships"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#ed027e] px-7 py-3.5 text-[0.68rem] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#ed027e] focus:ring-offset-2 focus:ring-offset-white"
              >
                <span>Become a Partner</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Site-wide Established Shared Footer */}
      <Footer />
    </main>
  );
}
