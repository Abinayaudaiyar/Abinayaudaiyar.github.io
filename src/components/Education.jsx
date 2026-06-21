import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
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
        <GraduationCap size={24} style={{ color: 'var(--color-primary)' }} />
        Education
      </h3>

      <div className="glass-panel education-card" style={{ flexGrow: 1 }}>
        <div className="education-header">
          <h4 className="education-degree">
            Bachelor of Technology
            <span style={{ display: 'block', fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Artificial Intelligence & Data Science
            </span>
          </h4>
          <div className="education-gpa">
            CGPA: 8.42
          </div>
        </div>

        <h5 className="education-college">
          Sri Shanmugha College of Engineering & Technology
        </h5>

        <ul className="education-details">
          <li style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            <Calendar size={16} style={{ color: 'var(--color-secondary)' }} />
            <span>Graduation Period: 2021 – 2025</span>
          </li>
          <li style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            <BookOpen size={16} style={{ color: 'var(--color-secondary)' }} />
            <span>Specializations: Machine Learning, SQL Databases, Data Structures</span>
          </li>
          <li style={{ color: 'var(--text-muted)' }}>
            <Award size={16} style={{ color: 'var(--color-secondary)' }} />
            <span>Completed hands-on projects in AI prediction systems and agritech portals</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
