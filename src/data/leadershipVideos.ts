export interface LeadershipVideo {
  id: string;
  name: string;
  role: string;
  category: "speaker" | "nominee" | "partner" | "team";
  categoryLabel: string;
  youtubeId: string;
  youtubeUrl: string;
  organization?: string;
  highlightText: string;
}

export const leadershipVideos: LeadershipVideo[] = [
  {
    id: "dr-sibongile-vilakazi",
    name: "Dr Sibongile Vilakazi",
    role: "Speaker",
    category: "speaker",
    categoryLabel: "Keynote Speaker",
    youtubeId: "A5gpoZwTAqo",
    youtubeUrl: "https://youtu.be/A5gpoZwTAqo",
    highlightText:
      "Keynote dialogue on executive leadership transformation, institutional governance, and empowering the next generation of women leaders.",
  },
  {
    id: "louisa-zondo",
    name: "Louisa Zondo",
    role: "Speaker",
    category: "speaker",
    categoryLabel: "Keynote Speaker",
    youtubeId: "wpG8RVJ7kHw",
    youtubeUrl: "https://youtu.be/wpG8RVJ7kHw",
    highlightText:
      "Reflections on civic courage, ethical leadership, institutional accountability, and transformative governance in Africa.",
  },
  {
    id: "zizipho-mqwala-nyanga",
    name: "Zizipho Mqwala Nyanga",
    role: "Speaker",
    category: "speaker",
    categoryLabel: "Keynote Speaker",
    youtubeId: "lY65YCf1By0",
    youtubeUrl: "https://youtu.be/lY65YCf1By0",
    highlightText:
      "Masterclass insights on executive readiness, board capability, personal transformation, and commercial leadership.",
  },
  {
    id: "bomibakhe-mbolekwa",
    name: "Bomibakhe Mbolekwa",
    role: "Nominee",
    category: "nominee",
    categoryLabel: "Emerging Leader Nominee",
    youtubeId: "e0DoLMUAZoY",
    youtubeUrl: "https://youtu.be/e0DoLMUAZoY",
    highlightText:
      "Candidate leader perspective on high-impact enterprise, innovation, and breaking barriers across South African industry.",
  },
  {
    id: "tseliso-mohlomi",
    name: "Tseliso Mohlomi",
    role: "Speaker",
    category: "speaker",
    categoryLabel: "Keynote Speaker",
    youtubeId: "ZaerBCVBIxE",
    youtubeUrl: "https://youtu.be/ZaerBCVBIxE",
    highlightText:
      "Strategic perspectives on digital innovation, enterprise capability, and career acceleration for emerging executives.",
  },
  {
    id: "nomonde-white-ndlovu",
    name: "Nomonde White-Ndlovu",
    role: "Speaker",
    category: "speaker",
    categoryLabel: "Keynote Speaker",
    youtubeId: "SYbjJeYTtIY",
    youtubeUrl: "https://youtu.be/SYbjJeYTtIY",
    highlightText:
      "Technology and digital leadership address on unlocking AI, career growth, and shaping Africa’s next knowledge economy.",
  },
  {
    id: "mikateko-chauke",
    name: "Mikateko Chauke",
    role: "Internal Team",
    category: "team",
    categoryLabel: "EmpowaWorx Team",
    youtubeId: "2RyjQYaVU2A",
    youtubeUrl: "https://youtu.be/2RyjQYaVU2A",
    organization: "EmpowaWorx™",
    highlightText:
      "Behind the scenes on summit production excellence, curation, and building high-impact delegate experiences.",
  },
  {
    id: "nthabiseng-makhalanyane",
    name: "Nthabiseng Makhalanyane",
    role: "Nominee",
    category: "nominee",
    categoryLabel: "Emerging Leader Nominee",
    youtubeId: "_wFMPoNJGyk",
    youtubeUrl: "https://youtu.be/_wFMPoNJGyk",
    highlightText:
      "Next-generation leader vision on social innovation, youth elevation, and commercial growth across sectors.",
  },
  {
    id: "karabo-motaung",
    name: "Karabo Motaung",
    role: "Partner, Competition Commission of South Africa",
    category: "partner",
    categoryLabel: "Strategic Partner",
    youtubeId: "SYGumEpeeFs",
    youtubeUrl: "https://youtu.be/SYGumEpeeFs",
    organization: "Competition Commission of South Africa",
    highlightText:
      "Strategic alignment between national regulatory institutions, economic inclusion, and emerging female leadership.",
  },
  {
    id: "luthando-mzilikazi",
    name: "Luthando Mzilikazi",
    role: "Speaker",
    category: "speaker",
    categoryLabel: "Keynote Speaker",
    youtubeId: "nsebgNPdSCA",
    youtubeUrl: "https://youtu.be/nsebgNPdSCA",
    highlightText:
      "Actionable leadership strategies on navigating high-growth corporate, institutional, and enterprise environments.",
  },
  {
    id: "khomotso-karabo-matate-modjadji",
    name: "Khomotso Karabo Matate Modjadji",
    role: "Nominee, Competition Commission of South Africa",
    category: "nominee",
    categoryLabel: "Partner Nominee",
    youtubeId: "k1OEIjNf-3Y",
    youtubeUrl: "https://youtu.be/k1OEIjNf-3Y",
    organization: "Competition Commission of South Africa",
    highlightText:
      "Candidate leader spotlight on public sector excellence, legal capability, and economic competition enforcement.",
  },
  {
    id: "lebogang-koitsioe",
    name: "Lebogang Koitsioe",
    role: "Speaker",
    category: "speaker",
    categoryLabel: "Keynote Speaker",
    youtubeId: "nkHgA5Och_M",
    youtubeUrl: "https://youtu.be/nkHgA5Och_M",
    highlightText:
      "Empowering young African women leaders to build resilient personal brands, executive presence, and impactful careers.",
  },
  {
    id: "dr-billy-selekane",
    name: "Dr Billy Selekane",
    role: "Speaker",
    category: "speaker",
    categoryLabel: "Keynote Speaker",
    youtubeId: "uVTzjwa-Zac",
    youtubeUrl: "https://youtu.be/uVTzjwa-Zac",
    highlightText:
      "World-renowned inspirational keynote on personal mastery, legacy building, and fearless leadership transformation.",
  },
  {
    id: "carshiefa-sissing",
    name: "Carshiefa Sissing",
    role: "Internal Team",
    category: "team",
    categoryLabel: "EmpowaWorx Team",
    youtubeId: "Ka7_3ZIFVpA",
    youtubeUrl: "https://youtu.be/Ka7_3ZIFVpA",
    organization: "EmpowaWorx™",
    highlightText:
      "Delivering transformative convening architecture, summit logistics, and stakeholder execution across the summit.",
  },
  {
    id: "chiazalam-thandiwe-ehirim",
    name: "Chiazalam Thandiwe Ehirim",
    role: "Nominee",
    category: "nominee",
    categoryLabel: "Emerging Leader Nominee",
    youtubeId: "L20OhrzLRoM",
    youtubeUrl: "https://youtu.be/L20OhrzLRoM",
    highlightText:
      "Candidate leader perspective on cross-border African innovation, creative industries, and pan-African collaboration.",
  },
  {
    id: "letlotlo-mokwenyane",
    name: "Letlotlo Mokwenyane",
    role: "Nominee & Emerging Leader",
    category: "nominee",
    categoryLabel: "Emerging Leader Nominee",
    youtubeId: "ME6A7mla470",
    youtubeUrl: "https://youtu.be/ME6A7mla470",
    highlightText:
      "Reflections on youth empowerment, purpose-driven leadership, and elevating emerging women in South Africa.",
  },
  {
    id: "ella-bella-constantinides-leite",
    name: "Ella Bella Constantinides-Leite",
    role: "Speaker",
    category: "speaker",
    categoryLabel: "Keynote Speaker",
    youtubeId: "p9Phdw1j-i8",
    youtubeUrl: "https://youtu.be/p9Phdw1j-i8",
    highlightText:
      "Environmental champion and keynote speaker on sustainable performance, female eco-entrepreneurship, and global impact.",
  },
  {
    id: "nomonde-mnukwa",
    name: "Nomonde Mnukwa",
    role: "Speaker",
    category: "speaker",
    categoryLabel: "Keynote Speaker",
    youtubeId: "Q8TNDsspL3U",
    youtubeUrl: "https://youtu.be/Q8TNDsspL3U",
    highlightText:
      "Executive government communications, public service governance, and policy leadership insights for emerging women leaders.",
  },
];
