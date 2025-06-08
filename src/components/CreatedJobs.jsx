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
                    <div>No Jobs Found 🥲</div>
                )}
            </div>
        </div>
    );
};

export default CreatedJobs;
