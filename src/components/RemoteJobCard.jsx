import React from "react";
import { Card, CardTitle } from "./ui/card-hover-effect";
import CompLogo from "../assets/joblogo.png";
import { FiMapPin } from "react-icons/fi";
import { PiBag } from "react-icons/pi";
import { BsFunnel } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { RiTimerLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const RemoteJobCard = ({ job }) => {
    const formatJobType = (type) => {
        return type
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <Link to={`/job/${job.id}`}>
            <Card className={`cursor-pointer`}>
                {/* job logo */}
                <div className="flex justify-between cursor-pointer">
                    <div className="flex gap-4  items-center">
                        <img src={CompLogo} alt="logo" className="h-20 w-20" />
                        {/* job info  */}
                        <div className="my-1">
                            <CardTitle className={`text-xl`}>
                                {job.title}
                            </CardTitle>
                            <p className="text-slate-300 mb-2">
                                via{" "}
                                <span className="text-blue-600 font-semibold">
                                    {job.company_name}
                                </span>
                            </p>
                            <div className="grid grid-cols-2">
                                <div className="flex gap-1 items-center">
                                    <FiMapPin className="" />
                                    {job.salary}
                                </div>
                                <div className="flex gap-1 items-center">
                                    <BsFunnel className="" />
                                    {formatJobType(job.category)}
                                </div>
                                <div className="flex gap-1 items-center">
                                    <PiBag className="" />
                                    {formatJobType(job.job_type)}
                                </div>
                                <div className="flex gap-1 items-center">
                                    <RiTimerLine className="" />
                                    {job.publication_date && (
                                        <p>
                                            Posted{" "}
                                            {formatDistanceToNow(
                                                new Date(job.publication_date),
                                                {
                                                    addSuffix: true,
                                                }
                                            )}
                                        </p>
                                    )}
                                </div>
                                <div className="flex gap-1 items-center">
                                    <FiMapPin className="" />
                                    {job.candidate_required_location}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* apply button  */}
                    <div>
                        <CiBookmark size={24} />
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default RemoteJobCard;
