import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hco";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const { t } = useTranslation();

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative h-[230px]">
          <img
            loading="lazy"
            src={image}
            alt={t(`projects.${name}.name`)} // Use translated project name
            className="h-full w-full object-cover rounded-2xl"
          />

          <div className="absolute flex justify-end m-3 card-img_hover inset-0">
            <a href={source_code_link} target="_blank" rel="noopener noreferrer">
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
          <h3 className="font-semibold sm:text-[22px]">{t(`projects.${name}.name`)}</h3>
          <p className="sm:text-[14px] text-[10px] text-secondary tracking-wider">
            {t(`projects.${name}.description`)}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("works.myWork")}</p>
        <h2 className={styles.sectionHeadText}>{t("works.projects")}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("works.description")}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
