import React from "react";

const demo = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex flex-col gap-4  items-center">
                    <div className="flex gap-4">
                        <img
                            src={
                                job.company.company_logo_url
                                    ? job.company.company_logo_url
                                    : Logo
                            }
                            alt="logo"
                            className="h-20 w-20 rounded-lg"
                        />
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
                    </div>
                    {/* job info  */}
                    <div className="my-1">
                        <div className="grid grid-cols-2 space-y-1 text-slate-400 text-sm">
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
                            <div className="flex gap-1 items-center">
                                <GiBackwardTime className="text-lg" />
                                Posted {formatTimeDifference(
                                    job.created_at
                                )}{" "}
                                ago
                            </div>
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
        </>
    );
};

export default demo;
