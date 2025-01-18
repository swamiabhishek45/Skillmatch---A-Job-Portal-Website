import React from "react";
import Header from "@/components/Header";
import SlidingCategory from "@/components/SlidingCategory";
import RecentJobs from "@/components/RecentJobs";
import FAQ from "@/components/FAQ";

export default function LandingPage() {
    
    return (    
        <div className="w-full">
        <Header />
        <SlidingCategory />
        <RecentJobs />
        <FAQ />
        </div>
    );
}
