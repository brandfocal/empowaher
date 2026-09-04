"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handleReveal = () => {
      const revealElements = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
      );

      if (revealElements.length === 0) return;

      if (prefersReducedMotion) {
        revealElements.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "50px 0px 50px 0px",
        }
      );

      revealElements.forEach((el) => {
        // If element is already in viewport, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
          el.classList.add("is-visible");
        } else {
          observer.observe(el);
        }
      });
    };

    // Run immediately and after paint
    handleReveal();
    const frameId = requestAnimationFrame(handleReveal);
    const timer1 = setTimeout(handleReveal, 100);
    const timer2 = setTimeout(handleReveal, 400);

    // Watch for dynamic DOM additions
    const mutationObserver = new MutationObserver(() => {
      handleReveal();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Ultimate fallback: ensure all reveal elements are visible after 1.2s
    const fallbackTimer = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    }, 1200);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(fallbackTimer);
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

