import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCapIcon, CheckIcon } from './Icons';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-container" aria-labelledby="education-heading">
      <div className="section-header">
        <span className="section-tag">Academic Background</span>
        <h2 id="education-heading" className="section-title">
          Education
        </h2>
        <p className="section-subtitle">
          My academic learning path, foundational coursework, and technical training.
        </p>
        <div className="section-divider" aria-hidden="true" />
      </div>

      <div className="education-timeline">
        {education.map((item) => (
          <div key={item.id} className="education-card">
            <div className="education-icon-wrapper" aria-hidden="true">
              <GraduationCapIcon size={28} />
            </div>

            <div className="education-details">
              <div className="education-meta">
                <span className="education-status-tag">{item.status}</span>
              </div>

              <h3 className="education-degree">{item.degree}</h3>
              <h4 className="education-field">{item.field}</h4>
              <p className="education-institution">{item.institution}</p>

              <div className="education-highlights">
                <h5 className="highlights-title">Key Academic Highlights & Coursework:</h5>
                <ul className="highlights-list">
                  {item.highlights.map((point, index) => (
                    <li key={index}>
                      <CheckIcon size={14} className="highlight-check" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="education-note">
        <p>
          <em>Note:</em> You can easily customize or update your institution name, degree, or semester
          anytime directly in <code>src/data/portfolioData.ts</code>.
        </p>
      </div>
    </section>
  );
};
