"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  Globe2,
  Mail,
  Phone,
  Play,
  Users,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PROGRAMME_PDF_PATH = "/EmpowaHER-Programme-2026.pdf";
const MEDIA_ENQUIRY_EMAIL =
  "mailto:boitumelo@empowaworx.co.za?subject=EmpowaHer%20Media%20Enquiry";

interface Fact {
  id: string;
  value: string;
  label: string;
  icon: typeof Calendar;
}

interface ContentSection {
  id: string;
  overline: string;
  heading: string;
  paragraphs: string[];
  subheading?: string;
  bullets?: string[];
  closing?: string[];
}

interface HighlightLink {
  title: string;
  action: string;
  href: string;
}

const keyFacts: Fact[] = [
  {
    id: "date",
    value: "29–31 OCTOBER 2026",
    label: "Summit dates",
    icon: Calendar,
  },
  {
    id: "women",
    value: "200 EXCEPTIONAL WOMEN",
    label: "Selected delegates",
    icon: Users,
  },
  {
    id: "reach",
    value: "PAN-AFRICAN REACH",
    label: "Continental platform",
    icon: Globe2,
  },
];

const sections: ContentSection[] = [
  {
    id: "turning-africas-female-talent",
    overline: "Leadership Pipeline",
    heading:
      "Turning Africa's Female Talent into Leadership, Enterprise and Economic Value",
    paragraphs: [
      "Africa has no shortage of talented, ambitious and capable young women. The greater challenge is ensuring that this talent is systematically identified, developed and connected to opportunity.",
      "EmpowaHer™ has been purposefully structured to move beyond inspiration. It provides a practical leadership pipeline connecting emerging women leaders with senior executives, employers, investors, development-finance institutions, business schools, entrepreneurs, policymakers, mentors and professional organisations capable of advancing their careers, enterprises and leadership journeys.",
      "The Summit will equip delegates with the commercial insight, leadership capability, institutional exposure and high-value relationships required to advance their careers, grow sustainable enterprises, strengthen their financial agency and contribute meaningfully to Africa's competitiveness.",
    ],
  },
  {
    id: "future-ready-womens-leadership-pipeline",
    overline: "Programme Priorities",
    heading: "Building a Future-Ready Women's Leadership Pipeline",
    paragraphs: [
      "Aligned with the strategic priorities of the EmpowaHer™ Leadership Summit 2026 | THE FUTURE IS FEMALE™, the programme will advance:",
    ],
    bullets: [
      "Women's leadership, representation and participation in decision-making;",
      "Education, employability, future skills and career mobility;",
      "Entrepreneurship, enterprise funding and market access;",
      "Digital leadership, artificial intelligence, innovation and responsible influence;",
      "Financial literacy, investing, ownership and wealth creation;",
      "Health, wellness, safety and sustainable leadership;",
      "Citizenship, patriotism and measurable social impact;",
      "Executive development, mentorship and global exposure; and",
      "Governance, board readiness and institutional leadership.",
    ],
    closing: [
      "Through executive dialogues, practical masterclasses, leadership laboratories, curated networking exchanges and opportunity platforms, delegates will engage directly with leaders and institutions capable of supporting their professional, entrepreneurial and leadership advancement.",
      "The Summit will culminate in a graduation finale and measurable leadership commitments designed to translate knowledge into career mobility, enterprise growth, financial independence, community impact and increased participation in executive and board leadership.",
    ],
  },
  {
    id: "who-should-be-nominated",
    overline: "Selection Focus",
    heading: "Who Should Be Nominated?",
    paragraphs: [
      "The Summit is intended for high-potential women aged 18–35 across a broad range of professional, entrepreneurial and leadership pathways, including, but not limited to:",
    ],
    bullets: [
      "Graduates and Young Achievers;",
      "Emerging Professionals;",
      "Technical Specialists;",
      "High-Potential Managers;",
      "Managing Executives;",
      "Young C-Suite Executives;",
      "Venture Entrepreneurs;",
      "Social Impact Leaders;",
      "Aspiring Board Members; and",
      "Youth Civic Leaders.",
    ],
    closing: [
      "Nominees should demonstrate leadership potential, professional ambition, entrepreneurial or technical capability, integrity, community commitment and a clear desire to contribute meaningfully to Africa's economic, institutional and social development.",
    ],
  },
  {
    id: "institutional-nomination-requirements",
    overline: "Nomination Requirements",
    heading: "Institutional Nomination and Selection Requirements",
    paragraphs: [
      "Every candidate must be formally nominated or endorsed by an authorised senior leader, executive or recognised mentor within the nominating organisation, institution, industry or professional network.",
    ],
    subheading: "Eligible nominators may include:",
    bullets: [
      "Ministers and Deputy Ministers;",
      "Directors-General and Deputy Directors-General;",
      "Ambassadors, High Commissioners and senior diplomatic representatives;",
      "Chairpersons and members of boards;",
      "Chief Executive Officers and other C-Suite executives across industries;",
      "Managing Directors and Executive Directors;",
      "Media executives and editors;",
      "Established entrepreneurs and business leaders;",
      "Vice-Chancellors and Deputy Vice-Chancellors;",
      "Deans and Heads of Faculty;",
      "Leaders of professional, industry and civil-society organisations;",
      "Recognised mentors and leadership-development practitioners; and",
      "Other appropriately mandated senior institutional leaders.",
    ],
    closing: [
      "To promote diversity, extend the opportunity across the continent and secure broad institutional representation, only one delegate will be selected from each participating organisation or institution.",
      "Organisations are therefore encouraged to undertake a considered internal selection process and nominate the candidate who most strongly demonstrates leadership potential, readiness for advancement and the capacity to multiply the value of the opportunity within her institution, industry, profession or community.",
      "All nominations will be independently assessed against the programme's eligibility requirements, leadership criteria, institutional representation objectives and available capacity. Submission of a nomination does not guarantee selection.",
    ],
  },
  {
    id: "editorial-platform-for-media",
    overline: "Media Centre",
    heading: "A High-Value Editorial Platform for Media Organisations",
    paragraphs: [
      "EmpowaHer™ offers media organisations a timely, commercially relevant and content-rich platform from which to examine one of Africa's most consequential economic and development priorities: how the continent identifies, develops and advances its next generation of women leaders.",
      "The Summit will provide access to senior decision-makers, established women leaders, entrepreneurs, investors, innovators, emerging executives and young professionals whose experiences illuminate both the structural barriers women continue to face and the practical interventions capable of accelerating meaningful progress.",
      "For media houses and their audiences, EmpowaHer™ presents compelling opportunities for:",
    ],
    bullets: [
      "Exclusive interviews with senior leaders, speakers and delegates;",
      "Profiles of emerging women leaders, professionals and entrepreneurs;",
      "Expert commentary on leadership, employment and the future of work;",
      "Conversations about entrepreneurship, access to capital and participation in markets;",
      "Reporting on artificial intelligence, digital influence and innovation;",
      "Features on personal finance, investing, ownership and generational wealth;",
      "Discussions about women's health, safety and sustainable performance;",
      "Analysis of executive leadership, governance and board representation;",
      "Human-interest stories demonstrating measurable career, enterprise and community impact; and",
      "Live broadcasts, panel conversations, thought-leadership features and digital-content partnerships.",
    ],
    closing: [
      "The platform enables media audiences to move beyond familiar narratives about inequality and engage with the people, ideas, investments and institutional solutions shaping a more inclusive, innovative and competitive African economy.",
    ],
  },
];

