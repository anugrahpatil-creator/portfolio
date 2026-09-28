import React, { useState } from 'react';
import { Mail, ArrowUpRight, Send, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const getContactIcon = (iconName) => {
  switch (iconName) {
    case 'Github':
      return <GithubIcon size={28} />;
    case 'Linkedin':
      return <LinkedinIcon size={28} />;
    case 'LeetCode':
      return <LeetCodeIcon size={28} />;
    case 'Mail':
      return <Mail size={28} />;
    default:
      return <Mail size={28} />;
  }
};

export const Contact = () => {
  const { contactCards, personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <p className="section-subtitle">
            I'm always interested in learning, building meaningful projects, collaborating on interesting ideas, and connecting with other developers.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* 4 Main Contact Cards */}
        <div className="contact-cards-grid">
          {contactCards.map((card) => {
            const isEmail = card.id === 'email';
            return (
              <div key={card.id} className="contact-card card-glass">
                <div className="contact-icon-box">
                  {getContactIcon(card.icon)}
                </div>
                <h3 className="contact-platform">{card.platform}</h3>
                <span className="contact-handle">{card.handle}</span>
                <p className="contact-tagline">{card.tagline}</p>
                <div className="contact-btn-wrap">
                  <a
                    href={card.url}
                    target={isEmail ? '_self' : '_blank'}
                    rel={isEmail ? '' : 'noopener noreferrer'}
                    className="btn btn-primary contact-action-btn"
                  >
                    <span>{card.actionLabel}</span>
                    <ArrowUpRight size={16} />
                  </a>
                  {isEmail && (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="btn btn-secondary contact-copy-btn"
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check size={16} /> : <span style={{ fontSize: '0.8rem' }}>Copy</span>}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Message Dispatch Form */}
        <div className="contact-form-container card-glass">
          <div className="contact-form-header">
            <h3>Send a Direct Message</h3>
            <p>Fill out the form below to open your default email client pre-filled with your message.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="sender-name">Your Name</label>
                <input
                  type="text"
                  id="sender-name"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sender-email">Your Email</label>
                <input
                  type="email"
                  id="sender-email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message-subject">Subject</label>
              <input
                type="text"
                id="message-subject"
                required
                placeholder="Project discussion / Opportunity"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message-body">Message</label>
              <textarea
                id="message-body"
                required
                rows={4}
                placeholder="Hello Anugrah, I would like to discuss..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary contact-submit-btn">
              <Send size={18} />
              <span>Compose Email Directly</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
