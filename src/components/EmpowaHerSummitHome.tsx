"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Calendar,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  Play,
  Sparkles,
  Tv,
  Users,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { NewsBanner } from "./NewsBanner";
import { CountdownTimer } from "./CountdownTimer";
import { EmpowaHerTeam } from "./EmpowaHerTeam";
import { PodcastsSnippet } from "./PodcastsSnippet";
import { LeadershipVideos } from "./LeadershipVideos";
import { ConfirmedSpeakers } from "./ConfirmedSpeakers";
import { PromotionalVideos } from "./PromotionalVideos";
import { NewsletterSubscription } from "./NewsletterSubscription";
import { BroughtToYouBy } from "./BroughtToYouBy";

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
  const [isPlayingReel, setIsPlayingReel] = useState(false);

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
                    <span>Nominate Now</span>
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

      {/* Live Summit Countdown Timer Ribbon */}
      <CountdownTimer />

      {/* Established News Banner */}
      <NewsBanner />

      {/* Official Summit 2026 Full-Width Banner */}
      <section
        id="summit-banner"
        className="relative w-full overflow-hidden bg-black"
        aria-label="EmpowaHer Leadership Summit 2026 Banner"
      >
        <Link
          href="https://www.empowaher.co.za/nominate"
          className="group relative block w-full overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#ed027e]"
          aria-label="Nominate for EmpowaHer Leadership Summit 2026"
          title="Nominate for EmpowaHer Leadership Summit 2026"
        >
          <img
            src="/EmpowaHer-Leadership-Summit2026.jpg"
            alt="EmpowaHer Leadership Summit 2026 — Invitation-Led Leadership Accelerator, 29–31 October 2026, EmpowaWorx House"
            width={1920}
            height={720}
            className="block w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            loading="eager"
          />
        </Link>
      </section>

      {/* Confirmed Keynote Speakers & Executive Faculty */}
      <ConfirmedSpeakers />

      {/* Latest Promotional Videos & Event Teasers */}
      <PromotionalVideos />

      {/* The Vision Section */}
      <section
        id="vision"
        className="border-t-[6px] border-[#ed027e] bg-white"
        aria-labelledby="vision-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
          <div className="border-b border-[#1C2128]/10 py-5">
            <p className="text-[0.62rem] font-black uppercase tracking-[0.3em] text-[#ed027e]">
              <span>ABOUT US</span>
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
                href="/about-us"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ed027e] hover:underline"
              >
                <span>Explore About Us</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video & Platform Architecture Showcase Section */}
      <section
        id="media"
        className="relative border-t-[6px] border-[#ed027e] bg-[#0A0D11] py-16 text-white sm:py-20 lg:py-28"
        aria-labelledby="media-heading"
      >
        {/* Glow backdrop effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="grid grid-cols-1 items-end gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <Tv className="h-3 w-3" />
                <span>PLATFORM ARCHITECTURE IN ACTION</span>
              </div>
              <h2
                id="media-heading"
                className="font-heading max-w-[15ch] text-[clamp(2.5rem,5.5vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white [text-wrap:balance]"
              >
                <span>EmpowaWomen™</span>
                <br />
                <span className="text-[#ed027e]">Highlight Reel.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <p className="max-w-[42ch] font-sans text-sm sm:text-base leading-relaxed text-white/75 lg:text-right">
                Witness the scale, production excellence, and transformative convening power of our leadership-platform architecture in action across Africa.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/media"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-6 py-3 text-[0.6875rem] font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
                >
                  <span>Visit Media Hub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=g2T0dzTqQZk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-[0.6875rem] font-black uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-[#ed027e] hover:text-[#ed027e]"
                >
                  <Play className="h-3 w-3 fill-current" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Cinema Player Container */}
          <div className="mt-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-black shadow-2xl shadow-black/80">
            <div className="relative w-full aspect-video bg-[#0A0D11]">
              {isPlayingReel ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/g2T0dzTqQZk?autoplay=1&rel=0&modestbranding=1"
                  title="EmpowaWomen™ Leadership Highlight Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <div
                  className="group relative h-full w-full cursor-pointer"
                  onClick={() => setIsPlayingReel(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setIsPlayingReel(true);
                    }
                  }}
                  aria-label="Play EmpowaWomen Highlight Reel"
                >
                  {/* High-res Video Poster */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://i.ytimg.com/vi/g2T0dzTqQZk/maxresdefault.jpg"
                    alt="EmpowaWomen™ Leadership Highlight Reel"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://i.ytimg.com/vi/g2T0dzTqQZk/hqdefault.jpg";
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 transition-opacity group-hover:opacity-80" />

                  {/* Centered Glowing Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <button
                      type="button"
                      aria-label="Play Highlight Reel"
                      className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-2xl shadow-[#ed027e]/50 transition-all duration-300 group-hover:scale-110"
                    >
                      <span className="absolute -inset-2.5 rounded-full border border-[#ed027e]/60 animate-ping opacity-30" />
                      <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current translate-x-0.5" />
                    </button>

                    <div className="mt-5 max-w-lg">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                        Click to Play Broadcast Reel
                      </span>
                      <h3 className="font-heading mt-2 text-lg sm:text-xl font-black uppercase tracking-tight text-white drop-shadow-md">
                        10th Annual EmpowaWomen Leadership Summit
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 3 Architecture Pillars Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#ed027e]/50 hover:bg-white/[0.05]">
              <div className="text-[0.6875rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                01 — Multi-Sector Convening
              </div>
              <h3 className="font-heading mt-3 text-lg font-black uppercase text-white">
                Cabinet, Corporate &amp; Global Icons
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                A verified stage uniting high-calibre women leaders with ministers, enterprise founders, and multinational board chairs.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#ed027e]/50 hover:bg-white/[0.05]">
              <div className="text-[0.6875rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                02 — Broadcast-Calibre Infrastructure
              </div>
              <h3 className="font-heading mt-3 text-lg font-black uppercase text-white">
                High-Impact Experiential Design
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                World-class production, curated masterclass studios, and immersive media delivery that amplifies participant influence.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#ed027e]/50 hover:bg-white/[0.05]">
              <div className="text-[0.6875rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                03 — Pan-African Pipeline
              </div>
              <h3 className="font-heading mt-3 text-lg font-black uppercase text-white">
                200 Emerging Leaders (18–35)
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                A rigorous, measurable talent springboard accelerating exceptional young women into boardrooms and commercial leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker & Nominee Video Gallery */}
      <LeadershipVideos />

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

          {/* Programme PDF & Itinerary CTA Banner */}
          <div className="mt-10 rounded-2xl border border-[#ed027e]/30 bg-gradient-to-r from-[#ed027e]/15 via-[#151921] to-[#ed027e]/10 p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <span className="rounded-full bg-[#ed027e] px-3 py-0.5 text-[0.625rem] font-black uppercase tracking-[0.2em] text-white">
                  Official 2026 Programme Itinerary
                </span>
                <h3 className="font-heading mt-2 text-xl font-bold uppercase text-white sm:text-2xl">
                  Download The Complete 3-Day Summit Programme
                </h3>
                <p className="mt-1 max-w-[50ch] text-xs sm:text-sm text-white/70">
                  Comprehensive breakdown of opening plenaries, 9 executive tracks, speakers faculty, and graduation ceremonies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="/EmpowaHER-Programme-2026.pdf"
                  download="EmpowaHER-Programme-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-6 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Programme (PDF)</span>
                </a>
                <Link
                  href="/programme"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white hover:border-[#ed027e]"
                >
                  <span>View Online Itinerary</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radio Broadcasts & Podcasts Snippet Section */}
      <PodcastsSnippet />

      {/* Official Press Release Section (Preserving Snippet Dark Theme & Colours) */}
      <section
        id="press-release-cta"
        className="relative border-t-[6px] border-[#ed027e] bg-[#11161F] py-14 text-white sm:py-16 lg:py-20 overflow-hidden"
      >
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header & Meta Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                <FileText className="h-3 w-3" />
                <span>OFFICIAL PRESS STATEMENT</span>
              </span>
              <span className="text-xs font-mono text-white/40">•</span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/70">
                FOR IMMEDIATE RELEASE
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/EmpowaHer-Media-Release-2026.pdf"
                download="EmpowaHer-Media-Release-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-[#ed027e] hover:text-white"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download PDF</span>
              </a>
              <Link
                href="/press-release"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e] px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.02] hover:bg-[#ff1a95]"
              >
                <span>Full Press Page</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[0.6875rem] font-mono font-bold uppercase tracking-widest text-white/80">
              <Sparkles className="h-3 w-3 text-[#ed027e]" />
              <span>The Future Is Female</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-[-0.02em] text-white">
              EmpowaHer Leadership Summit 2026{" "}
              <span className="text-[#ed027e]">| The Future Is Female</span>
            </h2>

            <p className="font-heading text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-tight text-[#ed027e]">
              Invest in Women. Strengthen the Leadership Pipeline. Shape the Future.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/60 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#ed027e]" />
                <strong className="text-white">29–31 October 2026</strong>
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

          {/* Press Release Content Body */}
          <div className="space-y-7 text-sm sm:text-base leading-relaxed text-white/85 font-normal">
            {/* Opening Thesis Lead Card */}
            <div className="rounded-2xl border-l-4 border-[#ed027e] bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm">
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-white leading-relaxed">
                Women’s advancement must be a strategic investment in organisational performance, leadership succession and economic competitiveness.
              </p>
            </div>

            {/* Key Facts / Evidence Callout Strip (4 Stat Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <span className="block font-heading text-2xl sm:text-3xl font-black text-[#ed027e]">
                  38%
                </span>
                <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-white/80 mt-1">
                  Board Seats Held
                </span>
                <span className="block text-[0.625rem] text-white/50 mt-0.5">JSE Top 40 (Just Share 2025)</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <span className="block font-heading text-2xl sm:text-3xl font-black text-[#ed027e]">
                  27.4%
                </span>
                <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-white/80 mt-1">
                  Executive Roles
                </span>
                <span className="block text-[0.625rem] text-white/50 mt-0.5">JSE Top 40 (Just Share 2025)</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <span className="block font-heading text-2xl sm:text-3xl font-black text-[#ed027e]">
                  3 of 40
                </span>
                <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-white/80 mt-1">
                  Female CEOs
                </span>
                <span className="block text-[0.625rem] text-white/50 mt-0.5">JSE Top 40 Companies</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <span className="block font-heading text-2xl sm:text-3xl font-black text-[#ed027e]">
                  123 YRS
                </span>
                <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-white/80 mt-1">
                  To Gender Parity
                </span>
                <span className="block text-[0.625rem] text-white/50 mt-0.5">WEF Global Report 2025</span>
              </div>
            </div>

            {/* Evidence Paragraph */}
            <p>
              The evidence demands action. Just Share’s 2025 assessment of the JSE Top 40 found that women occupied 38% of board seats but only 27.4% of executive roles, with just three companies led by female CEOs. Progress in board representation must translate into stronger executive pipelines. The World Economic Forum’s Global Gender Gap Report 2025 estimated that global gender parity remained 123 years away at the prevailing pace. That trajectory demands greater urgency from those who control investment, appointments and opportunity.
            </p>

            {/* High-Impact Statement Pull-Quote */}
            <div className="rounded-2xl border border-white/15 bg-black/60 p-7 sm:p-9 my-8 text-center relative overflow-hidden shadow-2xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ed027e]/25 blur-3xl"
              />
              <p className="font-heading text-lg sm:text-xl md:text-2xl font-black uppercase leading-snug tracking-tight text-white relative z-10">
                “Talent cannot advance without access. Leadership potential cannot deliver value without opportunity.”
              </p>
            </div>

            {/* Executive Producer Commitment */}
            <p>
              As Executive Producer of EmpowaHer Leadership Summit 2026, my commitment is to help turn emerging talent into a stronger pipeline of women equipped to lead organisations, build enterprises and influence decisions.
            </p>

            {/* Summit Scope */}
            <p>
              Taking place <strong>29–31 October at EmpowaWorx House, Randburg</strong>, the summit brings together <strong>200 young women representing 200 organisations</strong>, aligned to four strategic priorities:
            </p>

            {/* Four Strategic Priorities Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="font-mono text-xs font-bold text-[#ed027e] uppercase tracking-wider block mb-1">
                  Priority 01
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                  Digital Leadership
                </h3>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="font-mono text-xs font-bold text-[#ed027e] uppercase tracking-wider block mb-1">
                  Priority 02
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                  Entrepreneurship, Innovation and Funding
                </h3>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="font-mono text-xs font-bold text-[#ed027e] uppercase tracking-wider block mb-1">
                  Priority 03
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                  Leadership, Governance and Board Readiness
                </h3>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="font-mono text-xs font-bold text-[#ed027e] uppercase tracking-wider block mb-1">
                  Priority 04
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                  Personal Leadership and Career Transformation
                </h3>
              </div>
            </div>

            {/* 100-Day Implementation Plan & ROI */}
            <p>
              The programme connects learning with execution through each participant’s <strong>100-day implementation plan</strong>, creating a practical route for applying insights within her organisation. For employers and partners, the value proposition is clear: <strong>develop future-ready talent, strengthen succession capacity and support innovation through a broader leadership pipeline.</strong>
            </p>

            {/* Direct Call to Private Sector & Institutional Partners */}
            <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 sm:p-8 my-6 space-y-4">
              <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                To the private sector, employers and institutional partners: commit resources, influence and opportunity.
              </h3>
              <ul className="space-y-3 pl-1 text-xs sm:text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ed027e] mt-1.5 shrink-0" />
                  <span>Invest through sponsorship &amp; funding;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ed027e] mt-1.5 shrink-0" />
                  <span>Provide executive mentorship and sponsorship;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ed027e] mt-1.5 shrink-0" />
                  <span>Open access to meaningful assignments and markets; and</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ed027e] mt-1.5 shrink-0" />
                  <span>Back participants’ implementation plans with accountable organisational support.</span>
                </li>
              </ul>
            </div>

            <p>
              Success must be measured through applied capability, expanded responsibilities, career progression and enterprise opportunities. Attendance begins the journey; sustained organisational commitment determines its impact.
            </p>

            <p className="font-semibold text-white">
              The women who will shape our future are already here. The responsibility to invest in their advancement is ours.
            </p>

            {/* Closing Mantra Box */}
            <div className="rounded-2xl bg-gradient-to-r from-[#ed027e]/25 via-[#ed027e]/10 to-transparent p-6 sm:p-8 border-l-4 border-[#ed027e] my-8">
              <p className="font-heading text-lg sm:text-xl font-black uppercase tracking-tight text-[#ed027e]">
                The Future Is Female. Invest now. Open pathways. Accelerate her leadership.
              </p>
            </div>

            {/* Official Sign-Off */}
            <div className="pt-8 border-t border-white/10 mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <strong className="block font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  Simphiwe Masiza
                </strong>
                <span className="block text-xs font-mono text-[#ed027e] uppercase tracking-wider font-semibold mt-1">
                  Executive Producer | EmpowaHer Leadership Summit 2026
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/nominate"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-6 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-md transition-all hover:bg-[#ff1a95]"
                >
                  <span>Nominate A Leader</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>

                <Link
                  href="/partnerships"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white hover:border-[#ed027e]"
                >
                  <span>Partner With Us</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
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

      {/* EmpowaHer™ Brought To You By — Strategic Partner Visibility Section */}
      <BroughtToYouBy />

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
              <div>
                <h2
                  id="partnerships-heading"
                  className="font-heading text-[clamp(3.5rem,9vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.05em] text-white [text-wrap:balance]"
                >
                  <span>Partner With Purpose.</span>
                </h2>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-4 lg:pb-2">
                <p className="max-w-[34ch] text-sm leading-relaxed text-white/85 lg:text-right">
                  <span>
                    Partner with EmpowaHer™ to create meaningful access to the
                    women shaping Africa’s future.
                  </span>
                </p>
                <Link
                  href="/partnerships"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#ed027e] shadow-xl hover:bg-[#141922] hover:text-white transition-all duration-300 hover:scale-[1.03]"
                >
                  <span>Become A Strategic Partner</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
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
          {/* Action Row below Pillars */}
          <div className="border-t border-[#1C2128]/10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm font-medium text-[#1C2128]/70">
              Ready to collaborate on executive sponsorship, bursaries, or plenary tracks?
            </p>
            <Link
              href="/partnerships"
              className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-7 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
            >
              <span>Explore Strategic Partnerships</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        {/* Powerhouse Partnership & Sponsorship CTA for Funders & Strategic Partners */}
        <div id="partnerships-cta" className="border-t border-[#1C2128]/10 bg-gradient-to-b from-[#11161F] via-[#0A0D11] to-black px-4 py-16 text-white md:px-6 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                  <BriefcaseBusiness className="h-3 w-3" />
                  <span>FOR PROSPECTIVE FUNDERS &amp; CORPORATE SPONSORS</span>
                </span>
                <h3 className="font-heading mt-4 text-[clamp(2.25rem,4.5vw,4rem)] font-black uppercase leading-[0.95] tracking-tight text-white">
                  <span>Invest In Africa’s</span>
                  <br />
                  <span className="text-[#ed027e]">Next Generation Of Leaders.</span>
                </h3>
              </div>
              <p className="max-w-[42ch] text-sm leading-relaxed text-white/75 sm:text-base lg:text-right">
                Align institutional capital with measurable female leadership advancement. Partner across Title &amp; Plenary sponsorships, executive track ownership, and fully funded cohort bursaries.
              </p>
            </div>

            {/* High-Impact Action Bar */}
            <div className="mt-10 rounded-2xl border border-[#ed027e]/30 bg-white/[0.03] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h4 className="font-heading text-xl sm:text-2xl font-black uppercase text-white">
                  Download The Complete Partnership Proposal &amp; Prospectus
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-white/70 max-w-[50ch]">
                  Access detailed investment tiers, corporate benefits, demographic data, and strategic activation models.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="/EmpowaHer-Partnership-Proposal-2026.pdf"
                  download="EmpowaHer-Partnership-Proposal-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Prospectus (PDF)</span>
                </a>
                <Link
                  href="/partnerships"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#ed027e] hover:text-white"
                >
                  <span>Explore Partnership Opportunities</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EmpowaHer Leadership Team Section */}
      <EmpowaHerTeam />

      {/* Horizontal Divider between Team and EmpowaWorx */}
      <div className="w-full border-t border-[#1C2128]/12" />

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
                  href="mailto:info@empowaher.co.za"
                  className="flex items-center gap-2.5 font-medium transition-colors hover:text-[#ed027e]"
                >
                  <Mail size={14} className="text-[#ed027e] shrink-0" />
                  <span>info@empowaher.co.za</span>
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

      {/* Subscribe to Our Newsletter CTA */}
      <NewsletterSubscription />

      {/* Site-wide Established Shared Footer */}
      <Footer />
    </main>
  );
}
