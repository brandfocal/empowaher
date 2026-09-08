import type { Metadata } from "next";
import { PressRelease } from "@/components/PressRelease";

export const metadata: Metadata = {
  title: "Press Release | EmpowaHer™ Leadership Summit 2026",
  description:
    "Official Press Release: Nominations open for the EmpowaHer™ Leadership Summit 2026 — The Future Is Female™ at EmpowaWorx House, Johannesburg.",
};

export default function PressPage() {
  return <PressRelease />;
}
