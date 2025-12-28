import React, { useEffect, useRef, useState } from 'react';
import { GlobalBackground } from '../../components/GlobalBackground';

export const OpeningV4: React.FC = () => {
    const [stage, setStage] = useState<'warp' | 'exit' | 'reveal'>('warp');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        setTimeout(() => setStage('exit'), 2000); // Warp for 2s
        setTimeout(() => setStage('reveal'), 2300); // Brief flash/exit transition needed?
    }, []);

    useEffect(() => {
        if (stage !== 'warp') return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let stars = Array.from({ length: 300 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * 2000, // depth
        }));

        const animate = () => {
            if (stage !== 'warp') return;
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            ctx.fillStyle = 'white';

            stars.forEach(star => {
                // Move star towards screen (z decreases)
                star.z -= 40; // FAST speed
                if (star.z <= 0) {
                    star.z = 2000;
                    star.x = Math.random() * canvas.width;
                    star.y = Math.random() * canvas.height;
                }

                const scale = 1000 / star.z;
                const x = (star.x - cx) * scale + cx;
                const y = (star.y - cy) * scale + cy;
                const r = scale * 1.5;

                // Draw Warp Line
                const tailX = (star.x - cx) * (scale * 0.9) + cx;
                const tailY = (star.y - cy) * (scale * 0.9) + cy;

                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(tailX, tailY);
                ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(1, scale * 0.5)})`;
                ctx.lineWidth = r;
                ctx.stroke();
            });

            requestAnimationFrame(animate);
        };

        // Resize handler
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();
        requestAnimationFrame(animate);

        return () => window.removeEventListener('resize', resize);
    }, [stage]);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <div className={`transition-opacity duration-1000 ${stage === 'reveal' ? 'opacity-100' : 'opacity-0'}`}>
                <GlobalBackground />
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="text-center">
                        <h1 className="text-[80px] font-bold text-white drop-shadow-2xl animate-[fadeIn_2s_ease-out_forwards]">Reelin</h1>
                    </div>
                </div>
            </div>

            {/* Warp Canvas Overlay */}
            <div className={`absolute inset-0 z-50 pointer-events-none transition-opacity duration-300 ${stage === 'warp' ? 'opacity-100' : 'opacity-0'}`}>
                <canvas ref={canvasRef} className="w-full h-full" />
                {/* Singularity Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_50px_white,0_0_100px_cyan]"></div>
            </div>
        </div>
    );
};