const aboutParagraphs: string[] = [
  "EmpowaHer™ | THE FUTURE IS FEMALE™ is an executive leadership and advancement platform established to identify, develop, connect and accelerate Africa's next generation of exceptional women leaders aged 18–35.",
  "The platform bridges the gap between potential and opportunity by connecting emerging women leaders with education, employment, entrepreneurship, capital, markets, mentorship, executive development, global exposure and board-readiness pathways.",
  "EmpowaHer™ brings together leaders from business, government, academia, civil society, media, diplomacy and the development community to build a coordinated and sustainable pipeline of women equipped to lead institutions, grow enterprises, shape public policy and contribute meaningfully to Africa’s economic and social advancement.",
  "Through immersive leadership experiences, practical learning, high-value networks and measurable opportunity commitments, EmpowaHer™ seeks to move women from participation to influence, from ambition to achievement, and from leadership to enduring legacy.",
  "EmpowaHer™ is an initiative of EmpowaWorx™, an integrated strategy, communications, stakeholder-engagement, leadership-development and experiential-events company committed to developing people, enterprises, institutions and communities across Africa.",
];

const highlights: HighlightLink[] = [
  {
    title: "EmpowaWomen™ Leadership Summit 2026 event video",
    action: "View video",
    href: "https://www.youtube.com/watch?v=g2T0dzTqQZk&pp=0gcJCf4LAYcqIYzv",
  },
  {
    title: "3rd Annual EmpowaWomen™ Bubbles & Nibbles Leadership Awards 2026 video",
    action: "View video",
    href: "https://www.youtube.com/watch?v=hWWpX0kw26M",
  },
];

