import { motion } from 'framer-motion'
import React from 'react'


import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { ad } from '../assets'

const Hero = () => {
  

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Andrei Florea</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 xs:block hidden`}>
            I design and develop websites, create smartphone application, and machine learning algorithms for all uses
          </p>
        </div>
      </div>

      <motion.div style={{ transformOrigin: 'center', willChange: 'transform' }} className={`relative flex justify-center items-center inset-0 lg:top-[350px] top-[480px] my- lg:w-[700px] w-[500px] mx-auto flex-row`}>
        <motion.video autoPlay  // Ensure the video starts playing automatically
        muted  // Optionally mute the video if necessary
        loop
         whileHover={{ scale: 1.05 }}  // Scale the video by 10% on hover
         transition={{ duration: 0.5, ease: "easeInOut" }}  // Animation duration of 0.5 seconds
        className={`w-full h-full object-cover  my-10 mb-10`}>
          <source src={ad} type="video/ogg"/>
          Your browser does not support the video tag.
        </motion.video>
      </motion.div>
      
      <div className='absolute xs:-bottom-20 bottom-32 w-full justify-center flex items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl flex justify-center items-start p-2 border-4 border-secondary'>
            <motion.div animate={{
              y: [0, 24, 0]
              }} 
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero