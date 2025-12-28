import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY_NAME } from '../constants';
import { Icon } from './ui/Icon';

import { Logo } from './ui/Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-reflect-bg/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-auto">

          {/* Logo */}
          <Link to="/" className="z-50 block cursor-pointer">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${location.pathname === link.path ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 md:hidden z-50 pointer-events-auto">
            <button
              className="text-white focus:outline-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Icon name={isOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Portal to body to avoid clipping by parent overflow/filter */}
      {createPortal(
        <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl z-[90] flex flex-col items-center justify-start pt-24 pb-10 overflow-y-auto space-y-4 transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none invisible'}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-semibold text-white hover:text-zinc-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>,
        document.body
      )}
    </>
  );
};
