"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Sparkles,
  Users,
} from "lucide-react";

import { confirmedSpeakers } from "@/data/speakers";

export function ConfirmedSpeakers() {
  const trackRef = useRef<HTMLDivElement>(null);
  const singleSetWidthRef = useRef<number>(0);
  const currentOffsetRef = useRef<number>(0);
  const targetOffsetRef = useRef<number>(0);

  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  isPausedRef.current = isPaused;

  const touchStartXRef = useRef(0);
  const touchStartOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);

  // Triple the list so there are 3 identical continuous sets for seamless infinite repeating
  const displaySpeakers = [
    ...confirmedSpeakers,
    ...confirmedSpeakers,
    ...confirmedSpeakers,
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateWidth = () => {
      if (track) {
        singleSetWidthRef.current = track.scrollWidth / 3;
      }
    };

    updateWidth();
    // Re-check width after styles and images settle
    const settleTimer = setTimeout(updateWidth, 300);
    window.addEventListener("resize", updateWidth);

    let animationFrameId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(now - lastTime, 50);
      lastTime = now;

      const singleWidth = singleSetWidthRef.current;

      if (!isPausedRef.current && singleWidth > 0) {
        // Continuous auto-scroll speed (~42px per second)
        const speed = 0.042;
        targetOffsetRef.current += delta * speed;
      }

      if (singleWidth > 0) {
        // Infinite seamless wraparound
        if (targetOffsetRef.current >= singleWidth) {
          targetOffsetRef.current -= singleWidth;
          currentOffsetRef.current -= singleWidth;
        } else if (targetOffsetRef.current < 0) {
          targetOffsetRef.current += singleWidth;
          currentOffsetRef.current += singleWidth;
        }

        // Smooth ease interpolation toward targetOffset
        const diff = targetOffsetRef.current - currentOffsetRef.current;
        currentOffsetRef.current += diff * 0.12;

        track.style.transform = `translate3d(-${currentOffsetRef.current}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(settleTimer);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Manual Previous/Next click handlers
  const scrollManual = (direction: "left" | "right") => {
    const firstCard = trackRef.current?.firstElementChild as HTMLElement | null;
    const cardStep = firstCard ? firstCard.offsetWidth + 24 : 344;
    if (direction === "right") {
      targetOffsetRef.current += cardStep;
    } else {
      targetOffsetRef.current -= cardStep;
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartOffsetRef.current = targetOffsetRef.current;
    isDraggingRef.current = true;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const diff = touchStartXRef.current - e.touches[0].clientX;
    targetOffsetRef.current = touchStartOffsetRef.current + diff;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setTimeout(() => {
      setIsPaused(false);
    }, 1200);
  };

  return (
    <section
      id="speakers"
      className="relative border-t-[6px] border-[#ed027e] bg-[#0E1218] py-14 sm:py-18 lg:py-20 text-white overflow-hidden"
      aria-labelledby="speakers-heading"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
      />

      {/* Header Container with Title and Controls */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
              <Users className="h-3 w-3" />
              <span>SUMMIT FACULTY &amp; KEYNOTE LUMINARIES</span>
            </div>
            <h2
              id="speakers-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[0.95] tracking-tight text-white"
            >
              <span>Confirmed</span>{" "}
              <span className="text-[#ed027e]">Speakers &amp; Mentors.</span>
            </h2>
            <p className="mt-2.5 max-w-[56ch] font-sans text-xs sm:text-sm leading-relaxed text-white/75">
              An elite assembly of corporate board chairpersons, C-suite executives, public policy leaders, financial wellness pioneers, and enterprise founders convening to mentor Africa’s next generation of 200 women leaders.
            </p>
          </div>

          {/* Navigation Controls Above The Carousel */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-white/70">
              <Sparkles className="h-3.5 w-3.5 text-[#ed027e]" />
              <span>12 Confirmed Luminaries</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollManual("left")}
                aria-label="Previous speakers"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all duration-200 hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white hover:scale-105 active:scale-95 shadow-md shadow-black/40"
              >
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={() => scrollManual("right")}
                aria-label="Next speakers"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all duration-200 hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white hover:scale-105 active:scale-95 shadow-md shadow-black/40"
              >
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Viewport-wide Continuous Auto-scrolling Strip (Seamless Repeat & Pause on Hover) */}
      <div
        className="relative w-full overflow-hidden py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left & Right Edge Vignette Fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-[#0E1218] via-[#0E1218]/80 to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-[#0E1218] via-[#0E1218]/80 to-transparent z-10"
        />

        {/* Moving Track */}
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform select-none cursor-grab active:cursor-grabbing px-4 sm:px-6"
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
          {displaySpeakers.map((speaker, index) => (
            <article
              key={`${speaker.id}-${index}`}
              id={`speaker-card-${speaker.id}-${index}`}
              className="group relative flex h-[440px] sm:h-[480px] md:h-[500px] w-[280px] sm:w-[320px] md:w-[340px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-[#1C2128] via-[#141922] to-[#0A0D11] shadow-2xl shadow-black/70 transition-all duration-500 hover:-translate-y-2 hover:border-[#ed027e] hover:shadow-[#ed027e]/25"
            >
              {/* Full-bleed Black and White Speaker Image filling the WHOLE background */}
              <div className="absolute inset-0 h-full w-full overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 340px"
                  className="h-full w-full object-cover object-top filter grayscale contrast-125 brightness-90 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:contrast-130"
                  loading="lazy"
                />

                {/* Cinematic Vignettes & Gradients for text legibility */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/30 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#ed027e]/0 transition-colors duration-500 group-hover:bg-[#ed027e]/10 pointer-events-none"
                />
              </div>

              {/* Top Accent Gradient Border */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#ed027e] via-[#ff4da6] to-[#ed027e] transition-transform duration-500 group-hover:scale-x-100 z-20"
              />

              {/* Card Content Overlaid on Full-Bleed Background */}
              <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
                {/* Top Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[0.625rem] sm:text-[0.6875rem] font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ed027e] animate-pulse" />
                    <span>{speaker.trackFocus.split(",")[0]}</span>
                  </span>
                  {speaker.sessionFormat && (
                    <span className="inline-flex items-center rounded-full border border-[#ed027e]/40 bg-[#ed027e]/20 px-2.5 py-0.5 text-[0.5625rem] font-extrabold uppercase tracking-wider text-[#ed027e] backdrop-blur-md">
                      {speaker.sessionFormat}
                    </span>
                  )}
                </div>

                {/* Bottom Speaker Information */}
                <div className="mt-auto pt-6">
                  <h3 className="font-heading text-xl sm:text-2xl font-black uppercase leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-[#ed027e] drop-shadow-md">
                    {speaker.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-[0.8125rem] leading-relaxed text-white/85 line-clamp-3 font-normal drop-shadow">
                    {speaker.title}
                  </p>

                  {speaker.highlights && speaker.highlights.length > 0 && (
                    <div className="mt-3.5 flex items-center gap-2 border-t border-white/20 pt-3">
                      <span className="text-[0.625rem] font-bold uppercase tracking-wider text-[#ed027e] line-clamp-1">
                        {speaker.highlights[0]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom Call to Action Banner */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 mt-10 sm:mt-14">
        <div
          id="speakers-nomination-cta"
          className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ed027e]/40 bg-gradient-to-r from-[#141922] via-[#1c1424] to-[#141922] p-7 sm:p-9 lg:p-10 shadow-2xl relative"
        >
          {/* Subtle Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#ed027e]/20 blur-3xl"
          />

          <div className="relative grid items-center gap-6 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/15 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                <Sparkles className="h-3 w-3" />
                <span>MEET OUR FACULTY IN THE ROOM</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight tracking-tight text-white">
                Learn Directly From Africa’s Most Accomplished Women Leaders.
              </h3>
              <p className="mt-2.5 max-w-[56ch] text-xs sm:text-sm leading-relaxed text-white/75">
                EmpowaHer™ is an invitation-led, three-day accelerator providing 200 young women leaders (aged 18–35) with unfettered boardroom mentorship, masterclasses, and executive sponsorship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end gap-3">
              <Link
                href="/nomination"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-3.5 font-heading text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#ed027e]/30 transition-all duration-300 hover:scale-[1.03] hover:bg-[#ff1a95]"
              >
                <span>Nominate An Emerging Leader</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/leadership-programme"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-[#ed027e] hover:text-white"
              >
                <Compass className="h-4 w-4 text-[#ed027e]" />
                <span>Explore The 9 Leadership Tracks</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
