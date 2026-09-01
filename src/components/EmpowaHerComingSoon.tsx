import Image from "next/image";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Download,
  FileText,
  Globe2,
  Mail,
  MapPin,
  Network,
  Phone,
  Target,
  Users2,
} from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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
      strokeWidth="1.8"
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
      strokeWidth="1.8"
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
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  const linkClassName = compact
    ? "group flex h-10 w-10 items-center justify-center rounded-full border border-[#1A0A10]/15 text-[#1A0A10]/70 transition-all duration-300 hover:border-[#C4547A] hover:bg-[#C4547A] hover:text-white hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4547A]"
    : "group flex h-10 w-10 items-center justify-center rounded-full border border-[#1A0A10]/15 text-[#1A0A10]/70 transition-all duration-300 hover:border-[#C4547A] hover:bg-[#C4547A] hover:text-white hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4547A]";
  const iconClassName = "h-4 w-4 transition-transform duration-300 group-hover:scale-110";

  return (
    <nav aria-label="Social media links" className="flex flex-wrap items-center justify-center gap-2.5">
      <a
        href="https://www.linkedin.com/showcase/empowawomen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={linkClassName}
      >
        <LinkedinIcon className={iconClassName} />
      </a>
      <a
        href="https://www.instagram.com/empowawomen/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={linkClassName}
      >
        <InstagramIcon className={iconClassName} />
      </a>
      <a
        href="https://x.com/EmpowaWomen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (formerly Twitter)"
        className={linkClassName}
      >
        <XIcon className={iconClassName} />
      </a>
      <a
        href="https://www.facebook.com/people/EmpowaWomen/100093644768130/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={linkClassName}
      >
        <FacebookIcon className={iconClassName} />
      </a>
      <a
        href="https://www.youtube.com/@EmpowaWomen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className={linkClassName}
      >
        <YoutubeIcon className={iconClassName} />
      </a>
    </nav>
  );
}

const PROGRAMME_DETAIL_PDF_PATH = "/Programme-detail.pdf";
const PROSPECTUS_PDF_PATH = "/EmpowaHer%E2%84%A2-Leadership-Programme-2026-Partnership-Proposal-&-Prospectu.pdf";

const PROGRAMME_DETAILS = [
  {
    label: "Dates",
    value: "29–31 October 2026",
    icon: Calendar,
  },
  {
    label: "Venue",
    value: "EmpowaWorx House, Randburg, Johannesburg",
    icon: MapPin,
  },
  {
    label: "Format",
    value: "Three-day, multi-track leadership and opportunity experience",
    icon: Target,
  },
  {
    label: "Audience",
    value:
      "Emerging women leaders, graduates, professionals, entrepreneurs, executives and aspiring board members aged 18–35.",
    icon: Users2,
  },
  {
    label: "Delegate model",
    value: "Selected and vetted through a curated nomination process involving 200 leading organisations.",
    icon: CheckCircle2,
  },
  {
    label: "Nominating network",
    value:
      "Leading brands and organisations across industries, communities, academia, multinationals, foundations and civic organisations.",
    icon: Network,
  },
  {
    label: "Core outcome",
    value:
      "A high-potential leadership pipeline connected to capability, capital, careers, global exposure and board opportunity.",
    icon: Globe2,
  },
];

