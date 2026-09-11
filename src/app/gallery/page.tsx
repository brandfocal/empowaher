import type { Metadata } from "next";
import { GalleryPage } from "@/components/GalleryPage";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Photographic Archive & Cohort Gallery",
  description:
    "Official photographic archive showcasing the executive masterclasses, keynotes, and cohort camaraderie of the EmpowaHer™ Leadership Summit.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Photographic Archive | EmpowaHer™ Summit 2026",
    description:
      "Explore executive moments, keynote addresses, and high-impact cohort networking from the EmpowaHer™ ecosystem.",
    url: "https://empowaher.co.za/gallery",
    images: [
      {
        url: "/feature-image16.jpg",
        width: 1200,
        height: 630,
        alt: "EmpowaHer Photographic Gallery",
      },
    ],
  },
};

const galleryStructuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": "https://empowaher.co.za/gallery#webpage",
  name: "EmpowaHer™ Summit Photographic Gallery",
  description: "Official visual archive of emerging female leadership across Africa.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={galleryStructuredData} />
      <GalleryPage />
    </>
  );
}
