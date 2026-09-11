import type { Metadata } from "next";
import { NominationForm } from "@/components/NominationForm";

export const metadata: Metadata = {
  title: "Nomination | EmpowaHer™ Leadership Summit 2026",
  description:
    "Official Candidate Nomination & Selection Framework for EmpowaHer™ Leadership Summit 2026. Explore eligibility, 6 candidate profiles, 7-pillar evaluation criteria, and submit a formal endorsement.",
};

export default function NominationPage() {
  return <NominationForm />;
}
