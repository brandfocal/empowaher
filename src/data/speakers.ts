export interface Speaker {
  id: string;
  name: string;
  title: string;
  sessionFormat: string;
  image: string;
  posterImage?: string;
  trackFocus: string;
  bio: string;
  highlights: string[];
}

export const confirmedSpeakers: Speaker[] = [
  {
    id: "amanda-dambuza",
    name: "Amanda Dambuza",
    title: "Founder & Chief Executive Officer | Uyandiswa",
    sessionFormat: "Inspirational Leadership Talk",
    image: "/speakers/Amanda-Dambuza.png",
    posterImage: "/eh singles/amanda.jpg",
    trackFocus: "Entrepreneurship, Innovation & Funding",
    bio: "Amanda Dambuza is the Founder & Chief Executive Officer of Uyandiswa. She is an award-winning South African businesswoman, international keynote speaker, author, and non-executive board director who has spearheaded enterprise technology and project management transformation across Africa.",
    highlights: [
      "Founder & Chief Executive Officer | Uyandiswa",
      "Veuve Clicquot Bold Woman Award Winner",
      "Author of 'Baked in Pain' & 'Girls Don't Do That'",
    ],
  },
  {
    id: "dr-sibongile-vilakazi",
    name: "Dr Sibongile Vilakazi (MA, PHD, CCXP)",
    title: "Award-Winning Future Leader; Organisational Developer; Best-Selling Author; Lecturer; Independent Non-Executive Director, Kalagadi Manganese Mining Co.",
    sessionFormat: "Executive Masterclass",
    image: "/speakers/Dr-Sibongile-Vilakazi.png",
    posterImage: "/eh singles/dr sibongile.jpg",
    trackFocus: "Leadership, Governance & Board Readiness",
    bio: "Dr Sibongile Vilakazi (MA, PHD, CCXP) is an award-winning future leader, organisational developer, best-selling author, lecturer, and Independent Non-Executive Director at Kalagadi Manganese Mining Co. A seasoned corporate executive and President of the Black Management Forum (BMF), she drives socioeconomic transformation and executive boardroom readiness across Africa.",
    highlights: [
      "Independent Non-Executive Director, Kalagadi Manganese Mining Co.",
      "Award-Winning Future Leader & Organisational Developer",
      "Best-Selling Author & University Lecturer",
    ],
  },
  {
    id: "itumeleng-nkadimeng",
    name: "Itumeleng Nkadimeng",
    title: "Partner and First Black Female Head of Corporate Tax: KPMG South Africa",
    sessionFormat: "High-Impact Leadership Dialogue",
    image: "/speakers/Itumeleng-Nkadimeng.png",
    posterImage: "/eh singles/itumeleng.jpg",
    trackFocus: "Personal Finance & Wealth Creation",
    bio: "Itumeleng Nkadimeng is Partner and the First Black Female Head of Corporate Tax at KPMG South Africa. With extensive expertise in cross-border fiscal policy, capital structuring, and corporate governance, she actively champions economic transformation and financial acumen for women executives.",
    highlights: [
      "Partner & First Black Female Head of Corporate Tax: KPMG South Africa",
      "Strategic Advisor on Corporate Tax & Fiscal Policy",
      "Pioneer for Female Economic Inclusion in Professional Services",
    ],
  },
  {
    id: "khanyi-mlambo",
    name: "Khanyi Mlambo",
    title: "Managing Director: Lighthouse Leadership Advisory",
    sessionFormat: "Executive Fireside Chat",
    image: "/speakers/Khanyi-Mlambo.png",
    posterImage: "/eh singles/khanyi.jpg",
    trackFocus: "Health, Wellness & Sustainable Performance",
    bio: "Khanyi Mlambo is Managing Director of Lighthouse Leadership Advisory. An accomplished corporate executive, non-executive board director, and sustainability strategist, she is recognized for her leadership in industrial governance, sustainable performance, and preparing emerging women executives for modern boardrooms.",
    highlights: [
      "Managing Director: Lighthouse Leadership Advisory",
      "EmpowaWomen Sustainability Champion Award Recipient",
      "Seasoned Corporate Board Director across South African Industry",
    ],
  },
  {
    id: "luthando-mzilikazi",
    name: "Luthando Mzilikazi",
    title: "Regional Head of Inland Sales: Nedgroup Investments",
    sessionFormat: "High-Impact Leadership Dialogue",
    image: "/speakers/Luthando-Mzilikazi.png",
    posterImage: "/eh singles/luthando.jpg",
    trackFocus: "Personal Leadership & Career Transformation",
    bio: "Luthando Mzilikazi is the Regional Head of Inland Sales at Nedgroup Investments. A dynamic talent strategist, executive coach, and speaker, she equips emerging leaders with career resilience, investment acumen, and fearless boardroom presence.",
    highlights: [
      "Regional Head of Inland Sales: Nedgroup Investments",
      "Executive Coach & Leadership Strategist",
      "Champion of Career Transformation & Female Wealth Building",
    ],
  },
  {
    id: "simphiwe-masiza",
    name: "Simphiwe Masiza",
    title: "Founder & Group Chief Executive Officer: EmpowaWorx",
    sessionFormat: "Official Welcome Address",
    image: "/speakers/Simphiwe-Masiza.png",
    posterImage: "/eh singles/masiza.jpg",
    trackFocus: "Leadership, Governance & Board Readiness",
    bio: "Simphiwe Masiza is the Founder & Group Chief Executive Officer of EmpowaWorx and Executive Producer of EmpowaWomen™ and EmpowaHer™. He is the platform architect behind national initiatives that convene cabinet ministers, multinational CEOs, and Africa’s next generation of women leaders to drive measurable economic participation.",
    highlights: [
      "Founder & Group Chief Executive Officer: EmpowaWorx",
      "Executive Producer: EmpowaWomen™ & EmpowaHer™",
      "Convener of 10+ Flagship National Leadership Summits",
    ],
  },
  {
    id: "nozipho-tshabalala",
    name: "Nozipho Tshabalala",
    title: "Chief Executive Officer: Conversation Strategists",
    sessionFormat: "Programme Director",
    image: "/speakers/Nozipho-Tshabalala.png",
    posterImage: "/eh singles/mozipho.jpg",
    trackFocus: "Digital Leadership, AI & Career Growth",
    bio: "Nozipho Tshabalala is Chief Executive Officer of Conversation Strategists, an internationally acclaimed moderator, and former senior CNBC Africa anchor. She regularly directs high-level global plenaries for the United Nations, World Bank, and African Development Bank.",
    highlights: [
      "Chief Executive Officer: Conversation Strategists",
      "Global Moderator for UN, World Bank & AfDB",
      "Summit Programme Director & Former CNBC Africa Anchor",
    ],
  },
  {
    id: "nhlanhla-mjoli-mncube",
    name: "Nhlanhla Mjoli-Mncube",
    title: "Lead Independent Director, ABSA | CEO, Mjoli Development Co",
    sessionFormat: "Executive Fireside Chat",
    image: "/speakers/Nhlanhla-Mjoli-Mncube.png",
    posterImage: "/eh singles/nhlanhla.jpg",
    trackFocus: "Citizenship & Social Impact",
    bio: "Nhlanhla Mjoli-Mncube is Lead Independent Director at ABSA and CEO of Mjoli Development Co. A pioneering South African business leader and housing finance executive, she served as Deputy CEO of NURCHA and has chaired and served on numerous corporate and infrastructure boards.",
    highlights: [
      "Lead Independent Director: ABSA",
      "Chief Executive Officer: Mjoli Development Co",
      "Pioneer in Women's Infrastructure & Development Finance",
    ],
  },
  {
    id: "samke-mhlongo",
    name: "Samke Mhlongo",
    title: "Founder & Principal Strategist, The Next Chapter Global",
    sessionFormat: "Personal Mastery Masterclass",
    image: "/speakers/Samke-Mhlongo.png",
    posterImage: "/eh singles/samke.jpg",
    trackFocus: "Personal Finance & Wealth Creation",
    bio: "Samke Mhlongo is Founder & Principal Strategist at The Next Chapter Global, a bestselling financial author, and Chief Financial Wellness Officer. She is widely recognized across broadcast media and corporate advisory for her practical methodologies in personal wealth creation, financial self-determination, and personal mastery.",
    highlights: [
      "Founder & Principal Strategist: The Next Chapter Global",
      "Bestselling Financial Author & Keynote Speaker",
      "Chief Financial Wellness Specialist & Media Commentator",
    ],
  },
  {
    id: "sindi-mabaso-koyana",
    name: "Sindi Mabaso-Koyana",
    title: "Chairperson, MTN South Africa | Independent Non-Executive Director, MTN Group | Managing Partner, AIH Capital Private Equity Fund",
    sessionFormat: "Principal Business Keynote Address",
    image: "/speakers/Sindi-Mabaso-Koyana.png",
    posterImage: "/eh singles/sindi.jpg",
    trackFocus: "Leadership, Governance & Board Readiness",
    bio: "Sindi Mabaso-Koyana is Chairperson of MTN South Africa, Independent Non-Executive Director of MTN Group, and Managing Partner at AIH Capital Private Equity Fund. A Chartered Accountant (SA) and titan of African corporate governance, she has served on major boards including Transnet, Toyota South Africa, and AWCA.",
    highlights: [
      "Chairperson: MTN South Africa",
      "Independent Non-Executive Director: MTN Group",
      "Managing Partner: AIH Capital Private Equity Fund",
    ],
  },
  {
    id: "yanga-mputa",
    name: "Yanga Mputa",
    title: "Tax Ombud: Office of the Tax Ombud (OTO), South Africa",
    sessionFormat: "Expert Dialogue",
    image: "/speakers/Yanga-Mputa.png",
    posterImage: "/eh singles/yanga.jpg",
    trackFocus: "Rights, Relationships & Executive Parenting",
    bio: "Yanga Mputa is the Tax Ombud at the Office of the Tax Ombud (OTO), South Africa. A senior legal and fiscal governance authority, she was formerly Chief Director at National Treasury and is a leading voice on public sector integrity, taxpayer rights, and ethical governance.",
    highlights: [
      "Tax Ombud: Office of the Tax Ombud (OTO), South Africa",
      "Former Chief Director: International Tax, National Treasury",
      "Senior Authority on Public Governance & Legal Compliance",
    ],
  },
  {
    id: "zizipho-mqwala-nyanga",
    name: "Zizipho Mqwala Nyanga",
    title: "South African Chartered Accountant (CA(SA)), Banking Executive and Social Entrepreneur",
    sessionFormat: "High-Impact Leadership Dialogue",
    image: "/speakers/Zizipho-Nyanga.png",
    posterImage: "/eh singles/zizipho.jpg",
    trackFocus: "Entrepreneurship, Innovation & Funding",
    bio: "Zizipho Mqwala Nyanga is a South African Chartered Accountant (CA(SA)), Banking Executive, and Social Entrepreneur. Formerly CEO of the Masisizane Fund (Old Mutual), she is a premier authority on SME development finance, capital mobilization, and commercial scaling for female-led enterprises.",
    highlights: [
      "South African Chartered Accountant (CA(SA))",
      "Banking Executive & Enterprise Development Specialist",
      "Former Chief Executive Officer: Masisizane Fund",
    ],
  },
];

