import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, FileText, Rocket, Sparkles, Zap } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { FaGoogle, FaMicrosoft, FaApple, FaAmazon, FaSpotify, FaSlack } from "react-icons/fa";

const Header = () => {
    const { user } = useUser();
    // console.log(user);

    return (
        <div className="mt-24 px-4 md:px-0 relative">
            {/* <FloatingIcons /> */}
            {/* Badge */}
            <div className="flex justify-center mb-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="group relative inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 pl-3 pr-4 py-1.5 text-sm font-medium backdrop-blur-2xl ring-1 ring-white/10 hover:ring-purple-500/50 transition-all cursor-default"
                >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                        <Sparkles size={14} className="group-hover:animate-spin" />
                    </span>
                    <span className="text-slate-300">AI-Powered Job Matching is Live</span>
                    <Zap size={14} className="text-yellow-500 fill-yellow-500" />
                </motion.div>
            </div>

            {/* Heading */}
            <div className="flex flex-col items-center gap-6 text-center z-10 relative">
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white tracking-tight"
                >
                    Find the Right<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 italic px-2">Job.</span> <br className="hidden sm:block" />Hire the Right<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 italic px-2">Talent.</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full max-w-2xl text-base text-slate-400 sm:text-lg md:text-xl leading-relaxed"
                >
                    A platform where recruiters seamlessly connect with top talent, while
                    candidates explore and secure the best career opportunities tailored
                    to their skills and aspirations.
                </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 w-full"
            >
                <Link
                    to="/jobs"
                    className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105 hover:from-purple-500 hover:to-indigo-500 active:scale-95 focus:ring-2 focus:ring-purple-400"
                >
                    <Briefcase size={20} />
                    Explore Jobs
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>

                {
                    user?.unsafeMetadata?.role == "recruiter" ? (<Link
                        to="/post-job"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center text-lg font-semibold text-slate-300 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white active:scale-95 border-b-4 border-b-slate-800 hover:border-b-slate-700"
                    >
                        <Rocket size={20} />
                        Start Hiring
                    </Link>) : (<Link
                        to="/analyze-resume"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center text-lg font-semibold text-slate-300 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white active:scale-95 border-b-4 border-b-slate-800 hover:border-b-slate-700"
                    >
                            <FileText size={20} />
                        Analyze Resume
                    </Link>) 
                }

            </motion.div>

            {/* Visual Section */}
            {/* <CandidateScreening /> */}
        </div>
    );
};

// const FloatingIcons = () => {
//     const icons = [
//         // Left Side Icons
//         { Icon: FaGoogle, color: "text-red-500", bg: "bg-red-500/10", className: "top-[2%] left-[2%] md:top-[15%] md:left-[5%]", delay: 0 },
//         { Icon: FaMicrosoft, color: "text-blue-500", bg: "bg-blue-500/10", className: "top-[45%] -left-[2%] md:top-[45%] md:left-[8%]", delay: 2 },
//         { Icon: FaSlack, color: "text-purple-500", bg: "bg-purple-500/10", className: "bottom-[5%] left-[2%] md:top-[78%] md:left-[4%]", delay: 4 },
        
//         // Right Side Icons
//         { Icon: FaApple, color: "text-gray-300", bg: "bg-white/10", className: "top-[5%] right-[2%] md:top-[15%] md:right-[5%]", delay: 1 },
//         { Icon: FaAmazon, color: "text-orange-500", bg: "bg-orange-500/10", className: "top-[50%] -right-[2%] md:top-[45%] md:right-[8%]", delay: 3 },
//         { Icon: FaSpotify, color: "text-green-500", bg: "bg-green-500/10", className: "bottom-[10%] right-[2%] md:top-[75%] md:right-[4%]", delay: 5 },
//     ];

//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none user-select-none">
//             {icons.map(({ Icon, color, bg, className, delay }, index) => (
//                 <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{ 
//                         opacity: 1, 
//                         scale: 1,
//                         y: [0, -20, 0],
//                         rotate: [0, 10, -10, 0]
//                     }}
//                     transition={{
//                         duration: 5,
//                         repeat: Infinity,
//                         delay: delay,
//                         ease: "easeInOut"
//                     }}
//                     className={`absolute ${className} ${bg} p-3 md:p-4 rounded-full backdrop-blur-sm border border-white/5 shadow-lg z-0`}
//                 >
//                     <Icon className={`text-2xl md:text-4xl ${color}`} />
//                 </motion.div>
//             ))}
//         </div>
//     );
// };

export default Header;
