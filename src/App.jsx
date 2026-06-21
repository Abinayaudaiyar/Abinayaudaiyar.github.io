import React, { useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Stats from './components/Stats';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  // Global scroll reveal handler
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px' // animate slightly before fully entering
    });

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Premium Loader Screen */}
      <LoadingScreen />

      {/* Floating Canvas Background Blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      {/* Tech Grid Background Lines */}
      <div className="grid-bg"></div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Achievements />
        <Stats />
        
        {/* Unified Education & Certifications Section */}
        <section id="credentials" className="reveal" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="edu-cert-container">
            <Education />
            <Certifications />
          </div>
        </section>

        <Contact />
      </main>

      {/* Footer Legal & Connect details */}
      <Footer />

      {/* Scroll controls */}
      <BackToTop />
    </>
  );
}

export default App;
