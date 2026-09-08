import type { Metadata } from "next";
import { LeadershipProgramme } from "@/components/LeadershipProgramme";

export const metadata: Metadata = {
  title: "Leadership Programme | EmpowaHer™ Summit 2026",
  description:
    "Explore the comprehensive leadership development journey, nine tracks, and integrated progression model of the EmpowaHer™ Leadership Summit 2026.",
};

export default function LeadershipProgrammePage() {
  return <LeadershipProgramme />;
}
