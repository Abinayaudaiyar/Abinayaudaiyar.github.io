import React from 'react';
import { 
  ShieldCheck, 
  Workflow, 
  Layers, 
  Share2, 
  FileText, 
  Lock 
} from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: "Developed DPDP-Compliant PII Governance Platform",
    desc: "Architected core features allowing clients to conform to Digital Personal Data Protection mandates automatically.",
    icon: <ShieldCheck size={20} />,
    color: "#10b981"
  },
  {
    title: "Built End-to-End Compliance Workflows",
    desc: "Engineered automatic workflows to request, log, authorize, and audit sensitive data requests securely.",
    icon: <Workflow size={20} />,
    color: "#6366f1"
  },
  {
    title: "Implemented Data Discovery & Classification",
    desc: "Designed algorithms that scan PostgreSQL and MySQL tables to auto-tag and classify customer identity fields.",
    icon: <Layers size={20} />,
    color: "#06b6d4"
  },
  {
    title: "Developed Interactive Data Lineage Visualizations",
    desc: "Built graph nodes displaying sources, transformations, and end locations of data assets.",
    icon: <Share2 size={20} />,
    color: "#a855f7"
  },
  {
    title: "Integrated PostgreSQL Compliance Reporting",
    desc: "Created query builders that aggregate security actions into exportable audits and compliance reports.",
    icon: <FileText size={20} />,
    color: "#f59e0b"
  },
  {
    title: "Built Secure Role-Based Access Control Systems",
    desc: "Constructed authorization gates preventing unauthorized team members from accessing restricted compliance reports.",
    icon: <Lock size={20} />,
    color: "#ef4444"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="reveal">
      <div className="section-header">
        <span className="section-tag">Key Milestones</span>
        <h2 className="section-title">
          Engineering <span className="gradient-text">Achievements</span>
        </h2>
        <p className="section-subtitle">
          Key solutions and performance contributions engineered for enterprise governance frameworks.
        </p>
      </div>

      <div className="achievements-grid">
        {ACHIEVEMENTS.map((ach, idx) => (
          <div key={idx} className="glass-panel achievement-card">
            <div 
              className="achievement-bullet"
              style={{
                background: `rgba(${ach.color === '#10b981' ? '16, 185, 129' : ach.color === '#6366f1' ? '99, 102, 241' : ach.color === '#06b6d4' ? '6, 182, 212' : ach.color === '#a855f7' ? '168, 85, 247' : ach.color === '#f59e0b' ? '245, 158, 11' : '239, 68, 68'}, 0.1)`,
                borderColor: ach.color,
                color: ach.color
              }}
            >
              {ach.icon}
            </div>
            
            <div className="achievement-content">
              <h4 style={{ fontWeight: 700, lineHeight: 1.4 }}>
                {ach.title}
              </h4>
              <p style={{ marginTop: '0.4rem', lineHeight: 1.5 }}>
                {ach.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
