import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './components/Navbar';
import Hero   from './components/Hero';

const About               = lazy(() => import('./components/About'));
const Experience          = lazy(() => import('./components/Experience'));
const Works               = lazy(() => import('./components/Works'));
const Contact             = lazy(() => import('./components/Contact'));
const AeProject           = lazy(() => import('./components/AeProjects'));
const DataAnalysisProject = lazy(() => import('./components/DataAnalysisProject'));

const SectionFallback = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
  </div>
);

const LandingPage = () => (
  <div className="relative z-0 bg-primary">
    <Analytics />
    <Navbar />
    <Hero />
    <Suspense fallback={<SectionFallback />}><About /></Suspense>
    <Suspense fallback={<SectionFallback />}><Experience /></Suspense>
    <Suspense fallback={<SectionFallback />}><Works /></Suspense>
    <div className="relative z-0">
      <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
    </div>
  </div>
);

const AeProjects = () => (
  <div>
    <Navbar />
    <Suspense fallback={<SectionFallback />}><AeProject /></Suspense>
  </div>
);

const DataAnalysisProjects = () => (
  <div>
    <Navbar />
    <Suspense fallback={<SectionFallback />}><DataAnalysisProject /></Suspense>
  </div>
);

const App = () => (
  <Routes>
    <Route path="/"                    element={<LandingPage />}          />
    <Route path="/aeprojects"          element={<AeProjects />}           />
    <Route path="/dataanalysisproject" element={<DataAnalysisProjects />} />
  </Routes>
);

export default App;