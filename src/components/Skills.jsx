import { Layout, Server, Database, Terminal, Cpu } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: <Layout size={24} />,
    color: "#6366f1",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Next.js"]
  },
  {
    title: "Backend Engineering",
    icon: <Server size={24} />,
    color: "#a855f7",
    skills: ["Python", "FastAPI", "Flask", "Node.js", "REST APIs", "Express.js"]
  },
  {
    title: "Database Systems",
    icon: <Database size={24} />,
    color: "#06b6d4",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal size={24} />,
    color: "#10b981",
    skills: ["Docker", "Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify"]
  },
  {
    title: "AI & Emerging Tech",
    icon: <Cpu size={24} />,
    color: "#f59e0b",
    skills: ["OpenAI API", "ChromaDB", "RAG Systems", "LLM Integrations", "Machine Learning"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="reveal">
      <div className="section-header">
        <span className="section-tag">Technical Competencies</span>
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">
          Full stack programming languages, frameworks, operations, and AI intelligence toolkits.
        </p>
      </div>

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div 
            key={idx} 
            className="glass-panel skill-category-card"
            style={{
              borderTop: `3px solid ${cat.color}`
            }}
          >
            <div className="skill-category-header" style={{ color: cat.color }}>
              {cat.icon}
              <h3 className="skill-category-title">{cat.title}</h3>
            </div>
            
            <div className="skills-tags-container">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-badge">
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: cat.color,
                    display: 'inline-block'
                  }} />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
