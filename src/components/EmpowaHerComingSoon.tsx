import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

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
    ? "group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F5EFE6]/75 transition-all duration-300 hover:border-[#C4547A] hover:bg-[#C4547A] hover:text-white hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4547A]"
    : "group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F5EFE6]/75 transition-all duration-300 hover:border-[#C4547A] hover:bg-[#C4547A] hover:text-white hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4547A]";
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

export function EmpowaHerComingSoon() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#0A0A0A] font-sans text-[#F5EFE6] selection:bg-[#C4547A] selection:text-white">
      <section className="relative isolate flex min-h-[640px] flex-col overflow-hidden bg-[#000000] px-5 pb-12 sm:px-6 md:min-h-[620px] md:px-8 md:pb-12 min-[1133px]:min-h-[700px] min-[1133px]:px-16 min-[1133px]:pb-14">
        {/* Glowing gradients & background effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,#3a0a1e_0%,#1a0510_33%,#000000_78%)] md:bg-[radial-gradient(circle_at_50%_14%,#3a0a1e_0%,#1a0510_33%,#000000_78%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[5%] top-[19%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(196,84,122,0.18)_0%,rgba(196,84,122,0.08)_34%,rgba(196,84,122,0)_70%)] blur-3xl sm:h-[360px] sm:w-[360px] md:left-[9%] md:top-[17%] md:h-[380px] md:w-[380px] min-[1133px]:h-[420px] min-[1133px]:w-[420px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-34%] top-[12%] h-[330px] w-[330px] rounded-full bg-[radial-gradient(circle,rgba(196,84,122,0.16)_0%,rgba(58,10,30,0.14)_38%,rgba(0,0,0,0)_72%)] blur-3xl sm:right-[-18%] sm:h-[460px] sm:w-[460px] md:right-[-10%] md:top-[10%] md:h-[500px] md:w-[500px] min-[1133px]:right-[-8%] min-[1133px]:h-[560px] min-[1133px]:w-[560px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-20%] left-[16%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(196,84,122,0.14)_0%,rgba(26,5,16,0.13)_42%,rgba(0,0,0,0)_74%)] blur-3xl sm:h-[430px] sm:w-[430px] md:left-[34%] md:h-[460px] md:w-[460px] min-[1133px]:bottom-[-24%] min-[1133px]:h-[520px] min-[1133px]:w-[520px]"
        />

        {/* Noise overlay */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12] mix-blend-soft-light"
        >
          <filter id="empowaher-hero-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#empowaher-hero-noise)" />
        </svg>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.5)_42%,rgba(0,0,0,0.82)_100%)] min-[1133px]:bg-[linear-gradient(112deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.42)_42%,rgba(0,0,0,0.78)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#000000] via-[#000000]/65 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[66%] top-[10%] h-[500px] w-[500px] rounded-full border border-[#C4547A]/10 sm:-right-[42%] sm:h-[650px] sm:w-[650px] md:-right-[28%] md:top-[7%] md:h-[700px] md:w-[700px] min-[1133px]:-right-[20%] min-[1133px]:h-[820px] min-[1133px]:w-[820px]"
        >
          <div className="absolute inset-[13%] rounded-full border border-[#C4547A]/10" />
          <div className="absolute inset-[28%] rounded-full bg-[#C4547A]/[0.035] blur-3xl" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-px w-2/5 bg-gradient-to-r from-[#C4547A]/70 to-transparent"
        />

        {/* Header with Website Logo */}
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

        {/* Hero Section */}
        <div
          id="top"
          className="relative z-10 m-auto flex w-full max-w-[900px] flex-col items-center px-0 py-12 text-center sm:py-16 md:py-12 min-[1133px]:py-8"
        >
          <h1 className="font-heading text-[clamp(2.5rem,5.5vw_+_1rem,5.25rem)] font-extrabold uppercase leading-[1.04] tracking-[-0.02em] text-[#F5EFE6]">
            Something powerful is coming
          </h1>
          <p className="mt-6 max-w-[62ch] text-base leading-[1.75] tracking-normal text-[#F5EFE6]/80 sm:text-lg">
            EmpowaHer is a premier platform dedicated to empowering, connecting, and elevating women in engineering, technology, and STEM across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Information Grid: About, Contact, Follow Us */}
      <section className="border-y border-white/[0.08] bg-[#121212] px-5 py-12 sm:px-6 md:px-8 min-[1133px]:px-16 min-[1133px]:py-16">
        <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-3">
          {/* 01 — About */}
          <article className="flex flex-col border-b border-white/[0.08] pb-10 md:border-b-0 md:border-r md:border-white/[0.08] md:pb-0 md:pr-8">
            <p className="mb-3 font-heading text-xs font-bold uppercase leading-6 tracking-[0.14em] text-[#C4547A] tabular-nums">
              01 — About
            </p>
            <h2 className="mb-3 font-heading text-2xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#F5EFE6]">
              Built for the bold.
            </h2>
            <p className="text-[0.9375rem] font-normal leading-[1.7] text-[#F5EFE6]/75">
              EmpowaHer connects, equips, and elevates women in STEM through dedicated mentorship programs, high-impact events, leadership resources, and a thriving pan-African community.
            </p>
          </article>

          {/* 02 — Contact */}
          <article className="flex flex-col border-b border-white/[0.08] pb-10 md:border-b-0 md:border-r md:border-white/[0.08] md:pb-0 md:px-4">
            <p className="mb-3 font-heading text-xs font-bold uppercase leading-6 tracking-[0.14em] text-[#C4547A] tabular-nums">
              02 — Contact
            </p>
            <h2 className="mb-3 font-heading text-2xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#F5EFE6]">
              Start a conversation.
            </h2>

            <div className="mb-4">
              <p className="font-semibold text-[#F5EFE6] text-[0.95rem]">Doric Sithole</p>
              <p className="text-xs text-[#C4547A] uppercase tracking-wider font-medium">Managing Executive of EmpowaHer</p>
            </div>

            <address className="space-y-2.5 not-italic text-[0.9rem] font-normal leading-[1.6] text-[#F5EFE6]/75">
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
              <div className="flex items-start gap-2 pt-1 text-[#F5EFE6]/70">
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
            <h2 className="mb-3 font-heading text-2xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#F5EFE6]">
              Stay connected.
            </h2>
            <p className="mb-5 text-[0.9375rem] font-normal leading-[1.7] text-[#F5EFE6]/75">
              Follow EmpowaWorx and meet the women engineering what comes next.
            </p>
            <div className="flex justify-start">
              <SocialLinks />
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-4 bg-[#0A0A0A] px-5 py-7 text-center text-[0.8125rem] font-normal uppercase leading-6 tracking-[0.12em] text-[#F5EFE6]/50 sm:px-6 md:flex-row md:px-8 min-[1133px]:px-16 min-[1133px]:py-6">
        <span className="tabular-nums">© {new Date().getFullYear()} EmpowaHer • An EmpowaWorx Initiative.</span>
        <span className="flex flex-wrap items-center justify-center gap-2 text-[#F5EFE6]/50">
          <span className="h-px w-5 bg-[#C4547A]" />
          <span>Empowering women. Engineering the future.</span>
          <ArrowUpRight size={13} className="text-[#C4547A]" />
        </span>
      </footer>
    </main>
  );
}
