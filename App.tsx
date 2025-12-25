
// Fix: Use namespace import to bypass named export resolution issues in certain environments
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { HashRouter, Routes, Route } = ReactRouterDOM;
const Router = HashRouter;
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
