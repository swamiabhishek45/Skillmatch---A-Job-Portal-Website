import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, FileText, Rocket, Sparkles, Zap } from "lucide-react";
import { useUser } from "@clerk/clerk-react";

const Header = () => {
    const { user } = useUser();
    console.log(user);

    return (
        <div className="mt-24 px-4 md:px-0">
            {/* Badge */}
            <div className="flex justify-center mb-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 pl-2 pr-4 py-1 text-sm font-medium backdrop-blur-2xl ring-1 ring-white/10 hover:ring-primary-500/50 transition-all cursor-default"
                >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                        <Sparkles size={14} className="group-hover:animate-spin" />
                    </span>
                    <span className="text-slate-300">AI-Powered Job Matching is Live</span>
                    <Zap size={14} className="text-yellow-500 fill-yellow-500" />
                </motion.div>
            </div>

            {/* Heading */}
            <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="w-11/12 font-serif text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:w-3/4 lg:text-5xl xl:text-6xl">
                    Connecting <span className="text-gradient italic">Recruiters</span> with Talent, Job Seekers with Opportunities
                </h1>

                <p className="w-full text-xs text-gray-400 sm:w-1/2 md:text-sm lg:text-lg">
                    A platform where recruiters seamlessly connect with top talent, while
                    candidates explore and secure the best career opportunities tailored
                    to their skills and aspirations.
                </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            >
                <Link
                    to="/jobs"
                    className="group relative inline-flex items-center gap-2 rounded-xl bg-primary-600 px-10 py-4 text-center text-base font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all hover:scale-105 hover:bg-primary-500 active:scale-95 focus:ring-2 focus:ring-primary-400"
                >
                    <Briefcase size={20} />
                    Explore Jobs
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>

                {
                    user?.unsafeMetadata?.role == "recruiter" ? (<Link
                        to="/post-job"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-10 py-4 text-center text-base font-semibold text-slate-300 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white active:scale-95 border-b-4 border-b-slate-800"
                    >
                        <Rocket />
                        Start Hiring
                    </Link>) : (<Link
                        to="/analyze-resume"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-10 py-4 text-center text-base font-semibold text-slate-300 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white active:scale-95 border-b-4 border-b-slate-800"
                    >
                            <FileText />
                        Analyze Resume
                    </Link>) 
                }

            </motion.div>

            {/* Visual Section */}
            {/* <CandidateScreening /> */}
        </div>
    );
};

export default Header;
