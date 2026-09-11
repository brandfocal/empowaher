import type { Metadata } from "next";
import { VisionImpact } from "@/components/VisionImpact";

export const metadata: Metadata = {
  title: "About Us | EmpowaHer™ Leadership Summit 2026",
  description:
    "EmpowaHer™ is Africa's premier executive leadership platform preparing emerging women leaders aged 18–35 to lead across business, government, and the boardroom through measurable commercial and societal impact.",
};

export default function AboutUsPage() {
  return <VisionImpact />;
}