export function EmpowaHerComingSoon() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#FAFAF8] font-sans text-[#1A0A10] selection:bg-[#C4547A] selection:text-white">
      {/* Hero Section */}
      <section
        id="top"
        className="relative isolate flex min-h-[640px] flex-col overflow-hidden bg-[#F5EFE6] px-4 pb-14 sm:px-6 md:min-h-[660px] md:px-8 md:pb-16 min-[1133px]:min-h-[720px] min-[1133px]:px-16 min-[1133px]:pb-20"
        style={{
          background: "radial-gradient(circle at 50% 16%, #FDE8EF 0%, #F5EFE6 42%, #FAFAF8 100%)",
        }}
      >
        {/* Subtle noise texture */}
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]">
          <filter id="empowaher-light-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#empowaher-light-noise)" />
        </svg>

        {/* Ambient background ring decorative SVG */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -right-[66%] top-[8%] h-[400px] w-[400px] text-[#C4547A] sm:-right-[42%] sm:h-[650px] sm:w-[650px] md:-right-[26%] md:top-[6%] md:h-[700px] md:w-[700px] min-[1133px]:-right-[18%] min-[1133px]:h-[840px] min-[1133px]:w-[840px]"
        >
          <circle cx="50%" cy="50%" r="49.8%" fill="none" stroke="currentColor" strokeOpacity="0.12" />
          <circle cx="50%" cy="50%" r="43.3%" fill="none" stroke="currentColor" strokeOpacity="0.12" />
          <circle cx="50%" cy="50%" r="35.8%" fill="currentColor" fillOpacity="0.035" />
        </svg>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-px w-2/5 bg-gradient-to-r from-[#C4547A]/70 to-transparent"
        />

        {/* Header with Logo */}
        <header className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between gap-4 py-5 sm:flex-row sm:gap-5 md:py-7">
          <a
            href="#top"
            aria-label="EmpowaHer Home"
            className="flex items-center transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C4547A]"
          >
            <Image
              src="/empowaher-logo.png"
              alt="EmpowaHer Logo"
              width={220}
              height={60}
              className="h-9 w-auto object-contain sm:h-11 md:h-12"
              priority
            />
          </a>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#programme-detail"
              className="rounded-full border border-[#1A0A10]/15 bg-white/70 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#1A0A10]/80 transition-colors hover:border-[#C4547A] hover:text-[#C4547A] sm:text-xs"
            >
              Programme Detail
            </a>
            <SocialLinks compact />
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 m-auto flex w-full max-w-[1040px] flex-col items-center px-0 py-6 text-center sm:py-10 md:py-8">
          {/* Coming Soon / Under Construction Badge */}
          <div className="mb-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#C4547A]/30 bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-sm sm:gap-2.5 sm:px-5 sm:py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C4547A] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C4547A]" />
            </span>
            <span className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#C4547A] sm:text-xs sm:tracking-[0.2em]">
              Official Website Under Construction
            </span>
            <span className="text-[#C4547A]/40">•</span>
            <span className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[#1A0A10]/70 sm:text-xs sm:tracking-[0.16em]">
              Launching Soon
            </span>
          </div>

          {/* Summit & Programme Overline */}
          <div className="mb-3.5 flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1A0A10]/65 sm:text-sm sm:tracking-[0.2em]">
            <span className="text-[#C4547A]">EmpowaHer™</span>
            <span>LEADERSHIP PROGRAMME</span>
            <span className="rounded bg-[#C4547A]/15 px-2 py-0.5 text-[0.7rem] font-extrabold text-[#C4547A]">
              Summit 2026
            </span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="font-heading text-[clamp(1.85rem,4.2vw_+_0.5rem,3.85rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.02em] text-[#1A0A10]">
            A Three-Day Leadership Experience for Africa’s Next Generation of Women Leaders (18–35)
          </h1>

          {/* Hero Subtitle */}
          <p className="mt-5 max-w-[74ch] text-[0.9375rem] leading-[1.75] tracking-normal text-[#1A0A10]/75 sm:mt-6 sm:text-base sm:leading-[1.8] md:text-lg">
            EmpowaHer™ Leadership Summit – The Future Is Female™ is a three-day leadership experience designed to prepare Africa’s next generation of women leaders to compete, lead and succeed across business, government, entrepreneurship, civil society and the boardroom.
          </p>

          {/* CTA Buttons: Programme Details & Prospectus */}
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href={PROGRAMME_DETAIL_PDF_PATH}
              download="EmpowaHer-Programme-Detail.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#C4547A] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_6px_22px_rgba(196,84,122,0.32)] transition-all duration-300 hover:bg-[#b04369] hover:shadow-[0_8px_28px_rgba(196,84,122,0.48)] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4547A] sm:w-auto sm:px-7 sm:text-sm"
            >
              <FileText size={17} className="transition-transform duration-300 group-hover:scale-110" />
              <span>Download Programme (PDF)</span>
              <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            <a
              href={PROSPECTUS_PDF_PATH}
              download="EmpowaHer-Leadership-Programme-2026-Prospectus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-3 rounded-full border border-[#1A0A10]/20 bg-white/90 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#1A0A10] shadow-sm transition-all duration-300 hover:border-[#C4547A] hover:bg-white hover:text-[#C4547A] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4547A] sm:w-auto sm:px-7 sm:text-sm"
            >
              <FileText size={17} className="text-[#C4547A] transition-transform duration-300 group-hover:scale-110" />
              <span>Download Prospectus</span>
              <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Programme Detail Executive Table Section - PURE WHITE BACKGROUND */}
      <section
        id="programme-detail"
        className="scroll-mt-8 border-t border-[#C4547A]/15 bg-[#FFFFFF] px-4 py-14 sm:px-6 md:px-8 min-[1133px]:px-16 min-[1133px]:py-20"
      >
        <div className="mx-auto max-w-[1100px]">
          {/* Section Header */}
          <div className="flex flex-col items-start justify-between gap-5 border-b border-[#1A0A10]/10 pb-6 md:flex-row md:items-end">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C4547A]">
                <span>2026 Summit Overview</span>
              </div>
              <h2 className="font-heading text-2xl font-extrabold uppercase tracking-[-0.02em] text-[#1A0A10] sm:text-3xl md:text-4xl">
                Programme Detail
              </h2>
              <p className="mt-1 text-xs text-[#1A0A10]/70 sm:text-sm">
                Official structure and framework of the EmpowaHer™ Leadership Summit 2026.
              </p>
            </div>

            {/* Direct Download Button */}
            <a
              href={PROGRAMME_DETAIL_PDF_PATH}
              download="EmpowaHer-Programme-Detail.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1A0A10] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#C4547A] hover:shadow-md hover:shadow-[#C4547A]/20 sm:w-auto"
            >
              <FileText size={15} />
              <span>Download Programme (PDF)</span>
              <Download size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Programme Detail Grid / Table on Pure White Background */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#1A0A10]/10 bg-[#FFFFFF] shadow-sm">
            <div className="divide-y divide-[#1A0A10]/8">
              {PROGRAMME_DETAILS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`grid gap-2 p-4 transition-colors duration-200 hover:bg-[#FAF8F5] sm:grid-cols-[210px_1fr] sm:items-start sm:gap-6 sm:p-6 ${
                      index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#FAF8F6]/50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#C4547A]/10 text-[#C4547A]">
                        <IconComponent size={15} />
                      </span>
                      <span className="font-heading text-sm font-bold uppercase tracking-[0.08em] text-[#1A0A10] sm:text-base">
                        {item.label}
                      </span>
                    </div>

                    <p className="text-[0.875rem] leading-relaxed text-[#1A0A10]/85 sm:text-[0.9375rem]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Information Grid: About, Contact, Follow us */}
      <section className="border-t border-[#C4547A]/15 bg-[#FAFAF8] px-4 py-12 sm:px-6 md:px-8 min-[1133px]:px-16 min-[1133px]:py-16">
        <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3 md:gap-10">
          {/* 01 — About & Programme */}
          <article className="flex flex-col justify-between border-b border-[#C4547A]/10 pb-8 md:border-b-0 md:border-r md:border-[#C4547A]/10 md:pb-0 md:pr-8">
            <div>
              <p className="mb-2 font-heading text-xs font-bold uppercase leading-6 tracking-[0.14em] text-[#C4547A] tabular-nums">
                01 — About
              </p>
              <h2 className="mb-3 font-heading text-2xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#1A0A10]">
                THE FUTURE IS FEMALE™
              </h2>
              <p className="text-[0.9375rem] font-normal leading-[1.7] text-[#1A0A10]/70">
                EmpowaHer™ equips and elevates young African women leaders with executive mentorship, actionable masterclasses, and strategic networks to compete and lead across business, government, and the boardroom.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-5">
              <a
                href={PROGRAMME_DETAIL_PDF_PATH}
                download="EmpowaHer-Programme-Detail.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#C4547A] transition-colors hover:text-[#1A0A10]"
              >
                <span>Download Programme (PDF)</span>
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={PROSPECTUS_PDF_PATH}
                download="EmpowaHer-Leadership-Programme-2026-Prospectus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#1A0A10]/65 transition-colors hover:text-[#C4547A]"
              >
                <span>Download Prospectus (PDF)</span>
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>

          {/* 02 — Contact */}
          <article className="flex flex-col border-b border-[#C4547A]/10 pb-8 md:border-b-0 md:border-r md:border-[#C4547A]/10 md:pb-0 md:px-4">
            <p className="mb-2 font-heading text-xs font-bold uppercase leading-6 tracking-[0.14em] text-[#C4547A] tabular-nums">
              02 — Contact
            </p>
            <h2 className="mb-3 font-heading text-2xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#1A0A10]">
              Start a conversation.
            </h2>

            <div className="mb-4">
              <p className="font-semibold text-[#1A0A10] text-[0.95rem]">Doric Sithole</p>
              <p className="text-xs text-[#C4547A] uppercase tracking-wider font-medium">Managing Executive of EmpowaHer</p>
            </div>

            <address className="space-y-2.5 not-italic text-[0.9rem] font-normal leading-[1.6] text-[#1A0A10]/75">
              <div>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#C4547A]"
                  href="mailto:doric@empowaworx.co.za"
                >
                  <Mail size={14} className="text-[#C4547A] shrink-0" />
                  <span>doric@empowaworx.co.za</span>
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#C4547A]"
                  href="tel:+27786489522"
                >
                  <Phone size={14} className="text-[#C4547A] shrink-0" />
                  <span className="tabular-nums">+27 (0) 78 648 9522</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#C4547A]"
                  href="tel:+27114827256"
                >
                  <Phone size={14} className="text-[#C4547A] shrink-0" />
                  <span className="tabular-nums">+27 (0) 11 482 7256</span>
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[#1A0A10]/70">
                <MapPin size={15} className="text-[#C4547A] shrink-0 mt-0.5" />
                <span>EmpowaWorx House, 364 Pine Avenue, Ferndale, Randburg 2194</span>
              </div>
            </address>
          </article>

          {/* 03 — Follow us */}
          <article className="flex flex-col md:pl-4">
            <p className="mb-2 font-heading text-xs font-bold uppercase leading-6 tracking-[0.14em] text-[#C4547A] tabular-nums">
              03 — Follow us
            </p>
            <h2 className="mb-3 font-heading text-2xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#1A0A10]">
              Stay connected.
            </h2>
            <p className="mb-5 text-[0.9375rem] font-normal leading-[1.7] text-[#1A0A10]/70">
              Follow EmpowaWomen and meet the women engineering what comes next.
            </p>
            <div className="flex justify-start">
              <SocialLinks />
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-4 bg-[#F0EBE3] px-4 py-6 text-center text-[0.8125rem] font-normal uppercase leading-6 tracking-[0.12em] text-[#1A0A10]/55 sm:px-6 md:flex-row md:px-8 min-[1133px]:px-16 min-[1133px]:py-6">
        <span className="tabular-nums">© {new Date().getFullYear()} EmpowaHer • An EmpowaWorx Initiative • Official Website Launching Soon.</span>
        <span className="flex flex-wrap items-center justify-center gap-2 text-[#1A0A10]/60">
          <span className="h-px w-5 bg-[#C4547A]" />
          <span>Empowering women. Engineering the future.</span>
          <ArrowUpRight size={13} className="text-[#C4547A]" />
        </span>
      </footer>
    </main>
  );
}
