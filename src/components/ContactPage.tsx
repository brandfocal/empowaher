"use client";

import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const inquiryTypes = [
  { id: "general-inquiry", label: "General Inquiry" },
  { id: "partnership", label: "Partnership & Sponsorship" },
  { id: "nominations", label: "Nominations & Applications" },
  { id: "media-press", label: "Media & Press" },
  { id: "other", label: "Other" },
];

const initialForm = {
  input_1: "", // Full Name ID: 1
  input_3: "", // Email Address ID: 3
  input_4: "", // Organisation / Company ID: 4
  input_5: "", // Contact Telephone ID: 5
  input_6: "General Inquiry", // Nature of Inquiry ID: 6
  input_8: "", // Message ID: 8
};

export function ContactPage() {
  const [inquiry, setInquiry] = useState("General Inquiry");
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }
    const heroImg = document.getElementById("contact-hero-parallax-img");
    if (!heroImg) {
      return;
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.18;
      heroImg.style.transform = `translateY(${scrollY * speed}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateField = (field: keyof typeof initialForm, value: string) =>
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const formElement = event.currentTarget;
      const formData = new FormData(formElement);

      // Ensure input_6 is explicitly set to the current inquiry selection
      formData.set("input_6", inquiry);

      const res = await fetch("/api/submit-contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || `Submission failed with status ${res.status}`);
      }

      setFormState("success");
    } catch (err: any) {
      console.error("Contact form submission error:", err);
      setErrorMessage(
        err?.message || "An error occurred while submitting your message. Please try again."
      );
      setFormState("error");
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setInquiry("General Inquiry");
    setFormState("idle");
    setErrorMessage("");
  };

  const fieldClass =
    "mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-white/35 transition-all duration-200 focus:border-[#ed027e] focus:ring-1 focus:ring-[#ed027e]/40";

  return (
    <main
      id="top"
      className="min-h-screen w-full overflow-x-hidden bg-white font-sans text-[#3f3f3f] selection:bg-[#ed027e] selection:text-white"
    >
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col bg-[#1C2128]">
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Header Navigation */}
          <Header currentPath="/contact" />

          {/* Background Image with Ambient Overlay */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img
              id="contact-hero-parallax-img"
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80"
              alt="EmpowaHer executive woman leader in Johannesburg"
              className="h-full w-full object-cover object-[center_top] sm:object-[center_12%] will-change-transform"
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
            {/* Status Badge Eyebrow */}
            <div
              className="hero-reveal flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:px-4 sm:text-[0.6875rem]"
              style={{ animationDelay: "0ms" }}
            >
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ed027e] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ed027e]" />
              </span>
              <span>EmpowaHer™ Executive Office</span>
              <span className="mx-1 h-1 w-1 rounded-full bg-white/70 sm:mx-2" />
              <span>Johannesburg, South Africa</span>
            </div>

            {/* Summit Overline */}
            <div
              className="hero-reveal flex flex-wrap items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/85 sm:text-xs lg:tracking-[0.2em]"
              style={{ animationDelay: "60ms" }}
            >
              <span>EmpowaHer™ Leadership Programme</span>
              <span className="inline-block h-3 w-px bg-white/40 align-middle" aria-hidden="true" />
              <span className="rounded-full bg-[#ed027e] px-2.5 py-0.5 font-extrabold text-white">
                Executive Desk
              </span>
            </div>

            {/* 3-Column Hero Layout */}
            <div className="grid w-full grid-cols-1 items-end gap-y-6 text-left lg:grid-cols-[2fr_1.2fr_1fr] lg:gap-x-12">
              <div
                className="hero-reveal flex flex-col border-white/15 lg:border-r lg:pr-8"
                style={{ animationDelay: "120ms" }}
              >
                <h1
                  id="hero-heading"
                  className="font-heading text-[clamp(2.5rem,5.2vw,4.75rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-white"
                >
                  <span>START A</span>
                  <br />
                  <span className="text-[#ed027e]">STRATEGIC</span>
                  <br />
                  <span>CONVERSATION</span>
                </h1>

                {/* Hero CTAs */}
                <div
                  className="hero-reveal mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start"
                  style={{ animationDelay: "300ms" }}
                >
                  <a
                    href="#contact"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:bg-[#ed027e]/90 hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Send a Message</span>
                    <Send className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#channels"
                    className="flex w-full items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#3f3f3f] hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Direct Channels</span>
                  </a>
                </div>
              </div>

              <div
                className="hero-reveal border-white/15 lg:border-r lg:pr-8"
                style={{ animationDelay: "180ms" }}
              >
                <h2 className="font-heading text-[clamp(1.15rem,2vw,1.6rem)] font-bold leading-[1.25] tracking-[-0.01em] text-white/90">
                  <span>
                    Direct Leadership Access to Africa&apos;s Emerging Executive Ecosystem
                  </span>
                </h2>
                <p className="mt-3 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/60">
                  <span>29–31 October 2026 • EmpowaWorx House, Randburg</span>
                </p>
              </div>

              <div
                className="hero-reveal"
                style={{ animationDelay: "240ms" }}
              >
                <p className="font-sans text-[0.9375rem] font-normal leading-[1.65] text-white/75">
                  <span>
                    Whether you represent a nominating corporate, aspiring partner, prospective delegate, or press institution, our executive team is ready to connect.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About EmpowaWorx & Verified Summit Statistics Strip */}
      <section id="about" className="border-t-[6px] border-[#ed027e] bg-white" aria-labelledby="about-heading">
        <div className="bg-[#1C2128] px-5 py-16 text-white sm:px-8 md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-10 lg:gap-16">
            <div>
              <p className="border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <span>PRODUCED BY EMPOWAWORX™</span>
              </p>
              <h2
                id="about-heading"
                className="font-heading mt-4 max-w-[16ch] text-[clamp(2.4rem,4.8vw,4.25rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-white"
              >
                <span>EMPOWERING WOMEN. ENGINEERING THE FUTURE.</span>
              </h2>
            </div>

            {/* Accurate Summit Stats */}
            <div className="max-w-full pl-0 md:max-w-md md:border-l-2 md:border-white/20 md:pl-6">
              <p className="text-sm leading-relaxed text-white/70">
                <span>
                  EmpowaWorx™ convenes leadership platforms that develop high-potential talent, connect capital, and advance inclusive economic transformation from intention to action.
                </span>
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
                <div>
                  <p className="font-heading text-2xl sm:text-3xl font-black text-[#ed027e]">
                    <span>200</span>
                  </p>
                  <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/60">
                    <span>Leaders (18–35)</span>
                  </p>
                </div>
                <div>
                  <p className="font-heading text-2xl sm:text-3xl font-black text-white">
                    <span>200+</span>
                  </p>
                  <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/60">
                    <span>Organisations</span>
                  </p>
                </div>
                <div>
                  <p className="font-heading text-2xl sm:text-3xl font-black text-[#ed027e]">
                    <span>9</span>
                  </p>
                  <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/60">
                    <span>Tracks</span>
                  </p>
                </div>
                <div>
                  <p className="font-heading text-2xl sm:text-3xl font-black text-white">
                    <span>3</span>
                  </p>
                  <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/60">
                    <span>Summit Days</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 01 — Direct Channels Section */}
        <div id="channels" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-16 lg:py-24">
          {/* Standard Section Header */}
          <div className="reveal mb-14 max-w-3xl">
            <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
              <span>01 — Direct Channels</span>
            </div>
            <h2 className="font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-black uppercase leading-[1.05] tracking-[-0.02em] text-[#1C2128]">
              <span>Executive Contact &amp; Channels</span>
            </h2>
            <p className="mt-3 font-sans text-[0.875rem] font-normal leading-[1.65] text-[#3f3f3f]/75">
              <span>Direct lines of communication to the EmpowaHer™ executive secretariat, strategic alliances desk, and physical headquarters in Johannesburg.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-[#1C2128]/10 pt-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {/* 01 — Executive Office & General Enquiries */}
            <article className="min-w-0">
              <p className="text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <span>01 — EXECUTIVE DESK</span>
              </p>
              <h3 className="font-heading mt-3 text-[clamp(1.5rem,2.2vw,2rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-[#1C2128]">
                <span>Leadership &amp; Direct Enquiries</span>
              </h3>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#1C2128]">Doric Sithole</p>
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-[#ed027e]">
                  Managing Executive of EmpowaHer
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 border-t border-[#1C2128]/10 pt-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#ed027e]" strokeWidth={2} />
                  <a
                    href="mailto:doric@empowaworx.co.za"
                    className="break-all text-sm font-medium text-[#3f3f3f] transition-colors hover:text-[#ed027e]"
                  >
                    <span>doric@empowaworx.co.za</span>
                  </a>
                </div>
                <div className="flex items-center gap-3 border-t border-[#1C2128]/10 pt-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#ed027e]" strokeWidth={2} />
                  <a
                    href="mailto:hello@empowaworx.co.za"
                    className="break-all text-sm font-medium text-[#3f3f3f] transition-colors hover:text-[#ed027e]"
                  >
                    <span>hello@empowaworx.co.za</span>
                  </a>
                </div>
                <div className="flex items-center gap-3 border-t border-[#1C2128]/10 pt-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#ed027e]" strokeWidth={2} />
                  <a
                    href="tel:+27786489522"
                    className="text-sm font-medium tabular-nums text-[#3f3f3f] transition-colors hover:text-[#ed027e]"
                  >
                    <span>+27 (0) 78 648 9522</span>
                  </a>
                </div>
                <div className="flex items-center gap-3 border-t border-[#1C2128]/10 pt-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#ed027e]" strokeWidth={2} />
                  <a
                    href="tel:+27114827256"
                    className="text-sm font-medium tabular-nums text-[#3f3f3f] transition-colors hover:text-[#ed027e]"
                  >
                    <span>+27 (0) 11 482 7256</span>
                  </a>
                </div>
              </div>
            </article>

            {/* 02 — Partnerships & Media Inquiries */}
            <article className="min-w-0">
              <p className="text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <span>02 — STRATEGIC ALLIANCES</span>
              </p>
              <h3 className="font-heading mt-3 text-[clamp(1.5rem,2.2vw,2rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-[#1C2128]">
                <span>Partner With Purpose.</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3f3f3f]/75">
                <span>
                  Align your organisation with Africa&apos;s most credible emerging female leadership pipeline through headline sponsorship, track ownership, or delegate bursaries.
                </span>
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 border-t border-[#1C2128]/10 pt-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#ed027e]" strokeWidth={2} />
                  <a
                    href="mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Partnership%20Inquiry"
                    className="break-all text-sm font-medium text-[#3f3f3f] transition-colors hover:text-[#ed027e]"
                  >
                    <span>doric@empowaworx.co.za</span>
                  </a>
                </div>
                <div className="flex items-center gap-3 border-t border-[#1C2128]/10 pt-3">
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#ed027e]" strokeWidth={2} />
                  <Link
                    href="/partnerships"
                    className="text-sm font-bold uppercase tracking-[0.08em] text-[#ed027e] transition-colors hover:underline"
                  >
                    <span>Explore Strategic Partnerships &rarr;</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* 03 — Location & Office Hours */}
            <article className="min-w-0">
              <p className="text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <span>03 — LOCATION &amp; HOURS</span>
              </p>
              <h3 className="font-heading mt-3 text-[clamp(1.5rem,2.2vw,2rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-[#1C2128]">
                <span>Visit EmpowaWorx House</span>
              </h3>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 border-t border-[#1C2128]/10 pt-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#ed027e]" strokeWidth={2} />
                  <p className="text-sm leading-relaxed text-[#3f3f3f]/80">
                    <span className="font-semibold text-[#1C2128]">Office Hours:</span>
                    <br />
                    <span>Monday to Friday, 08:00 – 17:00 SAST</span>
                  </p>
                </div>
                <div className="flex items-start gap-3 border-t border-[#1C2128]/10 pt-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ed027e]" strokeWidth={2} />
                  <p className="text-sm leading-relaxed text-[#3f3f3f]/80">
                    <span className="font-semibold text-[#1C2128]">Physical Address:</span>
                    <br />
                    <span>EmpowaWorx House, 364 Pine Avenue, Ferndale, Randburg 2194, South Africa</span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Interactive Contact & Message Form Section */}
      <section
        id="contact"
        className="border-t-[6px] border-[#ed027e] bg-[#1C2128] px-5 py-16 text-white sm:px-8 md:px-12 md:py-20 lg:px-16 lg:py-28"
        aria-labelledby="form-heading"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
              <span>02 — SEND A MESSAGE</span>
            </p>
            <h2
              id="form-heading"
              className="font-heading max-w-[12ch] text-[clamp(2.75rem,5.5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white"
            >
              <span>We Are Listening.</span>
            </h2>
            <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-white/70">
              <span>
                Every message matters. Share your inquiry, partnership proposal, or question, and a member of the EmpowaHer executive secretariat will be in touch with you.
              </span>
            </p>

            <div className="mt-10 flex flex-col gap-3.5">
              <a
                href="mailto:doric@empowaworx.co.za"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4.5 transition-all hover:border-[#ed027e] hover:bg-white/10"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#ed027e]" strokeWidth={2} />
                <div>
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/50">Executive Email</p>
                  <p className="break-all text-sm font-semibold text-white/90">doric@empowaworx.co.za</p>
                </div>
              </a>
              <a
                href="tel:+27114827256"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4.5 transition-all hover:border-[#ed027e] hover:bg-white/10"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#ed027e]" strokeWidth={2} />
                <div>
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/50">Direct Telephone</p>
                  <p className="text-sm font-semibold text-white/90">+27 (0) 11 482 7256</p>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#ed027e]" strokeWidth={2} />
                <div>
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/50">Headquarters</p>
                  <p className="text-sm text-white/85">EmpowaWorx House, Ferndale, Randburg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <form
            id="gform_2"
            data-formid="2"
            method="POST"
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm md:p-8 lg:p-10"
          >
            {/* Gravity Forms Hidden Fields (Form ID 2) */}
            <input type="hidden" name="gform_form_id" value="2" />
            <input type="hidden" name="is_submit_2" value="1" />
            <input type="hidden" name="gform_submit" value="2" />
            <input type="hidden" id="input_2_6" name="input_6" value={inquiry} />

            {formState === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center md:min-h-[520px]">
                <CheckCircle2 size={56} className="text-[#ed027e]" strokeWidth={1.5} />
                <h3 className="font-heading mt-7 text-[clamp(1.6rem,3vw,2.4rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white">
                  <span>Message Sent Successfully.</span>
                </h3>
                <p className="mt-5 max-w-[38ch] text-sm leading-relaxed text-white/70">
                  <span>
                    Thank you for reaching out to EmpowaHer™. A member of our executive team will review your message and respond promptly within 1–2 business days.
                  </span>
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 rounded-full border border-white/25 px-7 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ed027e]"
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Submission Error Banner */}
                {formState === "error" && errorMessage && (
                  <div
                    id="contact-error-notice"
                    role="alert"
                    className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs leading-relaxed text-red-200"
                  >
                    <p className="font-bold uppercase tracking-wider text-red-400">Submission Notice</p>
                    <p className="mt-1">{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Full Name (Field ID: 1) */}
                  <label htmlFor="input_2_1" className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/70">
                    <span>Full Name *</span>
                    <input
                      required
                      id="input_2_1"
                      name="input_1"
                      value={form.input_1}
                      onChange={(event) => updateField("input_1", event.target.value)}
                      className={fieldClass}
                      placeholder="Your full name"
                    />
                  </label>

                  {/* Email Address (Field ID: 3) */}
                  <label htmlFor="input_2_3" className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/70">
                    <span>Email Address *</span>
                    <input
                      required
                      type="email"
                      id="input_2_3"
                      name="input_3"
                      value={form.input_3}
                      onChange={(event) => updateField("input_3", event.target.value)}
                      className={fieldClass}
                      placeholder="name@organisation.com"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Organisation / Company (Field ID: 4) */}
                  <label htmlFor="input_2_4" className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/70">
                    <span>Organisation / Company</span>
                    <input
                      id="input_2_4"
                      name="input_4"
                      value={form.input_4}
                      onChange={(event) => updateField("input_4", event.target.value)}
                      className={fieldClass}
                      placeholder="Your organisation name"
                    />
                  </label>

                  {/* Contact Telephone (Field ID: 5) */}
                  <label htmlFor="input_2_5" className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/70">
                    <span>Contact Telephone</span>
                    <input
                      id="input_2_5"
                      name="input_5"
                      type="tel"
                      value={form.input_5}
                      onChange={(event) => updateField("input_5", event.target.value)}
                      className={fieldClass}
                      placeholder="+27 ..."
                    />
                  </label>
                </div>

                {/* Nature of Inquiry (Field ID: 6) */}
                <fieldset>
                  <legend className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/70">
                    <span>Nature of Inquiry</span>
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        aria-pressed={inquiry === type.label}
                        onClick={() => {
                          setInquiry(type.label);
                          updateField("input_6", type.label);
                        }}
                        className={`cursor-pointer rounded-full px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.1em] transition-all ${
                          inquiry === type.label
                            ? "bg-[#ed027e] text-white shadow-md shadow-[#ed027e]/25 ring-1 ring-[#ed027e]"
                            : "border border-white/20 bg-transparent text-white/70 hover:border-[#ed027e]/60 hover:text-white"
                        }`}
                      >
                        <span>{type.label}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* Message (Field ID: 8) */}
                <label htmlFor="input_2_8" className="block text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/70">
                  <span>Message *</span>
                  <textarea
                    required
                    rows={5}
                    id="input_2_8"
                    name="input_8"
                    value={form.input_8}
                    onChange={(event) => updateField("input_8", event.target.value)}
                    className={`${fieldClass} min-h-[130px] resize-y`}
                    placeholder="Provide details about your inquiry, proposal, or question..."
                  />
                </label>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className={`flex w-full items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-4 font-heading text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ed027e]/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ed027e] ${
                    formState === "loading"
                      ? "cursor-not-allowed opacity-80"
                      : "hover:scale-[1.02] hover:bg-[#ed027e]/90 active:scale-98"
                  }`}
                >
                  {formState === "loading" ? (
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-90"
                        d="M22 12a10 10 0 0 1-10 10"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="4"
                      />
                    </svg>
                  ) : (
                    <Send className="h-4 w-4" strokeWidth={2} />
                  )}
                  <span>{formState === "loading" ? "Sending Message..." : "Submit Message"}</span>
                </button>

                <p className="text-center text-[0.625rem] text-white/40">
                  <span>Your information is protected and used solely to address your communication.</span>
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Site-wide Established Shared Footer */}
      <Footer />
    </main>
  );
}
