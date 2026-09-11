import type { Metadata } from "next";
import { EmpowaHerSummitHome } from "@/components/EmpowaHerSummitHome";

export const metadata: Metadata = {
  title: "EmpowaHer™ Leadership Summit 2026 | The Future is Female™",
  description:
    "EmpowaHer™ is a three-day executive leadership experience preparing Africa’s next generation of women leaders aged 18–35 to lead across business, government, and the boardroom.",
};

export default function Home() {
  return <EmpowaHerSummitHome />;
}
