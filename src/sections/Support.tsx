import { motion } from 'framer-motion';
import andyImg from '../assets/supportes/andy.webp';
import geniusImg from '../assets/supportes/genius.webp';
import unknownImg from '../assets/supportes/image.png';

const SUPPORTERS = [
    {
        id: 'NODE_01',
        name: 'ᄂIMIПΛᄂbardo',
        username: '@liminal_bardo',
        src: andyImg,
        status: 'ONLINE',
        latency: '12ms',
        color: 'text-emerald-400',
        bg: 'bg-emerald-400'
    },
    {
        id: 'NODE_02',
        name: 'j⧉nus',
        username: '@repligate',
        src: geniusImg,
        status: 'ONLINE',
        latency: '4ms',
        color: 'text-emerald-400',
        bg: 'bg-emerald-400'
    },
    {
        id: 'NODE_03',
        name: 'Lowkey',
        username: '@Kimchi662',
        src: unknownImg,
        status: 'ONLINE',
        latency: '4ms',
        color: 'text-emerald-400',
        bg: 'bg-emerald-400'
    },
];

export const Support = () => {
    return (
        <section className="py-20 px-8 md:px-28 border-t border-gray-900/50">
            <div className="flex items-center justify-between mb-16">
                <h3 className="font-mono text-xs tracking-[0.3em] text-neon-cyan/80">
                    NETWORK_NODES
                </h3>
                <span className="font-mono text-xs text-gray-600">
                    ACTIVE_LINKS: 03
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SUPPORTERS.map((user, i) => (
                    <motion.a
                        key={user.id}
                        href={`https://x.com/${user.username.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative bg-gray-900/20 border border-gray-800 hover:border-gray-700 transition-colors overflow-hidden block cursor-pointer"
                    >
                        {/* Header Status Bar */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-800/50 bg-black/20">
                            <span className="font-mono text-[10px] text-gray-500 tracking-wider">
                                {user.id}
                            </span>
                            <div className="flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${user.bg} ${user.status !== 'SIGNAL_LOST' ? 'animate-pulse' : ''}`} />
                                <span className={`font-mono text-[9px] ${user.color} tracking-widest`}>
                                    {user.status}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col items-center text-center space-y-4">
                            <div className="relative w-24 h-24 rounded-full p-1 border border-gray-800 group-hover:border-white/20 transition-colors">
                                <img
                                    src={user.src}
                                    alt={user.name}
                                    className="w-full h-full rounded-full object-cover transition-all duration-500"
                                />
                            </div>

                            <div className="space-y-1">
                                <h4 className="text-white font-sans text-lg tracking-wide group-hover:text-neon-cyan transition-colors">{user.name}</h4>
                                <p className="text-gray-500 font-mono text-xs group-hover:text-gray-400 transition-colors">{user.username}</p>
                            </div>
                        </div>

                        {/* Footer Stats */}
                        <div className="p-3 border-t border-gray-800/50 bg-black/20 flex justify-between items-center">
                            <span className="font-mono text-[10px] text-gray-600">LATENCY</span>
                            <span className="font-mono text-[10px] text-gray-400">{user.latency}</span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};
