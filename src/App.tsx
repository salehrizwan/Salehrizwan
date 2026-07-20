/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Advantages } from './components/Advantages';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { useState, useEffect } from 'react';
import { Intro } from './components/Intro';

export default function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
  };

  return (
    <div className="bg-white min-h-screen font-inter selection:bg-brand-orange selection:text-white relative">
      {showIntro && <Intro onComplete={handleIntroComplete} />}
      <Navbar onPlayIntro={() => setShowIntro(true)} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Advantages />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
