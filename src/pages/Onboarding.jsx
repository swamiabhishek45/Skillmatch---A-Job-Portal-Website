import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { FaUserTie } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const Onboarding = () => {
    const { user, isLoaded } = useUser();
    const navigate = useNavigate();

    // user role stored in unsafeMetadata in clerk
    const handleRoleSelection = async (role) => {
        await user
            .update({ unsafeMetadata: { role } })
            .then(() => {
                navigate(role === "recruiter" ? "/post-job" : "/jobs");
            })
            .catch((err) => {
                console.log("Error updating role: ", err);
            });
    };

    // if metadata has role then user can't go back to onboarding route
    useEffect(() => {
        if (user?.unsafeMetadata?.role) {
            navigate(
                user?.unsafeMetadata?.role === "recruiter"
                    ? "/post-job"
                    : "/jobs"
            );
        }
    }, [user]);

    if (!isLoaded) {
        return <BarLoader width="100%" className="mb-4" color="purple" />;
    }

    return (
        <div className="flex justify-center items-center mt-40 flex-col">
            <h2 className="text-7xl sm:text-8xl font-extrabold poppins">
                I am a...
            </h2>
            <div className="grid grid-cols-2 md:px-40  mt-16">
                <Button
                    className="text-4xl flex gap-2 p-10 mx-5 bg-blue-800 hover:bg-blue-700 text-white"
                    onClick={() => handleRoleSelection("candidate")}
                >
                    <FaUserTie />
                    Candidate
                </Button>
                <Button
                    className="text-4xl flex gap-2 p-10 mx-5"
                    variant="destructive"
                    onClick={() => handleRoleSelection("recruiter")}
                >
                    <FaBuilding />
                    Recruiter
                </Button>
            </div>
        </div>
    );
};

export default Onboarding;
