import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Gallery } from '../components/sections/Gallery';
import { Trainers } from '../components/sections/Trainers';
import { Pricing } from '../components/sections/Pricing';
import { Footer } from '../components/layout/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-deepBlack selection:bg-neonBlue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Trainers />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};
