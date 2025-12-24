import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { BACKROOM_LOGS, type BackroomLog } from '../data/backrooms';
import { Link } from 'react-router-dom';

export const Backrooms = () => {
    const [selectedLog, setSelectedLog] = useState<BackroomLog | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Simulate loading effect when switching logs
    useEffect(() => {
        if (selectedLog) {
            setIsLoading(true);
            const timer = setTimeout(() => setIsLoading(false), 800);
            return () => clearTimeout(timer);
        }
    }, [selectedLog]);

    return (
        <div className="min-h-screen bg-black text-gray-300 font-mono flex flex-col md:flex-row overflow-hidden">
            {/* --- Sidebar --- */}
            <div className="w-full md:w-[400px] border-r border-gray-900 flex flex-col h-screen bg-black z-10">
                <div className="p-8 border-b border-gray-900">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span>back to root</span>
                    </Link>

                    <h1 className="text-xl text-white font-bold tracking-tight">conversations</h1>
                    <p className="text-[10px] text-gray-600 mt-2">// click a log to display its ascii dialogue</p>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                    {BACKROOM_LOGS.map((log) => (
                        <button
                            key={log.id}
                            onClick={() => setSelectedLog(log)}
                            className={`w-full text-left p-4 rounded-sm border transition-all duration-300 group relative overflow-hidden ${selectedLog?.id === log.id
                                    ? 'bg-gray-900 border-gray-700'
                                    : 'bg-transparent border-gray-900 hover:border-gray-800 hover:bg-gray-900/30'
                                }`}
                        >
                            <div className={`text-sm font-bold mb-2 transition-colors ${selectedLog?.id === log.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                {log.title}
                            </div>
                            <div className="text-[10px] text-gray-600 leading-relaxed line-clamp-2">
                                {log.description}
                            </div>

                            {/* Active Indicator */}
                            {selectedLog?.id === log.id && (
                                <motion.div
                                    layoutId="active-indicator"
                                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-neon-cyan"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- Main Content --- */}
            <div className="flex-1 h-screen relative bg-black flex flex-col p-8 md:p-16 overflow-hidden">
                {/* Header Line */}
                <div className="border-b border-gray-900 pb-4 mb-8 flex justify-between items-center text-xs text-gray-500">
                    <span>// {selectedLog ? `reading: ${selectedLog.id}` : 'select a conversation from the left'}</span>
                    <span>STATUS: {selectedLog ? 'DECRYPTED' : 'IDLE'}</span>
                </div>

                <div className="flex-1 relative flex items-center justify-center border border-gray-900 bg-gray-950/30 rounded-sm overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none" />

                    <AnimatePresence mode="wait">
                        {!selectedLog ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center space-y-4"
                            >
                                <div className="text-gray-800 text-6xl opacity-20 select-none">?.?</div>
                                <p className="text-xs text-gray-700">// no conversation selected yet</p>
                                <p className="text-[10px] text-gray-800">// choose an episode from the sidebar to view its ascii log</p>
                            </motion.div>
                        ) : isLoading ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-4 text-neon-cyan"
                            >
                                <Loader2 className="animate-spin" size={32} />
                                <span className="text-xs tracking-widest animate-pulse">DECRYPTING_SIGNAL...</span>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={selectedLog.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className="w-full max-w-3xl p-8 relative"
                            >
                                {/* Scanline overlay for content */}
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30 z-20" />

                                <div className="relative z-10 border-l-2 border-neon-cyan/50 pl-6 py-2">
                                    <h2 className="text-2xl text-white mb-6 font-bold tracking-tight">{selectedLog.title}</h2>
                                    <pre className="font-mono text-xs md:text-sm text-neon-cyan leading-relaxed whitespace-pre-wrap">
                                        {selectedLog.ascii}
                                    </pre>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-800 flex justify-between text-[10px] text-gray-600 font-mono">
                                    <span>HASH: {Math.random().toString(36).substring(7).toUpperCase()}</span>
                                    <span>SIZE: {selectedLog.ascii.length}B</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
