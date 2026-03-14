import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {

      navbar: {
        about:        "About",
        experience:   "Experience",
        projects:     "Projects",
        contact:      "Contact",
        ae:           "After Effects",
        dataanalysis: "Data Analysis",
      },

      hero: {
        greeting:     "Hi, I'm",
        description:  "I build full-stack applications, train machine learning models, and design modern user experiences.",
        startWorking: "Start working with me",
        getInTouch:   "Get in touch",
        roles: [
          "Full-Stack Developer",
          "ML Engineer",
          "Backend Architect",
          "Frontend Designer",
        ],
        stats: {
          gpa:            "GPA",
          projects:       "Projects",
          languages:      "Languages",
          certifications: "Certifications",
        },
      },

      about: {
        introduction: "Introduction",
        overview:     "Overview",
        description:  "I'm an 18-year-old software developer with a strong focus on modern web engineering and data-driven systems. Alongside school — where I currently maintain a 1.0 GPA — I build complex full-stack applications, machine learning models, and cloud-ready backends. I gained hands-on professional experience at the Fraunhofer Institute (INT) developing interactive data visualizations in JavaScript and D3.js. Fluent in German, English, Italian, and Romanian, I thrive in collaborative environments and love turning complex problems into clean, performant solutions.",
      },

      experience: {
        title:    "What I've Done",
        subtitle: "Work Experience",
        fraunhofer: {
          role: "Internship – Data Driven Foresight",
          points: [
            "Frontend development (JavaScript, D3.js) on the AI-assisted KATI system (Knowledge Analytics for Technology & Innovation).",
            "Built interactive visualizations and analysis tools for data from scientific publications and patents.",
            "Supported technology foresight and innovation processes within the Data Driven Foresight research unit.",
          ],
        },
      },

      works: {
        myWork:     "My Work",
        projects:   "Projects",
        description:
          "The following projects demonstrate my skills through real-world examples. Each project reflects my ability to architect scalable systems, work across the full stack, and deliver polished results — from ML models to production-ready web platforms.",
      },

      projects: {
        /* ── New projects ── */
        MarketCapModeling: {
          name: "Market Cap Modeling",
          description:
            "Machine learning model analyzing S&P 500 market capitalization drivers using Python and TensorFlow. Achieved R² = 0.81 and presented insights via an interactive React dashboard.",
        },
        JobDashboard: {
          name: "Full-Stack Job Dashboard",
          description:
            "Scalable job platform with a Go backend, PostgreSQL database, and Clean Architecture principles. Features JWT auth, real-time Prometheus monitoring, Nginx reverse proxy, and Docker deployment.",
        },
        FerienwohnungenGera: {
          name: "Ferienwohnungen Gera",
          description:
            "Client website for holiday apartments built with Next.js and Sanity CMS. Delivers dynamic content management, fast page loads, and a clean booking-focused UI.",
        },
        AfgMedia: {
          name: "AFG Media",
          description:
            "High-performance agency landing page for web design services. Designed and developed with Next.js and Tailwind CSS, focusing on conversion and visual impact.",
        },
        Portfolio3D: {
          name: "Interactive 3D Portfolio",
          description:
            "Personal developer portfolio featuring 3D animations via Three.js, smooth Framer Motion transitions, i18n support (EN/DE), and an integrated contact form.",
        },

        /* ── Legacy projects (kept) ── */
        "E-commerce": {
          name: "E-commerce",
          description:
            "Web application where users can buy phones, tablets, or laptops, using Stripe to ensure safe payments and GraphQL for the connection with the server.",
        },
        Restaurant: {
          name: "Restaurant",
          description:
            "Web application where users can get information about a restaurant, menu, opening hours, what's special about the place, and how it looks.",
        },
        "Beatiful Design": {
          name: "Beautiful Design",
          description:
            "Landing page designed in Figma and created in React to showcase the potential of Tailwind CSS.",
        },
      },

      contact: {
        getInTouch:         "Get in Touch",
        contact:            "Contact",
        yourName:           "Your Name",
        yourEmail:          "Your Email",
        yourMessage:        "Your Message",
        namePlaceholder:    "What's your name?",
        emailPlaceholder:   "What's your email?",
        messagePlaceholder: "What would you like to discuss?",
        send:               "Send Message",
        sending:            "Sending…",
        successMessage:     "Thank you! I'll get back to you as soon as possible.",
        errorMessage:       "Something went wrong. Please try again.",
      },

      contactVisual: {
        role:         "Full-Stack Entwickler & ML Engineer",
        status:       { label: "Status",    value: "Verfügbar"              },
        location:     { label: "Standort",  value: "Deutschland · Remote"   },
        response:     { label: "Antwort",   value: "Innerhalb von 24 Std."  },
        languages:    { label: "Sprachen",  value: "DE · EN · IT · RO"      },
        availability: "Offen für Praktika & Teilzeitstellen",
      },

      marketcap: {
        title: "Market Cap Modeling – S&P 500",
        description1: "This project explores the financial factors that drive company valuations by modeling the ",
        description2: "market capitalization of S&P 500 firms",
        description3: " using Python, Excel, and SQL. The final model explains ",
        description4: "over 81% of the variation in market cap.",
        toolsTitle: "Tools & Technologies",
        tools: {
          python:  "Python (Pandas, Statsmodels, Seaborn, Matplotlib)",
          excel:   "Excel for EDA and pivot tables",
          sql:     "SQL for structured data querying",
          jupyter: "Jupyter Notebook for documentation",
          react:   "Tailwind CSS + React for presentation",
        },
        modelTitle: "Model Highlights",
        model: {
          r2:          "R² = 0.812 with robust standard errors (HC3)",
          variables:   "Key variables: EBITDA, Price/Sales, Earnings/Share",
          vif:         "Multicollinearity tested with VIFs (all < 1.05)",
          diagnostics: "Diagnostic plots: residuals, Q-Q, influence",
        },
        chartsTitle: "Diagnostic Charts",
        skillsTitle: "Skills Demonstrated",
        skills: {
          cleaning:      "Data cleaning and preprocessing across tools",
          modeling:      "Statistical modeling using OLS and robust errors",
          visual:        "Visual storytelling with Python libraries",
          communication: "Communication of results through code and charts",
        },
      },

      aeProject: {
        title: "After Effects Animations",
        gmail:        { title: "Gmail",         description: "Animated logo reveal for Gmail." },
        googleMeet:   { title: "Google Meet",   description: "Motion intro for Google Meet." },
        googleDrive:  { title: "Google Drive",  description: "Logo animation for Google Drive." },
        afgMedia:     { title: "AFG Media",     description: "Brand animation for AFG Media." },
        applePodcast: { title: "Apple Podcast", description: "Podcast intro animation." },
        appleTV:      { title: "Apple TV",      description: "Apple TV promo animation." },
      },
    },
  },

  /* ════════════════════════════════════════════════════════
     GERMAN
  ════════════════════════════════════════════════════════ */
  de: {
    translation: {

      navbar: {
        about:        "Über mich",
        experience:   "Erfahrung",
        projects:         "Projekte",
        contact:      "Kontakt",
        ae:           "After Effects",
        dataanalysis: "Datenanalyse",
      },

      hero: {
        greeting:     "Hallo, ich bin",
        description:  "Ich entwickle Full-Stack-Anwendungen, trainiere Machine-Learning-Modelle und gestalte moderne User Experiences.",
        startWorking: "Zusammenarbeiten",
        getInTouch:   "Kontakt aufnehmen",
        roles: [
          "Full-Stack Entwickler",
          "ML Engineer",
          "Backend Architekt",
          "Frontend Designer",
        ],
        stats: {
          gpa:            "Notenschnitt",
          projects:       "Projekte",
          languages:      "Sprachen",
          certifications: "Zertifikate",
        },
      },

      about: {
        introduction: "Einführung",
        overview:     "Überblick",
        description:  "Ich bin 18 Jahre alt und entwickle komplexe Full-Stack-Anwendungen, Machine-Learning-Modelle und cloud-fähige Backend-Systeme – neben der Schule, die ich mit einem Notenschnitt von 1,0 absolviere. Praktische Berufserfahrung sammelte ich beim Fraunhofer Institut (INT), wo ich interaktive Datenvisualisierungen in JavaScript und D3.js entwickelte. Ich spreche fließend Deutsch, Englisch, Italienisch und Rumänisch und arbeite gerne in teamorientierten Umgebungen, in denen ich technische Probleme in saubere, performante Lösungen verwandeln kann.",
      },

      experience: {
        title:    "Was ich gemacht habe",
        subtitle: "Berufserfahrung",
        fraunhofer: {
          role: "Praktikum – Data Driven Foresight",
          points: [
            "Frontend-Entwicklung (JavaScript, D3.js) am KI-Assistenzsystem KATI (Knowledge Analytics for Technology & Innovation).",
            "Entwicklung interaktiver Visualisierungen und Analyse-Tools für Daten aus wissenschaftlichen Publikationen und Patenten.",
            "Unterstützung bei Technologiefrühaufklärung und Innovationsprozessen im Forschungsfeld Data Driven Foresight.",
          ],
        },
      },

      works: {
        myWork:     "Meine Arbeit",
        projects:   "Projekte",
        description:
          "Die folgenden Projekte zeigen meine Fähigkeiten anhand realer Beispiele. Sie spiegeln meine Fähigkeit wider, skalierbare Systeme zu entwerfen, Full-Stack zu arbeiten und vom ML-Modell bis zur produktionsreifen Webplattform professionelle Ergebnisse zu liefern.",
      },

      projects: {
        /* ── Neue Projekte ── */
        MarketCapModeling: {
          name: "Marktkapitalisierungs-Modell",
          description:
            "Machine-Learning-Modell zur Analyse der Marktkapitalisierungstreiber im S&P 500 mit Python und TensorFlow. R² = 0,81 – Ergebnisse in einem interaktiven React-Dashboard präsentiert.",
        },
        JobDashboard: {
          name: "Full-Stack Job Dashboard",
          description:
            "Skalierbare Job-Plattform mit Go-Backend, PostgreSQL und Clean-Architecture-Prinzipien. Mit JWT-Auth, Prometheus-Monitoring, Nginx Reverse Proxy und Docker-Deployment.",
        },
        FerienwohnungenGera: {
          name: "Ferienwohnungen Gera",
          description:
            "Kundenprojekt für Ferienwohnungen mit Next.js und Sanity CMS. Dynamische Inhaltsverwaltung, schnelle Ladezeiten und ein modernes Buchungs-UI.",
        },
        AfgMedia: {
          name: "AFG Media",
          description:
            "Hochperformante Agentur-Landingpage für Webdesign-Dienstleistungen. Entwickelt mit Next.js und Tailwind CSS, optimiert auf Conversion und visuellen Impact.",
        },
        Portfolio3D: {
          name: "Interaktives 3D-Portfolio",
          description:
            "Persönliches Developer-Portfolio mit 3D-Animationen via Three.js, Framer-Motion-Übergängen, i18n (EN/DE) und integriertem Kontaktformular.",
        },

        /* ── Bestehende Projekte (behalten) ── */
        "E-commerce": {
          name: "E-Commerce",
          description:
            "Webanwendung, in der Benutzer Telefone, Tablets oder Laptops kaufen können – mit Stripe für sichere Zahlungen und GraphQL für die Server-Kommunikation.",
        },
        Restaurant: {
          name: "Restaurant",
          description:
            "Webanwendung mit Informationen über ein Restaurant: Menü, Öffnungszeiten, Besonderheiten und Impressionen des Lokals.",
        },
        "Beatiful Design": {
          name: "Schönes Design",
          description:
            "Landing Page, in Figma entworfen und in React umgesetzt, um das Potenzial von Tailwind CSS zu demonstrieren.",
        },
      },

      contactVisual: {
        role:         "Full-Stack Entwickler & ML Engineer",
        status:       { label: "Status",    value: "Verfügbar"              },
        location:     { label: "Standort",  value: "Deutschland · Remote"   },
        response:     { label: "Antwort",   value: "Innerhalb von 24 Std."  },
        languages:    { label: "Sprachen",  value: "DE · EN · IT · RO"      },
        availability: "Offen für Praktika & Teilzeitstellen",
      },

      contact: {
        getInTouch:         "Kontakt aufnehmen",
        contact:            "Kontakt",
        yourName:           "Dein Name",
        yourEmail:          "Deine E-Mail",
        yourMessage:        "Deine Nachricht",
        namePlaceholder:    "Wie heißt du?",
        emailPlaceholder:   "Wie lautet deine E-Mail?",
        messagePlaceholder: "Worüber möchtest du sprechen?",
        send:               "Nachricht senden",
        sending:            "Wird gesendet…",
        successMessage:     "Vielen Dank! Ich melde mich so schnell wie möglich.",
        errorMessage:       "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
      },

      

      marketcap: {
        title: "Marktkapitalisierungsmodellierung – S&P 500",
        description1: "Dieses Projekt untersucht, welche finanziellen Faktoren die Unternehmensbewertungen beeinflussen, indem es die ",
        description2: "Marktkapitalisierung von S&P 500 Unternehmen",
        description3: " mit Python, Excel und SQL modelliert. Das Modell erklärt ",
        description4: "über 81 % der Variation in der Marktkapitalisierung.",
        toolsTitle: "Werkzeuge & Technologien",
        tools: {
          python:  "Python (Pandas, Statsmodels, Seaborn, Matplotlib)",
          excel:   "Excel für EDA und Pivot-Tabellen",
          sql:     "SQL für strukturierte Datenabfragen",
          jupyter: "Jupyter Notebook für Dokumentation",
          react:   "Tailwind CSS + React für Präsentation",
        },
        modelTitle: "Modell-Highlights",
        model: {
          r2:          "R² = 0,812 mit robusten Standardfehlern (HC3)",
          variables:   "Schlüsselvariablen: EBITDA, Preis/Umsatz, Gewinn/Aktie",
          vif:         "Multikollinearität mit VIFs getestet (alle < 1,05)",
          diagnostics: "Diagnose-Diagramme: Residuen, Q-Q, Einfluss",
        },
        chartsTitle: "Diagnose-Diagramme",
        skillsTitle: "Demonstrierte Fähigkeiten",
        skills: {
          cleaning:      "Datenbereinigung und -vorverarbeitung",
          modeling:      "Statistische Modellierung mit OLS und robusten Fehlern",
          visual:        "Visuelles Storytelling mit Python-Bibliotheken",
          communication: "Kommunikation der Ergebnisse durch Code und Diagramme",
        },
      },

      aeProject: {
        title: "After Effects Animationen",
        gmail:        { title: "Gmail",         description: "Animiertes Logo-Reveal für Gmail." },
        googleMeet:   { title: "Google Meet",   description: "Motion-Intro für Google Meet." },
        googleDrive:  { title: "Google Drive",  description: "Logo-Animation für Google Drive." },
        afgMedia:     { title: "AFG Media",     description: "Brand-Animation für AFG Media." },
        applePodcast: { title: "Apple Podcast", description: "Podcast-Intro-Animation." },
        appleTV:      { title: "Apple TV",      description: "Apple TV Promo-Animation." },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:           'en',
    fallbackLng:   'en',
    interpolation: { escapeValue: false },
  });

export default i18n;