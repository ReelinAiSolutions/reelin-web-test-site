import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon } from '../../components/Icons';

export const Foundation: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 bg-background relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Foundation</h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        Foundation sets up a modern digital front desk for service businesses. It replaces missed calls, manual scheduling, and disorganized notes with a clean, always-on system.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
                    {/* Left Column: Text Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-8">
                            <h3 className="text-lg font-bold text-white mb-4">Best For</h3>
                            <p className="text-slate-400">Simple service businesses that need reliable lead capture, booking, and basic automation.</p>
                        </div>

                        <p className="text-slate-400 leading-relaxed">
                            Designed to be fast to setup and easy to use, Foundation creates a dependable front door for your business. It captures leads and books appointments automatically.
                        </p>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">Includes</h3>
                            <ul className="space-y-4">
                                {[
                                    "High-performance website or landing page",
                                    "Online appointment booking available 24/7",
                                    "AI receptionist to handle customer questions",
                                    "Customer list organization and management",
                                    "Basic reporting on bookings"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300">
                                        <CheckIcon className="w-5 h-5 text-indigo-400 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular With List */}
                        <div className="pt-6">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Popular With</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {[
                                    "Barbershops", "Nail Salons", "Hair Stylists", "Trainers", "Therapists"
                                ].map((biz, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/5">
                                        {biz}
                                    </span>
                                ))}
                            </div>

                            {/* Next Tier CTA - Inline */}
                            <div className="pt-8 border-t border-white/5">
                                <p className="text-slate-400 mb-3 text-sm font-medium">Looking for more operational power?</p>
                                <button
                                    onClick={() => navigate('/solutions/pro')}
                                    className="group flex items-center gap-2 text-white font-bold hover:text-purple-400 transition-colors"
                                >
                                    Explore Pro Tier
                                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Phone Visual */}
                    <div className="relative w-full flex items-center justify-center perspective-1000 order-1 lg:order-2 h-[600px] lg:h-auto">
                        {/* Phone Component - Clean & Static */}
                        <div className="transform scale-[0.8] sm:scale-[0.9] lg:scale-100">
                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

                            {/* Frame - Removed tilt/rotation classes */}
                            <div className="relative border-slate-900 bg-slate-900 border-[12px] rounded-[3rem] h-[680px] w-[340px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10">
                                {/* Dynamic Island */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20"></div>

                                {/* Content */}
                                <div className="flex-1 bg-white w-full h-full overflow-hidden relative font-sans flex flex-col">
                                    {/* Status Bar */}
                                    <div className="h-10 w-full bg-white flex justify-between px-6 items-end pb-2">
                                        <span className="text-[12px] font-bold text-black">8:50</span>
                                        <div className="flex gap-1 items-center">
                                            <div className="w-4 h-2.5 border border-black/30 rounded-[2px] relative">
                                                <div className="absolute inset-0.5 bg-black rounded-[1px]"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* App Header */}
                                    <div className="px-4 pb-2 bg-white z-10 border-b border-slate-50">
                                        <div className="flex items-center text-blue-600 mb-2">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            <span className="text-base font-medium">Month</span>
                                        </div>
                                        <div className="flex justify-between items-end mb-4">
                                            <h2 className="text-3xl font-bold text-slate-900">Monday</h2>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center text-slate-900 font-medium">
                                                    Me <svg className="w-4 h-4 ml-1 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                </div>
                                                <svg className="w-6 h-6 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14m-7-7h14" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Date Strip */}
                                        <div className="flex justify-between mb-2">
                                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                                <div key={i} className="w-8 text-center text-xs font-semibold text-slate-400">{d}</div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center pb-2">
                                            {['27', '28', '29', '30', '31', '1', '2'].map((d, i) => (
                                                <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${d === '28' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-slate-900'}`}>
                                                    {d}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Calendar Body - Scrollable */}
                                    <div className="flex-1 overflow-y-auto relative no-scrollbar bg-slate-50/30">
                                        {/* Grid Lines */}
                                        <div className="absolute inset-0 pt-0">
                                            {['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'].map((time, i) => (
                                                <div key={i} className="flex h-24 border-b border-slate-100 relative bg-white">
                                                    {/* Time Column */}
                                                    <div className="w-16 border-r border-slate-50 relative h-full">
                                                        <span className="absolute top-2 right-3 text-[10px] font-bold text-slate-900 leading-none">{time}</span>
                                                        <span className="absolute top-[25%] right-3 text-[9px] text-slate-300 leading-none">:15</span>
                                                        <span className="absolute top-[50%] right-3 text-[9px] text-slate-300 leading-none">:30</span>
                                                        <span className="absolute top-[75%] right-3 text-[9px] text-slate-300 leading-none">:45</span>
                                                    </div>

                                                    {/* Events Column */}
                                                    <div className="flex-1 relative">
                                                        {time === '9 AM' && (
                                                            <div className="absolute top-4 left-1 right-2 bg-indigo-50 border-l-4 border-indigo-500 rounded-sm p-2 shadow-sm h-[80%] z-10">
                                                                <div className="text-[9px] font-bold text-indigo-400 mb-0.5 tracking-wide">NEW CLIENT INTRO</div>
                                                                <div className="text-base font-bold text-slate-700 mb-1">Sarah Jenkins</div>
                                                                <div className="flex justify-between items-end mt-auto">
                                                                    <span className="text-[10px] text-slate-500 font-medium">Me</span>
                                                                    <span className="text-[10px] text-indigo-400 font-medium">9:15 AM <span className="text-slate-400 opacity-70">(45m)</span></span>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {time === '10 AM' && (
                                                            <div className="absolute top-0 left-1 right-2 bg-purple-50 border-l-4 border-purple-500 rounded-sm p-2 shadow-sm h-[90%] z-10">
                                                                <div className="text-[9px] font-bold text-purple-400 mb-0.5 tracking-wide">CONSULTATION</div>
                                                                <div className="text-base font-bold text-slate-700 mb-1">Mike Ross</div>
                                                                <div className="flex justify-between items-end mt-auto">
                                                                    <span className="text-[10px] text-slate-500 font-medium">Me</span>
                                                                    <span className="text-[10px] text-purple-400 font-medium">10:00 AM <span className="text-slate-400 opacity-70">(45m)</span></span>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {time === '11 AM' && (
                                                            <div className="absolute top-2 left-1 right-2 bg-indigo-50 border-l-4 border-indigo-500 rounded-sm p-2 shadow-sm h-[85%] z-10">
                                                                <div className="text-[9px] font-bold text-indigo-400 mb-0.5 tracking-wide">FOLLOW UP</div>
                                                                <div className="text-base font-bold text-slate-700 mb-1">Emma Watts</div>
                                                                <div className="flex justify-between items-end mt-auto">
                                                                    <span className="text-[10px] text-slate-500 font-medium">Me</span>
                                                                    <span className="text-[10px] text-indigo-400 font-medium">11:00 AM <span className="text-slate-400 opacity-70">(45m)</span></span>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {time === '1 PM' && (
                                                            <div className="absolute top-0 left-1 right-2 bg-blue-50 border-l-4 border-blue-500 rounded-sm p-2 shadow-sm h-[60%] z-10">
                                                                <div className="text-[9px] font-bold text-blue-400 mb-0.5 tracking-wide">QUICK CHECK-IN</div>
                                                                <div className="text-base font-bold text-slate-700 mb-1">David Chen</div>
                                                                <div className="flex justify-between items-end mt-auto">
                                                                    <span className="text-[10px] text-slate-500 font-medium">Me</span>
                                                                    <span className="text-[10px] text-blue-400 font-medium">1:00 PM <span className="text-slate-400 opacity-70">(30m)</span></span>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {time === '2 PM' && (
                                                            <div className="absolute top-6 left-1 right-2 bg-purple-50 border-l-4 border-purple-500 rounded-sm p-2 shadow-sm h-[75%] z-10">
                                                                <div className="text-[9px] font-bold text-purple-400 mb-0.5 tracking-wide">DISCOVERY</div>
                                                                <div className="text-base font-bold text-slate-700 mb-1">Jessica Li</div>
                                                                <div className="flex justify-between items-end mt-auto">
                                                                    <span className="text-[10px] text-slate-500 font-medium">Me</span>
                                                                    <span className="text-[10px] text-purple-400 font-medium">2:30 PM <span className="text-slate-400 opacity-70">(45m)</span></span>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                            {/* Empty space for scroll */}
                                            <div className="h-20 bg-white"></div>
                                        </div>
                                    </div>

                                    {/* Bottom Nav */}
                                    <div className="h-16 bg-white border-t border-slate-100 flex items-center justify-around pb-2 z-20">
                                        <div className="flex flex-col items-center gap-1">
                                            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            <span className="text-[9px] font-bold text-blue-600 uppercase tracking-wide">Schedule</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 opacity-40">
                                            <svg className="w-6 h-6 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            <span className="text-[9px] font-bold text-slate-900 uppercase tracking-wide">Stats</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 opacity-40">
                                            <svg className="w-6 h-6 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            <span className="text-[9px] font-bold text-slate-900 uppercase tracking-wide">Team</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 opacity-40">
                                            <svg className="w-6 h-6 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            <span className="text-[9px] font-bold text-slate-900 uppercase tracking-wide">Clients</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 opacity-40">
                                            <svg className="w-6 h-6 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            <span className="text-[9px] font-bold text-slate-900 uppercase tracking-wide">Settings</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Reflection Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-30 rounded-[3rem]"></div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => navigate('/book')}
                        className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg rounded-full transition-all shadow-[0_0_50px_-10px_rgba(99,102,241,0.4)]"
                    >
                        Build Your Foundation
                    </button>
                </div>

            </div>
        </div>
    );
};