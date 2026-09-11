"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Download,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PROSPECTUS_EMAIL_HREF =
  "mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Prospectus%20Request";
const PARTNERSHIP_INQUIRY_HREF =
  "mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Partnership%20Inquiry";

const partnershipPackages = [
  {
    id: "naming-rights",
    level: "Naming Rights Partner",
    tagline: "Foremost Strategic Association",
    roleAndValue:
      "Become the programme’s foremost strategic partner and own its highest level of brand association. Shape the overarching leadership narrative, secure dominant visibility across the full three-day journey, position senior executives on premier platforms and activate category-exclusive talent, customer, enterprise and ESG opportunities.",
    benefits: [
      "Programme-wide title co-branding across all digital, print, and stage collateral",
      "Keynote speaking platform at the Opening Plenary and Global Leadership Finale",
      "Category exclusivity across talent pipeline, enterprise, and ESG activations",
      "Executive host positioning for flagship masterclasses and opportunity platforms",
      "Curated direct access to the 200 selected emerging women leaders",
      "Comprehensive post-programme impact reporting and longitudinal cohort tracking",
    ],
    highlight: true,
  },
  {
    id: "official-partner",
    level: "Official Partner",
    tagline: "Major Programme Pillar Leadership",
    roleAndValue:
      "Lead a major programme pillar aligned with your organisation’s strategic priorities. Secure prominent brand positioning, executive thought leadership, curated stakeholder engagement, and the opportunity to launch a meaningful talent, education, enterprise or leadership commitment.",
    benefits: [
      "Branding and leadership of an official summit programme pillar",
      "Executive panelist position and thought-leadership spotlight",
      "Curated stakeholder roundtables and direct talent pipeline access",
      "Platform to launch scholarship, employment, or supplier-diversity initiatives",
      "High-visibility brand placement across media releases and digital coverage",
      "Post-summit participation analytics and ESG compliance documentation",
    ],
    highlight: false,
  },
  {
    id: "industry-partner",
    level: "Industry Partner",
    tagline: "High-Contact Delegate Experience",
    roleAndValue:
      "Own a distinctive, high-contact delegate experience such as the Opportunity Exchange™, Capital Room™, Digital Leadership Lab or Graduation Experience. Create memorable brand engagement, demonstrate products or services and generate consent-based customer, talent and enterprise leads.",
    benefits: [
      "Exclusive experiential ownership of a dedicated summit destination",
      "Product showcase, hands-on lab demonstration, or simulation lead",
      "Consent-based lead generation across qualified emerging leaders",
      "Curated connections to women entrepreneurs, funders, and procurement heads",
      "Targeted networking and interactive breakout sessions",
      "Branded event photography, video assets, and social amplification",
    ],
    highlight: false,
  },
  {
    id: "experience-partner",
    level: "Experience Partner",
    tagline: "Sector-Specific Pipeline Leadership",
    roleAndValue:
      "Lead a sector-specific leadership, talent or enterprise pipeline. Position your organisation as an industry authority while identifying future employees, women-owned suppliers, emerging entrepreneurs, and potential customers within a strategically relevant audience.",
    benefits: [
      "Position your brand as the leading sector authority in your industry",
      "Identification and engagement of specialized technical and executive talent",
      "Dedicated interactive session with relevant startup founders and suppliers",
      "Brand recognition across track-specific publications and badges",
      "Opportunity to deliver specialist case studies or executive masterclasses",
    ],
    highlight: false,
  },
  {
    id: "panel-partner",
    level: "Panel Partner",
    tagline: "Executive Thought Leadership Alignment",
    roleAndValue:
      "Align your brand with one focused, high-value leadership conversation. Position an appropriately qualified executive as a thought leader, engage a relevant audience segment and extend the conversation through approved digital content and stakeholder engagement.",
    benefits: [
      "Speaking role for a senior executive on a premier plenary panel",
      "Positioning as a leading voice on innovation, leadership, and transformation",
      "Distribution of institutional thought leadership, research, or policy papers",
      "Digital content integration and interview clips across EmpowaHer channels",
      "Direct delegate engagement following the executive panel discussion",
    ],
    highlight: false,
  },
  {
    id: "premium-exhibitor",
    level: "Premium Exhibitor",
    tagline: "Opportunity Marketplace Activation",
    roleAndValue:
      "Secure a premium activation within the Opportunity Marketplace. Showcase products, services, careers, funding or development opportunities while generating qualified, consent-based leads through scheduled delegate engagement.",
    benefits: [
      "Dedicated exhibition space inside the Opportunity Marketplace",
      "Direct engagement with delegates for talent recruitment and product adoption",
      "Scheduled walkthroughs and interactive booth demonstrations",
      "Company listing in the official summit guide, digital prospectus, and app",
      "Direct face-to-face contact with all 200 summit delegates and invited executives",
    ],
    highlight: false,
  },
];

