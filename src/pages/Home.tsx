import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Snowfall } from '../components/ui/Snowfall';
import { ArtworkModal } from '../components/ui/ArtworkModal';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../sections/Hero';
import { Gallery } from '../sections/Gallery';
import { About } from '../sections/About';
import { Support } from '../sections/Support';
import type { Artwork } from '../data/artworks';
import '../App.css';

export const Home = () => {
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

    return (
        <div className="min-h-screen bg-winter-black text-slate-300 relative overflow-hidden">
            <Snowfall />
            <Header />

            {/* Decorative Lines */}
            <div className="fixed top-0 bottom-0 left-8 w-px bg-gray-900 hidden lg:block z-0" />
            <div className="fixed top-0 bottom-0 right-8 w-px bg-gray-900 hidden lg:block z-0" />

            <main className="relative z-10 pt-32 pb-20">
                <Hero />
                <About />
                <Gallery onSelectArtwork={setSelectedArtwork} />
                <Support />
            </main>

            <Footer />

            <AnimatePresence>
                {selectedArtwork && (
                    <ArtworkModal
                        artwork={selectedArtwork}
                        onClose={() => setSelectedArtwork(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
