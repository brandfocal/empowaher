"use client";

import { useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  FileCheck,
  Send,
  Upload,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=85";

const heroSteps = [
  { id: "nominee-info", number: 1, label: "Nominee Info", status: "completed" },
  { id: "leadership-track", number: 2, label: "Leadership Track", status: "active" },
  { id: "impact-vision", number: 3, label: "Impact & Vision", status: "upcoming" },
  { id: "endorsement", number: 4, label: "Endorsement", status: "upcoming" },
  { id: "review-submit", number: 5, label: "Review & Submit", status: "upcoming" },
] as const;

const formSections = [
  { id: "section-1", number: 1, title: "Nominator Information" },
  { id: "section-2", number: 2, title: "Nominee Information" },
  { id: "section-3", number: 3, title: "Leadership Case" },
  { id: "section-4", number: 4, title: "Potential Assessment" },
  { id: "section-5", number: 5, title: "Programme Alignment" },
  { id: "section-6", number: 6, title: "Attendance & Commitment" },
  { id: "section-7", number: 7, title: "Mentorship" },
  { id: "section-8", number: 8, title: "Reference & Verification" },
  { id: "section-9", number: 9, title: "Nominator Declaration" },
  { id: "section-10", number: 10, title: "Nominee Acceptance" },
];

const organisationTypes = [
  "Corporate",
  "Government & Public Sector",
  "University / Academia",
  "Professional Association",
  "Philanthropic Foundation",
  "Civil Society / NGO",
  "Ecosystem Builder",
  "Other",
];

const careerStages = [
  "Graduate & Young Achiever",
  "Emerging Professional",
  "Technical Specialist",
  "High-Potential Manager",
  "Managing Executive",
  "Young C-Suite Executive",
  "Venture Entrepreneur",
  "Social Impact Leader",
  "Aspiring Board Member",
  "Youth Civic Leader",
];

const leadershipQualities = [
  "Strategic Thinking",
  "Integrity & Governance",
  "Innovation & Agility",
  "Commercial Acumen",
  "Executive Communication",
  "Cross-Sector Collaboration",
  "Moral Courage",
  "Community Impact",
  "People Leadership",
  "Entrepreneurial Drive",
  "Board Readiness",
  "Continuous Learning",
];

const assessmentAttributes = [
  "Acts with integrity, self-awareness and personal accountability",
  "Takes proactive initiative and executes through completion",
  "Delivers verifiable, measurable professional impact",
  "Thinks strategically and commercially beyond her immediate role",
  "Communicates with clarity, authority and persuasive influence",
  "Collaborates effectively across diverse teams and generations",
  "Demonstrates robust commercial and organizational awareness",
  "Learns rapidly, welcomes feedback and adapts with agility",
  "Navigates ambiguity, complexity and change constructively",
  "Actively creates pathways and mentorship for other young women",
  "Demonstrates clear executive, entrepreneurial or board potential",
  "Can represent her organization and EmpowaHer™ with distinction",
];

const programmeStreams = [
  "Strategic Leadership & Executive Presence",
  "Financial Acumen & Business Literacy",
  "Innovation & Digital Transformation",
  "People Leadership & Organisational Culture",
  "Stakeholder Engagement & Communication",
  "Entrepreneurship & Venture Development",
  "Social Impact & Sustainable Development",
  "Africa-Centric Strategy & Global Markets",
  "Leadership, Governance & Board Readiness",
];

const nominatorDeclarations = [
  "I am authorized to submit this formal endorsement on behalf of my organization.",
  "The information provided in this nomination is true, accurate and complete.",
  "I have discussed this nomination and programme commitment with the nominee.",
  "The nominee meets the age requirement (18–35) and all eligibility criteria.",
  "I consent to EmpowaWorx contacting me to verify and discuss this endorsement.",
  "I understand that summit places are limited and completion does not guarantee selection.",
  "I understand that all selection decisions made by EmpowaWorx are final.",
  "I consent to the nominee's details being used for confidential assessment.",
  "Our organization will support the nominee's full attendance and post-summit initiatives.",
  "I accept the EmpowaHer™ programme terms and privacy policy.",
];

const nomineeAcceptance = [
  "I accept this nomination and wish to be considered for the EmpowaHer™ Summit 2026.",
  "I confirm that all personal and professional details provided are accurate.",
  "I meet the age requirement of 18–35 on 29 October 2026.",
  "I understand that EmpowaHer™ is an invitation-only leadership accelerator.",
  "I commit to attending the complete three-day programme (29–31 Oct 2026) in Johannesburg.",
  "I will actively participate in all tracks, labs, and the 100-day post-summit commitment.",
  "I consent to participating in impact tracking and mentorship activities.",
  "I understand that selection panel decisions are final.",
  "I accept the EmpowaHer™ terms and conditions.",
];

const ratingScale = [1, 2, 3, 4, 5];

type ToggleMap = Record<string, boolean>;

const inputClass =
  "min-h-12 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white/90 outline-none transition-all duration-200 placeholder:text-white/30 focus:border-[#ed027e] focus:bg-white/[0.07] focus:ring-1 focus:ring-[#ed027e]/50";
const textareaClass =
  "min-h-[110px] w-full resize-y rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white/90 outline-none transition-all duration-200 placeholder:text-white/30 focus:border-[#ed027e] focus:bg-white/[0.07] focus:ring-1 focus:ring-[#ed027e]/50";

interface FormFieldProps {
  label: string;
  required?: boolean;
  children?: ReactNode;
  hint?: string;
}

function FormField({ label, required = false, children, hint }: FormFieldProps) {
  return (
    <label className="block text-left">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/60">
        {label}
        {required && <span className="ml-1 text-[#ed027e]">*</span>}
      </span>
      {children || <input className={inputClass} placeholder={`Enter ${label.toLowerCase()}`} />}
      {hint && <span className="mt-1 block text-[0.75rem] text-white/40">{hint}</span>}
    </label>
  );
}

function FormTextArea({
  label,
  max,
  required = true,
}: {
  label: string;
  max: number;
  required?: boolean;
}) {
  return (
    <FormField label={`${label} (max ${max} words)`} required={required}>
      <textarea rows={4} className={textareaClass} placeholder="Provide your detailed response..." />
    </FormField>
  );
}

function ToggleRow({
  label,
  toggles,
  setToggles,
}: {
  label: string;
  toggles: ToggleMap;
  setToggles: Dispatch<SetStateAction<ToggleMap>>;
}) {
  const isYes = toggles[label] === true;
  return (
    <div className="flex flex-col items-start justify-between gap-3 border-b border-white/10 py-4.5 sm:flex-row sm:items-center sm:gap-6">
      <span
        className={`text-xs font-medium leading-relaxed transition-colors sm:text-sm ${
          isYes ? "text-white" : "text-white/70"
        }`}
      >
        {label}
      </span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() =>
            setToggles((curr) => ({
              ...curr,
              [label]: true,
            }))
          }
          className={`min-h-9 min-w-16 rounded-full px-4 text-xs font-bold uppercase tracking-wider transition-all ${
            isYes
              ? "bg-[#ed027e] text-white shadow-md"
              : "border border-white/20 bg-white/5 text-white/60 hover:bg-white/10"
          }`}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() =>
            setToggles((curr) => ({
              ...curr,
              [label]: false,
            }))
          }
          className={`min-h-9 min-w-16 rounded-full px-4 text-xs font-bold uppercase tracking-wider transition-all ${
            toggles[label] === false
              ? "bg-[#3f3f3f] text-white shadow-md"
              : "border border-white/20 bg-white/5 text-white/60 hover:bg-white/10"
          }`}
        >
          No
        </button>
      </div>
    </div>
  );
}

