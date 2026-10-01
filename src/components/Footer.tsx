import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon, CodeIcon } from './Icons';

export const Footer: React.FC = () => {
  const { personal, contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container" aria-label="Site Footer">
      <div className="footer-content">
        <div className="footer-brand">
          <button
            type="button"
            className="footer-logo-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <CodeIcon size={20} />
            <span>{personal.name}</span>
          </button>
          <p className="footer-tagline">
            Aspiring Software Developer & Student Learner
          </p>
        </div>

        <div className="footer-social-icons">
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-icon-link"
            >
              <LinkedinIcon size={18} />
            </a>
          )}
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-icon-link"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="footer-icon-link"
            >
              <MailIcon size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <p className="tech-credit">
          Built with React & Vite
        </p>
      </div>
    </footer>
  );
};
