"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Headphones,
  Mail,
  Mic,
  Play,
  Radio,
  Share2,
  Tv,
  Volume2,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LeadershipVideos } from "./LeadershipVideos";

const PRESS_RELEASE_PDF =
  "/media%20release/MEDIA%20RELEASE%20-%20EmpowaHer%20Opens%20Nominations%20for%20200%20of%20Africa%E2%80%99s%20Next%20Generation%20of%20Women%20Leaders.pdf";

export function MediaPage() {
  const [isPlayingReel, setIsPlayingReel] = useState(false);
  const [isPlayingTrendz, setIsPlayingTrendz] = useState(false);

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
                Broadcast-calibre productions, national television &amp; radio interviews with eNCA, SABC News Trendz Live, Metro FM, Radio 2000, and Lesedi FM, official press announcements, and leadership highlight reels documenting Africa’s premier women empowerment platform.
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

              <a
                href="#television-features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-[#ed027e] transition-colors hover:bg-[#ed027e] hover:text-white"
              >
                <Tv className="h-4 w-4" />
                <span>eNCA &amp; Trendz Live Features</span>
              </a>

              <a
                href="#podcasts"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-[#ed027e] hover:text-white"
              >
                <Radio className="h-4 w-4" />
                <span>Radio Broadcasts (4)</span>
              </a>

              <a
                href="#leadership-videos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-[#ed027e] hover:text-white"
              >
                <Play className="h-3.5 w-3.5 fill-current text-[#ed027e]" />
                <span>Speaker &amp; Nominee Videos (18)</span>
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

      {/* National Television & Broadcast Features (Trendz Live, eNCA, Highlight Reel) */}
      <section id="television-features" className="py-16 lg:py-24 bg-[#0A0D11] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-12 border-b border-white/10 pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                  <Tv className="h-3 w-3" />
                  <span>National Television &amp; News Features</span>
                </span>
                <h2 className="font-heading mt-3 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] text-white">
                  <span>Broadcast News &amp;</span>{" "}
                  <span className="text-[#ed027e]">Television Interviews</span>
                </h2>
                <p className="mt-3 max-w-[68ch] font-sans text-sm sm:text-base leading-relaxed text-white/70">
                  Full-length television news broadcasts and executive features on SABC News Trendz Live, eNCA, and the official EmpowaWomen™ leadership convening highlight reel.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/60">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
                  <Tv className="h-3.5 w-3.5 text-[#ed027e]" />
                  <span>2 Television Broadcasts</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
                  <Play className="h-3.5 w-3.5 text-[#ed027e]" />
                  <span>1 Highlight Reel</span>
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* 1. SABC News – Trendz Live */}
            <article
              id="broadcast-trendz-live"
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141922] shadow-2xl transition-all duration-300 hover:border-[#ed027e]/40"
            >
              <div className="relative w-full aspect-video bg-[#0A0D11]">
                {isPlayingTrendz ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/Tuqdjk-71mc?autoplay=1&rel=0&modestbranding=1"
                    title="Trendz Live | Theatre, Empowerment and Tranquility: 24 October 2026"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <div
                    className="group relative h-full w-full cursor-pointer"
                    onClick={() => setIsPlayingTrendz(true)}
                  >
                    {/* YouTube Video Poster */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://i.ytimg.com/vi/Tuqdjk-71mc/hqdefault.jpg"
                      alt="Trendz Live | Theatre, Empowerment and Tranquility: 24 October 2026"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 transition-opacity group-hover:opacity-80" />

                    {/* Centered Glowing Play Button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <button
                        type="button"
                        aria-label="Play Trendz Live Broadcast"
                        className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-2xl shadow-[#ed027e]/50 transition-all duration-300 group-hover:scale-110"
                      >
                        <span className="absolute -inset-2.5 rounded-full border border-[#ed027e]/60 animate-ping opacity-30" />
                        <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current translate-x-0.5" />
                      </button>

                      <div className="mt-5 max-w-lg">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                          Click to Play SABC News Feature
                        </span>
                        <h3 className="font-heading mt-2 text-lg sm:text-xl font-black uppercase tracking-tight text-white drop-shadow-md">
                          Trendz Live: Theatre, Empowerment &amp; Tranquility
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 bg-[#151921] border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e]/15 border border-[#ed027e]/30 px-3 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ed027e]">
                      <Tv className="h-3 w-3" />
                      <span>01 • SABC News</span>
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/60">
                      Trendz Live • Broadcast 24 October 2026
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/60">
                      YouTube • 1080p HD
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
                    Trendz Live | Theatre, Empowerment and Tranquility
                  </h3>
                  <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-white/70">
                    SABC News Trendz Live feature highlighting the cultural, creative, and socio-economic empowerment platforms elevating Africa’s next generation of women leaders.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <a
                    href="https://youtu.be/Tuqdjk-71mc?si=p5Wsw4JzQOu6saH3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                  </a>
                </div>
              </div>
            </article>

            {/* 2. eNCA News Interview Feature */}
            <article
              id="broadcast-enca"
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141922] p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-[#ed027e]/40"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e61c24]/20 border border-[#e61c24]/40 px-3 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ff4d53]">
                      <Tv className="h-3 w-3" />
                      <span>02 • eNCA News</span>
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/60">
                      24-Hour Television News Feature
                    </span>
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[0.6875rem] font-mono text-emerald-400">
                      ● Active Client Portal Stream
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white">
                    eNCA Television Interview: Simphiwe Masiza
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#ed027e]">
                    Executive Feature • Simphiwe Masiza, Founder &amp; Group CEO | EmpowaWorx &amp; EmpowaHer™
                  </p>

                  <p className="mt-4 max-w-[68ch] text-sm sm:text-base leading-relaxed text-white/75">
                    Broadcast television news interview on eNCA with Simphiwe Masiza detailing the strategic objectives of the EmpowaHer™ Leadership Summit, corporate sponsorship coalitions, and career-defining mentorship pipelines for Africa’s emerging women executives.
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <a
                    href="https://emediaza.sharepoint.com/sites/ClientRecordingPortal/_layouts/15/stream.aspx?id=%2Fsites%2FClientRecordingPortal%2FInterview%20Recordings%2FActive%20Recordings%2FSimphiwe%20Masiza%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E353e1730%2Dab1b%2D448e%2Db0ce%2D4f6e105b08fc"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="enca-stream-btn"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
                  >
                    <Tv className="h-4 w-4" />
                    <span>Access eNCA Broadcast Stream</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                  </a>
                </div>
              </div>

              {/* Broadcast Master Stream Vault Display */}
              <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-5 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e61c24]/20 border border-[#e61c24]/30 text-[#ff4d53]">
                      <Tv className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold uppercase text-white">
                        eMedia Client Recording Portal Master
                      </p>
                      <p className="text-xs text-white/60">
                        File: Simphiwe Masiza.mp4 • StreamWebApp Web Broadcast Master
                      </p>
                    </div>
                  </div>

                  {/* Visual Equalizer / Transmission Graphic */}
                  <div className="flex items-end gap-1 h-8 px-4 py-1 rounded-lg bg-white/5 border border-white/5">
                    {[60, 85, 45, 95, 70, 50, 80, 65, 90, 40, 75, 55, 90, 60, 85, 45, 95].map((height, i) => (
                      <span
                        key={i}
                        className="w-1 bg-[#ff4d53] rounded-full opacity-80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  <a
                    href="https://emediaza.sharepoint.com/sites/ClientRecordingPortal/_layouts/15/stream.aspx?id=%2Fsites%2FClientRecordingPortal%2FInterview%20Recordings%2FActive%20Recordings%2FSimphiwe%20Masiza%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E353e1730%2Dab1b%2D448e%2Db0ce%2D4f6e105b08fc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-white/80 hover:text-[#ed027e] transition-colors underline underline-offset-4"
                  >
                    <span>emediaza.sharepoint.com Stream Portal</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>

            {/* 3. Featured Video: EmpowaWomen™ Highlight Reel */}
            <article
              id="highlight-reel"
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl shadow-black/80"
            >
              <div className="relative w-full aspect-video bg-[#0A0D11]">
                {isPlayingReel ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/g2T0dzTqQZk?autoplay=1&rel=0&modestbranding=1"
                    title="EmpowaWomen™ Official Highlight Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <div
                    className="group relative h-full w-full cursor-pointer"
                    onClick={() => setIsPlayingReel(true)}
                  >
                    {/* High-res Video Poster */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://i.ytimg.com/vi/g2T0dzTqQZk/maxresdefault.jpg"
                      alt="EmpowaWomen™ Official Highlight Reel"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://i.ytimg.com/vi/g2T0dzTqQZk/hqdefault.jpg";
                      }}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 transition-opacity group-hover:opacity-80" />

                    {/* Centered Glowing Play Button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <button
                        type="button"
                        aria-label="Play Highlight Reel"
                        className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-2xl shadow-[#ed027e]/50 transition-all duration-300 group-hover:scale-110"
                      >
                        <span className="absolute -inset-2.5 rounded-full border border-[#ed027e]/60 animate-ping opacity-30" />
                        <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current translate-x-0.5" />
                      </button>

                      <div className="mt-5 max-w-lg">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                          Click to Play Broadcast Reel
                        </span>
                        <h3 className="font-heading mt-2 text-lg sm:text-xl font-black uppercase tracking-tight text-white drop-shadow-md">
                          10th Annual EmpowaWomen Leadership Summit
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 bg-[#151921] border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e]/15 border border-[#ed027e]/30 px-3 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ed027e]">
                      <Play className="h-3 w-3" />
                      <span>03 • Signature Summit Reel</span>
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/60">
                      YouTube • 1080p HD
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
                    EmpowaWomen™ Official Highlight Reel: Demonstrating Scale &amp; Impact
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
                    <ExternalLink className="h-3 w-3 opacity-70" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Leadership, Keynote Speaker & Nominee Videos (18 features) */}
      <LeadershipVideos />

      {/* Radio Broadcasts & Podcasts Section */}
      <section id="podcasts" className="py-16 lg:py-24 bg-[#0E1218] text-white border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-12 border-b border-white/10 pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                  <Radio className="h-3 w-3" />
                  <span>Radio Broadcasts &amp; Podcasts</span>
                </span>
                <h2 className="font-heading mt-3 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] text-white">
                  <span>Airwave Features &amp;</span>{" "}
                  <span className="text-[#ed027e]">Broadcast Interviews</span>
                </h2>
                <p className="mt-3 max-w-[68ch] font-sans text-sm sm:text-base leading-relaxed text-white/70">
                  Listen to flagship national radio broadcasts, executive dialogues, and podcast studio recordings discussing the EmpowaHer™ Leadership Summit 2026, female economic inclusion, and the next generation of African women leaders.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/60">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
                  <Headphones className="h-3.5 w-3.5 text-[#ed027e]" />
                  <span>4 National Broadcast Features</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
                  <Volume2 className="h-3.5 w-3.5 text-[#ed027e]" />
                  <span>Audio &amp; Studio Masters</span>
                </span>
              </div>
            </div>
          </div>

          {/* Broadcast Cards Grid */}
          <div className="space-y-8">
            {/* 1. Sonke Radio */}
            <article
              id="podcast-sonke-radio"
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141922] p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-[#ed027e]/40"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e]/15 border border-[#ed027e]/30 px-3 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ed027e]">
                      <Radio className="h-3 w-3" />
                      <span>01 • Sonke Radio</span>
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/60">
                      Studio Broadcast Recording
                    </span>
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[0.6875rem] font-mono text-emerald-400">
                      ● Active Vault Link
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white">
                    Sonke Radio Feature Interview
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#ed027e]">
                    Interview Recording Archive • EmpowaHer Leadership Summit
                  </p>

                  <p className="mt-4 max-w-[68ch] text-sm sm:text-base leading-relaxed text-white/75">
                    Studio interview recording on Sonke Radio exploring the strategic mission of EmpowaHer™, grassroots leadership development, economic participation for women-led enterprises, and the nomination of 200 of Africa’s next-generation leaders.
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <a
                    href="https://fromsmash.com/mhTxPgrHDh-dt"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="sonke-radio-download-btn"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
                  >
                    <Download className="h-4 w-4" />
                    <span>Access Interview Recording</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                  </a>
                </div>
              </div>

              {/* Broadcast Master Audio Vault Display */}
              <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-5 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ed027e]/15 border border-[#ed027e]/30 text-[#ed027e]">
                      <Mic className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold uppercase text-white">
                        Broadcast Master Audio Vault
                      </p>
                      <p className="text-xs text-white/60">
                        Package includes 2 high-resolution studio audio recording files (53.15 MB total)
                      </p>
                    </div>
                  </div>

                  {/* Sound Wave Equalizer Graphic */}
                  <div className="flex items-end gap-1 h-8 px-4 py-1 rounded-lg bg-white/5 border border-white/5">
                    {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65, 90, 40, 70, 85, 55].map((height, i) => (
                      <span
                        key={i}
                        className="w-1 bg-[#ed027e] rounded-full opacity-80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  <a
                    href="https://fromsmash.com/mhTxPgrHDh-dt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-white/80 hover:text-[#ed027e] transition-colors underline underline-offset-4"
                  >
                    <span>fromsmash.com/mhTxPgrHDh-dt</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>

            {/* 2. Metro FM – Best Mornings with DJ Sabby */}
            <article
              id="podcast-metro-fm"
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141922] p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-[#ed027e]/40"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e]/15 border border-[#ed027e]/30 px-3 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ed027e]">
                      <Radio className="h-3 w-3" />
                      <span>02 • Metro FM</span>
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/60">
                      Best Mornings with DJ Sabby
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/70">
                      <Clock className="h-3 w-3 text-[#ed027e]" />
                      <span>07:27 min</span>
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white">
                    EmpowaHer Leadership Summit 2026 – The Future Is Female
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#ed027e]">
                    Interview Feature • DJ Sabby, Kandis Kardash, Owen Hannie &amp; Zandile Hopa
                  </p>

                  <p className="mt-4 max-w-[68ch] text-sm sm:text-base leading-relaxed text-white/75">
                    Live breakfast radio conversation on METRO FM discussing why the future of African industry and governance is female, unlocking mentorship, and the launch of nominations for Africa’s next-generation women leaders.
                  </p>
                </div>

                <div className="shrink-0 flex flex-wrap lg:flex-col gap-3">
                  <a
                    href="https://omny.fm/shows/best-mornings/empowaher-leadership-summit-2026-the-future-is-female"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="metro-fm-omny-link"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#ed027e] hover:text-[#ed027e]"
                  >
                    <span>View on Omny.fm</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href="https://traffic.omny.fm/d/clips/8f7208d2-db6e-4bfa-85b5-ad3d00776f1f/e1dc43d1-3ed3-43b6-934a-afda00a36848/f92e7716-a506-4ae7-94dc-b4db007f0b54/audio.mp3"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="metro-fm-download-audio"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e]/20 border border-[#ed027e]/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#ed027e] transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download MP3</span>
                  </a>
                </div>
              </div>

              {/* Official Omny Embed Player */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-inner">
                <iframe
                  src="https://omny.fm/shows/best-mornings/empowaher-leadership-summit-2026-the-future-is-female/embed?style=Cover&media=Audio&size=Wide"
                  width="100%"
                  height="180"
                  allow="autoplay; clipboard-write; fullscreen"
                  allowFullScreen
                  frameBorder="0"
                  title="Metro FM: EmpowaHer Leadership Summit 2026 – The Future Is Female"
                  className="w-full border-0"
                />
              </div>
            </article>

            {/* 3. Radio 2000 – The Big Breakfast Show */}
            <article
              id="podcast-radio-2000"
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141922] p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-[#ed027e]/40"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e]/15 border border-[#ed027e]/30 px-3 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ed027e]">
                      <Radio className="h-3 w-3" />
                      <span>03 • Radio 2000</span>
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/60">
                      #TheBigBreakfast Show with DJ Sbu
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/70">
                      <Clock className="h-3 w-3 text-[#ed027e]" />
                      <span>12:06 min</span>
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white">
                    BigStories: EmpowaWorx and EmpowaWomen Key Initiatives &amp; Platforms
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#ed027e]">
                    Executive Feature • Simphiwe Masiza with DJ Sbu &amp; Nathi Ndamase
                  </p>

                  <p className="mt-4 max-w-[68ch] text-sm sm:text-base leading-relaxed text-white/75">
                    Simphiwe Masiza, Founder and Group CEO of EmpowaWorx and EmpowaWomen™, joins DJ Sbu and Nathi Ndamase on Radio 2000 to unpack the leadership and economic empowerment ecosystem powering the EmpowaHer Leadership Summit.
                  </p>
                </div>

                <div className="shrink-0 flex flex-wrap lg:flex-col gap-3">
                  <a
                    href="https://omny.fm/shows/thebigbreakfast-show/bigstories-empowaworx-and-empowawomen-key-initiatives-platforms-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="radio-2000-omny-link"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#ed027e] hover:text-[#ed027e]"
                  >
                    <span>View on Omny.fm</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href="https://traffic.omny.fm/d/clips/8f7208d2-db6e-4bfa-85b5-ad3d00776f1f/e3281566-5752-443e-b9f7-b14500769b83/2f9f0b9e-5244-43e1-977b-b4ea006ff3fd/audio.mp3"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="radio-2000-download-audio"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e]/20 border border-[#ed027e]/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#ed027e] transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download MP3</span>
                  </a>
                </div>
              </div>

              {/* Official Omny Embed Player */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-inner">
                <iframe
                  src="https://omny.fm/shows/thebigbreakfast-show/bigstories-empowaworx-and-empowawomen-key-initiatives-platforms-1/embed?style=Cover&media=Audio&size=Wide"
                  width="100%"
                  height="180"
                  allow="autoplay; clipboard-write; fullscreen"
                  allowFullScreen
                  frameBorder="0"
                  title="Radio 2000: BigStories – EmpowaWorx and EmpowaWomen Key Initiatives & Platforms"
                  className="w-full border-0"
                />
              </div>
            </article>

            {/* 4. Lesedi FM – SABC National Broadcast */}
            <article
              id="podcast-lesedi-fm"
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141922] p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-[#ed027e]/40"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e]/15 border border-[#ed027e]/30 px-3 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ed027e]">
                      <Radio className="h-3 w-3" />
                      <span>04 • Lesedi FM</span>
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/60">
                      SABC Public Service Radio
                    </span>
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[0.6875rem] font-mono text-emerald-400">
                      ● Active SABC Audio Vault
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white">
                    SABC Lesedi FM Feature Interview
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#ed027e]">
                    Broadcast Recording Archive • EmpowaHer Leadership Summit 2026
                  </p>

                  <p className="mt-4 max-w-[68ch] text-sm sm:text-base leading-relaxed text-white/75">
                    Flagship national radio broadcast interview on SABC Lesedi FM exploring the strategic mission of EmpowaHer™, grassroots leadership development, economic participation for women-led enterprises, and the nomination of 200 of Africa’s next-generation leaders.
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <a
                    href="https://sabconms-my.sharepoint.com/:u:/g/personal/phillipsit_sabc_co_za/IQC4w_4VK92rRpYSdPwRwOpIAdJMO6Tw1rZJtZc_9Y74GoU"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="lesedi-fm-recording-btn"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
                  >
                    <Headphones className="h-4 w-4" />
                    <span>Access SABC Audio Vault</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                  </a>
                </div>
              </div>

              {/* SABC Master Audio Vault Display */}
              <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-5 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ed027e]/15 border border-[#ed027e]/30 text-[#ed027e]">
                      <Mic className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold uppercase text-white">
                        SABC Broadcast Master Vault
                      </p>
                      <p className="text-xs text-white/60">
                        Official SABC studio audio recording repository • Lesedi FM
                      </p>
                    </div>
                  </div>

                  {/* Sound Wave Equalizer Graphic */}
                  <div className="flex items-end gap-1 h-8 px-4 py-1 rounded-lg bg-white/5 border border-white/5">
                    {[50, 80, 65, 90, 45, 75, 55, 90, 60, 85, 40, 70, 85, 55, 95, 70, 50].map((height, i) => (
                      <span
                        key={i}
                        className="w-1 bg-[#ed027e] rounded-full opacity-80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  <a
                    href="https://sabconms-my.sharepoint.com/:u:/g/personal/phillipsit_sabc_co_za/IQC4w_4VK92rRpYSdPwRwOpIAdJMO6Tw1rZJtZc_9Y74GoU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-white/80 hover:text-[#ed027e] transition-colors underline underline-offset-4"
                  >
                    <span>sabconms.sharepoint.com Audio Vault</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
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
                    href="mailto:info@empowaher.co.za?subject=EmpowaHer%20Media%20Request"
                    className="block font-medium text-white hover:text-[#ed027e] transition-colors"
                  >
                    info@empowaher.co.za
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