const industrySectors = [
  "Financial Services & Banking",
  "Technology, Telecoms & Digital",
  "Energy, Mining & Resources",
  "FMCG, Retail & Consumer Goods",
  "Healthcare, Life Sciences & Pharmaceuticals",
  "Professional, Legal & Advisory Services",
  "Manufacturing, Automotive & Logistics",
  "Government & Public Sector Agencies",
  "Development Finance & Philanthropic Foundations",
  "Higher Education & Business Schools",
  "Other",
];

const strategicObjectivesList = [
  "Talent Pipeline & Executive Recruitment",
  "Brand Leadership & Executive Visibility",
  "Women-Owned Enterprise & Supplier Development",
  "Customer Acquisition & High-Value Engagement",
  "ESG, DE&I & Measurable Impact Reporting",
  "Opportunity Marketplace Exhibition & Product Showcase",
];

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
    image: "/feature-image12.jpg",
    imageAlt:
      "Young professional women studying together in an academic setting",
  },
  {
    id: "placements",
    number: "02",
    label: "GRADUATE PLACEMENTS AND INTERNSHIPS",
    value: "WORKPLACE EXPERIENCE AND MEANINGFUL EMPLOYMENT",
    image: "/feature-image16.jpg",
    imageAlt: "Professional African woman in a business workplace setting",
  },
  {
    id: "funding",
    number: "03",
    label: "FUNDING AND PROCUREMENT",
    value: "CAPITAL, SUPPLIER DEVELOPMENT AND COMMERCIAL OPPORTUNITIES",
    image: "/feature-image17.jpg",
    imageAlt: "Women in an enterprise business meeting discussing commerce",
  },
];

