"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function NewsBanner() {
  return (
    <section
      aria-labelledby="latest-news-heading"
      className="w-full border-t-4 border-[#ed027e] border-b border-white/10 bg-[#0D0D0D] text-white"
    >
      <div className="reveal mx-auto grid max-w-[1200px] gap-8 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[7fr_5fr] md:gap-12 md:px-12 md:py-20 lg:gap-20 lg:px-16">
        <div>
          <p className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
            <span>Latest News</span>
          </p>
          <h2
            id="latest-news-heading"
            className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-black uppercase leading-[1.05] tracking-[-0.02em] text-white"
          >
            <span>
              EmpowaHer™ Leadership Summit 2026 Opens Nominations to Accelerate
              Africa&apos;s Next Generation of Women Leaders
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="max-w-[48ch] text-[0.9375rem] font-medium leading-[1.65] text-white/70 sm:text-base">
            <span>
              Nominations are now open for a three-day, continent-wide executive
              leadership experience. 200 exceptional women aged 18–35 will be
              selected from across South Africa and the African continent.
            </span>
          </p>
          <Link
            href="/press-release"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ed027e]/20 transition-all duration-200 hover:bg-[#ed027e]/90 hover:scale-[1.02] sm:w-auto"
          >
            <span>Read the Full Press Release</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5"
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
