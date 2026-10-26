"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Download,
  ExternalLink,
  Headphones,
  Play,
  Pause,
  Radio,
  Tv,
  Volume2,
  VolumeX,
  Sparkles,
} from "lucide-react";

interface PodcastItem {
  id: string;
  station: string;
  frequency: string;
  badge: string;
  showTitle: string;
  episodeTitle: string;
  featuredGuests: string;
  duration: string;
  description: string;
  audioUrl?: string;
  embedUrl?: string;
  omnyUrl?: string;
  vaultUrl?: string;
  tags: string[];
}

const podcastEpisodes: PodcastItem[] = [
  {
    id: "metro-fm",
    station: "METRO FM",
    frequency: "92.4 MHz • National",
    badge: "Live Breakfast Radio",
    showTitle: "Best Mornings with DJ Sabby",
    episodeTitle: "EmpowaHer Summit 2026 – The Future Is Female",
    featuredGuests: "DJ Sabby, Kandis Kardash, Owen Hannie & Zandile Hopa",
    duration: "07:27 min",
    description:
      "Flagship breakfast conversation on METRO FM unpacking why Africa’s future is female, unlocking executive mentorship, and launching nominations for 200 emerging women leaders.",
    audioUrl:
      "https://traffic.omny.fm/d/clips/8f7208d2-db6e-4bfa-85b5-ad3d00776f1f/e1dc43d1-3ed3-43b6-934a-afda00a36848/f92e7716-a506-4ae7-94dc-b4db007f0b54/audio.mp3",
    embedUrl:
      "https://omny.fm/shows/best-mornings/empowaher-leadership-summit-2026-the-future-is-female/embed?style=Cover&media=Audio&size=Wide",
    omnyUrl:
      "https://omny.fm/shows/best-mornings/empowaher-leadership-summit-2026-the-future-is-female",
    tags: ["Leadership", "Mentorship", "Summit Launch"],
  },
  {
    id: "radio-2000",
    station: "RADIO 2000",
    frequency: "National Broadcast",
    badge: "Executive Dialogue",
    showTitle: "#TheBigBreakfast Show with DJ Sbu",
    episodeTitle: "BigStories: EmpowaWorx and EmpowaWomen Key Initiatives",
    featuredGuests: "Simphiwe Masiza with DJ Sbu & Nathi Ndamase",
    duration: "12:06 min",
    description:
      "Simphiwe Masiza, Founder and Group CEO of EmpowaWorx and EmpowaWomen™, joins DJ Sbu and Nathi Ndamase to unpack the commercial and leadership ecosystem powering EmpowaHer™.",
    audioUrl:
      "https://traffic.omny.fm/d/clips/8f7208d2-db6e-4bfa-85b5-ad3d00776f1f/e3281566-5752-443e-b9f7-b14500769b83/2f9f0b9e-5244-43e1-977b-b4ea006ff3fd/audio.mp3",
    embedUrl:
      "https://omny.fm/shows/thebigbreakfast-show/bigstories-empowaworx-and-empowawomen-key-initiatives-platforms-1/embed?style=Cover&media=Audio&size=Wide",
    omnyUrl:
      "https://omny.fm/shows/thebigbreakfast-show/bigstories-empowaworx-and-empowawomen-key-initiatives-platforms-1",
    tags: ["Group CEO", "Economic Inclusion", "Innovation"],
  },
  {
    id: "lesedi-fm",
    station: "LESEDI FM",
    frequency: "SABC National Broadcast",
    badge: "SABC Airwave Feature",
    showTitle: "EmpowaHer National Radio Dialogue",
    episodeTitle: "SABC Lesedi FM Feature Interview & Leadership Archive",
    featuredGuests: "EmpowaHer Leadership Delegation",
    duration: "SABC Audio Master Vault",
    description:
      "Flagship national broadcast interview on SABC Lesedi FM unpacking the mission of EmpowaHer™, socioeconomic inclusion, executive mentorship, and the 200 next-generation leader cohort.",
    vaultUrl:
      "https://sabconms-my.sharepoint.com/:u:/g/personal/phillipsit_sabc_co_za/IQC4w_4VK92rRpYSdPwRwOpIAdJMO6Tw1rZJtZc_9Y74GoU",
    tags: ["SABC", "Lesedi FM", "National Reach"],
  },
  {
    id: "sonke-radio",
    station: "SONKE RADIO",
    frequency: "Studio Recording Archive",
    badge: "Studio Audio Vault",
    showTitle: "EmpowaHer Strategic Mission Series",
    episodeTitle: "Sonke Radio Feature Interview & Leadership Archive",
    featuredGuests: "EmpowaHer Leadership Delegation",
    duration: "53.15 MB • Master Audio",
    description:
      "In-depth studio broadcast interview exploring grassroots leadership development, economic participation for women-led enterprises, and the 200 next-generation leader cohort.",
    vaultUrl: "https://fromsmash.com/mhTxPgrHDh-dt",
    tags: ["Grassroots Impact", "SME Acceleration", "200 Cohort"],
  },
];

