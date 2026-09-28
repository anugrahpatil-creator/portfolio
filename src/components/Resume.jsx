import React, { useState } from 'react';
import { User, Cpu, GraduationCap, FileText, ArrowUpRight, Award, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Resume.css';

export const Resume = () => {
  const [activeTab, setActiveTab] = useState('biography');
  const { resumeTabs } = portfolioData;

  const tabs = [
    { id: 'biography', label: 'BIOGRAPHY', num: '01', icon: User },
    { id: 'skills', label: 'SKILLS', num: '02', icon: Cpu },
    { id: 'education', label: 'EDUCATION', num: '03', icon: GraduationCap }
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-badge">Qualifications & Summary</div>
          <h2 className="section-title">
            My <span className="highlight">Resume</span>
          </h2>
          <p className="section-subtitle">
            An overview of my academic credentials, professional background, and technical competencies.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Tab Navigation Pill */}
        <div className="resume-tabs-container">
          <div className="resume-tabs-pill card-glass">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`resume-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <Icon size={16} className="tab-icon" />
                  <span className="tab-label">{tab.label}</span>
                  <span className="tab-divider">—</span>
                  <span className="tab-num">{tab.num}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="resume-content-panel card-glass">
          {/* Biography Tab */}
          {activeTab === 'biography' && (
            <div className="tab-pane animate-fade">
              <div className="bio-pane-grid">
                <div className="bio-main-info">
                  <h3 className="pane-headline">{resumeTabs.biography.headline}</h3>
                  <p className="pane-summary">{resumeTabs.biography.summary}</p>
                  
                  <div className="bio-points-grid">
                    {resumeTabs.biography.points.map((pt) => (
                      <div key={pt.label} className="bio-point-card">
                        <span className="bio-point-label">{pt.label}</span>
                        <span className="bio-point-value">{pt.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bio-action-card">
                  <div className="bio-action-icon">
                    <FileText size={28} />
                  </div>
                  <h4>Looking to collaborate?</h4>
                  <p>Get in touch directly or view my open-source projects on GitHub.</p>
                  <a
                    href="#contact"
                    className="btn btn-primary bio-contact-btn"
                  >
                    <span>Let's Talk</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="tab-pane animate-fade">
              <div className="skills-pane-wrap">
                <h3 className="pane-headline">Technical Competencies</h3>
                <p className="pane-summary">{resumeTabs.skills.summary}</p>

                <div className="skills-pane-grid">
                  {resumeTabs.skills.categories.map((cat) => (
                    <div key={cat.title} className="skills-pane-card">
                      <h4 className="pane-card-title">{cat.title}</h4>
                      <div className="pane-skills-badges">
                        {cat.items.map((item) => (
                          <span key={item} className="tech-pill">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Education Tab - Real Education Info */}
          {activeTab === 'education' && (
            <div className="tab-pane animate-fade">
              <div className="education-pane-wrap">
                <div className="education-card">
                  <div className="education-card-header">
                    <div className="education-icon-box">
                      <GraduationCap size={28} />
                    </div>
                    <div className="education-title-group">
                      <div className="education-status-tag">{resumeTabs.education.status}</div>
                      <h3 className="education-degree">{resumeTabs.education.degree}</h3>
                      <h4 className="education-college">{resumeTabs.education.institution}</h4>
                    </div>
                  </div>

                  <div className="education-details-body">
                    <p className="education-desc">{resumeTabs.education.description}</p>
                    <div className="education-meta-row">
                      <div className="edu-meta-item">
                        <MapPin size={16} className="edu-meta-icon" />
                        <span>Ichalkaranji, Maharashtra</span>
                      </div>
                      <div className="edu-meta-item">
                        <Award size={16} className="edu-meta-icon" />
                        <span>Artificial Intelligence & Data Science</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
