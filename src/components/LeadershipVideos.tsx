"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Film,
  Play,
  Search,
  X,
} from "lucide-react";

import {
  LeadershipVideo,
  leadershipVideos,
} from "@/data/leadershipVideos";

export type { LeadershipVideo };

type CategoryFilter = "all" | "speaker" | "nominee" | "partner" | "team";

const INITIAL_VISIBLE_COUNT = 6;

export function LeadershipVideos() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalVideo, setActiveModalVideo] = useState<LeadershipVideo | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Close modal with ESC key and prevent body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalVideo(null);
      }
    };

    if (activeModalVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalVideo]);

  const filteredVideos = useMemo(() => {
    return leadershipVideos.filter((video) => {
      const matchesCategory =
        activeCategory === "all" || video.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        query === "" ||
        video.name.toLowerCase().includes(query) ||
        video.role.toLowerCase().includes(query) ||
        (video.organization && video.organization.toLowerCase().includes(query)) ||
        video.highlightText.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  // Display only first 6 by default unless showAll is toggled
  const displayedVideos = useMemo(() => {
    if (showAll || searchQuery.trim() !== "") {
      return filteredVideos;
    }
    return filteredVideos.slice(0, INITIAL_VISIBLE_COUNT);
  }, [filteredVideos, showAll, searchQuery]);

  const hasHiddenVideos =
    !showAll &&
    searchQuery.trim() === "" &&
    filteredVideos.length > INITIAL_VISIBLE_COUNT;

  const remainingCount = filteredVideos.length - INITIAL_VISIBLE_COUNT;

  const counts = useMemo(() => {
    return {
      all: leadershipVideos.length,
      speaker: leadershipVideos.filter((v) => v.category === "speaker").length,
      nominee: leadershipVideos.filter((v) => v.category === "nominee").length,
      partner: leadershipVideos.filter((v) => v.category === "partner").length,
      team: leadershipVideos.filter((v) => v.category === "team").length,
    };
  }, []);

  const handleCopyLink = (video: LeadershipVideo) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(video.youtubeUrl);
      setCopiedId(video.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const getCategoryBadgeClass = (category: LeadershipVideo["category"]) => {
    switch (category) {
      case "speaker":
        return "bg-[#ed027e]/15 border-[#ed027e]/30 text-[#ed027e]";
      case "nominee":
        return "bg-emerald-500/15 border-emerald-500/30 text-emerald-400";
      case "partner":
        return "bg-amber-500/15 border-amber-500/30 text-amber-400";
      case "team":
        return "bg-sky-500/15 border-sky-500/30 text-sky-400";
      default:
        return "bg-white/10 border-white/20 text-white";
    }
  };

  return (
    <section
      id="leadership-videos"
      className="relative py-16 lg:py-24 bg-[#0A0D11] text-white border-t border-white/10"
      aria-labelledby="leadership-videos-heading"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-10 border-b border-white/10 pb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <Film className="h-3 w-3" />
                <span>SPEAKER &amp; NOMINEE VIDEO GALLERY</span>
              </span>
              <h2
                id="leadership-videos-heading"
                className="font-heading mt-3 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] text-white"
              >
                <span>Voices of</span>{" "}
                <span className="text-[#ed027e]">Leadership &amp; Impact</span>
              </h2>
              <p className="mt-3 max-w-[68ch] font-sans text-sm sm:text-base leading-relaxed text-white/70">
                Watch keynote addresses, candidate leader perspectives, strategic partner alignments, and exclusive executive interviews documenting Africa’s premier women empowerment accelerator.
              </p>
            </div>
          </div>

          {/* Interactive Filters & Search Bar */}
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setShowAll(false);
                }}
                className={`rounded-full px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activeCategory === "all"
                    ? "bg-[#ed027e] text-white shadow-lg shadow-[#ed027e]/30 scale-105"
                    : "bg-white/5 border border-white/10 text-white/70 hover:border-[#ed027e] hover:text-white"
                }`}
              >
                All Videos ({counts.all})
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("speaker");
                  setShowAll(false);
                }}
                className={`rounded-full px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activeCategory === "speaker"
                    ? "bg-[#ed027e] text-white shadow-lg shadow-[#ed027e]/30 scale-105"
                    : "bg-white/5 border border-white/10 text-white/70 hover:border-[#ed027e] hover:text-white"
                }`}
              >
                Keynote Speakers ({counts.speaker})
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("nominee");
                  setShowAll(false);
                }}
                className={`rounded-full px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activeCategory === "nominee"
                    ? "bg-[#ed027e] text-white shadow-lg shadow-[#ed027e]/30 scale-105"
                    : "bg-white/5 border border-white/10 text-white/70 hover:border-[#ed027e] hover:text-white"
                }`}
              >
                Nominees &amp; Emerging Leaders ({counts.nominee})
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("partner");
                  setShowAll(false);
                }}
                className={`rounded-full px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activeCategory === "partner"
                    ? "bg-[#ed027e] text-white shadow-lg shadow-[#ed027e]/30 scale-105"
                    : "bg-white/5 border border-white/10 text-white/70 hover:border-[#ed027e] hover:text-white"
                }`}
              >
                Partners ({counts.partner})
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("team");
                  setShowAll(false);
                }}
                className={`rounded-full px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activeCategory === "team"
                    ? "bg-[#ed027e] text-white shadow-lg shadow-[#ed027e]/30 scale-105"
                    : "bg-white/5 border border-white/10 text-white/70 hover:border-[#ed027e] hover:text-white"
                }`}
              >
                Internal Team ({counts.team})
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search speaker or role..."
                className="w-full rounded-full border border-white/15 bg-white/5 pl-9 pr-9 py-2 text-xs text-white placeholder-white/40 focus:border-[#ed027e] focus:outline-none focus:ring-1 focus:ring-[#ed027e]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Video Cards Grid */}
        {filteredVideos.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
            <Film className="mx-auto h-8 w-8 text-white/40 mb-3" />
            <h3 className="font-heading text-lg font-bold text-white">No videos found</h3>
            <p className="mt-1 text-xs text-white/60">
              Try adjusting your search query or switching to another category.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setShowAll(false);
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#ed027e] px-4 py-2 text-xs font-bold uppercase text-white hover:bg-[#d0026f]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {displayedVideos.map((video) => {
                return (
                  <article
                    key={video.id}
                    id={`video-card-${video.id}`}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#12161F] hover:border-[#ed027e]/50 hover:bg-[#161C26] transition-all duration-300"
                  >
                    {/* Poster with Click-to-Open Modal */}
                    <div
                      className="group/poster relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                      onClick={() => setActiveModalVideo(video)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveModalVideo(video);
                        }
                      }}
                      aria-label={`Open video modal for ${video.name}`}
                    >
                      {/* High-res YouTube Poster with fallback */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={`${video.name} | ${video.role}`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
                        }}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/poster:scale-105"
                        loading="lazy"
                      />

                      {/* Dark Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 transition-opacity group-hover/poster:opacity-80" />

                      {/* Top Badges overlay on poster */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[0.625rem] font-black uppercase tracking-wider backdrop-blur-md ${getCategoryBadgeClass(
                            video.category
                          )}`}
                        >
                          <span>{video.categoryLabel}</span>
                        </span>
                        <span className="rounded-full bg-black/70 border border-white/10 px-2 py-0.5 text-[0.625rem] font-mono text-white/80 backdrop-blur-md">
                          YouTube HD
                        </span>
                      </div>

                      {/* Center Glowing Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-xl shadow-[#ed027e]/50 transition-all duration-300 group-hover/poster:scale-110">
                          <span className="absolute -inset-2 rounded-full border border-[#ed027e]/60 animate-ping opacity-30" />
                          <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-current translate-x-0.5" />
                        </div>
                      </div>

                      {/* Bottom prompt on poster */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[0.6875rem] font-bold uppercase tracking-wider text-white/70">
                        <span>Click to Watch Video</span>
                        <span className="text-[#ed027e]">EmpowaHer™</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                      <div>
                        {/* Role & Org */}
                        <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#ed027e]">
                          {video.role}
                        </p>

                        {/* Name */}
                        <h3 className="font-heading mt-1.5 text-lg sm:text-xl font-black uppercase leading-tight tracking-tight text-white group-hover:text-[#ed027e] transition-colors">
                          {video.name}
                        </h3>

                        {/* Highlight Description */}
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/75 line-clamp-3">
                          {video.highlightText}
                        </p>
                      </div>

                      {/* Action Bar */}
                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setActiveModalVideo(video)}
                          className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#d0026f] shadow-md shadow-[#ed027e]/20 transition-all hover:scale-105"
                        >
                          <Play className="h-3 w-3 fill-current translate-x-0.5" />
                          <span>Watch Video</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleCopyLink(video)}
                            className="rounded-full border border-white/15 bg-white/5 p-2 text-white/70 hover:border-[#ed027e] hover:text-[#ed027e] transition-colors"
                            title="Copy YouTube Link"
                            aria-label="Copy YouTube Link"
                          >
                            {copiedId === video.id ? (
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                            ) : (
                              <ShareLinkIcon className="h-3.5 w-3.5" />
                            )}
                          </button>

                          <a
                            href={video.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[0.6875rem] font-bold uppercase tracking-wider text-white/80 hover:border-[#ed027e] hover:text-[#ed027e] transition-colors"
                            title="Open on YouTube"
                          >
                            <span>YouTube</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Show More Videos Button */}
            {(hasHiddenVideos || (showAll && filteredVideos.length > INITIAL_VISIBLE_COUNT)) && (
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  id="toggle-videos-visibility-btn"
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#ed027e] px-8 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white shadow-xl shadow-[#ed027e]/30 transition-all duration-300 hover:scale-105 hover:bg-[#d0026f]"
                >
                  {showAll ? (
                    <>
                      <span>Show Fewer Videos</span>
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <span>Show More Videos ({remainingCount} more)</span>
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Video Modal Player */}
      {activeModalVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Playing video for ${activeModalVideo.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-[#12161F] shadow-2xl shadow-black animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-black/50">
              <div className="flex items-center gap-2.5">
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[0.625rem] font-black uppercase tracking-wider ${getCategoryBadgeClass(
                    activeModalVideo.category
                  )}`}
                >
                  <span>{activeModalVideo.categoryLabel}</span>
                </span>
                <span className="text-xs font-heading font-semibold uppercase text-white/70 line-clamp-1">
                  {activeModalVideo.name}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalVideo(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-[#ed027e] hover:text-white transition-colors"
                aria-label="Close video player"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* 16:9 Video Frame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeModalVideo.youtubeId}?autoplay=1&rel=0`}
                title={`${activeModalVideo.name} - ${activeModalVideo.role}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            {/* Modal Bottom Info */}
            <div className="p-5 sm:p-6 bg-[#12161F] border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#ed027e]">
                  {activeModalVideo.role}
                </p>
                <h3 className="font-heading mt-1 text-lg sm:text-xl font-bold uppercase text-white">
                  {activeModalVideo.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed max-w-[65ch]">
                  {activeModalVideo.highlightText}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopyLink(activeModalVideo)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:border-[#ed027e] hover:text-[#ed027e] transition-colors"
                >
                  {copiedId === activeModalVideo.id ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <ShareLinkIcon className="h-3.5 w-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                <a
                  href={activeModalVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#ed027e] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#d0026f] transition-all shadow-md shadow-[#ed027e]/20"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ShareLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
