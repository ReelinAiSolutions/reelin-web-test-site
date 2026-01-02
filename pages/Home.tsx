import React, { useEffect, useRef, useState } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Timeline } from '../components/Timeline';
import { Faq } from '../components/Faq';
import { useNavigate, useLocation } from 'react-router-dom';

// Utility for simple scroll reveals
const RevealOnScroll = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to anchor handler
  useEffect(() => {
    if (location.state && (location.state as any).targetId) {
      const targetId = (location.state as any).targetId;
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [location]);

  // Dashboard Animation State
  const [dashboardVisible, setDashboardVisible] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setDashboardVisible(true);
      }
    }, { threshold: 0.3 });

    if (dashboardRef.current) observer.observe(dashboardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background min-h-screen selection:bg-primary/30">

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-[60]" style={{ width: `${(scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}></div>

      <Hero />

      {/* Refined Static Text Section - 2 Column Layout */}
      <section className="py-24 px-6 bg-background relative overflow-hidden border-b border-white/5">

        {/* Parallax Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" style={{ transform: `translateY(-${scrollY * 0.1}px)` }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Staff Manager Calendar */}
            <div ref={dashboardRef} className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex flex-col group order-last lg:order-first ring-1 ring-white/5 perspective-1000">

              {/* Main Header */}
              <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-sm z-30 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <span className="text-lg">Staff Schedule</span>
                  </div>
                  <div className="h-4 w-px bg-white/10"></div>
                  <div className="flex gap-1 bg-slate-900 p-1 rounded-lg border border-white/5">
                    <span className="px-3 py-1 bg-white/10 rounded text-xs text-white font-medium">Day</span>
                    <span className="px-3 py-1 text-xs text-slate-500 hover:text-slate-300 transition-colors">Week</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-400 font-medium">Mon, Aug 28</span>
                  <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14m-7-7h14" /></svg>
                  </button>
                </div>
              </div>

              {/* Calendar Area */}
              <div className="flex-1 overflow-y-auto bg-slate-950 relative scroll-smooth no-scrollbar">
                <div className="flex w-full min-h-full">

                  {/* Time Axis */}
                  <div className="w-16 flex-shrink-0 border-r border-white/5 bg-slate-900/30 flex flex-col select-none">
                    <div className="h-12 border-b border-white/5 sticky top-0 bg-slate-900/95 backdrop-blur-sm z-20 shadow-sm shadow-black/10"></div>
                    {['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'].map((t, i) => (
                      <div key={i} className="h-[128px] border-t border-white/10 text-[10px] text-slate-500 font-medium text-center relative first:border-t-0 box-border">
                        <span className="absolute -top-2.5 left-0 right-0 bg-slate-900/80 backdrop-blur-sm px-1 rounded mx-auto w-fit z-10">{t}</span>
                        <div className="absolute top-[64px] left-0 right-0 h-px bg-transparent flex justify-center">
                          <div className="w-2 h-px bg-white/10"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Columns */}
                  <div className="flex-1 flex">

                    {/* Staff 1: Alex */}
                    <div className="flex-1 min-w-[140px] border-r border-white/5 relative group/col hover:bg-white/[0.02] transition-colors">
                      <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 sticky top-0 bg-slate-950/95 backdrop-blur-sm z-20 shadow-sm shadow-black/10">
                        <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] font-bold text-indigo-400 border border-indigo-500/30">AM</div>
                        <span className="text-sm font-medium text-slate-300 truncate">Alex Morgan</span>
                      </div>
                      <div className="relative h-full">
                        {Array(8).fill(0).map((_, i) => (
                          <div key={i} className="h-[128px] border-t border-white/10 first:border-t-0 box-border relative">
                            <div className="absolute top-[32px] left-0 right-0 border-t border-white/5 border-dashed"></div>
                            <div className="absolute top-[64px] left-0 right-0 border-t border-white/5 border-dashed"></div>
                            <div className="absolute top-[96px] left-0 right-0 border-t border-white/5 border-dashed"></div>
                          </div>
                        ))}

                        {/* Appointments with Animation */}
                        <div
                          className={`absolute top-0 left-2 right-2 h-[160px] bg-indigo-500/10 border-l-2 border-indigo-500 rounded-r-md p-3 hover:bg-indigo-500/20 transition-all duration-700 cursor-pointer shadow-lg shadow-black/20 z-10 border-y border-r border-white/5 backdrop-blur-sm ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                          style={{ transitionDelay: '100ms' }}
                        >
                          <div className="text-[10px] font-bold text-indigo-400 mb-0.5 uppercase tracking-wide">Women's Cut</div>
                          <div className="text-xs font-semibold text-slate-200 truncate">Sarah Miller</div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            9:00 - 10:15
                          </div>
                        </div>

                        <div
                          className={`absolute top-[192px] left-2 right-2 h-[192px] bg-purple-500/10 border-l-2 border-purple-500 rounded-r-md p-3 hover:bg-purple-500/20 transition-all duration-700 cursor-pointer shadow-lg shadow-black/20 z-10 border-y border-r border-white/5 backdrop-blur-sm ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                          style={{ transitionDelay: '300ms' }}
                        >
                          <div className="text-[10px] font-bold text-purple-400 mb-0.5 uppercase tracking-wide">Color Correction</div>
                          <div className="text-xs font-semibold text-slate-200 truncate">Emily Chen</div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            10:30 - 12:00
                          </div>
                        </div>

                        <div
                          className={`absolute top-[512px] left-2 right-2 h-[96px] bg-cyan-500/10 border-l-2 border-cyan-500 rounded-r-md p-3 hover:bg-cyan-500/20 transition-all duration-700 cursor-pointer shadow-lg shadow-black/20 z-10 border-y border-r border-white/5 backdrop-blur-sm ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                          style={{ transitionDelay: '500ms' }}
                        >
                          <div className="text-[10px] font-bold text-cyan-400 mb-0.5 uppercase tracking-wide">Blow Dry</div>
                          <div className="text-xs font-semibold text-slate-200 truncate">Jessica W.</div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            1:00 - 1:45
                          </div>
                        </div>

                        <div
                          className={`absolute top-[640px] left-2 right-2 h-[192px] bg-pink-500/10 border-l-2 border-pink-500 rounded-r-md p-3 hover:bg-pink-500/20 transition-all duration-700 cursor-pointer shadow-lg shadow-black/20 z-10 border-y border-r border-white/5 backdrop-blur-sm ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                          style={{ transitionDelay: '600ms' }}
                        >
                          <div className="text-[10px] font-bold text-pink-400 mb-0.5 uppercase tracking-wide">Balayage</div>
                          <div className="text-xs font-semibold text-slate-200 truncate">Amanda Lee</div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            2:00 - 3:30
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Staff 2: Sarah */}
                    <div className="flex-1 min-w-[140px] border-r border-white/5 relative group/col hover:bg-white/[0.02] transition-colors">
                      <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 sticky top-0 bg-slate-950/95 backdrop-blur-sm z-20 shadow-sm shadow-black/10">
                        <div className="w-7 h-7 rounded-full bg-pink-500/20 flex items-center justify-center text-[10px] font-bold text-pink-400 border border-pink-500/30">SJ</div>
                        <span className="text-sm font-medium text-slate-300 truncate">Sarah Jenkins</span>
                      </div>
                      <div className="relative h-full">
                        {Array(8).fill(0).map((_, i) => (
                          <div key={i} className="h-[128px] border-t border-white/10 first:border-t-0 box-border relative">
                            <div className="absolute top-[32px] left-0 right-0 border-t border-white/5 border-dashed"></div>
                            <div className="absolute top-[64px] left-0 right-0 border-t border-white/5 border-dashed"></div>
                            <div className="absolute top-[96px] left-0 right-0 border-t border-white/5 border-dashed"></div>
                          </div>
                        ))}

                        <div
                          className={`absolute top-[32px] left-2 right-2 h-[96px] bg-pink-500/10 border-l-2 border-pink-500 rounded-r-md p-3 hover:bg-pink-500/20 transition-all duration-700 cursor-pointer shadow-lg shadow-black/20 z-10 border-y border-r border-white/5 backdrop-blur-sm ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                          style={{ transitionDelay: '200ms' }}
                        >
                          <div className="text-[10px] font-bold text-pink-400 mb-0.5 uppercase tracking-wide">Men's Cut</div>
                          <div className="text-xs font-semibold text-slate-200 truncate">David Kim</div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            9:15 - 10:00
                          </div>
                        </div>

                        <div
                          className={`absolute top-[160px] left-2 right-2 h-[192px] bg-indigo-500/10 border-l-2 border-indigo-500 rounded-r-md p-3 hover:bg-indigo-500/20 transition-all duration-700 cursor-pointer shadow-lg shadow-black/20 z-10 border-y border-r border-white/5 backdrop-blur-sm ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                          style={{ transitionDelay: '400ms' }}
                        >
                          <div className="text-[10px] font-bold text-indigo-400 mb-0.5 uppercase tracking-wide">Highlights</div>
                          <div className="text-xs font-semibold text-slate-200 truncate">Lisa Park</div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            10:15 - 11:45
                          </div>
                        </div>

                        <div
                          className={`absolute top-[448px] left-2 right-2 h-[128px] bg-slate-800/50 border-l-2 border-slate-500 rounded-r-md p-3 hover:bg-slate-700/60 transition-all duration-700 cursor-pointer shadow-lg shadow-black/20 z-10 border-y border-r border-white/5 backdrop-blur-sm ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                          style={{ transitionDelay: '550ms' }}
                        >
                          <div className="text-[10px] font-bold text-slate-400 mb-0.5 uppercase tracking-wide">Consultation</div>
                          <div className="text-xs font-semibold text-slate-300 truncate">New Client</div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            12:30 - 1:30
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Staff 3: Mike */}
                    <div className="flex-1 min-w-[140px] relative group/col hover:bg-white/[0.02] transition-colors">
                      <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 sticky top-0 bg-slate-950/95 backdrop-blur-sm z-20 shadow-sm shadow-black/10">
                        <div className="w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center text-[10px] font-bold text-cyan-400 border border-cyan-500/30">MR</div>
                        <span className="text-sm font-medium text-slate-300 truncate">Mike Ross</span>
                      </div>
                      <div className="relative h-full">
                        {Array(8).fill(0).map((_, i) => (
                          <div key={i} className="h-[128px] border-t border-white/10 first:border-t-0 box-border relative">
                            <div className="absolute top-[32px] left-0 right-0 border-t border-white/5 border-dashed"></div>
                            <div className="absolute top-[64px] left-0 right-0 border-t border-white/5 border-dashed"></div>
                            <div className="absolute top-[96px] left-0 right-0 border-t border-white/5 border-dashed"></div>
                          </div>
                        ))}

                        <div
                          className={`absolute top-0 left-2 right-2 h-[96px] bg-cyan-500/10 border-l-2 border-cyan-500 rounded-r-md p-3 hover:bg-cyan-500/20 transition-all duration-700 cursor-pointer shadow-lg shadow-black/20 z-10 border-y border-r border-white/5 backdrop-blur-sm ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                          style={{ transitionDelay: '150ms' }}
                        >
                          <div className="text-[10px] font-bold text-cyan-400 mb-0.5 uppercase tracking-wide">Fade</div>
                          <div className="text-xs font-semibold text-slate-200 truncate">Chris P.</div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            9:00 - 9:45
                          </div>
                        </div>

                        <div
                          className={`absolute top-[128px] left-2 right-2 h-[96px] bg-slate-800/50 border-l-2 border-slate-500 rounded-r-md p-3 hover:bg-slate-700/60 transition-all duration-700 cursor-pointer shadow-lg shadow-black/20 z-10 border-y border-r border-white/5 backdrop-blur-sm ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                          style={{ transitionDelay: '350ms' }}
                        >
                          <div className="text-[10px] font-bold text-slate-400 mb-0.5 uppercase tracking-wide">Admin</div>
                          <div className="text-xs font-semibold text-slate-300 truncate">Inventory</div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            10:00 - 10:45
                          </div>
                        </div>

                        <div
                          className={`absolute top-[256px] left-2 right-2 h-[160px] bg-indigo-500/10 border-l-2 border-indigo-500 rounded-r-md p-3 hover:bg-indigo-500/20 transition-all duration-700 cursor-pointer shadow-lg shadow-black/20 z-10 border-y border-r border-white/5 backdrop-blur-sm ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                          style={{ transitionDelay: '450ms' }}
                        >
                          <div className="text-[10px] font-bold text-indigo-400 mb-0.5 uppercase tracking-wide">Kids Cut</div>
                          <div className="text-xs font-semibold text-slate-200 truncate">Jackson T.</div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            11:00 - 12:15
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Text */}
            <div className="text-left relative z-20">
              <RevealOnScroll>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight mb-6 lg:whitespace-nowrap">
                  The future belongs <br className="hidden lg:block" /> to the automated.
                </h2>
              </RevealOnScroll>

              <RevealOnScroll delay={150}>
                <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-200 tracking-tight leading-snug mb-8">
                  Reel-in a competitive edge ordinary AI tools can’t match.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <div className="max-w-xl">
                  <p className="text-lg text-slate-400 font-light leading-relaxed">
                    At Reelin, we design purpose-built AI architectures that adapt, learn, and scale with your operation — freeing your team to focus on what actually moves the business forward.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* "Built to Spec" / Timeline Section */}
      <Timeline />

      {/* "Enterprise-Grade Intelligent Infrastructure" / Features Section */}
      <Features />

      <Faq />

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Creative animated background for CTA */}
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-purple-900/40"></div>
          <div
            className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"
            style={{ animation: 'spin 60s linear infinite' }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to reel in the future?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-xl text-slate-400 mb-10">
              Join the local businesses using data to outmaneuver the competition.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="flex justify-center">
              <button
                onClick={() => navigate('/book')}
                className="px-10 py-5 bg-white text-surface font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] relative group overflow-hidden"
              >
                <span className="relative z-10">Start Your Transformation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};