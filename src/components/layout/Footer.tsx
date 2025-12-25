import { Link } from 'react-router-dom';
import dexscreenerLogo from '../../dexscreener.svg';

export const Footer = () => {
    return (
        <footer className="border-t border-gray-900 py-12 flex flex-col gap-6 items-center">
            {/* Socials */}
            <div className="flex items-center gap-4">
                <a
                    href="https://pump.fun/coin/EYFftMefApeLLninT8zw4UQ3moNjESFceNFKoVRkpump"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-gray-900/50 border border-gray-800 rounded-full hover:bg-neon-cyan/10 hover:border-neon-cyan/50 transition-all duration-300 group"
                >
                    <img src={dexscreenerLogo} alt="Dexscreener" className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity brightness-200" />
                </a>

                <a
                    href="https://x.com/hohoho_dev"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-gray-900/50 border border-gray-800 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                >
                    <span className="font-sans text-xs text-gray-500 group-hover:text-white">𝕏</span>
                </a>
            </div>

            <div className="text-center font-mono text-[10px] text-gray-700 uppercase tracking-widest flex flex-col gap-2">
                <p>Est. 2025 // HOHOHO Archives // End of Line</p>
                <Link to="/backrooms" className="text-gray-800 hover:text-neon-cyan transition-colors duration-300">
                    [ ACCESS_BACKROOMS ]
                </Link>
            </div>
        </footer>
    );
};
