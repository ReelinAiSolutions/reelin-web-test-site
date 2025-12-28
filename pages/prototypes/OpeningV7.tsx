import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalBackground } from '../../components/GlobalBackground';

export const OpeningV7: React.FC = () => {
    // Stages: 
    // 1. 'implode': Particles suck in (Physics)
    // 2. 'explode': White flash expands
    // 3. 'hole-punch': A hole opens in the white flash to reveal the black hole video
    // 4. 'reveal': Full UI fade in
    const [stage, setStage] = useState<'implode' | 'explode' | 'hole-punch' | 'reveal'>('implode');

    useEffect(() => {
        const sequence = async () => {
            await new Promise(r => setTimeout(r, 500));
            setStage('implode');

            await new Promise(r => setTimeout(r, 1200));
            setStage('explode');

            await new Promise(r => setTimeout(r, 600)); // Hold white for a split second
            setStage('hole-punch');

            // Wait for hole to open fully before showing text
            await new Promise(r => setTimeout(r, 1500));
            setStage('reveal');
        };
        sequence();
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
            {/* The Background Video (Always playing underneath) */}
            <div className={`w-full h-full transition-all duration-[3000ms] ${stage === 'reveal' ? 'scale-100' : 'scale-110'}`}>
                <GlobalBackground />
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="text-center">
                        <h1 className={`text-[80px] font-bold text-white drop-shadow-2xl transition-all duration-[2000ms] 
                            ${stage === 'reveal' ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'}`}>
                            Reelin
                        </h1>
                        <p className={`text-xl text-white/70 mt-4 transition-all duration-[2000ms] delay-[1000ms] 
                            ${stage === 'reveal' ? 'opacity-100' : 'opacity-0'}`}>
                            Custom Built AI Systems.
                        </p>
                    </div>
                </div>
            </div>

            {/* The Explosion Layer with Hole Punch Mask */}
            <motion.div
                className="absolute inset-0 z-50 bg-white pointer-events-none"
                initial={{ opacity: 0 }}
                animate={
                    stage === 'implode' ? { opacity: 0 } :
                        stage === 'explode' ? { opacity: 1 } :
                            stage === 'hole-punch' || stage === 'reveal' ? {
                                opacity: 1,
                                // We animate the mask to "open" the hole
                                WebkitMaskImage: [
                                    "radial-gradient(circle at center, transparent 0%, black 0%)",
                                    "radial-gradient(circle at center, transparent 150%, black 150%)"
                                ],
                                maskImage: [
                                    "radial-gradient(circle at center, transparent 0%, black 0%)",
                                    "radial-gradient(circle at center, transparent 150%, black 150%)"
                                ]
                            } : { opacity: 0 }
                }
                transition={
                    stage === 'explode' ? { duration: 0.1 } :
                        stage === 'hole-punch' ? { duration: 2.5, ease: "easeInOut" } :
                            { duration: 0.5 }
                }
                // Once revealed, we can hide this layer to prevent interaction blocking if needed, 
                // but pointer-events-none handles it.
                style={stage === 'reveal' ? { display: 'none' } : {}}
            />

            {/* Implosion Animation (Only visible before explosion) */}
            <AnimatePresence>
                {(stage === 'implode') && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center z-60"
                        exit={{ opacity: 0 }}
                    >
                        {/* Particles */}
                        {Array.from({ length: 50 }).map((_, i) => {
                            const angle = Math.random() * Math.PI * 2;
                            const dist = 300 + Math.random() * 500;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, opacity: 0 }}
                                    animate={{ x: 0, y: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, ease: "circIn", delay: Math.random() * 0.2 }}
                                    className="absolute w-1 h-1 bg-cyan-200 rounded-full shadow-[0_0_10px_cyan]"
                                />
                            );
                        })}

                        {/* Central Mass */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 2], opacity: 1, backgroundColor: '#ffffff' }}
                            transition={{ duration: 1.2 }}
                            className="w-2 h-2 bg-white rounded-full shadow-[0_0_50px_white] z-10"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
