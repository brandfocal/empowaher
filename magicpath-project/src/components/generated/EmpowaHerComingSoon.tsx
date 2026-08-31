import { ArrowUpRight, Instagram, Linkedin, MapPin, Phone, Twitter } from 'lucide-react';
export function SocialLinks({
  compact = false
}: {
  compact?: boolean;
}) {
  const linkClassName = compact ? 'group flex h-11 w-11 items-center justify-center rounded-full border border-[#1A0A10]/15 text-[#1A0A10]/60 transition-colors hover:border-[#C4547A] hover:bg-[#C4547A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4547A] md:h-8 md:w-8 min-[1133px]:h-9 min-[1133px]:w-9' : 'group flex h-11 w-11 items-center justify-center rounded-full border border-[#1A0A10]/15 text-[#1A0A10]/60 transition-colors hover:border-[#C4547A] hover:bg-[#C4547A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4547A] md:h-9 md:w-9 min-[1133px]:h-9 min-[1133px]:w-9';
  const iconClassName = compact ? 'h-4 w-4 md:h-3.5 md:w-3.5 min-[1133px]:h-[15px] min-[1133px]:w-[15px]' : 'h-4 w-4 min-[1133px]:h-4 min-[1133px]:w-4';
  return <nav aria-label="Social media links" className="flex items-center justify-center gap-2">
      <a href="#linkedin" aria-label="LinkedIn" className={linkClassName}><Linkedin className={iconClassName} strokeWidth={1.7} /></a>
      <a href="#instagram" aria-label="Instagram" className={linkClassName}><Instagram className={iconClassName} strokeWidth={1.7} /></a>
      <a href="#twitter" aria-label="Twitter / X" className={linkClassName}><Twitter className={iconClassName} strokeWidth={1.7} /></a>
    </nav>;
}
export function EmpowaHerComingSoon() {
  return <main className="min-h-screen w-full overflow-x-hidden bg-[#FAFAF8] font-sans text-[#1A0A10] selection:bg-[#C4547A] selection:text-white">
      <section id="top" className="relative isolate flex min-h-[620px] flex-col overflow-hidden bg-[#F5EFE6] px-5 pb-10 sm:px-6 md:min-h-[610px] md:px-8 md:pb-9 min-[1133px]:min-h-[690px] min-[1133px]:px-16 min-[1133px]:pb-10" style={{
      background: 'radial-gradient(circle at 50% 18%, #FDE8EF 0%, #F5EFE6 43%, #FAFAF8 100%)'
    }}>
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]">
          <filter id="empowaher-light-noise"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
          <rect width="100%" height="100%" filter="url(#empowaher-light-noise)" />
        </svg>
        <svg aria-hidden="true" className="pointer-events-none absolute -right-[66%] top-[10%] h-[500px] w-[500px] text-[#C4547A] sm:-right-[42%] sm:h-[650px] sm:w-[650px] md:-right-[28%] md:top-[7%] md:h-[700px] md:w-[700px] min-[1133px]:-right-[20%] min-[1133px]:h-[820px] min-[1133px]:w-[820px]">
          <circle cx="50%" cy="50%" r="49.8%" fill="none" stroke="currentColor" strokeOpacity="0.12" />
          <circle cx="50%" cy="50%" r="43.3%" fill="none" stroke="currentColor" strokeOpacity="0.12" />
          <circle cx="50%" cy="50%" r="35.8%" fill="currentColor" fillOpacity="0.035" />
        </svg>
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-px w-2/5 bg-gradient-to-r from-[#C4547A]/70 to-transparent" />

        <header className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col items-center justify-center gap-4 py-5 sm:py-6 md:flex-row md:justify-between md:gap-0 md:py-5 min-[1133px]:py-7">
          <a href="#top" className="flex min-h-11 items-center font-heading text-2xl font-bold tracking-[-0.02em] text-[#1A0A10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C4547A]">
            <span>Empowa</span><span className="text-[#C4547A]">Her</span><span className="ml-1 font-sans text-xs font-normal uppercase tracking-[0.12em] text-[#1A0A10]/45 tabular-nums">/ 01</span>
          </a>
          <SocialLinks compact />
        </header>

        <div className="relative z-10 m-auto flex w-full max-w-[860px] flex-col items-center px-0 py-10 text-center sm:py-12 md:py-8 min-[1133px]:py-0">
          <h1 className="font-heading text-[clamp(2.5rem,5vw_+_1rem,5rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] text-[#1A0A10]">Something powerful is coming</h1>
          <p className="mt-6 max-w-[60ch] text-lg font-normal leading-[1.72] tracking-normal text-[#1A0A10]/65">EmpowaHer is a platform dedicated to empowering women in engineering, technology and STEM across Africa and beyond.</p>
        </div>
      </section>

      <section className="border-y border-[#C4547A]/10 bg-white px-5 py-8 sm:px-6 md:px-8 min-[1133px]:px-16">
        <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[1.1fr_1fr_0.8fr]">
          <article className="w-full border-b border-[#C4547A]/10 pb-8 md:border-b-0 md:pb-0">
            <p className="mb-3 font-heading text-xs font-bold uppercase leading-6 tracking-[0.12em] text-[#C4547A] tabular-nums">01 — About</p>
            <h2 className="mb-3 font-heading text-xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#1A0A10]">Built for the bold.</h2>
            <p className="max-w-[350px] text-[0.9375rem] font-normal leading-[1.65] text-[#1A0A10]/60">EmpowaHer connects, equips, and elevates women in STEM through mentorship, events, resources and community.</p>
          </article>
          <article className="w-full border-b border-[#C4547A]/10 pb-8 md:border-b-0 md:pb-0">
            <p className="mb-3 font-heading text-xs font-bold uppercase leading-6 tracking-[0.12em] text-[#C4547A] tabular-nums">02 — Contact</p>
            <h2 className="mb-3 font-heading text-xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#1A0A10]">Start a conversation.</h2>
            <address className="not-italic text-[0.9375rem] font-normal leading-[1.65] text-[#1A0A10]/60">
              <a className="flex min-h-11 items-center transition-colors hover:text-[#C4547A] md:min-h-0" href="mailto:hello@empowaher.org"><span>hello@empowaher.org</span></a>
              <a className="flex min-h-11 items-center gap-2 transition-colors hover:text-[#C4547A] md:min-h-0" href="tel:+27110000000"><Phone size={13} /><span className="tabular-nums">+27 (0) 11 000 0000</span></a>
              <span className="flex min-h-11 items-center gap-2 md:min-h-0"><MapPin size={13} /><span>Johannesburg, South Africa</span></span>
            </address>
          </article>
          <article className="w-full">
            <p className="mb-3 font-heading text-xs font-bold uppercase leading-6 tracking-[0.12em] text-[#C4547A] tabular-nums">03 — Follow us</p>
            <h2 className="mb-3 font-heading text-xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#1A0A10]">Stay connected.</h2>
            <p className="mb-3 text-[0.9375rem] font-normal leading-[1.65] text-[#1A0A10]/60">Meet the women engineering what comes next.</p>
            <SocialLinks compact />
          </article>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-center gap-3 bg-[#F0EBE3] px-5 py-6 text-center text-[0.8125rem] font-normal uppercase leading-6 tracking-[0.12em] text-[#1A0A10]/45 sm:px-6 md:flex-row md:flex-nowrap md:px-8 md:py-5 md:text-center min-[1133px]:justify-between min-[1133px]:px-16 min-[1133px]:py-5 min-[1133px]:text-left">
        <span className="tabular-nums">© 2025 EmpowaHer. All rights reserved.</span>
        <span className="flex flex-wrap items-center justify-center gap-2 md:flex-nowrap"><span className="h-px w-5 bg-[#C4547A]" /><span>Empowering women. Engineering the future.</span><ArrowUpRight size={13} className="text-[#C4547A]" /></span>
      </footer>
    </main>;
}