export function PartnershipOpportunities() {
  const [selectedPackage, setSelectedPackage] = useState<string>("Official Partner");
  const [selectedSector, setSelectedSector] = useState<string>("");
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([]);
  const [revealedDeliverables, setRevealedDeliverables] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    organisation: "",
    email: "",
    phone: "",
    message: "",
    input_3: "",
    input_4: "",
    input_5: "",
    input_7: "",
    input_8: "",
    input_10: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleDeliverables = (pkgId: string) => {
    setRevealedDeliverables((prev) => ({
      ...prev,
      [pkgId]: !prev[pkgId],
    }));
  };

  const allRevealed = partnershipPackages.every((pkg) => revealedDeliverables[pkg.id]);

  const toggleAllDeliverables = () => {
    const nextState = !allRevealed;
    const updated: Record<string, boolean> = {};
    partnershipPackages.forEach((pkg) => {
      updated[pkg.id] = nextState;
    });
    setRevealedDeliverables(updated);
  };

  const handlePackageSelect = (pkgName: string) => {
    setSelectedPackage(pkgName);
    const formElem = document.getElementById("partnership-form");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleObjective = (obj: string) => {
    setSelectedObjectives((prev) =>
      prev.includes(obj) ? prev.filter((item) => item !== obj) : [...prev, obj]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const fieldMapping: Record<string, string> = {
      input_3: "fullName",
      fullName: "input_3",
      input_4: "jobTitle",
      jobTitle: "input_4",
      input_5: "organisation",
      organisation: "input_5",
      input_7: "email",
      email: "input_7",
      input_8: "phone",
      phone: "input_8",
      input_10: "message",
      message: "input_10",
    };
    const alternateKey = fieldMapping[name];
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(alternateKey ? { [alternateKey]: value } : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Gravity Forms Form ID 3 field mapping:
      // Field 1:  Partnership Package
      // Field 3:  Full Name
      // Field 4:  Executive Role / Designation
      // Field 5:  Organisation / Company Name
      // Field 6:  Industry Sector
      // Field 7:  Work Email Address
      // Field 8:  Phone / Mobile Number
      // Field 9:  Key Strategic Objectives
      // Field 10: Proposed Focus Area / Notes
      const payload = {
        input_1: selectedPackage,
        input_3: formData.fullName,
        input_4: formData.jobTitle,
        input_5: formData.organisation,
        input_6: selectedSector,
        input_7: formData.email,
        input_8: formData.phone,
        input_9: selectedObjectives.join(", "),
        input_10: formData.message || "",
        package: selectedPackage,
        fullName: formData.fullName,
        jobTitle: formData.jobTitle,
        organisation: formData.organisation,
        sector: selectedSector,
        email: formData.email,
        phone: formData.phone,
        objectives: selectedObjectives,
        message: formData.message,
      };

      const res = await fetch("/api/submit-partnership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission could not be completed. Please try again or contact our executive desk.");
      }

      setIsSubmitted(true);
      const formElem = document.getElementById("partnership-form");
      if (formElem) {
        formElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (err: any) {
      console.error("Partnership form error:", err);
      setSubmitError(
        err?.message || "An unexpected error occurred. You can also email our executive office directly at doric@empowaworx.co.za."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setFormData({
      fullName: "",
      jobTitle: "",
      organisation: "",
      email: "",
      phone: "",
      message: "",
      input_3: "",
      input_4: "",
      input_5: "",
      input_7: "",
      input_8: "",
      input_10: "",
    });
    setSelectedObjectives([]);
    setSelectedSector("");
  };

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }
    const heroImg = document.getElementById("partnerships-hero-parallax-img");
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

  return (
    <main
      id="top"
      className="min-h-screen bg-[#ffffff] font-sans text-[#3f3f3f] selection:bg-[#ed027e] selection:text-[#ffffff]"
    >
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col">
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Top Header */}
          <Header currentPath="/partnerships" />

          {/* Background Image with Ambient Overlay */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img
              id="partnerships-hero-parallax-img"
              src="/feature-image13.jpg"
              alt="Professional women collaborating in a bright contemporary workplace"
              className="h-full w-full object-cover object-[54%_4rem] sm:object-[54%_4.5rem] will-change-transform"
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
              <span>Partnership Ecosystem</span>
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
                Partnership Opportunities
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
                  <span>A HIGH-VALUE LEADERSHIP,</span>
                  <br />
                  <span className="text-[#ed027e]">TALENT &amp; ENTERPRISE</span>
                  <br />
                  <span>ECOSYSTEM</span>
                </h1>

                {/* Hero CTAs */}
                <div
                  className="hero-reveal mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start"
                  style={{
                    animationDelay: "300ms",
                  }}
                >
                  <a
                    href="#partnership-form"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:bg-[#ed027e]/90 hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Partner With Us</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#packages"
                    className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#3f3f3f] hover:scale-[1.02] sm:w-auto"
                  >
                    <span>View Packages</span>
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
                    EmpowaHer is not a conventional sponsorship platform. It connects partners with Africa&apos;s next generation of women leaders through one integrated investment.
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
                    Designed for partners ready to build leadership visibility, strengthen talent pipelines, and convert inclusion commitments into measurable commercial opportunity.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Commercial Value Section */}
      <section
        id="commercial-value"
        className="border-t-4 border-[#ed027e] bg-[#ffffff] px-5 py-20 text-[#3f3f3f] sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="reveal mb-12 max-w-2xl">
            <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
              <span>01 — Commercial Value</span>
            </div>
            <h2 className="font-heading text-[clamp(2.35rem,4.5vw,4rem)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-[#3f3f3f]">
              <span>Strategic Opportunity &amp; Return</span>
            </h2>
            <p className="mt-3 font-sans text-[0.875rem] font-normal leading-[1.6] text-[#3f3f3f]/70">
              <span>EmpowaHer delivers measurable business, talent and brand returns aligned with corporate strategic priorities.</span>
            </p>
          </div>

          <div className="border-t border-black/10">
            {commercialValues.map(({ number, icon: Icon, title, description }) => {
              const isPinkRow =
                number === "01" || number === "03" || number === "05";
              return (
                <article
                  key={number}
                  className={`reveal group relative grid grid-cols-[4rem_1fr] gap-5 border-b border-black/10 px-0 py-8 sm:grid-cols-[6rem_2rem_1fr] sm:gap-6 lg:grid-cols-[7rem_2.5rem_1fr] lg:py-10 ${
                    isPinkRow
                      ? "bg-[#ed027e] text-white hover:brightness-105 hover:scale-[1.01] hover:shadow-lg cursor-pointer transition-[transform,filter,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] px-4 sm:px-6 rounded-lg"
                      : Number(number) % 2 === 0
                      ? "bg-[#F9F4F7] hover:bg-[#ed027e]/10 hover:scale-[1.01] hover:shadow-md cursor-pointer transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] px-4 sm:px-6 rounded-lg"
                      : "bg-white hover:bg-[#ed027e]/10 hover:scale-[1.01] hover:shadow-md cursor-pointer transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] px-4 sm:px-6 rounded-lg"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`font-heading text-[3.5rem] font-black leading-none tracking-[-0.02em] sm:text-[4.5rem] transition-colors duration-300 ${
                      isPinkRow ? "text-white/30" : "text-black/10"
                    }`}
                  >
                    {number}
                  </span>
                  <Icon
                    className={`mt-1 hidden h-6 w-6 sm:block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 ${
                      isPinkRow ? "text-white" : "text-[#ed027e]"
                    }`}
                    strokeWidth={1.8}
                  />
                  <div>
                    <h3
                      className={`font-heading text-lg font-black uppercase tracking-[-0.02em] sm:text-xl transition-colors duration-300 ${
                        isPinkRow ? "text-white" : "text-[#3f3f3f]"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`mt-2 max-w-[66ch] font-sans text-sm font-normal leading-[1.65] ${
                        isPinkRow ? "text-white/90" : "text-[#3f3f3f]/70"
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

      {/* 02 — Signature Tracks Section */}
      <section
        id="tracks"
        className="w-full bg-[#0D0D0D] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="reveal grid w-full grid-cols-1 gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
                <span>02 — Signature Tracks</span>
              </div>
              <h2 className="font-heading text-[clamp(2.5rem,4.5vw,4.25rem)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-white">
                <span>Signature Tracks</span>
              </h2>
            </div>
            <p className="max-w-[34rem] self-end font-sans text-[0.875rem] font-normal leading-[1.65] text-white/70 sm:text-base">
              Partner-owned opportunities designed for visible investment in education, workplace experience, capital access and commercial growth.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 pt-10 lg:grid-cols-[35fr_65fr] lg:gap-8">
            <figure className="reveal min-h-[520px] overflow-hidden rounded-2xl">
              <img
                src="/feature-image18.jpg"
                alt="Professional African woman in a business workplace setting"
                className="h-full w-full rounded-2xl object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
            </figure>

            <div className="grid grid-cols-1 gap-6 lg:gap-8">
              {partnershipTracks.slice(0, 2).map((_mpRecord) => {
                const { id, number, label, value } = _mpRecord;
                return (
                  <article
                    key={id}
                    className="reveal flex min-h-[250px] flex-col justify-between rounded-2xl border-b-2 border-[#ed027e] bg-white/[0.025] p-8 will-change-transform transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:bg-white/[0.06] hover:shadow-xl lg:min-h-[310px] lg:p-10"
                  >
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#ed027e]">
                      Track {number}
                    </span>
                    <div>
                      <h3 className="font-heading text-[clamp(1.75rem,3.2vw,2.75rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        {label}
                      </h3>
                      <p className="mt-4 max-w-[38ch] font-sans text-[0.9375rem] font-medium leading-[1.55] text-white/80">
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
                    className="reveal flex min-h-[320px] flex-col justify-between rounded-2xl border-b-2 border-[#ed027e] bg-white/[0.025] p-8 will-change-transform transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:bg-white/[0.06] hover:shadow-xl lg:p-12"
                  >
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#ed027e]">
                      Track {number}
                    </span>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_1fr] lg:items-end">
                      <h3 className="font-heading text-[clamp(1.85rem,3.5vw,3rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        {label}
                      </h3>
                      <p className="max-w-[44ch] font-sans text-[0.9375rem] font-medium leading-[1.55] text-white/80 lg:text-base">
                        {value}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Available Partnership Packages */}
      <section
        id="packages"
        className="relative w-full border-t-4 border-[#ed027e] bg-[#111111] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="reveal grid w-full grid-cols-1 gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
                <span>03 — Partnership Architecture</span>
              </div>
              <h2 className="font-heading text-[clamp(2.5rem,4.5vw,4.25rem)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-white">
                <span>Available Package Categories</span>
                <br />
                <span className="text-[#ed027e]">&amp; Strategic Benefits</span>
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="max-w-[34rem] font-sans text-[0.9375rem] font-normal leading-[1.65] text-white/75 sm:text-base">
                Derived directly from our official 2026 Partnership Proposal. Each tier is purposefully designed to convert corporate investment into measurable talent, enterprise, customer, and ESG outcomes.
              </p>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={toggleAllDeliverables}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white"
                >
                  <span>{allRevealed ? "Hide All Deliverables" : "Reveal All Deliverables"}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      allRevealed ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Package Cards Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partnershipPackages.map((pkg) => {
              const isSelected = selectedPackage === pkg.level;
              return (
                <article
                  key={pkg.id}
                  className={`reveal group relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300 ${
                    pkg.highlight
                      ? "border-[#ed027e] bg-gradient-to-b from-[#ed027e]/15 via-white/[0.04] to-black shadow-2xl shadow-[#ed027e]/15"
                      : "border-white/15 bg-white/[0.03] hover:border-[#ed027e]/60 hover:bg-white/[0.06]"
                  } ${isSelected ? "ring-2 ring-[#ed027e]" : ""}`}
                >
                  {pkg.highlight && (
                    <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-[#ed027e] px-3.5 py-1 font-heading text-[0.625rem] font-black uppercase tracking-[0.18em] text-white shadow-md">
                      <Sparkles className="h-3 w-3" />
                      <span>Premier Tier</span>
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#ed027e]">
                        {pkg.tagline}
                      </span>
                      {isSelected && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ed027e] text-white">
                          <Check className="h-3 w-3" />
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading mt-3 text-2xl font-black uppercase text-white sm:text-3xl">
                      {pkg.level}
                    </h3>

                    <p className="mt-4 text-xs font-medium leading-relaxed text-white/80 sm:text-sm">
                      {pkg.roleAndValue}
                    </p>

                    <div className="mt-6 border-t border-white/10 pt-5">
                      <button
                        type="button"
                        onClick={() => toggleDeliverables(pkg.id)}
                        className="group/toggle flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-left transition-all duration-200 hover:border-[#ed027e]/60 hover:bg-[#ed027e]/10"
                        aria-expanded={Boolean(revealedDeliverables[pkg.id])}
                      >
                        <span className="font-heading text-[0.6875rem] font-bold uppercase tracking-wider text-white/85 group-hover/toggle:text-[#ed027e] transition-colors">
                          {revealedDeliverables[pkg.id]
                            ? "Hide Strategic Deliverables"
                            : "Reveal Key Strategic Deliverables"}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[#ed027e]">
                          <span className="text-[0.6875rem] font-bold">({pkg.benefits.length})</span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${
                              revealedDeliverables[pkg.id] ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>

                      {revealedDeliverables[pkg.id] && (
                        <div className="mt-4 pt-1 animate-in fade-in duration-300">
                          <span className="mb-3 block font-heading text-[0.6875rem] font-bold uppercase tracking-wider text-white/60">
                            Key Strategic Deliverables:
                          </span>
                          <ul className="space-y-2.5">
                            {pkg.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-white/75">
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ed027e]" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <button
                      type="button"
                      onClick={() => handlePackageSelect(pkg.level)}
                      className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
                        isSelected
                          ? "bg-white text-black shadow-lg hover:bg-white/90"
                          : "border border-white/30 bg-white/5 text-white hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white"
                      }`}
                    >
                      <span>{isSelected ? "Selected in Form" : "Select Package"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — Partnership Lead-Generation Form */}
      <section
        id="partnership-form"
        className="relative w-full scroll-mt-20 border-t-4 border-[#ed027e] bg-[#0D0D0D] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-block border-b-2 border-[#ed027e] pb-1 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
              <span>04 — Express Partnership Interest</span>
            </div>
            <h2 className="font-heading text-[clamp(2.35rem,4.5vw,4.25rem)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-white">
              <span>Partner With EmpowaHer™ 2026</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[46rem] font-sans text-sm leading-relaxed text-white/70 sm:text-base">
              Submit your expression of interest below. Our executive leadership team will promptly review your strategic priorities and provide the confidential prospectus and tailored proposal.
            </p>
          </div>

          {isSubmitted ? (
            <div className="rounded-3xl border border-[#ed027e]/40 bg-gradient-to-b from-[#ed027e]/15 via-white/[0.04] to-black p-8 text-center sm:p-14 shadow-2xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-xl shadow-[#ed027e]/40">
                <Check className="h-8 w-8" strokeWidth={3} />
              </div>
              <h3 className="font-heading mt-6 text-2xl font-black uppercase text-white sm:text-3xl">
                Partnership Inquiry Received
              </h3>
              <p className="mx-auto mt-3 max-w-[36rem] text-sm leading-relaxed text-white/80 sm:text-base">
                Thank you for indicating your interest in partnering with <strong>EmpowaHer™ Leadership Summit 2026</strong> as a <strong>{selectedPackage}</strong>. An executive director will contact you within 24 hours.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/EmpowaHer-Partnership-Proposal-2026.pdf"
                  download="EmpowaHer-Partnership-Proposal-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ed027e] px-8 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all hover:scale-105 hover:bg-[#ed027e]/90"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Proposal (PDF)</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-white hover:text-black"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            </div>
          ) : (
            <form
              id="gform_3"
              data-formid="3"
              method="POST"
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/15 bg-white/[0.025] p-6 shadow-2xl backdrop-blur-md sm:p-10 lg:p-12"
            >
              {/* Gravity Forms Hidden Fields (Form ID 3) */}
              <input type="hidden" name="gform_form_id" value="3" />
              <input type="hidden" name="is_submit_3" value="1" />
              <input type="hidden" name="gform_submit" value="3" />
              <input type="hidden" id="input_3_1" name="input_1" value={selectedPackage} />
              <input type="hidden" id="input_3_9" name="input_9" value={selectedObjectives.join(", ")} />

              {submitError && (
                <div className="mb-8 rounded-2xl border border-red-500/50 bg-red-500/10 p-5 text-sm text-red-200">
                  <p className="font-bold">Submission Notice:</p>
                  <p className="mt-1 text-xs sm:text-sm">{submitError}</p>
                </div>
              )}

              {/* Package Selection Strip */}
              <div className="mb-10 border-b border-white/10 pb-8">
                <label className="block text-left">
                  <span className="block font-heading text-xs font-black uppercase tracking-[0.2em] text-[#ed027e]">
                    Step 1: Select Preferred Partnership Package *
                  </span>
                  <span className="mt-1 block text-xs text-white/60">
                    Choose the category that best aligns with your organisation&apos;s strategic objectives.
                  </span>
                </label>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Naming Rights Partner",
                    "Official Partner",
                    "Industry Partner",
                    "Experience Partner",
                    "Panel Partner",
                    "Premium Exhibitor",
                    "Bespoke / Custom Partnership",
                  ].map((pkgName) => {
                    const active = selectedPackage === pkgName;
                    return (
                      <button
                        key={pkgName}
                        type="button"
                        onClick={() => setSelectedPackage(pkgName)}
                        className={`flex items-center justify-between rounded-xl border p-4 text-left text-xs font-bold uppercase tracking-wider transition-all ${
                          active
                            ? "border-[#ed027e] bg-[#ed027e] text-white shadow-md shadow-[#ed027e]/30"
                            : "border-white/15 bg-white/[0.03] text-white/80 hover:border-white/40 hover:bg-white/[0.06]"
                        }`}
                      >
                        <span className="truncate">{pkgName}</span>
                        {active && <Check className="h-4 w-4 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information Fields */}
              <div className="mb-10 border-b border-white/10 pb-8">
                <span className="mb-5 block font-heading text-xs font-black uppercase tracking-[0.2em] text-[#ed027e]">
                  Step 2: Partner Contact Details
                </span>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="input_3_3" className="block text-left text-xs font-bold uppercase tracking-wider text-white/70">
                      Full Name <span className="text-[#ed027e]">*</span>
                    </label>
                    <input
                      id="input_3_3"
                      name="input_3"
                      type="text"
                      required
                      value={formData.input_3 || formData.fullName || ""}
                      onChange={handleInputChange}
                      placeholder="e.g. Naledi Khumalo"
                      className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#ed027e] focus:outline-none focus:ring-1 focus:ring-[#ed027e]"
                    />
                  </div>

                  <div>
                    <label htmlFor="input_3_4" className="block text-left text-xs font-bold uppercase tracking-wider text-white/70">
                      Executive Role / Designation <span className="text-[#ed027e]">*</span>
                    </label>
                    <input
                      id="input_3_4"
                      name="input_4"
                      type="text"
                      required
                      value={formData.input_4 || formData.jobTitle || ""}
                      onChange={handleInputChange}
                      placeholder="e.g. Chief Marketing Officer / Head of Sustainability"
                      className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#ed027e] focus:outline-none focus:ring-1 focus:ring-[#ed027e]"
                    />
                  </div>

                  <div>
                    <label htmlFor="input_3_5" className="block text-left text-xs font-bold uppercase tracking-wider text-white/70">
                      Organisation / Company Name <span className="text-[#ed027e]">*</span>
                    </label>
                    <input
                      id="input_3_5"
                      name="input_5"
                      type="text"
                      required
                      value={formData.input_5 || formData.organisation || ""}
                      onChange={handleInputChange}
                      placeholder="e.g. Standard Bank / Anglo American / Naspers"
                      className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#ed027e] focus:outline-none focus:ring-1 focus:ring-[#ed027e]"
                    />
                  </div>

                  <div>
                    <label htmlFor="input_3_6" className="block text-left text-xs font-bold uppercase tracking-wider text-white/70">
                      Industry Sector <span className="text-[#ed027e]">*</span>
                    </label>
                    <select
                      id="input_3_6"
                      name="input_6"
                      required
                      value={selectedSector}
                      onChange={(e) => setSelectedSector(e.target.value)}
                      className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-[#171717] px-4 py-3 text-sm text-white focus:border-[#ed027e] focus:outline-none focus:ring-1 focus:ring-[#ed027e]"
                    >
                      <option value="" disabled>
                        Select Industry / Sector
                      </option>
                      {industrySectors.map((sector) => (
                        <option key={sector} value={sector}>
                          {sector}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="input_3_7" className="block text-left text-xs font-bold uppercase tracking-wider text-white/70">
                      Work Email Address <span className="text-[#ed027e]">*</span>
                    </label>
                    <input
                      id="input_3_7"
                      name="input_7"
                      type="email"
                      required
                      value={formData.input_7 || formData.email || ""}
                      onChange={handleInputChange}
                      placeholder="e.g. naledi@corporation.co.za"
                      className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#ed027e] focus:outline-none focus:ring-1 focus:ring-[#ed027e]"
                    />
                  </div>

                  <div>
                    <label htmlFor="input_3_8" className="block text-left text-xs font-bold uppercase tracking-wider text-white/70">
                      Phone / Mobile Number <span className="text-[#ed027e]">*</span>
                    </label>
                    <input
                      id="input_3_8"
                      name="input_8"
                      type="tel"
                      required
                      value={formData.input_8 || formData.phone || ""}
                      onChange={handleInputChange}
                      placeholder="e.g. +27 82 123 4567"
                      className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#ed027e] focus:outline-none focus:ring-1 focus:ring-[#ed027e]"
                    />
                  </div>
                </div>
              </div>

              {/* Strategic Objectives Multi-select */}
              <div className="mb-10 border-b border-white/10 pb-8">
                <label className="block text-left">
                  <span className="block font-heading text-xs font-black uppercase tracking-[0.2em] text-[#ed027e]">
                    Step 3: Key Strategic Objectives
                  </span>
                  <span className="mt-1 block text-xs text-white/60">
                    Select the priorities your organization aims to achieve through this partnership.
                  </span>
                </label>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {strategicObjectivesList.map((obj) => {
                    const active = selectedObjectives.includes(obj);
                    return (
                      <button
                        key={obj}
                        type="button"
                        onClick={() => toggleObjective(obj)}
                        className={`flex items-center gap-3 rounded-xl border p-3.5 text-left text-xs font-semibold transition-all ${
                          active
                            ? "border-[#ed027e] bg-[#ed027e]/20 text-white"
                            : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/30 hover:bg-white/[0.05]"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                            active
                              ? "border-[#ed027e] bg-[#ed027e] text-white"
                              : "border-white/30 bg-transparent"
                          }`}
                        >
                          {active && <Check className="h-3 w-3" />}
                        </span>
                        <span>{obj}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additional Message / Integration Idea */}
              <div className="mb-10">
                <label htmlFor="input_3_10" className="block text-left text-xs font-bold uppercase tracking-wider text-white/70">
                  Proposed Focus Area / Bespoke Requirements (Optional)
                </label>
                <textarea
                  id="input_3_10"
                  name="input_10"
                  rows={4}
                  value={formData.input_10 || formData.message || ""}
                  onChange={handleInputChange}
                  placeholder="Share any specific focus areas, desired speaking tracks, scholarship cohort ideas, or timeline considerations..."
                  className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#ed027e] focus:outline-none focus:ring-1 focus:ring-[#ed027e]"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
                <p className="text-xs text-white/50 text-left">
                  By submitting, you consent to EmpowaHer™ contacting you regarding summit partnership opportunities.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ed027e] px-10 py-4 font-heading text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#ed027e]/30 transition-all duration-200 hover:scale-[1.03] hover:bg-[#ed027e]/90 disabled:opacity-50 sm:w-auto"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Submit Partnership Inquiry</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 05 — Call For Strategic Partners & Funders */}
      <section
        id="funder-cta"
        className="relative w-full overflow-hidden border-t-4 border-[#ed027e] bg-gradient-to-b from-[#11161F] via-[#0D0D0D] to-black px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
      >
        {/* Glow ambient circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#ed027e]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-[#ed027e]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="reveal grid w-full grid-cols-1 gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
                <span>03 — For Prospective Funders &amp; Strategic Partners</span>
              </div>
              <h2 className="font-heading text-[clamp(2.5rem,4.5vw,4.25rem)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-white">
                <span>Invest In Africa’s</span>
                <br />
                <span className="text-[#ed027e]">Female Leadership Capital.</span>
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="max-w-[34rem] font-sans text-[0.9375rem] font-normal leading-[1.65] text-white/75 sm:text-base">
                Join forward-thinking corporations, Development Finance Institutions (DFIs), foundations, and impact investors aligning institutional capital with measurable female leadership progression.
              </p>
            </div>
          </div>

          {/* Partnership Tiers & Value Pillars Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#ed027e]/50 hover:bg-white/[0.06]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ed027e]/20 text-[#ed027e]">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-heading mt-4 text-base font-bold uppercase text-white">
                Title &amp; Plenary Partner
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                Unrivalled brand association across all mainstage proceedings, keynotes, and media broadcasts.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#ed027e]/50 hover:bg-white/[0.06]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ed027e]/20 text-[#ed027e]">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <h3 className="font-heading mt-4 text-base font-bold uppercase text-white">
                Track &amp; Masterclass Host
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                Direct ownership of one of the 9 executive tracks, positioning your leaders as continental subject authorities.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#ed027e]/50 hover:bg-white/[0.06]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ed027e]/20 text-[#ed027e]">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-heading mt-4 text-base font-bold uppercase text-white">
                Cohort Scholarship Sponsor
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                Sponsor fully funded cohorts of 10, 25, or 50 high-calibre young women from under-represented sectors.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#ed027e]/50 hover:bg-white/[0.06]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ed027e]/20 text-[#ed027e]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-heading mt-4 text-base font-bold uppercase text-white">
                ESG &amp; Impact Audited
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                Receive audited impact metrics, talent placement tracking, and compliance documentation for ESG reporting.
              </p>
            </div>
          </div>

          {/* Action Callout Box */}
          <div className="mt-12 rounded-3xl border border-[#ed027e]/30 bg-gradient-to-r from-[#ed027e]/15 via-[#1C2128] to-[#ed027e]/10 p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-[48rem]">
                <span className="rounded-full bg-[#ed027e] px-3.5 py-1 text-[0.625rem] font-black uppercase tracking-[0.2em] text-white">
                  Limited Partnership Positions
                </span>
                <h3 className="font-heading mt-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                  Download The Complete Partnership Proposal &amp; Prospectus
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                  Detailed breakdown of corporate sponsorship packages, branding deliverables, executive cohort demographics, and bespoke commercial integration options.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:shrink-0">
                <a
                  href="/EmpowaHer-Partnership-Proposal-2026.pdf"
                  download="EmpowaHer-Partnership-Proposal-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-8 py-4 font-heading text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#ed027e]/30 transition-all duration-200 hover:scale-[1.03] hover:bg-[#ed027e]/90"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Prospectus (PDF)</span>
                </a>

                <a
                  href="mailto:doric@empowaworx.co.za?subject=EmpowaHer%20Strategic%20Partnership%20and%20Sponsorship%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-black hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4" />
                  <span>Schedule Strategic Meeting</span>
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#ed027e]" />
                <span>Executive Office: +27 (0) 11 482 7256 / +27 (0) 65 267 8169</span>
              </div>
              <div>
                <span>Direct Executive Desk: doric@empowaworx.co.za</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Site Footer with Contact & Legal */}
      <Footer />
    </main>
  );
}
