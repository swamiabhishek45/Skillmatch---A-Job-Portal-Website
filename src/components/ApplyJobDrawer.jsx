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
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useFetch from "@/hooks/useFetch";
import { applyToJob } from "@/api/apiApplications";
import { BarLoader } from "react-spinners";

const schema = z.object({
    fullName: z.string().min(1, { message: "Name is required." }),
    mobileNo: z.number().min(10, { message: "Mobile number is required." }),
    email: z.string().email("Please enter a valid email address."),
    city: z.string().min(1, { message: "City is required." }),
    experience: z.number().min(0, { message: "Minimum experience must be 0." }),
    note: z.string(),
    skills: z.string().min(1, { message: "Skills are required." }),
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
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
    });
    const {
        loading: loadingApply,
        error: errorApply,
        fn: fnApply,
    } = useFetch(applyToJob);

    const onSubmit = (data) => {
        fnApply({
            ...data,
            job_id: job.id,
            candidate_id: user.id,
            name: user.fullName,
            status: "applied",
            resume: data.resume[0],
        });
    };

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

                <form onSubmit={handleSubmit(onSubmit)} className="p-4 pb-0">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <Input
                            type="text"
                            placeholder="Full Name"
                            className="flex-1"
                            {...register("fullName")}
                        />
                        {errors.firstName && (
                            <p className="text-red-500">
                                {errors.experience.message}
                            </p>
                        )}
                        <Input
                            type="number"
                            placeholder="Mobile No"
                            className="flex-1"
                            {...register("mobileNo", {
                                valueAsNumber: true,
                            })}
                        />
                        {errors.number && (
                            <p className="text-red-500">
                                {errors.number.message}
                            </p>
                        )}
                        <Input
                            type="email"
                            placeholder="Email"
                            className="flex-1"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                        <Input
                            type="text"
                            placeholder="City"
                            className="flex-1"
                            {...register("city")}
                        />
                        {errors.city && (
                            <p className="text-red-500">
                                {errors.city.message}
                            </p>
                        )}
                        <Input
                            type="number"
                            placeholder="Year of experience"
                            className="flex-1"
                            {...register("experience", {
                                valueAsNumber: true,
                            })}
                        />
                        {errors.number && (
                            <p className="text-red-500">
                                {errors.number.message}
                            </p>
                        )}
                        <Input
                            type="text"
                            placeholder="Skills (Comma Separated)"
                            className="flex-1"
                            {...register("skills")}
                        />
                        {errors.skills && (
                            <p className="text-red-500">
                                {errors.skills.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            placeholder="Additional Note..."
                            {...register("note")}
                        />
                        {errors.note && (
                            <p className="text-red-500">
                                {errors.note.message}
                            </p>
                        )}
                        <Controller
                            name="availability"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    {...field}
                                >
                                    <Label>Confirm your availability</Label>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Yes" id="yes" />
                                        <Label htmlFor="yes">
                                            {" "}
                                            Yes, I am available to join
                                            immediately
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="No" id="no" />
                                        <Label htmlFor="no">No</Label>
                                    </div>
                                </RadioGroup>
                            )}
                        />

                        {errors.availability && (
                            <p className="text-red-500">
                                {errors.availability.message}
                            </p>
                        )}
                        <div>
                            <Label>Upload you resume</Label>
                            <Input
                                type="file"
                                accept=".pdf, .doc, .docx"
                                className="flex-1 file:text-gray-500"
                                {...register("resume")}
                            />
                            {errors.resume && (
                                <p className="text-red-500">
                                    {errors.resume.message}
                                </p>
                            )}
                            {errorApply?.message && (
                                <p className="text-red-500">
                                    {errorApply?.message}
                                </p>
                            )}
                            {loadingApply && (
                                <BarLoader
                                    width="100%"
                                    className="mb-4"
                                    color="purple"
                                />
                            )}
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
