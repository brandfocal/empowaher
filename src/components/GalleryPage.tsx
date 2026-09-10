"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Filter, Sparkles } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "all" | "plenary" | "masterclasses" | "networking" | "leadership";
  categoryLabel: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "gal-01",
    src: "/feature-image8.jpg",
    title: "Opening Plenary: Women In Power",
    category: "plenary",
    categoryLabel: "Plenary Sessions",
    caption: "The convening of emerging leaders, cabinet ministers, and business pioneers at EmpowaWorx House.",
  },
  {
    id: "gal-02",
    src: "/feature-image14.jpg",
    title: "Executive Mentorship Circles",
    category: "leadership",
    categoryLabel: "Executive Leadership",
    caption: "High-impact small group mentoring connecting young women executives with veteran boardroom leaders.",
  },
  {
    id: "gal-03",
    src: "/feature-image15.jpg",
    title: "Collaborative Problem Solving",
    category: "masterclasses",
    categoryLabel: "Masterclasses",
    caption: "Delegates engaging in hands-on strategy and institutional transformation sessions.",
  },
  {
    id: "gal-04",
    src: "/feature-image10.jpg",
    title: "Cohort Camaraderie & Synergy",
    category: "networking",
    categoryLabel: "Networking",
    caption: "Building lifelong peer networks that transcend industry boundaries across Africa.",
  },
  {
    id: "gal-05",
    src: "/feature-image16.jpg",
    title: "Professional Excellence & Poise",
    category: "leadership",
    categoryLabel: "Executive Leadership",
    caption: "Empowering female professionals to master corporate governance, commercial acumen, and public voice.",
  },
  {
    id: "gal-06",
    src: "/feature-image12.jpg",
    title: "Academic & Scholarship Initiatives",
    category: "masterclasses",
    categoryLabel: "Masterclasses",
    caption: "Unlocking access to tertiary, professional, and executive education opportunities.",
  },
  {
    id: "gal-07",
    src: "/feature-image17.jpg",
    title: "Commercial & Enterprise Strategy",
    category: "masterclasses",
    categoryLabel: "Masterclasses",
    caption: "Delivering practical toolkits for capital acquisition, procurement access, and venture scalability.",
  },
  {
    id: "gal-08",
    src: "/feature-image7.jpg",
    title: "Shared Purpose & Vision",
    category: "plenary",
    categoryLabel: "Plenary Sessions",
    caption: "Uniting voices behind the declaration that the future of African leadership is female.",
  },
  {
    id: "gal-09",
    src: "/feature-image2.jpg",
    title: "EmpowaWomen Celebratory Gala",
    category: "networking",
    categoryLabel: "Networking",
    caption: "Honouring breakthrough achievements and celebrating the next generation of African trailblazers.",
  },
  {
    id: "gal-10",
    src: "/feature-image18.jpg",
    title: "Next-Gen Talent In Action",
    category: "leadership",
    categoryLabel: "Executive Leadership",
    caption: "Young leaders ready to steer institutions, lead enterprises, and influence public policy.",
  },
  {
    id: "gal-11",
    src: "/feature-image6.jpg",
    title: "Fireside Dialogue With Pioneers",
    category: "plenary",
    categoryLabel: "Plenary Sessions",
    caption: "Unfiltered leadership insights from distinguished African matriarchs and corporate executives.",
  },
  {
    id: "gal-12",
    src: "/feature-image11.jpg",
    title: "Innovative Strategy Workshops",
    category: "masterclasses",
    categoryLabel: "Masterclasses",
    caption: "Designing technological and societal frameworks for the next digital economy.",
  },
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Moments" },
    { id: "plenary", label: "Plenary & Keynotes" },
    { id: "leadership", label: "Executive Leadership" },
    { id: "masterclasses", label: "Masterclasses" },
    { id: "networking", label: "Networking & Gala" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#0A0D11] font-sans text-[#3f3f3f] selection:bg-[#ed027e] selection:text-white">
      {/* Navigation Header */}
      <Header currentPath="/gallery" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10 bg-gradient-to-b from-[#1C2128] to-[#0A0D11] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ed027e]/40 bg-[#ed027e]/10 px-3 py-1 text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
              <Camera className="h-3 w-3" />
              <span>Official Photographic Archive</span>
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="font-heading text-[clamp(2.5rem,5.5vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-white">
                <span>The Visual</span>
                <br />
                <span className="text-[#ed027e]">Archive.</span>
              </h1>
              <p className="mt-6 max-w-[46ch] font-sans text-base leading-relaxed text-white/75 sm:text-lg">
                Capturing the energy, elegance, and transformative momentum of women who are shaping Africa’s future across business, government, and civil society.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Link
                href="/nominate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ed027e]/25 transition-transform hover:scale-[1.03]"
              >
                <span>Nominate a 2026 Leader</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/media"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-[#ed027e] hover:text-white"
              >
                <span>Watch Highlight Reel</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-12 lg:py-20 bg-[#0A0D11]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-10 border-b border-white/10">
            <span className="mr-2 hidden items-center gap-1 text-xs font-bold uppercase tracking-wider text-white/50 sm:inline-flex">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#ed027e] text-white shadow-md shadow-[#ed027e]/30 scale-105"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Gallery Mosaic Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#151921] transition-all duration-500 hover:-translate-y-1 hover:border-[#ed027e]/60 hover:shadow-2xl hover:shadow-[#ed027e]/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0A0D11] via-transparent to-transparent opacity-80"
                  />
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-[#ed027e] border border-white/10">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white group-hover:text-[#ed027e] transition-colors">
                      <span>{item.title}</span>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/65">
                      <span>{item.caption}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
