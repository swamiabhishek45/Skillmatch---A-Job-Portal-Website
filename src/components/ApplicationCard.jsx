import React from "react";
import { Card, CardTitle } from "./ui/card-hover-effect";
import { CardContent, CardFooter, CardHeader } from "./ui/card";
import { Boxes, BriefcaseBusiness, Download } from "lucide-react";
import { FiMapPin } from "react-icons/fi";
import useFetch from "@/hooks/useFetch";
import { updateApplication } from "@/api/apiApplications";
import { BarLoader } from "react-spinners";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const ApplicationCard = ({ application, isCandiate = false }) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = application?.resume;
        link.target = "_blank";
        link.click();
    };

    const { loading: loadingAppStatus, fn: fnAppStatus } = useFetch(
        updateApplication,
        { job_id: application.job_id }
    );

    const handleStatusChange = (status) => {
        fnAppStatus(status);
    };

    return (
        <Card>
            {loadingAppStatus && (
                <BarLoader width="100%" className="mb-4" color="purple" />
            )}
            <CardHeader className="flex flex-col">
                <CardTitle className="flex justify-between w-full font-bold text-xl">
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
                {isCandiate ? (
                    <span className="capitalize font-bold">
                        Status: {application.status}
                    </span>
                ) : (
                    <Select
                        onValueChange={handleStatusChange}
                        defaultValue={application.status}
                    >
                        <SelectTrigger className="w-52">
                            <SelectValue placeholder="Application Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="applied">Applied</SelectItem>
                            <SelectItem value="interviewing">
                                Interviewing
                            </SelectItem>
                            <SelectItem value="hired">Hired</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                    </Select>
                )}
            </CardFooter>
        </Card>
    );
};

export default ApplicationCard;
