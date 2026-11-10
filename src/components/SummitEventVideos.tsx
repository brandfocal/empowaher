"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Check,
  Clock,
  ExternalLink,
  Film,
  Layers,
  Play,
  Share2,
  Sparkles,
  Tv,
  X,
} from "lucide-react";

import {
  SummitEventVideo,
  summitEventVideos,
} from "@/data/summitEventVideos";

export type { SummitEventVideo };

export function SummitEventVideos() {
  const [selectedVideo, setSelectedVideo] = useState<SummitEventVideo>(
    summitEventVideos[0]
  );
  const [isPlayingFeatured, setIsPlayingFeatured] = useState<boolean>(false);
  const [modalVideo, setModalVideo] = useState<SummitEventVideo | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Close modal with ESC key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalVideo(null);
      }
    };

    if (modalVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalVideo]);

  const handleCopyLink = (video: SummitEventVideo) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(video.youtubeUrl);
      setCopiedId(video.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleSelectVideo = (video: SummitEventVideo) => {
    setSelectedVideo(video);
    setIsPlayingFeatured(true);
  };

  return (
    <section
      id="summit-event-recordings"
      className="relative py-16 lg:py-24 bg-[#07090D] text-white border-t-[6px] border-[#ed027e]"
      aria-labelledby="summit-recordings-heading"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#ed027e]/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <Tv className="h-3 w-3" />
                <span>OFFICIAL SUMMIT BROADCAST ARCHIVE</span>
              </span>
              <h2
                id="summit-recordings-heading"
                className="font-heading mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-[-0.02em] text-white"
              >
                <span>EmpowaHer Leadership Summit 2027</span>
                <br />
                <span className="text-[#ed027e]">Event Livestream Recordings</span>
              </h2>
              <p className="mt-3 max-w-[72ch] font-sans text-sm sm:text-base leading-relaxed text-white/75">
                Relive the historic convening at EmpowaWorx House. Stream the complete recorded livestreams across Day 1 (Opening Plenary), Day 2 (Executive Leadership Tracks), and Day 3 (Graduation &amp; Awards Ceremony).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-white/70">
                <Film className="h-3.5 w-3.5 text-[#ed027e]" />
                <span>{summitEventVideos.length} Full Sessions Available</span>
              </span>
              <a
                href="https://www.youtube.com/@empowaworx6407"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ed027e]/25 hover:bg-[#d0026f] transition-all"
              >
                <Play className="h-3 w-3 fill-current" />
                <span>EmpowaWorx Channel</span>
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Video Player Cinema Container */}
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-black shadow-2xl shadow-black/80">
          <div className="relative w-full aspect-video bg-[#0A0D11]">
            {isPlayingFeatured ? (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <div
                className="group relative h-full w-full cursor-pointer"
                onClick={() => setIsPlayingFeatured(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIsPlayingFeatured(true);
                  }
                }}
                aria-label={`Play ${selectedVideo.title}`}
              >
                {/* High-res YouTube Poster */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${selectedVideo.youtubeId}/maxresdefault.jpg`}
                  alt={selectedVideo.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${selectedVideo.youtubeId}/hqdefault.jpg`;
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 transition-opacity group-hover:opacity-80" />

                {/* Day Badge & Channel Watermark */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="rounded-full bg-[#ed027e] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white shadow-lg">
                    {selectedVideo.dayBadge}
                  </span>
                  <span className="rounded-full bg-black/70 border border-white/20 px-3 py-1 text-xs font-mono text-white/90 backdrop-blur-md">
                    1080p HD • Full Livestream
                  </span>
                </div>

                {/* Center Glowing Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <button
                    type="button"
                    aria-label={`Play ${selectedVideo.title}`}
                    className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-2xl shadow-[#ed027e]/50 transition-all duration-300 group-hover:scale-110"
                  >
                    <span className="absolute -inset-2.5 rounded-full border border-[#ed027e]/60 animate-ping opacity-30" />
                    <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current translate-x-0.5" />
                  </button>

                  <div className="mt-5 max-w-xl">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      Click to Stream Full Event Recording
                    </span>
                    <h3 className="font-heading mt-2 text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white drop-shadow-md">
                      {selectedVideo.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium">
                      {selectedVideo.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Active Video Player Controls & Details Bar */}
          <div className="p-6 sm:p-8 bg-[#12161F] border-t border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="rounded-full bg-[#ed027e]/20 border border-[#ed027e]/40 px-3 py-0.5 text-xs font-black uppercase tracking-wider text-[#ed027e]">
                  {selectedVideo.dayBadge}
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs font-mono text-white/60">
                  Produced by EmpowaWorx™
                </span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
                {selectedVideo.title} — {selectedVideo.subtitle}
              </h3>
              <p className="mt-2 max-w-[70ch] text-xs sm:text-sm leading-relaxed text-white/70">
                {selectedVideo.description}
              </p>

              {/* Key Topics Badges */}
              {selectedVideo.keyTopics && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-white/50">
                    Key Topics:
                  </span>
                  {selectedVideo.keyTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[0.6875rem] text-white/80"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => handleCopyLink(selectedVideo)}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:border-[#ed027e] hover:text-[#ed027e] transition-colors"
              >
                {copiedId === selectedVideo.id ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={selectedVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ed027e]/25 hover:bg-[#d0026f] transition-all"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Watch on YouTube</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Summit Day Selection Cards */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white/80">
              Browse Summit Sessions
            </h4>
            <span className="text-xs text-white/50 font-mono">
              Click any day to stream
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {summitEventVideos.map((video) => {
              const isCurrent = video.id === selectedVideo.id;
              return (
                <article
                  key={video.id}
                  onClick={() => handleSelectVideo(video)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleSelectVideo(video);
                    }
                  }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isCurrent
                      ? "border-[#ed027e] bg-[#161C26] shadow-xl shadow-[#ed027e]/15 scale-[1.01]"
                      : "border-white/10 bg-[#11151E] hover:border-[#ed027e]/50 hover:bg-[#141A24]"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 group-hover:opacity-75 transition-opacity" />

                    {/* Top Day Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full bg-[#ed027e] px-2.5 py-0.5 text-[0.625rem] font-black uppercase tracking-wider text-white">
                        {video.dayBadge}
                      </span>
                      {isCurrent && (
                        <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[0.625rem] font-mono text-emerald-400">
                          Now Playing
                        </span>
                      )}
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform group-hover:scale-110 ${
                          isCurrent
                            ? "bg-[#ed027e] shadow-[#ed027e]/50"
                            : "bg-black/60 border border-white/20 group-hover:bg-[#ed027e]"
                        }`}
                      >
                        <Play className="h-5 w-5 fill-current translate-x-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[0.625rem] font-mono text-white/80">
                      <span>EmpowaWorx™ Stream</span>
                      <span className="text-[#ed027e]">Click to Switch</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <span className="text-[0.625rem] font-bold uppercase tracking-wider text-[#ed027e]">
                      {video.dayBadge}
                    </span>
                    <h5 className="font-heading mt-1 text-base font-bold uppercase text-white group-hover:text-[#ed027e] transition-colors">
                      {video.title}
                    </h5>
                    <p className="mt-1 text-xs text-white/60 font-medium">
                      {video.subtitle}
                    </p>
                    <p className="mt-2 text-xs text-white/70 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Notice for Upcoming Event Videos */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/70">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#ed027e] animate-pulse" />
            <p>
              <strong className="text-white">Past Event Video Archive:</strong>{" "}
              Additional plenary recordings, breakout sessions, and key highlights from the summit are being processed and added.
            </p>
          </div>
          <span className="shrink-0 font-mono text-[0.6875rem] text-white/50">
            More videos coming soon
          </span>
        </div>
      </div>
    </section>
  );
}

