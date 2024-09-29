import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your existing components
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, AeProject } from './components';

import { Analytics } from '@vercel/analytics/react';

const LandingPage = () => {
  return (
    <div>
      <div className='relative z-0 bg-primary'>
        <div className=''>
          <Analytics />
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
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
    </div>
  );
};

const AeProjects = () => {
  return (
    <div>
      <Navbar />
      <AeProject />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      {/* Route for the landing page */}
      <Route path="/" element={<LandingPage />} />

      {/* Route for the projects page */}
      <Route path="/aeprojects" element={<AeProjects />} />
    </Routes>
  );
};

export default App;
