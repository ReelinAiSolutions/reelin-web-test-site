import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Logo } from './ui/Logo';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      // Navigate to home and scroll
      navigate('/', { state: { targetId: href.substring(1) } });
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-24">

          {/* Brand Column - Spans 2 cols on LG */}
          <div className="lg:col-span-2 space-y-8">
            <NavLink to="/" className="flex items-center gap-3 group w-fit">
              <Logo />
            </NavLink>

            <div className="space-y-6 text-slate-400 text-sm leading-relaxed max-w-xs">
              <p>Data-driven automation for the<br /> modern enterprise.</p>
              <p>Vancouver, BC</p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 text-sm">Follow Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="https://www.instagram.com/reelin_ai/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/reelin-ai-97a048399" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <LinkedInIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/Reelinsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <TwitterIcon className="w-4 h-4" />
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@reelin_ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <TikTokIcon className="w-4 h-4" />
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 text-sm">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><button onClick={() => handleLinkClick('/')} className="hover:text-white transition-colors text-left block">Home</button></li>
              <li><button onClick={() => handleLinkClick('/services')} className="hover:text-white transition-colors text-left block">Services</button></li>
              <li><button onClick={() => handleLinkClick('/about')} className="hover:text-white transition-colors text-left block">About</button></li>
              <li><button onClick={() => handleLinkClick('/book')} className="hover:text-white transition-colors text-left block">Book Now</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 text-sm">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><button onClick={() => handleLinkClick('/about')} className="hover:text-white transition-colors text-left block">Privacy Policy</button></li>
              <li><button onClick={() => handleLinkClick('/about')} className="hover:text-white transition-colors text-left block">Terms of Service</button></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 text-sm">Connect</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="tel:+16047574897" className="hover:text-white transition-colors block">+1 604 757 4897</a></li>
              <li><a href="mailto:info@reelin.ca" className="hover:text-white transition-colors block">info@reelin.ca</a></li>
              <li><span className="block text-slate-500">Vancouver, BC</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>Copyright © 2026 Reelin Inc. All rights reserved.</p>
          <p>Designed in Vancouver.</p>
        </div>
      </div>
    </footer>
  );
};