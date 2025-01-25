import {
    SignedIn,
    SignedOut,
    SignIn,
    UserButton,
    useUser,
} from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { BookmarkIcon, BriefcaseBusiness, PenBox } from "lucide-react";

const Navbar = () => {
    const [showSignIn, setShowSignIn] = useState(false);

    const [search, setSearch] = useSearchParams();

    const { user } = useUser();
    
    useEffect(() => {
        if (search.get("sign-in")) {
            setShowSignIn(true);
        }
    }, [search]);

    const handleOveryLayClick = (e) => {
        if (e.target == e.currentTarget) {
            setShowSignIn(false);
            setSearch({});
        }
    };

    return (
        <nav className=" text-white bg-[#070916] border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/">
                            <span className="roboto-slab text-xl md:text-3xl font-bold text-purple-500">
                                B. E. ROZGAAR
                            </span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="flex space-x-4">
                        <SignedOut>
                            <Button
                                variant="outline"
                                onClick={() => setShowSignIn(true)}
                            >
                                Login
                            </Button>
                        </SignedOut>
                        <SignedIn>
                            {user?.unsafeMetadata?.role === "recruiter" && (
                                <Link to="/post-job">
                                    <Button
                                        variant="destructive"
                                        className="rounded-full"
                                    >
                                        <PenBox size={20} className="mr-2" />
                                        Post a Job
                                    </Button>
                                </Link>
                            )}
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: "w-10 h-10",
                                    },
                                }}
                            >
                                {user?.unsafeMetadata?.role === "recruiter" ? (
                                    <UserButton.MenuItems>
                                        <UserButton.Link
                                            label="My Posted Jobs"
                                            labelIcon={
                                                <BriefcaseBusiness size={15} />
                                            }
                                            href="/posted-jobs"
                                        />
                                    </UserButton.MenuItems>
                                ) : (
                                    <UserButton.MenuItems>
                                        <UserButton.Link
                                            label="My Applied Jobs"
                                            labelIcon={
                                                <BriefcaseBusiness size={15} />
                                            }
                                            href="/my-jobs"
                                        />
                                        <UserButton.Link
                                            label="Saved Jobs"
                                            labelIcon={
                                                <BookmarkIcon size={15} />
                                            }
                                            href="/saved-jobs"
                                        />
                                    </UserButton.MenuItems>
                                )}
                            </UserButton>
                        </SignedIn>
                    </div>

                    {/* Mobile Menu Button */}
                    {/* <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>
            {showSignIn && (
                <div
                    className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
                    onClick={handleOveryLayClick}
                >
                    <SignIn
                        signUpForceRedirectUrl="/onboarding"
                        fallBackRedirectUrl="/onboarding"
                    />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
