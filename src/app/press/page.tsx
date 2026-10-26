import type { Metadata } from "next";
import { PressRelease } from "@/components/PressRelease";

export const metadata: Metadata = {
  title:
    "EmpowaHer Leadership Summit 2026 | The Future Is Female — Press Release",
  description:
    "Official Press Release: Invest in Women. Strengthen the Leadership Pipeline. Shape the Future. EmpowaHer Leadership Summit 2026 convenes 200 leaders at EmpowaWorx House, Randburg.",
};

export default function PressPage() {
  return <PressRelease />;
}
