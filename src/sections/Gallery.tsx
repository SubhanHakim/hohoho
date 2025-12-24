import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { ARTWORKS, type Artwork } from '../data/artworks';

interface GalleryProps {
    onSelectArtwork: (artwork: Artwork) => void;
}

export const Gallery = ({ onSelectArtwork }: GalleryProps) => {
    return (
        <section id="art" className="mb-32 px-8 md:px-28">
            <div className="flex items-center justify-between mb-16 border-b border-gray-800/50 pb-6">
                <h3 className="font-mono text-xs tracking-[0.3em] text-neon-cyan/80">
                    VISUAL_LOGS
                </h3>
                <span className="font-mono text-xs text-gray-600">
                    {ARTWORKS.length.toString().padStart(3, '0')} FILES
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ARTWORKS.map((art, index) => (
                    <motion.div
                        key={art.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="group relative cursor-pointer"
                        onClick={() => onSelectArtwork(art)}
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-900 border border-gray-800 transition-colors group-hover:border-neon-cyan/30">
                            <img
                                src={art.image}
                                alt={art.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Overlay Gradient on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Icon */}
                            <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <Maximize2 size={16} className="text-white" />
                            </div>

                            {/* Hover info */}
                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <p className="font-mono text-[10px] text-neon-cyan mb-1 tracking-widest uppercase">{art.type}</p>
                                <h4 className="text-white font-sans text-lg font-light tracking-wide">{art.title}</h4>
                            </div>
                        </div>

                        {/* ID Number (Outside) */}
                        <div className="mt-3 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono text-[10px] tracking-widest">
                                FIG_{art.id.toString().padStart(2, '0')}
                            </span>
                            <span className="font-mono text-[10px] tracking-widest">{art.year}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
