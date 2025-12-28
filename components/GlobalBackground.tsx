import React from 'react';
import { motion } from 'framer-motion';
import { Starfield } from './Starfield';
import { useAnimation } from '../context/AnimationContext';

export const GlobalBackground: React.FC = () => {
    const { pulse } = useAnimation();

    return (
        <motion.div
            className="fixed inset-0 z-0 pointer-events-none"
            animate={pulse ? {
                scale: [1, 1.05, 1],
                filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
            } : {
                scale: 1,
                filter: "brightness(1)"
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
        </motion.div>
    );
};
