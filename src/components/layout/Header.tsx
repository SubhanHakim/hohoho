import { Link, useLocation } from 'react-router-dom';
import dexscreenerLogo from '../../dexscreener.svg';

export const Header = () => {
    const location = useLocation();
    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT', href: '#about' },
        { name: 'ART', href: '#art' },
        { name: 'BACKROOMS', href: '/backrooms' }
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-8 py-6 md:px-28 pointer-events-none">
            {/* Left: Brand */}
            <div className="pointer-events-auto z-50">
                <Link to="/" className="font-sans font-bold text-lg tracking-widest text-white hover:opacity-80 transition-opacity cursor-pointer">
                    HO<span className="text-neon-cyan">HO</span>HO
                </Link>
            </div>

            {/* Center: Navigation Pill */}
            <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 hidden md:block z-50">
                <nav className="flex items-center gap-1 p-1 bg-winter-gray/40 backdrop-blur-md border border-white/5 rounded-full shadow-lg shadow-black/20">
                    {navLinks.map((link) => {
                        const isHash = link.href.startsWith('#');
                        const isActive = isHash
                            ? false // Simple hash check usually requires scroll spy, ignoring for now
                            : location.pathname === link.href;

                        return isHash ? (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className="px-6 py-2 text-xs font-mono text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
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

            {/* Right: Social Actions */}
            <div className="pointer-events-auto flex items-center gap-3 z-50">
                {/* Pumpfun / Dexscreener Button */}
                <a
                    href="https://pump.fun"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-winter-gray/40 backdrop-blur-md border border-white/5 rounded-full hover:bg-neon-cyan/20 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 group"
                >
                    <img src={dexscreenerLogo} alt="Pump.fun" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity brightness-200" />
                </a>

                {/* X Button */}
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-winter-gray/40 backdrop-blur-md border border-white/5 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                >
                    <span className="font-sans text-sm text-gray-400 group-hover:text-white font-bold">𝕏</span>
                </a>
            </div>
        </header>
    );
};

