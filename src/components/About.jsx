import React from 'react';
import { Layers, BrainCircuit, Terminal, Code2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

const getHighlightIcon = (title) => {
  if (title.includes('Full Stack')) return <Layers size={22} />;
  if (title.includes('AI')) return <BrainCircuit size={22} />;
  if (title.includes('Problem')) return <Terminal size={22} />;
  return <Code2 size={22} />;
};

export const About = () => {
  const { personal, aboutHighlights } = portfolioData;

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-badge">Get To Know Me</div>
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* About Intro Box */}
        <div className="about-intro-card card-glass">
          <div className="about-intro-header">
            <div className="about-avatar-mini">
              <img src={personal.profileImage} alt={personal.name} />
            </div>
            <div>
              <h3 className="about-intro-title">{personal.name}</h3>
              <p className="about-intro-subtitle">{personal.title}</p>
            </div>
          </div>
          <p className="about-intro-text">
            {personal.aboutDetailed}
          </p>
          <div className="about-key-traits">
            <div className="trait-item">
              <CheckCircle2 size={16} className="trait-check" />
              <span>Full-Stack & Systems Architecture</span>
            </div>
            <div className="trait-item">
              <CheckCircle2 size={16} className="trait-check" />
              <span>Practical Machine Learning & AI</span>
            </div>
            <div className="trait-item">
              <CheckCircle2 size={16} className="trait-check" />
              <span>Algorithmic Thinking & Clean Code</span>
            </div>
          </div>
        </div>

        {/* 4 Highlight Cards */}
        <div className="about-highlights-grid">
          {aboutHighlights.map((item) => (
            <div key={item.id} className="highlight-card card-glass">
              <div className="highlight-card-top">
                <div className="highlight-icon-box">
                  {getHighlightIcon(item.title)}
                </div>
                <span className="highlight-index">{item.id}</span>
              </div>
              <h4 className="highlight-title">{item.title}</h4>
              <p className="highlight-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
