import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import aboutImg from '../assets/about.png';

const WorldClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const zones = [
        { city: 'US', zone: 'America/New_York' },
    ];

    return (
        <div className="space-y-2 font-mono text-[10px] tracking-widest text-gray-500 border-t border-gray-800 pt-4 mt-8">
            {zones.map((z) => (
                <div key={z.city} className="flex justify-between items-center group cursor-default hover:text-white transition-colors">
                    <span className="w-8">{z.city}</span>
                    <span className="text-gray-400 font-bold group-hover:text-neon-cyan transition-colors">
                        {time.toLocaleTimeString('en-US', { timeZone: z.zone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
                    </span>
                </div>
            ))}
        </div>
    );
};

export const About = () => {
    return (
        <section id="about" className="relative py-32 px-8 md:px-28">
            <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start border-t border-gray-800/30 pt-20">

                {/* --- Left Column: Visuals & Data --- */}
                <div className="md:col-span-5 space-y-8 md:sticky md:top-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative overflow-hidden rounded-sm bg-gray-900/50 aspect-square w-full md:w-4/5 border border-gray-800 mb-6 group">
                            <img
                                src={aboutImg}
                                alt="HOHOHO Archive"
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            />
                            {/* Overlay Scanline - Reduced opacity */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-10" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-sans font-bold text-white tracking-tighter mb-2">HOHOHO</h2>
                            <p className="font-mono text-xs text-gray-500">ARCHIVE_SYSTEM_V2</p>
                            <WorldClock />
                        </div>
                    </motion.div>
                </div>

                {/* --- Right Column: The Narrative --- */}
                <div className="md:col-span-7 pt-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="prose max-w-none"
                    >
                        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                            <span className="text-white font-medium">HOHOHO</span> is a winter archive built through reduction. Christmas is not presented as celebration or imagery, but processed as a system under compression, where surface, noise, and decoration fall away.
                        </p>

                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mt-10">
                            What remains is structure: ASCII symbols, constrained color, and muted neon tones holding residual warmth. Figures appear only as reduced silhouettes, not representations, documenting winter after it has been flattened into data and preserved in silence.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
