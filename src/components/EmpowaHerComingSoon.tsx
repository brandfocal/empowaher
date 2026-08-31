import Image from "next/image";
import { ArrowUpRight, Download, FileText, Mail, MapPin, Phone } from "lucide-react";

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
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
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

export function SocialLinks({
  compact = false,
}: {
  compact?: boolean;
}) {
  const linkClassName = compact
    ? "group flex h-10 w-10 items-center justify-center rounded-full border border-[#1A0A10]/15 text-[#1A0A10]/70 transition-all duration-300 hover:border-[#C4547A] hover:bg-[#C4547A] hover:text-white hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4547A]"
    : "group flex h-10 w-10 items-center justify-center rounded-full border border-[#1A0A10]/15 text-[#1A0A10]/70 transition-all duration-300 hover:border-[#C4547A] hover:bg-[#C4547A] hover:text-white hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4547A]";
  const iconClassName = "h-4 w-4 transition-transform duration-300 group-hover:scale-110";

  return (
    <nav aria-label="Social media links" className="flex flex-wrap items-center justify-center gap-2.5">
      <a
        href="https://www.linkedin.com/in/empowaworx-pty-ltd-948035185/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={linkClassName}
      >
        <LinkedinIcon className={iconClassName} />
      </a>
      <a
        href="https://www.instagram.com/empowaworx"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={linkClassName}
      >
        <InstagramIcon className={iconClassName} />
      </a>
      <a
        href="https://x.com/empowaworxevent"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (formerly Twitter)"
        className={linkClassName}
      >
        <XIcon className={iconClassName} />
      </a>
      <a
        href="https://web.facebook.com/Empowaworx"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={linkClassName}
      >
        <FacebookIcon className={iconClassName} />
      </a>
      <a
        href="https://www.youtube.com/@empowaworx6407"
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

const PROSPECTUS_PDF_PATH = "/EmpowaHer%E2%84%A2-Leadership-Programme-2026-Partnership-Proposal-&-Prospectu.pdf";

export function EmpowaHerComingSoon() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#FAFAF8] font-sans text-[#1A0A10] selection:bg-[#C4547A] selection:text-white">
      {/* Hero Section */}
      <section
        id="top"
        className="relative isolate flex min-h-[660px] flex-col overflow-hidden bg-[#F5EFE6] px-5 pb-12 sm:px-6 md:min-h-[640px] md:px-8 md:pb-12 min-[1133px]:min-h-[720px] min-[1133px]:px-16 min-[1133px]:pb-16"
        style={{
          background: "radial-gradient(circle at 50% 18%, #FDE8EF 0%, #F5EFE6 43%, #FAFAF8 100%)",
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
          className="pointer-events-none absolute -right-[66%] top-[10%] h-[500px] w-[500px] text-[#C4547A] sm:-right-[42%] sm:h-[650px] sm:w-[650px] md:-right-[28%] md:top-[7%] md:h-[700px] md:w-[700px] min-[1133px]:-right-[20%] min-[1133px]:h-[820px] min-[1133px]:w-[820px]"
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
        <header className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between gap-5 py-6 sm:flex-row md:py-7">
          <a
            href="#top"
            aria-label="EmpowaHer Home"
            className="flex items-center transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C4547A]"
          >
            <Image
              src="/empowaher-logo.png"
              alt="EmpowaHer Logo"
              width={200}
              height={56}
              className="h-10 w-auto object-contain sm:h-11"
              priority
            />
          </a>
          <SocialLinks compact />
        </header>

        {/* Hero Title, Pitch & Download CTA */}
        <div className="relative z-10 m-auto flex w-full max-w-[900px] flex-col items-center px-0 py-10 text-center sm:py-14 md:py-10 min-[1133px]:py-8">
          <h1 className="font-heading text-[clamp(2.5rem,5.5vw_+_1rem,5.25rem)] font-extrabold uppercase leading-[1.04] tracking-[-0.02em] text-[#1A0A10]">
            Something powerful is coming
          </h1>
          <p className="mt-6 max-w-[62ch] text-base leading-[1.75] tracking-normal text-[#1A0A10]/70 sm:text-lg">
            EmpowaHer is a premier platform dedicated to empowering, connecting, and elevating women in engineering, technology, and STEM across Africa and beyond.
          </p>

          {/* Download Prospectus CTA Button */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PROSPECTUS_PDF_PATH}
              download="EmpowaHer-Leadership-Programme-2026-Prospectus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C4547A] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_6px_22px_rgba(196,84,122,0.32)] transition-all duration-300 hover:bg-[#b04369] hover:shadow-[0_8px_28px_rgba(196,84,122,0.48)] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4547A]"
            >
              <FileText size={17} className="transition-transform duration-300 group-hover:scale-110" />
              <span>Download Prospectus</span>
              <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Information Grid: About, Contact, Follow us */}
      <section className="border-y border-[#C4547A]/15 bg-white px-5 py-12 sm:px-6 md:px-8 min-[1133px]:px-16 min-[1133px]:py-16">
        <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-3">
          {/* 01 — About */}
          <article className="flex flex-col justify-between border-b border-[#C4547A]/10 pb-10 md:border-b-0 md:border-r md:border-[#C4547A]/10 md:pb-0 md:pr-8">
            <div>
              <p className="mb-3 font-heading text-xs font-bold uppercase leading-6 tracking-[0.14em] text-[#C4547A] tabular-nums">
                01 — About
              </p>
              <h2 className="mb-3 font-heading text-2xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#1A0A10]">
                Built for the bold.
              </h2>
              <p className="text-[0.9375rem] font-normal leading-[1.7] text-[#1A0A10]/70">
                EmpowaHer connects, equips, and elevates women in STEM through dedicated mentorship programs, high-impact events, leadership resources, and a thriving pan-African community.
              </p>
            </div>
            <div className="pt-5">
              <a
                href={PROSPECTUS_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#C4547A] transition-colors hover:text-[#1A0A10]"
              >
                <span>View 2026 Prospectus (PDF)</span>
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>

          {/* 02 — Contact */}
          <article className="flex flex-col border-b border-[#C4547A]/10 pb-10 md:border-b-0 md:border-r md:border-[#C4547A]/10 md:pb-0 md:px-4">
            <p className="mb-3 font-heading text-xs font-bold uppercase leading-6 tracking-[0.14em] text-[#C4547A] tabular-nums">
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
            <p className="mb-3 font-heading text-xs font-bold uppercase leading-6 tracking-[0.14em] text-[#C4547A] tabular-nums">
              03 — Follow us
            </p>
            <h2 className="mb-3 font-heading text-2xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#1A0A10]">
              Stay connected.
            </h2>
            <p className="mb-5 text-[0.9375rem] font-normal leading-[1.7] text-[#1A0A10]/70">
              Follow EmpowaWorx and meet the women engineering what comes next.
            </p>
            <div className="flex justify-start">
              <SocialLinks />
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-4 bg-[#F0EBE3] px-5 py-7 text-center text-[0.8125rem] font-normal uppercase leading-6 tracking-[0.12em] text-[#1A0A10]/55 sm:px-6 md:flex-row md:px-8 min-[1133px]:px-16 min-[1133px]:py-6">
        <span className="tabular-nums">© {new Date().getFullYear()} EmpowaHer • An EmpowaWorx Initiative.</span>
        <span className="flex flex-wrap items-center justify-center gap-2 text-[#1A0A10]/60">
          <span className="h-px w-5 bg-[#C4547A]" />
          <span>Empowering women. Engineering the future.</span>
          <ArrowUpRight size={13} className="text-[#C4547A]" />
        </span>
      </footer>
    </main>
  );
}
