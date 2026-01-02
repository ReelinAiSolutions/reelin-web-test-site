import React from 'react';

export const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

export const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Abstract Illustrations
export const IllustrationCapture = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-indigo-500/80">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.05 }} />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="80" fill="url(#grad1)" className="animate-pulse-slow" />
    <path d="M100 40 L160 100 L100 160 L40 100 Z" fill="none" stroke="currentColor" strokeWidth="2" className="animate-float" />
    <circle cx="100" cy="40" r="4" fill="currentColor" />
    <circle cx="160" cy="100" r="4" fill="currentColor" />
    <circle cx="100" cy="160" r="4" fill="currentColor" />
    <circle cx="40" cy="100" r="4" fill="currentColor" />
    <path d="M100 70 L130 100 L100 130 L70 100 Z" fill="currentColor" fillOpacity="0.2" className="animate-[spin_10s_linear_infinite]" />
  </svg>
);

export const IllustrationAutomate = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-purple-500/80">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.05 }} />
      </linearGradient>
    </defs>
    <rect x="40" y="40" width="120" height="120" rx="20" fill="url(#grad2)" className="animate-pulse-slow" />
    <path d="M40 100 Q100 20 160 100 T280 100" stroke="currentColor" strokeWidth="3" fill="none" className="animate-[drift_4s_linear_infinite]" strokeDasharray="10 5" />
    <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="2" fill="none" className="animate-[spin_4s_linear_infinite]" />
    <circle cx="100" cy="100" r="10" fill="currentColor" />
  </svg>
);

export const IllustrationUnderstand = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-cyan-500/80">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.05 }} />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="70" fill="url(#grad3)" />
    <path d="M60 140 L80 100 L110 120 L150 60" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" className="animate-float" />
    <circle cx="60" cy="140" r="5" fill="white" />
    <circle cx="80" cy="100" r="5" fill="white" />
    <circle cx="110" cy="120" r="5" fill="white" />
    <circle cx="150" cy="60" r="5" fill="white" />
    <rect x="130" y="50" width="40" height="20" rx="4" fill="currentColor" className="animate-pulse" />
  </svg>
);