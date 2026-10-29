"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Download,
  Layers,
  Sparkles,
  TableProperties,
  Users,
  X,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PROGRAMME_PDF_PATH = "/EmpowaHer_Programme%202026.pdf";
const PROSPECTUS_EMAIL_HREF =
  "mailto:info@empowaher.co.za?subject=EmpowaHer%20Prospectus%20Request";

export interface TrackDetail {
  id: number;
  number: string;
  name: string;
  image: string;
  accentColor: string;
  valueForParticipants: string;
  strategicValueForPartners: string;
}

const tracks: TrackDetail[] = [
  {
    id: 1,
    number: "01",
    name: "Entrepreneurship, Innovation and Funding",
    image: "/streams/Entrepreneurship.jpg",
    accentColor: "#0D4A5E",
    valueForParticipants:
      "Strengthens investment readiness and commercial capability, while connecting women entrepreneurs to capital, procurement, customers and markets.",
    strategicValueForPartners:
      "Builds a pipeline of women-owned enterprises for funding, supplier development, procurement and market-access initiatives.",
  },
  {
    id: 2,
    number: "02",
    name: "Digital Leadership, AI and Career Growth",
    image: "/streams/Digital-Transformation.jpg",
    accentColor: "#7B1FA0",
    valueForParticipants:
      "Develops practical AI capability, digital fluency, innovation, influence and readiness for the changing world of work.",
    strategicValueForPartners:
      "Positions partners at the forefront of digital inclusion and future skills, while connecting them with emerging talent and customers.",
  },
  {
    id: 3,
    number: "03",
    name: "Citizenship and Social Impact",
    image: "/streams/Social-Impact.jpg",
    accentColor: "#4A1942",
    valueForParticipants:
      "Strengthens ethical leadership, civic responsibility, social entrepreneurship, and the confidence to contribute to nation-building.",
    strategicValueForPartners:
      "Advances ESG, social cohesion and community-impact priorities through meaningful participant-led action.",
  },
  {
    id: 4,
    number: "04",
    name: "Personal Leadership and Career Transformation",
    image: "/streams/Strategic-Leadership.jpg",
    accentColor: "#ed027e",
    valueForParticipants:
      "Builds personal mastery, executive presence, workplace influence, career mobility and succession readiness.",
    strategicValueForPartners:
      "Supports talent attraction, retention, leadership development and the growth of a stronger succession pipeline.",
  },
  {
    id: 5,
    number: "05",
    name: "Personal Finance and Wealth Creation",
    image: "/streams/Financial-Acumen.jpg",
    accentColor: "#B01060",
    valueForParticipants:
      "Builds financial confidence across credit, taxation, saving, investing, property and intergenerational wealth.",
    strategicValueForPartners:
      "Creates opportunities to advance financial inclusion, deepen customer education, demonstrate product relevance and build long-term trust.",
  },
  {
    id: 6,
    number: "06",
    name: "Health, Wellness and Sustainable Performance",
    image: "/streams/People-Leadership.jpg",
    accentColor: "#3D0C6B",
    valueForParticipants:
      "Encourages preventive health, mental wellbeing, resilience and sustainable leadership performance.",
    strategicValueForPartners:
      "Connects workforce wellbeing, healthcare access and customer engagement with social-impact priorities.",
  },
  {
    id: 7,
    number: "07",
    name: "Rights, Relationships and Executive Parenting",
    image: "/streams/Communication.jpg",
    accentColor: "#ed027e",
    valueForParticipants:
      "Strengthens knowledge of rights, personal safety, family wellbeing and career continuity across life stages.",
    strategicValueForPartners:
      "Advances dignity, inclusion, employee wellbeing, family support and responsible-business priorities.",
  },
  {
    id: 8,
    number: "08",
    name: "Education and Executive Development",
    image: "/streams/Africa-Centric.jpg",
    accentColor: "#7B0D3C",
    valueForParticipants:
      "Connects participants to bursaries, qualifications, business schools, professional bodies, coaching and global exchanges.",
    strategicValueForPartners:
      "Creates education, recruitment and professional-development pipelines while strengthening institutional visibility and potential enrolment.",
  },
  {
    id: 9,
    number: "09",
    name: "Leadership, Governance and Board Readiness",
    image: "/streams/Board-Readiness.jpg",
    accentColor: "#C4185C",
    valueForParticipants:
      "Develops governance capability, financial fluency, fiduciary awareness, strategic judgement and boardroom confidence.",
    strategicValueForPartners:
      "Helps build a pipeline for succession, governance leadership, board observation and future board appointments.",
  },
];

