"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Flame,
  Maximize2,
  Pause,
  Play,
  Radio,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

export interface PromoVideoItem {
  id: string;
  badge: string;
  category: string;
  title: string;
  subtitle: string;
  speaker: string;
  videoUrl: string;
}

export interface CampaignPosterItem {
  id: string;
  station: string;
  badge: string;
  showTitle: string;
  guest: string;
  imageSrc: string;
}

export const campaignPostersList: CampaignPosterItem[] = [
  {
    id: "poster-radio-2000",
    station: "RADIO 2000",
    badge: "The Big Breakfast Show",
    showTitle: "BigStories: EmpowaWorx & EmpowaWomen Initiatives",
    guest: "Simphiwe Masiza • Founder & Group CEO, EmpowaWorx",
    imageSrc: "/radio-2000.jpg",
  },
  {
    id: "poster-sa-fm",
    station: "SAFM",
    badge: "The Full Circle Media Interview",
    showTitle: "Accelerating Africa’s Next Chapter of Women Leaders",
    guest: "Simphiwe Masiza • Founder & Group CEO, EmpowaWorx",
    imageSrc: "/sa-fm.jpg",
  },
  {
    id: "poster-lesedi-fm",
    station: "LESEDI FM",
    badge: "Rea Thella Drive Show",
    showTitle: "National Broadcast Interview & Leadership Archive",
    guest: "Khanyi Mlambo • MD, Lighthouse Leadership Advisory",
    imageSrc: "/lesedi-fm.jpg",
  },
];

const infinitePosters: CampaignPosterItem[] = [
  ...campaignPostersList,
  ...campaignPostersList,
  ...campaignPostersList,
  ...campaignPostersList,
];

export const promotionalVideosList: PromoVideoItem[] = [
  {
    id: "promo-video-1",
    badge: "Keynote Teaser",
    category: "Executive Vision",
    title: "THE FUTURE OF WOMEN’S LEADERSHIP IS A CONVERSATION WE CANNOT AFFORD TO DELAY.",
    subtitle: "EmpowaWorx Founder and Group CEO Simphiwe Masiza unpacks why Africa’s future is female.",
    speaker: "Simphiwe Masiza • Founder & Group CEO, EmpowaWorx",
    videoUrl:
      "https://cms.empowaher.co.za/wp-content/uploads/2026/10/THE-FUTURE-OF-WOMENS-LEADERSHIP-IS-A-CONVERSATION-WE-CANNOT-AFFORD-TO-DELAY.-%F0%9F%A9%B7Yesterday-Simph-1.mp4",
  },
  {
    id: "promo-video-2",
    badge: "Faculty Spotlight",
    category: "Leadership Lessons",
    title: "TEN COMRADES FINISHES. DECADES OF LEADERSHIP. LESSONS WORTH PASSING ON.",
    subtitle: "Sis Khanyi Mlambo on perseverance, boardroom resilience, and preparing the next generation.",
    speaker: "Khanyi Mlambo • MD, Lighthouse Leadership Advisory",
    videoUrl:
      "https://cms.empowaher.co.za/wp-content/uploads/2026/10/TEN-COMRADES-FINISHES.-DECADES-OF-LEADERSHIP.-LESSONS-WORTH-PASSING-ON.-%F0%9F%92%97%F0%9F%8E%99%EF%B8%8F@siskhanyimlambo-kn.mp4",
  },
  {
    id: "promo-video-3",
    badge: "Studio Buzz",
    category: "Radio 2000 BTS",
    title: "Earlier today, EmpowaWorx Founder and Group CEO @simphiwemasiza joined DJ Sbu on Radio 2000",
    subtitle: "High-energy behind-the-scenes moments from the live national broadcast on The Big Breakfast Show.",
    speaker: "Simphiwe Masiza with DJ Sbu • Radio 2000",
    videoUrl:
      "https://cms.empowaher.co.za/wp-content/uploads/2026/10/Earlier-today-EmpowaWorx-Founder-and-Group-CEO-@simphiwemasiza-joined-DJ-Sbu-on-Radio-2000s-Bi.mp4",
  },
  {
    id: "promo-video-4",
    badge: "Television Buzz",
    category: "SABC 1 Trendz Live",
    title: "A powerful conversation on Trendz Live on SABC 1 as Simphiwe Masiza shared the vision.",
    subtitle: "Prime-time national television interview sharing the transformative vision for 200 emerging women leaders.",
    speaker: "Simphiwe Masiza • Trendz Live on SABC 1",
    videoUrl:
      "https://cms.empowaher.co.za/wp-content/uploads/2026/10/A-powerful-conversation-on-Trendz-Live-on-SABC-1-as-EmpowaWorx-CEO-Simphiwe-Masiza-shared-the-v.mp4",
  },
];

