import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlobalBackground } from '../../components/GlobalBackground';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/ui/Button';

export const OpeningV3: React.FC = () => {
    // Stages: 'initial' -> 'reveal' -> 'pulse1' -> 'text' -> 'pulse2' -> 'buttons'
    const [stage, setStage] = useState<'initial' | 'reveal' | 'pulse1' | 'text' | 'pulse2' | 'buttons'>('initial');

    useEffect(() => {
        const sequence = async () => {
            // 1. Initial Black Screen -> Reveal Hole (Fade In)
            await new Promise(r => setTimeout(r, 200));
            setStage('reveal');

            // 2. Wait for reveal to complete, then short pause before Pulse 1
            await new Promise(r => setTimeout(r, 1200)); // 1.2s for reveal to settle
            setStage('pulse1');

            // 3. Pulse 1 triggers Text
            await new Promise(r => setTimeout(r, 400)); // Fast pulse
            setStage('text');

            // 4. Wait, then Pulse 2
            await new Promise(r => setTimeout(r, 300)); // Even faster cadence
            setStage('pulse2');

            // 5. Pulse 2 triggers Buttons
            await new Promise(r => setTimeout(r, 400));
            setStage('buttons');
        };
        sequence();
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-sans text-white">
            {/* 1. Navbar */}
            <div className={`fixed top-0 w-full z-50 transition-opacity duration-1000 ${['text', 'pulse2', 'buttons'].includes(stage) ? 'opacity-100' : 'opacity-0'}`}>
                <Navbar />
            </div>

            {/* 2. Global Background with Pulse Effects */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 1.1 }} // Start Black
                animate={
                    stage === 'initial' ? { opacity: 0, scale: 1.1 } :
                        stage === 'reveal' ? { opacity: 1, scale: 1 } : // Smooth Fade In
                            stage === 'pulse1' ? { opacity: 1, scale: [1, 1.05, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] } :
                                stage === 'text' ? { opacity: 1, scale: 1 } :
                                    stage === 'pulse2' ? { opacity: 1, scale: [1, 1.05, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] } :
                                        { opacity: 1, scale: 1 }
                }
                transition={
                    stage === 'reveal' ? { duration: 1.5, ease: "easeOut" } : // Smooth fade duration
                        (stage === 'pulse1' || stage === 'pulse2')
                            ? { duration: 0.4, ease: "easeInOut" } // snappier pulse
                            : { duration: 0.5 }
                }
            >
                <GlobalBackground />
            </motion.div>

            {/* 3. Hero Content Matches Home.tsx Exactly */}
            <div className="absolute inset-0 flex flex-col items-center pt-32 pb-0 px-6 z-10 pointer-events-none">
                <div className="text-center max-w-4xl mx-auto z-20 mt-16 flex flex-col items-center">

                    {/* H1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={['text', 'pulse2', 'buttons'].includes(stage) ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                        className="text-[44px] md:text-[64px] lg:text-[80px] font-bold font-sans tracking-[-0.01em] leading-[1.1] text-white drop-shadow-2xl [text-shadow:_0_0_40px_rgba(255,255,255,0.3)] text-center"
                    >
                        Reelin
                    </motion.h1>

                    {/* H2 Wrapper */}
                    <div className="mt-6 mb-10 max-w-xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={['text', 'pulse2', 'buttons'].includes(stage) ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                            className="text-[20px] font-medium font-sans leading-[28px] tracking-[0.05em] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
                        >
                            Custom Built AI Systems.
                        </motion.h2>
                    </div>

                    {/* Button Group (pointer-events-auto needed for interaction) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={stage === 'buttons' ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
                    >
                        <Button size="lg" className="bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-full font-medium text-[15px] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
                            Start Now
                        </Button>
                        <Button variant="secondary" size="lg" className="bg-white/5 text-white hover:bg-white/10 border border-white/5 px-6 py-3 rounded-full font-medium text-[15px] backdrop-blur-md transition-all hover:scale-105">
                            Explore
                        </Button>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};
