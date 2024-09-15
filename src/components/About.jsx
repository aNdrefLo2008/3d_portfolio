import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import translation hook
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hco';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className='mt-0 sm:mt-20'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('about.introduction')}</p>
        <h2 className={styles.sectionHeadText}>{t('about.overview')}</h2>
      </motion.div>
      <motion.p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        variants={fadeIn("", "", 0.1, 1)}
      >
        {t('about.description')}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, i) => (
          <ServiceCard title={service.title} key={service.title} index={i} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
