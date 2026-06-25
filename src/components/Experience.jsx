import { Calendar } from 'lucide-react';

const EXPERIENCES = [
  {
    company: "Certain Systems Limited",
    role: "Full Stack Developer",
    duration: "Apr 2026 – Present",
    side: "left",
    bullets: [
      "Developed PII Governance & Compliance Platform",
      "Built Data Discovery workflows & Data Classification modules",
      "Implemented Interactive Data Lineage visualizations & User Data Footprint mapping",
      "Developed DSAR (Data Subject Access Rights) workflows & Archive Retrieval mechanisms",
      "Implemented secure Role-Based Access Control (RBAC) frameworks",
      "Integrated robust PostgreSQL persistence and database optimization logic",
      "Dockerized complex microservice applications for containerized orchestration",
      "Developed frontend React components and robust Python FastAPI/Flask backend modules"
    ]
  },
  {
    company: "In22 Labs",
    role: "CRM Developer Intern",
    duration: "Dec 2023 – May 2024",
    side: "right",
    bullets: [
      "Contributed to enterprise CRM application frontend and backend enhancements",
      "Optimized operational workflows resulting in faster CRM dashboard loads",
      "Identified, resolved, and documented key platform bugs and structural issues",
      "Supported core team in writing database queries and integration tests"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="section-header">
        <span className="section-tag">Professional Timeline</span>
        <h2 className="section-title">
          My <span className="gradient-text">Journey</span>
        </h2>
        <p className="section-subtitle">
          Building and maintaining web platforms, databases, and enterprise data security solutions.
        </p>
      </div>

      <div className="timeline">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className={`timeline-item ${exp.side}`}>
            <div className="timeline-card">
              <span className="timeline-date">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={14} />
                  {exp.duration}
                </span>
              </span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <ul className="timeline-desc">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} style={{ margin: '0.65rem 0', color: 'var(--text-muted)' }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
