import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user, isLoaded, isSignedIn } = useUser();
    const { pathname } = useLocation();

    if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
        return <Navigate to="/?sign-in=true" />;
    }

    // check onboarding status
    if (
        user !== undefined &&
        !user?.unsafeMetadata?.role &&
        pathname !== "/onboarding"
    ) {
        return <Navigate to="/onboarding" />;
    }

    if (
        user?.unsafeMetadata?.role === "candidate" &&
        pathname === "/post-job"
    ) {
        return <Navigate to="/jobs" />;
    }
    if (user?.unsafeMetadata?.role === "recruiter" && pathname === "/jobs") {
        return <Navigate to="/post-job" />;
    }

    return children;
};

export default ProtectedRoute;
