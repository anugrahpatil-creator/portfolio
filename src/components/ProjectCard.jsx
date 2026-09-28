import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card card-glass">
      {/* Thumbnail Container */}
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={`${project.name} preview thumbnail`}
          className="project-image"
          loading="lazy"
        />
        <div className="project-image-overlay"></div>
        <div className="project-category-badge">{project.category}</div>
      </div>

      {/* Card Content */}
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.name}</h3>
        </div>

        <p className="project-description">{project.description}</p>

        {/* Technology Badges */}
        <div className="project-tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Action: Only GitHub (No fake live demo button) */}
        <div className="project-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary project-github-btn"
            aria-label={`View ${project.name} on GitHub`}
          >
            <GithubIcon size={16} />
            <span>View on GitHub</span>
            <ArrowRight size={14} className="btn-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};
