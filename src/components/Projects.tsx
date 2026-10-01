import React, { useState } from 'react';
import { portfolioData, type Project } from '../data/portfolioData';
import { GithubIcon, ExternalLinkIcon, CloseIcon, CheckIcon } from './Icons';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-container" aria-labelledby="projects-heading">
      <div className="section-header">
        <span className="section-tag">Featured Work</span>
        <h2 id="projects-heading" className="section-title">
          Projects
        </h2>
        <p className="section-subtitle">
          Practical application development demonstrating full-stack problem solving and structured architecture.
        </p>
        <div className="section-divider" aria-hidden="true" />
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card-header">
              <div className="project-badge">{project.status}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-features-preview">
              <h4 className="preview-heading">Key Capabilities:</h4>
              <ul className="features-list">
                {project.features.slice(0, 3).map((feat, i) => (
                  <li key={i}>
                    <CheckIcon size={14} className="feature-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-card-actions">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedProject(project)}
                aria-haspopup="dialog"
              >
                View Details
              </button>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm icon-link"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              ) : (
                <span className="link-placeholder">Code on GitHub</span>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm icon-link"
                >
                  <ExternalLinkIcon size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="project-badge">{selectedProject.status}</span>
                <h3 id="modal-project-title" className="modal-title">
                  {selectedProject.title} — {selectedProject.subtitle}
                </h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
              >
                <CloseIcon size={22} />
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-long-desc">{selectedProject.longDescription}</p>

              <h4 className="modal-subheading">Core Project Features:</h4>
              <ul className="modal-feature-list">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckIcon size={16} className="modal-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h4 className="modal-subheading">Technologies Used:</h4>
              <div className="project-tech-tags">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm icon-link"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>
              )}
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => setSelectedProject(null)}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
