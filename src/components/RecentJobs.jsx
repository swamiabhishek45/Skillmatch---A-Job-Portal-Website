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

const RecentJobs = () => {
    // const [jobs, setJobs] = useState([]);

    // useEffect(() => {
    //     // Fetch jobs data
    //     const fetchJobs = async () => {
    //         try {
    //             const response = await fetch(
    //                 "https://remotive.com/api/remote-jobs?limit=6"
    //             );
    //             const data = await response.json();

    //             // Combine all arrays and get first three jobs
    //             const allJobs = data.jobs.flat(); // Flattening nested arrays
    //             const sortedJobs = allJobs
    //                 .sort(
    //                     (a, b) =>
    //                         new Date(b.publication_date) -
    //                         new Date(a.publication_date)
    //                 ) // Sort by latest
    //                 .slice(0, 6); // Get first 3 jobs

    //             setJobs(sortedJobs);
    //             console.log(sortedJobs);
    //         } catch (error) {
    //             console.error("Error fetching jobs:", error);
    //         }
    //     };

    //     fetchJobs();
    // }, []);

    const { isLoaded } = useUser();


    // fetching jobs
    const {
        fn: fnJobs,
        data: jobs,
        loading: loadingJobs,
    } = useFetch(getJobs);

    useEffect(() => {
        if (isLoaded) fnJobs();
    }, [isLoaded]);

    console.log(loadingJobs);
    

    console.log(jobs);

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
