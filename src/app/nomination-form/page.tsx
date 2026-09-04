import type { Metadata } from "next";
import { NominationForm } from "@/components/NominationForm";

export const metadata: Metadata = {
  title: "Nomination Form | EmpowaHer™ Leadership Summit 2026",
  description:
    "EmpowaHer™ Official Candidate Nomination Form. Nominate high-potential women leaders across Africa for the 2026 Executive Accelerator and Leadership Summit.",
};

export default function NominationFormPage() {
  return <NominationForm />;
}
