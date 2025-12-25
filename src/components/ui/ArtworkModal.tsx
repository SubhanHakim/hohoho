import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Artwork } from '../../data/artworks';

interface ArtworkModalProps {
    artwork: Artwork;
    onClose: () => void;
}

export const ArtworkModal = ({ artwork, onClose }: ArtworkModalProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-6xl w-full h-[85vh] md:h-[90vh] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden rounded-sm border border-gray-800 bg-gray-950"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-white/10"
                >
                    <X size={20} />
                </button>

                {/* Left: Image */}
                <div className="w-full h-[50vh] md:h-auto md:flex-1 relative bg-gray-900 group shrink-0">
                    <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-contain"
                    />
                    {/* Grid texture overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none opacity-20" />
                </div>

                {/* Right: Info */}
                <div className="w-full md:w-[400px] border-t md:border-t-0 md:border-l border-gray-800 p-6 md:p-12 flex flex-col justify-between bg-black/50 shrink-0">
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.2em] text-neon-cyan mb-4">
                                <span>TYPE::{artwork.type}</span>
                                <span className="w-px h-3 bg-gray-700" />
                                <span>{artwork.year}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl text-white font-sans font-medium leading-tight tracking-tight">
                                {artwork.title}
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                This visual log has been retrieved from the frozen sector. It depicts a state of winter defined by stillness and structure, devoid of superficial noise.
                            </p>

                            <div className="space-y-3 pt-4 border-t border-gray-800/50">
                                <div className="flex justify-between text-xs font-mono text-gray-500">
                                    <span>RESOLUTION</span>
                                    <span className="text-gray-300">4K_ULTRA</span>
                                </div>
                                <div className="flex justify-between text-xs font-mono text-gray-500">
                                    <span>STATUS</span>
                                    <span className="text-neon-cyan">VERIFIED</span>
                                </div>
                                <div className="flex justify-between text-xs font-mono text-gray-500">
                                    <span>SOURCE</span>
                                    <span className="text-gray-300">ARCHIVE_0{artwork.id}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12">
                        <button className="w-full py-4 border border-gray-700 hover:border-neon-cyan text-xs font-mono tracking-widest text-gray-400 hover:text-white hover:bg-neon-cyan/5 transition-all duration-300 flex items-center justify-center gap-2">
                            <span>DOWNLOAD_LOG</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div >
    );
};
