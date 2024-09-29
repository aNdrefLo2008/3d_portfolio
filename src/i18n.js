import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        navbar: {
          about: "About",
          work: "Work",
          contact: "Contact",
          ae: "After Effects",
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
        navbar: {
          about: "Über mich",
          work: "Arbeit",
          contact: "Kontakt",
          ae: "After Effects",
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
