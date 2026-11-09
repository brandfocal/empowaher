"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Handshake, Sparkles } from "lucide-react";

export interface SponsorPartner {
  id: string;
  name: string;
  role: string;
  logo: string;
  alt: string;
  width: number;
  height: number;
}

export const sponsorPartners: SponsorPartner[] = [
  {
    id: "old-mutual",
    name: "Old Mutual",
    role: "Financial Services & Wealth Partner",
    logo: "/sponsors/transparent/old-mutual.png",
    alt: "Old Mutual",
    width: 801,
    height: 171,
  },
  {
    id: "bp",
    name: "bp Southern Africa",
    role: "Energy & Global Corporate Partner",
    logo: "/sponsors/transparent/bp.png",
    alt: "bp Southern Africa",
    width: 203,
    height: 270,
  },
  {
    id: "fasset",
    name: "FASSET",
    role: "Finance & Accounting Sector Authority",
    logo: "/sponsors/transparent/fasset.png",
    alt: "FASSET Seta",
    width: 1360,
    height: 234,
  },
  {
    id: "competition-commission",
    name: "Competition Commission",
    role: "Public Sector & Regulation Partner",
    logo: "/sponsors/transparent/competition-commission.png",
    alt: "Competition Commission South Africa",
    width: 1175,
    height: 667,
  },
  {
    id: "vut",
    name: "Vaal University of Technology",
    role: "Higher Education & Academic Partner",
    logo: "/sponsors/transparent/vut.png",
    alt: "VUT Vaal University of Technology",
    width: 1176,
    height: 371,
  },
  {
    id: "sabc",
    name: "SABC",
    role: "National Public Broadcaster",
    logo: "/sponsors/transparent/sabc.png",
    alt: "SABC South African Broadcasting Corporation",
    width: 900,
    height: 372,
  },
  {
    id: "metro-fm",
    name: "METRO FM",
    role: "Official National Commercial Radio Partner",
    logo: "/sponsors/transparent/metro-fm.png",
    alt: "METRO FM SABC",
    width: 488,
    height: 488,
  },
  {
    id: "empowaworx",
    name: "EmpowaWorx",
    role: "Executive Producer & Convening Partner",
    logo: "/sponsors/transparent/empowaworx-logo.png",
    alt: "EmpowaWorx",
    width: 3102,
    height: 1442,
  },
];

interface BroughtToYouByProps {
  partnerUrl?: string;
  partnerButtonText?: string;
  className?: string;
}

export function BroughtToYouBy({
  partnerUrl = "/partnerships",
  partnerButtonText = "Explore Strategic Partnerships",
  className = "",
}: BroughtToYouByProps) {
  return (
    <section
      id="brought-to-you-by"
      aria-labelledby="brought-to-you-by-heading"
      className={`relative w-full overflow-hidden border-t-4 border-[#ed027e] bg-white px-4 py-12 text-[#1C2128] sm:px-6 sm:py-16 lg:px-12 lg:py-20 ${className}`}
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 pb-8 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ed027e]/30 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] sm:text-xs font-black uppercase tracking-[0.25em] text-[#ed027e]">
              <Sparkles className="h-3 w-3" />
              <span>PARTNER VISIBILITY &amp; COALITION</span>
            </div>

            <h2
              id="brought-to-you-by-heading"
              className="mt-3 font-heading text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#1C2128] [text-wrap:balance]"
            >
              <span>EmpowaHer™ Is</span>{" "}
              <span className="text-[#ed027e]">Brought To You By</span>
            </h2>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row lg:flex-col lg:items-end">
            <Link
              href={partnerUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-6 py-3 font-heading text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-all duration-300 hover:scale-[1.03] hover:bg-[#ff1a95]"
            >
              <Handshake className="h-4 w-4" />
              <span>{partnerButtonText}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <span className="text-[0.625rem] sm:text-[0.6875rem] font-bold uppercase tracking-wider text-[#3f3f3f]/60">
              Inaugural Leadership Coalition
            </span>
          </div>
        </div>

        {/* Brand Positioning Callout */}
        <div className="mt-2 rounded-2xl border border-[#ed027e]/20 bg-gradient-to-r from-[#ed027e]/5 via-[#ed027e]/[0.02] to-transparent p-4 sm:p-5 text-xs sm:text-sm text-[#1C2128]">
          <p className="font-semibold text-[#11161F]">
            Produced by{" "}
            <a
              href="https://www.empowaworx.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#ed027e] underline hover:text-[#11161F] transition-colors"
            >
              EmpowaWorx
            </a>
          </p>
          <p className="mt-1 text-xs text-[#3f3f3f]/80">
            EmpowaHer is part of the{" "}
            <a
              href="https://www.empowaworx.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-[#ed027e] transition-colors"
            >
              EmpowaWorx
            </a>{" "}
            integrated ecosystem.
          </p>
        </div>

        {/* Logos on ONE LINE in their authentic original colours */}
        <div className="mt-6 border-t border-[#1C2128]/10 pt-8 sm:pt-10">
          <div className="overflow-x-auto no-scrollbar py-2">
            <div className="grid min-w-[720px] sm:min-w-0 grid-cols-8 items-center justify-items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {sponsorPartners.map((partner) => (
                <div
                  key={partner.id}
                  title={`${partner.name} — ${partner.role}`}
                  className="group relative flex h-14 sm:h-16 md:h-20 w-full items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className="max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-14 w-auto max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
