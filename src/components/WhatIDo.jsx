import React from 'react';
import { Layers, Code2, Cpu, BrainCircuit, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './WhatIDo.css';

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'Layers':
      return <Layers size={26} />;
    case 'Code2':
      return <Code2 size={26} />;
    case 'Cpu':
      return <Cpu size={26} />;
    case 'BrainCircuit':
      return <BrainCircuit size={26} />;
    case 'Sparkles':
      return <Sparkles size={26} />;
    case 'Terminal':
      return <Terminal size={26} />;
    default:
      return <Code2 size={26} />;
  }
};

export const WhatIDo = () => {
  const { services } = portfolioData;

  return (
    <section id="services" className="whatido-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-badge">Capabilities</div>
          <h2 className="section-title">
            What <span className="highlight">I Do</span>
          </h2>
          <p className="section-subtitle">
            Specialized engineering focused on high-performance web applications, machine learning architectures, and scalable software solutions.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* 6 Cards Grid inspired directly by the reference screenshot */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card card-glass">
              <div className="service-card-header">
                <div className="service-icon-wrap">
                  {getServiceIcon(service.icon)}
                </div>
                <span className="service-number">0{service.id.replace(/^0+/, '')}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-card-accent-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
