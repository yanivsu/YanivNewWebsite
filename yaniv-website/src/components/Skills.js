import { useRef, useEffect, useState } from 'react';

const skills = [
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'NestJS', icon: '🔺' },
  { name: 'Python', icon: '🐍' },
  { name: 'Flask', icon: '🌐' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Kafka', icon: '📨' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'Redux', icon: '🔄' },
  { name: 'Celery', icon: '⚙️' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '📦' },
  { name: 'Agile', icon: '🚀' },
];

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div className={`fade-in${visible ? ' visible' : ''}`} ref={ref}>
          <div className="section-header">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">Technologies I work with on a daily basis</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
