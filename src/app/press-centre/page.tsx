import type { Metadata } from "next";
import { PressRelease } from "@/components/PressRelease";

export const metadata: Metadata = {
  title:
    "Press Centre | EmpowaHer Leadership Summit 2026 — The Future Is Female",
  description:
    "EmpowaHer Leadership Summit 2026 Press Centre: Invest in Women. Strengthen the Leadership Pipeline. Shape the Future. Official statements, media assets, and accreditation.",
};

export default function PressCentrePage() {
  return <PressRelease />;
}
