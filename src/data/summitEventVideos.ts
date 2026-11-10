export interface SummitEventVideo {
  id: string;
  dayNumber: number;
  dayBadge: string;
  title: string;
  subtitle: string;
  youtubeId: string;
  youtubeUrl: string;
  description: string;
  keyTopics?: string[];
}

export const summitEventVideos: SummitEventVideo[] = [
  {
    id: "summit-day-1",
    dayNumber: 1,
    dayBadge: "Day 01 • Opening Plenary",
    title: "EmpowaHer Leadership Summit 2027 | Day 1",
    subtitle: "Opening Plenary, Ministerial Addresses & Leadership Dialogues",
    youtubeId: "mtoAWSMyCmY",
    youtubeUrl: "https://www.youtube.com/watch?v=mtoAWSMyCmY",
    description:
      "Full recorded livestream of Day 1 at EmpowaWorx House: Official summit opening, ministerial addresses, high-level panel discussions, and foundational leadership dialogues.",
    keyTopics: [
      "Official Summit Opening & Welcome",
      "Ministerial & Executive Keynotes",
      "Foundational Leadership Frameworks",
      "Intergenerational Governance Dialogue",
    ],
  },
  {
    id: "summit-day-2",
    dayNumber: 2,
    dayBadge: "Day 02 • Executive Tracks",
    title: "EmpowaHer Leadership Summit 2027 | Day 2",
    subtitle: "Executive Masterclasses & Parallel Leadership Tracks",
    youtubeId: "gXgj0JDxZFE",
    youtubeUrl: "https://www.youtube.com/watch?v=gXgj0JDxZFE",
    description:
      "Full recorded livestream of Day 2: Parallel masterclass tracks exploring entrepreneurship, board capability, digital leadership, AI, and institutional governance.",
    keyTopics: [
      "Parallel Masterclass Sessions",
      "Enterprise & Digital Leadership",
      "Corporate Governance & Ethics",
      "Capital Allocation & Scaling",
    ],
  },
  {
    id: "summit-day-3",
    dayNumber: 3,
    dayBadge: "Day 03 • Graduation Ceremony",
    title: "EmpowaHer Leadership Summit 2027 | Day 3",
    subtitle: "Global Leadership Addresses & Class Graduation Ceremony",
    youtubeId: "CnDP_Omu4iw",
    youtubeUrl: "https://www.youtube.com/watch?v=CnDP_Omu4iw",
    description:
      "Full recorded livestream of Day 3: Global leadership keynote addresses, high-powered diplomatic panel, and the formal Graduation and Recognition Ceremony.",
    keyTopics: [
      "Global Leadership Addresses",
      "High-Powered Ambassadors' Panel",
      "Cohort Project Showcases",
      "Official Graduation & Awards Ceremony",
    ],
  },
];

