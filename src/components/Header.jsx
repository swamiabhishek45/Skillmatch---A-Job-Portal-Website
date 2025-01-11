import React from "react";
import { Link } from "react-router-dom";
import PeerList from "../assets/peerlist.svg";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Header = () => {
    const words = [
        {
            text: "remotely",
            className: "text-purple-500 dark:text-purple-500",
        },
    ];
    return (
        <>
            <div className="px-4 md:px-0 mt-14">
                {/* Peerlist Tag */}
                <Link
                    to="https://peerlist.io/swamiabhishek45`"
                    aria-label="peerlist-tag"
                    target="_blank"
                >
                    <img
                        src={PeerList}
                        width={400}
                        height={400}
                        alt="Peerlist Logo"
                        className="mx-auto mb-4 w-24 md:w-32"
                    />
                </Link>

                {/* Heading Section */}
                <div className="flex flex-col items-center gap-4">
                    <div
                        className={`roboto-slab w-11/12 text-center text-3xl text-white sm:text-4xl md:text-5xl lg:w-3/4 lg:text-6xl xl:text-7xl`}
                    >
                        Want to work remotely? then find jobs on{" "}
                        <span className="inline-block ">
                            <TypewriterEffectSmooth words={words} />
                        </span>
                    </div>
                    <p className="poppins md:text-md w-full text-center text-xs text-gray-400 sm:w-1/2 lg:text-lg">
                        remotely connects top talent with trusted tech
                        companies, offering seamless access to fully remote and
                        actively hiring opportunities.
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="mt-12 flex w-full flex-col justify-center gap-6 sm:flex-row">
                    <Link
                        to="/jobs"
                        className="work-sans md:text-md cursor-pointer rounded-lg bg-primarySkyBlue px-6 py-3 text-center text-sm font-medium text-white shadow-md bg-[#72389f] focus:ring-2 focus:ring-offset-2 focus:ring-primarySkyBlue transition-transform transform hover:scale-105 active:scale-95"
                        aria-label="Explore Careers"
                    >
                        Search Jobs
                    </Link>

                    <Link
                        to="/post-job"
                        className="work-sans md:text-md z-30 cursor-pointer rounded-lg bg-gray-800 px-6 py-3 text-center text-sm font-medium text-gray-300 shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-transform transform hover:scale-105 active:scale-95"
                        aria-label="Success Stories"
                    >
                        Post a Job
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
