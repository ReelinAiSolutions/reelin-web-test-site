import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Results: React.FC = () => {
  const navigate = useNavigate();

  const cases = [
    {
      type: "Barbershop",
      name: "The Gentleman's Den",
      tier: "Tier 1",
      problem: "Phone calls were interrupting cuts, leading to distracted barbers and missed bookings during busy hours.",
      solution: "AI Voice Receptionist to handle calls 24/7, answering queries and booking appointments directly into the calendar.",
      stats: [
        { label: "Missed Calls", value: "0" },
        { label: "Added Revenue", value: "+$4.2k/mo" },
        { label: "Phone Time Saved", value: "15 hrs/wk" }
      ],
      color: "from-indigo-500 to-blue-500",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 20a5 5 0 1110 0v1H7v-1zM7 9a5 5 0 0110 0v1H7V9z" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    },
    {
      type: "Nail Salon",
      name: "Pristine Polish",
      tier: "Tier 1",
      problem: "High rate of no-shows and last-minute cancellations were leaving chairs empty and revenue unpredictable.",
      solution: "Automated SMS reminders coupled with a secure deposit capture system for high-value time slots.",
      stats: [
        { label: "No-Show Rate", value: "< 2%" },
        { label: "Seat Utilization", value: "96%" },
        { label: "Deposit Revenue", value: "100% Protected" }
      ],
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.355m0 2.828l2.829-2.829m-2.829 2.829h2.829" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    },
    {
      type: "Lash Studio",
      name: "Luxe Lash Lab",
      tier: "Tier 1",
      problem: "Long manual consultation times during appointments were reducing the total number of clients per day.",
      solution: "AI Pre-consultation chatbot to handle style selection, health forms, and preferences before client arrival.",
      stats: [
        { label: "Time Saved/Appt", value: "15 mins" },
        { label: "Extra Clients/Day", value: "+2" },
        { label: "Client Satisfaction", value: "4.9/5" }
      ],
      color: "from-cyan-500 to-emerald-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
      )
    },
    {
      type: "Dental Clinic",
      name: "Apex Dental Studio",
      tier: "Tier 2",
      problem: "Front desk overwhelmed with rescheduling and insurance checks, leading to 15% gaps in hygiene schedules.",
      solution: "AI-driven recall system that detects overdue patients and books them via SMS, plus automated insurance verification.",
      stats: [
        { label: "Hygiene Capacity", value: "98%" },
        { label: "Admin Time Saved", value: "25 hrs/wk" },
        { label: "Recall Revenue", value: "+$12k/mo" }
      ],
      color: "from-blue-600 to-cyan-500",
      bg: "bg-blue-600/10",
      border: "border-blue-600/20",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    },
    {
      type: "HVAC Services",
      name: "Summit Climate Control",
      tier: "Tier 2",
      problem: "Technicians spending too much time manually quoting small jobs and waiting for dispatch instructions.",
      solution: "Automated quoting tool for standard repairs and intelligent dispatch routing based on technician skill and location.",
      stats: [
        { label: "Quote Speed", value: "Instant" },
        { label: "Jobs Per Day", value: "+30%" },
        { label: "Upsell Rate", value: "+18%" }
      ],
      color: "from-orange-500 to-red-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    },
    {
      type: "Fitness Franchise",
      name: "Urban Fitness Group (8 Locations)",
      tier: "Tier 3",
      problem: "Fragmented member data across locations prevented unified marketing, leading to high churn and unknown LTV.",
      solution: "Centralized data warehouse integrating 8 POS instances with predictive churn models and automated retention workflows.",
      stats: [
        { label: "Churn Reduced", value: "40%" },
        { label: "LTV Increase", value: "+25%" },
        { label: "Marketing ROI", value: "3.5x" }
      ],
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Results.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Real businesses. Real data. See how automation is transforming the service industry.
          </p>
        </div>

        <div className="grid gap-8">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 md:p-12 border ${item.border} ${item.bg} backdrop-blur-sm relative overflow-hidden group hover:border-white/20 transition-all duration-500`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                
                {/* Left: Content */}
                <div className="space-y-6">
                   <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                         {item.icon}
                      </div>
                      <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">{item.type}</span>
                      {/* Optional Tier Badge for clarity */}
                      <span className="text-[10px] font-bold text-slate-500 border border-slate-700 rounded px-2 py-0.5 ml-auto md:ml-0">
                        {item.tier}
                      </span>
                   </div>
                   
                   <h2 className="text-3xl font-bold text-white">{item.name}</h2>
                   
                   <div className="space-y-4 pt-2">
                      <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">The Problem</p>
                        <p className="text-slate-300">{item.problem}</p>
                      </div>
                      <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">The Solution</p>
                        <p className="text-slate-300">{item.solution}</p>
                      </div>
                   </div>
                </div>

                {/* Right: Stats */}
                <div className="bg-slate-950/40 rounded-2xl p-8 border border-white/10 relative">
                   {/* Decorative gradient behind stats */}
                   <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-2xl`}></div>
                   
                   <div className="relative z-10 grid grid-cols-1 gap-6">
                      {item.stats.map((stat, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/10 last:border-0 pb-4 last:pb-0">
                           <span className="text-slate-400 font-medium">{stat.label}</span>
                           <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Want results like these?</h3>
            <button 
                onClick={() => navigate('/book')}
                className="px-10 py-5 bg-white text-surface font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]"
            >
                Start Your Transformation
            </button>
        </div>

      </div>
    </div>
  );
};