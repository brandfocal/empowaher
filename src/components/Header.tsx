"use client";

import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "./SocialIcons";

interface HeaderProps {
  currentPath?: string;
}

export function Header({ currentPath = "/" }: HeaderProps) {
  const isPartnerships =
    currentPath.startsWith("/partnerships") ||
    currentPath.startsWith("/partnership-opportunities");

  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-4 bg-white px-5 py-2 shadow-sm sm:px-8 sm:py-2.5 md:px-12">
      <Link
        href="/"
        aria-label="EmpowaHer Home"
        className="flex items-center transition-opacity hover:opacity-90"
      >
        <Image
          src="/empowaher-logo.png"
          alt="EmpowaHer Logo"
          width={360}
          height={96}
          className="h-10 w-auto object-contain sm:h-12 md:h-[52px]"
          priority
        />
      </Link>

      <div className="flex items-center gap-2 text-[0.625rem] font-semibold uppercase tracking-[0.12em] sm:gap-3.5 sm:text-[0.6875rem]">
        <Link
          href="/"
          className={`rounded-full px-3 py-1.5 font-bold transition-all sm:px-4 sm:py-2 ${
            !isPartnerships
              ? "text-[#ed027e] font-extrabold"
              : "text-[#3f3f3f] hover:text-[#ed027e]"
          }`}
        >
          <span>Home</span>
        </Link>

        <Link
          href="/partnerships"
          className={`block rounded-full border-2 px-3.5 py-1.5 font-bold transition-all sm:px-5 sm:py-2 ${
            isPartnerships
              ? "border-[#ed027e] bg-[#ed027e] text-white"
              : "border-[#3f3f3f] text-[#3f3f3f] hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white"
          }`}
        >
          <span>Partnerships</span>
        </Link>

        <a
          href="/EmpowaHER-Programme-2026.pdf"
          download="EmpowaHER-Programme-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block rounded-full border-2 border-[#3f3f3f] px-3.5 py-1.5 font-bold text-[#3f3f3f] transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white sm:px-4 sm:py-2"
        >
          <span>Programme (PDF)</span>
        </a>

        <div className="hidden sm:block">
          <SocialIcons compact variant="dark" />
        </div>
      </div>
    </header>
  );
}
