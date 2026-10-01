import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckIcon } from './Icons';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-container" aria-labelledby="skills-heading">
      <div className="section-header">
        <span className="section-tag">Technical Proficiency</span>
        <h2 id="skills-heading" className="section-title">
          My Skills
        </h2>
        <p className="section-subtitle">
          Technologies and foundational tools I have learned and actively use in my studies and projects.
        </p>
        <div className="section-divider" aria-hidden="true" />
      </div>

      <div className="skills-grid">
        {skills.map((category) => (
          <div key={category.title} className="skill-category-card">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">
                      <span className="skill-bullet" aria-hidden="true">
                        <CheckIcon size={14} />
                      </span>
                      {skill.name}
                    </span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-note">
        <p>
          <em>Note:</em> As a student learner, I focus on strong conceptual understanding,
          consistent coding practice, and applying these technologies to real-world tasks.
        </p>
      </div>
    </section>
  );
};
