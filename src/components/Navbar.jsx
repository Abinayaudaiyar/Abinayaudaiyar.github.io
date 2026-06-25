import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle glass navbar blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy to highlight active menu section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // check elements near the center-upper third of screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    // Handle hero edge case (top of page)
    const handleHeroSpy = () => {
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleHeroSpy);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleHeroSpy);
    };
  }, []);

  // Handle mobile menu scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: isScrolled ? '0.85rem 2rem' : '1.5rem 2rem',
        background: isScrolled ? 'rgba(3, 7, 18, 0.75)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.25)' : 'none',
        transition: 'padding 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s, border-bottom 0.4s, box-shadow 0.4s',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} style={{
          textDecoration: 'none',
          color: '#ffffff',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 900,
          fontSize: '1.5rem',
          letterSpacing: '-0.03em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          <span>Abinaya</span>
          <span style={{
            color: '#6366f1',
            fontSize: '1.75rem',
            lineHeight: 1
          }}>.</span>
        </a>

        {/* Desktop nav links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-nav">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                style={{
                  color: isActive ? '#06b6d4' : '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                  transition: 'color 0.25s ease',
                  position: 'relative',
                  padding: '0.25rem 0'
                }}
              >
                {item.label}
                {/* Active Indicator Underline */}
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: isActive ? '100%' : '0%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
                  transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  borderRadius: '2px'
                }} />
              </a>
            );
          })}
          
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')} 
            className="gradient-border-btn"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
          >
            <span>Hire Me</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            color: '#f3f4f6',
            padding: '0.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'none', // shown via CSS responsive rule
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-fast)'
          }}
          className="mobile-nav-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile nav drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'rgba(3, 7, 18, 0.98)',
        zIndex: 999,
        padding: '6rem 2rem 2rem',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s',
        transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        opacity: mobileMenuOpen ? 1 : 0,
        pointerEvents: mobileMenuOpen ? 'all' : 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        backdropFilter: 'blur(20px)',
        overflowY: 'auto'
      }}>
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              style={{
                color: isActive ? '#06b6d4' : '#f3f4f6',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                paddingBottom: '0.75rem',
                transition: 'color 0.2s ease'
              }}
            >
              {item.label}
            </a>
          );
        })}
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className="primary-btn"
          style={{ 
            justifyContent: 'center', 
            marginTop: '1.5rem',
            padding: '1rem' 
          }}
        >
          <span>Get in touch</span>
          <ArrowUpRight size={18} />
        </a>
      </div>

      {/* Responsive adjustments added as style tags */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}} />
    </>
  );
}
