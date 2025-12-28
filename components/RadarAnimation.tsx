import React from 'react';
import { Icon } from './ui/Icon';

export const RadarAnimation: React.FC = () => {
    return (
        <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[2/1] overflow-hidden flex items-center justify-center">

            {/* Deep Background Glow */}
            <div className="absolute inset-0 bg-violet-500/5 blur-[100px] rounded-full"></div>

            {/* Radar Container */}
            <div className="relative w-[600px] h-[600px] flex items-center justify-center">

                {/* Concentric Rings */}
                <div className="absolute inset-0 border border-white/5 rounded-full"></div>
                <div className="absolute inset-[15%] border border-white/5 rounded-full"></div>
                <div className="absolute inset-[30%] border border-white/5 rounded-full"></div>
                <div className="absolute inset-[45%] border border-white/5 rounded-full"></div>

                {/* Vertical/Horizontal Grid Lines (Crosshair) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                    <div className="h-[1px] w-full absolute bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>

                {/* Custom Keyframes for Sync */}
                <style>{`
                    @keyframes radar-flash {
                        0%, 100% { opacity: 0.2; transform: scale(0.8); }
                        10% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 10px rgba(139,92,246,0.6); }
                        20% { opacity: 0.2; transform: scale(0.8); }
                    }
                `}</style>

                {/* Rotating Scanner Beam */}
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite] z-0">
                    <div className="w-1/2 h-1/2 bg-gradient-to-tl from-violet-500/20 to-transparent transform origin-bottom-right rounded-tl-full blur-xl"></div>
                </div>

                {/* Center Node */}
                <div className="relative z-10 w-24 h-24 bg-[#0A0A1F] rounded-full border border-violet-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-violet-500"></div>
                    <Icon name="Globe" size={40} className="text-violet-400" />
                </div>

                {/* Interactive Dots (Lighthouse Effect) */}
                {/* 
                    Beam rotates 0-360 in 10s. 
                    Top (0deg) = 0s
                    Right (90deg) = 2.5s
                    Bottom (180deg) = 5s
                    Left (270deg) = 7.5s 
                    
                    Timing adjusted to match beam's leading edge hitting the dot.
                    Beam is Top-Left quadrant relative to center anchor? 
                    Actually, origin-bottom-right of a 50% div means the div IS the top-left quadrant.
                    So 'spin' rotates it clockwise.
                    Starts at 12 o'clock - 9 o'clock sector.
                */}
                {[
                    // Inner Ring
                    { top: '35%', left: '50%', delay: '0s' },    // Top-ISH
                    { top: '50%', left: '65%', delay: '2.5s' },  // Right-ISH
                    { top: '65%', left: '50%', delay: '5s' },    // Bottom-ISH
                    { top: '50%', left: '35%', delay: '7.5s' },  // Left-ISH

                    // Mid Ring
                    { top: '20%', left: '50%', delay: '0s' },    // Top
                    { top: '30%', left: '70%', delay: '1.25s' }, // Top-Right
                    { top: '50%', left: '80%', delay: '2.5s' },  // Right
                    { top: '70%', left: '70%', delay: '3.75s' }, // Bottom-Right
                    { top: '80%', left: '50%', delay: '5s' },    // Bottom
                    { top: '70%', left: '30%', delay: '6.25s' }, // Bottom-Left
                    { top: '50%', left: '20%', delay: '7.5s' },  // Left
                    { top: '30%', left: '30%', delay: '8.75s' }, // Top-Left

                    // Outer Scatters
                    { top: '15%', left: '60%', delay: '0.8s' },
                    { top: '60%', left: '85%', delay: '3s' },
                    { top: '85%', left: '40%', delay: '5.8s' },
                    { top: '40%', left: '15%', delay: '8.2s' },

                ].map((dot, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                            top: dot.top,
                            left: dot.left,
                            animation: `radar-flash 10s linear infinite`,
                            animationDelay: `calc(${dot.delay} - 0.5s)`, // Syncs with beam arrival (Peak brightness at ~0.5s into pass)
                            opacity: 0.2 // Base dim state
                        }}
                    ></div>
                ))}

            </div>



            {/* Fade Out Edges */}
            <div className="absolute inset-0 bg-[radial-gradient(transparent_40%,#030014_70%)] pointer-events-none"></div>

        </div>
    );
};
