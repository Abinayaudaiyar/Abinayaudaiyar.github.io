import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 99,
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
        color: '#ffffff',
        border: 'none',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        outline: 'none'
      }}
      className="back-to-top-btn"
    >
      <ChevronUp size={22} />
      
      <style dangerouslySetInnerHTML={{__html: `
        .back-to-top-btn:hover {
          transform: translateY(-5px) scale(1.05) !important;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6) !important;
        }
      `}} />
    </button>
  );
}
