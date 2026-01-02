import React from 'react';
import { IllustrationCapture, IllustrationAutomate, IllustrationUnderstand, ArrowRightIcon } from './Icons';
import { useNavigate } from 'react-router-dom';

export const Features: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section id="architecture" className="py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-20 text-left">
          <h2 className="text-base font-semibold text-primary uppercase tracking-wider mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
             Powerful Systems <br/> That Drive Growth.
          </h3>
          <p className="text-lg text-slate-400 max-w-2xl">
            We don't just fix problems; we upgrade your entire operation. Our systems use advanced data and automation to modernize your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative mb-16">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {/* Feature 1 */}
          <div className="glass-card p-8 rounded-2xl relative z-10 hover:bg-white/5 transition-colors group border-t border-t-white/10 border-white/5">
            <div className="w-16 h-16 mb-8 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-indigo-500/20">
               <div className="w-10 h-10">
                  <IllustrationCapture />
               </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">All Your Data in One Place</h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              We connect your phone, email, website, and software into one clear view. No more scattered information or lost sticky notes.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-card p-8 rounded-2xl relative z-10 hover:bg-white/5 transition-colors group border-t border-t-white/10 border-white/5">
            <div className="w-16 h-16 mb-8 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-purple-500/20">
              <div className="w-10 h-10">
                  <IllustrationAutomate />
               </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Smart Automation</h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              Use custom AI assistants to handle bookings, answer questions, and manage tasks instantly, 24/7, without you lifting a finger.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-card p-8 rounded-2xl relative z-10 hover:bg-white/5 transition-colors group border-t border-t-white/10 border-white/5">
            <div className="w-16 h-16 mb-8 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-cyan-500/20">
              <div className="w-10 h-10">
                  <IllustrationUnderstand />
               </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Business Insights</h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              Turn your data into answers. See patterns in your busy times, understand what your customers want, and spot new opportunities to grow.
            </p>
          </div>
        </div>
        
        <div className="text-center">
            <button 
                onClick={() => navigate('/services')}
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors"
            >
                Explore Full Solutions
                <ArrowRightIcon className="w-4 h-4" />
            </button>
        </div>
      </div>
    </section>
  );
};