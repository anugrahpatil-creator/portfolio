import React from 'react';
import { ProjectCard } from './ProjectCard';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

export const Projects = () => {
  const { projects, social } = portfolioData;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-badge">Featured Work</div>
          <h2 className="section-title">
            My <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            Practical software systems, explainable machine learning models, and full-stack platforms I've engineered.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="projects-footer-cta card-glass">
          <div className="footer-cta-text">
            <h3>Explore more repositories</h3>
            <p>Check out my latest code experiments and open-source activities on GitHub.</p>
          </div>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <GithubIcon size={18} />
            <span>Visit My GitHub Profile</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
