
import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle, Volume2 } from 'lucide-react';

const candidates = [
    { id: 1, color: 'bg-yellow-200', img: 'https://i.pravatar.cc/150?u=11' },
    { id: 2, color: 'bg-red-200', img: 'https://i.pravatar.cc/150?u=12' },
    { id: 3, color: 'bg-blue-200', img: 'https://i.pravatar.cc/150?u=13' },
    { id: 4, color: 'bg-purple-200', img: 'https://i.pravatar.cc/150?u=14' },
    { id: 5, color: 'bg-green-200', img: 'https://i.pravatar.cc/150?u=15' },
    { id: 6, color: 'bg-orange-200', img: 'https://i.pravatar.cc/150?u=16' },
];

const integrations = [
    "SmartRecruiters", "LEVER", "Taleo", "bambooHR"
];

const CandidateReel = ({ showBadges = false }) => {
    return (
        <div className="relative overflow-hidden w-full max-w-[280px] h-16 flex items-center bg-gray-50/80 dark:bg-white/5 rounded-2xl border-x-4 border-primary-500/40">
            <motion.div
                className="flex gap-3 px-4"
                animate={{ x: [-500, 0] }} // Moving left to right
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
            >
                {[...candidates, ...candidates, ...candidates, ...candidates].map((c, i) => (
                    <div key={`${c.id}-${i}`} className="relative flex-shrink-0">
                        <div className={`w-10 h-10 rounded-full border border-white dark:border-gray-800 shadow-sm overflow-hidden ${c.color}`}>
                            <img src={c.img} alt="candidate" className="w-full h-full object-cover" />
                        </div>
                        {showBadges && (
                            <span className={`absolute -top-1 -right-1 text-[8px] font-bold px-1 py-0.5 rounded-full text-white ${i % 2 === 0 ? 'bg-green-500' : 'bg-red-400'}`}>
                                {Math.floor(Math.random() * 60) + 30}
                            </span>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const CandidateScreening = () => {
    return (
        <section className="py-20 dot-pattern bg-white dark:bg-[#0a0a0a]">
            <div className="mx-auto max-w-4xl px-6 flex flex-col items-center">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        Automated Candidate
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full">
                        {/* Left Reel */}
                        <CandidateReel />

                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
                            Screening
                        </h2>

                        {/* Right Reel */}
                        <CandidateReel showBadges={true} />
                    </div>
                </motion.div>

                {/* Pricing Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-gray-500 dark:text-gray-400 text-lg mb-8 text-center"
                >
                    Simple pricing, just $4 per completed call.
                </motion.p>
            </div>
        </section>
    );
};

export default CandidateScreening;
