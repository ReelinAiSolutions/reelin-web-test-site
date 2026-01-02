import React, { useState, useEffect } from 'react';
import { XIcon, ArrowRightIcon, CheckIcon } from './Icons';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    title: "Operations Review",
    desc: "We analyze your current tools and daily tasks to find where you're losing time.",
    details: "We don't just look at your software; we look at how your business actually runs. Our team reviews your email volume, phone logs, and manual data entry tasks. We identify where you and your staff are spending time on busywork and calculate exactly how much an automated system could save you.",
    color: "bg-indigo-500",
    iconColor: "text-indigo-400"
  },
  {
    title: "The Blueprint",
    desc: "We design a clear plan connecting your software, data, and new automation tools.",
    details: "This is the planning phase. We design a secure system that connects your existing tools (like your CRM or booking software) with new AI capabilities. We map out exactly how the AI will handle customer questions, schedule appointments, and organize data, ensuring everything works together smoothly.",
    color: "bg-purple-500",
    iconColor: "text-purple-400"
  },
  {
    title: "Build & Setup",
    desc: "Our team builds the connections and trains the AI on your specific business info.",
    details: "We build the custom connections between your tools. Simultaneously, we train the AI on your company's specific information—teaching it your brand voice, pricing, and how to handle objections. We set up the automation that allows the system to take real action, like booking appointments or sending invoices.",
    color: "bg-fuchsia-500",
    iconColor: "text-fuchsia-400"
  },
  {
    title: "Launch & Refine",
    desc: "We go live, monitoring performance and making sure the AI gets smarter every day.",
    details: "Go-live is just the beginning. We launch with a careful monitoring period to ensure everything is running perfectly. As the system interacts with real customers, we refine its responses to ensure accuracy. We provide you with a simple dashboard showing you exactly how much time and money the system is saving you.",
    color: "bg-cyan-500",
    iconColor: "text-cyan-400"
  }
];

export const Timeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const navigate = useNavigate();

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveStep(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="process" className="py-32 bg-slate-900/50 relative overflow-hidden border-y border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Copy */}
          <div className="text-left">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 rounded-full">
              Our Process
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Your Custom <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Plan.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We don't use generic templates. We build a system that fits your specific business needs and existing tools perfectly.
            </p>
          </div>

          {/* Right: Timeline Content */}
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            
            <div className="space-y-10">
              {steps.map((step, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveStep(idx)}
                  className="relative flex items-start gap-6 group w-full text-left focus:outline-none"
                >
                  <div className={`relative z-10 w-12 h-12 rounded-full ${step.color} bg-opacity-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-3 h-3 rounded-full ${step.color} shadow-[0_0_10px_currentColor]`}></div>
                  </div>
                  <div className="pt-2 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{step.title}</h3>
                      <span className="text-xs text-slate-600 border border-slate-700 rounded px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {activeStep !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setActiveStep(null)}
          ></div>
          
          <div className="relative w-full max-w-lg bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-[float_0.3s_ease-out]">
            {/* Modal Header */}
            <div className="relative h-32 overflow-hidden">
               <div className={`absolute inset-0 ${steps[activeStep].color} opacity-20`}></div>
               <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
               <button 
                 onClick={() => setActiveStep(null)}
                 className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-white/10 text-white transition-colors z-20"
               >
                 <XIcon className="w-5 h-5" />
               </button>
               <div className="absolute bottom-6 left-8 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${steps[activeStep].color} bg-opacity-20 flex items-center justify-center border border-white/10`}>
                    <div className={`w-3 h-3 rounded-full ${steps[activeStep].color} shadow-[0_0_10px_currentColor]`}></div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">{steps[activeStep].title}</h3>
               </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 pt-2">
              <p className="text-slate-300 leading-loose text-sm mb-8">
                {steps[activeStep].details}
              </p>

              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider font-semibold">
                   <CheckIcon className={`w-4 h-4 ${steps[activeStep].iconColor}`} />
                   <span>Phase {activeStep + 1}</span>
                </div>
                <button 
                  onClick={() => navigate('/book')}
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group"
                >
                  Discuss this phase
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};