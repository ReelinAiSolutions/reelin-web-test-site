import React, { useEffect, useRef } from 'react';

export const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        setSize();

        // Critical Crash Fix: Disable Starfield logic entirely on mobile to save CPU/GPU
        if (width < 768) return;

        window.addEventListener('resize', setSize);

        // Star data
        const isMobile = width < 768;
        const starCount = isMobile ? 50 : 150;

        const stars = Array.from({ length: starCount }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.5,
            opacity: Math.random(),
            speed: Math.random() * 0.05 + 0.01
        }));

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach(star => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Twinkle
                star.opacity += (Math.random() - 0.5) * 0.1;
                if (star.opacity < 0) star.opacity = 0;
                if (star.opacity > 0.8) star.opacity = 0.8;

                // Drift
                star.y -= star.speed;
                if (star.y < 0) star.y = height;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen"
        />
    );
};
