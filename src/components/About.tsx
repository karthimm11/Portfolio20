import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CodeIcon, LayersIcon, SparklesIcon } from './Icons';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CodeIcon size={24} />;
      case 1:
        return <LayersIcon size={24} />;
      case 2:
      default:
        return <SparklesIcon size={24} />;
    }
  };

  return (
    <section id="about" className="section-container" aria-labelledby="about-heading">
      <div className="section-header">
        <span className="section-tag">Get to know me</span>
        <h2 id="about-heading" className="section-title">
          About Me
        </h2>
        <div className="section-divider" aria-hidden="true" />
      </div>

      <div className="about-content">
        <div className="about-narrative">
          <p>
            Hello! I am <strong>{personal.name}</strong>, a college student with a keen
            interest in software development. My journey started with learning core
            computer programming languages like C, C++, and Java, which taught me the
            fundamentals of logic and structured thinking.
          </p>
          <p>
            As I progressed, I became fascinated by web technologies and full-stack
            development. I have been actively building practical applications, exploring
            the React.js ecosystem, and strengthening my problem-solving abilities.
          </p>
          <p>
            I believe in hands-on learning, writing clean and readable code, and staying
            curious about modern technologies. As a beginner-to-intermediate learner, I am
            dedicated to continuously improving my skills through coursework, personal
            projects, and coding practice.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="about-cards-grid">
          {personal.aboutDetails.map((detail, idx) => (
            <div key={detail.title} className="about-card">
              <div className="about-card-icon" aria-hidden="true">
                {getFeatureIcon(idx)}
              </div>
              <h3 className="about-card-title">{detail.title}</h3>
              <p className="about-card-desc">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
