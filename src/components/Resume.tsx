import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { DownloadIcon, ExternalLinkIcon, CloseIcon, CheckIcon } from './Icons';

export const Resume: React.FC = () => {
  const { resume, personal } = portfolioData;
  const [showInfoModal, setShowInfoModal] = useState(false);

  const handleResumeAction = () => {
    if (resume.exists) {
      window.open(resume.filePath, '_blank');
    } else {
      setShowInfoModal(true);
    }
  };

  return (
    <section id="resume" className="section-container" aria-labelledby="resume-heading">
      <div className="section-header">
        <span className="section-tag">Curriculum Vitae</span>
        <h2 id="resume-heading" className="section-title">
          Resume
        </h2>
        <p className="section-subtitle">
          Summary of my technical skills, coursework, and project profile.
        </p>
        <div className="section-divider" aria-hidden="true" />
      </div>

      <div className="resume-box">
        <div className="resume-overview">
          <div className="resume-badge">Student Profile</div>
          <h3 className="resume-title">{personal.name}</h3>
          <p className="resume-role">{personal.title}</p>

          <p className="resume-description">
            A comprehensive summary of my academic journey, core programming fundamentals
            (C, Java, JavaScript), web development training, and hands-on projects like AppliTrack.
          </p>

          <div className="resume-highlights-grid">
            <div className="resume-point">
              <CheckIcon size={16} className="point-icon" />
              <span>Core Programming (C, C++, Java)</span>
            </div>
            <div className="resume-point">
              <CheckIcon size={16} className="point-icon" />
              <span>Full-Stack Development (React, Node, Express, MongoDB)</span>
            </div>
            <div className="resume-point">
              <CheckIcon size={16} className="point-icon" />
              <span>Version Control & Git Workflow</span>
            </div>
            <div className="resume-point">
              <CheckIcon size={16} className="point-icon" />
              <span>Problem Solving & Algorithmic Practice</span>
            </div>
          </div>

          <div className="resume-actions">
            {resume.exists ? (
              <>
                <a
                  href={resume.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary icon-link"
                >
                  <ExternalLinkIcon size={18} />
                  <span>View Resume</span>
                </a>
                <a
                  href={resume.filePath}
                  download={resume.fileName}
                  className="btn btn-outline icon-link"
                >
                  <DownloadIcon size={18} />
                  <span>Download PDF</span>
                </a>
              </>
            ) : (
              <button
                type="button"
                className="btn btn-primary icon-link"
                onClick={handleResumeAction}
              >
                <DownloadIcon size={18} />
                <span>Download Resume (PDF)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Info Modal when resume file is pending */}
      {showInfoModal && (
        <div
          className="modal-backdrop"
          onClick={() => setShowInfoModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 id="resume-modal-title" className="modal-title">
                Resume File Setup
              </h3>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowInfoModal(false)}
                aria-label="Close modal"
              >
                <CloseIcon size={22} />
              </button>
            </div>
            <div className="modal-body">
              <p>
                To enable direct viewing and downloading of your resume:
              </p>
              <ol className="modal-steps-list">
                <li>
                  Place your PDF resume into the project's <code>public/</code> folder named{' '}
                  <strong>resume.pdf</strong>.
                </li>
                <li>
                  In <code>src/data/portfolioData.ts</code>, update <code>resume.exists</code> to{' '}
                  <strong>true</strong>.
                </li>
              </ol>
              <p className="modal-note-text">
                Your portfolio will automatically link your PDF and make it instantly downloadable by visitors!
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => setShowInfoModal(false)}
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
