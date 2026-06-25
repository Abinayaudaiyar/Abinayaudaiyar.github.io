import { Award, ChevronRight } from 'lucide-react';

const CERTIFICATIONS = [
  { name: "Core Python", issuer: "Udemy", link: "https://www.udemy.com/" },
  { name: "SQL Basic", issuer: "HackerRank", link: "https://www.hackerrank.com/" },
  { name: "SQL Intermediate", issuer: "HackerRank", link: "https://www.hackerrank.com/" },
  { name: "Power BI & MS Excel", issuer: "PrepInsta", link: "https://prepinsta.com/" },
  { name: "Python for Data Science", issuer: "Cognitive Class", link: "https://cognitiveclass.ai/" }
];

export default function Certifications() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 700,
        marginBottom: '2rem',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <Award size={24} style={{ color: 'var(--color-accent)' }} />
        Certifications
      </h3>

      <div className="certs-list" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {CERTIFICATIONS.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="cert-item"
            style={{ textDecoration: 'none' }}
          >
            <div className="cert-info">
              <span className="cert-name">{cert.name}</span>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{
                color: 'var(--text-dark)',
                fontSize: '0.8rem',
                fontFamily: 'Outfit, sans-serif'
              }} className="cert-verify-text">
                Verify
              </span>
              <ChevronRight size={14} className="cert-icon" />
            </div>
          </a>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .cert-item:hover .cert-verify-text {
          color: var(--color-secondary) !important;
        }
      `}} />
    </div>
  );
}
