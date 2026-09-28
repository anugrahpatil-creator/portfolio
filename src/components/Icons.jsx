import React from 'react';

export const GithubIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LeetCodeIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.593c.31.034.624.051.937.051a5.93 5.93 0 0 0 4.655-2.227l3.854-4.126 5.406-5.788a1.375 1.375 0 0 0-1.006-2.316h-.002a1.376 1.376 0 0 0-.961.438L14.86 6.782l-3.854 4.126a3.175 3.175 0 0 1-2.49 1.192c-.167 0-.335-.009-.501-.027a3.18 3.18 0 0 1-2.58-1.924 2.96 2.96 0 0 1-.187-.545 2.955 2.955 0 0 1-.033-1.264 2.82 2.82 0 0 1 .647-1.127l3.854-4.126L14.444.438A1.375 1.375 0 0 0 13.483 0zm-2.88 18.118a1.375 1.375 0 0 0-1.375 1.375v1.375a1.375 1.375 0 0 0 2.75 0v-1.375a1.375 1.375 0 0 0-1.375-1.375z" />
  </svg>
);
