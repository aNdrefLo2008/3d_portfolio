import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  python,
  blender,
  ae,
  nextjs,
  // Neue Tech-Icons (siehe Asset-Anleitung unten)
  golang,
  docker,
  postgresql,
  tensorflow,
  d3js,
  // Projekt-Bilder (siehe Asset-Anleitung unten)
  imgMarketCap,
  imgJobDashboard,
  imgFerienwohnungen,
  imgAfgMedia,
  imgPortfolio,
  // Experience Icons
  fraunhofer,
  ecommerce,
  restaurant,
  school,
} from "../assets";

export const navLinks = [
  { id: "about",   title: "About"   },
  { id: "experience",    title: "Experience"},
  { id: "projects",    title: "Projects"    },
  { id: "contact", title: "Contact" },
];

/* ── Services / Skill Cards ─────────────────────────────── */
const services = [
  { title: "Full-Stack Developer",        icon: web     },
  { title: "Machine Learning Engineer",   icon: creator },
  { title: "Cloud & DevOps",              icon: backend },
  { title: "Frontend & UX Design",        icon: mobile  },
];

/* ── Tech Stack ─────────────────────────────────────────── */
const technologies = [
  { name: "JavaScript",  icon: javascript },
  { name: "TypeScript",  icon: typescript  },
  { name: "React JS",    icon: reactjs     },
  { name: "Next.js",     icon: nextjs      },
  { name: "Python",      icon: python      },
  { name: "Golang",      icon: golang      },
  { name: "TensorFlow",  icon: tensorflow  },
  { name: "Node JS",     icon: nodejs      },
  { name: "PostgreSQL",  icon: postgresql  },
  { name: "Docker",      icon: docker      },
  { name: "D3.js",       icon: d3js        },
  { name: "Tailwind CSS",icon: tailwind    },
  { name: "Three JS",    icon: threejs     },
  { name: "After Effects",icon: ae         },
  { name: "Git",         icon: git         },
  { name: "Figma",       icon: figma       },
];

/* ── Work Experience ────────────────────────────────────── */
const experiences = [
  {
    title:        "Praktikum – Data Driven Foresight",
    company_name: "Fraunhofer INT",
    icon:         fraunhofer,
    iconBg:       "#ffffff",
    date:         "2025",
    points: [
      "Frontend-Entwicklung (JavaScript, D3.js) am KI-Assistenzsystem KATI (Knowledge Analytics for Technology & Innovation).",
      "Entwicklung interaktiver Visualisierungen und Analyse-Tools für Daten aus wissenschaftlichen Publikationen und Patenten.",
      "Unterstützung bei Technologiefrühaufklärung und Innovationsprozessen im Bereich Data Driven Foresight.",
    ],
  },
  {
    title:        "Abitur – Gymnasiale Oberstufe",
    company_name: "Gesamtschule Eifel, Nettersheim",
    icon:         school,
    iconBg:       "#ffffff",
    date:         "2024 – 2027",
    points: [
      "Leistungskurse: Mathematik & Biologie – vertieftes Arbeiten auf erhöhtem Anforderungsniveau.",
      "Aktueller Notenschnitt: 1,0 – Englisch (15 Punkte), Geschichte (15 Punkte), Philosophie (15 Punkte).",
      "Intensives Selbststudium in Informatik: Webentwicklung, Backend-Architekturen und Machine Learning.",
    ],
  },
];
/* ── Projects ───────────────────────────────────────────── */
const projects = [
  {
    name: "MarketCapModeling",
    tags: [
      { name: "python",      color: "blue-text-gradient"  },
      { name: "tensorflow",  color: "green-text-gradient" },
      { name: "react",       color: "pink-text-gradient"  },
    ],
    image: imgMarketCap,
    source_code_link: "https://andreiflorea.vercel.app/dataanalysisproject",
  },
  {
    name: "JobDashboard",
    tags: [
      { name: "golang",      color: "blue-text-gradient"  },
      { name: "postgresql",  color: "green-text-gradient" },
      { name: "docker",      color: "pink-text-gradient"  },
    ],
    image: imgJobDashboard,
    source_code_link: "https://github.com/aNdrefLo2008",
  },
  {
    name: "FerienwohnungenGera",
    tags: [
      { name: "nextjs",      color: "blue-text-gradient"  },
      { name: "tailwind",    color: "green-text-gradient" },
      { name: "sanity-cms",  color: "pink-text-gradient"  },
    ],
    image: imgFerienwohnungen,
    source_code_link: "https://github.com/aNdrefLo2008",
  },
  {
    name: "AfgMedia",
    tags: [
      { name: "nextjs",      color: "blue-text-gradient"  },
      { name: "tailwind",    color: "green-text-gradient" },
      { name: "motion",      color: "pink-text-gradient"  },
    ],
    image: imgAfgMedia,
    source_code_link: "https://afgmedia.eu",
  },
  {
      name: "E-commerce",
      description:
        "Web application where users can buy phones, tablets or laptops, using stripe to ensure safe payments, and graphql for the connection with the server.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "green-text-gradient",
        },
        {
          name: "stripeapi",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/aNdrefLo2008/e-commerce",
    },
    {
      name: "Restaurant",
      description:
        "Web application where users can get information about a restaurant, menu, opening hours, what's so special about the place and how it looks.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "motion",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant,
      source_code_link: "https://github.com/aNdrefLo2008/restaurant-example",
    },
];

const testimonials = [
  {
    testimonial:
      "Andrei demonstrated a strong technical understanding and impressive commitment during his internship. His contributions to the KATI frontend were well-structured and immediately usable in our research workflows.",
    name: "Dr. Marcus John",
    designation: "Researcher",
    company: "Fraunhofer INT",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Andrei delivered our vacation rental website with great attention to detail and professionalism. The result exceeded our expectations — clean design, fast loading, and easy to manage.",
    name: "Oliver Mehrle",
    designation: "Client",
    company: "Ferienwohnungen Gera",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

export { services, technologies, experiences, testimonials, projects };