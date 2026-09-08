"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Calendar,
  ChevronDown,
  Download,
  Mail,
  Phone,
} from "lucide-react";

type StatPill = {
  label: string;
  value: string;
};

type Pillar = {
  number: string;
  title: string;
  items: string[];
};

type ExperienceItem = {
  number: string;
  title: string;
  text: string;
};

type ScheduleRow = {
  time: string;
  item: string;
  topic: string;
  focus: string;
};

type Track = {
  number: string;
  title: string;
  tagline: string;
  focus: string;
};

type DayTwoTrack = {
  number: string;
  title: string;
  tagline: string;
  outcome: string;
  purpose: string;
  focus: string[];
  rows: ScheduleRow[];
  dark: boolean;
};

type ModelStep = {
  number: string;
  title: string;
  text: string;
};

type ProgressionColumn = {
  title: string;
  items: string;
};

type Highlight = {
  id: string;
  text: string;
};

type NavLink = {
  label: string;
  href: string;
  targetId: string;
};

const navLinks: NavLink[] = [
  { label: "Overview", href: "#overview", targetId: "overview" },
  { label: "Day One", href: "#day-one", targetId: "day-one" },
  { label: "Tracks", href: "#tracks", targetId: "tracks" },
  { label: "Day Two", href: "#day-two", targetId: "day-two" },
  { label: "Day Three", href: "#day-three", targetId: "day-three" },
  { label: "Nominate", href: "#apply", targetId: "apply" },
];

const heroDetails: StatPill[] = [
  { label: "Date", value: "29-31 October 2026" },
  {
    label: "Venue",
    value: "EmpowaWorx House, 364 Pine Avenue, Ferndale, Randburg, 2196",
  },
  {
    label: "Executive Producer",
    value: "Simphiwe Masiza, Founder and Executive Producer EmpowaHer",
  },
];

const summitStats: StatPill[] = [
  { label: "Dates", value: "29-31 Oct 2026" },
  { label: "Venue", value: "EmpowaWorx House Randburg" },
  { label: "Cohort", value: "Women Leaders 18-35" },
];

const programmePillars: Pillar[] = [
  {
    number: "01",
    title: "Opening Plenary",
    items: [
      "Presidential / Ministerial Keynote",
      "Global Leadership Keynote",
      "Strategic Partner Address",
      "Summit Declaration",
    ],
  },
  {
    number: "02",
    title: "Leadership Tracks - Nine Executive Tracks",
    items: [
      "Entrepreneurship & Capital",
      "Digital Leadership & AI",
      "Citizenship & Social Impact",
      "Personal Leadership Mastery",
      "Personal Finance & Wealth",
      "Health & Vitality",
      "Relationships, Rights & Safety",
      "Education & Global Leadership",
      "Board Readiness & Governance",
    ],
  },
  {
    number: "03",
    title: "Leadership Experiences",
    items: [
      "Keynote Addresses",
      "Leadership Dialogues",
      "Executive Panels",
      "Executive Masterclasses",
      "Leadership Labs",
    ],
  },
  {
    number: "04",
    title: "Opportunity Pathways",
    items: [
      "Education & Bursaries",
      "Employment & Placements",
      "Entrepreneurship & Capital",
      "Executive Leadership Programmes",
      "Board Appointments",
    ],
  },
  {
    number: "05",
    title: "Global Leadership, Opportunity & Graduation Finale",
    items: [
      "The Opportunity Compact",
      "Delegate Leadership Voices",
      "Graduation & Recognition",
      "Leadership Reception",
    ],
  },
];

const plenaryChips: StatPill[] = [
  { label: "Day One Theme", value: "Leading the Future" },
  { label: "Audience", value: "Emerging women leaders 18-35" },
  { label: "Venue", value: "Main Auditorium" },
];

const plenaryExperiences: ExperienceItem[] = [
  {
    number: "01",
    title: "The Rise of Her",
    text: "A powerful multidisciplinary performance combining music, spoken word, movement and visual storytelling to celebrate African women's courage, leadership and possibility.",
  },
  {
    number: "02",
    title: "Welcome to EmpowaHer - The Future Is Female",
    text: "Formal welcome, recognition of government, diplomatic, corporate, academic and development partners, and introduction to the summit experience.",
  },
  {
    number: "03",
    title: "Why EmpowaHer. Why Now.",
    text: "The Founder and Group CEO defines the leadership challenge, presents the summit's vision and calls for a coordinated national pipeline connecting young women to education, capital, employment, executive leadership and board opportunities.",
  },
  {
    number: "04",
    title: "The Future Is Female: Building a Generation of Women Who Will Lead Africa",
    text: "A national call to accelerate women's access to education, employment, entrepreneurship, technology, capital, executive leadership and public decision-making.",
  },
  {
    number: "05",
    title: "From Inspiration to Access",
    text: "Introduction of the scholarships, internships, executive programmes, mentorship, enterprise support, exchange opportunities and board-readiness pathways available through the summit.",
  },
];

const scheduleRows: ScheduleRow[] = [
  {
    time: "09:00-09:08",
    item: "Immersive Cultural Opening",
    topic: "The Rise of Her",
    focus: "A powerful multidisciplinary performance celebrating African women's agency and triumph.",
  },
  {
    time: "09:08-09:15",
    item: "Official Opening & Welcome",
    topic: "Welcome to EmpowaHer - The Future Is Female",
    focus: "Formal welcome and strategic alignment with key partners.",
  },
  {
    time: "09:15-09:30",
    item: "Founder's Strategic Scene-Setter",
    topic: "Why EmpowaHer. Why Now.",
    focus: "The Founder & Group CEO outlines the urgent imperative for a national pipeline.",
  },
  {
    time: "09:30-09:40",
    item: "Strategic Partner Address",
    topic: "Investing in Her Leadership Is Investing in Africa's Future",
    focus: "The anchor partner outlines its strategic commitment to women's economic advancement.",
  },
  {
    time: "09:40-10:05",
    item: "Presidential / Ministerial Keynote",
    topic: "The Future Is Female: Building a Generation of Women Leaders",
    focus: "A national call to accelerate access to education, capital, executive roles and governance.",
  },
  {
    time: "10:05-10:35",
    item: "Global Leadership Keynote",
    topic: "Leading Without Permission: Courage, Power and Global Impact",
    focus: "Compelling global perspective on authentic leadership, authority, and influence.",
  },
  {
    time: "10:35-10:50",
    item: "Leadership Conversation",
    topic: "From the Global Stage to the Next Generation",
    focus: "Translating international leadership milestones into practical progression strategies.",
  },
  {
    time: "10:50-10:56",
    item: "Opportunity Commitment",
    topic: "From Inspiration to Access",
    focus: "Announcing executive placements, bursaries, internships, and mentorship matches.",
  },
  {
    time: "10:56-11:00",
    item: "Official Summit Declaration",
    topic: "The Future Is Female Leadership Call",
    focus: "Formal declaration inaugurating the three-day EmpowaHer Summit 2026.",
  },
];

const leadershipTracks: Track[] = [
  {
    number: "01",
    title: "Entrepreneurship, Innovation and Funding",
    tagline: "Capital. Markets. Scale. Women Leading Africa's Economic Future.",
    focus:
      "Investment Readiness, Access to Capital (DFIs, Institutional investment, PE, VC), Market Access (Procurement, Corporate supply chains), Sustainable Scale.",
  },
  {
    number: "02",
    title: "Digital Leadership, AI and Career Growth",
    tagline: "Visible. Valuable. Future-Ready.",
    focus:
      "Practical AI Capability, Digital Fluency, Technology Innovation, Future-of-Work Readiness, Cyber Literacy.",
  },
  {
    number: "03",
    title: "Citizenship, Patriotism and Social Impact",
    tagline: "Our Country. Our Responsibility. Our Future.",
    focus:
      "Constitutional Literacy, Human Rights, Gender Equality, Ethical Patriotism, Civic Technology, Community Leadership, Social Innovation.",
  },
  {
    number: "04",
    title: "Personal Leadership Mastery & Transformation",
    tagline: "Lead Yourself. Navigate Complexity. Accelerate Your Future.",
    focus:
      "Self-Awareness, Executive Presence, Emotional Intelligence, Strategic Career Navigation, Disruption Resilience, Career Ownership.",
  },
  {
    number: "05",
    title: "Personal Finance, Investing & Wealth Creation",
    tagline: "The Cost of Waiting: Why Wealth Must Begin Early.",
    focus:
      "Cash-Flow Mastery, Credit & Debt Architecture, Direct Investing, Property Ownership, Retirement Systems, Estate Planning, Digital Assets.",
  },
  {
    number: "06",
    title: "Health, Wellness and Executive Vitality",
    tagline: "Healthy Woman. Powerful Leader. Sustainable Future.",
    focus:
      "Physical Health, Mental Wellbeing, Emotional Resilience, Reproductive Healthcare, Preventive Medicine, Restorative Sleep, High-Performance Nutrition.",
  },
  {
    number: "07",
    title: "Relationships, Rights, Safety & Executive Parenting",
    tagline: "Whole Woman. Equal Partner. Protected Future.",
    focus:
      "Healthy Relationships, Personal Agency, GBV Prevention & Support, Legal & Financial Rights, Marriage & Property Architecture, Executive Parenting, Boundary Setting.",
  },
  {
    number: "08",
    title: "Education, Executive Development & Global Leadership",
    tagline: "Learn. Lead. Advance. Women Building Africa's Knowledge Economy.",
    focus:
      "Executive Education, Professional Designations, Commercial Acumen, Global Fellowships, Executive Mentorship, Lifelong Career Capital.",
  },
  {
    number: "09",
    title: "Leadership, Governance & Board Readiness",
    tagline: "Lead with Authority. Govern with Integrity. Shape the Future.",
    focus:
      "Governance Literacy, Financial Statement Fluency, King IV & Fiduciary Duties, Boardroom Ethics, AI & Technology Oversight, Board Appointment Strategy.",
  },
];

