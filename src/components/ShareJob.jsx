import React, { useEffect, useState } from "react";
import { RiShareFill } from "react-icons/ri";
import { FiCopy } from "react-icons/fi";
import { BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

const ShareJob = ({ job }) => {
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        setCurrentUrl(window.location.href); // Get the current URL
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentUrl);
    };

    const shareOnLinkedIn = () => {
        const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            currentUrl
        )}&title=${encodeURIComponent(
            "Full stack developer"
        )}&summary=${encodeURIComponent(job?.description)}&source=JobPortal`;
        window.open(linkedInUrl, "_blank");
    };

    const shareOnWhatsApp = () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
            `Check out this job: ${job.title}\n${job?.description}\n${currentUrl}`
        )}`;
        window.open(whatsappUrl, "_blank");
    };

    const shareOnX = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `Check out this job: ${job.title}\n${currentUrl}`
        )}`;
        window.open(twitterUrl, "_blank");
    };

    return (
        <div className="flex gap-2">
            <Popover>
                <PopoverTrigger>
                    <Button variant="outline" className="w-15">
                        <RiShareFill />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col gap-2 ">
                    <div className="flex justify-evenly">
                        <button onClick={shareOnLinkedIn}>
                            <BsLinkedin size={24} />
                        </button>
                        <button onClick={shareOnWhatsApp}>
                            <BsWhatsapp size={24} />
                        </button>
                        <button onClick={shareOnX}>
                            <BsTwitterX size={24} />
                        </button>
                    </div>
                    <div className="relative flex items-center w-full max-w-md mx-auto mt-2">
                        {/* Input Field */}
                        <input
                            type="text"
                            value={currentUrl}
                            readOnly
                            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {/* Copy Icon */}
                        <button
                            onClick={copyToClipboard}
                            className="absolute right-2 p-1 text-gray-500 transition-colors duration-200 rounded-full hover:text-blue-500 focus:outline-none"
                            title="Copy URL"
                        >
                            <FiCopy size={20} />
                        </button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default ShareJob;
