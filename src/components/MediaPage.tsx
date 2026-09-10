"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  FileText,
  Mail,
  Play,
  Share2,
  Tv,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PRESS_RELEASE_PDF =
  "/media%20release/MEDIA%20RELEASE%20-%20EmpowaHer%20Opens%20Nominations%20for%20200%20of%20Africa%E2%80%99s%20Next%20Generation%20of%20Women%20Leaders.pdf";

export function MediaPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#0A0D11] font-sans text-[#3f3f3f] selection:bg-[#ed027e] selection:text-white">
      {/* Navigation Header */}
      <Header currentPath="/media" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10 bg-gradient-to-b from-[#1C2128] to-[#0A0D11] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
              <Tv className="h-3 w-3" />
              <span>Official Media &amp; Press Hub</span>
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="font-heading text-[clamp(2.5rem,5.5vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-white">
                <span>The Architecture</span>
                <br />
                <span className="text-[#ed027e]">Of Impact.</span>
              </h1>
              <p className="mt-6 max-w-[46ch] font-sans text-base leading-relaxed text-white/75 sm:text-lg">
                Broadcast-calibre productions, official press announcements, and leadership highlight reels documenting Africa’s premier women empowerment platform.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <a
                href={PRESS_RELEASE_PDF}
                download="EmpowaHer-Media-Release-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
              >
                <Download className="h-4 w-4" />
                <span>Download Media Release (PDF)</span>
              </a>

              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-[#ed027e] hover:text-white"
              >
                <span>View Photographic Gallery</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video: EmpowaWomen™ Highlight Reel */}
      <section id="highlight-reel" className="py-16 lg:py-24 bg-[#0A0D11] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="mb-8 border-b border-white/10 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                  <span>FEATURED BROADCAST REEL</span>
                </p>
                <h2 className="font-heading mt-2 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] text-white">
                  <span>EmpowaWomen™ Official Highlight Reel</span>
                </h2>
              </div>
              <span className="hidden sm:inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-mono font-medium text-white/60">
                YouTube • 1080p HD
              </span>
            </div>
          </div>

          {/* Video Player Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl shadow-black/80">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/g2T0dzTqQZk?rel=0&modestbranding=1"
                title="EmpowaWomen™ Official Highlight Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#151921] border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
                  Demonstrating Scale, Quality &amp; Leadership Impact
                </h3>
                <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-white/70">
                  Witness the production excellence, high-level convening power, and electric atmosphere of our signature events that bring together Africa’s emerging women leaders, cabinet ministers, and business luminaries.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <a
                  href="https://www.youtube.com/watch?v=g2T0dzTqQZk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#ed027e] hover:text-[#ed027e]"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Media Release & Press Materials */}
      <section className="py-16 lg:py-24 bg-[#11161F] text-white border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
            {/* Press Release Text Summary */}
            <div>
              <p className="text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <span>PRESS RELEASE • 8 SEPTEMBER 2026</span>
              </p>
              <h2 className="font-heading mt-3 text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-[-0.02em] text-white">
                <span>EmpowaHer Opens Nominations for 200 of Africa’s Next Generation of Women Leaders</span>
              </h2>

              <div className="mt-6 space-y-4 font-sans text-sm sm:text-base leading-relaxed text-white/80 border-l-2 border-[#ed027e] pl-5">
                <p>
                  <strong>JOHANNESBURG, SOUTH AFRICA</strong> — EmpowaWorx today announced the official opening of nominations for EmpowaHer™, an executive three-day leadership development and advancement experience taking place <strong>29–31 October 2026</strong> at EmpowaWorx House in Ferndale, Randburg.
                </p>
                <p>
                  Over three intensive days, 200 selected young women aged 18–35 will engage in nine high-impact executive leadership tracks, connect directly with corporate chief executives and government ministers, and participate in peer-to-peer mentorship designed to accelerate their trajectory into boardrooms and high-growth enterprises.
                </p>
                <p>
                  “Africa’s future will be written by the young women we equip and embolden today,” says Simphiwe Masiza, Founder and Executive Producer of EmpowaWorx. “EmpowaHer is not a conference—it is a platform architecture designed for measurable socio-economic elevation.”
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={PRESS_RELEASE_PDF}
                  download="EmpowaHer-Media-Release-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Full Press Release (PDF)</span>
                </a>

                <Link
                  href="/press-release"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70 hover:text-[#ed027e] underline underline-offset-4"
                >
                  <span>Read Full Text Online</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Media & Press Enquiries Card */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-[#ed027e]">
                  <Mail className="h-5 w-5" />
                  <span className="text-[0.625rem] font-black uppercase tracking-[0.2em]">
                    Media &amp; Press Enquiries
                  </span>
                </div>
                <h3 className="font-heading mt-4 text-xl font-bold uppercase text-white">
                  Journalist &amp; Broadcaster Desk
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  For interview requests with Founder Simphiwe Masiza, executive spokespersons, press accreditation, or high-res broadcast assets:
                </p>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-4 text-sm">
                  <p className="text-white/60 text-xs uppercase tracking-wider font-semibold">
                    Direct Contact
                  </p>
                  <a
                    href="mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Media%20Request"
                    className="block font-medium text-white hover:text-[#ed027e] transition-colors"
                  >
                    doric@empowaworx.co.za
                  </a>
                  <a
                    href="mailto:info@empowaworx.co.za?subject=EmpowaHer%20Press%20Enquiry"
                    className="block font-medium text-white/80 hover:text-[#ed027e] transition-colors"
                  >
                    info@empowaworx.co.za
                  </a>
                  <p className="pt-2 text-xs text-white/50">
                    Office Landline: +27 (0) 11 482 7256
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#ed027e]/10 p-6 border-l-4 border-l-[#ed027e]">
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                  Media Kit &amp; Brand Guidelines
                </h4>
                <p className="mt-1 text-xs text-white/70 leading-relaxed">
                  High-resolution brand logos, approved leadership headshots, and event media guides available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
