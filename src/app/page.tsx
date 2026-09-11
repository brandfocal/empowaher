import type { Metadata } from "next";
import { EmpowaHerSummitHome } from "@/components/EmpowaHerSummitHome";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "EmpowaHer™ Leadership Summit 2026 | The Future Is Female™",
  description:
    "EmpowaHer™ is a premier three-day executive leadership experience and accelerator preparing Africa’s next generation of 200 women leaders aged 18–35 to compete, lead, and succeed across business, government, and the boardroom.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EmpowaHer™ Leadership Summit 2026 | The Future Is Female™",
    description:
      "Africa's premier executive leadership platform preparing 200 emerging women leaders aged 18–35 to lead across business, governance, and the boardroom.",
    url: "https://empowaher.co.za",
    images: [
      {
        url: "/feature-image.jpeg",
        width: 1200,
        height: 630,
        alt: "EmpowaHer™ Leadership Summit 2026",
      },
    ],
  },
};

const homeFaqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the EmpowaHer™ Leadership Summit 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EmpowaHer™ is Africa's premier three-day executive leadership experience preparing 200 emerging women leaders aged 18–35 to lead across business, government, entrepreneurship, civil society, and the boardroom.",
      },
    },
    {
      "@type": "Question",
      name: "Who is eligible to attend the EmpowaHer™ Summit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High-potential emerging African women leaders aged 18 to 35 who demonstrate measurable leadership potential across enterprise, technology, public service, civic impact, or corporate management.",
      },
    },
    {
      "@type": "Question",
      name: "What are the Nine Leadership Tracks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The summit features nine integrated tracks: 1) Entrepreneurship, Innovation & Funding, 2) Digital Leadership, AI & Career Growth, 3) Citizenship & Social Impact, 4) Personal Leadership & Career Transformation, 5) Personal Finance & Wealth Creation, 6) Health, Wellness & Sustainable Performance, 7) Rights, Relationships & Executive Parenting, 8) Education & Executive Development, and 9) Leadership, Governance & Board Readiness.",
      },
    },
    {
      "@type": "Question",
      name: "How can organisations nominate candidate leaders or become corporate partners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organisations can nominate candidate leaders via the official nomination portal at empowaher.co.za/nomination-form or explore corporate partnership packages at empowaher.co.za/partnerships.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeFaqData} />
      <EmpowaHerSummitHome />
    </>
  );
}
