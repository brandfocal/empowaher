"use client";

import { useEffect } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Mail,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PROGRAMME_PDF_PATH = "/EmpowaHER-Programme-2026.pdf";
const PROSPECTUS_EMAIL_HREF =
  "mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Prospectus%20Request";

const commercialValues = [
  {
    number: "01",
    icon: TrendingUp,
    title: "BUILD BRAND LEADERSHIP",
    description:
      "Premium association across the programme strengthens visibility, relevance and brand preference among participants and influential stakeholders.",
  },
  {
    number: "02",
    icon: Users,
    title: "STRENGTHEN TALENT PIPELINES",
    description:
      "Identify and engage a curated pool of high-potential graduates, professionals, entrepreneurs, and emerging executives.",
  },
  {
    number: "03",
    icon: Target,
    title: "ACCELERATE CUSTOMER GROWTH",
    description:
      "Consent-based engagement can generate qualified leads, product interest, referrals and long-term customer affinity.",
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "ORIGINATE ENTERPRISE OPPORTUNITIES",
    description:
      "Discover women-owned businesses with potential to enter funding, procurement, supplier-development and market-access pipelines.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "ADVANCE ESG COMMITMENTS",
    description:
      "Translate inclusion, skills development and transformation strategies into visible, measurable and reportable action.",
  },
];

const partnershipTracks = [
  {
    id: "scholarships",
    number: "01",
    label: "SCHOLARSHIPS AND BURSARIES",
    value: "ACCESS TO TERTIARY, PROFESSIONAL AND EXECUTIVE EDUCATION",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    imageAlt:
      "Young professional women studying together in an academic setting",
    overlayClass: "bg-black/10",
    className: "bg-white text-[#171717]",
    stackClass: "z-10",
  },
  {
    id: "placements",
    number: "02",
    label: "GRADUATE PLACEMENTS AND INTERNSHIPS",
    value: "WORKPLACE EXPERIENCE AND MEANINGFUL EMPLOYMENT",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    imageAlt: "Professional African woman in a business workplace setting",
    overlayClass: "bg-[#E8197D]/20",
    className: "bg-[#E8197D] text-white",
    stackClass: "z-20",
  },
  {
    id: "funding",
    number: "03",
    label: "FUNDING AND PROCUREMENT",
    value: "CAPITAL, SUPPLIER DEVELOPMENT AND COMMERCIAL OPPORTUNITIES",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    imageAlt: "Women in an enterprise business meeting discussing commerce",
    overlayClass: "bg-[#3f3f3f]/30",
    className: "bg-[#3f3f3f] text-white",
    stackClass: "z-30",
  },
];

