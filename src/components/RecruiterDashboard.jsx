import React, { useEffect, useMemo } from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import {
    Briefcase,
    Users,
    CheckCircle2,
    XCircle,
    PlusCircle,
    ChevronRight,
    Building2,
    TrendingUp,
    Eye,
} from "lucide-react";
import useFetch from "@/hooks/useFetch";
import { getMyJobs } from "@/api/apiJobs";
import StatCard from "./StatCard";
import JobCard from "./JobCard";

const RecruiterDashboard = () => {
    const { user } = useUser();

    const {
        loading: loadingJobs,
        data: jobs,
        fn: fnJobs,
    } = useFetch(getMyJobs, { recruiter_id: user.id });

    useEffect(() => {
        fnJobs();
    }, []);

    // Calculate statistics
    const stats = useMemo(() => {
        if (!jobs) return null;

        const totalJobs = jobs.length;
        const openJobs = jobs.filter((job) => job.isOpen).length;
        const closedJobs = jobs.filter((job) => !job.isOpen).length;
        const totalApplicants = jobs.reduce(
            (acc, job) => acc + (job.applications?.length || 0),
            0
        );

        return { totalJobs, openJobs, closedJobs, totalApplicants };
    }, [jobs]);

    // console.log(jobs.applications);
    

    // Get recent jobs (last 6)
    const recentJobs = useMemo(() => {
        if (!jobs) return [];
        return [...jobs]
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 6);
    }, [jobs]);

    // Get application status breakdown
    const applicationStats = useMemo(() => {
        if (!jobs) return null;

        let applied = 0;
        let interviewing = 0;
        let hired = 0;
        let rejected = 0;

        jobs.forEach((job) => {
            if (job.applications) {
                job.applications.forEach((app) => {
                    switch (app.status) {
                        case "applied":
                            applied++;
                            break;
                        case "interviewing":
                            interviewing++;
                            break;
                        case "hired":
                            hired++;
                            break;
                        case "rejected":
                            rejected++;
                            break;
                    }
                });
            }
        });

        return { applied, interviewing, hired, rejected };
    }, [jobs]);

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    Welcome back,{" "}
                    <span className="text-gradient">{user?.firstName || "Recruiter"}</span>
                </h1>
                <p className="text-gray-400">
                    Manage your job postings and track applicant progress.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    icon={Briefcase}
                    label="Total Jobs Posted"
                    value={stats?.totalJobs || 0}
                    gradientFrom="from-purple-500/20"
                    gradientTo="to-purple-500/5"
                    iconColor="text-purple-400"
                />
                <StatCard
                    icon={CheckCircle2}
                    label="Open Positions"
                    value={stats?.openJobs || 0}
                    gradientFrom="from-green-500/20"
                    gradientTo="to-green-500/5"
                    iconColor="text-green-400"
                />
                <StatCard
                    icon={XCircle}
                    label="Closed Positions"
                    value={stats?.closedJobs || 0}
                    gradientFrom="from-red-500/20"
                    gradientTo="to-red-500/5"
                    iconColor="text-red-400"
                />
                <StatCard
                    icon={Users}
                    label="Total Applicants"
                    value={stats?.totalApplicants || 0}
                    gradientFrom="from-blue-500/20"
                    gradientTo="to-blue-500/5"
                    iconColor="text-blue-400"
                />
            </div>

            {/* Application Pipeline */}
            {applicationStats && stats?.totalApplicants > 0 && (
                <div className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                        Application Pipeline
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                            <p className="text-2xl font-bold text-blue-400">
                                {applicationStats.applied}
                            </p>
                            <p className="text-sm text-gray-400">New Applications</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                            <p className="text-2xl font-bold text-yellow-400">
                                {applicationStats.interviewing}
                            </p>
                            <p className="text-sm text-gray-400">Interviewing</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                            <p className="text-2xl font-bold text-green-400">
                                {applicationStats.hired}
                            </p>
                            <p className="text-sm text-gray-400">Hired</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                            <p className="text-2xl font-bold text-red-400">
                                {applicationStats.rejected}
                            </p>
                            <p className="text-sm text-gray-400">Rejected</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                    to="/post-job"
                    className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-600/30 to-purple-600/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-purple-500/20">
                                <PlusCircle className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    Post New Job
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Create a new job listing
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>

                <Link
                    to="/posted-jobs"
                    className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-600/30 to-blue-600/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-blue-500/20">
                                <Eye className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    View All Jobs
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Manage your posted positions
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
            </div>

            {/* Recent Jobs */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">
                        Recent Job Postings
                    </h2>
                    {jobs?.length > 6 && (
                        <Link
                            to="/posted-jobs"
                            className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1"
                        >
                            View All <ChevronRight className="w-4 h-4" />
                        </Link>
                    )}
                </div>

                {recentJobs.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {recentJobs.map((job) => (
                            <JobCard
                                key={job.id}
                                job={job}
                                onJobSaved={fnJobs}
                                isMyJob
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 rounded-2xl bg-white/5 border border-white/10">
                        <Building2 className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-300 mb-2">
                            No Jobs Posted Yet
                        </h3>
                        <p className="text-gray-500 mb-4">
                            Start posting jobs to find the best candidates.
                        </p>
                        <Link
                            to="/post-job"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                        >
                            <PlusCircle className="w-4 h-4" />
                            Post Your First Job
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecruiterDashboard;
