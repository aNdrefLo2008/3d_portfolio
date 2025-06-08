import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components (ensure DataAnalysisProject is added to your components folder)
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, AeProject, DataAnalysisProject } from './components';
import { Analytics } from '@vercel/analytics/react';

const LandingPage = () => {
  return (
    <div>
      <div className="relative z-0 bg-primary">
        <Analytics />
        <Navbar />
        <Hero />
        <About />
        {/* <Experience /> */}
        <div className="hidden sm:block">
          <Tech />
        </div>
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
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

const DataAnalysisProjects = () => {
  return (
    <div>
      <Navbar />
      <DataAnalysisProject />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aeprojects" element={<AeProjects />} />
      <Route path="/dataanalysisproject" element={<DataAnalysisProjects />} />
    </Routes>
  );
};

export default App;