const dayTwoTracks: DayTwoTrack[] = [
  {
    number: "06",
    title: "Health, Wellness and Executive Vitality",
    tagline: "Healthy Woman. Powerful Leader. Sustainable Future.",
    outcome: "Healthy Leaders. Sustainable Performance.",
    purpose:
      "This evidence-led track positions health as leadership capital. It recognises that sustained performance requires more than ambition: it depends on physical vitality, emotional resilience, preventive care, supportive workplaces, and informed access to healthcare.",
    focus: [
      "Physical Health",
      "Mental Wellbeing",
      "Emotional Resilience",
      "Reproductive Health",
      "Preventive Care",
      "Supportive Workplaces",
      "Healthcare Access",
      "Sleep & Recovery",
      "Nutrition & Movement",
      "Sustainable Vitality",
    ],
    dark: false,
    rows: [
      {
        time: "11:00-11:10",
        item: "Immersive Health Opening",
        topic: "Vitality as Leadership Capital",
        focus: "Why sustained executive performance begins with physical, emotional and mental well-being.",
      },
      {
        time: "11:10-11:30",
        item: "Opening Medical Keynote",
        topic: "The Biology of Leadership: Stress, Hormones and High Performance",
        focus: "Understanding the physiological demands of leadership and managing burnout proactively.",
      },
      {
        time: "11:30-12:05",
        item: "Mental Health Dialogue",
        topic: "Mind Over Matter: Cultivating Emotional Resilience in High-Pressure Roles",
        focus: "De-stigmatising mental health, emotional boundaries, therapy, and psychological safety.",
      },
      {
        time: "12:05-12:45",
        item: "Reproductive Health Panel",
        topic: "From Fertility to Menopause: Navigating Women's Health Throughout Career Phases",
        focus: "Reproductive choices, hormonal cycles, preventive screenings, and corporate healthcare benefits.",
      },
      {
        time: "12:45-01:30",
        item: "Wellness Lunch & Connection",
        topic: "The Nourish Experience",
        focus: "Networking over curated nutritious lunch connecting delegates with medical and wellness specialists.",
      },
      {
        time: "01:30-02:15",
        item: "Executive Vitality Masterclass",
        topic: "Sleep, Nutrition and Micro-Habits That Power High Performance",
        focus: "Circadian rhythms, targeted nutrition, movement integration, and science-backed recovery protocols.",
      },
      {
        time: "02:15-02:45",
        item: "Workplace Health Advocacy",
        topic: "Designing Healthier Organisations for Women",
        focus: "How leaders advocate for mental wellness days, ergonomic workspaces, and flexible health policies.",
      },
      {
        time: "02:45-03:00",
        item: "Closing Commitment",
        topic: "My Executive Vitality Blueprint",
        focus: "Each delegate drafts a personal 90-day wellness commitment across sleep, movement, and medical care.",
      },
    ],
  },
  {
    number: "07",
    title: "Relationships, Rights, Safety and Executive Parenting",
    tagline: "Whole Woman. Equal Partner. Protected Future.",
    outcome: "Whole-Life Leadership and Personal Agency",
    purpose:
      "This courageous, rights-centred track recognises that women's personal relationships, safety, financial independence, caregiving responsibilities and family structures profoundly influence their leadership journeys and economic futures. It creates a facilitated environment for informed conversations about equality, legal protection, and work-life integration.",
    focus: [
      "Healthy Relationships",
      "Personal Agency",
      "GBV Prevention",
      "Legal & Financial Rights",
      "Consent & Boundaries",
      "Marriage & Property Systems",
      "Executive Parenting",
      "Work-Life Integration",
      "Support Networks",
      "Financial Independence",
    ],
    dark: true,
    rows: [
      {
        time: "11:00-11:10",
        item: "Immersive Opening Experience",
        topic: "The Whole Woman: Leadership Beyond the Boardroom",
        focus: "Reflecting on how identity, relationships, safety, family, and personal agency intersect.",
      },
      {
        time: "11:10-11:30",
        item: "Opening Keynote Address",
        topic: "A Life of Your Own: Love, Leadership and Personal Agency",
        focus: "Building relationships without surrendering identity, ambition, dignity, or economic agency.",
      },
      {
        time: "11:30-12:05",
        item: "Healthy Relationships Dialogue",
        topic: "Love Without Losing Yourself: Partnership, Boundaries and Shared Power",
        focus: "Recognising healthy relationship dynamics, negotiating equality in domestic duties and careers.",
      },
      {
        time: "12:05-12:45",
        item: "Rights and GBV Leadership Panel",
        topic: "Safe at Home. Safe at Work. Safe in Society.",
        focus: "Preventing coercive control, harassment, financial abuse, and accessing legal/psychosocial support.",
      },
      {
        time: "12:45-01:05",
        item: "Consent & Wellbeing Conversation",
        topic: "Consent, Communication and Sexual Wellbeing",
        focus: "Medically accurate and rights-based conversation about boundaries and sexual health.",
      },
      {
        time: "01:05-01:50",
        item: "Leadership Lunch & Circles",
        topic: "The Circle of Strength",
        focus: "Curated lunch connecting delegates with mentors, legal practitioners, therapists, and senior leaders.",
      },
      {
        time: "01:50-02:25",
        item: "Marriage, Law & Money Masterclass",
        topic: "Before I Do: Marriage, Property and Financial Rights",
        focus: "Antenuptial contracts, civil vs customary marriage, estate planning, wills, trusts, and maintenance.",
      },
      {
        time: "02:25-03:00",
        item: "Executive Parenting Lab",
        topic: "Leading While Raising Leaders",
        focus: "Managing high-powered careers alongside caregiving, delegating without guilt, and support networks.",
      },
    ],
  },
  {
    number: "08",
    title: "Education, Executive Development and Global Leadership",
    tagline: "Learn. Lead. Advance. Women Building Africa's Knowledge Economy.",
    outcome: "Leadership Pipeline from Learning to Opportunity",
    purpose:
      "This high-impact track connects ambitious young women to the education, executive development, and global leadership opportunities required to progress from specialist to manager, executive, and board member. The focus extends beyond qualifications to commercial acumen, global fluency, mentorship, and sponsorship.",
    focus: [
      "Executive Development",
      "Professional Designations",
      "Digital Fluency",
      "Commercial Acumen",
      "Global Fellowships",
      "Executive Mentorship",
      "Sponsorship Networks",
      "Executive Coaching",
      "Lifelong Learning",
      "Opportunity Pathways",
    ],
    dark: false,
    rows: [
      {
        time: "11:00-11:10",
        item: "Immersive Education Opening",
        topic: "The Future Belongs to Women Who Keep Learning",
        focus: "Showcasing how continuous credentialing, AI mastery, and global exposure accelerate mobility.",
      },
      {
        time: "11:10-11:30",
        item: "Ministerial Keynote Address",
        topic: "Educating the Women Who Will Lead Africa's Future",
        focus: "Expanding funded access to quality post-school education, scarce skills, and executive programmes.",
      },
      {
        time: "11:30-12:10",
        item: "Public-Sector Leadership Panel",
        topic: "From Policy to Opportunity: Building a National Leadership Pipeline",
        focus: "How SETAs, NSFAS, the National Skills Fund, and universities activate funded development pathways.",
      },
      {
        time: "12:10-12:50",
        item: "Business School Deans' Dialogue",
        topic: "From Qualification to Executive Capability",
        focus: "Executive education responsiveness to AI, ESG, commercial acumen, and continental trade.",
      },
      {
        time: "12:50-01:35",
        item: "Opportunity Marketplace Lunch",
        topic: "The Education & Leadership Exchange",
        focus: "Connecting delegates with scholarship providers, business schools, and executive search partners.",
      },
      {
        time: "01:35-02:05",
        item: "SETA & Bursary Masterclass",
        topic: "Fund Your Future: Navigating Bursaries and Workplace Learning",
        focus: "Actionable guidance on learnerships, recognition of prior learning (RPL), and funded leadership seats.",
      },
      {
        time: "02:05-02:35",
        item: "Global Exposure Dialogue",
        topic: "Africa to the World: Building Globally Fluent Women Leaders",
        focus: "Fellowships, cross-border secondments, international trade delegations, and global think tanks.",
      },
      {
        time: "02:35-03:00",
        item: "Mentorship vs Sponsorship Lab",
        topic: "Beyond Mentorship: Who Is Advocating for Your Promotion?",
        focus: "Distinguishing advisors from active sponsors and securing champions who speak up behind closed doors.",
      },
    ],
  },
  {
    number: "09",
    title: "Leadership, Governance and Board Readiness",
    tagline: "Lead with Authority. Govern with Integrity. Shape the Future.",
    outcome: "Executive Leadership and Board Readiness",
    purpose:
      "This rigorous track prepares emerging women leaders for executive committees and board service by strengthening governance literacy, financial fluency, ethical leadership, and technology oversight. It creates direct pathways into corporate, state-owned, and civil society boardrooms.",
    focus: [
      "Governance Literacy",
      "Financial Fluency",
      "Fiduciary Duties",
      "Board Ethics",
      "AI & Tech Oversight",
      "Cyber Risk Oversight",
      "ESG & Sustainability",
      "Strategic Stewardship",
      "Board Appointment Strategy",
      "Executive Credibility",
    ],
    dark: true,
    rows: [
      {
        time: "11:00-11:10",
        item: "Immersive Leadership Opening",
        topic: "The Future Is Female and Governed by Her",
        focus: "Showcasing African women transforming industries in the highest decision-making boardrooms.",
      },
      {
        time: "11:10-11:30",
        item: "Ministerial Keynote Address",
        topic: "From Representation to Decision-Making Power",
        focus: "Accelerating women's progression onto corporate and state-owned entity governing bodies.",
      },
      {
        time: "11:30-12:10",
        item: "Women on Boards Dialogue",
        topic: "Beyond the Seat: What Defines a Board-Ready Woman?",
        focus: "Competence, character, judgment, independence of thought, and director-level maturity.",
      },
      {
        time: "12:10-12:50",
        item: "CEO & Managing Executives Panel",
        topic: "From Operational Leader to Enterprise Leader",
        focus: "Pivotal assignments, commercial acumen, and strategic relationships that unlock ExCo progression.",
      },
      {
        time: "12:50-01:35",
        item: "Governance Connections Lunch",
        topic: "The Governance Exchange",
        focus: "Connecting delegates with board chairs, IoDSA directors, executive search chairs, and deans.",
      },
      {
        time: "01:35-02:05",
        item: "IoDSA Governance Masterclass",
        topic: "Inside the Boardroom: Directors' Duties, Ethics and Accountability",
        focus: "King IV principles, fiduciary responsibilities, conflicts of interest, and oversight vs management.",
      },
      {
        time: "02:05-02:35",
        item: "Financial Fluency Masterclass",
        topic: "Reading the Business Behind the Numbers",
        focus: "Interrogating balance sheets, liquidity, capital allocation, solvency, audit reports, and risk.",
      },
      {
        time: "02:35-03:05",
        item: "Future-Ready Board Dialogue",
        topic: "Governing What Comes Next: AI, Cyber Risk, Sustainability & Trust",
        focus: "Overseeing artificial intelligence adoption, cybersecurity posture, workforce disruption, and ESG.",
      },
      {
        time: "03:05-03:35",
        item: "Board Appointment Lab",
        topic: "From Board-Ready to Board-Appointed",
        focus: "Crafting a governance CV, board value proposition, navigating nominations and due diligence.",
      },
    ],
  },
];

