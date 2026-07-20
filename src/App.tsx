/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Advantages } from './components/Advantages';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-white min-h-screen font-inter">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Advantages />
        <Process />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
