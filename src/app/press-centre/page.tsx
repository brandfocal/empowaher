import type { Metadata } from "next";
import { PressRelease } from "@/components/PressRelease";

export const metadata: Metadata = {
  title: "Press Centre | EmpowaHer™ Leadership Summit 2026",
  description:
    "Official Press Centre & Media Release: EmpowaHer™ Leadership Summit 2026 — The Future Is Female™ at EmpowaWorx House, Johannesburg.",
};

export default function PressCentrePage() {
  return <PressRelease />;
}
