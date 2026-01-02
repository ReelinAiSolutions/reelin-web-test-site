import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '../components/Icons';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Abstract Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Solutions.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We provide complete automation systems. Choose the level that fits your business scale.
          </p>
        </div>

        {/* Tier Cards Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          
          {/* Foundation */}
          <div 
            onClick={() => navigate('/solutions/foundation')}
            className="group relative bg-slate-900/50 border border-white/5 rounded-3xl p-8 hover:bg-slate-900 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full group-hover:bg-indigo-500/20 transition-all"></div>
             <h2 className="text-2xl font-bold text-white mb-4">Foundation</h2>
             
             <p className="text-slate-400 mb-8 flex-grow">
                Best for simple service businesses that need reliable lead capture, booking, and basic automation.
             </p>

             <div className="mb-8 pt-6 border-t border-white/5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Ideal For</p>
                <ul className="space-y-3">
                  {[
                    "Barbershops",
                    "Nail & Hair Salons",
                    "Personal Trainers",
                    "Solo Service Providers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-500 transition-colors"></div>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>

             <div className="text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                Learn More <ArrowRightIcon className="w-4 h-4" />
             </div>
          </div>

          {/* Pro */}
          <div 
            onClick={() => navigate('/solutions/pro')}
            className="group relative bg-slate-900/50 border border-white/5 rounded-3xl p-8 hover:bg-slate-900 hover:border-purple-500/30 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-all"></div>
             <h2 className="text-2xl font-bold text-white mb-4">Pro</h2>
             
             <p className="text-slate-400 mb-8 flex-grow">
                Best for established businesses that require structure, reliability, and operational precision.
             </p>

             <div className="mb-8 pt-6 border-t border-white/5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Ideal For</p>
                <ul className="space-y-3">
                  {[
                    "Medical & Dental Clinics",
                    "Fitness Studios",
                    "Trades Businesses",
                    "Automotive Shops"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-500 transition-colors"></div>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>

             <div className="text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                Learn More <ArrowRightIcon className="w-4 h-4" />
             </div>
          </div>

          {/* Enterprise */}
          <div 
            onClick={() => navigate('/solutions/enterprise')}
            className="group relative bg-slate-900/50 border border-white/5 rounded-3xl p-8 hover:bg-slate-900 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full group-hover:bg-cyan-500/20 transition-all"></div>
             <h2 className="text-2xl font-bold text-white mb-4">Enterprise</h2>
             
             <p className="text-slate-400 mb-8 flex-grow">
                Best for large, multi-location, or data-intensive organizations with complex workflows.
             </p>

             <div className="mb-8 pt-6 border-t border-white/5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Ideal For</p>
                <ul className="space-y-3">
                  {[
                    "Large Medical Groups",
                    "Franchises",
                    "Multi-location Brands",
                    "Logistics Companies"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-500 transition-colors"></div>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>

             <div className="text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                Learn More <ArrowRightIcon className="w-4 h-4" />
             </div>
          </div>

        </div>

        {/* CTA */}
        <div className="glass-card rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
             <div className="relative z-10">
                 <h2 className="text-3xl font-bold text-white mb-6">Ready to improve your infrastructure?</h2>
                 <p className="text-slate-400 max-w-xl mx-auto mb-8">
                    We start every engagement with a strategy call to identify where time is being wasted and where automation can help.
                 </p>
                 <button 
                    onClick={() => navigate('/book')}
                    className="px-8 py-4 bg-white text-surface font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] inline-flex items-center gap-2"
                 >
                    Book Strategy Call
                    <ArrowRightIcon className="w-4 h-4" />
                 </button>
             </div>
        </div>

      </div>
    </div>
  );
};