const progressRows = [
  {
    number: "01",
    label: "Capability",
    value: "Leadership, digital, financial, governance and enterprise skills",
  },
  {
    number: "02",
    label: "Access",
    value:
      "Employers, funders, markets, business schools and professional networks",
  },
  {
    number: "03",
    label: "Opportunity",
    value: "Placements, procurement, capital, mentorship and board exposure",
  },
  {
    number: "04",
    label: "Progression",
    value: "Defined 90/100-day commitments and trackable advancement",
  },
];

export function LeadershipProgramme() {
  const [selectedTrackIndex, setSelectedTrackIndex] = useState<number | null>(
    null
  );
  const [viewMode, setViewMode] = useState<"cards" | "matrix">("cards");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }
    const heroImg = document.getElementById("leadership-hero-parallax-img");
    if (!heroImg) {
      return;
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.18;
      heroImg.style.transform = `translateY(${scrollY * speed}px)`;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle keyboard navigation when modal is open
  useEffect(() => {
    if (selectedTrackIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedTrackIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedTrackIndex((prev) =>
          prev !== null ? (prev === 0 ? tracks.length - 1 : prev - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedTrackIndex((prev) =>
          prev !== null ? (prev === tracks.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedTrackIndex]);

  const activeTrack =
    selectedTrackIndex !== null ? tracks[selectedTrackIndex] : null;

  return (
    <main
      id="top"
      className="min-h-screen bg-[#ffffff] font-sans text-[#3f3f3f] selection:bg-[#ed027e] selection:text-[#ffffff]"
    >
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col">
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Header Navigation */}
          <Header currentPath="/leadership-programme" />

          {/* Background Image with Ambient Overlay */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img
              id="leadership-hero-parallax-img"
              src="/feature-image11.jpg"
              alt="Senior African businesswoman leading a boardroom discussion"
              className="h-full w-full object-cover object-[59%_4rem] sm:object-[58%_4.5rem] will-change-transform"
              style={{
                transform: "translateY(0)",
                transformOrigin: "top center",
              }}
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20"
            aria-hidden="true"
          />

          {/* Hero Main Content */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-5 px-5 pb-10 sm:px-8 sm:pb-14 md:px-12 md:pb-16 lg:px-16 lg:pb-14">
            {/* Status Badge */}
            <div
              className="hero-reveal flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:px-4 sm:text-[0.6875rem]"
              style={{
                animationDelay: "0ms",
              }}
            >
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ed027e] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ed027e]" />
              </span>
              <span>Leadership Programme</span>
              <span className="mx-1 h-1 w-1 rounded-full bg-white/70 sm:mx-2" />
              <span>Summit 2026</span>
            </div>

            {/* Summit Overline */}
            <div
              className="hero-reveal flex flex-wrap items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/85 sm:text-xs lg:tracking-[0.2em]"
              style={{
                animationDelay: "60ms",
              }}
            >
              <span>EmpowaHer™ Leadership Programme</span>
              <span
                className="inline-block h-3 w-px bg-white/40 align-middle"
                aria-hidden="true"
              />
              <span className="rounded-full bg-[#ed027e] px-2.5 py-0.5 font-extrabold text-white">
                Nine Integrated Tracks
              </span>
            </div>

            {/* 3-Column Hero Layout */}
            <div className="grid w-full grid-cols-1 items-end gap-y-6 text-left lg:grid-cols-[2fr_1.2fr_1fr] lg:gap-x-12">
              <div
                className="hero-reveal flex flex-col border-white/15 lg:border-r lg:pr-8"
                style={{
                  animationDelay: "120ms",
                }}
              >
                <h1 className="font-heading text-[clamp(2.3rem,4.5vw,4.25rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white">
                  <span>NINE INTEGRATED</span>
                  <br />
                  <span className="text-[#ed027e]">LEADERSHIP</span>
                  <br />
                  <span>TRACKS</span>
                </h1>

                {/* Hero CTAs */}
                <div
                  className="hero-reveal mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start"
                  style={{
                    animationDelay: "300ms",
                  }}
                >
                  <a
                    href={PROGRAMME_PDF_PATH}
                    download="EmpowaHer_Programme 2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#ed027e]/90 hover:scale-[1.02] hover:shadow-xl sm:w-auto"
                  >
                    <span>Download Programme (PDF)</span>
                  </a>

                  <a
                    href={PROSPECTUS_EMAIL_HREF}
                    className="flex w-full items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:text-[#3f3f3f] hover:scale-[1.02] hover:shadow-lg sm:w-auto"
                  >
                    <span>Prospectus on Request</span>
                  </a>
                </div>
              </div>

              {/* Hero Subheading (Requested) */}
              <div
                className="hero-reveal border-white/15 lg:border-r lg:pr-8"
                style={{
                  animationDelay: "180ms",
                }}
              >
                <h2 className="font-heading text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.25] tracking-[-0.01em] text-white/90">
                  <span>
                    Developing the Whole Leader. Unlocking Measurable Opportunity.
                  </span>
                </h2>
              </div>

              {/* Hero Paragraph (Requested) */}
              <div
                className="hero-reveal"
                style={{
                  animationDelay: "240ms",
                }}
              >
                <p className="font-sans text-[0.875rem] font-normal leading-[1.65] text-white/75">
                  <span>
                    The future of women’s leadership depends on more than access to a seat at the table. It requires the skills, networks, capital, confidence, and opportunities to lead, build and thrive.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Leadership Tracks Section */}
      <section
        id="tracks"
        className="border-t-4 border-[#ed027e] bg-[#f9f9f9] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Section Heading & Updated Strategic Paragraphs */}
          <div className="reveal mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-black/10 pb-10">
            <div className="max-w-3xl">
              <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
                <span>01 — Leadership Tracks</span>
              </div>
              <h2 className="font-heading text-[clamp(2.35rem,4.5vw,4rem)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-[#11161F]">
                <span>The Full Development Journey</span>
              </h2>

              <div className="mt-5 space-y-3 font-sans text-[0.9375rem] sm:text-base leading-[1.7] text-[#3f3f3f]/85">
                <p>
                  EmpowaHer™ brings nine interconnected leadership tracks into one future-focused development journey. From entrepreneurship and artificial intelligence to financial wellbeing and board readiness, the programme equips emerging women leaders to turn insight into action and ambition into opportunity.
                </p>
                <p>
                  For strategic partners, each track offers a focused platform to champion relevant conversations, connect with emerging leaders and contribute to outcomes that matter to their organisations, customers and communities.
                </p>
              </div>
            </div>

            {/* View Switcher Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div className="inline-flex rounded-full bg-black/5 p-1 border border-black/10">
                <button
                  type="button"
                  onClick={() => setViewMode("cards")}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    viewMode === "cards"
                      ? "bg-[#11161F] text-white shadow-md"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>Card Grid</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("matrix")}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    viewMode === "matrix"
                      ? "bg-[#11161F] text-white shadow-md"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  <TableProperties className="h-3.5 w-3.5" />
                  <span>Partner &amp; Participant Matrix</span>
                </button>
              </div>
            </div>
          </div>

          {/* View Mode 1: Main Interactive Card Grid (Same Card Design + Click to Reveal Modal) */}
          {viewMode === "cards" ? (
            <div
              className="grid grid-cols-1 gap-6 pb-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
              aria-label="Leadership tracks card grid"
            >
              {tracks.map((track, i) => (
                <article
                  key={track.id}
                  onClick={() => setSelectedTrackIndex(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedTrackIndex(i);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-haspopup="dialog"
                  aria-label={`Track ${track.number}: ${track.name}. Click to explore participant and partner value.`}
                  className="reveal group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl p-7 shadow-lg border border-white/15 bg-black cursor-pointer will-change-transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl sm:min-h-[360px] sm:p-8 lg:min-h-[390px] lg:p-9 focus:outline-none focus:ring-2 focus:ring-[#ed027e]"
                >
                  {/* Background Image with Smooth Hover Zoom */}
                  <Image
                    src={track.image}
                    alt={track.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={82}
                    className="object-cover object-center will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Dark Gradient Ambient Overlay for Text Contrast */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 transition-opacity duration-500 group-hover:opacity-90"
                    aria-hidden="true"
                  />

                  {/* Radial Color Tint Overlay on Hover */}
                  <div
                    className="absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-45"
                    style={{
                      background: `radial-gradient(circle at top right, ${track.accentColor} 0%, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Top Interactive Accent Indicator */}
                  <div
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    style={{ backgroundColor: track.accentColor }}
                  />

                  {/* Track Badge & Indicator */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-black/50 px-3.5 py-1 font-heading text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md border border-white/20 shadow-md transition-colors duration-300 group-hover:bg-black/70">
                      Track {track.number}/{String(tracks.length).padStart(2, "0")}
                    </span>
                    <span
                      className="h-2 w-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-150 shadow-sm"
                      style={{ backgroundColor: track.accentColor }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Card Content & Interactive Reveal Prompt */}
                  <div className="relative z-10 mt-auto pt-6">
                    <h3 className="font-heading text-[clamp(1.25rem,2.2vw,1.75rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                      {track.name}
                    </h3>

                    {/* Reveal Cue Bar */}
                    <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/90 transition-colors group-hover:text-[#ed027e]">
                        <span>Explore Value &amp; Impact</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[0.625rem] font-mono font-medium text-white/70">
                        Participant &amp; Partner
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* View Mode 2: Comprehensive Strategic Matrix (All 9 Tracks Side-by-Side) */
            <div className="overflow-hidden rounded-2xl border border-black/15 bg-white shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-black/10 bg-[#0E1218] text-white font-heading text-xs font-black uppercase tracking-wider">
                      <th className="py-4 px-6 w-[28%]">Leadership Track</th>
                      <th className="py-4 px-6 w-[36%] border-l border-white/10">
                        <span className="inline-flex items-center gap-1.5 text-[#ed027e]">
                          <Users className="h-3.5 w-3.5" />
                          <span>Value for Participants</span>
                        </span>
                      </th>
                      <th className="py-4 px-6 w-[36%] border-l border-white/10">
                        <span className="inline-flex items-center gap-1.5 text-[#ff4da6]">
                          <Building2 className="h-3.5 w-3.5" />
                          <span>Strategic Value for Partners</span>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/10 text-xs sm:text-sm">
                    {tracks.map((track, idx) => (
                      <tr
                        key={track.id}
                        onClick={() => setSelectedTrackIndex(idx)}
                        className="group hover:bg-[#ed027e]/5 transition-colors cursor-pointer"
                      >
                        <td className="py-4 px-6 font-semibold text-[#11161F]">
                          <div className="flex items-start gap-2.5">
                            <span className="font-mono text-xs font-black text-[#ed027e] shrink-0 mt-0.5">
                              {track.number}.
                            </span>
                            <div>
                              <strong className="block font-heading uppercase text-sm sm:text-base leading-snug">
                                {track.name}
                              </strong>
                              <button
                                type="button"
                                className="mt-1 inline-flex items-center gap-1 text-[0.6875rem] font-bold uppercase tracking-wider text-[#ed027e] opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <span>Open modal view</span>
                                <ArrowUpRight className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 border-l border-black/10 text-[#3f3f3f]/90 leading-relaxed font-normal">
                          {track.valueForParticipants}
                        </td>
                        <td className="py-4 px-6 border-l border-black/10 text-[#3f3f3f]/90 leading-relaxed font-normal">
                          {track.strategicValueForPartners}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Track Value Modal (Deep-Dive for Participants & Strategic Partners) */}
      {activeTrack && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-track-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md transition-opacity"
          onClick={() => setSelectedTrackIndex(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-[#0E1218] text-white shadow-2xl transition-all"
          >
            {/* Top Brand Accent Border */}
            <div
              className="absolute inset-x-0 top-0 h-1.5"
              style={{
                background: `linear-gradient(to right, ${activeTrack.accentColor}, #ed027e)`,
              }}
            />

            {/* Ambient Background Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ backgroundColor: activeTrack.accentColor || "#ed027e" }}
            />

            {/* Modal Header */}
            <div className="relative z-10 flex items-start justify-between gap-4 border-b border-white/10 p-6 sm:p-8 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[0.6875rem] font-bold uppercase tracking-widest text-[#ed027e]">
                    Track {activeTrack.number} of {String(tracks.length).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  id="modal-track-title"
                  className="font-heading text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight text-white"
                >
                  {activeTrack.name}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedTrackIndex(null)}
                aria-label="Close track details"
                className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body: Participant & Partner Value Side-by-Side */}
            <div className="relative z-10 p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* 1. Value for Participants */}
                <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:border-[#ed027e]/50">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ed027e]/20 text-[#ed027e]">
                        <Users className="h-4 w-4" />
                      </div>
                      <span className="text-[0.6875rem] font-heading font-black uppercase tracking-[0.2em] text-[#ed027e]">
                        Value for Participants
                      </span>
                    </div>

                    <p className="text-sm sm:text-[0.9375rem] leading-relaxed text-white/90 font-medium">
                      {activeTrack.valueForParticipants}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[0.6875rem] font-mono text-white/60">
                    <Sparkles className="h-3 w-3 text-[#ed027e]" />
                    <span>Empowerment &amp; Capability Growth</span>
                  </div>
                </div>

                {/* 2. Strategic Value for Partners */}
                <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:border-[#ed027e]/50">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <span className="text-[0.6875rem] font-heading font-black uppercase tracking-[0.2em] text-white/80">
                        Strategic Value for Partners
                      </span>
                    </div>

                    <p className="text-sm sm:text-[0.9375rem] leading-relaxed text-white/90 font-medium">
                      {activeTrack.strategicValueForPartners}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[0.6875rem] font-mono text-white/60">
                    <Building2 className="h-3 w-3 text-[#ed027e]" />
                    <span>Institutional Impact &amp; Pipeline Depth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Navigation Footer */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-black/40 px-6 sm:px-8 py-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedTrackIndex((prev) =>
                      prev !== null
                        ? prev === 0
                          ? tracks.length - 1
                          : prev - 1
                        : null
                    )
                  }
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-mono font-semibold text-white/80 transition-all hover:border-[#ed027e] hover:text-white"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedTrackIndex((prev) =>
                      prev !== null
                        ? prev === tracks.length - 1
                          ? 0
                          : prev + 1
                        : null
                    )
                  }
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-mono font-semibold text-white/80 transition-all hover:border-[#ed027e] hover:text-white"
                >
                  <span>Next</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTrackIndex(null)}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono text-white/70 transition-all hover:border-white/40 hover:text-white"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Strategic Track Partnership Callout: Partnership with Purpose */}
      <section
        id="partnership-with-purpose"
        className="relative border-y-4 border-[#ed027e] bg-gradient-to-b from-[#11161F] via-[#0E1218] to-[#0A0D12] px-5 py-18 text-white sm:px-8 sm:py-22 lg:px-16 lg:py-26 overflow-hidden"
      >
        {/* Ambient Subtle Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#ed027e]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="reveal space-y-8">
            {/* Overline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/15 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
              <Sparkles className="h-3 w-3" />
              <span>PARTNERSHIP WITH PURPOSE</span>
            </div>

            {/* Main Heading & Lead */}
            <div className="space-y-5">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.05] tracking-tight text-white">
                Partnership with purpose.{" "}
                <span className="text-[#ed027e]">Impact with commercial value.</span>
              </h2>

              <p className="font-sans text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-white/95">
                EmpowaHer offers partners an opportunity to connect their investment to a leadership challenge: building a stronger pipeline of women equipped to lead organisations, grow enterprises and shape the future.
              </p>

              <p className="font-sans text-sm sm:text-base leading-relaxed text-white/80">
                Through a strategically aligned track, partners can contribute expertise, engage emerging leaders, strengthen brand visibility and open pathways to talent, customers, suppliers and communities. Together, we can agree on relevant measures of success, from participant engagement and learning outcomes to referrals, connections and opportunities created.
              </p>
            </div>

            {/* Callout Card: Invest in the leaders who will shape what comes next */}
            <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.04] p-7 sm:p-9 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ed027e] via-[#ff4da6] to-[#ed027e]"
              />

              <div className="space-y-4">
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white">
                  Invest in the leaders who will shape what comes next.
                </h3>

                <p className="font-sans text-sm sm:text-base leading-relaxed text-white/85">
                  We invite corporations, public institutions, educational bodies and development partners to partner with EmpowaHer, champion a leadership track and help turn women’s potential into lasting progress.
                </p>

                <p className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-[#ed027e]">
                  The opportunity is clear. The impact can be shared. The time to act is now.
                </p>
              </div>

              {/* Action Links & Official Branding Sign-off */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 pt-6">
                <div>
                  <strong className="block font-heading text-base sm:text-lg font-black uppercase tracking-wider text-white">
                    EmpowaHer™ Leadership Summit 2026
                  </strong>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ed027e]">
                    The Future Is Female™
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/partnerships"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ed027e]/25 transition-all hover:bg-[#ff1a95] hover:scale-[1.02]"
                  >
                    <span>Explore Partnerships</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — The Framework Section */}
      <section
        id="framework"
        className="w-full bg-[#0D0D0D] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="reveal mb-12 max-w-2xl">
            <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
              <span>02 — The Framework</span>
            </div>
            <h2 className="font-heading text-[clamp(2.5rem,4.5vw,4.25rem)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-white">
              <span>An Integrated Progression Model</span>
            </h2>
            <p className="mt-3 font-sans text-[0.875rem] font-normal leading-[1.65] text-white/70">
              <span>
                From capability building to board exposure, each phase connects directly to measurable progression.
              </span>
            </p>
          </div>

          <div className="border-t border-white/10">
            {progressRows.map((row) => (
              <article
                key={row.number}
                className="reveal group relative grid cursor-default grid-cols-[3.5rem_1fr] items-center gap-4 overflow-hidden border-b border-white/10 py-7 transition-[background-color,padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.04] hover:pl-5 sm:grid-cols-[5rem_10rem_1fr] sm:gap-8 sm:py-9 sm:hover:pl-7"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 bg-[#ed027e] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

                <span
                  className="origin-left font-heading text-[3.5rem] font-black leading-none tracking-[-0.02em] text-white/10 transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[#ed027e]/30 group-hover:scale-105 sm:text-[4.5rem]"
                  aria-hidden="true"
                >
                  {row.number}
                </span>

                <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#ed027e] transition-[color,letter-spacing] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:tracking-[0.22em] group-hover:text-white sm:text-sm">
                  {row.label}
                </h3>

                <p className="col-span-2 font-sans text-[0.9375rem] font-medium leading-[1.55] text-white/80 transition-colors duration-300 group-hover:text-white sm:col-span-1 sm:text-base">
                  {row.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Site Footer with Contact & Legal */}
      <Footer />
    </main>
  );
}
