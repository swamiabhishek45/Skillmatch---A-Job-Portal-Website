import React from "react";
import { formatDistanceToNow } from "date-fns";

import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCard = ({
    job,
    isMyJob = false,
    savedInit = false,
    onJobSaved = () => {},
}) => {
    
    return (
        <div className="flex flex-col md:flex-row hover:bg-gray-800 justify-between text-white items-center bg-[#020818] border shadow-lg rounded-lg p-4 gap-4 relative">
            <Link to={`/job/${job.id}`}>
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Job Info and Company Logo */}
                    <div className="flex gap-2">
                        {/* Company Logo */}
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                            <img
                                loading="lazy"
                                src={job.company.company_logo_url}
                                alt="Company Logo"
                                className="rounded-full"
                            />
                        </div>
                        {/* Job Info */}
                        <div>
                            <h2 className="text-lg font-semibold">
                                {job.title}
                            </h2>
                            <p>
                                by{" "}
                                <span className="font-semibold">
                                    {job.company.company_name}
                                </span>{" "}
                                in{" "}
                                <span className="text-blue-500">
                                    {job.category}
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* Job Tags */}
                    <div>
                        <div className="flex flex-wrap gap-2 my-2">
                            <div className="flex gap-1 p-2 bg-red-800 text-white w-fit rounded-full">
                                <FaMapMarkerAlt className="mt-[2px]" />
                                <p className="text-sm">
                                    {job.candidate_required_location}
                                </p>
                            </div>
                            <div className="flex gap-1 p-2 bg-sky-700 text-white w-fit rounded-full">
                                <FaBriefcase className="mt-[2px]" />
                                <p className="text-sm">{job.job_type}</p>
                            </div>
                            <div className="flex gap-1 p-2 bg-green-700 text-white w-fit rounded-full">
                                <p className="text-sm">
                                    {job.salary ? job.salary : "Not disclosed"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Buttons and Date */}
            <div className="flex flex-col text-center items-end gap-4 ">
                <Link to={job.url} target="_blank">
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-400 hover:to-blue-600 shadow-md">
                        Apply Now
                    </button>
                </Link>

                <div className="">
                    {job.publication_date && (
                        <p className="text-sm text-gray-400 ">
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
            </div>
        </div>
    );
};

export default JobCard;
