return (
    <div className="flex flex-col">
        <div>
            <Link to={`/job/${job.id}`} className="block group">
                <Card>
                    {loadingDeleteJob && (
                        <BarLoader
                            className="mt-4"
                            width={"100%"}
                            color="purple"
                        />
                    )}
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
                                {job.location}
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
                                <FiClock className="" />
                                {job.experience}
                            </div>
                            {formatTimeDifference(job?.created_at).includes(
                                "month"
                            ) ? (
                                <div className="flex gap-1 items-center bg-[#13466b] text-blue-300  w-fit p-1 rounded-md text-xs">
                                    <GiBackwardTime className="text-xl  size-4" />
                                    <p className="">
                                        Posted{" "}
                                        {formatTimeDifference(
                                            job?.created_at
                                        )}{" "}
                                        ago
                                    </p>
                                </div>
                            ) : (
                                <div className="flex gap-1 items-center bg-[#15410c] text-green-300  w-fit p-1 rounded-md text-xs">
                                    <GiBackwardTime className="text-xl size-4" />
                                    <p className="">
                                        Posted{" "}
                                        {formatTimeDifference(
                                            job?.created_at
                                        )}{" "}
                                        ago
                                    </p>
                                </div>
                            )}
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
                </Card>
            </Link>
        </div>
    </div>
);