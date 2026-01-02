import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from './Icons';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleScrollToArchitecture = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('architecture');
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

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Skewed Background */}
      <div className="stripe-skew-bg opacity-80" />
      
      {/* Grid Overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="text-left space-y-6 relative z-20 order-1">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.05]">
              AI Systems <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-accent text-glow">
                Built For You.
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              We build custom automation systems for service businesses. Replace manual admin tasks with intelligent software that runs 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button 
                onClick={() => navigate('/book')}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2 group"
              >
                Talk to an Expert
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleScrollToArchitecture}
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold rounded-full hover:bg-white/5 border border-white/10 transition-colors flex items-center justify-center gap-2"
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Column: Phone Mockup Visual */}
          <div className="relative w-full flex items-center justify-center perspective-1000 order-2 mt-12 lg:mt-0 h-[500px] lg:h-auto">
             
             {/* Scaled Wrapper for Mobile */}
             <div className="transform scale-[0.65] sm:scale-[0.8] lg:scale-100 transition-transform duration-500 origin-center">
               {/* Glowing orb behind */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

               {/* Phone Frame */}
               <div className="relative border-slate-900 bg-slate-900 border-[12px] rounded-[3rem] h-[680px] w-[340px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10 transform rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-out hover:scale-105">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20"></div>
                  
                  {/* Screen Content */}
                  <div 
                      className="flex-1 bg-slate-950 w-full h-full overflow-y-auto relative font-sans [&::-webkit-scrollbar]:hidden"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {/* Status Bar Area */}
                    <div className="h-8 w-full bg-slate-950 sticky top-0 z-10 flex justify-between px-6 items-center border-b border-white/5 backdrop-blur-md bg-slate-950/80">
                        <span className="text-[10px] font-bold text-white">9:41</span>
                        <div className="flex gap-1">
                            <div className="w-4 h-2.5 border border-white/30 rounded-[2px] relative">
                              <div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-5 pb-8 space-y-6">
                        
                        {/* Dashboard Header */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-primary/20">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-white leading-none">Analytics</h2>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                  <span className="text-[10px] text-slate-400 font-medium">Live Updates</span>
                                </div>
                            </div>
                            <div className="ml-auto px-3 py-1 bg-slate-900 rounded-full border border-white/10 text-[10px] text-slate-400 font-medium">
                                This Week
                            </div>
                        </div>

                        {/* OVERVIEW SECTION */}
                        <div>
                            <div className="flex items-center gap-2 mb-3 px-1">
                                <svg className="w-3 h-3 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                <h3 className="text-xs font-bold text-cyan-400 tracking-wider uppercase">Overview</h3>
                            </div>

                            {/* Main Revenue Card */}
                            <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/5 relative overflow-hidden group shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/20 blur-[40px] rounded-full"></div>
                                
                                <div className="relative z-10">
                                    <div className="text-xs font-medium text-slate-400 mb-1 uppercase tracking-wider">Total Revenue</div>
                                    <div className="flex items-baseline gap-1">
                                      <span className="text-4xl font-bold text-white tracking-tight">$32,450</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3">
                                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                                            12%
                                        </span>
                                        <span className="text-[10px] text-slate-500">vs last week</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* METRICS GRID */}
                        <div className="grid grid-cols-2 gap-3">
                            {/* Bookings */}
                            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm hover:bg-slate-900 transition-colors">
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Bookings</div>
                                <div className="text-2xl font-bold text-white mb-1">142</div>
                                <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                                    24%
                                </div>
                            </div>

                            {/* Avg Ticket */}
                            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm hover:bg-slate-900 transition-colors">
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Avg. Ticket</div>
                                <div className="text-2xl font-bold text-white mb-1">$320</div>
                                <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                                    5%
                                </div>
                            </div>

                            {/* Utilization */}
                            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm hover:bg-slate-900 transition-colors">
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Utilization</div>
                                <div className="text-2xl font-bold text-white mb-1">87%</div>
                                <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                                    15%
                                </div>
                            </div>

                            {/* Retention / Extra */}
                            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm hover:bg-slate-900 transition-colors relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Retention</div>
                                    <div className="text-2xl font-bold text-white mb-1">94%</div>
                                </div>
                                {/* Mini graph decoration */}
                                <div className="absolute bottom-0 left-0 right-0 h-8 flex items-end gap-1 px-4 opacity-30">
                                    {[40,60,45,70,50].map((h,i) => (
                                        <div key={i} style={{height: `${h}%`}} className="flex-1 bg-indigo-500 rounded-t-[2px]"></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* TIME ANALYSIS */}
                        <div>
                            <div className="flex items-center gap-2 mb-3 px-1 mt-6">
                                <svg className="w-3 h-3 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                <h3 className="text-xs font-bold text-orange-400 tracking-wider uppercase">Time Analysis</h3>
                            </div>

                            <div className="bg-slate-900/80 border border-white/5 rounded-2xl p-1 flex">
                                <div className="flex-1 p-4 border-r border-white/5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">Peak Time</span>
                                    </div>
                                    <div className="text-lg font-bold text-white">Fri, 2 PM</div>
                                </div>
                                <div className="flex-1 p-4">
                                     <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-3 h-3 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">Demand</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full w-[80%] bg-orange-500 rounded-full"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-white">High</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* AI INSIGHTS */}
                        <div>
                            <div className="flex items-center gap-2 mb-3 px-1 mt-6">
                                <svg className="w-3 h-3 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                <h3 className="text-xs font-bold text-purple-400 tracking-wider uppercase">AI Insights</h3>
                            </div>
                            
                            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-2xl p-4 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 blur-xl rounded-full"></div>
                                <div className="relative z-10">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/30">
                                            <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-1">Opportunity Detected</h4>
                                            <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                                            You have 3 open slots tomorrow afternoon. Demand is unusually high for Tuesdays.
                                            </p>
                                            <button className="text-[10px] font-bold bg-white text-purple-900 px-3 py-1.5 rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-900/20">
                                                Auto-Fill from Waitlist
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* LIVE ACTIVITY */}
                        <div>
                             <div className="flex items-center gap-2 mb-3 px-1 mt-6">
                                <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                <h3 className="text-xs font-bold text-slate-500 tracking-wider uppercase">Live Activity</h3>
                            </div>
                            
                            <div className="space-y-3 pb-8">
                                <div className="flex items-center gap-3 p-3 bg-slate-900/50 border border-white/5 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <span className="text-[11px] font-bold text-white">Booking Confirmed</span>
                                            <span className="text-[9px] text-slate-500">2m</span>
                                        </div>
                                        <div className="text-[10px] text-slate-400">Sarah J. for Consultation</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-slate-900/50 border border-white/5 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/20 text-blue-400">
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <span className="text-[11px] font-bold text-white">Payment Received</span>
                                            <span className="text-[9px] text-slate-500">14m</span>
                                        </div>
                                        <div className="text-[10px] text-slate-400">$150.00 - Inv #2049</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-slate-900/50 border border-white/5 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/20 text-purple-400">
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <span className="text-[11px] font-bold text-white">AI Handled Call</span>
                                            <span className="text-[9px] text-slate-500">1h</span>
                                        </div>
                                        <div className="text-[10px] text-slate-400">Answered availability Qs.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                  </div>
                  
                  {/* Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-30"></div>
              </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};