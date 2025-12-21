import React, { useState, useEffect } from 'react';

interface OpeningAnimationProps {
    onComplete: () => void;
}

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const timings = [
            800,   // Stage 0: Initial delay
            1200,  // Stage 1: All text fades in
            800,   // Stage 2: "Reelin" highlights
            1000,  // Stage 3: "AI" highlights
            1200,  // Stage 4: Hold before fade out
        ];

        if (stage < timings.length) {
            const timer = setTimeout(() => {
                setStage(stage + 1);
            }, timings[stage]);
            return () => clearTimeout(timer);
        } else {
            // Animation complete, fade out and call onComplete
            const fadeTimer = setTimeout(() => {
                onComplete();
            }, 600);
            return () => clearTimeout(fadeTimer);
        }
    }, [stage, onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-600 ${stage >= 5 ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <div className="text-center max-w-4xl px-6">
                <div
                    className={`transition-all duration-1000 ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {/* Line 1: "Reelin Your Potential" */}
                    <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8">
                        <span
                            className={`transition-all duration-700 ${stage >= 2
                                    ? 'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent scale-110 inline-block'
                                    : 'text-white'
                                }`}
                        >
                            Reelin
                        </span>
                        <span className="text-white"> Your Potential</span>
                    </div>

                    {/* Line 2: "Business Systems Reimagined with AI" */}
                    <div className="text-4xl md:text-6xl lg:text-7xl font-bold">
                        <span className="text-white">Business Systems Reimagined with </span>
                        <span
                            className={`transition-all duration-700 ${stage >= 3
                                    ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent scale-110 inline-block'
                                    : 'text-white'
                                }`}
                        >
                            AI
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
