import type { Metadata } from "next";
import { LeadershipProgramme } from "@/components/LeadershipProgramme";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Nine Leadership Tracks & Executive Programme",
  description:
    "Explore the 9 integrated leadership tracks of EmpowaHer™ Leadership Summit 2026: Entrepreneurship, AI & Digital Leadership, Governance & Board Readiness, Social Impact, and Wealth Creation.",
  alternates: {
    canonical: "/leadership-programme",
  },
  openGraph: {
    title: "Nine Integrated Leadership Tracks | EmpowaHer™ Summit 2026",
    description:
      "Explore the 9 integrated leadership tracks of EmpowaHer™ Leadership Summit 2026 designed to develop the whole leader for Africa's next economy.",
    url: "https://empowaher.co.za/leadership-programme",
    images: [
      {
        url: "/feature-image11.jpg",
        width: 1200,
        height: 630,
        alt: "EmpowaHer Nine Leadership Tracks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nine Integrated Leadership Tracks | EmpowaHer™ Summit 2026",
    description:
      "Explore the 9 integrated leadership tracks of EmpowaHer™ Leadership Summit 2026.",
    images: ["/feature-image11.jpg"],
  },
};

const tracksStructuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "@id": "https://empowaher.co.za/leadership-programme#tracks",
  name: "EmpowaHer™ Nine Integrated Leadership Tracks",
  description:
    "A comprehensive executive leadership curriculum preparing 200 emerging women leaders aged 18–35 across business, AI, governance, finance, and societal impact.",
  provider: {
    "@type": "Organization",
    name: "EmpowaHer™",
    url: "https://empowaher.co.za",
  },
  programPrerequisites: "Emerging African women leaders aged 18–35 with demonstrated leadership track record.",
  numberOfCredits: 9,
  hasCourse: [
    {
      "@type": "Course",
      name: "Track 01: Entrepreneurship, Innovation & Funding",
      description: "Capital, markets, and investment scale to lead Africa's economic future.",
      courseCode: "EH-TR01",
    },
    {
      "@type": "Course",
      name: "Track 02: Digital Leadership, AI & Career Growth",
      description: "Practical AI capability, digital fluency, and future-of-work career leadership.",
      courseCode: "EH-TR02",
    },
    {
      "@type": "Course",
      name: "Track 03: Citizenship & Social Impact",
      description: "Constitutional literacy, ethical patriotism, community leadership, and social innovation.",
      courseCode: "EH-TR03",
    },
    {
      "@type": "Course",
      name: "Track 04: Personal Leadership & Career Transformation",
      description: "Lead yourself, build executive presence, navigate complexity, and accelerate career ownership.",
      courseCode: "EH-TR04",
    },
    {
      "@type": "Course",
      name: "Track 05: Personal Finance & Wealth Creation",
      description: "Cash-flow mastery, investment architecture, property ownership, and early wealth building.",
      courseCode: "EH-TR05",
    },
    {
      "@type": "Course",
      name: "Track 06: Health, Wellness & Sustainable Performance",
      description: "Executive vitality, physical and mental wellbeing, preventive health, and sustainable resilience.",
      courseCode: "EH-TR06",
    },
    {
      "@type": "Course",
      name: "Track 07: Rights, Relationships & Executive Parenting",
      description: "Personal agency, equal partnership, legal and property architecture, and boundary setting.",
      courseCode: "EH-TR07",
    },
    {
      "@type": "Course",
      name: "Track 08: Education & Executive Development",
      description: "Executive education, commercial acumen, international fellowships, and lifelong career capital.",
      courseCode: "EH-TR08",
    },
    {
      "@type": "Course",
      name: "Track 09: Leadership, Governance & Board Readiness",
      description: "Lead with authority, govern with integrity, master board dynamics, and shape corporate direction.",
      courseCode: "EH-TR09",
    },
  ],
};

export default function LeadershipProgrammePage() {
  return (
    <>
      <JsonLd data={tracksStructuredData} />
      <LeadershipProgramme />
    </>
  );
}
