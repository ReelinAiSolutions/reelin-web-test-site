import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, NAV_LINKS, ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from '../constants';

// ... (rest of imports)

// ...


import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-900 py-16 transition-colors duration-300 relative z-40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Column 1: Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="mb-6 block transition-colors">
            <Logo iconClassName="h-6" />
          </Link>
          <p className="text-zinc-500 dark:text-zinc-500 text-xs leading-relaxed">
            Data-driven automation for the modern enterprise.<br />
            {ADDRESS}
          </p>
        </div>

        {/* Column 2: Social Media (Moved here to avoid Chatbot overlap) */}
        <div className="md:col-span-1">
          <h4 className="text-black dark:text-white text-sm font-semibold mb-4 transition-colors">Follow Us</h4>
          <div className="flex flex-col space-y-3">
            <a
              href="https://www.instagram.com/reelin_ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-black dark:hover:text-white text-sm transition-colors duration-300 flex items-center cursor-pointer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/reelin-ai-97a048399"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-black dark:hover:text-white text-sm transition-colors duration-300 flex items-center cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/Reelinsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-black dark:hover:text-white text-sm transition-colors duration-300 flex items-center cursor-pointer"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.tiktok.com/@reelin_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-black dark:hover:text-white text-sm transition-colors duration-300 flex items-center cursor-pointer"
            >
              TikTok
            </a>
          </div>
        </div>

        {/* Column 3: Explore */}
        <div className="md:col-span-1">
          <h4 className="text-black dark:text-white text-sm font-semibold mb-4 transition-colors">Explore</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="text-zinc-500 hover:text-black dark:hover:text-white text-sm transition-colors duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div className="md:col-span-1">
          <h4 className="text-black dark:text-white text-sm font-semibold mb-4 transition-colors">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-zinc-500 hover:text-black dark:hover:text-white text-sm transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="#" className="text-zinc-500 hover:text-black dark:hover:text-white text-sm transition-colors duration-300">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 5: Connect */}
        <div className="md:col-span-1">
          <h4 className="text-black dark:text-white text-sm font-semibold mb-4 transition-colors">Connect</h4>
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-zinc-500 hover:text-black dark:hover:text-white text-sm transition-colors duration-300 block mb-2">{CONTACT_PHONE}</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-zinc-500 hover:text-black dark:hover:text-white text-sm transition-colors duration-300 block mb-2">{CONTACT_EMAIL}</a>
          <p className="text-zinc-500 text-sm">{ADDRESS}</p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
        <p className="text-zinc-500 dark:text-zinc-600 text-xs">Copyright © {currentYear} {COMPANY_NAME} Inc. All rights reserved.</p>
        <p className="text-zinc-500 dark:text-zinc-700 text-xs mt-2 md:mt-0">Designed in Vancouver.</p>
      </div>
    </footer>
  );
};