import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from '../../components/Icons';

export const Operations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
             <span className="w-2 h-2 rounded-full bg-purple-500"></span>
             <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">Tier 2</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Operations</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            The Operations tier builds on the Foundation by introducing deeper automation, internal coordination, and operational visibility. This tier is focused on efficiency, scalability, and decision-making.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-4">Best For</h3>
              <p className="text-slate-400">Growing businesses with multiple staff, services, or locations that need coordination and insight.</p>
            </div>
            
            <p className="text-slate-400 leading-relaxed">
               It’s ideal for businesses that have outgrown simple booking tools and need smarter systems behind the scenes. We reduce admin work while improving how the business runs day-to-day.
            </p>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Includes</h3>
              <p className="text-sm text-slate-500 mb-4 uppercase tracking-wider font-semibold">Everything in Foundation, plus:</p>
              <ul className="space-y-4">
                {[
                  "Advanced scheduling (staff, roles, availability)",
                  "AI phone booking and call handling",
                  "Customer segmentation and ranking",
                  "Service and staff performance insights",
                  "Automated follow-ups, reminders, and re-engagement",
                  "Centralized dashboard for operations"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckIcon className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
             <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 h-full">
                <h3 className="text-xl font-bold text-white mb-6">Example Businesses</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Multi-barber barbershops",
                    "Dental or medical clinics",
                    "Physio & rehab clinics",
                    "Fitness studios",
                    "Trades businesses (HVAC, plumbing)",
                    "Automotive service shops",
                    "High-volume local service companies"
                  ].map((biz, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span className="text-slate-300">{biz}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>

        <div className="text-center">
           <button 
              onClick={() => navigate('/book')}
              className="px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg rounded-full transition-all shadow-[0_0_50px_-10px_rgba(168,85,247,0.4)]"
            >
              Scale Your Operations
            </button>
        </div>

      </div>
    </div>
  );
};
