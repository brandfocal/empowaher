"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const pathname = usePathname();
  const isProgrammePage = pathname?.startsWith("/programme");

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed right-4 sm:right-6 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#ed027e]/90 active:scale-95 ${
        isProgrammePage ? "bottom-24 sm:bottom-20" : "bottom-6"
      } ${
        showBackToTop
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
}
