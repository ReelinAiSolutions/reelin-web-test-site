import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../site-constants';
import { MenuIcon, XIcon, ArrowRightIcon, ChevronDownIcon } from './Icons';
import { Logo } from './ui/Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleBookClick = () => {
    navigate('/book');
    setIsOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (href.startsWith('/#')) {
      const targetId = href.substring(2);
      if (location.pathname === '/') {
        scrollToElement(targetId);
      } else {
        navigate('/', { state: { targetId } });
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const scrollToElement = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Styles for the navbar background to avoid containing block issues for fixed children
  const navBackgroundClass = scrolled || isOpen
    ? 'bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-lg'
    : 'bg-transparent';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* 
        Separate background layer. 
        We do this because applying backdrop-filter to the parent <nav> creates a new stacking context 
        and containing block, which would clip the fixed position mobile menu to the nav's height.
      */}
      <div className={`absolute inset-0 transition-all duration-300 ${navBackgroundClass}`} />

      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <NavLink to="/" onClick={() => handleNavClick('/')} className="flex items-center gap-2 group">
          <Logo hideText={false} className="group-hover:scale-105 transition-transform" />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.items && setActiveDropdown(item.label)}
              onMouseLeave={() => item.items && setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors focus:outline-none hover:bg-white/5 rounded-full flex items-center gap-1 ${(location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href)))
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                  }`}
              >
                {item.label}
                {item.items && (
                  <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                )}
              </button>

              {/* Desktop Dropdown */}
              {item.items && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[28rem] transition-all duration-200 ${activeDropdown === item.label ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
                >
                  <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl p-2">
                    {item.items.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick(subItem.href);
                        }}
                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                      >
                        <div className="text-sm font-semibold text-white group-hover/item:text-primary transition-colors">
                          {subItem.label}
                        </div>
                        {subItem.description && (
                          <div className="text-xs text-slate-500 mt-0.5">
                            {subItem.description}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <button
            onClick={handleBookClick}
            className="group bg-white text-surface hover:bg-slate-200 pl-5 pr-4 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] flex items-center gap-2"
          >
            Book a Call
            <div className="w-6 h-6 rounded-full bg-surface text-white flex items-center justify-center group-hover:bg-primary transition-colors">
              <ArrowRightIcon className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile CTA */}
          <button
            onClick={handleBookClick}
            className="bg-white text-surface hover:bg-slate-200 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-[0_0_15px_-5px_rgba(255,255,255,0.3)]"
          >
            Book
          </button>

          {/* Mobile menu toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2 focus:outline-none">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        style={{ top: '0', height: '100dvh' }}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <div className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-4 last:border-0">
                  {item.items ? (
                    <div className="space-y-3">
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="w-full text-left text-xl font-display font-bold text-white py-1 flex items-center justify-between"
                      >
                        {item.label}
                      </button>

                      {/* Sub-items extended fully */}
                      <div className="pl-4 space-y-3 border-l-2 border-white/10 ml-1">
                        {item.items.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => handleNavClick(subItem.href)}
                            className="block w-full text-left group/mobile-item"
                          >
                            <div className="text-base font-medium text-slate-400 group-hover/mobile-item:text-primary transition-colors">
                              {subItem.label}
                            </div>
                            {subItem.description && (
                              <div className="text-xs text-slate-600 mt-0.5">{subItem.description}</div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="w-full text-left text-xl font-display font-bold text-white py-1"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Fixed Area */}
          <div className="pt-6 mt-auto shrink-0 border-t border-white/10">
            <button
              onClick={handleBookClick}
              className="w-full py-4 bg-primary text-white text-lg font-bold rounded-full shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2"
            >
              Book a Call
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};