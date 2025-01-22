import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

import { Link } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { saveJobs } from "@/api/apiJobs";
import { Card, CardTitle } from "./ui/card-hover-effect";
import { PiBag, PiMoney } from "react-icons/pi";
import { BsFunnel } from "react-icons/bs";
import { RiTimerLine } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { FaRupeeSign } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import Logo from "../assets/placeholder_logo.svg";

const JobCard = ({
    job,
    isMyJob = false,
    savedInit = false,
    onJobSaved = () => {},
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

    const handleSaveJobs = async () => {
        await fnSavedJobs({
            user_id: user.id,
            job_id: job.id,
        });
        onJobSaved();
    };

    useEffect(() => {
        if (savedJob !== undefined) setSaved(savedJob?.length > 0);
    }, [savedJob]);

    // console.log(job);

    return (
        <Card>
            {/* job logo */}
            <div className="flex justify-between">
                <div className="flex gap-4  items-center">
                    <img
                        src={
                            job.company.company_logo_url
                                ? job.company.company_logo_url
                                : Logo
                        }
                        alt="logo"
                        className="h-20 w-20 rounded-lg"
                    />
                    {/* job info  */}
                    <div className="my-1">
                        <CardTitle className={`text-xl`}>{job.title}</CardTitle>
                        <p className="text-slate-300 mb-2">
                            via{" "}
                            <span className="text-blue-600 font-semibold">
                                {job.company.company_name}
                            </span>
                        </p>
                        <div className="grid md:grid-cols-2 space-y-1 text-slate-400 text-sm">
                            {job.salary ? (
                                <div className="flex gap-1 items-center">
                                    <FaRupeeSign />
                                    {job.salary}
                                </div>
                            ) : (
                                <p>Not Disclosed</p>
                            )}

                            <div className="flex gap-1 items-center">
                                <BsFunnel className="" />
                                {job.category}
                            </div>
                            <div className="flex gap-1 items-center">
                                <PiBag className="" />
                                {job.job_type}
                            </div>
                            <div className="flex gap-1 items-center">
                                <GiBackwardTime className="text-xl" />
                                {job.created_at && (
                                    <p>
                                        {formatDistanceToNow(
                                            new Date(job.created_at),
                                            {
                                                addSuffix: true,
                                            }
                                        )}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-1 items-center text-slate-400 text-sm mt-2">
                            <FiMapPin className="" />
                            {job.candidate_required_location}
                        </div>
                    </div>
                </div>
                {/* apply button  */}
            </div>
            <div className="flex gap-4 items-center mt-5">
                <Link to={`/job/${job.id}`} className="w-full">
                    <Button className="w-full bg-slate-800 text-white">
                        More details
                    </Button>
                </Link>

                {!isMyJob && (
                    <Button
                        variant="outline"
                        className="w-15"
                        onClick={handleSaveJobs}
                        disabled={loadingSavedJobs}
                    >
                        {saved ? (
                            <Bookmark size={24} stroke="white" fill="white" />
                        ) : (
                            <Bookmark size={24} />
                        )}
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default JobCard;
