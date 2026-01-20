import { getMyJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { BarLoader } from "react-spinners";
import JobCard from "./JobCard";

const CreatedJobs = () => {
    const { user } = useUser();

    const {
        loading: loadingMyJobs,
        data: createdJobs,
        fn: fnCreatedJobs,
    } = useFetch(getMyJobs, { recruiter_id: user.id });

    useEffect(() => {
        fnCreatedJobs();
    }, []);

    if (loadingMyJobs) {
        return <BarLoader width="100%" className="mb-4" color="purple" />;
    }
    return (
        <div>
            {" "}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
                {createdJobs?.length ? (
                    createdJobs
                        .sort(
                            (a, b) =>
                                new Date(b.created_at) - new Date(a.created_at)
                        )
                        .map((job) => (
                            <JobCard
                                key={job.id}
                                job={job}
                                onJobSaved={fnCreatedJobs}
                                isMyJob
                            />
                        ))
                ) : (
                     <div className="col-span-full flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
                                {/* <img src={NoJobFound} width={250} height={250} /> */}

                                <h2 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
                                    No Jobs Found
                                </h2>

                                <p className="mt-2 max-w-md text-gray-500 dark:text-gray-400">
                                    You don't have any jobs created yet
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
        </div>
    );
};

export default CreatedJobs;
