import type { Metadata } from "next";
import { MediaPage } from "@/components/MediaPage";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Media & Press Hub | Broadcast Assets & Official Releases",
  description:
    "Official EmpowaWomen™ Highlight Reel, media release downloads, press kits, and broadcast assets for the EmpowaHer™ Leadership Summit 2026.",
  alternates: {
    canonical: "/media",
  },
  openGraph: {
    title: "Media & Press Hub | EmpowaHer™ Leadership Summit 2026",
    description:
      "Access official media releases, broadcast clips, executive interviews, and summit photography.",
    url: "https://empowaher.co.za/media",
    images: [
      {
        url: "/feature-image15.jpg",
        width: 1200,
        height: 630,
        alt: "EmpowaHer Media Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Press Hub | EmpowaHer™ Summit 2026",
    description:
      "Official media release downloads, press kits, and broadcast assets.",
    images: ["/feature-image15.jpg"],
  },
};

const mediaStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://empowaher.co.za/media#webpage",
  name: "Media & Press Hub | EmpowaHer™ Leadership Summit 2026",
  description:
    "Official media centre for EmpowaHer™ Summit 2026 with press statements, video assets, and editorial accreditation.",
  publisher: {
    "@type": "Organization",
    name: "EmpowaHer™",
    url: "https://empowaher.co.za",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={mediaStructuredData} />
      <MediaPage />
    </>
  );
}
