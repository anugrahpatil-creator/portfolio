import React from 'react';
import { Code, Cpu, Globe, Wrench, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const getCategoryIcon = (category) => {
  if (category.includes('Programming')) return <Code size={20} />;
  if (category.includes('AI')) return <Cpu size={20} />;
  if (category.includes('Web')) return <Globe size={20} />;
  return <Wrench size={20} />;
};

export const Skills = () => {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-badge">Technical Stack</div>
          <h2 className="section-title">
            My <span className="highlight">Skills</span>
          </h2>
          <p className="section-subtitle">
            Core technologies and tools I utilize to build full-stack systems and explore intelligent algorithms.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-category-grid">
          {skillCategories.map((group) => (
            <div key={group.category} className="skill-category-card card-glass">
              <div className="category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="category-title">{group.category}</h3>
              </div>

              <div className="skills-badge-list">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`skill-item-badge ${skill.highlight ? 'highlighted' : ''}`}
                  >
                    <Check size={14} className="skill-check-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
