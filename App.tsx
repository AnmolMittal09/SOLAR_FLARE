
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Expertise from './pages/Expertise.tsx';
import HowItWorks from './pages/HowItWorks.tsx';
import Projects from './pages/Projects.tsx';
import FAQ from './pages/FAQ.tsx';
import Contact from './pages/Contact.tsx';
import Brands from './pages/Brands.tsx';
import Solutions from './pages/Solutions.tsx';

// ==========================================
// 1. GLOBAL ROUTING CONFIGURATION
// ==========================================
const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
