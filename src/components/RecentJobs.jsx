import React, { useEffect, useState } from "react";
import { Button } from "./ui/moving-border";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import RemoteJobCard from "./RemoteJobCard";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import useFetch from "@/hooks/useFetch";
import { getJobs } from "@/api/apiJobs";
import { useUser } from "@clerk/clerk-react";
import JobCard from "./JobCard";
import { BarLoader } from "react-spinners";
import HowItWorks from "./HowItWorks";

const RecentJobs = () => {

    const { isLoaded, isSignedIn } = useUser();


    // fetching jobs
    const {
        fn: fnJobs,
        data: jobs,
        loading: loadingJobs,
    } = useFetch(getJobs);

    useEffect(() => {
        if (isLoaded) fnJobs();
    }, [isLoaded]);

    // if (!isLoaded) {
    //     return (
    //         <div className="flex items-center justify-center min-h-[60vh]">
    //             <BarLoader width={200} color="#a855f7" />
    //         </div>
    //     );
    // }

    if (!isSignedIn) {
        return <HowItWorks />;
    }

    return (
        <div>
            <div className="flex items-center justify-center mt-20 mb-10">
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-[#070916] text-black dark:text-white border-neutral-200 dark:border-slate-800 poppins cursor-default  font-semibold"
                >
                    Recently Job Circular
                </Button>
            </div>

            <div className="max-w-7xl mx-5 xl:mx-auto">
                {loadingJobs === false && (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
                        {jobs?.data?.length ? (
                            jobs?.data
                                .sort(
                                    (a, b) =>
                                        new Date(b.created_at) -
                                        new Date(a.created_at)
                                ).slice(0, 6)
                                .map((job) => (
                                    <JobCard
                                        key={job.id}
                                        job={job}
                                        savedInit={job?.saved?.length > 0}
                                    />
                                ))
                        ) : (
                            <div className="col-span-full flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
                                {/* <img src={NoJobFound} width={250} height={250} /> */}

                                <h2 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
                                    No Jobs Found
                                </h2>

                                <p className="mt-2 max-w-md text-gray-500 dark:text-gray-400">
                                    Sorry, the job you are looking for does not exist or may have been removed.
                                </p>

                                <button
                                    onClick={() => window.history.back()}
                                    className="mt-6 rounded-lg bg-purple-600 px-6 py-2 text-white hover:bg-purple-700 transition"
                                >
                                    Go Back
                                </button>
                            </div>
                        )}
                    </div>
                )}

            </div>

            <div className="flex my-10 items-center justify-center">
                <Link to="/jobs">
                    <InteractiveHoverButton>
                        Show More Jobs
                    </InteractiveHoverButton>
                </Link>
            </div>
        </div>
    );
};

export default RecentJobs;
