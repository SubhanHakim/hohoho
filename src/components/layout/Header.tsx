import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import dexscreenerLogo from '../../dexscreener.svg';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    // ScrollSpy Logic
    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname !== '/') return;

            const scrollPosition = window.scrollY;

            // Define sections to track
            const sections = [
                { id: 'about', offset: 0 },
                { id: 'art', offset: 0 }
            ];

            // Default to home at the top
            let current = 'home';

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section top is near the middle/top of viewport
                    if (rect.top <= window.innerHeight / 2) {
                        current = section.id;
                    }
                }
            }

            // Special case: if at very top, force home
            if (scrollPosition < 100) {
                current = 'home';
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const navLinks = [
        { name: 'HOME', href: '/', id: 'home' },
        { name: 'ABOUT', href: '#about', id: 'about' },
        { name: 'ART', href: '#art', id: 'art' },
        { name: 'BACKROOMS', href: '/backrooms', id: 'backrooms' }
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                if ((window as any).lenis) {
                    (window as any).lenis.scrollTo(href, {
                        duration: 2.0,
                        easing: (t: number) => 1 - Math.pow(1 - t, 4)
                    });
                } else {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
                setIsOpen(false);
            }
        } else {
            setIsOpen(false);
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-28 pointer-events-none">
                {/* Left: Brand */}
                <div className="pointer-events-auto z-50">
                    <Link to="/" className="font-sans font-bold text-lg tracking-widest text-white hover:opacity-80 transition-opacity cursor-pointer">
                        HO<span className="text-neon-cyan">HO</span>HO
                    </Link>
                </div>

                {/* Center: Desktop Navigation Pill */}
                <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 hidden md:block z-50">
                    <nav className="flex items-center gap-1 p-1 bg-winter-gray/40 backdrop-blur-md border border-white/5 rounded-full shadow-lg shadow-black/20">
                        {navLinks.map((link) => {
                            const isHash = link.href.startsWith('#');

                            // Determine active state
                            let isActive = false;
                            if (link.href === '/backrooms') {
                                isActive = location.pathname === '/backrooms';
                            } else if (location.pathname === '/') {
                                if (link.id === 'home') isActive = activeSection === 'home';
                                else isActive = activeSection === link.id;
                            }

                            return isHash ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    className={`px-6 py-2 text-xs font-mono rounded-full transition-all duration-300 ${isActive
                                        ? 'text-neon-cyan bg-white/10'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`px-6 py-2 text-xs font-mono rounded-full transition-all duration-300 ${isActive
                                        ? 'text-neon-cyan bg-white/10'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Right: Actions */}
                <div className="pointer-events-auto flex items-center gap-3 z-50">
                    {/* Socials (Desktop & Mobile) */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://pump.fun"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden md:flex w-10 h-10 items-center justify-center bg-winter-gray/40 backdrop-blur-md border border-white/5 rounded-full hover:bg-neon-cyan/20 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 group"
                        >
                            <img src={dexscreenerLogo} alt="Pump.fun" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity brightness-200" />
                        </a>

                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden md:flex w-10 h-10 items-center justify-center bg-winter-gray/40 backdrop-blur-md border border-white/5 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                        >
                            <span className="font-sans text-sm text-gray-400 group-hover:text-white font-bold">𝕏</span>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center bg-winter-gray/40 backdrop-blur-md border border-white/5 rounded-full text-white hover:bg-white/10 transition-colors"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-32 px-8 md:hidden flex flex-col items-center"
                    >
                        <nav className="flex flex-col items-center gap-8 w-full">
                            {navLinks.map((link, i) => {
                                const isHash = link.href.startsWith('#');
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="w-full text-center"
                                    >
                                        {isHash ? (
                                            <a
                                                href={link.href}
                                                onClick={(e) => handleClick(e, link.href)}
                                                className="block w-full py-4 text-2xl font-mono text-gray-400 hover:text-white hover:bg-white/5 border-b border-gray-800 transition-all"
                                            >
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`block w-full py-4 text-2xl font-mono border-b border-gray-800 transition-all ${location.pathname === link.href
                                                    ? 'text-neon-cyan'
                                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </nav>

                        {/* Mobile Socials */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 flex items-center gap-6"
                        >
                            <a
                                href="https://pump.fun"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-full hover:border-neon-cyan/50 transition-colors"
                            >
                                <img src={dexscreenerLogo} alt="Pump.fun" className="w-6 h-6 opacity-70 brightness-200" />
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-full hover:border-white/50 transition-colors"
                            >
                                <span className="font-sans text-lg text-white font-bold">𝕏</span>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
