import React from 'react';
import { Icon } from './ui/Icon';

export const CalendarHero: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <div className={`relative w-full max-w-5xl mx-auto ${className}`}>
            {/* Main Glass Panel */}
            <div className="relative bg-[#050511]/80 backdrop-blur-xl border border-white/10 rounded-t-3xl shadow-2xl overflow-hidden">

                {/* Glow effect at top edge */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

                {/* Header / Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                    <div className="flex items-center gap-4">
                        {/* Search Bar Visual */}
                        <div className="relative flex items-center bg-white/5 rounded-md px-3 py-1.5 w-64 border border-white/5">
                            <Icon name="Search" size={14} className="text-zinc-500 mr-2" />
                            <span className="text-zinc-500 text-sm">Search notes...</span>
                            <div className="ml-auto flex gap-1">
                                <span className="text-[10px] text-zinc-600 bg-white/5 px-1.5 rounded border border-white/5">⌘</span>
                                <span className="text-[10px] text-zinc-600 bg-white/5 px-1.5 rounded border border-white/5">K</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-zinc-400">
                        <span className="text-sm font-medium text-white/90">April 2024</span>
                        <div className="flex gap-2">
                            <div className="p-1 hover:bg-white/5 rounded cursor-pointer"><Icon name="ChevronLeft" size={16} /></div>
                            <div className="p-1 hover:bg-white/5 rounded cursor-pointer"><Icon name="Calendar" size={16} /></div>
                            <div className="p-1 hover:bg-white/5 rounded cursor-pointer"><Icon name="ChevronRight" size={16} /></div>
                        </div>
                    </div>
                </div>

                <div className="flex min-h-[500px]">
                    {/* Sidebar Visual */}
                    <div className="w-64 border-r border-white/5 p-4 flex flex-col gap-6 hidden md:flex">
                        <div className="space-y-1">
                            <div className="flex items-center gap-3 px-3 py-2 text-violet-400 bg-violet-500/10 rounded-lg">
                                <Icon name="Edit3" size={16} />
                                <span className="text-sm font-medium">Daily notes</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-200">
                                <Icon name="FileText" size={16} />
                                <span className="text-sm font-medium">All notes</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-200">
                                <Icon name="CheckSquare" size={16} />
                                <span className="text-sm font-medium">Tasks</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-200">
                                <Icon name="Map" size={16} />
                                <span className="text-sm font-medium">Map</span>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-2 px-3">Pinned</div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-200">
                                    <span className="w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] text-indigo-400">#</span>
                                    <span className="text-sm font-medium">Engineering</span>
                                </div>
                                <div className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-200">
                                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px] text-emerald-400">#</span>
                                    <span className="text-sm font-medium">Marketing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-8">
                        {/* Date Header */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-1 h-8 bg-violet-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-white">Mon, April 15th, 2024</h2>
                        </div>

                        {/* Simulated Editor Content */}
                        <div className="space-y-6 max-w-2xl pl-4">
                            <div className="group flex gap-4">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-500 transition-colors"></div>
                                <div className="flex-1">
                                    <p className="text-zinc-300">Started using <span className="text-violet-400">Reelin AI</span> for our system architecture.</p>
                                </div>
                            </div>

                            <div className="group flex gap-4">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-500 transition-colors"></div>
                                <div className="flex-1">
                                    <p className="text-zinc-300">Why switch?</p>
                                    <div className="mt-2 pl-4 border-l-2 border-zinc-800 space-y-3">
                                        <p className="text-zinc-400 text-sm">Their foundation tier handles our booking automation perfectly.</p>
                                        <p className="text-zinc-400 text-sm">Need to look into the <span className="text-indigo-400 underline decoration-indigo-400/30 underline-offset-4">Growth Tier</span> for the analytics dashboard.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group flex gap-4">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-500 transition-colors"></div>
                                <div className="flex-1">
                                    <p className="text-zinc-300">Meeting notes with <span className="text-blue-400">@Sarah</span>:</p>
                                    <div className="mt-3 bg-white/5 rounded-lg p-4 border border-white/5 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">SJ</div>
                                        <div>
                                            <div className="text-sm text-white font-medium">Sarah Jenkins</div>
                                            <div className="text-xs text-zinc-500">CTO</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Calendar Sidebar (Right) */}
                    <div className="w-72 border-l border-white/5 p-6 hidden lg:block">
                        <div className="grid grid-cols-7 gap-2 mb-6">
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
                                <div key={d} className="text-center text-xs text-zinc-600 font-medium">{d}</div>
                            ))}
                            {/* Fake Calendar Grid */}
                            {[...Array(30)].map((_, i) => {
                                const isToday = i === 14;
                                return (
                                    <div key={i} className={`aspect-square flex items-center justify-center text-xs rounded-full 
                              ${isToday ? 'bg-violet-600 text-white' : 'text-zinc-500 hover:bg-white/5'}`}>
                                        {i + 1}
                                    </div>
                                )
                            })}
                        </div>

                        <div className="space-y-4">
                            <div className="text-xs font-semibold text-zinc-500 uppercase">Upcoming</div>
                            <div className="bg-white/5 rounded p-3 border border-white/5 border-l-2 border-l-indigo-500">
                                <div className="text-sm text-white mb-1">System Review</div>
                                <div className="text-xs text-zinc-500">10:00 AM • Zoom</div>
                            </div>
                            <div className="bg-white/5 rounded p-3 border border-white/5">
                                <div className="text-sm text-white mb-1">Deploy Updates</div>
                                <div className="text-xs text-zinc-500">2:00 PM • Production</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