const appliedModel: ModelStep[] = [
  {
    number: "01",
    title: "Executive Keynote or Strategic Dialogue",
    text: "Sets the strategic agenda through insights from accomplished business, government, and industry leaders.",
  },
  {
    number: "02",
    title: "Expert & Practitioner Interrogation",
    text: "Connects strategic frameworks with lived experience, operational reality, and sector-specific nuance.",
  },
  {
    number: "03",
    title: "Applied Masterclass, Simulation or Lab",
    text: "Enables participants to practice critical skills, solve complex simulations, and leave with working blueprints.",
  },
  {
    number: "04",
    title: "Curated Partner & Delegate Engagement",
    text: "Creates high-trust interaction between partners and a pre-selected cohort aligned with their talent priorities.",
  },
  {
    number: "05",
    title: "Partner-Owned Opportunity Activation",
    text: "Converts summit sponsorship into tangible pathways: bursaries, internships, seed capital, or board seats.",
  },
  {
    number: "06",
    title: "Practical 90/100-Day Commitment",
    text: "Each participant defines measurable milestones to hold themselves accountable well beyond the summit.",
  },
];

const progressionFlow: ProgressionColumn[] = [
  { title: "Potential", items: "Education, Foundational Skills, Purpose" },
  {
    title: "Preparation",
    items: "Capability Mastery, Executive Education, Mentorship",
  },
  {
    title: "Opportunity",
    items: "Employment, Venture Capital, Fellowships",
  },
  {
    title: "Leadership",
    items: "Executive Committee, Board Directorship, Civic Power",
  },
  {
    title: "Measurable Impact",
    items: "Opportunity Compact, Mentoring Next Cohorts, Economic Transformation",
  },
];

const graduationHighlights: Highlight[] = [
  {
    id: "global-keynotes",
    text: "Global Leadership and Ministerial Keynote Addresses",
  },
  {
    id: "ambassadors-panel",
    text: "Ambassadors Panel: Africa to the World: Diplomacy, Global Leadership and Opportunity",
  },
  {
    id: "ceos-panel",
    text: "CEOs Panel: The Leadership Opportunity Agenda: Opening Doors to Power, Capital and Influence",
  },
  {
    id: "opportunity-exchange",
    text: "The Opportunity Exchange — Direct Engagements with Corporates & Business Schools",
  },
  {
    id: "opportunity-compact",
    text: "Leadership Opportunities and Commitments: The EmpowaHer Opportunity Compact",
  },
  {
    id: "delegate-voices",
    text: "Delegate Leadership Voices: The Future We Choose to Lead",
  },
  {
    id: "graduation-recognition",
    text: "Graduation and Leadership Recognition: The EmpowaHer Class of 2026",
  },
  {
    id: "reception",
    text: "Graduation Reception: The Future Is Female Leadership Reception",
  },
];

