import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, logo1, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

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
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo1} alt="logo" className='h-16 object-contain'/>
          <p className='text-white text-[18px] flex font-bold cursor-pointer'>Andrei &nbsp; 
          <span className='sm:block hidden'>| Florea</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map(link => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}/>
            <motion.div initial={{ y: 25, opacity: 0 }}
              animate={toggle ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
              className={`${!toggle ? 'hidden' : 'flex'} p-6 backdrop-blur-2xl bg-black/95 border-gray-500 border absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex  justify-end items-start gap-4 flex-col'>
                {navLinks.map(link => (
                  <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer hover:text-white text-[16px]`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(!toggle)
                    }}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar