import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hco";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, isMobile }) => {
  const { t } = useTranslation();

  // Inhalt der Karte separat rendern, um Code-Duplizierung zu vermeiden
  const cardContent = (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[480px] flex flex-col justify-between">
      <div>
        <div className="relative h-[230px] w-full">
          <img
            loading="lazy"
            decoding="async"
            src={image}
            alt={t(`projects.${name}.name`)}
            className="h-full w-full object-cover rounded-2xl"
          />

          <div className="absolute flex justify-end m-3 card-img_hover inset-0">
            <a href={source_code_link} target="_blank" rel="noopener noreferrer" className="z-10">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  loading="lazy"
                  src={github}
                  alt="github"
                  className="w-2/3 h-2/3"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-semibold text-[20px] sm:text-[22px] text-white">
            {t(`projects.${name}.name`)}
          </h3>
          <p className="mt-2 text-[14px] text-secondary leading-relaxed">
            {t(`projects.${name}.description`)}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );

  // Auf Mobile: Kein Tilt-Effekt, um Touch-Bugs zu verhindern
  if (isMobile) {
    return (
      <div className="w-full sm:w-[360px]">
        {cardContent}
      </div>
    );
  }

  // Auf Desktop: Mit vollem Tilt- und Animationseffekt
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{
          max: 25, // Reduziert von 45 für besseres Handling
          scale: 1,
          speed: 450,
        }}
        className="w-full sm:w-[360px]"
      >
        {cardContent}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // Prüfen, ob der Nutzer auf einem Mobilgerät ist
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }  , []);

  return (
    <>
      {/* Überschriften-Animation auf Mobile abschwächen/überspringen */}
      <motion.div variants={isMobile ? {} : textVariant()}>
        <p className={styles.sectionSubText}>{t("works.myWork")}</p>
        <h2 className={styles.sectionHeadText}>{t("works.projects")}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={isMobile ? {} : fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("works.description")}
        </motion.p>
      </div>

      {/* Grid-Layout für ein sauberes mobiles Wrappen der Karten */}
      <div className="mt-12 sm:mt-20 flex flex-wrap justify-center sm:justify-start gap-7 w-full">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            isMobile={isMobile} 
            {...project} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");