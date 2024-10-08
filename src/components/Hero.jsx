import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { styles } from '../styles';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <section className='relative w-full sm:mt-0 -mt-0 xxs:-mt-24 h-screen mx-auto flex justify-center items-center flex-col gap-6'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ffffff]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-black'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-gray-400`}>
            {t('hero.greeting')} <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#b1aeca] to-[#ffffff]'>Andrei Florea</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-100 xs:block hidden`}>
            {t('hero.description')}
          </p>
        </div>
      </div>

      <div className='hover:bg-gray-200 shadow-card px-4 py-6 w-4/5 xl:w-3/5 button-shadow transition hover:-translate-y-1 duration-500 hover:scale-110 rounded-3xl bg-white font-bold'>
        <Link to={"https://calendly.com/afgmedia15/introductory-call"}>
          <h1 className={`${styles.heroSubText} font-semibold text-gray-800 text-center`}>
            {t('hero.startWorking')}
          </h1>
        </Link>
      </div>


      <div className='border-gray-400 font-semibold button-shadow duration-500 transition px-4 py-6 w-4/5 xl:w-3/5 sm:text-xl border text-white shadow-card rounded-3xl'>
        <a href="#contact">
          <h1 className={`${styles.heroSubText} text-center`}>
            {t('hero.getInTouch')}
          </h1>
        </a>
      </div>
      {/*<motion.div style={{ transformOrigin: 'center', willChange: 'transform' }} className={`sm:flex justify-center items-center inset-0 lg:top-[350px] top-[480px] hidden lg:w-[700px] w-[500px]`}>
        <motion.video autoPlay  // Ensure the video starts playing automatically
        muted  // Optionally mute the video if necessary
        loop
         whileHover={{ scale: 1.05 }}  // Scale the video by 10% on hover
         transition={{ duration: 0.5, ease: "easeInOut" }}  // Animation duration of 0.5 seconds
        className={`w-full h-full object-cover sm:my-10 sm:mb-10 m-0`}>
          <source src={ad} type="video/ogg"/>
          Your browser does not support the video tag.
        </motion.video>
      </motion.div>*/}
    </section>
  );
};

export default Hero;