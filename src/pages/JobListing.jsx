import { getJobs } from "@/api/apiJobs";
import JobCard from "@/components/JobCard";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const JobListing = () => {
    const { isLoaded } = useUser();

    const [location, setLocation] = useState("");
    const [company_id, setCompany_id] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const {
        fn: fnJobs,
        data: jobs,
        loading: loadingJobs,
    } = useFetch(getJobs, { location, company_id, searchQuery });

    useEffect(() => {
        if (isLoaded) fnJobs();
    }, [isLoaded, location, company_id, searchQuery]);

    if (!isLoaded) {
        return <BarLoader width="100%" className="mb-4" color="purple" />;
    }

    return (
        <div>
            <h1 className="text-center font-extrabold text-3xl sm:text-5xl md:text-6xl poppins my-5">
                Jobs added recently
            </h1>

            {/* Add filters here  */}
            {loadingJobs && (
                <BarLoader width="100%" className="mb-4" color="purple" />
            )}

            {loadingJobs === false && (
                <div>
                    {jobs?.length ? (
                        jobs.map((job) => (
                            <JobCard
                                key={job.id}
                                job={job}
                                savedInit={job?.saved?.length > 0}
                            />
                        ))
                    ) : (
                        <div>No Jobs Found 🥲</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default JobListing;
