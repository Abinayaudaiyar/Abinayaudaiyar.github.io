import React from 'react';
import { Shield, Database, Layout, BrainCircuit } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="section-header">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">
          Engineering Secure & <span className="gradient-text">Compliant</span> Systems
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'start'
      }} className="about-grid">
        
        {/* Left Column: Narrative bio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            lineHeight: 1.3,
            color: '#ffffff'
          }}>
            Bridging the gap between robust software engineering and complex compliance frameworks.
          </h3>
          
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.05rem',
            lineHeight: 1.7
          }}>
            I am a <strong style={{ color: '#ffffff' }}>Full Stack Developer</strong> with experience in building secure, scalable, and enterprise-grade web applications using React.js, Python, Flask, FastAPI, PostgreSQL, and Docker.
          </p>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.05rem',
            lineHeight: 1.7
          }}>
            Currently, my work focuses primarily on <span className="gradient-text-alt" style={{ fontWeight: 600 }}>PII Governance & Compliance</span> solutions. I build applications centered around critical data requirements such as Data Discovery, Data Classification, Data Lineage visualization, User Data Footprint Mapping, DSAR (Data Subject Access Rights) workflows, Archive Retrieval, and compliance with the <strong style={{ color: '#ffffff' }}>DPDP Act</strong>.
          </p>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.05rem',
            lineHeight: 1.7
          }}>
            I thrive on translating complex legislative and corporate requirements into secure, performant software. I enjoy solving real-world business challenges, optimizing database queries, and continuously learning emerging artificial intelligence and cloud architectures.
          </p>
        </div>

        {/* Right Column: Focus Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem'
        }} className="pillars-grid">
          
          {/* Pillar 1 */}
          <div className="glass-panel" style={{
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderRadius: '16px'
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'rgba(99, 102, 241, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)'
            }}>
              <Shield size={20} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
              PII Governance
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Expertise in securing sensitive user data mapping footprints and ensuring DPDP Compliance.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="glass-panel" style={{
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderRadius: '16px'
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'rgba(6, 182, 212, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-secondary)'
            }}>
              <Database size={20} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
              Data Pipelines
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Designing data discovery, lineage diagrams, classifications, and indexing in PostgreSQL.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="glass-panel" style={{
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderRadius: '16px'
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'rgba(168, 85, 247, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-accent)'
            }}>
              <Layout size={20} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
              React Engineering
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Crafting premium dynamic dashboards with interactive panels and fluid animations.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="glass-panel" style={{
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderRadius: '16px'
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981'
            }}>
              <BrainCircuit size={20} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
              Emerging AI
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Integrating OpenAI, ChromaDB, and Retrieval-Augmented Generation workflows.
            </p>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 480px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}
