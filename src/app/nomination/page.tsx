import type { Metadata } from "next";
import { NominationForm } from "@/components/NominationForm";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Candidate Nomination & Selection Framework",
  description:
    "Official Candidate Nomination & Selection Framework for EmpowaHer™ Leadership Summit 2026. Explore eligibility for emerging women leaders aged 18–35, the 7-pillar evaluation criteria, and submit an endorsement.",
  alternates: {
    canonical: "/nomination",
  },
  openGraph: {
    title: "Candidate Nomination & Selection Framework | EmpowaHer™ 2026",
    description:
      "Nominate an exceptional young African woman leader aged 18–35 for the EmpowaHer™ Leadership Summit 2026.",
    url: "https://empowaher.co.za/nomination",
    images: [
      {
        url: "/feature-image14.jpg",
        width: 1200,
        height: 630,
        alt: "EmpowaHer Candidate Nomination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Candidate Nomination | EmpowaHer™ Summit 2026",
    description:
      "Nominate an exceptional young African woman leader aged 18–35 for the EmpowaHer™ Leadership Summit 2026.",
    images: ["/feature-image14.jpg"],
  },
};

const nominationStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://empowaher.co.za/nomination#webpage",
  name: "Candidate Nomination & Selection Framework | EmpowaHer™ Summit 2026",
  description:
    "Official endorsement and application portal for the EmpowaHer™ 2026 cohort of 200 emerging women leaders.",
  provider: {
    "@type": "Organization",
    name: "EmpowaHer™",
    url: "https://empowaher.co.za",
  },
};

export default function NominationPage() {
  return (
    <>
      <JsonLd data={nominationStructuredData} />
      <NominationForm />
    </>
  );
}
