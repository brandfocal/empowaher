import type { Metadata } from "next";
import { PartnershipOpportunities } from "@/components/PartnershipOpportunities";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Partnership Opportunities & Sponsorship Architecture",
  description:
    "Explore high-value strategic partnership packages with EmpowaHer™ Leadership Summit 2026: Principal Partner, Track Partner, Cohort Sponsor, and Opportunity Marketplace.",
  alternates: {
    canonical: "/partnerships",
  },
  openGraph: {
    title: "Partnership Opportunities | EmpowaHer™ Summit 2026",
    description:
      "Connect with Africa's next generation of women leaders across executive education, talent pipelines, ESG, and commercial supply chain integration.",
    url: "https://empowaher.co.za/partnerships",
    images: [
      {
        url: "/feature-image13.jpg",
        width: 1200,
        height: 630,
        alt: "EmpowaHer Partnership Opportunities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnership Opportunities | EmpowaHer™ Summit 2026",
    description:
      "Connect with Africa's next generation of women leaders across education, mentorship, and commercial investment.",
    images: ["/feature-image13.jpg"],
  },
};

const partnershipStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://empowaher.co.za/partnerships#webpage",
  name: "Partnership Opportunities | EmpowaHer™ Leadership Summit 2026",
  description:
    "High-value leadership, talent & enterprise ecosystem partnership packages connecting institutions with Africa's next generation of women leaders.",
  provider: {
    "@type": "Organization",
    name: "EmpowaHer™",
    url: "https://empowaher.co.za",
  },
};

export default function PartnershipsPage() {
  return (
    <>
      <JsonLd data={partnershipStructuredData} />
      <PartnershipOpportunities />
    </>
  );
}
