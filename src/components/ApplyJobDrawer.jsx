import React from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "./ui/textarea";
import { z } from "zod";

const schema = z.object({
    fullName: z.string().min(1, { message: "Name is required." }),
    mobileNo: z.number().min(10, { message: "Mobile number is required." }),
    email: z.string().email("Please enter a valid email address."),
    city: z.string().min(1, { message: "City is required." }),
    experience: z.number().min(0, { message: "Minimum experience must be 0." }),
    skills: z.string().min(1, { message: "Skilss are required." }),
    resume: z
        .any()
        .refine(
            (file) =>
                file[0] &&
                (file[0].type === "application/pdf" ||
                    file[0].type === "application/msword"),
            { message: "Only PDF or Word documents are allowed" }
        ),
});

const ApplyJobDrawer = ({ job, user, fetchJob, applied = false }) => {
    return (
        <Drawer open={applied ? false : undefined}>
            <DrawerTrigger asChild>
                <Button
                    variant={job?.isOpen && !applied ? "pupil" : "destructive"}
                    disabled={!job?.isOpen || applied}
                    className="text-white font-bold"
                >
                    {job?.isOpen
                        ? applied
                            ? "Already Applied"
                            : "Apply Now"
                        : "Hiring Closed"}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>
                        Applying for {job?.title} at{" "}
                        {job?.company?.company_name}
                    </DrawerTitle>
                    <DrawerDescription>
                        Please fill the form below
                    </DrawerDescription>
                </DrawerHeader>

                <form action="" className="p-4 pb-0">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <Input
                            type="text"
                            placeholder="Full Name"
                            className="flex-1"
                        />
                        <Input
                            type="number"
                            placeholder="Mobile No"
                            className="flex-1"
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            className="flex-1"
                        />
                        <Input
                            type="text"
                            placeholder="City"
                            className="flex-1"
                        />
                        <Input
                            type="number"
                            placeholder="Year of experience"
                            className="flex-1"
                        />
                        <Input
                            type="text"
                            placeholder="Skills (Comma Separated)"
                            className="flex-1"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Textarea placeholder="Additional Note..." />
                        <RadioGroup defaultValue="option-one">
                            <Label>Confirm your availability</Label>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Yes" id="yes" />
                                <Label htmlFor="yes">
                                    {" "}
                                    Yes, I am available to join immediately
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="No" id="no" />
                                <Label htmlFor="no">No</Label>
                            </div>
                        </RadioGroup>
                        <div>
                            <Label>Upload you resume</Label>
                            <Input
                                type="file"
                                accept=".pdf, .doc, .docx"
                                className="flex-1 file:text-gray-500"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <Button
                            type="submit"
                            variant="pupil"
                            className="w-full"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default ApplyJobDrawer;
