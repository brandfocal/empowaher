import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact & Secretariat | EmpowaHer™ Summit 2026",
  description:
    "Get in touch with the EmpowaHer™ Leadership Summit 2026 executive team, discuss partnerships, or submit general enquiries.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
