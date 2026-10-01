import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon, SparklesIcon, CodeIcon } from './Icons';

export const Hero: React.FC = () => {
  const { personal, contact } = portfolioData;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="hero-container">
        {/* Left Column: Intro Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <SparklesIcon size={16} className="badge-sparkle" />
            <span>{personal.status}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight-name">{personal.name}</span>
          </h1>

          <p className="hero-headline">{personal.title}</p>

          <p className="hero-bio">{personal.bio}</p>

          {/* Call-to-Action Buttons */}
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleScrollTo('projects')}
            >
              View Projects
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => handleScrollTo('contact')}
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-social-links" aria-label="Social Profiles">
            <span className="social-label">Connect:</span>
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn profile of Karthik K S"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            )}
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub profile of Karthik K S"
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="social-icon-btn"
                aria-label="Send email to Karthik K S"
                title="Email Karthik"
              >
                <MailIcon size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Visual Developer Card */}
        <div className="hero-visual" aria-hidden="true">
          <div className="avatar-card">
            <div className="avatar-glow"></div>
            <div className="avatar-inner">
              <div className="avatar-circle">
                <span className="avatar-initials">KS</span>
              </div>
              <div className="avatar-info">
                <h3 className="avatar-name">Karthik K S</h3>
                <p className="avatar-role">Student & Developer</p>
              </div>

              <div className="avatar-tech-tags">
                <span className="tag">
                  <CodeIcon size={14} /> C / Java
                </span>
                <span className="tag">React.js</span>
                <span className="tag">Problem Solving</span>
              </div>

              <div className="avatar-status-pill">
                <span className="status-dot"></span>
                <span>Ready for new learning challenges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
