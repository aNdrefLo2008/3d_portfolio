import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { logo1, menu, close } from '../assets';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const currentLanguage = i18n.language;
  const changeLanguage = () => {
    i18n.changeLanguage(currentLanguage === 'en' ? 'de' : 'en');
  };

  const isActive = (href) => location.pathname === href || location.hash === href;

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-xl backdrop-brightness-90 dark:backdrop-brightness-75`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img loading="lazy" src={logo1} alt="logo" className="h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Andrei&nbsp;<span className="hidden md:inline">| Florea</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className={`${isActive("/#about") ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
            <a href="/#about">{t('navbar.about')}</a>
          </li>
          <li className={`${isActive("/#work") ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
            <a href="/#work">{t('navbar.work')}</a>
          </li>
          <li className={`${isActive("/#contact") ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
            <a href="/#contact">{t('navbar.contact')}</a>
          </li>
          <li className={`${location.pathname === '/aeprojects' ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
            <Link to="/aeprojects">{t('navbar.ae')}</Link>
          </li>
          <li className={`${location.pathname === '/dataanalysisproject' ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
            <Link to="/dataanalysisproject">{t('navbar.dataanalysis')}</Link>
          </li>
        </ul>

        {/* Language Toggle and Mobile Menu */}
        <div className="flex items-center">
          <button
            className="text-white border border-white px-4 py-1 rounded-md mr-4"
            onClick={changeLanguage}
          >
            {currentLanguage === 'en' ? 'DE' : 'EN'}
          </button>

          <div className="sm:hidden flex items-center">
            <img
              loading="lazy"
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={toggle ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className={`${!toggle ? 'hidden' : 'flex'} p-6 backdrop-blur-2xl bg-black/95 border border-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
            >
              <ul className="list-none flex flex-col gap-4">
                <li
                  className="text-white font-medium cursor-pointer"
                  onClick={() => setToggle(false)}
                >
                  <a href="/#about">{t('navbar.about')}</a>
                </li>
                <li
                  className="text-white font-medium cursor-pointer"
                  onClick={() => setToggle(false)}
                >
                  <a href="/#work">{t('navbar.work')}</a>
                </li>
                <li
                  className="text-white font-medium cursor-pointer"
                  onClick={() => setToggle(false)}
                >
                  <a href="/#contact">{t('navbar.contact')}</a>
                </li>
                <li
                  className="text-white font-medium cursor-pointer"
                  onClick={() => setToggle(false)}
                >
                  <Link to="/aeprojects">{t('navbar.ae')}</Link>
                </li>
                <li
                  className="text-white font-medium cursor-pointer"
                  onClick={() => setToggle(false)}
                >
                  <Link to="/dataanalysisproject">{t('navbar.dataanalysis')}</Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
