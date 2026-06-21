import React, { useState, useEffect } from 'react';
import { Mail, ArrowDown, FileText } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

const TYPING_WORDS = [
  "Full Stack Developer",
  "Compliance Systems Builder",
  "Backend & API Engineer",
  "B.Tech in AI & Data Science"
];

export default function Hero() {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentWord = TYPING_WORDS[loopNum % TYPING_WORDS.length];

    const handleType = () => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          // Pause at full word before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '8rem',
      paddingBottom: '4rem'
    }} className="hero-section">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '4rem',
        alignItems: 'center',
        width: '100%'
      }} className="hero-grid">
        
        {/* Left Side: Intro text and buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="hero-text-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 10px #10b981',
              animation: 'pulseGlow 2s infinite'
            }} />
            <span style={{
              color: '#10b981',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              letterSpacing: '0.05em'
            }}>
              AVAILABLE FOR FULL-TIME OPPORTUNITIES
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em'
          }}>
            Hi, I'm <span className="gradient-text">Abinaya Udaiyar</span>
          </h1>

          <div style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            color: '#e2e8f0',
            height: '3.5rem', // reserve vertical space to avoid layout shift
            display: 'flex',
            alignItems: 'center'
          }}>
            <span>{text}</span>
            <span style={{
              display: 'inline-block',
              width: '3px',
              height: '80%',
              backgroundColor: '#06b6d4',
              marginLeft: '5px',
              animation: 'blink 0.75s infinite'
            }} />
          </div>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            maxWidth: '620px'
          }}>
            Building scalable, secure, and compliance-driven web applications using React, Python, FastAPI, Flask, PostgreSQL, and Docker. Specialize in designing secure data flows and governance frameworks.
          </p>

          {/* Call to action buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginTop: '1.5rem'
          }} className="hero-buttons">
            <button onClick={() => handleScrollTo('projects')} className="primary-btn">
              <span>View Projects</span>
              <ArrowDown size={16} />
            </button>
            <a 
              href="/image/Abinaya Udaiyar PERN.pdf" 
              download="Abinaya_Udaiyar_Resume.pdf" 
              className="secondary-btn"
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
            <button onClick={() => handleScrollTo('contact')} className="gradient-border-btn">
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social connections */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <span style={{
              fontSize: '0.85rem',
              color: 'var(--text-dark)',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Connect
            </span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://github.com/Abinayaudaiyar" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abinayaudaiyarr" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#0077b5'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:abinayaudaiyarr@gmail.com" 
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ea4335'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Floating Avatar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }} className="hero-image-container">
          
          {/* Decorative spinning aura */}
          <div style={{
            position: 'absolute',
            width: '330px',
            height: '330px',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
            filter: 'blur(30px)',
            zIndex: -1,
            animation: 'morph 12s ease-in-out infinite'
          }} />

          {/* Profile Picture Frame */}
          <div className="glass-panel" style={{
            width: '300px',
            height: '300px',
            borderRadius: '24px',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            animation: 'floatCard 6s ease-in-out infinite',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Fallback pattern in case image fails */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(3, 7, 18, 1) 70%)',
                zIndex: 0
              }} />
              <img 
                src="/image/profile.png" 
                alt="Abinaya Udaiyar" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/image/abinaya profile.png"; // check alternative path
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 1,
                  filter: 'grayscale(20%) contrast(110%)'
                }} 
              />
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          50% { border-radius: 70% 30% 50% 50% / 50% 60% 40% 60%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .hero-text-container {
            align-items: center;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-image-container {
            order: -1;
          }
        }
      `}} />
    </section>
  );
}
