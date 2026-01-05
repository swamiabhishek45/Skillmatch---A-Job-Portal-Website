import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { deleteJob, saveJobs } from "@/api/apiJobs";
import { Card, CardTitle } from "./ui/card-hover-effect";
import { PiBag } from "react-icons/pi";
import { FiClock, FiMapPin } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import Logo from "../assets/placeholder_logo.svg";
import { formatTimeDifference } from "@/lib/dateFormater";
import { BarLoader } from "react-spinners";
import { Bookmark } from "lucide-react";

const JobCard = ({
    job,
    isMyJob = false,
    savedInit = false,
    onJobSaved = () => { },
}) => {
    const [saved, setSaved] = useState(savedInit);

    const { user } = useUser();

    const {
        fn: fnSavedJobs,
        data: savedJob,
        loading: loadingSavedJobs,
    } = useFetch(saveJobs, {
        alreadySaved: saved,
    });

    const { loading: loadingDeleteJob, fn: fnDeleteJob } = useFetch(deleteJob, {
        job_id: job.id,
    });

    const handleSaveJobs = async () => {
        await fnSavedJobs({
            user_id: user.id,
            job_id: job.id,
        });
        onJobSaved();
    };

    const handleDeleteJob = async () => {
        await fnDeleteJob();
        onJobSaved();
    };

    useEffect(() => {
        if (savedJob !== undefined) setSaved(savedJob?.length > 0);
    }, [savedJob]);
    return (
        <Link to={`/job/${job.id}`} className="block group">
            <div className="glass-effect p-6 rounded-2xl hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2">
                            {/* job logo */}
                            <img src={job.company.company_logo_url
                                ? job.company.company_logo_url
                                : Logo} alt={job.company} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                                {job.title}
                            </h3>
                            <p className="text-gray-400 text-sm">via {job.company.company_name}</p>
                        </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                        <Bookmark />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FiMapPin className="" />
                        <span>{job.location}</span>
                    </div>
                    {
                        job.salary ? (<div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span className="text-purple-400 font-medium">₹</span>
                            <span>{job.salary}</span>
                        </div>) : (<p>Not Disclosed</p>)
                    }

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <PiBag className="" />
                        <span>{job.job_type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FiClock className="" />
                        <span>{job.experience} years</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    {
                        formatTimeDifference(job?.created_at).includes("month") ? (<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-green-500/10 text-blue-400 border border-green-500/20">
                            <GiBackwardTime className="text-xl  size-4" />
                            Posted  {formatTimeDifference(
                                job?.created_at
                            )} ago
                        </span>) : (<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                                <GiBackwardTime className="text-xl  size-4" />
                                Posted  {formatTimeDifference(
                                    job?.created_at
                                )} ago
                        </span>)
                    }
                    <span className="text-xs text-purple-400 font-medium">View Details →</span>
                </div>
                {isMyJob && (
                    <div className="flex float-right bg-red-500 p-2 rounded-md">
                        <Trash2Icon
                            fill="red"
                            size={18}
                            className="white cursor-pointer"
                            onClick={handleDeleteJob}
                        />
                    </div>
                )}
            </div>
        </Link>
    );
};

export default JobCard;
