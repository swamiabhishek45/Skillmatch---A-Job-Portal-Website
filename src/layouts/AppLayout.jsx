import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <div className="grid-background"></div>
            <main className="min-h-screen ">
                <Navbar />
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;
