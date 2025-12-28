import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home } from '../Home'; // Import actual Home content to reveal
import { GlobalBackground } from '../../components/GlobalBackground';

export const OpeningV1: React.FC = () => {
    const [stage, setStage] = useState<'initial' | 'singularity' | 'flash' | 'reveal'>('initial');

    useEffect(() => {
        // Timeline
        const sequence = async () => {
            // 1. Dark Screen (initial state)
            await new Promise(r => setTimeout(r, 1000));
            setStage('singularity');

            // 2. Singularity appears
            await new Promise(r => setTimeout(r, 2000));
            setStage('flash');

            // 3. Flash expands
            await new Promise(r => setTimeout(r, 800)); // Flash duration
            setStage('reveal');
        };

        sequence();
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            {/* Background is always there, but hidden/revealed */}
            <div className={`transition-opacity duration-[2000ms] ${stage === 'reveal' ? 'opacity-100' : 'opacity-0'}`}>
                {/* We render the actual Home content but maybe without its own internal animations re-triggering if possible, 
                    or we just let them play. For now, let's just show the GlobalBackground and maybe a mock Home layout 
                    if the Home component has complex mount logic. 
                    Actually, let's just use GlobalBackground + Text to simulate the "Final State" for these prototypes 
                    to avoid complex dependency issues with Home's internal state. */}
                <GlobalBackground />
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="text-center">
                        <h1 className="text-[80px] font-bold text-white drop-shadow-2xl opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">Reelin</h1>
                        <p className="text-xl text-white/70 mt-4 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">Custom Built AI Systems.</p>
                    </div>
                </div>
            </div>

            {/* Animation Overlay */}
            <AnimatePresence>
                {stage !== 'reveal' && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center z-50 bg-black"
                        exit={{ opacity: 0, transition: { duration: 1.5 } }} // Slow fade out of black overlay
                    >
                        {/* Singularity Dot */}
                        {stage === 'singularity' || stage === 'flash' ? (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={
                                    stage === 'flash'
                                        ? { scale: [1, 50, 200], opacity: [1, 1, 0], backgroundColor: '#ffffff' } // Explosion
                                        : { scale: 1, opacity: 1, backgroundColor: '#ffffff' } // Stable Singularity
                                }
                                transition={
                                    stage === 'flash'
                                        ? { duration: 0.8, ease: "circIn" }
                                        : { duration: 1.5, ease: "easeOut" }
                                }
                                className="w-1 h-1 bg-white rounded-full shadow-[0_0_20px_white]"
                            />
                        ) : null}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
