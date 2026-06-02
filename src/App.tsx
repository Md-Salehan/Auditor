// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import FloatingCollage from './components/FloatingCollage';
import Manifesto from './components/Manifesto';
import BrandOS from './components/BrandOS';
import LumioStudio from './components/LumioStudio';
import TeamUseCases from './components/TeamUseCases';
import Testimonial from './components/Testimonial';
import Updates from './components/Updates';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-page-bg text-text font-body-lg min-h-screen antialiased selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <FloatingCollage />
        <Manifesto />
        <BrandOS />
        {/* <LumioStudio /> */}
        <TeamUseCases />
        <Testimonial />
        <Updates />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;