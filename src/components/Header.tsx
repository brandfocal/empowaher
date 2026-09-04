"use client";

import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "./SocialIcons";

interface HeaderProps {
  currentPath?: string;
}

export function Header({ currentPath = "/" }: HeaderProps) {
  const isHomePage = currentPath === "/";

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

      <div className="flex items-center gap-3 text-[0.625rem] font-semibold uppercase tracking-[0.12em] sm:gap-5 sm:text-[0.6875rem]">
        {isHomePage ? (
          <a
            href="#programme"
            className="block rounded-full border-2 border-[#3f3f3f] px-3.5 py-1.5 font-bold text-[#3f3f3f] transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white sm:px-5 sm:py-2"
          >
            <span>Programme Detail</span>
          </a>
        ) : (
          <a
            href="/EmpowaHER-Programme-2026.pdf"
            download="EmpowaHER-Programme-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full border-2 border-[#3f3f3f] px-3.5 py-1.5 font-bold text-[#3f3f3f] transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white sm:px-5 sm:py-2"
          >
            <span>Programme Detail</span>
          </a>
        )}

        <div className="hidden sm:block">
          <SocialIcons compact variant="dark" />
        </div>
      </div>
    </header>
  );
}
