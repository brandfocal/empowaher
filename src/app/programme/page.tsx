import type { Metadata } from "next";
import { EmpowaHerProgramme } from "@/components/EmpowaHerProgramme";

export const metadata: Metadata = {
  title: "Programme & Tracks | EmpowaHer™ Summit 2026",
  description:
    "Explore the comprehensive three-day agenda and nine integrated leadership tracks of the EmpowaHer™ Leadership Summit 2026.",
};

export default function ProgrammeAliasPage() {
  return <EmpowaHerProgramme />;
}
