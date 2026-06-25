import { 
  Globe, 
  Monitor, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Settings, 
  Cloud 
} from 'lucide-react';

const SERVICES = [
  {
    title: "Full Stack Web Development",
    desc: "End-to-end building of responsive, modern web applications from architectural drafts to live production servers.",
    icon: <Globe size={28} />
  },
  {
    title: "Frontend Development",
    desc: "Creating pixel-perfect, highly responsive interfaces using React.js, Tailwind CSS, and custom vanilla components.",
    icon: <Monitor size={28} />
  },
  {
    title: "Backend API Development",
    desc: "Designing fast, secure RESTful APIs using Python, Flask, and FastAPI with solid authorization principles.",
    icon: <Cpu size={28} />
  },
  {
    title: "Database Design & Optimization",
    desc: "Formulating relational schemas, complex database joins, and trigger controls using PostgreSQL and MySQL.",
    icon: <Database size={28} />
  },
  {
    title: "Compliance & Governance",
    desc: "Integrating PII detection filters, data discovery pipelines, user consent logs, and ensuring DPDP Act compliance.",
    icon: <ShieldCheck size={28} />
  },
  {
    title: "Application Maintenance",
    desc: "Analyzing code bottlenecks, upgrading framework versions, fixing persistent bugs, and optimizing page load speeds.",
    icon: <Settings size={28} />
  },
  {
    title: "Deployment & DevOps Support",
    desc: "Containerizing services via Docker and setting up production deployment processes using automated pipelines.",
    icon: <Cloud size={28} />
  }
];

export default function Services() {
  return (
    <section id="services" className="reveal">
      <div className="section-header">
        <span className="section-tag">Core Offerings</span>
        <h2 className="section-title">
          What I <span className="gradient-text">Provide</span>
        </h2>
        <p className="section-subtitle">
          Highly specialized software services designed for high-availability compliance platforms and web architectures.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((serv, idx) => (
          <div key={idx} className="glass-panel service-card">
            <div className="service-icon-wrapper">
              {serv.icon}
            </div>
            <h3 className="service-title" style={{ color: '#ffffff', fontWeight: 700 }}>
              {serv.title}
            </h3>
            <p className="service-desc" style={{ marginTop: '0.5rem' }}>
              {serv.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
