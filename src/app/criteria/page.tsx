import type { Metadata } from "next";
import { NominationForm } from "@/components/NominationForm";

export const metadata: Metadata = {
  title: "Nomination & Selection Criteria | 7-Pillar Framework",
  description:
    "EmpowaHer™ Candidate Selection Criteria & Official Nomination Portal. Discover eligibility for emerging women leaders aged 18–35, the 6 candidate profiles, and the 7-pillar assessment model.",
  alternates: {
    canonical: "/criteria",
  },
  openGraph: {
    title: "Nomination & Selection Criteria | EmpowaHer™ Summit 2026",
    description:
      "Review the 7-pillar evaluation model and nominate an exceptional emerging female leader aged 18–35.",
    url: "https://empowaher.co.za/criteria",
    images: [
      {
        url: "/feature-image14.jpg",
        width: 1200,
        height: 630,
        alt: "EmpowaHer Selection Criteria",
      },
    ],
  },
};

export default function CriteriaAliasPage() {
  return <NominationForm />;
}
