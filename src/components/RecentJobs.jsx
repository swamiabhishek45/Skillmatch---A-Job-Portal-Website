import React, { useEffect, useState } from "react";
import { Button } from "./ui/moving-border";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import RemoteJobCard from "./RemoteJobCard";

const RecentJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Fetch jobs data
        const fetchJobs = async () => {
            try {
                const response = await fetch(
                    "https://remotive.com/api/remote-jobs?limit=6"
                );
                const data = await response.json();

                // Combine all arrays and get first three jobs
                const allJobs = data.jobs.flat(); // Flattening nested arrays
                const sortedJobs = allJobs
                    .sort(
                        (a, b) =>
                            new Date(b.publication_date) -
                            new Date(a.publication_date)
                    ) // Sort by latest
                    .slice(0, 6); // Get first 3 jobs

                setJobs(sortedJobs);
                console.log(sortedJobs);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center mt-20 mb-10">
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-[#070916] text-black dark:text-white border-neutral-200 dark:border-slate-800 poppins cursor-default  font-semibold"
                >
                    Recentely Job Circular
                </Button>
            </div>

            <div>
                <ul className="mx-5 lg:mx-auto max-w-6xl  grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {jobs.map((job, index) => (
                        <RemoteJobCard key={index} job={job} />
                    ))}
                </ul>
            </div>

            <div className="flex my-10 items-center justify-center">
                <Link to="/jobs">
                    <button className="flex items-center gap-2 xshadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                        Show more jobs
                        <FaAngleRight className="mt-[2px]" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RecentJobs;