export function NominationForm() {
  const [activeSection, setActiveSection] = useState("section-1");
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [toggles, setToggles] = useState<ToggleMap>({
    "I confirm the nominee can attend all three days.": true,
    "I understand partial attendance may affect selection.": true,
    "I will support post-programme participation.": true,
    "I will share relevant learning internally.": true,
    "I will support impact tracking after the Summit.": true,
    "Would the nominee welcome a mentor introduction?": true,
    "Can your organisation support a mentoring relationship?": true,
    "May we contact this reference?": true,
    "May we verify the information provided?": true,
  });
  const [selectedOrgType, setSelectedOrgType] = useState<string>("");
  const [selectedCareer, setSelectedCareer] = useState<string>("");
  const [selectedQuality, setSelectedQuality] = useState<string>("");
  const [selectedStreams, setSelectedStreams] = useState<string[]>([]);
  const [nominatorChecks, setNominatorChecks] = useState<Record<string, boolean>>({});
  const [nomineeChecks, setNomineeChecks] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }
    const heroImg = document.getElementById("nomination-hero-parallax-img");
    if (!heroImg) {
      return;
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.3;
      heroImg.style.transform = `translateY(${scrollY * speed}px) scale(1.12)`;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleStream = (stream: string) => {
    setSelectedStreams((prev) => {
      if (prev.includes(stream)) {
        return prev.filter((s) => s !== stream);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), stream];
      }
      return [...prev, stream];
    });
  };

  const toggleNominatorCheck = (statement: string) => {
    setNominatorChecks((prev) => ({
      ...prev,
      [statement]: !prev[statement],
    }));
  };

  const toggleNomineeCheck = (statement: string) => {
    setNomineeChecks((prev) => ({
      ...prev,
      [statement]: !prev[statement],
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      id="top"
      className="min-h-screen bg-[#0D0D0D] font-sans text-white selection:bg-[#ed027e] selection:text-[#ffffff]"
    >
      {/* Top Header */}
      <Header currentPath="/nomination-form" />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <img
            id="nomination-hero-parallax-img"
            src={HERO_IMAGE_URL}
            alt="African business woman executive in corporate boardroom"
            className="h-full w-full scale-[1.15] object-cover object-center will-change-transform"
            style={{
              transform: "translateY(0) scale(1.12)",
            }}
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/65 to-black/35"
          aria-hidden="true"
        />

        {/* Hero Main Content */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-5 px-5 pb-8 sm:px-8 sm:pb-12 md:px-12 md:pb-14 lg:px-16 lg:pb-12">
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
            <span>Nomination Portal</span>
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
              Official Endorsement Form
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
                <span>NOMINATE A</span>
                <br />
                <span className="text-[#ed027e]">LEADER FOR</span>
                <br />
                <span>EMPOWAHER™</span>
              </h1>

              {/* Hero CTAs */}
              <div
                className="hero-reveal mt-7 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start"
                style={{
                  animationDelay: "300ms",
                }}
              >
                <a
                  href="#nomination-form"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#ed027e]/90 hover:scale-[1.02] hover:shadow-xl sm:w-auto"
                >
                  <span>Start Nomination</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="/selection-criteria"
                  className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:text-[#3f3f3f] hover:scale-[1.02] hover:shadow-lg sm:w-auto"
                >
                  <span>View Criteria</span>
                </a>
              </div>
            </div>

            <div
              className="hero-reveal border-white/15 lg:border-r lg:pr-8"
              style={{
                animationDelay: "180ms",
              }}
            >
              <h2 className="font-heading text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.25] tracking-[-0.01em] text-white/90">
                <span>
                  Submit a Formal Endorsement for the 2026 EmpowaHer™ Leadership Summit
                </span>
              </h2>
            </div>

            <div
              className="hero-reveal"
              style={{
                animationDelay: "240ms",
              }}
            >
              <p className="font-sans text-[0.875rem] font-normal leading-[1.65] text-white/70">
                <span>
                  Candidates must be nominated by an authorized senior leader. Self-nominations are not accepted. Places are strictly limited to 200 selected women.
                </span>
              </p>
            </div>
          </div>

          {/* Stepper Progress Indicator */}
          <div className="hero-reveal mx-auto mt-4 w-full border-t border-white/15 pt-5 sm:pt-6">
            <ol className="flex items-center justify-between gap-2 overflow-x-auto pb-1 sm:gap-4">
              {heroSteps.map((step) => {
                const isCompleted = step.status === "completed";
                const isActive = step.status === "active";
                return (
                  <li key={step.id} className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        isActive
                          ? "bg-[#ed027e] text-white shadow-md ring-2 ring-[#ed027e]/40"
                          : isCompleted
                          ? "bg-white text-[#0D0D0D]"
                          : "border border-white/20 bg-white/5 text-white/40"
                      }`}
                    >
                      {isCompleted ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : step.number}
                    </span>
                    <span
                      className={`truncate text-[0.6875rem] font-bold uppercase tracking-wider sm:text-xs ${
                        isActive ? "text-white" : isCompleted ? "text-white/80" : "text-white/40"
                      }`}
                    >
                      {step.label}
                    </span>
                    {step.id !== "review-submit" && (
                      <span className="hidden h-px flex-1 bg-white/20 md:block" aria-hidden="true" />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Advisory Notice Banner */}
      <aside className="border-y border-white/10 bg-[#ed027e]/10 px-5 py-5 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-start gap-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#ed027e]" />
          <p className="font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
            <strong>Important Notice:</strong> EmpowaHer™ is an invitation-led accelerator. Completion of this form constitutes a formal nomination and does not guarantee selection. The independent selection panel&apos;s decisions are final.
          </p>
        </div>
      </aside>

      {/* Form Workspace Section */}
      <div id="nomination-form" className="w-full bg-[#0D0D0D] px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
          {/* Sticky Navigation Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-xl">
              <span className="mb-4 block font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                Form Sections
              </span>
              <nav className="space-y-1" aria-label="Form navigation">
                {formSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-[#ed027e] font-bold text-white shadow-md"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.625rem] font-black">
                      {String(section.number).padStart(2, "0")}
                    </span>
                    <span className="truncate">{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Form Content */}
          <div className="w-full">
            {isSubmitted ? (
              <div className="rounded-3xl border border-white/15 bg-[#171717] p-8 text-center sm:p-12 lg:p-16">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ed027e]/20 text-[#ed027e] ring-8 ring-[#ed027e]/10">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="mt-6 font-heading text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                  Nomination Submitted Successfully
                </h2>
                <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-white/70 sm:text-base">
                  Thank you for submitting your formal endorsement. Our selection committee will review the candidate details against the published criteria and contact shortlisted nominees directly.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#ed027e]/90"
                  >
                    Submit Another Nomination
                  </button>
                  <a
                    href="/"
                    className="rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
                  >
                    Return to Home
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 01: Nominator Information */}
                <section
                  id="section-1"
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-md sm:p-8 lg:p-10"
                >
                  <div className="mb-8 border-b border-white/10 pb-5">
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                      Section 01 / 10
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                      Nominator Information
                    </h3>
                    <p className="mt-2 text-xs text-white/60 sm:text-sm">
                      Please provide the details of the authorized senior executive making this formal endorsement.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField label="Full Name" required />
                    <FormField label="Professional Title" required />
                    <FormField label="Organisation / Institution" required />
                    <FormField label="Official Work Email" required />
                    <FormField label="Direct Contact Number" required />
                    <FormField label="Relationship to Nominee" required />
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-white/60">
                      Organisation Type <span className="text-[#ed027e]">*</span>
                    </span>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {organisationTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setSelectedOrgType(type)}
                          className={`flex items-center gap-3 rounded-xl border p-4 text-left text-xs font-medium transition-all ${
                            selectedOrgType === type
                              ? "border-[#ed027e] bg-[#ed027e]/15 text-white ring-1 ring-[#ed027e]"
                              : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06]"
                          }`}
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                              selectedOrgType === type
                                ? "border-[#ed027e] bg-[#ed027e]"
                                : "border-white/30"
                            }`}
                          >
                            {selectedOrgType === type && <Check className="h-2.5 w-2.5 text-white" />}
                          </span>
                          <span>{type}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Section 02: Nominee Information */}
                <section
                  id="section-2"
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-md sm:p-8 lg:p-10"
                >
                  <div className="mb-8 border-b border-white/10 pb-5">
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                      Section 02 / 10
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                      Nominee Information
                    </h3>
                    <p className="mt-2 text-xs text-white/60 sm:text-sm">
                      Details of the candidate being nominated (must be aged 18–35 on 29 October 2026).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField label="Full Name of Nominee" required />
                    <FormField label="Age on 29 Oct 2026 (18–35)" required>
                      <input
                        type="number"
                        min="18"
                        max="35"
                        placeholder="e.g. 28"
                        className={inputClass}
                      />
                    </FormField>
                    <FormField label="Date of Birth" required>
                      <input type="date" className={inputClass} />
                    </FormField>
                    <FormField label="Nationality" required />
                    <FormField label="Province / Country" required />
                    <FormField label="Nominee Email" required />
                    <FormField label="Nominee Phone" required />
                    <FormField label="Current Job Title" required />
                    <FormField label="Current Employer / Enterprise" required />
                    <FormField label="LinkedIn Profile URL" />
                  </div>

                  {/* CV Upload */}
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/60">
                      Curriculum Vitae / Profile (PDF or DOCX) <span className="text-[#ed027e]">*</span>
                    </span>
                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/[0.02] p-6 transition-all hover:border-[#ed027e] hover:bg-white/[0.04]">
                      <Upload className="h-8 w-8 text-[#ed027e]" />
                      <span className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                        {uploadedFileName || "Click to upload candidate CV"}
                      </span>
                      <span className="mt-1 text-[0.75rem] text-white/40">
                        PDF, DOC, DOCX up to 10MB
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="sr-only"
                      />
                    </label>
                  </div>

                  {/* Career Stage Selection */}
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-white/60">
                      Candidate Career Stage <span className="text-[#ed027e]">*</span>
                    </span>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {careerStages.map((stage) => (
                        <button
                          type="button"
                          key={stage}
                          onClick={() => setSelectedCareer(stage)}
                          className={`flex items-center gap-3 rounded-xl border p-4 text-left text-xs font-medium transition-all ${
                            selectedCareer === stage
                              ? "border-[#ed027e] bg-[#ed027e]/15 text-white ring-1 ring-[#ed027e]"
                              : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06]"
                          }`}
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                              selectedCareer === stage
                                ? "border-[#ed027e] bg-[#ed027e]"
                                : "border-white/30"
                            }`}
                          >
                            {selectedCareer === stage && <Check className="h-2.5 w-2.5 text-white" />}
                          </span>
                          <span>{stage}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Section 03: Leadership Case */}
                <section
                  id="section-3"
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-md sm:p-8 lg:p-10"
                >
                  <div className="mb-8 border-b border-white/10 pb-5">
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                      Section 03 / 10
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                      The Leadership Case
                    </h3>
                    <p className="mt-2 text-xs text-white/60 sm:text-sm">
                      Provide substantive qualitative evidence supporting the candidate&apos;s leadership journey.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <FormTextArea
                      label="Q26: Why have you selected this woman for the EmpowaHer™ Leadership Accelerator?"
                      max={250}
                    />
                    <FormTextArea
                      label="Q27: What leadership responsibility has she demonstrated without waiting for a formal title?"
                      max={200}
                    />
                    <FormTextArea
                      label="Q28: What verifiable, measurable impact has she created within your organisation or community?"
                      max={250}
                    />

                    {/* Strongest Leadership Quality */}
                    <div className="border-y border-white/10 py-6">
                      <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-white/60">
                        Q29: What is her single strongest leadership quality? <span className="text-[#ed027e]">*</span>
                      </span>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {leadershipQualities.map((quality) => (
                          <button
                            type="button"
                            key={quality}
                            onClick={() => setSelectedQuality(quality)}
                            className={`flex items-center gap-3 rounded-xl border p-3.5 text-left text-xs font-medium transition-all ${
                              selectedQuality === quality
                                ? "border-[#ed027e] bg-[#ed027e]/15 text-white ring-1 ring-[#ed027e]"
                                : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06]"
                            }`}
                          >
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                                selectedQuality === quality
                                  ? "border-[#ed027e] bg-[#ed027e]"
                                  : "border-white/30"
                              }`}
                            >
                              {selectedQuality === quality && <Check className="h-2.5 w-2.5 text-white" />}
                            </span>
                            <span>{quality}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <FormTextArea
                      label="Q30: Explain how she concretely demonstrates this leadership quality."
                      max={150}
                    />
                    <FormTextArea
                      label="Q31: What is the most significant leadership challenge she has navigated successfully?"
                      max={150}
                    />
                    <FormTextArea
                      label="Q32: Why is this the pivotal moment in her career for accelerated development?"
                      max={200}
                    />
                    <FormTextArea
                      label="Q33: In what leadership capacity do you foresee her operating in three years?"
                      max={150}
                    />
                  </div>
                </section>

                {/* Section 04: Potential Assessment (1–5 Rating Scale) */}
                <section
                  id="section-4"
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-md sm:p-8 lg:p-10"
                >
                  <div className="mb-8 border-b border-white/10 pb-5">
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                      Section 04 / 10
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                      Potential Assessment
                    </h3>
                    <p className="mt-2 text-xs text-white/60 sm:text-sm">
                      Rate the nominee across each core competency from <strong>1 (Developing)</strong> to{" "}
                      <strong>5 (Exceptional)</strong>.
                    </p>
                  </div>

                  <div className="divide-y divide-white/10">
                    {assessmentAttributes.map((attribute, idx) => (
                      <div
                        key={attribute}
                        className="grid grid-cols-1 items-center gap-4 py-5 md:grid-cols-[1fr_auto]"
                      >
                        <div>
                          <span className="font-heading text-xs font-bold text-[#ed027e]">
                            Criterion {String(idx + 1).padStart(2, "0")}
                          </span>
                          <p className="mt-1 font-sans text-xs font-medium text-white/90 sm:text-sm">
                            {attribute}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {ratingScale.map((rating) => {
                            const isSelected = ratings[attribute] === rating;
                            return (
                              <button
                                type="button"
                                key={rating}
                                onClick={() =>
                                  setRatings((prev) => ({
                                    ...prev,
                                    [attribute]: rating,
                                  }))
                                }
                                className={`flex h-11 w-11 items-center justify-center rounded-xl font-heading text-sm font-black transition-all ${
                                  isSelected
                                    ? "bg-[#ed027e] text-white shadow-lg scale-105 ring-2 ring-[#ed027e]/50"
                                    : "border border-white/15 bg-white/5 text-white/60 hover:border-[#ed027e]/40 hover:bg-white/10 hover:text-white"
                                }`}
                              >
                                {rating}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <FormTextArea
                      label="Q34: What specific evidence or track record supports your ratings above?"
                      max={200}
                    />
                  </div>
                </section>

                {/* Section 05: Programme Alignment */}
                <section
                  id="section-5"
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-md sm:p-8 lg:p-10"
                >
                  <div className="mb-8 border-b border-white/10 pb-5">
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                      Section 05 / 10
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                      Programme Alignment
                    </h3>
                    <p className="mt-2 text-xs text-white/60 sm:text-sm">
                      Identify the leadership tracks and institutional sponsorship supporting this candidate.
                    </p>
                  </div>

                  <div>
                    <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-white/60">
                      Q35: Select up to 3 Most Relevant Leadership Tracks <span className="text-[#ed027e]">*</span>
                    </span>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {programmeStreams.map((stream) => {
                        const isChecked = selectedStreams.includes(stream);
                        return (
                          <button
                            type="button"
                            key={stream}
                            onClick={() => toggleStream(stream)}
                            className={`flex items-center gap-3 rounded-xl border p-4 text-left text-xs font-medium transition-all ${
                              isChecked
                                ? "border-[#ed027e] bg-[#ed027e]/15 text-white ring-1 ring-[#ed027e]"
                                : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06]"
                            }`}
                          >
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                                isChecked
                                  ? "border-[#ed027e] bg-[#ed027e]"
                                  : "border-white/30"
                              }`}
                            >
                              {isChecked && <Check className="h-3 w-3 text-white" />}
                            </span>
                            <span className="leading-snug">{stream}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 space-y-6 border-t border-white/10 pt-6">
                    <FormTextArea
                      label="Q36: Which core capability would most accelerate her career impact?"
                      max={200}
                    />
                    <FormTextArea
                      label="Q37: How will she contribute uniquely to her cohort and peer network?"
                      max={200}
                    />
                    <FormTextArea
                      label="Q38: What does meaningful programme success look like for her over 12 months?"
                      max={200}
                    />
                  </div>

                  {/* Executive Sponsor */}
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <span className="mb-4 block font-heading text-sm font-bold uppercase tracking-wider text-white">
                      Executive Sponsor within Organisation
                    </span>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                      <FormField label="Executive Sponsor Name" required />
                      <FormField label="Sponsor Title" required />
                      <FormField label="Sponsor Work Email" required />
                    </div>
                  </div>
                </section>

                {/* Section 06: Attendance & Commitment */}
                <section
                  id="section-6"
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-md sm:p-8 lg:p-10"
                >
                  <div className="mb-8 border-b border-white/10 pb-5">
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                      Section 06 / 10
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                      Attendance &amp; Institutional Commitment
                    </h3>
                    <p className="mt-2 text-xs text-white/60 sm:text-sm">
                      Confirm attendance logistics and institutional backing for the summit.
                    </p>
                  </div>

                  <div className="divide-y divide-white/10">
                    <ToggleRow
                      label="Q40: I confirm the nominee can attend all three summit days (29–31 Oct 2026)."
                      toggles={toggles}
                      setToggles={setToggles}
                    />
                    <ToggleRow
                      label="Q41: I understand partial attendance may affect summit qualification."
                      toggles={toggles}
                      setToggles={setToggles}
                    />
                    <ToggleRow
                      label="Q42: Our organization will support her post-programme 100-day commitment."
                      toggles={toggles}
                      setToggles={setToggles}
                    />
                    <ToggleRow
                      label="Q43: The nominee will have opportunities to share summit learnings internally."
                      toggles={toggles}
                      setToggles={setToggles}
                    />
                    <ToggleRow
                      label="Q44: We will participate in 12-month post-summit impact tracking."
                      toggles={toggles}
                      setToggles={setToggles}
                    />
                  </div>
                </section>

                {/* Section 07: Mentorship */}
                <section
                  id="section-7"
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-md sm:p-8 lg:p-10"
                >
                  <div className="mb-8 border-b border-white/10 pb-5">
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                      Section 07 / 10
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                      Mentorship &amp; Executive Exposure
                    </h3>
                  </div>

                  <div className="divide-y divide-white/10">
                    <ToggleRow
                      label="Q46: Would the nominee benefit from an executive mentor introduction?"
                      toggles={toggles}
                      setToggles={setToggles}
                    />
                    <ToggleRow
                      label="Q47: Can your organisation support an active executive mentoring relationship?"
                      toggles={toggles}
                      setToggles={setToggles}
                    />
                  </div>

                  <div className="mt-8 space-y-6 border-t border-white/10 pt-6">
                    <FormTextArea
                      label="Q48: What specific mentorship focus would create the highest value?"
                      max={150}
                    />
                    <FormTextArea
                      label="Q49: Are there specific industry or board leader profiles we should consider?"
                      max={150}
                      required={false}
                    />
                  </div>
                </section>

                {/* Section 08: Reference & Verification */}
                <section
                  id="section-8"
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-md sm:p-8 lg:p-10"
                >
                  <div className="mb-8 border-b border-white/10 pb-5">
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                      Section 08 / 10
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                      Reference &amp; Verification
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <FormField label="Senior Reference Name" required />
                    <FormField label="Professional Title" required />
                    <FormField label="Organisation" required />
                    <FormField label="Official Email" required />
                    <FormField label="Phone Number" required />
                    <FormField label="Professional Relationship" required />
                  </div>

                  <div className="mt-6 divide-y divide-white/10 border-t border-white/10 pt-4">
                    <ToggleRow
                      label="Q51: May the selection committee contact this reference for verification?"
                      toggles={toggles}
                      setToggles={setToggles}
                    />
                    <ToggleRow
                      label="Q52: May we verify submitted achievements with relevant bodies?"
                      toggles={toggles}
                      setToggles={setToggles}
                    />
                  </div>
                </section>

                {/* Section 09: Nominator Declaration */}
                <section
                  id="section-9"
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-md sm:p-8 lg:p-10"
                >
                  <div className="mb-8 border-b border-white/10 pb-5">
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                      Section 09 / 10
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                      Nominator Declaration
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {nominatorDeclarations.map((stmt) => {
                      const isChecked = !!nominatorChecks[stmt];
                      return (
                        <label
                          key={stmt}
                          className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-white/80 transition-colors hover:text-white sm:text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleNominatorCheck(stmt)}
                            className="mt-1 h-4 w-4 shrink-0 rounded border-white/30 bg-white/5 accent-[#ed027e]"
                          />
                          <span>{stmt}</span>
                        </label>
                      );
                    })}
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
                    <FormField label="Q53: Nominator Full Name" required />
                    <FormField label="Q54: Digital Signature (Type Full Name)" required>
                      <input
                        className={`${inputClass} font-serif italic`}
                        placeholder="Type full legal name"
                      />
                    </FormField>
                    <FormField label="Q55: Date of Endorsement" required>
                      <input type="date" className={inputClass} />
                    </FormField>
                  </div>
                </section>

                {/* Section 10: Nominee Acceptance & Final Submission */}
                <section
                  id="section-10"
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-md sm:p-8 lg:p-10"
                >
                  <div className="mb-8 border-b border-white/10 pb-5">
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                      Section 10 / 10
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                      Nominee Acceptance &amp; Consent
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {nomineeAcceptance.map((stmt) => {
                      const isChecked = !!nomineeChecks[stmt];
                      return (
                        <label
                          key={stmt}
                          className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-white/80 transition-colors hover:text-white sm:text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleNomineeCheck(stmt)}
                            className="mt-1 h-4 w-4 shrink-0 rounded border-white/30 bg-white/5 accent-[#ed027e]"
                          />
                          <span>{stmt}</span>
                        </label>
                      );
                    })}
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
                    <FormField label="Q56: Nominee Full Name" required />
                    <FormField label="Q57: Nominee Digital Signature" required>
                      <input
                        className={`${inputClass} font-serif italic`}
                        placeholder="Type full legal name"
                      />
                    </FormField>
                    <FormField label="Q58: Date of Acceptance" required>
                      <input type="date" className={inputClass} />
                    </FormField>
                  </div>

                  {/* Submission Notice */}
                  <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs italic text-white/60 sm:text-sm">
                    By submitting this nomination form, both nominator and nominee confirm that all information is accurate and agree to the EmpowaHer™ evaluation protocol.
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
                    <a
                      href="#section-9"
                      className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 sm:w-auto"
                    >
                      <span>Previous Section</span>
                    </a>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ed027e] px-10 py-4 font-heading text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl transition-all hover:scale-[1.02] hover:bg-[#ed027e]/90 hover:shadow-2xl sm:w-auto"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit Nomination</span>
                    </button>
                  </div>
                </section>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Shared Site Footer */}
      <Footer />
    </main>
  );
}
