/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return (
    <div className="min-h-screen bg-main-bg text-white font-sans selection:bg-accent/30 selection:text-white">
      <SmoothScroll />
      <Header />
      
      <main>
        <Hero />
        <Projects />
        <About />
        <Clients />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
