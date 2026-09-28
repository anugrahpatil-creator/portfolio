import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

export const Footer = () => {
  const { personal, social } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-branding">
            <h3 className="footer-name">{personal.name}</h3>
            <p className="footer-title">{personal.title}</p>
          </div>

          <div className="footer-socials">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LeetCode Profile"
              title="LeetCode"
            >
              <LeetCodeIcon size={18} />
            </a>
            <a
              href={social.email}
              className="footer-social-link"
              aria-label="Send Email"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="scroll-to-top-btn"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-bottom">
          <p>© 2026 {personal.name}. All rights reserved.</p>
          <p className="footer-tech-note">Engineered with React & Modern Web Standards</p>
        </div>
      </div>
    </footer>
  );
};
