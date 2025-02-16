import React from "react";
import { Card, CardTitle } from "./ui/card-hover-effect";
import { CardContent, CardFooter, CardHeader } from "./ui/card";
import { Boxes, BriefcaseBusiness, Download, Locate, Map } from "lucide-react";
import { FiMapPin } from "react-icons/fi";

const ApplicationCard = ({ application, isCandiate = false }) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = application?.resume;
        link.target = "_blank";
        link.click();
    };

    return (
        <Card>
            <CardHeader className="flex flex-col">
                <CardTitle className="flex justify-between w-full font-bold">
                    {isCandiate
                        ? `${application?.job?.title} at ${application?.job?.company?.name}`
                        : application.name}

                    <Download
                        size={18}
                        className="bg-white text-black rounded-md h-8 w-20 p-1.5 cursor-pointer
                        "
                        onClick={handleDownload}
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 mt-2 flex-1">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex gap-2 items-center">
                        <FiMapPin size={15} /> {application?.city}
                    </div>
                    <div className="flex gap-2 items-center">
                        <BriefcaseBusiness size={15} />{" "}
                        {application?.experience} years of experience
                    </div>
                    <div className="flex gap-2 items-center">
                        <Boxes size={15} /> {application?.skills}
                    </div>
                </div>
                <hr />
            </CardContent>
            <CardFooter className="flex justify-between mt-2">
                <span>
                    {new Date(application?.created_at).toLocaleString()}
                </span>
                {!isCandiate ? (
                    <span className="capitalize font-bold">
                        Status: {application.status}
                    </span>
                ) : (
                    <></>
                )}
            </CardFooter>
        </Card>
    );
};

export default ApplicationCard;
