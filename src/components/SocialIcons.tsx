"use client";

import React from "react";

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export function SocialIcons({
  compact = false,
  variant = "light",
}: {
  compact?: boolean;
  variant?: "light" | "dark";
}) {
  const sizeClasses = compact ? "h-8 w-8" : "h-9 w-9";
  const iconClasses = compact ? "h-4 w-4" : "h-4 w-4";
  const xIconClasses = compact ? "h-3.5 w-3.5" : "h-3.5 w-3.5";

  const socialLinkClasses =
    variant === "dark"
      ? `flex ${sizeClasses} items-center justify-center rounded-full border border-[#3f3f3f]/30 text-[#3f3f3f] transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white`
      : `flex ${sizeClasses} items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white`;

  return (
    <nav aria-label="Social media links" className="flex items-center gap-2">
      <a
        href="https://www.linkedin.com/showcase/empowawomen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="EmpowaWomen on LinkedIn"
        className={socialLinkClasses}
      >
        <LinkedinIcon className={iconClasses} />
      </a>
      <a
        href="https://www.instagram.com/empowawomen/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="EmpowaWomen on Instagram"
        className={socialLinkClasses}
      >
        <InstagramIcon className={iconClasses} />
      </a>
      <a
        href="https://x.com/EmpowaWomen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="EmpowaWomen on X"
        className={socialLinkClasses}
      >
        <XIcon className={xIconClasses} />
      </a>
      <a
        href="https://www.facebook.com/people/EmpowaWomen/100093644768130/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="EmpowaWomen on Facebook"
        className={socialLinkClasses}
      >
        <FacebookIcon className={iconClasses} />
      </a>
      <a
        href="https://www.youtube.com/@EmpowaWomen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="EmpowaWomen on YouTube"
        className={socialLinkClasses}
      >
        <YoutubeIcon className={iconClasses} />
      </a>
    </nav>
  );
}
