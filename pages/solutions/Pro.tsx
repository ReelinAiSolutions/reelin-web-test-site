import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon } from '../../components/Icons';

export const Pro: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Pro</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Pro builds on Foundation by adding organized workflows and custom AI assistants trained on your business data. These systems manage booking, phone calls, and follow-ups with consistency and accuracy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-4">Best For</h3>
              <p className="text-slate-400">Established businesses that need structure, reliability, and precision.</p>
            </div>
            
            <p className="text-slate-400 leading-relaxed">
               This level is designed for businesses that want their operations to run smoothly without constant manual work from the owner.
            </p>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Includes</h3>
              <p className="text-sm text-slate-500 mb-4 uppercase tracking-wider font-semibold">Everything in Foundation, plus:</p>
              <ul className="space-y-4">
                {[
                  "Advanced scheduling for staff and roles",
                  "AI phone booking handling",
                  "Custom AI assistants trained on your data",
                  "Customer lists and prioritization",
                  "Staff performance reports",
                  "Automated reminders and follow-ups",
                  "Centralized business dashboard"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckIcon className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col h-full">
             <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Example Businesses</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Massage therapy clinics",
                    "Medical clinics & doctors’ offices",
                    "Dental clinics",
                    "Physiotherapy & rehab clinics",
                    "Fitness studios",
                    "Trades businesses",
                    "Automotive service shops"
                  ].map((biz, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span className="text-slate-300">{biz}</span>
                    </div>
                  ))}
                </div>
             </div>

             {/* Next Tier CTA - Aligned below the 'popular' column */}
             <div className="mt-auto pt-6 border-t border-white/5 text-center lg:text-left">
                <p className="text-slate-400 mb-3 text-sm font-medium">Looking for enterprise scale and intelligence?</p>
                <button 
                    onClick={() => navigate('/solutions/enterprise')}
                    className="group flex items-center justify-center lg:justify-start gap-2 text-white font-bold hover:text-cyan-400 transition-colors"
                >
                    Explore Enterprise
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>
        </div>

        <div className="text-center">
           <button 
              onClick={() => navigate('/book')}
              className="px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg rounded-full transition-all shadow-[0_0_50px_-10px_rgba(168,85,247,0.4)]"
            >
              Go Pro
            </button>
        </div>

      </div>
    </div>
  );
};