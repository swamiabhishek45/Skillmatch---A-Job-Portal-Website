import { getSavedJobs } from "@/api/apiJobs";
import JobCard from "@/components/JobCard";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { BarLoader } from "react-spinners";

const SavedJobs = () => {
    const { isLoaded } = useUser();
    const {
        loading: loadingSavedJobs,
        data: savedJobs,
        fn: fnSavedJobs,
    } = useFetch(getSavedJobs);

    useEffect(() => {
        if (isLoaded) {
            fnSavedJobs();
        }
    }, [isLoaded]);

    if (!isLoaded || loadingSavedJobs) {
        return <BarLoader className="mb-4" width={"100%"} color="purple" />;
    }

    return (
        <div>
            <h1 className="mt-5 font-extrabold text-3xl sm:text-5xl text-center pb-8">
                Saved Jobs
            </h1>

            {loadingSavedJobs === false && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 m-5 mt-0">
                    {savedJobs?.length ? (
                        savedJobs
                            .sort(
                                (a, b) =>
                                    new Date(b.created_at) -
                                    new Date(a.created_at)
                            )
                            .map((saved) => (
                                <JobCard
                                    key={saved.id}
                                    job={saved.job}
                                    savedInit={true}
                                    onJobSaved={fnSavedJobs}
                                />
                            ))
                    ) : (
                        <div>No Saved Jobs Found 👀</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SavedJobs;
