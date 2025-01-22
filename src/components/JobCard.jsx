import React, { useEffect, useState } from "react";
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
import { formatTimeDifference } from "@/lib/dateFormater";

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
    console.log(job);

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
        <Link to={`/job/${job.id}`}>
            <Card>
                {/* job logo */}
                <div>
                    {/* Job logo and title  */}
                    <div className="flex gap-4 justify-between items-center">
                        <div>
                            <CardTitle className={`text-xl`}>
                                {job.title}
                            </CardTitle>
                            <p className="text-slate-300 mb-2">
                                via{" "}
                                <span className="text-blue-600 font-semibold">
                                    {job.company.company_name}
                                </span>
                            </p>
                        </div>
                        <img
                            src={
                                job.company.company_logo_url
                                    ? job.company.company_logo_url
                                    : Logo
                            }
                            alt="logo"
                            className=" h-14 w-14 md:h-20 md:w-20 rounded-lg"
                        />
                    </div>
                    {/* Job tags  */}
                    <div className="grid grid-cols-2 space-y-2 text-slate-400 text-sm">
                        <div className="flex gap-1 items-center text-slate-400 text-sm mt-2">
                            <FiMapPin className="" />
                            {job.candidate_required_location}
                        </div>
                        {job.salary ? (
                            <div className="flex gap-1 items-center">
                                <FaRupeeSign />
                                {job.salary}
                            </div>
                        ) : (
                            <p>Not Disclosed</p>
                        )}
                        <div className="flex gap-1 items-center">
                            <PiBag className="" />
                            {job.job_type}
                        </div>{" "}
                        <div className="flex gap-1 items-center">
                            <BsFunnel className="" />
                            {job.experience}
                        </div>
                        {formatTimeDifference(job?.created_at).includes(
                            "week"
                        ) ? (
                            <div className="flex gap-1 items-center bg-[#13466b] text-blue-300  w-fit p-1 rounded-md text-xs">
                                <GiBackwardTime className="text-xl  size-4" />
                                <p className="">
                                    Posted{" "}
                                    {formatTimeDifference(job?.created_at)} ago
                                </p>
                            </div>
                        ) : (
                            <div className="flex gap-1 items-center bg-[#15410c] text-green-300  w-fit p-1 rounded-md text-xs">
                                <GiBackwardTime className="text-xl size-4" />
                                <p className="">
                                    Posted{" "}
                                    {formatTimeDifference(job?.created_at)} ago
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default JobCard;
