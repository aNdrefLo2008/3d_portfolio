import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        marketcap: {
          title: "Market Cap Modeling – S&P 500",
          description1: "This project explores what financial factors drive company valuations by modeling the ",
          description2: "market capitalization of S&P 500 firms",
          description3: " using Python, Excel, and SQL. The final model explains ",
          description4: "over 81% of the variation in market cap, offering actionable insights for analysts and investors.",
          toolsTitle: "Tools & Technologies",
          tools: {
            python: "Python (Pandas, Statsmodels, Seaborn, Matplotlib)",
            excel: "Excel for EDA and pivot tables",
            sql: "SQL for structured data querying",
            jupyter: "Jupyter Notebook for documentation",
            react: "Tailwind CSS + React for presentation"
          },
          modelTitle: "Model Highlights",
          model: {
            r2: "R² = 0.812 with robust standard errors (HC3)",
            variables: "Key variables: EBITDA, Price/Sales, Earnings/Share",
            vif: "Multicollinearity tested with VIFs (all < 1.05)",
            diagnostics: "Diagnostic plots: residuals, Q-Q, influence"
          },
          chartsTitle: "Diagnostic Charts",
          skillsTitle: "Skills Demonstrated",
          skills: {
            cleaning: "Data cleaning and preprocessing across tools",
            modeling: "Statistical modeling using OLS and robust errors",
            visual: "Visual storytelling with Python libraries",
            communication: "Communication of results through code and charts"
          }
        },
        aeProject: {
          title: "After Effects Animations",
          gmail: {
            title: "Gmail",
            description: "Description of Project 1"
          },
          googleMeet: {
            title: "Google Meet",
            description: "Description of Project 1"
          },
          googleDrive: {
            title: "Google Drive",
            description: "Description of Project 2"
          },
          afgMedia: {
            title: "AFG Media",
            description: "Description of Project 1"
          },
          applePodcast: {
            title: "Apple Podcast",
            description: "Description of Project 1"
          },
          appleTV: {
            title: "Apple TV",
            description: "Description of Project 2"
          }
        },
        navbar: {
          about: "About",
          work: "Work",
          contact: "Contact",
          ae: "After Effects",
          dataanalysis: "Data Analysis"
        },
        hero: {
            greeting: "Hi, I'm",
            description: "I design and develop websites, create motion design videos in After Effects, and product animations with Blender.",
            startWorking: "Start working with me",
            getInTouch: "Get in touch"
        },
        about: {
            introduction: "Introduction",
            overview: "Overview",
            description: "I'm a 16-year-old passionate about design and technology. I specialize in designing and developing websites, creating motion design videos in After Effects, and bringing products to life with 3D animations in Blender. Fluent in German, English, Italian, and Romanian, I love collaborating with teams and bringing creative ideas to life, whether it's through web development, video production, or product animation. I'm always excited to create and innovate, especially when working with others to build something unique."
        },
        "contact": {
            getInTouch: "Get in Touch",
            contact: "Contact",
            yourName: "Your Name",
            yourEmail: "Your Email",
            yourMessage: "Your Message",
            namePlaceholder: "What's your name?",
            emailPlaceholder: "What's your email?",
            messagePlaceholder: "What do you want to say?",
            send: "Send",
            sending: "Sending...",
            successMessage: "Thank you. I will get back to you as soon as possible.",
            errorMessage: "Ahh, something went wrong. Please try again."
        },
        works: {
            myWork: "My Work",
            projects: "Projects",
            description: "Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
        },
        projects: {
            "E-commerce": {
            name: "E-commerce",
            description: "Web application where users can buy phones, tablets, or laptops, using Stripe to ensure safe payments and GraphQL for the connection with the server."
            },
            Restaurant: {
            name: "Restaurant",
            description: "Web application where users can get information about a restaurant, menu, opening hours, what's special about the place, and how it looks."
            },
            "Beatiful Design": {
            name: "Beautiful Design",
            description: "Landing page designed in Figma and created in React to showcase the potential of Tailwind CSS."
            }
        }

      },
    },
    de: {
      translation: {
        marketcap: {
          title: "Marktkapitalisierungsmodellierung – S&P 500",
          description1: "Dieses Projekt untersucht, welche finanziellen Faktoren die Unternehmensbewertungen beeinflussen, indem es die ",
          description2: "Marktkapitalisierung von S&P 500 Unternehmen",
          description3: " mit Python, Excel und SQL modelliert. Das endgültige Modell erklärt ",
          description4: "über 81 % der Variation in der Marktkapitalisierung und bietet umsetzbare Erkenntnisse für Analysten und Investoren.",
          toolsTitle: "Werkzeuge & Technologien",
          tools: {
            python: "Python (Pandas, Statsmodels, Seaborn, Matplotlib)",
            excel: "Excel für EDA und Pivot-Tabellen",
            sql: "SQL für strukturierte Datenabfragen",
            jupyter: "Jupyter Notebook für Dokumentation",
            react: "Tailwind CSS + React für Präsentation"
          },
          modelTitle: "Modell-Highlights",
          model: {
            r2: "R² = 0,812 mit robusten Standardfehlern (HC3)",
            variables: "Schlüsselvariablen: EBITDA, Preis/Umsatz, Gewinn/Aktie",
            vif: "Multikollinearität mit VIFs getestet (alle < 1,05)",
            diagnostics: "Diagnose-Diagramme: Residuen, Q-Q, Einfluss"
          },
          chartsTitle: "Diagnose-Diagramme",
          skillsTitle: "Demonstrierte Fähigkeiten",
          skills: {
            cleaning: "Datenbereinigung und -vorverarbeitung über Tools hinweg",
            modeling: "Statistische Modellierung mit OLS und robusten Fehlern",
            visual: "Visuelles Storytelling mit Python-Bibliotheken",
            communication: "Kommunikation der Ergebnisse durch Code und Diagramme"
          }
        },
        aeProject: {
          title: "After Effects Animationen",
          gmail: {
            title: "Gmail",
            description: "Beschreibung des Projekts 1"
          },
          googleMeet: {
            title: "Google Meet",
            description: "Beschreibung des Projekts 1"
          },
          googleDrive: {
            title: "Google Drive",
            description: "Beschreibung des Projekts 2"
          },
          afgMedia: {
            title: "AFG Media",
            description: "Beschreibung des Projekts 1"
          },
          applePodcast: {
            title: "Apple Podcast",
            description: "Beschreibung des Projekts 1"
          },
          appleTV: {
            title: "Apple TV",
            description: "Beschreibung des Projekts 2"
          }
        },
        navbar: {
          about: "Über mich",
          work: "Arbeit",
          contact: "Kontakt",
          ae: "After Effects",
          dataanalysis: "Data Analyse"
        },
        hero: {
            greeting: "Hallo, ich bin",
            description: "Ich entwerfe und entwickle Websites, erstelle Motion-Design-Videos in After Effects und Produktanimationen mit Blender.",
            startWorking: "Beginnen Sie mit mir zu arbeiten",
            getInTouch: "Kontakt aufnehmen"
        },
        about: {
            introduction: "Einführung",
            overview: "Überblick",
            description: "Ich bin 16 Jahre alt und habe eine Leidenschaft für Design und Technologie. Ich bin spezialisiert auf das Entwerfen und Entwickeln von Websites, das Erstellen von Motion-Design-Videos in After Effects und das Erwecken von Produkten mit 3D-Animationen in Blender. Ich spreche fließend Deutsch, Englisch, Italienisch und Rumänisch und liebe es, mit Teams zusammenzuarbeiten und kreative Ideen zum Leben zu erwecken, sei es durch Webentwicklung, Videoproduktion oder Produktanimation. Es macht mir immer Spaß, etwas zu schaffen und innovativ zu sein, besonders wenn ich mit anderen zusammenarbeite, um etwas Einzigartiges zu schaffen."
        },
        contact: {
            getInTouch: "Kontakt aufnehmen",
            contact: "Kontakt",
            yourName: "Dein Name",
            yourEmail: "Deine E-Mail",
            yourMessage: "Deine Nachricht",
            namePlaceholder: "Wie heißt du?",
            emailPlaceholder: "Wie lautet deine E-Mail?",
            messagePlaceholder: "Was möchtest du sagen?",
            send: "Senden",
            sending: "Senden...",
            successMessage: "Vielen Dank. Ich werde mich so schnell wie möglich bei dir melden.",
            errorMessage: "Oh nein, etwas ist schief gelaufen. Bitte versuche es erneut."
        },
        works: {
            myWork: "Meine Arbeit",
            projects: "Projekte",
            description: "Die folgenden Projekte zeigen meine Fähigkeiten und Erfahrungen durch reale Beispiele meiner Arbeit. Jedes Projekt ist kurz beschrieben, mit Links zu Code-Repositories und Live-Demos. Sie spiegeln meine Fähigkeit wider, komplexe Probleme zu lösen, mit verschiedenen Technologien zu arbeiten und Projekte effektiv zu managen."
        },
        projects: {
            "E-commerce": {
            name: "E-Commerce",
            description: "Webanwendung, in der Benutzer Telefone, Tablets oder Laptops kaufen können, Stripe für sichere Zahlungen und GraphQL für die Verbindung zum Server verwenden."
            },
            Restaurant: {
            name: "Restaurant",
            description: "Webanwendung, in der Benutzer Informationen über ein Restaurant, das Menü, die Öffnungszeiten und Besonderheiten des Ortes erhalten können."
            },
            "Beatiful Design": {
            name: "Schönes Design",
            description: "Landing Page, die in Figma entworfen und in React erstellt wurde, um das Potenzial von Tailwind CSS zu demonstrieren."
            }
        }
        
      },
    },
  };
  

  

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation not available
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
