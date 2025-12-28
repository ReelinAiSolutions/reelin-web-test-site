import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalBackground } from '../../components/GlobalBackground';

export const OpeningV5: React.FC = () => {
    const [stage, setStage] = useState<'glitch' | 'stabilize' | 'reveal'>('glitch');

    useEffect(() => {
        setTimeout(() => setStage('stabilize'), 1500);
        setTimeout(() => setStage('reveal'), 2500);
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-mono">
            <div className={`transition-all duration-1000 ${stage === 'reveal' ? 'opacity-100 grayscale-0' : 'opacity-0 grayscale'}`}>
                <GlobalBackground />
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="text-center font-sans">
                        <h1 className="text-[80px] font-bold text-white drop-shadow-2xl">Reelin</h1>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {stage !== 'reveal' && (
                    <motion.div className="absolute inset-0 z-50 bg-black flex items-center justify-center" exit={{ opacity: 0 }}>
                        <div className="relative">
                            {/* Glitchy Text */}
                            <motion.div
                                animate={{
                                    x: [0, -5, 5, -2, 0],
                                    opacity: [1, 0.8, 1, 0.5, 1],
                                    scaleY: [1, 1.2, 0.8, 1]
                                }}
                                transition={{ repeat: Infinity, duration: 0.2 }}
                                className="text-cyan-500 text-6xl font-bold tracking-widest"
                            >
                                SYSTEM_INIT...
                            </motion.div>

                            {/* Loading Bar */}
                            <div className="w-64 h-2 bg-zinc-800 mt-4 overflow-hidden">
                                <motion.div
                                    className="h-full bg-cyan-500"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "linear" }}
                                />
                            </div>

                            {/* Terminal Output */}
                            <div className="absolute top-20 left-0 text-xs text-green-500 opacity-70">
                                {['> Loading assets...', '> Decrypting layout...', '> Rendering singularity...', '> Success.'].map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.4 }}
                                    >
                                        {line}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
