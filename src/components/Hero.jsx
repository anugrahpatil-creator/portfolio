import React from 'react';
import { ArrowRight, Mail, Sparkles, Terminal, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

export const Hero = () => {
  const { personal, social } = portfolioData;

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Decorative Tag */}
      <div className="hero-decor-tag">DEVELOPER</div>
      
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <Sparkles size={14} className="badge-icon" />
            <span>Welcome to my portfolio</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>{' '}
            <span className="hero-name-highlight">{personal.name}</span>
          </h1>

          <div className="hero-roles">
            <h2 className="hero-primary-role">{personal.role}</h2>
            <div className="role-separator">|</div>
            <span className="hero-secondary-role">{personal.secondaryRole}</span>
          </div>

          <p className="hero-description">
            {personal.bioShort}
          </p>

          <div className="hero-cta-group">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="btn btn-primary hero-btn"
            >
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn btn-secondary hero-btn"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Icons row with LeetCode */}
          <div className="hero-social-row">
            <span className="social-label">Connect:</span>
            <div className="hero-social-links">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={19} />
              </a>
              <a
                href={social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LeetCode Profile"
                title="LeetCode"
              >
                <LeetCodeIcon size={19} />
              </a>
              <a
                href={social.email}
                className="social-icon-btn"
                aria-label="Send Email"
                title="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Photo & Visual Card */}
        <div className="hero-visual-wrapper">
          <div className="hero-image-frame-wrap">
            {/* Glowing outer frame lines */}
            <div className="frame-border-glow"></div>
            <div className="frame-tech-accent-top"></div>
            
            {/* Floating Developer Badge */}
            <div className="floating-stat-badge">
              <div className="stat-badge-icon">
                <Terminal size={16} />
              </div>
              <div className="stat-badge-text">
                <span className="stat-badge-title">Full Stack + AI</span>
                <span className="stat-badge-sub">Ready to Build</span>
              </div>
            </div>

            {/* Profile Image Container */}
            <div className="hero-image-card">
              <img
                src={personal.profileImage}
                alt={`${personal.name} - Full Stack Developer and AI/ML Enthusiast`}
                className="hero-profile-img"
                loading="eager"
              />
              <div className="hero-img-gradient-overlay"></div>
            </div>

            {/* Floating Secondary Mini Card */}
            <div className="floating-tech-card">
              <Layers size={16} className="tech-badge-icon" />
              <span>Python • Flask • ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
