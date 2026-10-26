import type { Metadata } from "next";
import { MediaPage } from "@/components/MediaPage";
import { JsonLd } from "@/components/JsonLd";
import { leadershipVideos } from "@/data/leadershipVideos";

export const metadata: Metadata = {
  title: "Media & Press Hub | Television, Radio, Podcasts & Video Features",
  description:
    "Official broadcast interviews and features on eNCA, SABC News Trendz Live, Metro FM, Radio 2000, Lesedi FM, 18 keynote speaker and nominee video features, and EmpowaHer™ Leadership Summit 2026 press kits.",
  alternates: {
    canonical: "/media",
  },
  openGraph: {
    title: "Media & Press Hub | EmpowaHer™ Leadership Summit 2026",
    description:
      "Access television broadcasts on eNCA & SABC News Trendz Live, national radio interviews with Metro FM, Radio 2000, and Lesedi FM, 18 speaker video features, and official media releases.",
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
      "Television news features on eNCA & SABC News, national radio broadcasts with Metro FM, Radio 2000 & Lesedi FM, 18 speaker videos, and media release downloads.",
    images: ["/feature-image15.jpg"],
  },
};

const mediaStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://empowaher.co.za/media#webpage",
  name: "Media & Press Hub | EmpowaHer™ Leadership Summit 2026",
  description:
    "Official media centre for EmpowaHer™ Summit 2026 with eNCA television news interviews, SABC News Trendz Live broadcast features, national radio interviews from Metro FM, Radio 2000, Lesedi FM, and 18 keynote speaker video features.",
  publisher: {
    "@type": "Organization",
    name: "EmpowaHer™",
    url: "https://empowaher.co.za",
  },
  hasPart: [
    {
      "@type": "VideoObject",
      name: "Trendz Live | Theatre, Empowerment and Tranquility: 24 October 2026",
      description: "SABC News Trendz Live television feature on women empowerment and the creative architecture of EmpowaHer.",
      thumbnailUrl: "https://i.ytimg.com/vi/Tuqdjk-71mc/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/Tuqdjk-71mc",
      contentUrl: "https://youtu.be/Tuqdjk-71mc?si=p5Wsw4JzQOu6saH3",
    },
    {
      "@type": "VideoObject",
      name: "eNCA Television Interview: Simphiwe Masiza",
      description: "eNCA 24-hour television news broadcast interview with Simphiwe Masiza detailing the EmpowaHer Leadership Summit 2026.",
      contentUrl: "https://emediaza.sharepoint.com/sites/ClientRecordingPortal/_layouts/15/stream.aspx?id=%2Fsites%2FClientRecordingPortal%2FInterview%20Recordings%2FActive%20Recordings%2FSimphiwe%20Masiza%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E353e1730%2Dab1b%2D448e%2Db0ce%2D4f6e105b08fc",
    },
    ...leadershipVideos.map((video) => ({
      "@type": "VideoObject",
      name: `${video.name} | ${video.role}`,
      description: video.highlightText,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
      contentUrl: video.youtubeUrl,
    })),
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
      name: "SABC Lesedi FM Feature Interview: EmpowaHer Leadership Summit",
      description: "SABC Lesedi FM national radio broadcast interview exploring socioeconomic inclusion and the 200 emerging women leader cohort.",
      contentUrl: "https://sabconms-my.sharepoint.com/:u:/g/personal/phillipsit_sabc_co_za/IQC4w_4VK92rRpYSdPwRwOpIAdJMO6Tw1rZJtZc_9Y74GoU",
    },
    {
      "@type": "AudioObject",
      name: "SAfm The Full Circle: Accelerating Africa's Next Chapter of Women Leaders",
      description: "SABC SAfm 104-107 national radio broadcast interview with Simphiwe Masiza on The Full Circle.",
      contentUrl: "https://www.empowaher.co.za/media#podcast-sa-fm",
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
