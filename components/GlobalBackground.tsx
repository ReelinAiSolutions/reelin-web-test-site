import React from 'react';
import { motion, MotionStyle } from 'framer-motion';
import { Starfield } from './Starfield';
import { useAnimation } from '../context/AnimationContext';

interface Props {
    style?: MotionStyle;
    className?: string;
}

export const GlobalBackground: React.FC<Props> = ({ style, className }) => {
    const { pulse } = useAnimation();

    return (
        <motion.div
            style={style}
            className={`fixed inset-0 z-0 pointer-events-none overflow-hidden ${className || ''}`}
        >
            <motion.div
                className="absolute inset-0"
                animate={pulse ? {
                    scale: [1, 1.05, 1],
                } : {
                    scale: 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="absolute inset-0 bg-[#030014]"></div>

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-screen"
                    src="https://reflect.app/home/build/q-c3d7becf.webm"
                />

                {/* SINGULARITY MASK: deeper gradient, no solid edge, blends naturally */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: 'radial-gradient(circle at center, #000000 0%, transparent 30%)'
                    }}
                />

                <Starfield />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90"></div>

                {/* Brightness Flash Overlay (Performance Optimization) */}
                <motion.div
                    className="absolute inset-0 bg-white mix-blend-overlay"
                    animate={pulse ? { opacity: [0, 0.3, 0] } : { opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
            </motion.div>
        </motion.div>
    );
};
