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

const ApplyJobDrawer = ({ job, user, fetchJob, applied = false }) => {
    return (
        <Drawer open={applied ? false : undefined}>
            <DrawerTrigger>
                <Button
                    variant={job?.isOpen && !applied ? "pupil" : "destructive"}
                    className="w-full  text-white font-bold"
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
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>
                        This action cannot be undone.
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default ApplyJobDrawer;
