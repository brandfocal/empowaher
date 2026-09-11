"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type TeamMember = {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
};

const teamMembers: TeamMember[] = [
  {
    id: "simphiwe-masiza",
    name: "Simphiwe Masiza",
    title: "Founder & Executive Producer, EmpowaHer™",
    image: "/team/simphiwe-masiza.jpg",
    bio: "Simphiwe Masiza is the founder and driving force behind EmpowaWomen™, providing strategic vision, ecosystem leadership, stakeholder engagement, and platform growth. He leads the development of transformative experiences, strategic partnerships, and high-impact platforms that position women at the centre of leadership, investment, innovation, governance, and economic advancement.",
  },
  {
    id: "bonnie-maponya",
    name: "Bonnie Maponya",
    title: "Chief of Staff",
    image: "/team/Bonnie-Maponya.jpg",
    bio: "Bonnie Maponya provides executive leadership across the EmpowaWomen™ ecosystem, ensuring world-class delivery, operational excellence, governance, stakeholder value, and programme execution.",
  },
  {
    id: "sechaba-motsieloa",
    name: "Sechaba Motsieloa",
    title: "Managing Executive",
    image: "/team/Sechaba-Motsieloa.jpeg",
    bio: "Sechaba Motsieloa is a seasoned executive with deep expertise in organisational strategy and transformational leadership. His track record spans multiple industries, where he has consistently delivered measurable outcomes and built high-performing teams.",
  },
  {
    id: "doric-sithole",
    name: "Doric Sithole",
    title: "Managing Executive – EmpowaHer™ | The Future Is Female™",
    image: "/team/Doric-Sithole.jpg",
    bio: "Doric Sithole is a seasoned communications, marketing, and leadership-development executive specialising in strategic communications, brand management, change management, and executive coaching. She partners with organisations to build influential brands, deliver high-impact leadership development programmes, and unlock human potential through authentic storytelling. As Managing Executive of EmpowaHer™ – The Future Is Female™, she serves as a passionate champion for women and emerging entrepreneurs, leveraging over 15 years of diverse leadership experience to drive measurable commercial and societal impact.",
  },
  {
    id: "boitumelo-mmakou",
    name: "Boitumelo Mmakou",
    title: "Digital Social Media and PR Specialist",
    image: "/team/boitumelo-mmakou.jpg",
    bio: "Boitumelo drives the firm’s digital presence and brand storytelling across social and media channels. She ensures the firm’s work reaches the clients and audiences who need it most.",
  },
];

export function EmpowaHerTeam() {
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({});

  const toggleBio = (id: string) => {
    setExpandedBios((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allExpanded = teamMembers.every((m) => expandedBios[m.id]);

  const toggleAll = () => {
    const nextState = !allExpanded;
    const update: Record<string, boolean> = {};
    teamMembers.forEach((m) => {
      update[m.id] = nextState;
    });
    setExpandedBios(update);
  };

  return (
    <section
      id="team"
      className="w-full border-t-[6px] border-[#ed027e] bg-white font-sans text-[#3f3f3f]"
      aria-labelledby="team-heading"
    >
      <div className="w-full px-4 py-16 sm:py-20 md:px-8 md:py-24 lg:px-12 xl:px-16 2xl:px-20">
        <header className="border-b border-[#1C2128]/12 pb-10 sm:pb-12 lg:pb-14">
          <p className="mb-4 text-[0.62rem] font-black uppercase tracking-[0.3em] text-[#ed027e]">
            <span>EMPOWAHER™ LEADERSHIP TEAM</span>
          </p>
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_auto]">
            <h2
              id="team-heading"
              className="font-heading max-w-[14ch] text-[clamp(2.75rem,7vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-[#1C2128] [text-wrap:balance]"
            >
              <span>Meet The Team.</span>
            </h2>
            <div className="flex flex-col items-start lg:items-end gap-3.5">
              <p className="max-w-[42ch] font-sans text-sm sm:text-base leading-relaxed text-[#3f3f3f]/75 lg:text-right">
                <span>
                  The leaders shaping the strategy, execution, and storytelling behind Africa’s premier women leadership platform.
                </span>
              </p>
              <button
                type="button"
                onClick={toggleAll}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#1C2128]/15 bg-[#F9F9F9] px-3.5 py-1.5 font-heading text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-[#1C2128] transition-all hover:border-[#ed027e] hover:bg-[#ed027e] hover:text-white"
              >
                <span>{allExpanded ? "Collapse All Bios" : "Expand All Bios"}</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-300 ${
                    allExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="mt-8 h-[3px] w-full rounded-full bg-[#ed027e]"
          />
        </header>

        <div className="mt-12 grid w-full min-w-0 grid-cols-1 items-start gap-10 sm:mt-14 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-5">
          {teamMembers.map((member) => {
            const isExpanded = Boolean(expandedBios[member.id]);

            return (
              <article
                key={member.id}
                className="group flex min-h-full min-w-0 touch-manipulation flex-col"
              >
                <figure className="m-0 w-full min-w-0">
                  <div className="relative aspect-[4/5] w-full min-w-0 overflow-hidden rounded-[1.5rem] bg-[#1C2128] shadow-[0_20px_50px_rgba(28,33,40,0.1)] transition-all duration-300 group-hover:shadow-[0_24px_60px_rgba(237,2,126,0.18)]">
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#1C2128]/95 via-[#1C2128]/40 to-transparent"
                    />
                    <figcaption className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16">
                      <h3 className="font-heading text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-white">
                        <span>{member.name}</span>
                      </h3>
                    </figcaption>
                  </div>
                </figure>

                <div className="mt-6 flex flex-1 flex-col border-l-2 border-[#ed027e] pl-4">
                  {/* Fixed min-height title container ensures uniform baseline alignment */}
                  <div className="min-h-[3.25rem] sm:min-h-[3.75rem] lg:min-h-[4.25rem]">
                    <p className="font-heading text-xs font-bold uppercase leading-snug tracking-[0.14em] text-[#ed027e]">
                      <span>{member.title}</span>
                    </p>
                  </div>

                  {/* Bio content with clamped state and reveal button */}
                  <div className="mt-2 flex flex-1 flex-col justify-between">
                    <p
                      className={`font-sans text-xs sm:text-[0.8125rem] leading-[1.65] text-[#3f3f3f]/75 transition-all duration-300 ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      <span>{member.bio}</span>
                    </p>

                    <button
                      type="button"
                      onClick={() => toggleBio(member.id)}
                      className="mt-3.5 inline-flex items-center gap-1.5 self-start rounded-full border border-[#ed027e]/30 bg-[#ed027e]/5 px-3 py-1 font-heading text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-[#ed027e] transition-all hover:bg-[#ed027e] hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed027e]/40"
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? "Collapse" : "Read full"} bio for ${member.name}`}
                    >
                      <span>{isExpanded ? "Show Less" : "Read Bio"}</span>
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
