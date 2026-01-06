import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { deleteJob, saveJobs } from "@/api/apiJobs";
import { PiBag } from "react-icons/pi";
import { FiClock, FiMapPin } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";
import Logo from "../assets/placeholder_logo.svg";
import { formatTimeDifference } from "@/lib/dateFormater";
import { Bookmark, Trash2Icon } from "lucide-react";

const JobCard = ({
    job,
    isMyJob = false,
    savedInit = false,
    onJobSaved = () => { },
}) => {
    const [saved, setSaved] = useState(savedInit);
    const { user } = useUser();

    /* ---------------- SAVE JOB ---------------- */
    const {
        fn: fnSavedJobs,
        data: savedJob,
        loading: savingJob,
    } = useFetch(saveJobs, { alreadySaved: saved });

    /* ---------------- DELETE JOB ---------------- */
    const {
        fn: fnDeleteJob,
        loading: deletingJob,
    } = useFetch(deleteJob, { job_id: job.id });

    const handleSaveJobs = async (e) => {
        e.preventDefault(); // ✅ stop navigation
        await fnSavedJobs({ user_id: user.id, job_id: job.id });
        onJobSaved();
    };

    const handleDeleteJob = async (e) => {
        e.preventDefault(); // ✅ stop navigation
        e.stopPropagation();

        const confirmed = window.confirm(
            "Are you sure you want to delete this job?"
        );
        if (!confirmed) return;

        await fnDeleteJob();
        onJobSaved();
    };

    useEffect(() => {
        if (savedJob !== undefined) {
            setSaved(savedJob?.length > 0);
        }
    }, [savedJob]);

    return (
        // <Link to={`/job/${job.id}`} className="block group relative">
            <div className="glass-effect p-6 rounded-2xl hover:border-purple-500/50 transition-all">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2">
                            <img
                                src={job.company.company_logo_url || Logo}
                                alt={job.company.company_name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold group-hover:text-purple-400">
                                {job.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                via {job.company.company_name}
                            </p>
                        </div>
                    </div>

                    {user?.unsafeMetadata?.role === "recruiter" ? (
                        isMyJob && (
                            <button
                                onClick={handleDeleteJob}
                                disabled={deletingJob}
                                className="absolute top-4 right-4 p-2 rounded-lg 
                 bg-red-500/10 hover:bg-red-500/20 
                 text-red-500 transition"
                            >
                                <Trash2Icon size={16} />
                            </button>
                        )
                    ) : (
                        <button
                            onClick={handleSaveJobs}
                            disabled={savingJob}
                            className="p-2 rounded-full hover:bg-white/5 
               text-gray-400 hover:text-white transition"
                        >
                            <Bookmark
                                className={saved ? "fill-purple-500 text-purple-500" : ""}
                            />
                        </button>
                    )}


                    
                </div>

                {/* JOB INFO */}
                <div className="grid grid-cols-2 gap-y-3 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <FiMapPin />
                        {job.location}
                    </div>

                    <div className="flex items-center gap-2">
                        ₹ {job.salary || "Not Disclosed"}
                    </div>

                    <div className="flex items-center gap-2">
                        <PiBag />
                        {job.job_type}
                    </div>

                    <div className="flex items-center gap-2">
                        <FiClock />
                        {job.experience} years
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                        <GiBackwardTime size={14} />
                        Posted {formatTimeDifference(job.created_at)} ago
                    </span>

                    <span className="text-xs text-purple-400 font-medium">
                        View Details →
                    </span>
                </div>

                
            </div>
        // </Link>
    );
};

export default JobCard;
