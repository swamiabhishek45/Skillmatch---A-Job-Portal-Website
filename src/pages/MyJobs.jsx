import CreatedApplications from "@/components/CreatedApplications";
import CreatedJobs from "@/components/CreatedJobs";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { BarLoader } from "react-spinners";

const MyJobs = () => {
    const { user, isLoaded } = useUser();

    if (!isLoaded) {
        return <BarLoader width="100%" className="mb-4" color="purple" />;
    }
    return (
        <div>
            <h1 className="mt-5 font-extrabold text-3xl sm:text-5xl text-center pb-8">
                {user?.unsafeMetadata?.role === "candidate"
                    ? "My Applications"
                    : "My Posted Jobs"}
            </h1>

            {user?.unsafeMetadata?.role === "candidate" ? (
                <CreatedApplications />
            ) : (
                <CreatedJobs />
            )}
        </div>
    );
};

export default MyJobs;
