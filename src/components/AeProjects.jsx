import React from 'react'
import { LogosAnm, GoogleLgAnm } from '../assets';
import { motion } from 'framer-motion';

function AeProject() {
    return (
        <div className='overflow-hidden min-h-screen p-10 xl:mt-20 lg:mt-20 md:mt-24 sm:mt-36 mt-24'>
          <h1 className="text-4xl sm:text-6xl font-black mb-6">After Effects Animations</h1>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl">
                <h2 className="text-2xl sm:text-4xl font-semibold mb-2">Gmail</h2>
                <p className="text-xl">Description of Project 1</p>
              </div>
              <div className="p-6 rounded-2xl">
                <h2 className="text-2xl sm:text-4xl font-semibold mb-2">Google Meet</h2>
                <p className="text-xl">Description of Project 1</p>
              </div>
              <div className="p-6 rounded-2xl ">
                <h2 className="text-2xl sm:text-4xl font-semibold mb-2">Google Drive</h2>
                <p className="text-xl ">Description of Project 2</p>
              </div>
            </div>
            <motion.div style={{ transformOrigin: 'center', willChange: 'transform' }}>
              <motion.video autoPlay  // Ensure the video starts playing automatically
              muted  // Optionally mute the video if necessary
              loop
              whileHover={{ scale: 1.05 }}  // Scale the video by 10% on hover
              transition={{ duration: 0.5, ease: "easeInOut" }}  // Animation duration of 0.5 seconds
              className={`w-full h-full object-cover sm:my-10 sm:mb-10 my-5 rounded-3xl`}>
                <source src={GoogleLgAnm} type="video/ogg"/>
                Your browser does not support the video tag.
              </motion.video>
            </motion.div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl">
                <h2 className="text-2xl sm:text-4xl font-semibold mb-2">AFG Media</h2>
                <p className="text-xl">Description of Project 1</p>
              </div>
              <div className="p-6 rounded-2xl">
                <h2 className="text-2xl sm:text-4xl font-semibold mb-2">Apple Podcast</h2>
                <p className="text-xl">Description of Project 1</p>
              </div>
              <div className="p-6 rounded-2xl ">
                <h2 className="text-2xl sm:text-4xl font-semibold mb-2">Apple TV</h2>
                <p className="text-xl ">Description of Project 2</p>
              </div>
            </div>
            <motion.div style={{ transformOrigin: 'center', willChange: 'transform' }}>
              <motion.video autoPlay  // Ensure the video starts playing automatically
              muted  // Optionally mute the video if necessary
              loop
              whileHover={{ scale: 1.05 }}  // Scale the video by 10% on hover
              transition={{ duration: 0.5, ease: "easeInOut" }}  // Animation duration of 0.5 seconds
              className={`w-full h-full object-cover sm:my-10 sm:mb-10 my-5 rounded-3xl`}>
                <source src={LogosAnm} type="video/ogg"/>
                Your browser does not support the video tag.
              </motion.video>
            </motion.div>
          </div>
        </div>
    );
}

export default AeProject