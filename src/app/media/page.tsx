import type { Metadata } from "next";
import { MediaPage } from "@/components/MediaPage";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Media & Press Hub | Radio, Podcasts & Official Releases",
  description:
    "Official EmpowaWomen™ Highlight Reel, radio & podcast interviews with Metro FM, Radio 2000, and Sonke Radio, press kits, and broadcast assets for the EmpowaHer™ Leadership Summit 2026.",
  alternates: {
    canonical: "/media",
  },
  openGraph: {
    title: "Media & Press Hub | EmpowaHer™ Leadership Summit 2026",
    description:
      "Access official media releases, Metro FM & Radio 2000 podcast interviews, Sonke Radio recordings, broadcast clips, and summit assets.",
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
      "Official media release downloads, radio podcast interviews, press kits, and broadcast assets.",
    images: ["/feature-image15.jpg"],
  },
};

const mediaStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://empowaher.co.za/media#webpage",
  name: "Media & Press Hub | EmpowaHer™ Leadership Summit 2026",
  description:
    "Official media centre for EmpowaHer™ Summit 2026 with press statements, video assets, radio and podcast interviews from Metro FM, Radio 2000, and Sonke Radio.",
  publisher: {
    "@type": "Organization",
    name: "EmpowaHer™",
    url: "https://empowaher.co.za",
  },
  hasPart: [
    {
      "@type": "AudioObject",
      name: "EmpowaHer Leadership Summit 2026 – The Future Is Female",
      description: "Metro FM Best Mornings interview with DJ Sabby unpacking the EmpowaHer Leadership Summit 2026.",
      contentUrl: "https://traffic.omny.fm/d/clips/8f7208d2-db6e-4bfa-85b5-ad3d00776f1f/e1dc43d1-3ed3-43b6-934a-afda00a36848/f92e7716-a506-4ae7-94dc-b4db007f0b54/audio.mp3",
      embedUrl: "https://omny.fm/shows/best-mornings/empowaher-leadership-summit-2026-the-future-is-female/embed",
      duration: "PT7M27S",
    },
    {
      "@type": "AudioObject",
      name: "BigStories: EmpowaWorx and EmpowaWomen Key Initiatives & Platforms",
      description: "Radio 2000 #TheBigBreakfast Show interview with DJ Sbu featuring Simphiwe Masiza.",
      contentUrl: "https://traffic.omny.fm/d/clips/8f7208d2-db6e-4bfa-85b5-ad3d00776f1f/e3281566-5752-443e-b9f7-b14500769b83/2f9f0b9e-5244-43e1-977b-b4ea006ff3fd/audio.mp3",
      embedUrl: "https://omny.fm/shows/thebigbreakfast-show/bigstories-empowaworx-and-empowawomen-key-initiatives-platforms-1/embed",
      duration: "PT12M06S",
    },
    {
      "@type": "AudioObject",
      name: "Sonke Radio Feature Interview: EmpowaHer Leadership Summit",
      description: "Studio radio interview recording exploring the strategic mission and nomination launch of EmpowaHer.",
      contentUrl: "https://fromsmash.com/mhTxPgrHDh-dt",
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={mediaStructuredData} />
      <MediaPage />
    </>
  );
}
