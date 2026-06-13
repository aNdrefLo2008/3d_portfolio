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
  fraunhofer,
  ecommerce,
  imgRestaurant,
  imgElektriker,
  imgPhysotherapy,
  school,
  novalutions
} from "../assets";

export const navLinks = [
  { id: "about",   title: "About"   },
  { id: "experience",    title: "Experience"},
  { id: "projects",    title: "Projects"    },
  { id: "contact", title: "Contact" },
];

/* ── Services / Skill Cards ─────────────────────────────── */
import { MdLanguage, MdCode, MdPsychology, MdBrush } from 'react-icons/md';

const services = [
  { id: 'web',   Icon: MdLanguage   },
  { id: 'stack', Icon: MdCode       },
  { id: 'ml',    Icon: MdPsychology },
  { id: 'ux',    Icon: MdBrush      },
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
  {
    title:        "Teilzeitjob – Softwareentwickler",
    company_name: "Novalutions UG",
    icon:         novalutions,
    iconBg:       "#ffffff",
    date:         "2026 - heute",
    points: [
      "Low-Code-Entwicklung mit Plattformen wie n8n und Microsoft Power Automate zur Automatisierung von Geschäftsprozessen.",
      "Entwicklung von Webanwendungen mit Wordpress für Kundenprojekte, einschließlich Frontend-Design und Backend-Integration.",
      "Unterstützung bei komplexen IT-Projekten durch die Bereitstellung von Softwarelösungen, die auf die Bedürfnisse der Kunden zugeschnitten sind.",
    ],
  },
];
/* ── Projects ───────────────────────────────────────────── */
const projects = [
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
      name: "Restaurant",
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
      image: imgRestaurant,
      source_code_link: "https://v0-restaurant-website-design-sable-two.vercel.app/",
  },

  {
      name: "Electrician",
      tags: [
        {
          name: "v0",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: imgElektriker,
      source_code_link: "https://v0-muller-elektrotechnik-website-4l17fdeio.vercel.app/",
  },

  {
      name: "Physiotherapy",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "v0",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: imgPhysotherapy,
      source_code_link: "https://v0-physiotherapy-website-design-nine.vercel.app/",
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
    }
];

const testimonials = [
  {
    testimonial: "Andrei hat uns mit seiner schnellen Auffassungsgabe und seinem Engagement beeindruckt. Er hat eigenständig an der Frontend-Entwicklung von KATI gearbeitet und dabei stets qualitativ hochwertige Ergebnisse geliefert.",
    name: "Dr. Marcus John",
    designation: "Researcher",
    company: "Fraunhofer INT",
    image: null,
    initials: "MJ",
    color: "#1d1836",
  },
  {
    testimonial: "Andrei hat eine ausgezeichnete Leistung erbracht. Er hat unser Ferienwohnungs-Website mit großem Augenmerk auf Details und Profissionalität entwickelt. Das Ergebnis hat unsere Erwartungen übertroffen — sauberes Design, schnelles Laden und einfach zu verwalten.",
    name: "Oliver Mehrle",
    designation: "Client",
    company: "Ferienwohnungen Gera",
    image: null,
    initials: "OM",
    color: "#151030",
  },
];

export { services, technologies, experiences, testimonials, projects };