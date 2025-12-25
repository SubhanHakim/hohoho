import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import logo from '../assets/logo.webp';
import LightRays from '../components/ui/LightRays';

export const Hero = () => {
    const [copied, setCopied] = useState(false);
    const CA = "COMING SOON"; // Placeholder CA

    const handleCopy = () => {
        navigator.clipboard.writeText(CA);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 items-center px-8 md:px-28 relative pt-20">
            <LightRays
                raysOrigin="top-center"
                raysColor="#0099ff"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="-top-32 md:-top-48 h-[120vh]"
            />

            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="space-y-8 z-10"
            >
                <div className="space-y-4">
                    <h2 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                        <span className="text-white">HOHOHO</span>
                    </h2>

                    <p className="font-sans text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
                        Where celebration faded into signal and warmth fragmented into color, HOHOHO remains as an archive a winter translated into symbols, held quietly within code.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                    <a href="https://twitter.com" target="_blank" className="btn-primary flex items-center gap-2 group">
                        TWITTER_X
                    </a>
                    <a href="https://pump.fun" target="_blank" className="btn-secondary group">
                        PUMP.FUN
                    </a>
                </div>

                {/* Contract Address Section */}
                <div className="pt-8 border-t border-gray-800/50 mt-12 w-full max-w-md">
                    <p className="text-[10px] font-mono text-gray-500 mb-2 tracking-widest uppercase">CONTRACT_ADDRESS</p>
                    <button
                        onClick={handleCopy}
                        className="w-full flex items-center justify-between bg-gray-900/40 border border-gray-800 hover:border-gray-600 hover:bg-gray-900/60 p-4 rounded-sm group transition-all duration-300"
                    >
                        <span className="font-mono text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors truncate mr-4">
                            {CA}
                        </span>
                        <div className="flex items-center gap-2">
                            {copied ? (
                                <span className="flex items-center gap-2 text-[10px] md:text-xs text-neon-cyan font-mono bg-neon-cyan/10 px-2 py-1 rounded-sm">
                                    <Check size={14} />
                                    COPIED
                                </span>
                            ) : (
                                <span className="flex items-center gap-2 text-[10px] md:text-xs text-gray-600 group-hover:text-white font-mono bg-gray-800/50 group-hover:bg-gray-700 px-2 py-1 rounded-sm transition-all">
                                    <Copy size={14} />
                                    COPY
                                </span>
                            )}
                        </div>
                    </button>
                </div>
            </motion.div>

            {/* Right Visual: Large Logo Only */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative h-[400px] md:h-[600px] flex items-center justify-center -order-1 lg:order-1"
            >

                <motion.div
                    animate={{ y: [-20, 20, -20] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                >
                    <img
                        src={logo}
                        alt="HOHOHO"
                        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-contain rounded-3xl"
                    />
                </motion.div>

                {/* Subtle backlight glow behind the logo */}
                <div className="absolute inset-0 bg-neon-cyan/5 rounded-full blur-[120px] -z-10 transform scale-75" />
            </motion.div>
        </section>
    );
};