export function PodcastsSnippet() {
  const [isPlayingTrendz, setIsPlayingTrendz] = useState<boolean>(false);
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const handleTogglePlay = (episode: PodcastItem) => {
    if (!episode.audioUrl) {
      if (episode.vaultUrl) {
        window.open(episode.vaultUrl, "_blank", "noopener,noreferrer");
      }
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (activeTrackId === episode.id) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else {
      setActiveTrackId(episode.id);
      audio.src = episode.audioUrl;
      audio.load();
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleToggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const seekTime = Number(e.target.value);
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatSeconds = (sec: number) => {
    if (isNaN(sec) || sec === 0) return "0:00";
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section
      id="podcasts"
      className="relative border-t-[6px] border-[#ed027e] bg-[#0E1218] py-16 sm:py-20 lg:py-24 text-white overflow-hidden"
      aria-labelledby="podcasts-snippet-heading"
    >
      {/* Hidden audio element for browser-native HTML5 playback */}
      <audio ref={audioRef} preload="metadata" />

      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 items-end gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
              <Tv className="h-3 w-3 animate-pulse" />
              <span>ON SCREEN &amp; AIRWAVES • TELEVISION, MEDIA &amp; PODCASTS</span>
            </div>
            <h2
              id="podcasts-snippet-heading"
              className="font-heading max-w-[15ch] text-[clamp(2.5rem,5.5vw,4.75rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-white [text-wrap:balance]"
            >
              <span>Voices &amp; Vision of</span>
              <br />
              <span className="text-[#ed027e]">Leadership.</span>
            </h2>
            <p className="mt-4 max-w-[56ch] font-sans text-sm sm:text-base leading-relaxed text-white/75">
              Watch flagship television news interviews and listen to national radio broadcasts unpacking the EmpowaHer™ Leadership Summit 2026, female economic inclusion, and the next generation of African women leaders.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <Link
              href="/media"
              id="header-podcast-cta-link"
              className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
            >
              <span>Visit Media Hub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* =========================================================================
            PRIME-TIME TELEVISION & NEWS FEATURES (Trendz Live SABC News & eNCA News)
            ========================================================================= */}
        <div className="mt-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#ed027e] animate-ping" />
              <span className="text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
                FEATURED TELEVISION &amp; NEWS BROADCASTS
              </span>
            </div>
            <span className="text-xs font-mono text-white/50">
              SABC News • eNCA 24-Hour Television News
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Feature 1: SABC News Trendz Live */}
            <article
              id="home-broadcast-trendz"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-[#141922] shadow-2xl transition-all duration-300 hover:border-[#ed027e]/50"
            >
              {/* Video Player / Poster Area */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                {isPlayingTrendz ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/Tuqdjk-71mc?autoplay=1&rel=0"
                    title="Trendz Live | Theatre, Empowerment and Tranquility"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <div
                    className="relative h-full w-full cursor-pointer"
                    onClick={() => setIsPlayingTrendz(true)}
                  >
                    {/* YouTube Poster Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://i.ytimg.com/vi/Tuqdjk-71mc/hqdefault.jpg"
                      alt="Trendz Live | SABC News Feature: Theatre, Empowerment and Tranquility"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 transition-opacity group-hover:opacity-80" />

                    {/* Centered Glowing Play Button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <button
                        type="button"
                        aria-label="Play Trendz Live Broadcast"
                        className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-2xl shadow-[#ed027e]/50 transition-all duration-300 group-hover:scale-110"
                      >
                        <span className="absolute -inset-2 rounded-full border border-[#ed027e]/60 animate-ping opacity-30" />
                        <Play className="h-7 w-7 sm:h-8 sm:w-8 fill-current translate-x-0.5" />
                      </button>

                      <div className="mt-4 max-w-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                          Click to Play SABC News Feature
                        </span>
                        <h3 className="font-heading mt-2 text-base sm:text-lg font-black uppercase tracking-tight text-white drop-shadow-md">
                          Trendz Live: Theatre, Empowerment &amp; Tranquility
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Information & Action Bar */}
              <div className="p-6 sm:p-7 bg-[#151921] border-t border-white/10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e]/15 border border-[#ed027e]/30 px-3 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ed027e]">
                      <Tv className="h-3 w-3" />
                      <span>01 • SABC News</span>
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/60">
                      Trendz Live • 24 Oct 2026
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/60">
                      YouTube HD
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white group-hover:text-[#ed027e] transition-colors">
                    Trendz Live | Theatre, Empowerment and Tranquility
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/70">
                    SABC News Trendz Live feature highlighting the cultural, creative, and socio-economic empowerment platforms elevating Africa’s next generation of women leaders.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="https://youtu.be/Tuqdjk-71mc?si=p5Wsw4JzQOu6saH3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="h-3 w-3 opacity-80" />
                  </a>

                  <Link
                    href="/media#broadcasts"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#ed027e] transition-colors"
                  >
                    <span>View on Media Page</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Feature 2: eNCA Television News Feature */}
            <article
              id="home-broadcast-enca"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-[#141922] p-6 sm:p-7 shadow-2xl transition-all duration-300 hover:border-[#ed027e]/50"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e61c24]/20 border border-[#e61c24]/40 px-3 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ff4d53]">
                    <Tv className="h-3 w-3" />
                    <span>02 • eNCA News</span>
                  </span>
                  <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/60">
                    24-Hour Television News Feature
                  </span>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[0.6875rem] font-mono text-emerald-400">
                    ● Active Broadcast Stream
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#ed027e] transition-colors">
                  eNCA Television Interview: Simphiwe Masiza
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#ed027e]">
                  Executive Feature • Simphiwe Masiza, Founder &amp; Group CEO | EmpowaWorx &amp; EmpowaHer™
                </p>

                <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-white/75">
                  Broadcast television news interview on eNCA with Simphiwe Masiza detailing the strategic objectives of the EmpowaHer™ Leadership Summit, corporate sponsorship coalitions, and career-defining mentorship pipelines for Africa’s emerging women executives.
                </p>

                {/* Master Stream Vault Information Display */}
                <div className="mt-5 rounded-xl border border-white/10 bg-black/40 p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e61c24]/20 border border-[#e61c24]/30 text-[#ff4d53]">
                        <Tv className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-heading text-xs sm:text-sm font-bold uppercase text-white">
                          eMedia Client Recording Portal Master
                        </p>
                        <p className="text-[0.6875rem] text-white/60">
                          File: Simphiwe Masiza.mp4 • StreamWebApp Web Broadcast
                        </p>
                      </div>
                    </div>

                    {/* Equalizer Visualizer Bars */}
                    <div className="flex items-end gap-1 h-7 px-3 py-1 rounded-lg bg-white/5 border border-white/5 shrink-0">
                      {[50, 85, 45, 95, 70, 50, 80, 65, 90, 40, 75, 55, 90].map((height, i) => (
                        <span
                          key={i}
                          className="w-1 bg-[#ff4d53] rounded-full opacity-80"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://emediaza.sharepoint.com/sites/ClientRecordingPortal/_layouts/15/stream.aspx?id=%2Fsites%2FClientRecordingPortal%2FInterview%20Recordings%2FActive%20Recordings%2FSimphiwe%20Masiza%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E353e1730%2Dab1b%2D448e%2Db0ce%2D4f6e105b08fc"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="home-enca-stream-btn"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
                >
                  <Tv className="h-3.5 w-3.5" />
                  <span>Access eNCA Broadcast Stream</span>
                  <ExternalLink className="h-3 w-3 opacity-80" />
                </a>

                <Link
                  href="/media#broadcast-enca"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#ed027e] transition-colors"
                >
                  <span>View on Media Page</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          </div>
        </div>

        {/* =========================================================================
            NATIONAL RADIO BROADCASTS & PODCASTS (Metro FM, Radio 2000, Lesedi FM, Sonke)
            ========================================================================= */}
        <div className="mt-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <Radio className="h-4 w-4 text-[#ed027e] animate-pulse" />
              <span className="text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
                NATIONAL RADIO BROADCASTS &amp; AUDIO ARCHIVES
              </span>
            </div>
            <span className="text-xs font-mono text-white/50">
              Metro FM • Radio 2000 • Lesedi FM • Sonke Radio
            </span>
          </div>

          {/* Global Active Audio Mini-Player Bar (When Playing) */}
          {activeTrackId && (
            <div
              id="podcast-floating-player"
              className="mb-8 rounded-2xl border border-[#ed027e]/40 bg-black/70 p-4 sm:p-5 backdrop-blur-xl shadow-2xl transition-all animate-in fade-in slide-in-from-top-2"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      const ep = podcastEpisodes.find((e) => e.id === activeTrackId);
                      if (ep) handleTogglePlay(ep);
                    }}
                    className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-lg shadow-[#ed027e]/40 transition-transform hover:scale-105"
                    aria-label={isPlaying ? "Pause track" : "Play track"}
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5 fill-current" />
                    ) : (
                      <Play className="h-5 w-5 fill-current translate-x-0.5" />
                    )}
                  </button>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#ed027e]/20 px-2 py-0.5 text-[0.625rem] font-black uppercase tracking-wider text-[#ed027e]">
                        Now Playing
                      </span>
                      <span className="text-xs font-mono text-white/60">
                        {podcastEpisodes.find((e) => e.id === activeTrackId)?.station}
                      </span>
                    </div>
                    <h4 className="font-heading mt-0.5 text-sm sm:text-base font-bold text-white line-clamp-1">
                      {podcastEpisodes.find((e) => e.id === activeTrackId)?.episodeTitle}
                    </h4>
                  </div>
                </div>

                {/* Dynamic Sound Wave Visualizer */}
                <div className="flex items-center gap-4 flex-1 max-w-md mx-auto md:mx-4">
                  <span className="text-xs font-mono text-white/50 w-10 text-right">
                    {formatSeconds(currentTime)}
                  </span>
                  <div className="relative flex-1 flex items-center">
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#ed027e]"
                      aria-label="Seek audio"
                    />
                  </div>
                  <span className="text-xs font-mono text-white/50 w-10">
                    {formatSeconds(duration)}
                  </span>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between md:justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    className="rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                  <Link
                    href="/media"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-wider text-white hover:border-[#ed027e] hover:text-[#ed027e] transition-colors"
                  >
                    <span>Full Episode on Media Page</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 4 Podcasts Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {podcastEpisodes.map((episode) => {
              const isThisPlaying = activeTrackId === episode.id && isPlaying;
              const isLesedi = episode.id === "lesedi-fm";

              return (
                <article
                  key={episode.id}
                  id={`podcast-card-${episode.id}`}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isThisPlaying
                      ? "border-[#ed027e] bg-[#141922] shadow-xl shadow-[#ed027e]/15 ring-1 ring-[#ed027e]/40"
                      : "border-white/10 bg-[#12161E] hover:border-[#ed027e]/50 hover:bg-[#161C26]"
                  } p-6 sm:p-7`}
                >
                  <div>
                    {/* Station Eyebrow & Duration Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e]/15 border border-[#ed027e]/30 px-3 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ed027e]">
                        <Radio className="h-3 w-3" />
                        <span>{episode.station}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.6875rem] font-mono text-white/70">
                        <Clock className="h-3 w-3 text-[#ed027e]" />
                        <span>{episode.duration}</span>
                      </span>
                    </div>

                    {/* Show Name */}
                    <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-white/50">
                      {episode.showTitle}
                    </p>

                    {/* Episode Title */}
                    <h3 className="font-heading mt-2 text-lg font-black uppercase leading-snug tracking-tight text-white group-hover:text-[#ed027e] transition-colors">
                      {episode.episodeTitle}
                    </h3>

                    {/* Featured Guests */}
                    <p className="mt-2.5 text-xs text-white/60 line-clamp-1">
                      <span className="text-[#ed027e] font-semibold">Featuring: </span>
                      {episode.featuredGuests}
                    </p>

                    {/* Short Description */}
                    <p className="mt-3 text-xs leading-relaxed text-white/70 line-clamp-2">
                      {episode.description}
                    </p>
                  </div>

                  {/* Card Action Button */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    {episode.audioUrl ? (
                      <button
                        type="button"
                        onClick={() => handleTogglePlay(episode)}
                        className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                          isThisPlaying
                            ? "bg-white text-black shadow-lg"
                            : "bg-[#ed027e] text-white hover:bg-[#d0026f] shadow-md shadow-[#ed027e]/20"
                        }`}
                        aria-label={
                          isThisPlaying
                            ? `Pause ${episode.episodeTitle}`
                            : `Play ${episode.episodeTitle}`
                        }
                      >
                        {isThisPlaying ? (
                          <>
                            <Pause className="h-3.5 w-3.5 fill-current" />
                            <span>Pause Audio</span>
                          </>
                        ) : (
                          <>
                            <Play className="h-3.5 w-3.5 fill-current translate-x-0.5" />
                            <span>Play Audio Preview</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <a
                        href={episode.vaultUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#d0026f] shadow-md shadow-[#ed027e]/20 transition-all"
                      >
                        {isLesedi ? (
                          <>
                            <Headphones className="h-3.5 w-3.5" />
                            <span>Access SABC Audio Vault</span>
                            <ExternalLink className="h-3 w-3 opacity-80" />
                          </>
                        ) : (
                          <>
                            <Download className="h-3.5 w-3.5" />
                            <span>Access Studio Vault</span>
                            <ExternalLink className="h-3 w-3 opacity-80" />
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* High-Impact Broadcast & Media CTA Bar leading directly to the Media Page */}
        <div
          id="podcast-cta-banner"
          className="mt-14 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ed027e]/40 bg-gradient-to-r from-[#141922] via-[#1d1624] to-[#141922] p-8 sm:p-10 lg:p-12 shadow-2xl relative"
        >
          {/* Decorative Pink Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#ed027e]/20 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/15 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                <Sparkles className="h-3 w-3" />
                <span>OFFICIAL MEDIA &amp; PRESS HUB</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-tight text-white">
                Access All Television Broadcasts, Radio Interviews &amp; Media Assets.
              </h3>
              <p className="mt-3 max-w-[54ch] text-xs sm:text-sm leading-relaxed text-white/75">
                Stream the complete broadcast series, download high-definition audio masters, read the official 2026 press release, and explore the summit video highlight reels on our dedicated media page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end gap-3.5">
              <Link
                href="/media"
                id="podcast-cta-media-button"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#ed027e] px-8 py-4 font-heading text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#ed027e]/30 transition-all duration-300 hover:scale-[1.03] hover:bg-[#ff1a95]"
              >
                <span>Go to Media Page</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/media#podcasts"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-[#ed027e] hover:text-white"
              >
                <Headphones className="h-4 w-4 text-[#ed027e]" />
                <span>All Broadcasts on Media Hub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
