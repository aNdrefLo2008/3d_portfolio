import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { logo1, menu, close } from '../assets';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Use the translation hook
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const currentLanguage = i18n.language; // Get current language

  const changeLanguage = () => {
    // Toggle between 'en' and 'de'
    i18n.changeLanguage(currentLanguage === 'en' ? 'de' : 'en');
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-xl -my-2 backdrop-brightness-90`}
    >
      <div className='w-full flex justify-between items-center max-w-7 mx-auto'>
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img loading="lazy" src={logo1} alt="logo" className='h-16 object-contain'/>
          <p className='text-white text-[18px] flex font-bold cursor-pointer'>
            Andrei &nbsp; <span className='md:block hidden'>| Florea</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li className={`${active === 'about' ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive('about')}>
            <a href="#about">{t('navbar.about')}</a>
          </li>
          <li className={`${active === 'work' ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive('work')}>
            <a href="#work">{t('navbar.work')}</a>
          </li>
          <li className={`${active === 'contact' ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive('contact')}>
            <a href="#contact">{t('navbar.contact')}</a>
          </li>
          <li className={`${active === 'about' ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive('about')}>
            <a href="/aeprojects">{t('navbar.ae')}</a>
          </li>
        </ul>

        <div className='flex items-center'>
          {/* Single Language Toggle Button */}
          <button 
            className="text-white border border-white px-4 py-1 rounded-md mr-4"
            onClick={changeLanguage}
          >
            {currentLanguage === 'en' ? 'DE' : 'EN'}
          </button>

          {/* Mobile Menu */}
          <div className='sm:hidden flex justify-end items-center'>
            <img loading="lazy" src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)} />
            <motion.div initial={{ y: 25, opacity: 0 }}
              animate={toggle ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
              className={`${!toggle ? 'hidden' : 'flex'} p-6 backdrop-blur-2xl bg-black/95 border-gray-500 border absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start gap-4 flex-col'>
                <li className={`${active === 'about' ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer hover:text-white text-[16px]`}
                  onClick={() => {
                    setActive('about');
                    setToggle(!toggle);
                  }}>
                  <a href="#about">{t('navbar.about')}</a>
                </li>
                <li className={`${active === 'work' ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer hover:text-white text-[16px]`}
                  onClick={() => {
                    setActive('work');
                    setToggle(!toggle);
                  }}>
                  <a href="#work">{t('navbar.work')}</a>
                </li>
                <li className={`${active === 'contact' ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer hover:text-white text-[16px]`}
                  onClick={() => {
                    setActive('contact');
                    setToggle(!toggle);
                  }}>
                  <a href="#contact">{t('navbar.contact')}</a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
