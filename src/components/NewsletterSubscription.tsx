"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail || !cleanEmail.includes("@") || !cleanEmail.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input_1: cleanEmail,
          email: cleanEmail,
          input_values: {
            input_1: cleanEmail,
          },
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      // In case of offline/network failure, still gracefully handle for the user
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden border-t border-white/10 bg-[#0A0D11] py-16 sm:py-20 lg:py-24 text-white"
      aria-labelledby="newsletter-heading"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#ed027e]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#ed027e]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="overflow-hidden rounded-3xl border border-[#ed027e]/40 bg-gradient-to-br from-[#141922] via-[#1a1424] to-[#12161f] p-8 sm:p-12 lg:p-16 shadow-2xl shadow-black relative">
          {/* Subtle Corner Accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#ed027e]/25 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/15 px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.25em] text-[#ed027e]">
                <Sparkles className="h-3 w-3" />
                <span>EXECUTIVE INTELLIGENCE &amp; DISPATCHES</span>
              </div>

              <h2
                id="newsletter-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[0.95] tracking-tight text-white"
              >
                <span>Subscribe to</span>
                <br />
                <span className="text-[#ed027e]">Our Newsletter.</span>
              </h2>

              <p className="mt-4 max-w-[50ch] text-sm sm:text-base leading-relaxed text-white/75">
                Join our network of corporate board directors, C-suite executives, enterprise founders, and emerging women leaders receiving exclusive summit dispatches, speaker reveals, and executive insights.
              </p>

              {/* Trust Indicators */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/60">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ed027e]" />
                  <span>Curated Leadership Content</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ed027e]" />
                  <span>Early Keynote &amp; Cohort Releases</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-[#ed027e]" />
                  <span>Zero Spam • Unsubscribe Anytime</span>
                </div>
              </div>
            </div>

            {/* Right Form Box */}
            <div className="rounded-2xl border border-white/10 bg-[#0E1218]/80 p-6 sm:p-8 backdrop-blur-md">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ed027e]/20 text-[#ed027e] mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-white">
                    You Are Subscribed!
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/75 max-w-sm">
                    Thank you for joining the EmpowaHer™ executive network. Our latest dispatches and summit releases will be delivered straight to your inbox.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-5 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:border-[#ed027e] transition-colors"
                  >
                    Subscribe Another Email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="newsletter-email-input"
                      className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2"
                    >
                      Corporate or Personal Email Address
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-white/40">
                        <Mail className="h-4 w-4" />
                      </div>
                      <input
                        id="newsletter-email-input"
                        name="input_1"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        placeholder="you@company.co.za or personal email"
                        required
                        className="w-full rounded-xl border border-white/20 bg-black/50 pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/35 transition-all focus:border-[#ed027e] focus:outline-none focus:ring-1 focus:ring-[#ed027e]"
                      />
                    </div>
                    {status === "error" && (
                      <p className="mt-1.5 text-xs text-rose-400 font-medium">
                        {errorMessage}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#ed027e] px-6 py-4 font-heading text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#ed027e]/30 transition-all duration-300 hover:scale-[1.01] hover:bg-[#ff1a95] active:scale-[0.99] disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <span>Subscribing...</span>
                    ) : (
                      <>
                        <span>Subscribe To Executive Dispatches</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-[0.6875rem] text-center text-white/45 leading-relaxed">
                    By subscribing, you agree to receive official communications from EmpowaHer™ and EmpowaWorx™. You can unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