function SectionHeader({
  overline,
  heading,
}: {
  overline: string;
  heading: string;
}) {
  return (
    <header className="mb-6">
      <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
        <span>{overline}</span>
      </div>
      <h2 className="max-w-4xl font-heading text-[clamp(1.5rem,2.5vw,2.25rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
        <span>{heading}</span>
      </h2>
      <div className="mt-4 h-0.5 w-12 bg-[#ed027e]" aria-hidden="true" />
    </header>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-3 space-y-2.5 pl-2 sm:pl-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[0.9375rem] font-medium leading-[1.65] text-[#3f3f3f]/85 sm:text-base"
        >
          <span
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ed027e]"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PressSection({ section }: { section: ContentSection }) {
  return (
    <section
      id={section.id}
      className="reveal mx-auto max-w-[1200px] border-b border-[#3f3f3f]/10 px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16"
    >
      <SectionHeader overline={section.overline} heading={section.heading} />
      <div className="max-w-4xl space-y-5 text-[0.9375rem] font-medium leading-[1.65] text-[#3f3f3f]/80 sm:text-base md:space-y-6">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.subheading && (
          <h3 className="pt-2 font-heading text-sm font-bold uppercase tracking-[0.14em] text-[#3f3f3f] sm:text-base">
            {section.subheading}
          </h3>
        )}
        {section.bullets && <BulletList items={section.bullets} />}
        {section.closing &&
          section.closing.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
      </div>
    </section>
  );
}

function KeyFactsStrip() {
  return (
    <section
      className="w-full bg-[#3f3f3f] py-6 text-white"
      aria-label="Key facts"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {keyFacts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.id}
                className="flex items-center justify-start gap-4 px-2 py-4 text-left md:justify-center md:px-6 md:py-2"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#ed027e]"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <strong className="block font-heading text-lg font-black uppercase tracking-tight text-[#ed027e] sm:text-xl md:text-2xl">
                    {fact.value}
                  </strong>
                  <span className="block text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-white/70 sm:text-xs">
                    {fact.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PressRelease() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#3f3f3f] selection:bg-[#ed027e] selection:text-white">
      {/* Official Site Header */}
      <Header currentPath="/press-release" />

      {/* Editorial Magazine Hero Section */}
      <section className="relative overflow-hidden border-b border-[#3f3f3f]/10 bg-white pb-14 pt-24 sm:pb-16 sm:pt-28 md:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Column 1: Main Title & CTAs */}
            <div className="space-y-6 lg:col-span-7 lg:space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3f3f3f]/15 bg-[#3f3f3f]/5 px-3.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-[#3f3f3f] sm:text-[0.6875rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ed027e]" />
                <span>Official Media Centre</span>
                <span className="h-1 w-1 rounded-full bg-[#3f3f3f]/40" />
                <span>Press Release</span>
              </div>

              <h1 className="font-heading text-[clamp(2.5rem,5vw,4.75rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#3f3f3f]">
                <span>EMPOWA</span>
                <br />
                <span className="text-[#ed027e]">HER™</span>
                <br />
                <span>LEADERSHIP</span>
                <br />
                <span>SUMMIT 2026</span>
              </h1>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/nominate"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ed027e]/20 transition-all hover:bg-[#ed027e]/90 hover:scale-[1.02]"
                >
                  <span>Nominate a Leader</span>
                </Link>
                <a
                  href={PROGRAMME_PDF_PATH}
                  download="EmpowaHER-Programme-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#3f3f3f] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-[#3f3f3f] transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white hover:scale-[1.02]"
                >
                  <span>Download Programme (PDF)</span>
                </a>
              </div>
            </div>

            {/* Column 2: Sub-Heading with Brand Indicator */}
            <div className="lg:col-span-2 lg:pt-4">
              <div className="space-y-4">
                <div
                  className="h-1 w-12 bg-[#ed027e]"
                  aria-hidden="true"
                />
                <h2 className="font-heading text-lg font-black uppercase leading-tight tracking-tight text-[#3f3f3f] md:text-xl lg:text-2xl">
                  <span>THE FUTURE IS FEMALE™</span>
                </h2>
              </div>
            </div>

            {/* Column 3: Descriptor */}
            <div className="lg:col-span-3 lg:pt-4">
              <p className="text-[0.9375rem] font-medium leading-[1.65] text-[#3f3f3f]/75 sm:text-base">
                <span>
                  A three-day, continent-wide executive leadership and
                  advancement experience taking place 29–31 October 2026 at
                  EmpowaWorx House, Johannesburg, for 200 Exceptional Women.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Point Key Facts Bar */}
      <KeyFactsStrip />

      {/* Main Press Release Content Body */}
      <main id="press-release" className="bg-white">
        {/* Release Lead Section */}
        <section className="reveal mx-auto max-w-[1200px] border-b border-[#3f3f3f]/10 px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16">
          <div className="mb-4 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
            <span>FOR IMMEDIATE RELEASE | 8 SEPTEMBER 2026</span>
          </div>
          <div className="max-w-4xl space-y-5 text-[0.9375rem] font-medium leading-[1.65] text-[#3f3f3f]/80 sm:text-base md:space-y-6 md:text-lg">
            <p className="text-base font-semibold leading-[1.65] text-[#3f3f3f] sm:text-lg md:text-xl">
              Nominations are officially open for the EmpowaHer™ Leadership Summit
              2026 | THE FUTURE IS FEMALE™, a high-impact, three-day executive
              leadership and advancement experience designed to accelerate
              Africa&apos;s next generation of women leaders.
            </p>
            <p>
              Taking place from 29–31 October 2026 at EmpowaWorx House in
              Johannesburg, the Summit will convene 200 exceptional women aged
              18–35 from corporate organisations, government institutions,
              universities, colleges, entrepreneurial ventures, professional
              bodies, civil-society organisations and communities across South
              Africa and the African continent.
            </p>
            <p>
              The initiative will connect high-potential women with education,
              employment opportunities, capital, markets, mentorship, executive
              sponsorship, influential networks and decision-making platforms
              required to translate potential into measurable economic and
              social progress.
            </p>
            <p>
              Participation in the Summit programme is funded for selected
              delegates. However, travel to and from Johannesburg, accommodation
              and related personal expenses are not included and will remain the
              responsibility of each delegate or her nominating organisation.
            </p>
          </div>
        </section>

        {/* Structured Editorial Sections */}
        {sections.map((section) => (
          <PressSection key={section.id} section={section} />
        ))}

        {/* Executive Pull-Quote Block */}
        <section
          className="reveal bg-[#0D0D0D] py-14 text-white sm:py-16 md:py-20"
          aria-labelledby="pull-quote-title"
        >
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 md:px-12 lg:px-16">
            <h2 id="pull-quote-title" className="sr-only">
              Statement from EmpowaHer Leadership
            </h2>
            <blockquote className="max-w-4xl border-l-2 border-[#ed027e] pl-5 sm:pl-8">
              <span
                className="block font-heading text-6xl font-black leading-none text-[#ed027e] opacity-40 sm:text-7xl"
                aria-hidden="true"
              >
                “
              </span>
              <div className="mt-1 space-y-4 text-base font-medium italic leading-[1.65] text-white/90 sm:text-lg md:text-xl">
                <p>
                  “Africa does not have a shortage of talented, ambitious and
                  capable young women. What remains insufficient is the
                  infrastructure of opportunity connecting that talent to
                  education, employment, capital, markets, mentorship, executive
                  sponsorship and decision-making platforms.
                </p>
                <p>
                  “EmpowaHer™ has been created to close that gap. We are building
                  an integrated leadership pipeline that moves young women from
                  potential to power, from participation to leadership, and from
                  leadership to legacy.
                </p>
                <p>
                  “For the media, this is an important national and continental
                  story. It is a story about economic growth, institutional
                  transformation and Africa&apos;s future competitiveness. By
                  elevating the voices, ideas and achievements of emerging women
                  leaders, the media can help shift the narrative from women as
                  beneficiaries of development to women as investors,
                  innovators, executives, board members and architects of
                  Africa&apos;s future.”
                </p>
              </div>
              <cite className="mt-8 block border-t border-white/15 pt-5 text-xs font-bold uppercase not-italic tracking-[0.2em] text-[#ed027e] sm:text-sm">
                <span>Simphiwe Masiza</span>
                <span className="ml-2 font-normal text-white/60">
                  — Founder and Executive Producer of EmpowaHer™
                </span>
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Nominations Callout */}
        <section
          id="nominations-now-open"
          className="reveal mx-auto max-w-[1200px] border-b border-[#3f3f3f]/10 px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16"
        >
          <SectionHeader
            overline="Nominations Now Open"
            heading="Nominations Now Open"
          />
          <div className="max-w-4xl space-y-5 text-[0.9375rem] font-medium leading-[1.65] text-[#3f3f3f]/80 sm:text-base md:space-y-6">
            <p>
              Companies, government departments, diplomatic missions, educational
              institutions, professional bodies, entrepreneurial organisations,
              media organisations, civil-society organisations and community-based
              organisations are invited to nominate one exceptional, high-potential
              woman from their respective institutions or networks.
            </p>
            <p className="font-semibold text-[#ed027e]">
              Self-nominations will not be considered.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/nominate"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#ed027e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ed027e]/20 transition-all hover:bg-[#ed027e]/90 hover:scale-[1.02]"
            >
              <span>Submit a Nomination</span>
            </Link>
            <Link
              href="/leadership-programme"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#3f3f3f] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-[#3f3f3f] transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white hover:scale-[1.02]"
            >
              <span>View Programme Information</span>
            </Link>
          </div>
        </section>

        {/* About EmpowaHer */}
        <section
          id="about-empowaher"
          className="reveal mx-auto max-w-[1200px] border-b border-[#3f3f3f]/10 px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16"
        >
          <SectionHeader
            overline="About EmpowaHer™"
            heading="About EmpowaHer™"
          />
          <div className="max-w-4xl space-y-5 text-[0.9375rem] font-medium leading-[1.65] text-[#3f3f3f]/80 sm:text-base md:space-y-6">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Leadership Platform Highlights */}
        <section
          className="reveal mx-auto max-w-[1200px] border-b border-[#3f3f3f]/10 px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16"
          aria-labelledby="highlights-title"
        >
          <SectionHeader
            overline="Leadership Platform Highlights"
            heading="Leadership Platform Highlights"
          />
          <div className="grid max-w-5xl gap-4 md:grid-cols-2">
            {highlights.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-32 flex-col items-start justify-between gap-5 rounded-2xl border border-[#3f3f3f]/15 bg-white p-6 shadow-sm transition-all hover:border-[#ed027e] hover:shadow-md sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ed027e]/10 text-[#ed027e] transition-colors group-hover:bg-[#ed027e] group-hover:text-white">
                    <Play className="h-4 w-4 fill-current ml-0.5" />
                  </span>
                  <span className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-[#3f3f3f] md:text-lg">
                    {link.title}
                  </span>
                </div>
                <span className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#ed027e] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition-opacity group-hover:opacity-90 sm:w-auto">
                  <span>{link.action}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Editorial ENDS Signoff */}
        <div className="mx-auto max-w-[1200px] py-12 text-center sm:py-16">
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-12 bg-[#3f3f3f]/20" aria-hidden="true" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#3f3f3f]/40">
              ENDS
            </span>
            <div className="h-px w-12 bg-[#3f3f3f]/20" aria-hidden="true" />
          </div>
        </div>
      </main>

      {/* Media & Press Relations Prefooter */}
      <section
        id="media-enquiries"
        aria-labelledby="media-enquiries-heading"
        className="w-full border-t-4 border-[#ed027e] bg-[#0D0D0D] text-white"
      >
        <div className="reveal mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-18 md:px-12 md:py-20 lg:px-16">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Media Desk Overview & Assets */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <div className="mb-3 border-l-2 border-[#ed027e] pl-3 text-[0.625rem] font-bold uppercase tracking-[0.25em] text-[#ed027e]">
                  <span>Media & Broadcast Relations</span>
                </div>
                <h2
                  id="media-enquiries-heading"
                  className="font-heading text-[clamp(1.75rem,3.2vw,2.5rem)] font-black uppercase leading-[1.05] tracking-[-0.02em] text-white"
                >
                  <span>CONNECT WITH OUR MEDIA & COMMUNICATIONS DESK</span>
                </h2>
                <p className="mt-4 max-w-[48ch] text-[0.9375rem] font-medium leading-[1.65] text-white/70 sm:text-base">
                  EmpowaHer™ provides accredited media organisations, editors, and broadcast journalists with direct access to senior leadership, keynote speakers, and emerging women delegates. Contact our PR desk for interviews, press accreditation, high-resolution media assets, and broadcast arrangements.
                </p>
              </div>

              {/* Quick Action Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={PROGRAMME_PDF_PATH}
                  download="EmpowaHER-Programme-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all hover:border-[#ed027e] hover:bg-[#ed027e]"
                >
                  <span>Official Programme (PDF)</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={MEDIA_ENQUIRY_EMAIL}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all hover:border-[#ed027e] hover:bg-[#ed027e]"
                >
                  <span>Press Kit on Request</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: PR Manager Executive Contact Card */}
            <div className="lg:col-span-5">
              <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-[#ed027e]/60">
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ed027e]/20 text-[#ed027e]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                      Boitumelo Mmakou
                    </h3>
                    <span className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-[#ed027e]">
                      Public Relations Manager • EmpowaHer™
                    </span>
                  </div>
                </div>

                <address className="mt-6 space-y-3.5 not-italic text-sm font-medium text-white/80 sm:text-[0.9375rem]">
                  <a
                    href="mailto:boitumelo@empowaworx.co.za"
                    className="flex items-center gap-3 transition-colors hover:text-[#ed027e]"
                  >
                    <Mail size={16} className="shrink-0 text-[#ed027e]" aria-hidden="true" />
                    <span>boitumelo@empowaworx.co.za</span>
                  </a>
                  <a
                    href="tel:+27714005152"
                    className="flex items-center gap-3 transition-colors hover:text-[#ed027e]"
                  >
                    <Phone size={16} className="shrink-0 text-[#ed027e]" aria-hidden="true" />
                    <span className="tabular-nums">+27 (0) 71 400 5152</span>
                  </a>
                  <a
                    href="tel:+27114827256"
                    className="flex items-center gap-3 transition-colors hover:text-[#ed027e]"
                  >
                    <Phone size={16} className="shrink-0 text-[#ed027e]" aria-hidden="true" />
                    <span className="tabular-nums">+27 (0) 11 482 7256 / 7257</span>
                  </a>
                  <a
                    href="https://www.empowaher.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors hover:text-[#ed027e]"
                  >
                    <Globe2 size={16} className="shrink-0 text-[#ed027e]" aria-hidden="true" />
                    <span>www.empowaher.co.za</span>
                  </a>
                </address>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <a
                    href={MEDIA_ENQUIRY_EMAIL}
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#ed027e] px-8 py-3.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ed027e]/20 transition-all hover:bg-[#ed027e]/90 hover:scale-[1.02]"
                  >
                    <span>Send a Media Enquiry</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Official Site Footer */}
      <Footer />
    </div>
  );
}
