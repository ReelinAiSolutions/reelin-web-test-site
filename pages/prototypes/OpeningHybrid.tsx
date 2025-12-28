import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalBackground } from '../../components/GlobalBackground';

export const OpeningHybrid: React.FC = () => {
    // Stages: 
    // 1. 'implode': Particles suck in (V2)
    // 2. 'explode': White flash expands (V2)
    // 3. 'transition': Flash fades out, revealing blurred content (V3 start)
    // 4. 'reveal': Content focuses and settles (V3 finish)
    const [stage, setStage] = useState<'implode' | 'explode' | 'transition' | 'reveal'>('implode');

    useEffect(() => {
        const sequence = async () => {
            // Wait a moment before starting
            await new Promise(r => setTimeout(r, 500));
            setStage('implode');

            // Implosion duration
            await new Promise(r => setTimeout(r, 1200));
            setStage('explode');

            // Flash expansion duration (very fast)
            await new Promise(r => setTimeout(r, 200));
            setStage('transition');

            // Allow flash to fade slightly before triggering the focus reveal
            await new Promise(r => setTimeout(r, 100));
            setStage('reveal');
        };
        sequence();
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
            {/* 3. The Content (V3 Finish style) */}
            {/* It sits behind the animation overlay, always rendered but styled based on stage */}
            <div
                className={`transform transition-all duration-[2500ms] ease-out w-full h-full 
                ${(stage === 'reveal' || stage === 'transition') ? 'opacity-100' : 'opacity-0'}
                ${stage === 'reveal' ? 'blur-0 scale-100' : 'blur-3xl scale-125'}
                `}
            >
                <GlobalBackground />
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="text-center">
                        {/* Text follows the V3 reveal logic */}
                        <h1 className={`text-[80px] font-bold text-white drop-shadow-2xl transition-all duration-[2000ms] delay-500 
                            ${stage === 'reveal' ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'}`}>
                            Reelin
                        </h1>
                        <p className={`text-xl text-white/70 mt-4 transition-all duration-[2000ms] delay-[1500ms] 
                            ${stage === 'reveal' ? 'opacity-100' : 'opacity-0'}`}>
                            Custom Built AI Systems.
                        </p>
                    </div>
                </div>
            </div>

            {/* Animation Overlay (V2 Start style) */}
            <AnimatePresence>
                {stage !== 'reveal' && stage !== 'transition' && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center z-50 bg-black"
                        exit={{ opacity: 0 }}
                    >
                        {/* Implosion Particles */}
                        {stage === 'implode' && Array.from({ length: 50 }).map((_, i) => {
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

                        {/* Central Mass / Explosion */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={
                                stage === 'implode'
                                    ? { scale: [0, 2], opacity: 1, backgroundColor: '#ffffff' }
                                    : { scale: 100, opacity: 1, backgroundColor: '#ffffff' } // Explode to fill screen
                            }
                            transition={
                                stage === 'implode'
                                    ? { duration: 1.2 }
                                    : { duration: 0.5, ease: "circOut" }
                            }
                            className="w-2 h-2 bg-white rounded-full shadow-[0_0_50px_white] z-10"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Flash Fade Out Overlay */}
            {/* When the V2 explosion fills the screen, we need to fade it out to reveal the V3 content */}
            <div
                className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-[1500ms] ease-out z-40
                ${(stage === 'transition' || stage === 'reveal') ? 'opacity-0' : 'opacity-0'} 
                ${stage === 'explode' ? '!opacity-100' : ''}
                `}
            ></div>
        </div>
    );
};