const graduationScheduleRows: ScheduleRow[] = [
  {
    time: "09:00-09:10",
    item: "Immersive Opening Experience",
    topic: "Her Future. Her Leadership. Her World.",
    focus: "Cinematic reflection on the three-day summit journey and emerging leaders' commitments.",
  },
  {
    time: "09:10-09:20",
    item: "Official Welcome & Reflection",
    topic: "From Potential to Leadership",
    focus: "Reflecting on converting insights into concrete career progression and measurable impact.",
  },
  {
    time: "09:20-09:45",
    item: "Ministerial Keynote Address",
    topic: "The Future Is Female: Building a National Pipeline of Young Women Leaders",
    focus: "National roadmap for economic inclusion across business, government, and the boardroom.",
  },
  {
    time: "09:45-10:25",
    item: "High-Powered Ambassadors' Panel",
    topic: "Africa to the World: Diplomacy, Global Leadership and Opportunity",
    focus: "International fellowships, cross-border trade networks, diplomatic careers, and study exchanges.",
  },
  {
    time: "10:25-11:10",
    item: "High-Powered CEOs' Panel",
    topic: "The Leadership Opportunity Agenda: Opening Doors to Power, Capital and Influence",
    focus: "CEOs pledge tangible roles, supplier development funding, and board mentorship.",
  },
  {
    time: "11:10-11:25",
    item: "Leadership Connections Break",
    topic: "The Opportunity Exchange",
    focus: "Structured networking between delegates, employers, embassies, and executive coaches.",
  },
  {
    time: "11:25-12:05",
    item: "DGs & Business School Deans' Panel",
    topic: "From Learning to Leadership: Building Capabilities the Future Demands",
    focus: "Creating seamless pathways from graduate diplomas to executive education and board directorship.",
  },
  {
    time: "12:05-12:35",
    item: "Leadership Commitments Announcement",
    topic: "The EmpowaHer Opportunity Compact",
    focus: "Unveiling scholarships, enterprise seed capital, bursaries, and executive placements.",
  },
  {
    time: "12:35-12:55",
    item: "Delegate Leadership Voices",
    topic: "The Future We Choose to Lead",
    focus: "Selected delegates present their concrete post-summit initiatives and commitments.",
  },
  {
    time: "12:55-01:25",
    item: "Graduation & Leadership Recognition",
    topic: "The EmpowaHer Class of 2026",
    focus: "Conferral of certificates of track completion and special leadership recognitions.",
  },
  {
    time: "01:25-02:00",
    item: "Graduation Reception & Departure",
    topic: "The Future Is Female Leadership Reception",
    focus: "Celebratory networking, partner engagements, official class portraits, and departure.",
  },
];

