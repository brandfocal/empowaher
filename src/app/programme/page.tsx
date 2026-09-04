import type { Metadata } from "next";
import { LeadershipProgramme } from "@/components/LeadershipProgramme";

export const metadata: Metadata = {
  title: "Leadership Programme | EmpowaHer™ Summit 2026",
  description:
    "Explore the nine integrated leadership tracks of the EmpowaHer™ Leadership Programme 2026.",
};

export default function ProgrammeAliasPage() {
  return <LeadershipProgramme />;
}
