import type { Metadata } from "next";
import { NominationForm } from "@/components/NominationForm";

export const metadata: Metadata = {
  title: "Nomination & Selection Criteria | EmpowaHer™ Leadership Summit 2026",
  description:
    "EmpowaHer™ Candidate Selection Criteria & Official Nomination Portal. Discover eligibility, 6 candidate profiles, the 7-pillar assessment model, and submit your endorsement.",
};

export default function CriteriaAliasPage() {
  return <NominationForm />;
}
