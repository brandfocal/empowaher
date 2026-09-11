import type { Metadata } from "next";
import { VisionImpact } from "@/components/VisionImpact";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | Executive Vision & Strategic Imperative",
  description:
    "EmpowaHer™ is Africa's premier executive leadership platform preparing emerging women leaders aged 18–35 to lead across business, government, and the boardroom through measurable commercial and societal impact.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | EmpowaHer™ Leadership Summit 2026",
    description:
      "Equipping Africa's next generation of women leaders for measurable impact across enterprise, governance, and boardrooms.",
    url: "https://empowaher.co.za/about-us",
    images: [
      {
        url: "/feature-image12.jpg",
        width: 1200,
        height: 630,
        alt: "About EmpowaHer Leadership Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | EmpowaHer™ Leadership Summit 2026",
    description:
      "Equipping Africa's next generation of women leaders for measurable impact across enterprise, governance, and boardrooms.",
    images: ["/feature-image12.jpg"],
  },
};

const aboutPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://empowaher.co.za/about-us#webpage",
  url: "https://empowaher.co.za/about-us",
  name: "About Us | EmpowaHer™ Leadership Summit",
  isPartOf: {
    "@type": "WebSite",
    name: "EmpowaHer™",
    url: "https://empowaher.co.za",
  },
  mainEntity: {
    "@type": "Organization",
    name: "EmpowaHer™",
    url: "https://empowaher.co.za",
    description:
      "An invitation-led executive leadership accelerator designed to identify, develop, connect, and advance 200 exceptional emerging women leaders aged 18–35.",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={aboutPageStructuredData} />
      <VisionImpact />
    </>
  );
}
