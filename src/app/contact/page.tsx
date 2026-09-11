import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Executive Desk & Secretariat",
  description:
    "Get in touch with the EmpowaHer™ Leadership Summit 2026 executive desk, discuss corporate partnerships, media accreditation, or summit enquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Executive Desk | EmpowaHer™ Summit 2026",
    description:
      "Get in touch with the EmpowaHer™ Leadership Summit 2026 secretariat, partnership desk, and delegate relations.",
    url: "https://empowaher.co.za/contact",
    images: [
      {
        url: "/contact-us.jpg",
        width: 1200,
        height: 630,
        alt: "Contact EmpowaHer Secretariat",
      },
    ],
  },
};

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://empowaher.co.za/contact#webpage",
  name: "Contact Executive Desk | EmpowaHer™ Summit 2026",
  mainEntity: {
    "@type": "Organization",
    name: "EmpowaHer™",
    telephone: "+27-11-462-8259",
    email: "info@empowaworx.co.za",
    url: "https://empowaher.co.za",
  },
};

export default function ContactRoute() {
  return (
    <>
      <JsonLd data={contactStructuredData} />
      <ContactPage />
    </>
  );
}
