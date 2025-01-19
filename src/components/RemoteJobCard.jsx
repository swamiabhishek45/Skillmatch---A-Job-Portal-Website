import React from "react";
import { Card, CardTitle } from "./ui/card-hover-effect";
import CompLogo from "../assets/joblogo.png";
import { FiMapPin } from "react-icons/fi";
import { PiBag, PiMoney } from "react-icons/pi";
import { BsFunnel } from "react-icons/bs";
import { RiTimerLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";

const RemoteJobCard = ({ job }) => {
    const formatJobType = (type) => {
        return type
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <Card>
            {/* job logo */}
            <div className="flex justify-between">
                <div className="flex gap-4  items-center">
                    <img
                        src={CompLogo}
                        alt="logo"
                        className="h-20 w-20 rounded-lg"
                    />
                    {/* job info  */}
                    <div className="my-1">
                        <CardTitle className={`text-xl`}>{job.title}</CardTitle>
                        <p className="text-slate-300 mb-2">
                            via{" "}
                            <span className="text-blue-600 font-semibold">
                                {job.company_name}
                            </span>
                        </p>
                        <div className="grid md:grid-cols-2 space-y-1 text-slate-400 text-sm">
                            {job.salary ? (
                                <div className="flex gap-1 items-center">
                                    <PiMoney />
                                    {job.salary}
                                </div>
                            ) : (
                                <p>Not Disclosed</p>
                            )}

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
                                        {formatDistanceToNow(
                                            new Date(job.publication_date),
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
                <div className="bg-slate-800 text-white rounded-full p-2">
                    <Bookmark size={24} stroke="white" fill="white" />
                </div>
            </div>
        </Card>
    );
};

export default RemoteJobCard;
