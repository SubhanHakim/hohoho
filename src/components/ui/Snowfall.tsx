import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Snowfall = () => {
    const [flakes, setFlakes] = useState<{ id: number; left: number; duration: number; delay: number; color: string; size: number }[]>([]);

    useEffect(() => {
        const colors = ['bg-white', 'bg-neon-cyan', 'bg-neon-magenta'];
        const newFlakes = Array.from({ length: 75 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 2 + 1 // 1px to 3px
        }));
        setFlakes(newFlakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {flakes.map((flake) => (
                <motion.div
                    key={flake.id}
                    className={`absolute top-0 rounded-full ${flake.color}`}
                    style={{
                        left: `${flake.left}%`,
                        width: flake.size,
                        height: flake.size
                    }}
                    animate={{
                        y: ['-10vh', '110vh'],
                        opacity: [0, 0.4, 0.8, 0.4, 0], // Twinkle effect
                        x: [0, Math.random() * 20 - 10, 0] // Gentle sway
                    }}
                    transition={{
                        duration: flake.duration,
                        repeat: Infinity,
                        delay: flake.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};
