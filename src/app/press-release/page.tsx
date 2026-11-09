import type { Metadata } from "next";
import { PressRelease } from "@/components/PressRelease";

export const metadata: Metadata = {
  title:
    "EmpowaHer Leadership Summit 2027 | The Future Is Female — Official Press Release",
  description:
    "Official Press Release: Invest in Women. Strengthen the Leadership Pipeline. Shape the Future. EmpowaHer Leadership Summit 2027 convenes 200 leaders at EmpowaWorx House, Randburg (23–26 June 2027, with Saturday, 26 June as graduation day).",
};

export default function PressReleasePage() {
  return <PressRelease />;
}
