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
              <Radio className="h-3 w-3 animate-pulse" />
              <span>ON THE AIRWAVES • PODCASTS &amp; BROADCASTS</span>
            </div>
            <h2
              id="podcasts-snippet-heading"
              className="font-heading max-w-[15ch] text-[clamp(2.5rem,5.5vw,4.75rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-white [text-wrap:balance]"
            >
              <span>Voices of</span>
              <br />
              <span className="text-[#ed027e]">Leadership.</span>
            </h2>
            <p className="mt-4 max-w-[54ch] font-sans text-sm sm:text-base leading-relaxed text-white/75">
              Listen to flagship national radio broadcasts, executive dialogues, and podcast features unpacking the EmpowaHer™ Leadership Summit 2026, female economic inclusion, and the next generation of African women leaders.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-white/70">
              <Headphones className="h-4 w-4 text-[#ed027e]" />
              <span>3 National Broadcast Features</span>
            </div>
            <Link
              href="/media"
              id="header-podcast-cta-link"
              className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
            >
              <span>Visit Media Page</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Global Active Audio Mini-Player Bar (When Playing) */}
        {activeTrackId && (
          <div
            id="podcast-floating-player"
            className="mt-8 rounded-2xl border border-[#ed027e]/40 bg-black/70 p-4 sm:p-5 backdrop-blur-xl shadow-2xl transition-all animate-in fade-in slide-in-from-top-2"
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

        {/* 3 Podcasts Grid */}
        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {podcastEpisodes.map((episode) => {
            const isThisPlaying = activeTrackId === episode.id && isPlaying;

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
                      <Download className="h-3.5 w-3.5" />
                      <span>Access Studio Vault</span>
                      <ExternalLink className="h-3 w-3 opacity-80" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* High-Impact Podcast CTA Bar leading directly to the Media Page */}
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
                Access All Radio Interviews, Master Audio &amp; Media Assets.
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
