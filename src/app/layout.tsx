import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
import { ScrollObserver } from "@/components/ScrollObserver";
import { BackToTop } from "@/components/BackToTop";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://empowaher.co.za"),
  title: {
    default: "EmpowaHer™ Leadership Summit 2026 | The Future Is Female™",
    template: "%s | EmpowaHer™ Leadership Summit 2026",
  },
  description:
    "EmpowaHer™ is Africa's premier executive leadership summit and accelerator preparing 200 emerging women leaders aged 18–35 to lead across business, government, and the boardroom through nine integrated leadership tracks.",
  keywords: [
    "EmpowaHer",
    "EmpowaHer Leadership Summit 2026",
    "EmpowaWomen",
    "The Future Is Female",
    "African Women Leaders",
    "Women in Leadership Africa",
    "Executive Leadership Accelerator",
    "Board Readiness Programme",
    "Emerging Women Leaders 18-35",
    "Simphiwe Masiza",
    "EmpowaWorx",
    "Women Leadership Conference South Africa",
    "Female Entrepreneurship Africa",
  ],
  authors: [{ name: "EmpowaWorx", url: "https://empowaworx.co.za" }],
  creator: "EmpowaWorx",
  publisher: "EmpowaWorx",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://empowaher.co.za",
    siteName: "EmpowaHer™ Leadership Summit",
    title: "EmpowaHer™ Leadership Summit 2026 | The Future Is Female™",
    description:
      "Africa's premier executive leadership platform preparing 200 emerging women leaders aged 18–35 to lead across business, governance, and the boardroom.",
    images: [
      {
        url: "/feature-image.jpeg",
        width: 1200,
        height: 630,
        alt: "EmpowaHer™ Leadership Summit 2026 - The Future Is Female™",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmpowaHer™ Leadership Summit 2026 | The Future Is Female™",
    description:
      "Africa's premier executive leadership platform preparing 200 emerging women leaders aged 18–35 to lead across business, governance, and the boardroom.",
    images: ["/feature-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/empowaher-favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/empowaher-favicon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/empowaher-favicon.png" },
    ],
  },
};

const globalStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://empowaher.co.za/#organization",
      name: "EmpowaHer™",
      legalName: "EmpowaWorx (Pty) Ltd",
      url: "https://empowaher.co.za",
      logo: {
        "@type": "ImageObject",
        url: "https://empowaher.co.za/empowaher-logo.png",
        width: 360,
        height: 96,
      },
      founder: {
        "@type": "Person",
        name: "Simphiwe Masiza",
        jobTitle: "Founder & Executive Producer",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+27-11-462-8259",
        contactType: "executive desk",
        email: "info@empowaworx.co.za",
        areaServed: "Africa",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://empowaher.co.za/#website",
      url: "https://empowaher.co.za",
      name: "EmpowaHer™ Leadership Summit",
      publisher: {
        "@id": "https://empowaher.co.za/#organization",
      },
      inLanguage: "en-ZA",
    },
    {
      "@type": "Event",
      "@id": "https://empowaher.co.za/#summit",
      name: "EmpowaHer™ Leadership Summit 2026",
      description:
        "A three-day executive leadership experience preparing Africa's next generation of 200 women leaders aged 18–35 to compete, lead, and succeed across business, government, entrepreneurship, civil society, and the boardroom.",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      organizer: {
        "@id": "https://empowaher.co.za/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Emerging Women Leaders (aged 18–35)",
        geographicArea: {
          "@type": "AdministrativeArea",
          name: "Africa",
        },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={globalStructuredData} />
        <ScrollObserver />
        <BackToTop />
        {children}
      </body>
    </html>
  );
}