export function PromotionalVideos() {
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [modalVideo, setModalVideo] = useState<PromoVideoItem | null>(null);
  const [selectedPoster, setSelectedPoster] = useState<CampaignPosterItem | null>(null);
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // Close modals with ESC key and prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalVideo(null);
        setSelectedPoster(null);
      }
    };
    if (modalVideo || selectedPoster) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalVideo, selectedPoster]);

  const togglePlay = (id: string) => {
    const currentVideo = videoRefs.current[id];
    if (!currentVideo) return;

    if (activePlayingId === id) {
      currentVideo.pause();
      setActivePlayingId(null);
    } else {
      // Pause any currently playing video
      if (activePlayingId && videoRefs.current[activePlayingId]) {
        videoRefs.current[activePlayingId]?.pause();
      }
      currentVideo.muted = isMuted;
      currentVideo
        .play()
        .then(() => setActivePlayingId(id))
        .catch(() => setActivePlayingId(null));
    }
  };

  const handleTimeUpdate = (id: string) => {
    const video = videoRefs.current[id];
    if (video && video.duration) {
      const progress = (video.currentTime / video.duration) * 100;
      setProgressMap((prev) => ({ ...prev, [id]: progress }));
    }
  };

  const handleVideoEnded = (id: string) => {
    if (activePlayingId === id) {
      setActivePlayingId(null);
    }
    setProgressMap((prev) => ({ ...prev, [id]: 0 }));
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    Object.values(videoRefs.current).forEach((v) => {
      if (v) v.muted = newMuted;
    });
  };

  const openModal = (e: React.MouseEvent, item: PromoVideoItem) => {
    e.stopPropagation();
    // Pause any inline playing video
    if (activePlayingId && videoRefs.current[activePlayingId]) {
      videoRefs.current[activePlayingId]?.pause();
      setActivePlayingId(null);
    }
    setModalVideo(item);
  };

  return (
    <section
      id="promotional-videos"
      className="relative border-t-[6px] border-[#ed027e] bg-[#0A0D12] py-16 sm:py-20 lg:py-24 text-white overflow-hidden"
      aria-labelledby="promotional-videos-heading"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-0 h-96 w-96 rounded-full bg-[#ed027e]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-[#ed027e]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 items-end gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
              <Flame className="h-3.5 w-3.5 animate-pulse text-[#ed027e]" />
              <span>THE COUNTDOWN IS ON • EVENT BUZZ &amp; TEASERS</span>
            </div>
            <h2
              id="promotional-videos-heading"
              className="font-heading max-w-[15ch] text-[clamp(2.5rem,5.5vw,4.75rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-white [text-wrap:balance]"
            >
              <span>Feel the</span>
              <br />
              <span className="text-[#ed027e]">Momentum.</span>
            </h2>
            <p className="mt-4 max-w-[56ch] font-sans text-sm sm:text-base leading-relaxed text-white/75">
              Watch the latest promotional reels, studio dialogues, and behind-the-scenes moments building excitement for the EmpowaHer™ Leadership Summit 2026.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/60">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
                <Sparkles className="h-3 w-3 text-[#ed027e]" />
                <span>4 Exclusive Event Reels</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
                <span>HD Broadcast Masters</span>
              </span>
            </div>

            <Link
              href="/media"
              id="promo-videos-media-hub-link"
              className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
            >
              <span>Visit Full Media Hub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Video Reels Grid */}
        <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {promotionalVideosList.map((video) => {
            const isPlaying = activePlayingId === video.id;
            const progress = progressMap[video.id] || 0;

            return (
              <article
                key={video.id}
                id={`promo-card-${video.id}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#12161E] shadow-2xl transition-all duration-300 hover:border-[#ed027e]/60 hover:shadow-[#ed027e]/15"
              >
                {/* Smartphone Reel Video Container */}
                <div
                  className="relative aspect-[9/16] w-full overflow-hidden bg-black cursor-pointer"
                  onClick={() => togglePlay(video.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[video.id] = el;
                    }}
                    src={video.videoUrl}
                    preload="metadata"
                    playsInline
                    loop={false}
                    muted={isMuted}
                    onTimeUpdate={() => handleTimeUpdate(video.id)}
                    onEnded={() => handleVideoEnded(video.id)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Gradient Vignette Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/60 pointer-events-none" />

                  {/* Top Live Progress Bar (Reel Style) */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-white/20">
                    <div
                      className="h-full bg-[#ed027e] transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Top Overlay Controls & Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md border border-[#ed027e]/40 px-2.5 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ed027e]">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-[#ed027e] animate-ping" />
                      <span>{video.badge}</span>
                    </span>

                    <div className="flex items-center gap-1.5">
                      {/* Mute Toggle */}
                      <button
                        type="button"
                        onClick={toggleMute}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:border-[#ed027e] transition-colors"
                        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                      >
                        {isMuted ? (
                          <VolumeX className="h-3.5 w-3.5" />
                        ) : (
                          <Volume2 className="h-3.5 w-3.5 text-[#ed027e]" />
                        )}
                      </button>

                      {/* Enlarge / Fullscreen Modal */}
                      <button
                        type="button"
                        onClick={(e) => openModal(e, video)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:border-[#ed027e] transition-colors"
                        aria-label="Watch video in full modal"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Center Floating Play / Pause Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-2xl shadow-[#ed027e]/60 transition-all duration-300 ${
                        isPlaying
                          ? "opacity-0 group-hover:opacity-85 scale-90"
                          : "opacity-100 scale-100 group-hover:scale-110"
                      }`}
                    >
                      {!isPlaying && (
                        <span className="absolute -inset-2 rounded-full border border-[#ed027e]/60 animate-ping opacity-30" />
                      )}
                      {isPlaying ? (
                        <Pause className="h-6 w-6 fill-current" />
                      ) : (
                        <Play className="h-6 w-6 fill-current translate-x-0.5" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Video Reel Details Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/85 to-transparent z-10">
                    <span className="text-[0.625rem] font-mono uppercase tracking-widest text-[#ed027e]">
                      {video.category}
                    </span>

                    <h3 className="font-heading mt-1 text-sm sm:text-base font-black uppercase leading-snug tracking-tight text-white drop-shadow-md line-clamp-2">
                      {video.title}
                    </h3>

                    <p className="mt-1.5 text-[0.6875rem] text-white/70 line-clamp-1">
                      {video.speaker}
                    </p>

                    <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5">
                      <span className="text-[0.625rem] font-bold uppercase tracking-wider text-white/60">
                        {isPlaying ? "Playing Video" : "Tap to Play"}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => openModal(e, video)}
                        className="inline-flex items-center gap-1 text-[0.625rem] font-bold uppercase tracking-wider text-[#ed027e] hover:underline"
                      >
                        <span>Full Reel</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Full-Viewport Scrolling Broadcast Campaign Posters */}
      <div className="mt-16 sm:mt-20 border-t border-white/10 pt-12 sm:pt-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
              <Radio className="h-3.5 w-3.5 text-[#ed027e]" />
              <span>OFFICIAL BROADCAST &amp; MEDIA INTERVIEWS</span>
            </div>
            <h3 className="font-heading mt-2 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
              Who will lead Africa’s next chapter? <span className="text-[#ed027e]">She will.</span>
            </h3>
            <p className="mt-2 max-w-[62ch] text-xs sm:text-sm leading-relaxed text-white/70">
              Official national radio broadcast campaign posters featured across SABC Radio 2000, SAfm, and Lesedi FM.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-white/50">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
              <Maximize2 className="h-3 w-3 text-[#ed027e]" />
              <span>Hover to pause • Click to expand flyer</span>
            </span>
          </div>
        </div>

        {/* Viewport Marquee Track */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Subtle Side Fade Vignettes */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#0A0D12] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#0A0D12] to-transparent z-10" />

          <div className="animate-marquee-scroll flex gap-6 sm:gap-8 px-4">
            {infinitePosters.map((poster, index) => (
              <div
                key={`${poster.id}-${index}`}
                onClick={() => setSelectedPoster(poster)}
                className="group relative flex-shrink-0 w-64 sm:w-72 md:w-80 cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#12161E] shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-[#ed027e]/80 hover:shadow-[#ed027e]/20"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={poster.imageSrc}
                    alt={`${poster.station} • ${poster.showTitle}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent pointer-events-none" />

                  {/* Top Station Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#ed027e]/40 px-2.5 py-1 text-[0.625rem] font-black uppercase tracking-wider text-[#ed027e]">
                    <Radio className="h-3 w-3" />
                    <span>{poster.station}</span>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/85 to-transparent flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[0.625rem] font-mono uppercase tracking-widest text-[#ed027e]">
                        {poster.badge}
                      </p>
                      <h4 className="font-heading mt-0.5 text-xs sm:text-sm font-bold uppercase text-white line-clamp-1">
                        {poster.showTitle}
                      </h4>
                      <p className="mt-0.5 text-[0.6875rem] text-white/70 line-clamp-1">
                        {poster.guest}
                      </p>
                    </div>
                    <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-black/75 border border-white/20 text-white/80 group-hover:bg-[#ed027e] group-hover:text-white group-hover:border-[#ed027e] transition-colors">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Reel Cinema Modal */}
      {modalVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setModalVideo(null)}
        >
          <div
            className="relative max-w-md w-full max-h-[92vh] overflow-hidden rounded-3xl border border-white/20 bg-[#12161E] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#151922]">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[#ed027e]" />
                <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-white line-clamp-1">
                  {modalVideo.badge} • {modalVideo.category}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setModalVideo(null)}
                className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close video player"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Video Element */}
            <div className="relative aspect-[9/16] w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                src={modalVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="p-4 bg-[#151921] border-t border-white/10">
              <h4 className="font-heading text-sm font-black uppercase text-white leading-snug">
                {modalVideo.title}
              </h4>
              <p className="mt-1 text-xs text-white/70">
                {modalVideo.subtitle}
              </p>
              <p className="mt-2 text-[0.6875rem] font-semibold text-[#ed027e]">
                {modalVideo.speaker}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Selected Campaign Poster */}
      {selectedPoster && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="relative max-w-lg w-full max-h-[92vh] overflow-hidden rounded-2xl border border-white/20 bg-[#12161E] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#151922]">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[#ed027e]" />
                <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-white line-clamp-1">
                  {selectedPoster.station} • {selectedPoster.badge}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPoster(null)}
                className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close flyer preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Poster Image */}
            <div className="relative p-4 flex items-center justify-center max-h-[75vh] overflow-y-auto bg-black/70">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedPoster.imageSrc}
                alt={`${selectedPoster.station} • ${selectedPoster.showTitle}`}
                className="h-auto max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="p-4 bg-[#151921] border-t border-white/10">
              <h4 className="font-heading text-sm font-black uppercase text-white leading-snug">
                {selectedPoster.showTitle}
              </h4>
              <p className="mt-1 text-xs text-[#ed027e] font-semibold">
                {selectedPoster.guest}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
