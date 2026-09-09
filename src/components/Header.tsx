"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

interface HeaderProps {
  currentPath?: string;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Programme", href: "/programme" },
  { label: "Leadership Tracks", href: "/leadership-programme" },
  { label: "Vision & Impact", href: "/vision-and-impact" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Selection Criteria", href: "/selection-criteria" },
  { label: "Press Release", href: "/press-release" },
  { label: "Contact", href: "/contact" },
];

export function Header({ currentPath = "/" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-40 w-full border-b border-black/[0.06] bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-2 sm:px-8 sm:py-2.5 md:px-12">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="EmpowaHer Home"
          className="flex shrink-0 items-center transition-opacity hover:opacity-90"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            src="/empowaher-logo.png"
            alt="EmpowaHer Logo"
            width={360}
            height={96}
            className="h-9 w-auto object-contain sm:h-11 md:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation Menu Bar */}
        <nav
          aria-label="Desktop primary navigation"
          className="hidden items-center gap-1 xl:gap-2 lg:flex"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2.5 py-1.5 font-heading text-[0.6875rem] font-bold uppercase tracking-[0.1em] transition-all xl:px-3.5 xl:text-xs ${
                  active
                    ? "text-[#ed027e]"
                    : "text-[#3f3f3f] hover:text-[#ed027e]"
                }`}
              >
                <span>{item.label}</span>
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-2.5 bottom-0 h-[2px] bg-[#ed027e] xl:inset-x-3.5"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          <Link
            href="/nominate"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-full bg-[#ed027e] px-4 py-1.5 font-heading text-[0.625rem] sm:text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-white shadow-sm transition-all duration-200 hover:scale-[1.03] hover:bg-[#ed027e]/90 active:scale-95"
          >
            <span>Nominate</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <div className="hidden 2xl:block">
            <SocialIcons compact variant="dark" />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#3f3f3f]/20 text-[#3f3f3f] transition-colors hover:border-[#ed027e] hover:text-[#ed027e] focus:outline-none focus:ring-2 focus:ring-[#ed027e] lg:hidden"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-black/[0.08] bg-white px-5 py-5 shadow-xl lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-black/[0.04] py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
                    active
                      ? "text-[#ed027e]"
                      : "text-[#3f3f3f] hover:text-[#ed027e]"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ed027e]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/nominate"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ed027e] py-3 text-center font-heading text-xs font-bold uppercase tracking-[0.12em] text-white shadow-md"
            >
              <span>Nominate a Leader</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <a
              href="/EmpowaHER-Programme-2026.pdf"
              download="EmpowaHER-Programme-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[#3f3f3f]/30 py-2.5 text-center font-heading text-xs font-bold uppercase tracking-[0.12em] text-[#3f3f3f] hover:border-[#ed027e] hover:text-[#ed027e]"
            >
              <span>Download Programme (PDF)</span>
            </a>

            <div className="mt-2 flex justify-center">
              <SocialIcons compact variant="dark" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
