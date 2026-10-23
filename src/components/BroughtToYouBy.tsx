"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Handshake, Sparkles } from "lucide-react";

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
    logo: "/sponsors/old-mutual.png",
    alt: "Old Mutual Logo",
    width: 880,
    height: 880,
  },
  {
    id: "bp",
    name: "bp Southern Africa",
    role: "Energy & Global Corporate Partner",
    logo: "/sponsors/bp-southern-africa.png",
    alt: "bp Southern Africa Logo",
    width: 203,
    height: 270,
  },
  {
    id: "fasset",
    name: "FASSET",
    role: "Finance & Accounting Sector Authority",
    logo: "/sponsors/fasset.jpg",
    alt: "FASSET Seta Logo",
    width: 1600,
    height: 484,
  },
  {
    id: "competition-commission",
    name: "Competition Commission",
    role: "Public Sector & Regulation Partner",
    logo: "/sponsors/competition-commission.jpg",
    alt: "Competition Commission South Africa Logo",
    width: 1600,
    height: 791,
  },
  {
    id: "vut",
    name: "Vaal University of Technology",
    role: "Higher Education & Academic Partner",
    logo: "/sponsors/vut.jpg",
    alt: "VUT Vaal University of Technology Logo",
    width: 1600,
    height: 553,
  },
  {
    id: "sabc",
    name: "SABC",
    role: "National Public Broadcaster",
    logo: "/sponsors/sabc.png",
    alt: "SABC South African Broadcasting Corporation Logo",
    width: 900,
    height: 372,
  },
  {
    id: "radio-2000",
    name: "Radio 2000",
    role: "Official Media & Broadcast Partner",
    logo: "/sponsors/radio-2000.jpg",
    alt: "Radio 2000 SABC Logo",
    width: 1024,
    height: 538,
  },
];

interface BroughtToYouByProps {
  showCta?: boolean;
  partnerUrl?: string;
  partnerButtonText?: string;
  className?: string;
}

export function BroughtToYouBy({
  showCta = true,
  partnerUrl = "/partnerships",
  partnerButtonText = "Explore Strategic Partnerships",
  className = "",
}: BroughtToYouByProps) {
  return (
    <section
      id="brought-to-you-by"
      aria-labelledby="brought-to-you-by-heading"
      className={`relative w-full overflow-hidden border-t-4 border-[#ed027e] bg-gradient-to-b from-[#0A0D11] via-[#0E1218] to-[#141922] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-12 lg:py-28 ${className}`}
    >
      {/* Subtle Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ed027e]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#ed027e]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/15 px-3.5 py-1 text-[0.625rem] sm:text-xs font-black uppercase tracking-[0.25em] text-[#ed027e]">
              <Sparkles className="h-3 w-3" />
              <span>PARTNER VISIBILITY &amp; COALITION</span>
            </div>

            <h2
              id="brought-to-you-by-heading"
              className="mt-4 font-heading text-[clamp(2.25rem,5.5vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white [text-wrap:balance]"
            >
              <span>EmpowaHer™ Is</span>
              <br />
              <span className="text-[#ed027e]">Brought To You By</span>
            </h2>

            <p className="mt-4 max-w-[54ch] font-sans text-sm sm:text-base leading-relaxed text-white/75">
              Africa&apos;s premier executive leadership platform is powered in strategic collaboration with South Africa&apos;s foremost corporate enterprises, public sector bodies, higher education institutions, and national broadcasters.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <Link
              href={partnerUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-3.5 font-heading text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#ed027e]/25 transition-all duration-300 hover:scale-[1.03] hover:bg-[#ff1a95]"
            >
              <Handshake className="h-4 w-4" />
              <span>{partnerButtonText}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-white/50">
              Inaugural 2026 Leadership Coalition
            </span>
          </div>
        </div>

        {/* Prominent Partner Logos Grid */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {sponsorPartners.map((partner, index) => (
              <article
                key={partner.id}
                id={`partner-card-${partner.id}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white p-6 sm:p-7 shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#ed027e] hover:shadow-2xl hover:shadow-[#ed027e]/20"
              >
                {/* Accent Top Border (Reveals on Hover) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#ed027e] to-[#ff4da6] transition-transform duration-300 group-hover:scale-x-100"
                />

                {/* Logo Canvas Container - Pure White & Centered */}
                <div className="relative flex h-24 sm:h-28 w-full items-center justify-center px-2">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className="max-h-[4.25rem] sm:max-h-[5rem] w-auto max-w-[90%] object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Partner Details */}
                <div className="mt-4 border-t border-black/[0.06] pt-3.5 text-center">
                  <h3 className="font-heading text-xs sm:text-sm font-black uppercase tracking-wider text-[#0D0D0D] transition-colors group-hover:text-[#ed027e]">
                    {partner.name}
                  </h3>
                  <p className="mt-1 flex min-h-[2.25rem] items-center justify-center text-[0.625rem] sm:text-[0.6875rem] font-semibold uppercase leading-snug tracking-wider text-[#3f3f3f]/80">
                    {partner.role}
                  </p>
                </div>
              </article>
            ))}

            {/* 8th Slot: Invitation Card for Prospective Partners */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-dashed border-[#ed027e]/50 bg-[#ed027e]/10 p-6 sm:p-7 transition-all duration-300 hover:border-[#ed027e] hover:bg-[#ed027e]/15 hover:shadow-xl hover:shadow-[#ed027e]/15">
              <div className="flex h-24 sm:h-28 flex-col items-center justify-center text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-md shadow-[#ed027e]/40 transition-transform group-hover:scale-110">
                  <Handshake className="h-5 w-5" />
                </span>
                <span className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-[#ed027e]">
                  Partner With Us
                </span>
              </div>

              <div className="mt-4 border-t border-[#ed027e]/20 pt-3.5 text-center">
                <h3 className="font-heading text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                  Join The 2026 Coalition
                </h3>
                <div className="mt-1 flex min-h-[2.25rem] items-center justify-center">
                  <Link
                    href={partnerUrl}
                    className="inline-flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-wider text-[#ed027e] hover:text-white transition-colors"
                  >
                    <span>Explore Packages</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar (Optional, enabled by default) */}
        {showCta && (
          <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.03] p-6 sm:p-10 backdrop-blur-md">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <span className="text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                  CORPORATE ALIGNMENT &amp; ESG IMPACT
                </span>
                <h3 className="font-heading mt-1 text-xl sm:text-2xl lg:text-3xl font-black uppercase text-white">
                  Align Your Institution With Africa&apos;s Next Generation
                </h3>
                <p className="mt-2 max-w-[56ch] text-xs sm:text-sm text-white/75">
                  Explore plenary title sponsorships, 9 executive track ownership opportunities, and corporate delegate bursaries for 200 high-potential women leaders.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <Link
                  href={partnerUrl}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-3.5 font-heading text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#ed027e]/25 transition-transform hover:scale-[1.03] hover:bg-[#ff1a95]"
                >
                  <span>Become A Partner</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <a
                  href="/EmpowaHer-Partnership-Proposal-2026.pdf"
                  download="EmpowaHer-Partnership-Proposal-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#ed027e] hover:text-white"
                >
                  <Download className="h-4 w-4 text-[#ed027e]" />
                  <span>Download Prospectus (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
