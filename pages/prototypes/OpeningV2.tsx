import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalBackground } from '../../components/GlobalBackground';

export const OpeningV2: React.FC = () => {
    const [stage, setStage] = useState<'initial' | 'implode' | 'explode' | 'reveal'>('initial');

    useEffect(() => {
        const sequence = async () => {
            await new Promise(r => setTimeout(r, 500));
            setStage('implode');
            await new Promise(r => setTimeout(r, 1200));
            setStage('explode');
            await new Promise(r => setTimeout(r, 400));
            setStage('reveal');
        };
        sequence();
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <div className={`transition-opacity duration-1000 ${stage === 'reveal' ? 'opacity-100' : 'opacity-0'}`}>
                <GlobalBackground />
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="text-center">
                        <h1 className="text-[80px] font-bold text-white drop-shadow-2xl opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">Reelin</h1>
                        <p className="text-xl text-white/70 mt-4 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">Custom Built AI Systems.</p>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {stage !== 'reveal' && (
                    <motion.div className="absolute inset-0 flex items-center justify-center z-50 bg-black" exit={{ opacity: 0 }}>
                        {/* Implosion Particles */}
                        {stage === 'implode' && Array.from({ length: 40 }).map((_, i) => {
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
                            animate={
                                stage === 'implode'
                                    ? { scale: [0, 1.5], opacity: 1 }
                                    : { scale: 80, opacity: 0, backgroundColor: '#ffffff' }
                            }
                            transition={stage === 'implode' ? { duration: 1.2 } : { duration: 0.5, ease: "circOut" }}
                            className="w-2 h-2 bg-white rounded-full shadow-[0_0_50px_white] z-10"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