export function PartnershipOpportunities() {
  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main
      id="top"
      className="min-h-screen bg-white font-sans text-[#171717] selection:bg-[#ed027e] selection:text-white"
    >
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col">
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Stripped header replaced with Home page Header */}
          <Header currentPath="/partnerships" />

          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&q=85"
              alt="Professional women collaborating in a bright contemporary workplace"
              className="h-full w-full scale-[1.15] object-cover object-center"
            />
          </div>
          <div
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.08)_100%)]"
            aria-hidden="true"
          />

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-5 px-5 pb-10 sm:px-8 sm:pb-14 md:px-12 md:pb-16 lg:px-16 lg:pb-14">
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-white/80">
              EmpowaHer™ / Partnership
            </span>
            <div className="grid w-full grid-cols-1 items-end gap-y-6 text-left lg:grid-cols-[2fr_1.2fr_1fr] lg:gap-x-12">
              <div className="border-white/15 lg:border-r lg:pr-8">
                <h1 className="max-w-[18ch] text-[clamp(2.5rem,5vw,5.4rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-white">
                  <span>A High-Value Leadership, Talent and Enterprise Ecosystem</span>
                </h1>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={PROGRAMME_PDF_PATH}
                    download="EmpowaHER-Programme-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-full bg-[#ed027e] px-6 py-3.5 text-center text-[0.62rem] font-black uppercase tracking-[0.1em] text-white shadow-lg transition-transform hover:scale-[1.03]"
                  >
                    <span>Download Programme (PDF)</span>
                  </a>
                  <a
                    href={PROSPECTUS_EMAIL_HREF}
                    className="flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-6 py-3.5 text-center text-[0.62rem] font-black uppercase tracking-[0.1em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#171717]"
                  >
                    <span>Prospectus on Request</span>
                  </a>
                  <a
                    href="mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Partnership%20Inquiry"
                    className="flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-center text-[0.62rem] font-black uppercase tracking-[0.1em] text-white/90 backdrop-blur-sm transition-colors hover:border-[#ed027e] hover:bg-[#ed027e]/15 hover:text-white"
                  >
                    <span>Contact Executive Team</span>
                  </a>
                </div>
              </div>

              <div className="border-white/15 lg:border-r lg:pr-8">
                <h2 className="max-w-[27ch] text-[clamp(1.125rem,2vw,1.5rem)] font-bold uppercase leading-[1.25] tracking-[-0.01em] text-white/80">
                  <span>
                    EmpowaHer is not a conventional sponsorship platform. It connects partners with Africa&apos;s next generation of women leaders through one integrated investment.
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-[30ch] text-sm leading-[1.65] text-white/60">
                  <span>
                    Designed for partners ready to build leadership visibility, strengthen talent pipelines, and convert inclusion commitments into measurable commercial opportunity.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Value Section — as is from cloned component */}
      <section
        id="commercial-value"
        className="border-t-4 border-[#E8197D] bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-2xl">
            <span className="mb-4 block text-[0.58rem] font-bold uppercase tracking-[0.24em] text-[#E8197D]">
              Commercial Value
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.05em]">
              Strategic Opportunity &amp; Return
            </h2>
          </div>
          <div className="border-t border-black/10">
            {commercialValues.map(({ number, icon: Icon, title, description }) => {
              const isPinkRow =
                number === "01" || number === "03" || number === "05";
              return (
                <article
                  key={number}
                  className={`group relative grid grid-cols-[4rem_1fr] gap-5 border-b border-black/10 px-0 py-8 sm:grid-cols-[6rem_2rem_1fr] sm:gap-6 lg:grid-cols-[7rem_2.5rem_1fr] lg:py-10 ${
                    isPinkRow
                      ? "bg-[#E8197D] text-white hover:brightness-125 hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-all duration-150"
                      : Number(number) % 2 === 0
                      ? "bg-[#F9F4F7] hover:bg-pink-100 hover:scale-[1.02] hover:shadow-md cursor-pointer transition-all duration-150"
                      : "bg-white hover:bg-pink-100 hover:scale-[1.02] hover:shadow-md cursor-pointer transition-all duration-150"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`text-[4.5rem] font-black leading-[0.72] tracking-[-0.08em] sm:text-[6rem] ${
                      isPinkRow ? "text-white/20" : "text-black/10"
                    }`}
                  >
                    {number}
                  </span>
                  <Icon
                    className={`mt-1 hidden h-6 w-6 sm:block ${
                      isPinkRow ? "text-white" : "text-[#E8197D]"
                    }`}
                    strokeWidth={1.6}
                  />
                  <div>
                    <h3 className="text-base font-black uppercase tracking-[-0.02em] sm:text-xl">
                      {title}
                    </h3>
                    <p
                      className={`mt-2 max-w-[66ch] text-sm leading-[1.65] ${
                        isPinkRow ? "text-white/80" : "text-[#171717]/60"
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signature Tracks Section — as is from cloned component */}
      <section
        id="tracks"
        className="w-full bg-[#0D0D0D] px-12 py-20 text-white lg:py-28"
      >
        <div className="grid w-full grid-cols-1 gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <span className="mb-5 block text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#E8197D]">
              Signature Tracks
            </span>
            <h2 className="text-[clamp(3.2rem,8vw,7.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-white">
              Signature Tracks
            </h2>
          </div>
          <p className="max-w-[34rem] self-end text-base leading-[1.7] text-white/65 lg:text-lg">
            Partner-owned opportunities designed for visible investment in education, workplace experience, capital access and commercial growth.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 pt-10 lg:grid-cols-[35fr_65fr] lg:gap-8">
          <figure className="min-h-[520px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="Professional African woman in a business workplace setting"
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {partnershipTracks.slice(0, 2).map((_mpRecord) => {
              const { id, number, label, value } = _mpRecord;
              return (
                <article
                  key={id}
                  className="flex min-h-[250px] flex-col justify-between border-b-2 border-[#E8197D] bg-white/[0.025] p-8 transition-all duration-200 hover:scale-[1.01] hover:bg-white/5 lg:min-h-[310px] lg:p-10"
                >
                  <span className="text-[0.62rem] font-black uppercase tracking-[0.28em] text-[#E8197D]">
                    Track {number}
                  </span>
                  <div>
                    <h3 className="max-w-[13ch] text-[clamp(2rem,4.2vw,4.4rem)] font-black uppercase leading-[0.88] tracking-[-0.055em] text-white">
                      {label}
                    </h3>
                    <p className="mt-5 max-w-[38ch] text-sm font-semibold uppercase leading-[1.55] tracking-[0.08em] text-white/62">
                      {value}
                    </p>
                  </div>
                </article>
              );
            })}
            {partnershipTracks.slice(2).map((_mpRecord) => {
              const { id, number, label, value } = _mpRecord;
              return (
                <article
                  key={id}
                  className="flex min-h-[320px] flex-col justify-between border-b-2 border-[#E8197D] bg-white/[0.025] p-8 transition-all duration-200 hover:scale-[1.01] hover:bg-white/5 lg:p-12"
                >
                  <span className="text-[0.62rem] font-black uppercase tracking-[0.28em] text-[#E8197D]">
                    Track {number}
                  </span>
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1fr] lg:items-end">
                    <h3 className="max-w-[13ch] text-[clamp(2.2rem,5vw,5.8rem)] font-black uppercase leading-[0.86] tracking-[-0.06em] text-white">
                      {label}
                    </h3>
                    <p className="max-w-[44ch] text-sm font-semibold uppercase leading-[1.65] tracking-[0.08em] text-white/62 lg:text-base">
                      {value}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stripped footer replaced with Home page Footer */}
      <Footer />
    </main>
  );
}
