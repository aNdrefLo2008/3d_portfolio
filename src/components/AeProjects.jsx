import React from 'react';
import { LogosAnm, GoogleLgAnm, googlePNG, logosPNG } from '../assets';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import LazyLoadVideo from '../LazyLoadVideo';

function AeProject() {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className='overflow-hidden min-h-screen p-10 xl:mt-20 lg:mt-20 md:mt-24 sm:mt-36 mt-24'>
      <h1 className="text-4xl sm:text-6xl font-black mb-6">
        {t('aeProject.title')}
      </h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6">
          <div className="p-2 sm:p-6 rounded-2xl">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-0 sm:mb-2">
              {t('aeProject.googleDrive.title')}
            </h2>
          </div>
          <div className="p-2 sm:p-6 rounded-2xl">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-0 sm:mb-2">
              {t('aeProject.googleMeet.title')}
            </h2>
          </div>
          <div className="p-2 sm:p-6 rounded-2xl">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-0 sm:mb-2">
              {t('aeProject.gmail.title')}
            </h2>
          </div>
        </div>
        <motion.div style={{ transformOrigin: 'center', willChange: 'transform' }}>
          <LazyLoadVideo srcMp4={GoogleLgAnm} srcOgg={GoogleLgAnm} fallbackImage={googlePNG} className={`w-full h-full object-cover sm:my-10 sm:mb-10 my-5 rounded-3xl`} />

        </motion.div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6">
          <div className="p-2 sm:p-6 rounded-2xl">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-0 sm:mb-2">
              {t('aeProject.applePodcast.title')}
            </h2>
          </div>
          <div className="p-2 sm:p-6 rounded-2xl">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-0 sm:mb-2">
              {t('aeProject.appleTV.title')}
            </h2>
          </div>
          <div className="p-2 sm:p-6 rounded-2xl">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-0 sm:mb-2">
              {t('aeProject.afgMedia.title')}
            </h2>
          </div>
        </div>
        <motion.div style={{ transformOrigin: 'center', willChange: 'transform' }}>
          <LazyLoadVideo srcMp4={LogosAnm} srcOgg={LogosAnm} fallbackImage={logosPNG} className={`w-full h-full object-cover sm:my-10 sm:mb-10 my-5 rounded-3xl`} />
        </motion.div>
      </div>
    </div>
  );
}

export default AeProject;
