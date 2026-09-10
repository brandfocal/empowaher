import type { Metadata } from "next";
import { GalleryPage } from "@/components/GalleryPage";

export const metadata: Metadata = {
  title: "Photographic Gallery | EmpowaHer™ Leadership Summit 2026",
  description:
    "Official photographic archive showcasing the energy, executive masterclasses, and cohort camaraderie of the EmpowaHer™ Leadership Summit.",
};

export default function Page() {
  return <GalleryPage />;
}
