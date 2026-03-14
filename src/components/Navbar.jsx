import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { logo1, menu, close } from '../assets';
import { useTranslation } from 'react-i18next';

const LINKEDIN = "https://www.linkedin.com/in/andrei-alexandru-florea-6b50b1336/";
const GITHUB   = "https://github.com/aNdrefLo2008";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const currentLanguage = i18n.language;
  const changeLanguage  = () =>
    i18n.changeLanguage(currentLanguage === 'en' ? 'de' : 'en');

  const isActive = (href) =>
    location.pathname === href || location.hash === href;

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-xl backdrop-brightness-90 dark:backdrop-brightness-75`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img loading="lazy" src={logo1} alt="Andrei Florea Logo" className="h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Andrei&nbsp;<span className="hidden md:inline">| Florea</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">

          <li>
            <a
              href="/#about"
              className={`${isActive("/#about") ? "text-white" : "text-secondary"} hover:text-white text-[16px] font-medium transition-colors duration-200`}
            >
              {t('navbar.about')}
            </a>
          </li>

          <li>
            <a
              href="/#experience"
              className={`${isActive("/#experience") ? "text-white" : "text-secondary"} hover:text-white text-[16px] font-medium transition-colors duration-200`}
            >
              {t('navbar.experience')}
            </a>
          </li>

          <li>
            <a
              href="/#projects"
              className={`${isActive("/#projects") ? "text-white" : "text-secondary"} hover:text-white text-[16px] font-medium transition-colors duration-200`}
            >
              {t('navbar.projects')}
            </a>
          </li>

          <li>
            <a
              href="/#contact"
              className={`${isActive("/#contact") ? "text-white" : "text-secondary"} hover:text-white text-[16px] font-medium transition-colors duration-200`}
            >
              {t('navbar.contact')}
            </a>
          </li>

          <li>
            <Link
              to="/aeprojects"
              className={`${location.pathname === '/aeprojects' ? "text-white" : "text-secondary"} hover:text-white text-[16px] font-medium transition-colors duration-200`}
            >
              {t('navbar.ae')}
            </Link>
          </li>

          <li>
            <Link
              to="/dataanalysisproject"
              className={`${location.pathname === '/dataanalysisproject' ? "text-white" : "text-secondary"} hover:text-white text-[16px] font-medium transition-colors duration-200`}
            >
              {t('navbar.dataanalysis')}
            </Link>
          </li>

          {/* LinkedIn Icon */}
          <li className='hidden xl:flex'>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-secondary hover:text-white transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </li>

          {/* GitHub Icon */}
          <li className='hidden xl:flex'>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-secondary hover:text-white transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </li>

        </ul>

        {/* Right side: Language toggle + Mobile menu */}
        <div className="flex items-center gap-3">
          <button
            className="text-white border border-white/40 px-3 py-1 rounded-md text-sm hover:border-white transition-colors duration-200"
            onClick={changeLanguage}
          >
            {currentLanguage === 'en' ? 'DE' : 'EN'}
          </button>

          {/* Mobile hamburger */}
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
              className={`${!toggle ? 'hidden' : 'flex'} p-6 backdrop-blur-2xl bg-black/95 border border-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl`}
            >
              <ul className="list-none flex flex-col gap-4 w-full">

                <li className="text-white font-medium cursor-pointer" onClick={() => setToggle(false)}>
                  <a href="/#about">{t('navbar.about')}</a>
                </li>

                <li className="text-white font-medium cursor-pointer" onClick={() => setToggle(false)}>
                  <a href="/#experience">{t('navbar.experience')}</a>
                </li>

                <li className="text-white font-medium cursor-pointer" onClick={() => setToggle(false)}>
                  <a href="/#projects">{t('navbar.projects')}</a>
                </li>

                <li className="text-white font-medium cursor-pointer" onClick={() => setToggle(false)}>
                  <a href="/#contact">{t('navbar.contact')}</a>
                </li>

                <li className="text-white font-medium cursor-pointer" onClick={() => setToggle(false)}>
                  <Link to="/aeprojects">{t('navbar.ae')}</Link>
                </li>

                <li className="text-white font-medium cursor-pointer" onClick={() => setToggle(false)}>
                  <Link to="/dataanalysisproject">{t('navbar.dataanalysis')}</Link>
                </li>

                <li className="border-t border-gray-700 pt-3 flex gap-4">
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white text-sm">
                    LinkedIn
                  </a>
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white text-sm">
                    GitHub
                  </a>
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