import type { Metadata } from "next";
import { EmpowaHerProgramme } from "@/components/EmpowaHerProgramme";

export const metadata: Metadata = {
  title: "Programme & Tracks | EmpowaHer™ Summit 2027",
  description:
    "Explore the comprehensive four-day agenda (23–26 June 2027, with Saturday, 26 June as graduation day) and nine integrated leadership tracks of the EmpowaHer™ Leadership Summit 2027.",
};

export default function ProgrammeAliasPage() {
  return <EmpowaHerProgramme />;
}
