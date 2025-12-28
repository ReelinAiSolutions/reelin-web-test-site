import React from 'react';
import { Icon } from './ui/Icon';

export const DashboardHero: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <div className={`relative w-full mx-auto ${className}`}>
            {/* Main Glass Panel */}
            <div className="relative bg-[#050511]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col w-full">

                {/* Glow effect at top edge */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

                {/* Header */}
                <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <Icon name="Activity" className="text-cyan-500" size={20} />
                            Analytics Dashboard
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Date Selector (Compact) */}
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs text-zinc-300">
                            <span className="hidden sm:inline">This Week</span>
                            <span className="font-mono text-white/80">Dec 22-28</span>
                        </div>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-5 overflow-y-auto space-y-5">

                    {/* Section 1: Business Overview (Stats Row) */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 text-xs text-cyan-400 font-medium uppercase tracking-wider">
                            <Icon name="Zap" size={12} /> Overview
                        </div>

                        {/* 4-Column Grid for Maximum Compactness */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {/* Total Revenue */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/[0.07] transition-colors">
                                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">Revenue</span>
                                <div className="text-xl font-bold text-white mb-1">$32,450</div>
                                <div className="flex items-center text-emerald-400 text-[10px] font-medium">
                                    <Icon name="TrendingUp" size={10} className="mr-1" /> 12%
                                </div>
                            </div>

                            {/* Total Bookings */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/[0.07] transition-colors">
                                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">Bookings</span>
                                <div className="text-xl font-bold text-white mb-1">142</div>
                                <div className="flex items-center text-emerald-400 text-[10px] font-medium">
                                    <Icon name="TrendingUp" size={10} className="mr-1" /> 24%
                                </div>
                            </div>

                            {/* Avg Ticket */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/[0.07] transition-colors">
                                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">Avg. Ticket</span>
                                <div className="text-xl font-bold text-white mb-1">$320</div>
                                <div className="flex items-center text-emerald-400 text-[10px] font-medium">
                                    <Icon name="TrendingUp" size={10} className="mr-1" /> 5%
                                </div>
                            </div>

                            {/* Utilization */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/[0.07] transition-colors">
                                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">Utilization</span>
                                <div className="text-xl font-bold text-white mb-1">87%</div>
                                <div className="flex items-center text-emerald-400 text-[10px] font-medium">
                                    <Icon name="TrendingUp" size={10} className="mr-1" /> 15%
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Time & Demand (Side-by-Side Row) */}
                    <div className="pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2 mb-3 text-xs text-orange-400 font-medium uppercase tracking-wider">
                            <Icon name="Clock" size={12} /> Time Analysis
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* Peak Times */}
                            <div className="bg-orange-500/[0.03] border border-orange-500/10 rounded-xl p-3 flex sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                    <span className="text-xs font-semibold text-white">Peak Time</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-bold text-white">Friday, 2 PM</div>
                                </div>
                            </div>

                            {/* Demand Map */}
                            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    <Icon name="TrendingUp" size={12} className="text-orange-500" />
                                    <span className="text-xs font-semibold text-white">Demand</span>
                                </div>
                                {/* Simple Bar */}
                                <div className="flex items-center gap-2 w-24">
                                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-orange-500 rounded-full"></div>
                                    </div>
                                    <span className="text-[10px] text-zinc-400">High</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
