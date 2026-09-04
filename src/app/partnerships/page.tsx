import type { Metadata } from "next";
import { PartnershipOpportunities } from "@/components/PartnershipOpportunities";

export const metadata: Metadata = {
  title: "Partnership Opportunities | EmpowaHer™ Leadership Summit 2026",
  description:
    "Explore high-value partnership opportunities with EmpowaHer™ Leadership Summit 2026 — The Future Is Female™. Connect with Africa's next generation of women leaders across education, mentorship, and commercial investment.",
};

export default function PartnershipsPage() {
  return <PartnershipOpportunities />;
}
