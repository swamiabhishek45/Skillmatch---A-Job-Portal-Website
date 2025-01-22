import { getSingleJob, saveJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { GiBackwardTime } from "react-icons/gi";
import { FiMapPin } from "react-icons/fi";
import { Bookmark, DoorClosed, DoorOpen } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import Logo from "../assets/placeholder_logo.svg";
import { formatTimeDifference } from "@/lib/dateFormater";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";

const Job = ({ isMyJob = false, savedInit = false, onJobSaved = () => {} }) => {
    const [saved, setSaved] = useState(savedInit);
    const { user, isLoaded } = useUser();
    const { id } = useParams();

    const {
        fn: fnJob,
        data: job,
        loading: loadingJob,
    } = useFetch(getSingleJob, {
        job_id: id,
    });

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

    useEffect(() => {
        if (isLoaded) fnJob();
    }, [isLoaded]);

    if (!isLoaded) {
        return <BarLoader width="100%" className="mb-4" color="purple" />;
    }
    return (
        <div className="flex flex-col gap-6 my-5 mx-5 xl:mx-auto max-w-5xl md:border md:p-6">
            <div className="flex flex-col-reverse gap-2 md:flex-row justify-between">
                <div>
                    <div className="flex items-center gap-4">
                        <h1 className="font-extrabold text-2xl sm:text-4xl work-sans">
                            {job?.title}
                        </h1>
                        <div className="border text-sm p-1">
                            {job?.isOpen ? (
                                <div className="text-green-500 flex gap-1 items-center">
                                    <DoorOpen className="size-4" /> Open{" "}
                                </div>
                            ) : (
                                <div className="text-red-500 flex gap-1 items-center">
                                    <DoorClosed /> Close{" "}
                                </div>
                            )}
                        </div>
                    </div>
                    <p className=" text-slate-300 font-thin">
                        via{" "}
                        <span className="text-blue-600 font-semibold ">
                            {job?.company?.company_name}
                        </span>{" "}
                        in{" "}
                        <span className="text-white font-semibold">
                            {job?.category}
                        </span>
                    </p>
                </div>
                <img
                    src={
                        job?.company?.company_logo_url
                            ? job?.company?.company_logo_url
                            : Logo
                    }
                    className="h-12 md:h-16 w-12 md:w-16 rounded-md "
                    alt="logo"
                />
            </div>
            <div className="flex gap-1 items-center">
                <FiMapPin />
                {job?.candidate_required_location}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 ">
                <div className="flex gap-1 items-center">
                    <FaRupeeSign />
                    {job?.salary}
                </div>

                <div className="flex gap-1 items-center">
                    <FaRupeeSign />
                    {job?.salary}
                </div>
                <div className="flex gap-1 items-center">
                    <FaRupeeSign />
                    {job?.salary}
                </div>

                <div className="flex gap-1 items-center">
                    <FaRupeeSign />
                    {job?.salary}
                </div>
            </div>
            <div className="flex gap-2">
                {formatTimeDifference(job?.created_at).includes("day") ? (
                    <div className="flex gap-1 items-center bg-[#15410c] text-green-300 w-fit p-1 rounded-md text-xs">
                        <GiBackwardTime className="text-xl size-4" />
                        <p className="">
                            Posted {formatTimeDifference(job?.created_at)} ago
                        </p>
                    </div>
                ) : (
                    <div className="flex gap-1 items-center bg-[#13466b] text-blue-300 w-fit p-1 rounded-md text-xs">
                        <GiBackwardTime className="text-xl size-4" />
                        <p className="">
                            Posted {formatTimeDifference(job?.created_at)} ago
                        </p>
                    </div>
                )}{" "}
                <p className="text-xs text-slate-200 bg-gray-600 p-1 rounded-md">
                    {job?.job_type}
                </p>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                    <TbUsers />
                    {job?.applications?.length < 2 ? (
                        <p>{job?.applications?.length} Applicant</p>
                    ) : (
                        <p>{job?.applications?.length} Applicants</p>
                    )}
                </div>
                <div>
                    {!isMyJob && (
                        <Button
                            variant="outline"
                            className="w-15"
                            onClick={handleSaveJobs}
                            disabled={loadingSavedJobs}
                        >
                            {saved ? (
                                <Bookmark
                                    size={24}
                                    stroke="white"
                                    fill="white"
                                />
                            ) : (
                                <Bookmark size={24} />
                            )}
                        </Button>
                    )}
                </div>
            </div>
            <hr />
            {/* hiring status */}
            <h2 className="text-2xl md:text-3xl font-semibold">
                About the job
            </h2>
            <p>{job?.description}</p>

            <h2 className="text-2xl md:text-3xl  font-semibold">
                About the job
            </h2>
            <MDEditor.Markdown
                source={job?.requirements}
                className="bg-transparent sm:text-lg"
            />

            {/* render applications  */}
        </div>
    );
};

export default Job;
