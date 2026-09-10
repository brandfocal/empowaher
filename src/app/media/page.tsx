import type { Metadata } from "next";
import { MediaPage } from "@/components/MediaPage";

export const metadata: Metadata = {
  title: "Media & Press Hub | EmpowaHer™ Leadership Summit 2026",
  description:
    "Official EmpowaWomen™ Highlight Reel, media release downloads, press kits, and broadcast assets for the EmpowaHer™ Leadership Summit 2026.",
};

export default function Page() {
  return <MediaPage />;
}
