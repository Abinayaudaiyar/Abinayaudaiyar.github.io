import React from 'react';
import { ExternalLink, ShieldCheck, TrendingUp, Sprout, QrCode } from 'lucide-react';
import { Github } from './SocialIcons';

const PROJECTS = [
  {
    title: "PII Governance & Compliance System",
    category: "Security & Governance",
    description: "Enterprise-grade platform designed for discovering, mapping, and securing Personally Identifiable Information (PII) to ensure full compliance with DPDP Act regulations.",
    features: [
      "Data Discovery",
      "Data Classification",
      "Data Lineage",
      "User Data Footprint",
      "DSAR Management",
      "Archive Retrieval",
      "Role-Based Access Control",
      "Compliance Reporting"
    ],
    tech: ["React", "Flask", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/Abinayaudaiyar",
    live: "https://github.com/Abinayaudaiyar",
    icon: <ShieldCheck size={16} />,
    color: "#10b981",
    colorRgb: "16, 185, 129"
  },
  {
    title: "Portfolio Management System",
    category: "Asset Management",
    description: "Investment and asset management platform featuring live portfolio valuation history, detailed transaction mapping, and strict permission gating.",
    features: [
      "User Authentication",
      "Portfolio Tracking",
      "Asset Management",
      "Audit Logs",
      "Role-Based Access Control"
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com/Abinayaudaiyar",
    live: "https://github.com/Abinayaudaiyar",
    icon: <TrendingUp size={16} />,
    color: "#6366f1",
    colorRgb: "99, 102, 241"
  },
  {
    title: "Agritech Nexus",
    category: "AI & Agriculture",
    description: "AI-powered intelligence platform providing crop selection recommendations, soil content mapping, and interactive assistance tools for farmers.",
    features: [
      "Crop Recommendation",
      "Farmer Support",
      "Disease/Help Guidance",
      "Smart Agriculture Assistance"
    ],
    tech: ["Python", "Machine Learning", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abinayaudaiyar",
    live: "https://github.com/Abinayaudaiyar",
    icon: <Sprout size={16} />,
    color: "#06b6d4",
    colorRgb: "6, 182, 212"
  },
  {
    title: "QR Code Generator",
    category: "Utilities",
    description: "Lightweight, responsive web utility enabling users to instantly generate high-resolution QR codes from arbitrary text strings, contact cards, or links.",
    features: [
      "QR Code Generation",
      "Instant Preview",
      "Download Option",
      "Simple Responsive UI"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abinayaudaiyar",
    live: "https://github.com/Abinayaudaiyar",
    icon: <QrCode size={16} />,
    color: "#a855f7",
    colorRgb: "168, 85, 247"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="reveal">
      <div className="section-header">
        <span className="section-tag">Featured Work</span>
        <h2 className="section-title">
          Selected <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Demonstrated capability in enterprise compliance platforms, financial systems, AI agricultural applications, and web utilities.
        </p>
      </div>

      <div className="projects-grid" style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
        gap: '2rem'
      }}>
        {PROJECTS.map((proj, idx) => (
          <div 
            key={idx} 
            className="glass-panel project-card"
            style={{
              borderTop: `4px solid ${proj.color}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            {/* Project Content details */}
            <div className="project-content" style={{ padding: '2rem' }}>
              
              {/* Category tag */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 650,
                color: proj.color,
                background: `rgba(${proj.colorRgb}, 0.1)`,
                padding: '0.35rem 0.75rem',
                borderRadius: '8px',
                fontFamily: 'Outfit, sans-serif',
                marginBottom: '1.25rem'
              }}>
                {proj.icon}
                {proj.category}
              </div>

              {/* Title */}
              <h3 className="project-title" style={{ 
                fontSize: '1.45rem', 
                fontWeight: 800, 
                color: '#ffffff',
                marginBottom: '0.75rem',
                lineHeight: 1.2
              }}>
                {proj.title}
              </h3>

              {/* Description */}
              <p className="project-desc" style={{ 
                fontSize: '0.95rem', 
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                lineHeight: 1.6
              }}>
                {proj.description}
              </p>
              
              {/* Features grid */}
              <div className="project-features" style={{ marginBottom: '1.5rem' }}>
                <h5 style={{
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: proj.color,
                  marginBottom: '0.65rem',
                  fontWeight: 700
                }}>
                  Key Features
                </h5>
                <ul className="project-features-list">
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ 
                      marginBottom: '0.35rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)'
                    }}>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stacks tags */}
              <div className="project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {proj.tech.map((techItem, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="project-tech-badge"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 600,
                      color: proj.color
                    }}
                  >
                    {techItem}
                  </span>
                ))}
              </div>

            </div>

            {/* Links action buttons */}
            <div className="project-links" style={{
              padding: '0 2rem 2rem 2rem',
              display: 'flex',
              gap: '1rem',
              marginTop: 'auto'
            }}>
              <a 
                href={proj.github} 
                target="_blank" 
                rel="noreferrer"
                className="secondary-btn"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  padding: '0.6rem 1.2rem',
                  fontSize: '0.88rem',
                  borderRadius: '10px'
                }}
              >
                <Github size={15} />
                <span>Code</span>
              </a>
              <a 
                href={proj.live} 
                target="_blank" 
                rel="noreferrer"
                className="primary-btn"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  padding: '0.6rem 1.2rem',
                  fontSize: '0.88rem',
                  borderRadius: '10px',
                  background: `linear-gradient(135deg, ${proj.color} 0%, var(--bg-tertiary) 100%)`,
                  boxShadow: `0 4px 12px rgba(${proj.colorRgb}, 0.2)`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = proj.color;
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${proj.color} 0%, var(--bg-tertiary) 100%)`;
                }}
              >
                <ExternalLink size={15} />
                <span>Live Demo</span>
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
