import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <BrowserRouter>
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Analytics />
                <Navbar />
                <Hero />
            </div>
            <About />
            {/*<Experience /> */}
            <div className='hidden sm:block'>
              <Tech />
            </div>
            <Works />
            {/* <Feedbacks /> */}
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    </BrowserRouter>
  )
}

export default App