export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">👋 Available for opportunities</span>

          <h1 className="hero-name">Yaniv Suriyano</h1>
          <h2 className="hero-title">Full Stack Developer</h2>

          <p className="hero-description">
            Passionate software engineer with 6+ years of experience building scalable
            web applications. I love clean code, great user experiences, and turning
            complex problems into elegant solutions.
          </p>

          <div className="hero-buttons">
            <a href="#experience" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-number">6+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div>
              <div className="hero-stat-number">4</div>
              <div className="hero-stat-label">Companies</div>
            </div>
            <div>
              <div className="hero-stat-number">10+</div>
              <div className="hero-stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-indicator">
        Scroll down
        <div className="scroll-arrow" />
      </a>
    </section>
  );
}
