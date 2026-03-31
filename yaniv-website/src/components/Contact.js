import { useRef, useEffect, useState } from 'react';

const contactItems = [
  {
    icon: '📧',
    label: 'Email',
    value: 'yanivsu@gmail.com',
    href: 'mailto:yanivsu@gmail.com',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '052-4244778',
    href: 'tel:0524244778',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Israel',
    href: null,
  },
  {
    icon: '🎓',
    label: 'Education',
    value: 'B.Sc Software Engineering · Ort Braude College',
    href: null,
  },
];

export default function Contact() {
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
    <section id="contact">
      <div className="container">
        <div className={`fade-in${visible ? ' visible' : ''}`} ref={ref}>
          <div className="section-header">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">I'd love to hear from you</p>
          </div>

          <div className="contact-grid">
            <div className="contact-items">
              {contactItems.map((item) => (
                <div key={item.label} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <p className="contact-detail-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="contact-detail-value">
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact-detail-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-card">
              <h3>Let's work together</h3>
              <p>
                I'm currently open to new opportunities. Whether you have a project
                in mind, a role to fill, or just want to say hi — my inbox is always open!
              </p>
              <a href="mailto:yanivsu@gmail.com" className="btn btn-primary">
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
