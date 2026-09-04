import type { Metadata } from "next";
import { SelectionCriteria } from "@/components/SelectionCriteria";

export const metadata: Metadata = {
  title: "Selection Criteria | EmpowaHer™ Leadership Summit 2026",
  description:
    "EmpowaHer™ Candidate Selection Criteria & Eligibility Framework. Discover who qualifies, nomination channels, and the 7-pillar assessment model for Africa's next generation of women leaders.",
};

export default function CriteriaAliasPage() {
  return <SelectionCriteria />;
}