export function EmpowaHerProgramme() {
  const [plenaryOpen, setPlenaryOpen] = useState(false);
  const [graduationOpen, setGraduationOpen] = useState(false);
  const [trackTimetableOpen, setTrackTimetableOpen] = useState<Record<string, boolean>>({});
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFloatingApply, setShowFloatingApply] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBackToTop(currentScrollY > 400);
      setShowFloatingApply(currentScrollY > 750);

      const scrollProbe = currentScrollY + 120;
      let currentSection = navLinks[0].targetId;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.targetId);
        if (section && section.offsetTop <= scrollProbe) {
          currentSection = link.targetId;
        }
      });
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTrackTimetable = (trackNumber: string) => {
    setTrackTimetableOpen((prev) => ({
      ...prev,
      [trackNumber]: !prev[trackNumber],
    }));
  };

  return (
    <main
      className={`min-h-screen bg-white font-sans text-[#3f3f3f] selection:bg-[#ed027e] selection:text-white transition-[padding] duration-300 ${
        showFloatingApply ? "pb-32 sm:pb-24" : "pb-0"
      }`}
    >
      {/* Sticky Top Navigation Menu */}
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0D0D0D]/95 backdrop-blur-md text-white shadow-lg transition-all"
      >
        <div className="mx-auto flex min-h-16 w-full max-w-[1380px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-14">
          <Link
            href="/"
            aria-label="EmpowaHer home"
            className="flex shrink-0 items-center transition-opacity hover:opacity-90"
          >
            <Image
              src="/empowaher-logo.png"
              alt="EmpowaHer Logo"
              width={160}
              height={44}
              className="h-7 sm:h-9 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>

          <div className="hidden items-center justify-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.targetId}
                href={link.href}
                className={`border-b-2 px-3.5 py-4 font-heading text-xs font-bold uppercase tracking-[0.14em] transition-all hover:border-[#ed027e] hover:text-[#ed027e] ${
                  activeSection === link.targetId
                    ? "border-[#ed027e] text-[#ed027e]"
                    : "border-transparent text-white/70"
                }`}
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/EmpowaHER-Programme-2026.pdf"
              download="EmpowaHER-Programme-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/30 px-4 py-1.5 font-heading text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-white/90 transition-all hover:border-[#ed027e] hover:text-[#ed027e]"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Programme (PDF)</span>
            </a>
            <Link
              href="/nomination-form"
              className="shrink-0 rounded-full bg-[#ed027e] px-4 py-1.5 sm:px-5 sm:py-2 font-heading text-[0.6875rem] sm:text-xs font-black uppercase tracking-[0.12em] text-white shadow-md transition-all hover:scale-105 hover:bg-[#ed027e]/90 active:scale-95"
            >
              <span>Nominate / Apply</span>
            </Link>
          </div>
        </div>

        {/* Mobile Section Sub-Navigation (< lg) */}
        <div className="flex lg:hidden overflow-x-auto no-scrollbar gap-2 px-4 py-2 border-t border-white/10 bg-black/40">
          {navLinks.map((link) => (
            <a
              key={`m-${link.targetId}`}
              href={link.href}
              className={`shrink-0 rounded-full px-3 py-1 font-heading text-[0.6875rem] font-bold uppercase tracking-wider transition-all ${
                activeSection === link.targetId
                  ? "bg-[#ed027e] text-white shadow-sm"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section (Inner header stripped, content properly spaced) */}
      <section
        id="top"
        className="min-h-[calc(100vh-4rem)] bg-[#0D0D0D] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-14 lg:py-20 flex flex-col justify-center"
      >
        <div className="mx-auto grid w-full max-w-[1380px] gap-14 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <div className="mb-5 border-l-2 border-[#ed027e] pl-3 text-[0.6875rem] font-black uppercase tracking-[0.22em] text-white/80 font-heading">
              <span>EmpowaHer Programme 2026</span>
            </div>
            <h1 className="max-w-[10ch] font-heading text-[clamp(3.25rem,7.5vw,6.75rem)] font-black uppercase leading-[0.88] tracking-[-0.03em] text-white">
              <span>The Future Is Female.</span>
            </h1>
            <p className="mt-8 max-w-[32ch] font-heading text-[clamp(1.2rem,2.2vw,1.75rem)] font-bold uppercase leading-[1.25] tracking-[-0.01em] text-white/90">
              <span>An Executive Leadership Experience for Africa&apos;s Next Generation of Women Leaders (18-35).</span>
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/nomination-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-7 py-3.5 font-heading text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg transition-all hover:scale-105 hover:bg-[#ed027e]/90"
              >
                <span>Nominate / Apply</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="/EmpowaHER-Programme-2026.pdf"
                download="EmpowaHER-Programme-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/5 px-7 py-3.5 font-heading text-xs font-black uppercase tracking-[0.14em] text-white transition-all hover:bg-white hover:text-[#0D0D0D]"
              >
                <Download className="h-4 w-4" />
                <span>Download Programme (PDF)</span>
              </a>
            </div>
          </div>

          <div className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10">
            <div className="space-y-6">
              {heroDetails.map((detail) => (
                <article key={detail.label} className="border-b border-white/10 pb-5 last:border-b-0">
                  <p className="mb-2 font-heading text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                    <span>{detail.label}</span>
                  </p>
                  <p className="max-w-[34ch] font-sans text-[1rem] font-semibold leading-[1.5] text-white/80">
                    <span>{detail.value}</span>
                  </p>
                </article>
              ))}
            </div>
            <address className="mt-8 not-italic font-sans text-sm leading-[1.7] text-white/60">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#ed027e]" />
                <a href="tel:+27734632090" className="hover:text-white transition-colors">
                  <span>+27 (0) 73 463 2090</span>
                </a>
              </p>
              <p className="flex items-center gap-3 mt-2">
                <Mail className="h-4 w-4 shrink-0 text-[#ed027e]" />
                <a href="mailto:simphiwe@empowaworx.co.za" className="hover:text-white transition-colors">
                  <span>simphiwe@empowaworx.co.za</span>
                </a>
              </p>
            </address>
          </div>
        </div>
      </section>

      {/* 01 — Summit Overview & Architecture */}
      <section id="overview" className="border-t-4 border-[#ed027e] bg-white lg:flex lg:items-start">
        <aside className="w-full border-b border-[#3f3f3f]/15 p-6 sm:p-8 lg:sticky lg:top-20 lg:w-[42%] xl:w-[38%] lg:self-start lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
          <p className="mb-4 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
            <span>Summit Experience</span>
          </p>
          <h2 className="font-heading text-[clamp(1.85rem,3.2vw,3rem)] font-black uppercase leading-[1.08] tracking-[-0.02em] text-[#0D0D0D]">
            <span>A Three-Day Executive Leadership Experience.</span>
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {summitStats.map((stat) => (
              <article key={stat.label} className="border border-[#3f3f3f]/15 px-5 py-3.5 bg-[#F9F4F7]/60 rounded-sm">
                <p className="font-heading text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                  <span>{stat.label}</span>
                </p>
                <p className="mt-0.5 font-heading text-base font-black leading-tight text-[#0D0D0D]">
                  <span>{stat.value}</span>
                </p>
              </article>
            ))}
          </div>
        </aside>

        <div className="flex-1 px-5 py-12 sm:px-10 lg:px-12 lg:py-20">
          <p className="mb-8 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
            <span>Programme Architecture</span>
          </p>
          <div className="space-y-5">
            {programmePillars.map((pillar) => (
              <article
                key={pillar.number}
                className="grid gap-5 border-t border-[#3f3f3f]/15 py-8 sm:grid-cols-[8rem_1fr]"
              >
                <span
                  aria-hidden="true"
                  className="font-heading text-[5.5rem] font-black leading-[0.8] tracking-[-0.08em] text-[#0D0D0D]/10"
                >
                  {pillar.number}
                </span>
                <div>
                  <h3 className="font-heading text-[clamp(1.5rem,2.8vw,2.5rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-[#0D0D0D]">
                    <span>{pillar.title}</span>
                  </h3>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 font-sans text-[0.9375rem] font-semibold leading-[1.4] text-[#3f3f3f]"
                      >
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#ed027e]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Day One Banner */}
      <div className="border-l-4 border-[#ed027e] bg-[#ed027e]/[0.10] px-6 sm:px-10 py-2.5 font-heading text-xs font-black uppercase tracking-[0.2em] text-[#ed027e]">
        <span>DAY ONE — 29 OCTOBER 2026 — OPENING PLENARY</span>
      </div>

      {/* Day One Section */}
      <section id="day-one" className="border-t-4 border-[#ed027e] bg-[#0D0D0D] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
                <span>Day One</span>
              </p>
              <h2 className="font-heading text-[clamp(2.4rem,5.5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.03em]">
                <span>Opening Plenary: Leading the Future: Women, Power and Possibility.</span>
              </h2>
            </div>
            <p className="max-w-[42ch] font-sans text-[1rem] leading-[1.65] text-white/70 lg:justify-self-end">
              <span>
                The Day One Opening Plenary establishes the intellectual, emotional and strategic direction for the
                three-day EmpowaHer Leadership Summit.
              </span>
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {plenaryChips.map((chip) => (
              <article key={chip.label} className="border border-white/15 px-5 py-4 bg-white/[0.02]">
                <p className="font-heading text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                  <span>{chip.label}</span>
                </p>
                <p className="mt-2 font-sans text-sm font-bold leading-[1.4] text-white/90">
                  <span>{chip.value}</span>
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {plenaryExperiences.map((experience) => (
              <article key={experience.number} className="border-t border-white/15 pt-6">
                <span
                  aria-hidden="true"
                  className="block font-heading text-[5rem] font-black leading-[0.8] tracking-[-0.08em] text-white/[0.08]"
                >
                  {experience.number}
                </span>
                <h3 className="mt-2 font-heading text-lg font-black uppercase leading-[1.2] tracking-[-0.01em] text-white">
                  <span>{experience.title}</span>
                </h3>
                <p className="mt-4 font-sans text-sm leading-[1.6] text-white/60">
                  <span>{experience.text}</span>
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <button
              type="button"
              aria-expanded={plenaryOpen}
              aria-controls="day-one-timetable"
              onClick={() => setPlenaryOpen((prev) => !prev)}
              className="flex w-full items-center justify-between border-t-2 border-b-2 border-white/20 bg-white px-6 py-4 font-heading text-xs font-black uppercase tracking-[0.18em] text-[#0D0D0D] shadow-md transition-colors hover:bg-gray-100"
            >
              <span className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-[#ed027e]" />
                <span>{plenaryOpen ? "Hide Timetable" : "View Full Timetable"}</span>
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  plenaryOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              id="day-one-timetable"
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: plenaryOpen ? "4000px" : "0px" }}
            >
              {/* Mobile Responsive Timetable Cards (< md) */}
              <div className="md:hidden space-y-3 pt-4">
                {scheduleRows.map((row, rowIndex) => (
                  <article
                    key={`m-plenary-${row.time}-${rowIndex}`}
                    className="rounded-lg border border-white/15 bg-white/[0.04] p-4 sm:p-5 relative overflow-hidden"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                      <span className="inline-flex items-center rounded-full bg-[#ed027e] px-2.5 py-0.5 font-heading text-xs font-black tracking-wider text-white">
                        {row.time}
                      </span>
                      <span className="font-heading text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/70">
                        {row.item}
                      </span>
                    </div>
                    <h4 className="mt-3 font-sans text-base font-bold leading-snug text-white">
                      {row.topic}
                    </h4>
                    <div className="mt-2.5 rounded border border-white/10 bg-white/[0.02] p-3 text-xs leading-relaxed text-white/70">
                      <span className="mb-1 block font-heading text-[0.625rem] font-black uppercase tracking-[0.16em] text-[#ed027e]">
                        Strategic Focus
                      </span>
                      {row.focus}
                    </div>
                  </article>
                ))}
              </div>

              {/* Desktop Wide Table (hidden md:block) */}
              <div className="hidden md:block pt-4 overflow-x-auto">
                <table className="w-full min-w-[920px] table-fixed border-collapse text-left">
                  <colgroup>
                    <col className="w-[12%]" />
                    <col className="w-[20%]" />
                    <col className="w-[26%]" />
                    <col className="w-[42%]" />
                  </colgroup>
                  <thead className="bg-white/[0.08] text-white">
                    <tr className="border border-white/20">
                      <th className="px-4 py-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                        <span>Time</span>
                      </th>
                      <th className="px-4 py-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                        <span>Item</span>
                      </th>
                      <th className="border-l-2 border-[#ed027e]/40 px-4 py-3 pl-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                        <span>Topic</span>
                      </th>
                      <th className="px-4 py-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                        <span>Strategic Focus</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleRows.map((row, rowIndex) => (
                      <tr
                        key={row.time}
                        className={`${rowIndex % 2 === 0 ? "bg-white/[0.04]" : "bg-transparent"} text-white`}
                      >
                        <td className="whitespace-nowrap border border-white/12 px-4 py-4 align-top font-heading text-sm font-bold tabular-nums text-[#ed027e]">
                          <span>{row.time}</span>
                        </td>
                        <td className="border border-white/12 px-4 py-4 align-top font-sans text-sm font-semibold">
                          <span>{row.item}</span>
                        </td>
                        <td className="border border-white/12 border-l-2 border-l-[#ed027e]/40 px-4 py-4 pl-3 align-top font-sans text-sm font-bold text-white">
                          <span>{row.topic}</span>
                        </td>
                        <td className="border border-white/12 px-4 py-4 align-top font-sans text-sm leading-[1.5] text-white/70">
                          <span>{row.focus}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nine Executive Tracks Section */}
      <section id="tracks" className="border-t-4 border-[#ed027e] bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-24 text-[#3f3f3f]">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
                <span>Day One and Day Two</span>
              </p>
              <h2 className="font-heading text-[clamp(2.5rem,5.5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.03em] text-[#0D0D0D]">
                <span>Nine Executive Leadership Tracks.</span>
              </h2>
            </div>
            <p className="max-w-[38ch] font-sans text-[0.95rem] leading-[1.6] text-[#3f3f3f]/70 lg:justify-self-end">
              <span>
                Specialised learning tracks designed to prepare Africa&apos;s next generation of women leaders to compete,
                lead and succeed.
              </span>
            </p>
          </div>

          <div className="grid gap-px bg-[#3f3f3f]/15 md:grid-cols-2 xl:grid-cols-3 border border-[#3f3f3f]/15">
            {leadershipTracks.map((track) => (
              <article key={track.number} className="bg-white p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span
                    aria-hidden="true"
                    className="block font-heading text-[5.5rem] font-black leading-[0.8] tracking-[-0.08em] text-[#0D0D0D]/10"
                  >
                    {track.number}
                  </span>
                  <h3 className="mt-4 font-heading text-[1.35rem] font-black uppercase leading-[1.18] tracking-[-0.02em] text-[#0D0D0D]">
                    <span>{track.title}</span>
                  </h3>
                  <p className="mt-3 font-heading text-sm font-bold uppercase leading-[1.25] tracking-[0.04em] text-[#ed027e]">
                    <span>{track.tagline}</span>
                  </p>
                </div>
                <p className="mt-6 border-t border-[#3f3f3f]/10 pt-4 font-sans text-sm leading-[1.6] text-[#3f3f3f]/75">
                  <strong className="font-bold text-[#0D0D0D]">Strategic Focus: </strong>
                  <span>{track.focus}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Day Two Banner */}
      <div className="border-l-4 border-[#ed027e] bg-[#ed027e]/[0.10] px-6 sm:px-10 py-2.5 font-heading text-xs font-black uppercase tracking-[0.2em] text-[#ed027e]">
        <span>DAY TWO — 30 OCTOBER 2026 — LEADERSHIP TRACKS 06–09</span>
      </div>

      {/* Day Two Overview Section */}
      <section id="day-two" className="border-t-4 border-[#ed027e] bg-[#0D0D0D] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
                <span>Day Two</span>
              </p>
              <h2 className="font-heading text-[clamp(2.5rem,5.5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.03em]">
                <span>Specialist Day Two Tracks</span>
              </h2>
            </div>
            <p className="max-w-[42ch] font-sans text-[1rem] leading-[1.65] text-white/70 lg:justify-self-end">
              <span>
                09:00 AM to 2:00 PM. Four specialist executive tracks running in parallel across Day Two. Each delegate
                attends one focused track.
              </span>
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-white/15 sm:grid-cols-2 xl:grid-cols-4 border border-white/15">
            {dayTwoTracks.map((track) => (
              <a
                key={track.number}
                href={`#track-${track.number}`}
                className="bg-[#0D0D0D] p-6 sm:p-7 transition-colors hover:bg-white/[0.04] group"
              >
                <span
                  aria-hidden="true"
                  className="block font-heading text-[5rem] font-black leading-[0.8] tracking-[-0.08em] text-white/[0.08] group-hover:text-[#ed027e]/30 transition-colors"
                >
                  {track.number}
                </span>
                <p className="mt-4 font-heading text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                  <span>Track {track.number}</span>
                </p>
                <h3 className="mt-1 font-heading text-lg font-black uppercase leading-[1.05] tracking-[-0.02em] text-white">
                  <span>{track.title}</span>
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Day Two Tracks with Expandable Tables */}
      {dayTwoTracks.map((track) => (
        <section
          key={`track-${track.number}`}
          id={`track-${track.number}`}
          className={`border-t-4 border-[#ed027e] px-5 py-16 sm:px-8 lg:px-14 lg:py-24 ${
            track.dark ? "bg-[#0D0D0D] text-white" : "bg-white text-[#3f3f3f]"
          }`}
        >
          <div className="mx-auto max-w-[1380px]">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="mb-4 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
                  <span>Track {track.number}</span>
                </p>
                <h2
                  className={`font-heading text-[clamp(2.35rem,5vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] ${
                    track.dark ? "text-white" : "text-[#0D0D0D]"
                  }`}
                >
                  <span>{track.title}</span>
                </h2>
              </div>
              <p
                className={`max-w-[34ch] font-heading text-[clamp(1.15rem,2vw,1.75rem)] font-bold uppercase leading-[1.22] tracking-[-0.01em] lg:justify-self-end lg:text-right ${
                  track.dark ? "text-white/80" : "text-[#ed027e]"
                }`}
              >
                <span>{track.tagline}</span>
              </p>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="font-heading text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                  <span>Strategic Outcome</span>
                </p>
                <p
                  className={`mt-2 font-heading text-[clamp(1.25rem,2.2vw,2rem)] font-black uppercase leading-[1.18] tracking-[-0.01em] ${
                    track.dark ? "text-white" : "text-[#0D0D0D]"
                  }`}
                >
                  <span>{track.outcome}</span>
                </p>
              </div>
              <div>
                <h3 className="font-heading text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                  <span>Programme Purpose</span>
                </h3>
                <p
                  className={`mt-3 font-sans text-[0.96rem] leading-[1.7] ${
                    track.dark ? "text-white/70" : "text-[#3f3f3f]"
                  }`}
                >
                  <span>{track.purpose}</span>
                </p>
              </div>
            </div>

            <div
              className={`mt-10 border-t pt-8 ${
                track.dark ? "border-white/15" : "border-[#3f3f3f]/15"
              }`}
            >
              <h3 className="mb-5 font-heading text-[0.625rem] font-black uppercase tracking-[0.2em] text-[#ed027e]">
                <span>Strategic Focus Areas</span>
              </h3>
              <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-5">
                {track.focus.map((focusItem) => (
                  <li
                    key={`${track.number}-${focusItem}`}
                    className={`flex gap-3 font-sans text-[0.875rem] font-semibold leading-[1.35] ${
                      track.dark ? "text-white/80" : "text-[#3f3f3f]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ed027e]"
                    />
                    <span>{focusItem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <button
                type="button"
                aria-expanded={!!trackTimetableOpen[track.number]}
                aria-controls={`track-${track.number}-timetable`}
                onClick={() => toggleTrackTimetable(track.number)}
                className={`flex w-full items-center justify-between border-t-2 border-b-2 px-6 py-4 font-heading text-xs font-black uppercase tracking-[0.18em] shadow-md transition-all ${
                  track.dark
                    ? "border-white/20 bg-white text-[#0D0D0D] hover:bg-gray-100"
                    : "border-[#ed027e] bg-[#ed027e] text-white hover:bg-[#ed027e]/90"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {trackTimetableOpen[track.number]
                      ? `Hide Track ${track.number} Timetable`
                      : `View Full Track ${track.number} Timetable`}
                  </span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    trackTimetableOpen[track.number] ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                id={`track-${track.number}-timetable`}
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: trackTimetableOpen[track.number] ? "4000px" : "0px",
                }}
              >
                {/* Mobile Responsive Track Timetable Cards (< md) */}
                <div className="md:hidden space-y-3 pt-4">
                  {track.rows.map((row, rowIndex) => (
                    <article
                      key={`m-${track.number}-${row.time}-${rowIndex}`}
                      className={`rounded-lg border p-4 sm:p-5 relative overflow-hidden ${
                        track.dark
                          ? "border-white/15 bg-white/[0.04]"
                          : "border-[#3f3f3f]/15 bg-white shadow-sm"
                      }`}
                    >
                      <div
                        className={`flex flex-wrap items-center justify-between gap-2 border-b pb-2.5 ${
                          track.dark ? "border-white/10" : "border-[#3f3f3f]/10"
                        }`}
                      >
                        <span className="inline-flex items-center rounded-full bg-[#ed027e] px-2.5 py-0.5 font-heading text-xs font-black tracking-wider text-white">
                          {row.time}
                        </span>
                        <span
                          className={`font-heading text-[0.6875rem] font-bold uppercase tracking-[0.14em] ${
                            track.dark ? "text-white/70" : "text-[#3f3f3f]/75"
                          }`}
                        >
                          {row.item}
                        </span>
                      </div>
                      <h4
                        className={`mt-3 font-sans text-base font-bold leading-snug ${
                          track.dark ? "text-white" : "text-[#0D0D0D]"
                        }`}
                      >
                        {row.topic}
                      </h4>
                      <div
                        className={`mt-2.5 rounded border p-3 text-xs leading-relaxed ${
                          track.dark
                            ? "border-white/10 bg-white/[0.02] text-white/70"
                            : "border-[#3f3f3f]/10 bg-[#F9F4F7]/60 text-[#3f3f3f]/85"
                        }`}
                      >
                        <span className="mb-1 block font-heading text-[0.625rem] font-black uppercase tracking-[0.16em] text-[#ed027e]">
                          Strategic Focus
                        </span>
                        {row.focus}
                      </div>
                    </article>
                  ))}
                </div>

                {/* Desktop Wide Table (hidden md:block) */}
                <div className="hidden md:block pt-4 overflow-x-auto">
                  <table className="w-full min-w-[980px] table-fixed border-collapse text-left">
                    <colgroup>
                      <col className="w-[12%]" />
                      <col className="w-[20%]" />
                      <col className="w-[26%]" />
                      <col className="w-[42%]" />
                    </colgroup>
                    <thead className={track.dark ? "bg-white/[0.08] text-white" : "bg-[#0D0D0D] text-white"}>
                      <tr className={track.dark ? "border border-white/20" : "border border-[#0D0D0D]/20"}>
                        <th className="px-4 py-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                          <span>Time</span>
                        </th>
                        <th className="px-4 py-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                          <span>Item</span>
                        </th>
                        <th className="border-l-2 border-[#ed027e]/40 px-4 py-3 pl-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                          <span>Topic</span>
                        </th>
                        <th className="px-4 py-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                          <span>Strategic Focus</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {track.rows.map((row, rowIndex) => (
                        <tr
                          key={`${track.number}-${row.time}-${row.topic}`}
                          className={
                            track.dark
                              ? `${rowIndex % 2 === 0 ? "bg-white/[0.04]" : "bg-transparent"} text-white`
                              : `${rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"} text-[#3f3f3f]`
                          }
                        >
                          <td
                            className={`whitespace-nowrap border px-4 py-4 align-top font-heading text-sm font-bold tabular-nums text-[#ed027e] ${
                              track.dark ? "border-white/12" : "border-[#3f3f3f]/15"
                            }`}
                          >
                            <span>{row.time}</span>
                          </td>
                          <td
                            className={`border px-4 py-4 align-top font-sans text-sm font-semibold text-inherit ${
                              track.dark ? "border-white/12" : "border-[#3f3f3f]/15"
                            }`}
                          >
                            <span>{row.item}</span>
                          </td>
                          <td
                            className={`border border-l-2 border-l-[#ed027e]/40 px-4 py-4 pl-3 align-top font-sans text-sm font-bold ${
                              track.dark ? "border-white/12 text-white" : "border-[#3f3f3f]/15 text-[#0D0D0D]"
                            }`}
                          >
                            <span>{row.topic}</span>
                          </td>
                          <td
                            className={`border px-4 py-4 align-top font-sans text-sm leading-[1.5] ${
                              track.dark
                                ? "border-white/12 text-white/70"
                                : "border-[#3f3f3f]/15 text-[#3f3f3f]/80"
                            }`}
                          >
                            <span>{row.focus}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Applied Programme Model Section */}
      <section id="applied-model" className="border-t-4 border-[#ed027e] bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-24 text-[#3f3f3f]">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-12 max-w-[860px]">
            <p className="mb-4 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
              <span>Applied Programme Model</span>
            </p>
            <h2 className="font-heading text-[clamp(2.5rem,5.5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.03em] text-[#0D0D0D]">
              <span>From Expert Insight to Measurable Progression.</span>
            </h2>
          </div>
          <div className="border-t border-[#3f3f3f]/15">
            {appliedModel.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 border-b border-[#3f3f3f]/15 py-7 sm:grid-cols-[7rem_1fr] items-start"
              >
                <span
                  aria-hidden="true"
                  className="font-heading text-[5rem] font-black leading-[0.8] tracking-[-0.08em] text-[#0D0D0D]/10"
                >
                  {step.number}
                </span>
                <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start pt-1">
                  <h3 className="font-heading text-[1.25rem] font-black uppercase leading-[1.2] tracking-[-0.01em] text-[#0D0D0D]">
                    <span>{step.title}</span>
                  </h3>
                  <p className="font-sans text-[0.9375rem] leading-[1.65] text-[#3f3f3f]/80">
                    <span>{step.text}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Progression Model Section */}
      <section id="progression" className="border-t-4 border-[#ed027e] bg-[#0D0D0D] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
                <span>Integrated Progression Model</span>
              </p>
              <h2 className="font-heading text-[clamp(2.5rem,5.5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.03em]">
                <span>From Potential to Opportunity.</span>
              </h2>
            </div>
            <p className="max-w-[37ch] font-sans text-[0.95rem] leading-[1.6] text-white/70 lg:justify-self-end">
              <span>An integrated leadership acceleration pathway across the EmpowaHer Summit.</span>
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5 items-center">
            {progressionFlow.map((stage, stageIndex) => (
              <article key={stage.title} className="flex items-center justify-between sm:justify-start gap-4 md:flex-col md:items-stretch">
                <div
                  className={`flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center rounded-full border text-center font-heading text-xs font-black uppercase leading-[1.15] tracking-[0.08em] shadow-md ${
                    stageIndex === progressionFlow.length - 1
                      ? "border-[#ed027e] bg-[#ed027e] text-white"
                      : "border-white/25 text-white bg-white/[0.02]"
                  }`}
                >
                  <span className="px-2">{stage.title}</span>
                </div>
                {stageIndex < progressionFlow.length - 1 ? (
                  <ArrowRight className="h-5 w-5 shrink-0 text-[#ed027e] rotate-90 sm:rotate-0 md:rotate-0 md:mx-auto" />
                ) : (
                  <span aria-hidden="true" className="hidden md:block md:h-5" />
                )}
              </article>
            ))}
          </div>

          {/* Mobile Progression Cards (< md) */}
          <div className="md:hidden mt-8 space-y-3">
            {progressionFlow.map((stage, stageIndex) => (
              <article
                key={`m-progression-${stage.title}`}
                className="rounded-lg border border-white/15 bg-white/[0.04] p-4 relative"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ed027e] font-heading text-xs font-black text-white">
                    0{stageIndex + 1}
                  </span>
                  <h4 className="font-heading text-sm font-black uppercase tracking-wider text-white">
                    {stage.title}
                  </h4>
                </div>
                <p className="mt-2.5 font-sans text-sm font-semibold leading-relaxed text-white/80 pl-9">
                  {stage.items}
                </p>
              </article>
            ))}
          </div>

          {/* Desktop Progression Comparison Table (hidden md:block) */}
          <div className="hidden md:block mt-14 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left border border-white/20">
              <thead className="bg-[#0D0D0D] text-white">
                <tr className="border-b border-white/20">
                  {progressionFlow.map((column) => (
                    <th
                      key={column.title}
                      className="px-4 py-4 font-heading text-xs font-black uppercase tracking-[0.16em] text-[#ed027e]"
                    >
                      <span>{column.title}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-[#3f3f3f]">
                  {progressionFlow.map((column) => (
                    <td
                      key={column.title}
                      className="border border-[#3f3f3f]/15 px-4 py-5 align-top font-sans text-sm font-semibold leading-[1.55]"
                    >
                      <span>{column.items}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Day Three Banner */}
      <div className="border-l-4 border-[#ed027e] bg-[#ed027e]/[0.10] px-6 sm:px-10 py-2.5 font-heading text-xs font-black uppercase tracking-[0.2em] text-[#ed027e]">
        <span>DAY THREE — 31 OCTOBER 2026 — GRADUATION FINALE</span>
      </div>

      {/* Day Three Section */}
      <section id="day-three" className="border-t-4 border-[#ed027e] bg-[#0D0D0D] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="mb-4 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
              <span>Day Three, 31 October 2026</span>
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,5.5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.03em]">
              <span>Global Leadership, Opportunity and Graduation Finale.</span>
            </h2>
            <p className="mt-8 font-heading text-[clamp(1.3rem,2.5vw,2.2rem)] font-black uppercase leading-[1.2] tracking-[-0.01em] text-[#ed027e]">
              <span>Her Future. Her Leadership. Her World.</span>
            </p>
            <p className="mt-6 inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-heading text-xs font-black uppercase tracking-[0.18em] text-white/80 bg-white/[0.04]">
              <span>09:00 AM to 2:00 PM</span>
            </p>
          </div>

          <div>
            <p className="max-w-[48ch] font-sans text-[1rem] leading-[1.7] text-white/70">
              <span>
                The final day brings together all participants, partners and leadership tracks for a high-level
                graduation experience focused on opportunity, recognition and measurable progression. Delegates engage
                with senior government leaders, ambassadors, CEOs, business-school directors and strategic partners
                before graduating as the EmpowaHer Class of 2026.
              </span>
            </p>
            <div className="mt-10 w-full">
              <h3 className="mb-5 font-heading text-xs font-black uppercase tracking-[0.22em] text-[#ed027e]">
                <span>Programme Highlights</span>
              </h3>
              <ul className="max-w-[44rem] space-y-4">
                {graduationHighlights.map((highlight) => (
                  <li
                    key={highlight.id}
                    className="flex gap-3 font-sans text-[0.9375rem] font-semibold leading-[1.45] text-white/80"
                  >
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#ed027e]" />
                    <span>{highlight.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-2 w-full lg:col-span-2">
            <p className="mb-3 border-l-2 border-[#ed027e] pl-3 font-heading text-[0.6875rem] font-black uppercase tracking-[0.22em] text-[#ed027e]">
              <span>Graduation Finale Timetable</span>
            </p>
            <p className="mb-6 max-w-[48ch] font-sans text-sm font-semibold leading-[1.6] text-white/70">
              <span>31 October 2026, 09:00 AM to 2:00 PM • Her Future. Her Leadership. Her World.</span>
            </p>
            <button
              type="button"
              aria-expanded={graduationOpen}
              aria-controls="graduation-finale-timetable"
              onClick={() => setGraduationOpen((prev) => !prev)}
              className="flex w-full items-center justify-between border-t-2 border-b-2 border-white/20 bg-white px-6 py-4 font-heading text-xs font-black uppercase tracking-[0.18em] text-[#0D0D0D] shadow-md transition-colors hover:bg-gray-100"
            >
              <span className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-[#ed027e]" />
                <span>{graduationOpen ? "Hide Timetable" : "View Full Timetable"}</span>
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  graduationOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              id="graduation-finale-timetable"
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: graduationOpen ? "4000px" : "0px" }}
            >
              {/* Mobile Graduation Timetable Cards (< md) */}
              <div className="md:hidden space-y-3 pt-4">
                {graduationScheduleRows.map((row, rowIndex) => {
                  const isFinale = row.time === "01:25-02:00";
                  return (
                    <article
                      key={`m-grad-${row.time}-${rowIndex}`}
                      className={`rounded-lg border p-4 sm:p-5 relative overflow-hidden transition-all ${
                        isFinale
                          ? "border-[#ed027e] bg-[#ed027e] text-white shadow-lg"
                          : "border-white/15 bg-white/[0.04] text-white"
                      }`}
                    >
                      <div
                        className={`flex flex-wrap items-center justify-between gap-2 border-b pb-2.5 ${
                          isFinale ? "border-white/30" : "border-white/10"
                        }`}
                      >
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-heading text-xs font-black tracking-wider ${
                            isFinale ? "bg-white text-[#ed027e]" : "bg-[#ed027e] text-white"
                          }`}
                        >
                          {row.time}
                        </span>
                        <span
                          className={`font-heading text-[0.6875rem] font-bold uppercase tracking-[0.14em] ${
                            isFinale ? "text-white/90" : "text-white/70"
                          }`}
                        >
                          {row.item}
                        </span>
                      </div>
                      <h4 className="mt-3 font-sans text-base font-bold leading-snug">
                        {row.topic}
                      </h4>
                      <div
                        className={`mt-2.5 rounded border p-3 text-xs leading-relaxed ${
                          isFinale
                            ? "border-white/30 bg-black/15 text-white/95"
                            : "border-white/10 bg-white/[0.02] text-white/70"
                        }`}
                      >
                        <span
                          className={`mb-1 block font-heading text-[0.625rem] font-black uppercase tracking-[0.16em] ${
                            isFinale ? "text-white" : "text-[#ed027e]"
                          }`}
                        >
                          Strategic Focus
                        </span>
                        {row.focus}
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Desktop Wide Table (hidden md:block) */}
              <div className="hidden md:block pt-4 mx-auto w-full overflow-x-auto">
                <table className="mx-auto w-full min-w-[980px] table-fixed border-collapse text-left">
                  <colgroup>
                    <col className="w-[12%]" />
                    <col className="w-[20%]" />
                    <col className="w-[26%]" />
                    <col className="w-[42%]" />
                  </colgroup>
                  <thead className="bg-white/[0.08] text-white">
                    <tr className="border border-white/20">
                      <th className="px-4 py-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                        <span>Time</span>
                      </th>
                      <th className="px-4 py-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                        <span>Item</span>
                      </th>
                      <th className="border-l-2 border-[#ed027e]/40 px-4 py-3 pl-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                        <span>Topic</span>
                      </th>
                      <th className="px-4 py-3 font-heading text-xs font-black uppercase tracking-[0.15em]">
                        <span>Strategic Focus</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {graduationScheduleRows.map((row, rowIndex) => (
                      <tr
                        key={`${row.time}-${row.topic}`}
                        className={
                          row.time === "01:25-02:00"
                            ? "bg-[#ed027e] text-white"
                            : `${rowIndex % 2 === 0 ? "bg-white/[0.04]" : "bg-transparent"} text-white`
                        }
                      >
                        <td
                          className={`whitespace-nowrap border border-white/12 px-4 py-4 align-top font-heading text-sm font-bold tabular-nums ${
                            row.time === "01:25-02:00" ? "text-white" : "text-[#ed027e]"
                          }`}
                        >
                          <span>{row.time}</span>
                        </td>
                        <td className="border border-white/12 px-4 py-4 align-top font-sans text-sm font-semibold text-inherit">
                          <span>{row.item}</span>
                        </td>
                        <td className="border border-white/12 border-l-2 border-l-[#ed027e]/40 px-4 py-4 pl-3 align-top font-sans text-sm font-bold text-inherit">
                          <span>{row.topic}</span>
                        </td>
                        <td
                          className={`border border-white/12 px-4 py-4 align-top font-sans text-sm leading-[1.5] ${
                            row.time === "01:25-02:00" ? "text-white font-medium" : "text-white/70"
                          }`}
                        >
                          <span>{row.focus}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Footer stripped, bottom persistent bar kept) */}
      <section id="apply" className="border-t-4 border-[#ed027e] bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-24 text-[#3f3f3f]">
        <div className="mx-auto max-w-[1380px]">
          <h2
            className="max-w-[12ch] font-heading text-[clamp(3.2rem,10.5vw,9.5rem)] font-extrabold uppercase tracking-[-0.06em] text-[#0D0D0D]/[0.08] select-none"
            style={{ fontFamily: "var(--font-heading)", lineHeight: 0.74 }}
          >
            <span style={{ fontFamily: "var(--font-heading)", lineHeight: 0.74 }}>
              Invest in her leadership. Build Africa&apos;s future.
            </span>
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="max-w-[42ch] font-heading text-[clamp(1.15rem,2.2vw,1.75rem)] font-bold uppercase leading-[1.25] tracking-[-0.01em] text-[#0D0D0D]">
                <span>An Executive Leadership Experience for Africa&apos;s Next Generation of Women Leaders (18-35).</span>
              </p>
              <p className="mt-5 flex items-center gap-3 font-heading text-sm font-black uppercase tracking-[0.14em] text-[#ed027e]">
                <Calendar className="h-5 w-5" />
                <span>29-31 October 2026 • EmpowaWorx House, Randburg</span>
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/nomination-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed027e] px-8 py-3.5 font-heading text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg transition-all hover:scale-105 hover:bg-[#ed027e]/90"
              >
                <span>Nominate a Leader</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="/EmpowaHER-Programme-2026.pdf"
                download="EmpowaHER-Programme-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0D0D0D]/30 px-8 py-3.5 font-heading text-xs font-black uppercase tracking-[0.14em] text-[#0D0D0D] transition-colors hover:border-[#ed027e] hover:text-[#ed027e]"
              >
                <span>Download Programme</span>
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Back to Top Button */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`fixed right-4 sm:right-6 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#ed027e] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#ed027e]/90 active:scale-95 ${
          showFloatingApply ? "bottom-24 sm:bottom-20" : "bottom-6"
        } ${
          showBackToTop
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
      </button>

      {/* Sticky Bottom Persistent Menu */}
      <aside
        aria-label="Persistent application call to action"
        className={`fixed bottom-0 left-0 right-0 z-40 border-t-2 border-[#ed027e] bg-[#0D0D0D]/95 backdrop-blur-md px-4 py-3 shadow-2xl transition-all duration-300 sm:px-8 sm:py-3.5 ${
          showFloatingApply
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex max-w-[1380px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="EmpowaHer home"
              className="flex shrink-0 items-center transition-opacity hover:opacity-90"
            >
              <Image
                src="/empowaher-logo.png"
                alt="EmpowaHer Logo"
                width={140}
                height={38}
                className="h-6 sm:h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <div>
              <p className="font-heading text-xs sm:text-sm font-black uppercase tracking-[0.08em] text-white">
                <span>EmpowaHer™ Summit 2026</span>
              </p>
              <p className="font-sans text-[0.6875rem] text-white/70">
                <span>29–31 October 2026 • EmpowaWorx House, Ferndale, Randburg</span>
              </p>
            </div>
          </div>
          <div className="flex w-full items-center gap-2 sm:w-auto sm:gap-3">
            <a
              href="/EmpowaHER-Programme-2026.pdf"
              download="EmpowaHER-Programme-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial text-center rounded-full border border-white/30 px-3 sm:px-5 py-2 font-heading text-[0.6875rem] sm:text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:border-[#ed027e] hover:text-[#ed027e]"
            >
              <span>Download PDF</span>
            </a>
            <Link
              href="/nomination-form"
              className="flex-1 sm:flex-initial text-center rounded-full bg-[#ed027e] px-3 sm:px-6 py-2 font-heading text-[0.6875rem] sm:text-xs font-black uppercase tracking-[0.1em] text-white shadow-md transition-all hover:scale-105 hover:bg-[#ed027e]/90 active:scale-95"
            >
              <span>Nominate / Apply</span>
            </Link>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default EmpowaHerProgramme;
