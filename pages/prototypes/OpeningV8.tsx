import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalBackground } from '../../components/GlobalBackground';
import { Navbar } from '../../components/Navbar';

export const OpeningV8: React.FC = () => {
    // Stages: 'stars' -> 'pulse' -> 'hole' -> 'ui'
    const [stage, setStage] = useState<'stars' | 'pulse' | 'hole' | 'ui'>('stars');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const sequence = async () => {
            // 1. Star Implosion (Gentle)
            await new Promise(r => setTimeout(r, 3000));
            setStage('pulse');

            // 2. Pulse / Expansion (Smooth, not flash)
            await new Promise(r => setTimeout(r, 1000));
            setStage('hole');

            // 3. Hole Opens (Reveal Background)
            await new Promise(r => setTimeout(r, 1500));
            setStage('ui');
        };
        sequence();
    }, []);

    // Star Implosion Effect (Refined)
    useEffect(() => {
        if (stage !== 'stars') return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Reduced star count
        const stars = Array.from({ length: 150 }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.5,
            opacity: Math.random(),
            speed: 1 + Math.random() * 2 // Slower
        }));

        const animate = () => {
            if (stage !== 'stars') return;
            ctx.clearRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;

            ctx.fillStyle = "white";

            stars.forEach(star => {
                const dx = cx - star.x;
                const dy = cy - star.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Gentle acceleration
                const force = 500 / (dist + 50);
                const vx = (dx / dist) * star.speed * (1 + force * 0.1);
                const vy = (dy / dist) * star.speed * (1 + force * 0.1);

                star.x += vx;
                star.y += vy;

                // Shimmer
                star.opacity = 0.3 + Math.sin(Date.now() * 0.005 * star.speed) * 0.4;

                // Fade out as they get absorbed into the center (radius 20)
                if (dist < 50) {
                    star.opacity = Math.max(0, star.opacity * (dist / 50));
                }

                ctx.globalAlpha = star.opacity;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                if (dist < 5) {
                    star.x = Math.random() * width;
                    star.y = Math.random() * height;
                    star.opacity = 0;
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [stage]);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-sans text-white">
            {/* 1. Underlying Global Background */}
            <div className={`absolute inset-0 transition-transform duration-[3000ms] ${stage === 'ui' ? 'scale-100' : 'scale-105'}`}>
                <GlobalBackground />
            </div>

            {/* 2. Navbar */}
            <div className={`fixed top-0 w-full z-50 transition-all duration-1000 ${stage === 'ui' ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
                <Navbar />
            </div>

            {/* 3. Hero Content */}
            {stage === 'ui' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none">
                    <div className="text-center max-w-4xl px-4">
                        <motion.h1
                            initial={{ scale: 2, opacity: 0, filter: "blur(10px)" }}
                            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                            className="text-6xl md:text-8xl font-bold tracking-tight mb-6 drop-shadow-2xl"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
                                Reelin
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ scale: 1.5, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                            className="text-xl md:text-2xl text-zinc-400 mb-10"
                        >
                            Custom Built AI Systems.
                        </motion.p>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
                        >
                            <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
                                Get Started
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-colors">
                                Learn More
                            </button>
                        </motion.div>
                    </div>
                </div>
            )}

            {/* 4. Explosion/Expansion Overlay */}
            {/* Instead of a solid white block, we use a Masked Overlay that expands */}
            <motion.div
                className="absolute inset-0 z-30 bg-white pointer-events-none"
                initial={{ opacity: 0 }}
                animate={
                    stage === 'stars' ? { opacity: 0 } :
                        stage === 'pulse' ? { opacity: 1 } : // Fade in smoothly
                            (stage === 'hole' || stage === 'ui') ? {
                                opacity: 1,
                                // @ts-ignore
                                WebkitMaskImage: [
                                    "radial-gradient(circle at center, transparent 0%, black 0%)",
                                    "radial-gradient(circle at center, transparent 150%, black 150%)"
                                ],
                                // @ts-ignore
                                maskImage: [
                                    "radial-gradient(circle at center, transparent 0%, black 0%)",
                                    "radial-gradient(circle at center, transparent 150%, black 150%)"
                                ]
                            } : {}
                }
                transition={
                    stage === 'pulse' ? { duration: 0.8, ease: "easeInOut" } : // Smooth fade in of white
                        stage === 'hole' ? { duration: 2.5, ease: "easeInOut" } : {} // Slow expansion of hole
                }
                style={stage === 'ui' ? { display: 'none' } : {}}
            />

            {/* 5. Star Canvas */}
            {stage === 'stars' && (
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-20 pointer-events-none bg-black"
                />
            )}

            {/* 6. Central Singularity / Core */}
            <AnimatePresence>
                {stage !== 'ui' && stage !== 'hole' && (
                    <div className="absolute inset-0 flex items-center justify-center z-25 pointer-events-none">
                        {/* The Dim Core */}
                        <motion.div
                            initial={{ scale: 1, opacity: 1 }}
                            animate={
                                stage === 'stars' ? { scale: [1, 1.1, 1], opacity: 1 } :
                                    stage === 'pulse' ? { scale: 50, opacity: 0, backgroundColor: '#ffffff' } : {} // Grows into the white screen
                            }
                            transition={
                                stage === 'stars' ? { repeat: Infinity, duration: 4, ease: "easeInOut" } :
                                    stage === 'pulse' ? { duration: 1.2, ease: "easeInOut" } : {}
                            }
                            className={`rounded-full bg-zinc-900 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]
                                ${stage === 'stars' ? 'w-12 h-12' : 'w-12 h-12'}
                            `}
                        >
                            {/* Inner light */}
                            <div className="w-full h-full rounded-full bg-white/5 animate-pulse" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
};
