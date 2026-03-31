import { useRef, useEffect, useState } from 'react';

const experiences = [
  {
    date: '2024 — Present',
    company: 'At-Bay · Azrieli Sarona Tower, Tel Aviv',
    role: 'Fullstack Developer',
    description:
      'Design, develop, and maintain scalable web applications across the entire stack. Build high-quality user interfaces using React and TypeScript, implement robust backend services with Python (Flask), and design RESTful APIs. Work with both relational and NoSQL databases and manage asynchronous workflows using Celery within an Agile environment.',
    tags: ['React', 'TypeScript', 'Python', 'Flask', 'REST APIs', 'Celery', 'Agile'],
  },
  {
    date: '2022 — 2024',
    company: 'Skysoft Solutions LTD · Yokneam',
    role: 'Team Lead FullStack Developer',
    description:
      'Combined responsibilities of a Senior Full-Stack Developer with leadership duties. Created and managed tasks for the team, ensuring alignment with project goals and individual skill sets. Actively supported team members, provided guidance, and fostered an environment that encourages collaboration and continuous learning.',
    tags: ['Leadership', 'React', 'NestJS', 'MongoDB', 'Team Management'],
  },
  {
    date: '2021 — 2022',
    company: 'Skysoft Solutions LTD · Yokneam',
    role: 'Senior Fullstack Developer',
    description:
      'Demonstrated proficiency in leveraging React to create responsive and intuitive user interfaces. Specialized in utilizing NestJS to develop scalable and maintainable server-side applications. MongoDB served as the primary database solution for efficient data storage and retrieval.',
    tags: ['React', 'NestJS', 'MongoDB', 'Node.js'],
  },
  {
    date: '2020 — 2021',
    company: 'Skysoft Solutions LTD · Yokneam',
    role: 'Fullstack Developer',
    description:
      'Designed and developed a robust drone control system using Node.js, React, MongoDB, and Redux. Implemented real-time communication protocols in Node.js for seamless drone-server interaction. Integrated Redux for streamlined state management, enhancing overall system reliability.',
    tags: ['Node.js', 'React', 'MongoDB', 'Redux', 'Real-time'],
  },
];

export default function Experience() {
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
    <section id="experience" className="experience">
      <div className="container">
        <div className={`fade-in${visible ? ' visible' : ''}`} ref={ref}>
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">My professional journey over the years</p>
          </div>

          <div className="timeline">
            {experiences.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <p className="timeline-date">{exp.date}</p>
                <p className="timeline-company">{exp.company}</p>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
