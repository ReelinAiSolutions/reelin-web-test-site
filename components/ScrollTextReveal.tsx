import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollTextRevealProps {
    text: string | React.ReactNode;
    className?: string;
    subtitle?: string;
}

const Word = ({
    children,
    progress,
    index,
    totalWords
}: {
    children: React.ReactNode;
    progress: MotionValue<number>;
    index: number;
    totalWords: number;
}) => {
    // Logic refined to match tutorial-01-text-w-progress.html more closely for pacing.
    // The reference uses a step based on total words.
    // We want a sequential reveal.

    const step = 1 / totalWords;
    const start = index * step;
    // We can add a small "end" buffer so it's not INSTANT, but the "slide" takes a bit of scroll.
    // If we want it to look like the tutorial (where words slide up smoothly), we need a duration.
    // Tutorial: --word-progress passes 0->1 as --progress passes --word-turn.
    // The divisor is --word-step.
    // So duration IS step.
    const duration = step;

    // We map global progress to local word progress 0..1
    const wordProgress = useTransform(progress, (latest) => {
        const val = (latest - start) / duration;
        return Math.min(Math.max(val, 0), 1);
    });

    // Animate Y from 100% (below) to 0% (natural position)
    const y = useTransform(wordProgress, [0, 1], ["100%", "0%"]);

    // Opacity: The tutorial has a hard clip. We will use opacity fade + motion to simulate smooth entry.
    // To mimic the "clip" feel, we can ramp opacity fast.
    const opacity = useTransform(wordProgress, [0, 0.5], [0, 1]);

    return (
        <span className="relative inline-block mr-[0.25em] leading-[1.1] overflow-hidden -mb-[0.1em] text-white">
            <motion.span
                style={{ y, opacity }}
                className="inline-block pb-[0.1em] will-change-transform"
            >
                {children}
            </motion.span>
        </span>
    );
};

export const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({ text, className = "", subtitle }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const words = typeof text === 'string' ? text.split(" ") : [];

    return (
        <div ref={containerRef} className={`relative min-h-[400vh] ${className}`}>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center max-w-6xl mx-auto px-6 flex flex-wrap justify-center">
                    {typeof text === 'string' ? (
                        words.map((word, i) => (
                            <Word
                                key={i}
                                progress={scrollYProgress}
                                index={i}
                                totalWords={words.length}
                            >
                                {word}
                            </Word>
                        ))
                    ) : text}
                </h2>

                {subtitle && (
                    <motion.p
                        // Subtitle fades in only after 80% of the scroll is done
                        style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]) }}
                        className="mt-12 text-xl md:text-2xl text-reflect-subtext max-w-3xl text-center px-6 leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};
