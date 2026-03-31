import { useRef, useEffect, useState } from 'react';
import profilePic from '../styles/profilePicture.jpeg';

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className={`fade-in${visible ? ' visible' : ''}`} ref={ref}>
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">A little bit about who I am</p>
          </div>

          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="about-image-glow" />
              <img src={profilePic} alt="Yaniv Suriyano" className="about-image" />
            </div>

            <div className="about-text">
              <p>
                Hi! I'm Yaniv, a Full Stack Developer who genuinely loves coding.
                I'm passionate about learning new technologies, exploring better ways
                to build software, and constantly improving my skills.
              </p>
              <p>
                I enjoy solving problems, creating clean and efficient solutions, and
                growing both professionally and personally. Always excited about new
                challenges and opportunities where I can contribute and keep evolving
                as an engineer.
              </p>
              <p>
                Currently working as a Fullstack Developer at{' '}
                <strong style={{ color: 'var(--primary)' }}>At-Bay</strong>, building
                scalable web applications with React, TypeScript, Python (Flask), and more.
              </p>

              <div className="about-info-grid">
                <div className="about-info-item">
                  <div className="about-info-label">Email</div>
                  <a href="mailto:yanivsu@gmail.com" className="about-info-value">
                    yanivsu@gmail.com
                  </a>
                </div>
                <div className="about-info-item">
                  <div className="about-info-label">Phone</div>
                  <div className="about-info-value">052-4244778</div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-label">Education</div>
                  <div className="about-info-value">B.Sc Software Engineering</div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-label">Languages</div>
                  <div className="about-info-value">Hebrew, English</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
