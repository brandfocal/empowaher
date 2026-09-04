"use client";

import React from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

const PROGRAMME_PDF_PATH = "/EmpowaHER-Programme-2026.pdf";
const PROSPECTUS_EMAIL_HREF = "mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Prospectus%20Request";

export function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-white">
      {/* 3-Column Info & Contact Section */}
      <section className="px-5 py-16 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 lg:pt-16">
            {/* 01 — About */}
            <div
              className="reveal"
              style={{
                transitionDelay: "0ms",
              }}
            >
              <div className="mb-3 border-l-2 border-[#ed027e] pl-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                <span>01 — About</span>
              </div>
              <h3 className="mb-4 font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-black uppercase leading-[1.15] tracking-[-0.01em] text-white">
                <span>The Future Is Female™</span>
              </h3>
              <p className="mb-6 text-[0.9375rem] font-normal leading-[1.65] text-white/70 md:max-w-[42ch]">
                <span>
                  EmpowaHer™ equips and elevates young African women leaders with executive mentorship, actionable masterclasses, and strategic networks to compete and lead across business, government, and the boardroom.
                </span>
              </p>
              <div className="flex flex-col gap-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                <a
                  href={PROGRAMME_PDF_PATH}
                  download="EmpowaHER-Programme-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-[#ed027e]"
                >
                  <span>Download Programme (PDF)</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={PROSPECTUS_EMAIL_HREF}
                  className="flex items-center gap-1.5 transition-colors hover:text-[#ed027e]"
                >
                  <span>Prospectus on Request</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* 02 — Contact */}
            <div
              className="reveal"
              style={{
                transitionDelay: "80ms",
              }}
            >
              <div className="mb-3 border-l-2 border-[#ed027e] pl-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                <span>02 — Contact</span>
              </div>
              <h3 className="mb-4 font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-black uppercase leading-[1.15] tracking-[-0.01em] text-white">
                <span>Start A Conversation.</span>
              </h3>
              <div className="mb-4">
                <div className="text-base font-bold text-white">
                  <span>Doric Sithole</span>
                </div>
                <div className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-[#ed027e]">
                  <span>Managing Executive of EmpowaHer</span>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 text-sm leading-[1.55] text-white/70">
                <a
                  href="mailto:doric@empowaworx.co.za"
                  className="flex items-center gap-2.5 transition-colors hover:text-[#ed027e]"
                >
                  <Mail size={14} className="text-[#ed027e] shrink-0" />
                  <span>doric@empowaworx.co.za</span>
                </a>
                <a
                  href="tel:+27786489522"
                  className="flex items-center gap-2.5 transition-colors hover:text-[#ed027e]"
                >
                  <Phone size={14} className="text-[#ed027e] shrink-0" />
                  <span className="tabular-nums">+27 (0) 78 648 9522</span>
                </a>
                <a
                  href="tel:+27114827256"
                  className="flex items-center gap-2.5 transition-colors hover:text-[#ed027e]"
                >
                  <Phone size={14} className="text-[#ed027e] shrink-0" />
                  <span className="tabular-nums">+27 (0) 11 482 7256</span>
                </a>
                <div className="flex items-start gap-2.5 pt-1 text-xs text-white/60">
                  <MapPin size={15} className="text-[#ed027e] shrink-0 mt-0.5" />
                  <span>EmpowaWorx House, 364 Pine Avenue, Ferndale, Randburg 2194</span>
                </div>
              </div>
            </div>

            {/* 03 — Follow Us */}
            <div
              className="reveal md:col-span-2 lg:col-span-1"
              style={{
                transitionDelay: "160ms",
              }}
            >
              <div className="mb-3 border-l-2 border-[#ed027e] pl-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#ed027e]">
                <span>03 — Follow Us</span>
              </div>
              <h3 className="mb-4 font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-black uppercase leading-[1.15] tracking-[-0.01em] text-white">
                <span>Stay Connected.</span>
              </h3>
              <p className="mb-6 text-[0.9375rem] font-normal leading-[1.65] text-white/70 md:max-w-[42ch]">
                <span>Follow EmpowaWomen and meet the women engineering what comes next.</span>
              </p>
              <div className="flex items-center gap-2.5">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/10 bg-black px-5 py-8 text-white/60 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-3 text-left text-xs font-semibold uppercase tracking-[0.12em] md:flex-row md:items-center">
          <div>
            <span>© {new Date().getFullYear()} EMPOWAHER • AN EMPOWAWORX INITIATIVE • OFFICIAL WEBSITE LAUNCHING SOON.</span>
          </div>
          <div className="flex items-center gap-1.5 transition-colors hover:text-[#ed027e]">
            <span>— EMPOWERING WOMEN. ENGINEERING THE FUTURE.</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#ed027e]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
