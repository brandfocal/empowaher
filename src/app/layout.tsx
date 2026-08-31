import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
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
  title: "EmpowaHer™ Leadership Summit | The Future Is Female™",
  description:
    "EmpowaHer™ Leadership Summit – The Future Is Female™ is a three-day leadership experience designed to prepare Africa’s next generation of women leaders to compete, lead and succeed across business, government, entrepreneurship, civil society and the boardroom.",
  icons: {
    icon: "/empowaher-favicon.png",
    shortcut: "/empowaher-favicon.png",
    apple: "/empowaher-favicon.png",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
