import React from "react";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";
import { Navigate } from "react-router-dom";
import CandidateDashboard from "@/components/CandidateDashboard";
import RecruiterDashboard from "@/components/RecruiterDashboard";

const Dashboard = () => {
    const { user, isLoaded } = useUser();

    if (!isLoaded) {
        return <BarLoader className="mb-4" width={"100%"} color="purple" />;
    }

    // Redirect to onboarding if role not set
    if (!user?.unsafeMetadata?.role) {
        return <Navigate to="/onboarding" />;
    }

    return (
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {user?.unsafeMetadata?.role === "candidate" ? (
                    <CandidateDashboard />
                ) : (
                    <RecruiterDashboard />
                )}
            </div>
        </div>
    );
};

export default Dashboard;