export interface AdditionalSpeaker {
  id: string;
  name: string;
  designation: string;
  image: string;
}

export const additionalSpeakers: AdditionalSpeaker[] = [
  {
    id: "iman-rappetti",
    name: "Iman Rappetti",
    designation: "Broadcaster, Author and Facilitator",
    image: "/speakers/Iman-Rappetti.png",
  },
  {
    id: "billy-selekane",
    name: "Billy Selekane",
    designation: "Leadership Advisor, Culture Transformation Specialist & International Keynote Speaker | Billy Selekane International",
    image: "/speakers/Billy-Selekane.png",
  },
  {
    id: "auguste-gusti-coetzer",
    name: "Auguste Gusti Coetzer",
    designation: "Founder & Chief Executive Officer | People Power Placements SA (Pty) Ltd",
    image: "/speakers/Auguste-Gusti-Coetzer.png",
  },
  {
    id: "shameela-soobramoney",
    name: "Ms Shameela Soobramoney",
    designation: "CEO | National Business Initiative",
    image: "/speakers/shameela.png",
  },
  {
    id: "tseliso-mohlomi",
    name: "Tseliso Mohlomi",
    designation: "Senior Director | Institute for the Future of Work, Tshwane University of Technology",
    image: "/speakers/Tseliso-Mohlomi.png",
  },
  {
    id: "tinyiko-mothemela",
    name: "Tinyiko Mothemela",
    designation: "Principal | Ascension",
    image: "/speakers/Tinyiko-Mothemela.png",
  },
  {
    id: "zukile-dube",
    name: "Mr Zukile Dube",
    designation: "Executive Director & Co-Head: Corporate Finance | Vunani Capital",
    image: "/speakers/Zukile-Dube.png",
  },
  {
    id: "nkgabiseng-motau",
    name: "Nkgabiseng Motau",
    designation: "Co-founder & Chief Creative Officer | Think Creative Africa",
    image: "/speakers/nkabiseng-muatu.png",
  },
  {
    id: "tshego-kekana",
    name: "Tshego Kekana",
    designation: "Founder; African Communications Specialist | Alfa Destiny Group",
    image: "/speakers/tshego-kekana.png",
  },
  {
    id: "nompendulo-mkhatshwa",
    name: "Nompendulo Mkhatshwa",
    designation: "Public Leadership; Governance; Youth & Gender Justice",
    image: "/speakers/Nompendulo-Mkhatshwa.png",
  },
  {
    id: "moagisi-letlhaku",
    name: "Ms Moagisi Letlhaku",
    designation: "General Manager: Civic & Democracy Education, Research & Knowledge Management (CDERKM) | Electoral Commission of South Africa",
    image: "/speakers/Mohasi-Letlako.png",
  },
  {
    id: "ayanda-allie",
    name: "Ms Ayanda Allie",
    designation: "Former Gauteng Provincial Legislature",
    image: "/speakers/Ayanda.png",
  },
  {
    id: "cynthia-pongweni",
    name: "Cynthia Pongweni",
    designation: "Chief Financial Officer | Mineworkers Investment Company (MIC)",
    image: "/speakers/Cynthia-Pongweni.png",
  },
  {
    id: "dr-mukondeleli-kanakana-katumba",
    name: "Dr Mukondeleli Kanakana-Katumba",
    designation: "Deputy Vice-Chancellor: Teaching, Learning & Student Affairs | Vaal University of Technology (VUT)",
    image: "/speakers/Dr-Kanakana-Katumba.png",
  },
  {
    id: "karabo-motaung",
    name: "Karabo Motaung",
    designation: "Principal Analyst: Advocacy Division | Competition Commission South Africa",
    image: "/speakers/Karabo-Motaung.png",
  },
  {
    id: "nomvuyiso-batyi",
    name: "Nomvuyiso Batyi",
    designation: "Chief Executive Officer | Association of Comms and Technology (ACT)",
    image: "/speakers/Nomvuyiso-Batyi.png",
  },
  {
    id: "nosipho-damasane",
    name: "Nosipho Siwisa-Damasane",
    designation: "Chairperson of the Board | Richards Bay Coal Terminal (RBCT)",
    image: "/speakers/Nosipho-Damasane.png",
  },
  {
    id: "peter-tshisevhe",
    name: "Peter Tshisevhe",
    designation: "Chairman & Co-Founder | TGR Attorneys",
    image: "/speakers/Peter-Tshisehe.png",
  },
  {
    id: "relebohile-lefojane",
    name: "Relebohile Lefojane",
    designation: "Biomedical Researcher & Human Rights Activist | Central University of Technology (CUT)",
    image: "/speakers/Relebohile-Lefojane.png",
  },
  {
    id: "tryphosa-ramano",
    name: "Tryphosa Ramano",
    designation: "Chartered Accountant (CA(SA)) & Board Member | South African Reserve Bank (SARB)",
    image: "/speakers/Tryposa-Romano.png",
  },
  {
    id: "yonela-tukwayo",
    name: "Yonela Tukwayo",
    designation: "Executive Director: Marketing & Communications | Vaal University of Technology (VUT)",
    image: "/speakers/Yonela-Tukwayo.png",
  },
  {
    id: "zandile-mkwanazi",
    name: "Zandile Mkwanazi",
    designation: "Founder & Chief Executive Officer | GirlCode",
    image: "/speakers/Zandile-Mkwanazi.png",
  },
  {
    id: "fathima-gany",
    name: "Fathima Gany",
    designation: "Chartered Accountant (CA(SA)) & Deputy Board Chairperson | South African Airways (SAA)",
    image: "/speakers/Fathima-Gany.png",
  },
  {
    id: "mametja-moshe",
    name: "Mametja Moshe",
    designation: "Founder & Chief Executive Officer | Moshe Capital",
    image: "/speakers/Mametja-Joanna.png",
  },
  {
    id: "dr-mpume-zenda",
    name: "Dr Mpume Zenda",
    designation: "Specialist Obstetrician, Gynaecologist & Sexologist | Founder, Ndiza Health",
    image: "/speakers/Mpume-Zenda.png",
  },
  {
    id: "nyanisa-majavu",
    name: "Nyanisa Majavu",
    designation: "Corporate Governance Specialist & Founder | Ukoyika",
    image: "/speakers/Nyanisa-Majavu.png",
  },
  {
    id: "olisha-pillay",
    name: "Olisha Pillay",
    designation: "Wealth Manager | PPS Wealth Advisory",
    image: "/speakers/Olisha-Pillay.png",
  },
  {
    id: "gogo-dineo-ndlanzi",
    name: "Gogo Dineo Ndlanzi",
    designation: "African Spiritual Teacher, Cultural Consultant & Healer | Founder, Ndlanzi Institute",
    image: "/speakers/Gogo-Dineo-Ndlanzi.png",
  },
  {
    id: "lebogang-koitsioe",
    name: "Lebogang Koitsioe",
    designation: "Senior HR Business Partner | Danone Southern Africa",
    image: "/speakers/Lebogang-Koitsioe.png",
  },
  {
    id: "lerato-sithole",
    name: "Lerato Sithole",
    designation: "Partner & Operate Africa Leader | Deloitte Africa",
    image: "/speakers/Lerato-Sithole.png",
  },
  {
    id: "lulu-msimango",
    name: "Lulu Msimango",
    designation: "Financial Advisor | Standard Bank Group",
    image: "/speakers/Lulu-Msimango.png",
  },
  {
    id: "mona-clare-moyo",
    name: "Mona-Clare Moyo",
    designation: "Human Resources & Future of Work Specialist | Phakisa Holdings",
    image: "/speakers/Mona-Clare-.png",
  },
];
