import React from 'react';
import { motion } from 'framer-motion';
import { Starfield } from './Starfield';
import { useAnimation } from '../context/AnimationContext';

export const GlobalBackground: React.FC = () => {
    const { pulse } = useAnimation();

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
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
                <Starfield />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90"></div>

                {/* Brightness Flash Overlay (Performance Optimization) */}
                <motion.div
                    className="absolute inset-0 bg-white mix-blend-overlay"
                    animate={pulse ? { opacity: [0, 0.3, 0] } : { opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
            </motion.div>
        </div>
    );
};
