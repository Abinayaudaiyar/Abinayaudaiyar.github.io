import { Heart } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      background: 'rgba(3, 7, 18, 0.6)',
      backdropFilter: 'blur(8px)',
      padding: '3rem 2rem',
      textAlign: 'center',
      marginTop: '6rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        {/* Social Quick Links */}
        <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '0.5rem' }}>
          <a 
            href="https://github.com/Abinayaudaiyar" 
            target="_blank" 
            rel="noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/abinayaudaiyarr" 
            target="_blank" 
            rel="noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.color = '#0077b5'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Brand signature */}
        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 600,
          fontSize: '0.95rem',
          color: 'var(--text-main)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          Designed & Developed with 
          <Heart size={14} style={{ color: '#ef4444', fill: '#ef4444' }} /> 
          by Abinaya Udaiyar
        </p>

        {/* Legal copyright details */}
        <p style={{
          fontSize: '0.8rem',
          color: 'var(--text-dark)'
        }}>
          © {currentYear} All Rights Reserved. Built using React & Vite.
        </p>
      </div>
    </footer>
  );
}
