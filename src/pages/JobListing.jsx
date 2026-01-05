import { getCompanies } from "@/api/apiCompanies";
import { getJobs } from "@/api/apiJobs";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { City } from "country-state-city";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import NoJobFound from '../assets/nojobfound.png'

const JobListing = () => {
    const { isLoaded } = useUser();

    const [location, setLocation] = useState("");
    const [company_id, setCompany_id] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // fetching jobs
    const {
        fn: fnJobs,
        data: jobs,
        loading: loadingJobs,
    } = useFetch(getJobs, { location, company_id, searchQuery });

    useEffect(() => {
        if (isLoaded) fnJobs();
    }, [isLoaded, location, company_id, searchQuery]);

    // fetching companies
    const { fn: fnCompanies, data: companies } = useFetch(getCompanies);

    useEffect(() => {
        if (isLoaded) fnCompanies();
    }, [isLoaded]);

    const handleSearch = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        const query = formData.get("search-query");

        if (query) setSearchQuery(query);
    };

    const clearFilters = () => {
        setSearchQuery("");
        setCompany_id("");
        setLocation("");
    };

    if (!isLoaded) {
        return <BarLoader width="100%" className="mb-4" color="purple" />;
    }

    return (
        <div className="max-w-7xl mx-5 xl:mx-auto">
            <h1 className="mt-5 font-extrabold text-3xl sm:text-5xl text-center pb-8">
                Jobs added recently
            </h1>

            {/* filters here  */}
            <form onSubmit={handleSearch} className="flex gap-3 h-14 w-full ">
                <Input
                    type="text"
                    plceholder="Search jobs by title..."
                    name="search-query"
                />

                <Button type="submit">Search</Button>
            </form>
            <div className="flex flex-col md:flex-row mb-5 gap-3">
                <div className="flex w-full gap-3">
                    <Select
                        value={location}
                        onValueChange={(value) => setLocation(value)}
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {City.getCitiesOfState("IN", "MH").map(
                                    ({ name }) => (
                                        <SelectItem key={name} value={name}>
                                            {name}
                                        </SelectItem>
                                    )
                                )}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select
                        value={company_id}
                        onValueChange={(value) => setCompany_id(value)}
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Company" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {companies?.map(({ company_name, id }) => {
                                    return (
                                        <SelectItem
                                            key={company_name}
                                            value={id}
                                        >
                                            {company_name}
                                        </SelectItem>
                                    );
                                })}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <Button onClick={clearFilters} variant="destructive">
                    Clear Filters
                </Button>
            </div>
            {loadingJobs && (
                <BarLoader width="100%" className="mb-4" color="purple" />
            )}

            {/* listing jobs  */}
            {loadingJobs === false && (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
                    {jobs?.length ? (
                        jobs
                            .sort(
                                (a, b) =>
                                    new Date(b.created_at) -
                                    new Date(a.created_at)
                            )
                            .map((job) => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    savedInit={job?.saved?.length > 0}
                                />
                            ))
                    ) : (
                            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
                                <img src={NoJobFound}  width={250} height={250} />

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
    );
};

export default JobListing;
