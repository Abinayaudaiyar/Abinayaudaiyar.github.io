import { useEffect, useState, useRef } from 'react';

const STATS_ITEMS = [
  { target: 10, suffix: "+", label: "Modules Developed" },
  { target: 20, suffix: "+", label: "APIs Developed" },
  { target: 100, suffix: "+", label: "Database Objects Managed" },
  { target: 2, suffix: "+", label: "Enterprise Projects" }
];

export default function Stats() {
  const [counts, setCounts] = useState(STATS_ITEMS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  function animateCounters() {
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const updateCounts = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const nextCounts = STATS_ITEMS.map((item) => {
        return Math.floor(easeProgress * item.target);
      });

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        // Ensure final state exactly matches target numbers
        setCounts(STATS_ITEMS.map((item) => item.target));
      }
    };

    requestAnimationFrame(updateCounts);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="stats" ref={sectionRef} className="reveal" style={{ padding: '4rem 2rem' }}>
      <div className="glass-panel" style={{
        padding: '3rem 2rem',
        borderRadius: '24px'
      }}>
        <div className="stats-container">
          {STATS_ITEMS.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">
                {counts[idx]}
                {stat.suffix}
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
