import { getJobs } from "@/api/apiJobs";
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
        data: dataJobs,
        loading: loadingJobs,
    } = useFetch(getJobs, { location, company_id, searchQuery });

    useEffect(() => {
        if (isLoaded) fnJobs();
    }, [isLoaded, location, company_id, searchQuery]);

    if (!isLoaded) {
        return <BarLoader width="100%" className="mb-4" color="purple" />;
    }
    
    return <div>JobListing</div>;
};

export default JobListing;
