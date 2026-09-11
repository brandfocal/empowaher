"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, Download, Sparkles } from "lucide-react";

// Summit Opening: 29 October 2026 at 09:00 SAST (UTC+2)
const SUMMIT_TARGET_DATE = new Date("2026-10-29T09:00:00+02:00").getTime();

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function calculateTimeRemaining(): TimeRemaining {
  const now = new Date().getTime();
  const difference = SUMMIT_TARGET_DATE - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isComplete: false };
}

export function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeRemaining());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  const units = [
    { label: "Days", value: mounted ? formatNumber(timeLeft.days) : "--" },
    { label: "Hours", value: mounted ? formatNumber(timeLeft.hours) : "--" },
    { label: "Minutes", value: mounted ? formatNumber(timeLeft.minutes) : "--" },
    { label: "Seconds", value: mounted ? formatNumber(timeLeft.seconds) : "--" },
  ];

  return (
    <div className="relative w-full overflow-hidden border-y-2 border-[#ed027e]/30 bg-[#0A0D11] text-white">
      {/* Background ambient lighting effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#ed027e]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-[#ed027e]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 py-8 sm:px-8 sm:py-10 md:px-12 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1.4fr_auto]">
          {/* Header info */}
          <div className="flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ed027e] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ed027e]" />
              </span>
              <span>Live Summit Countdown</span>
            </div>

            <h2 className="font-heading text-2xl font-black uppercase tracking-[-0.02em] text-white sm:text-3xl lg:text-[2rem] leading-tight">
              <span>Road to EmpowaHer™ 2026</span>
            </h2>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-white/70">
              <span className="inline-flex items-center gap-1 text-[#ed027e]">
                <Calendar className="h-3.5 w-3.5" />
                <span>29–31 October 2026</span>
              </span>
              <span className="text-white/30">•</span>
              <span>EmpowaWorx House, Randburg</span>
            </div>
          </div>

          {/* Time digits grid */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {units.map((unit, idx) => (
              <div
                key={unit.label}
                className="group relative flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-2 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[#ed027e]/60 hover:bg-white/[0.06] sm:px-4 sm:py-5"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-[#ed027e]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="font-heading text-3xl font-black tabular-nums tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-none">
                  {unit.value}
                </span>
                <span className="mt-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#ed027e] sm:text-xs">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Direct CTA button */}
          <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col lg:items-end">
            <Link
              href="/nominate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-all duration-200 hover:scale-[1.03] hover:bg-[#ed027e]/90 active:scale-95"
            >
              <span>Nominate a Leader</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <a
              href="/EmpowaHER-Programme-2026.pdf"
              download="EmpowaHER-Programme-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-heading text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-[#ed027e] hover:text-white"
            >
              <Download className="h-3.5 w-3.5 text-[#ed027e]" />
              <span>Programme (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
