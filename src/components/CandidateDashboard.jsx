import React, { useEffect, useMemo } from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import {
    FileText,
    Clock,
    Users,
    CheckCircle2,
    XCircle,
    Briefcase,
    ChevronRight,
    TrendingUp,
} from "lucide-react";
import useFetch from "@/hooks/useFetch";
import { getApplications } from "@/api/apiApplications";
import StatCard from "./StatCard";
import ApplicationCard from "./ApplicationCard";

const CandidateDashboard = () => {
    const { user } = useUser();

    const {
        loading: loadingApplications,
        data: applications,
        fn: fnApplications,
    } = useFetch(getApplications, { user_id: user.id });

    useEffect(() => {
        fnApplications();
    }, []);

    // Calculate statistics
    const stats = useMemo(() => {
        if (!applications) return null;

        const total = applications.length;
        const applied = applications.filter((app) => app.status === "applied").length;
        const interviewing = applications.filter((app) => app.status === "interviewing").length;
        const hired = applications.filter((app) => app.status === "hired").length;
        const rejected = applications.filter((app) => app.status === "rejected").length;

        return { total, applied, interviewing, hired, rejected };
    }, [applications]);

    // Get recent applications (last 5)
    const recentApplications = useMemo(() => {
        if (!applications) return [];
        return [...applications]
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 5);
    }, [applications]);

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    Welcome back,{" "}
                    <span className="text-gradient">{user?.firstName || "Candidate"}</span>
                </h1>
                <p className="text-gray-400">
                    Track your job applications and stay updated on your hiring journey.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <StatCard
                    icon={FileText}
                    label="Total Applications"
                    value={stats?.total || 0}
                    gradientFrom="from-purple-500/20"
                    gradientTo="to-purple-500/5"
                    iconColor="text-purple-400"
                />
                <StatCard
                    icon={Clock}
                    label="Pending Review"
                    value={stats?.applied || 0}
                    gradientFrom="from-blue-500/20"
                    gradientTo="to-blue-500/5"
                    iconColor="text-blue-400"
                />
                <StatCard
                    icon={Users}
                    label="Interviewing"
                    value={stats?.interviewing || 0}
                    gradientFrom="from-yellow-500/20"
                    gradientTo="to-yellow-500/5"
                    iconColor="text-yellow-400"
                />
                <StatCard
                    icon={CheckCircle2}
                    label="Hired"
                    value={stats?.hired || 0}
                    gradientFrom="from-green-500/20"
                    gradientTo="to-green-500/5"
                    iconColor="text-green-400"
                />
                <StatCard
                    icon={XCircle}
                    label="Rejected"
                    value={stats?.rejected || 0}
                    gradientFrom="from-red-500/20"
                    gradientTo="to-red-500/5"
                    iconColor="text-red-400"
                />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                    to="/jobs"
                    className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-600/30 to-purple-600/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-purple-500/20">
                                <Briefcase className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    Browse Jobs
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Explore new opportunities
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>

                <Link
                    to="/saved-jobs"
                    className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-600/30 to-blue-600/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-blue-500/20">
                                <TrendingUp className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    Saved Jobs
                                </h3>
                                <p className="text-sm text-gray-400">
                                    View your bookmarked positions
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
            </div>

            {/* Recent Applications */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">
                        Recent Applications
                    </h2>
                    {applications?.length > 5 && (
                        <Link
                            to="/my-jobs"
                            className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1"
                        >
                            View All <ChevronRight className="w-4 h-4" />
                        </Link>
                    )}
                </div>

                {recentApplications.length > 0 ? (
                    <div className="grid gap-4">
                        {recentApplications.map((application) => (
                            <ApplicationCard
                                key={application.id}
                                application={application}
                                isCandiate
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 rounded-2xl bg-white/5 border border-white/10">
                        <FileText className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-300 mb-2">
                            No Applications Yet
                        </h3>
                        <p className="text-gray-500 mb-4">
                            Start applying to jobs to track your progress here.
                        </p>
                        <Link
                            to="/jobs"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                        >
                            <Briefcase className="w-4 h-4" />
                            Browse Jobs
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CandidateDashboard;
