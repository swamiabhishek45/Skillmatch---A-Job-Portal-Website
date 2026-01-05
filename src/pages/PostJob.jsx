import { getCompanies } from "@/api/apiCompanies";
import { addNewJob } from "@/api/apiJobs";
import AddCompanyDrawer from "@/components/AddCompanyDrawer";
// import AddCompanyDrawer from "@/components/add-company-drawer";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { State, City } from "country-state-city";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { z } from "zod";

const schema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    category: z.string(),
    salary: z.string(),
    job_type: z.string().min(1, { message: "This field is required" }),
    experience: z.string(),
    openings: z.string().min(1, { message: "This field is required" }),
    start_date: z.string(),
    location: z.string().min(1, { message: "Select a location" }),
    company_id: z.string().min(1, { message: "Select or Add a new Company" }),
    requirements: z.string().min(1, { message: "Requirements are required" }),
    description: z.string().min(1, { message: "This field is required" }),
});

const PostJob = () => {
    const { user, isLoaded } = useUser();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: "",
            category: "",
            salary: "",
            job_type: "",
            experience: "",
            openings: "",
            start_date: "",
            location: "",
            company_id: "",
            requirements: "",
        },
        resolver: zodResolver(schema),
    });

    const {
        loading: loadingCreateJob,
        error: errorCreateJob,
        data: dataCreateJob,
        fn: fnCreateJob,
    } = useFetch(addNewJob);

    const onSubmit = (data) => {
        fnCreateJob({
            ...data,
            recruiter_id: user.id,
            isOpen: true,
        });
    };

    useEffect(() => {
        if (dataCreateJob?.length > 0) navigate("/jobs");
    }, [loadingCreateJob]);

    const {
        loading: loadingCompanies,
        data: companies,
        fn: fnCompanies,
    } = useFetch(getCompanies);

    useEffect(() => {
        if (isLoaded) {
            fnCompanies();
        }
    }, [isLoaded]);

    if (!isLoaded || loadingCompanies) {
        return <BarLoader className="mb-4" width={"100%"} color="purple" />;
    }

    if (user?.unsafeMetadata?.role !== "recruiter") {
        return <Navigate to="/jobs" />;
    }

    return (
        <div className="mx-auto max-w-7xl">
            <h1 className="mt-5 font-extrabold text-3xl sm:text-5xl text-center pb-8">
                Post a Job
            </h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 p-4 pb-0"
            >
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium text-gray-400">Job Title</label>
                        <Input placeholder="e.g. Frontend Developer" {...register("title")} />
                        {errors.title && (
                            <p className="text-red-500">
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    {/* <Input
                        placeholder="Job Category"
                        {...register("category")}
                    />
                    {errors.category && (
                        <p className="text-red-500">
                            {errors.category.message}
                        </p>
                    )} */}
                    <div>
                        <label className="text-sm font-medium text-gray-400">Salary</label>
                        <Input placeholder="e.g. ₹ 80k - 100k" {...register("salary")} />
                    </div>
                    {/* {errors.salary && (
                        <p className="text-red-500">{errors.salary.message}</p>
                    )} */}
                    <div>
                        <label className="text-sm font-medium text-gray-400">Job Type</label>
                        <Input
                            placeholder="e.g. Full-time, Remote"
                            {...register("job_type")}
                        />
                        {errors.job_type && (
                            <p className="text-red-500">
                                {errors.job_type.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-400">Experience</label>
                        <Input
                            placeholder="e.g. 2+ years"
                            {...register("experience")}
                        />
                        {/* {errors.experience && (
                        <p className="text-red-500">
                        {errors.experience.message}
                        </p>
                        )} */}
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-400">Openings</label>
                        <Input
                            placeholder="e.g. 10"
                            {...register("openings")}
                        />
                        {errors.openings && (
                            <p className="text-red-500">
                                {errors.openings.message}
                            </p>
                        )}{" "}
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-400">Start Date</label>
                        <Input
                            placeholder="e.g. Immediately"
                            {...register("start_date")}
                        />
                        {/* {errors.start_date && (
                        <p className="text-red-500">
                        {errors.start_date.message}
                        </p>
                        )} */}
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-400">About the Job</label>
                    <Textarea
                        placeholder="Brief description of the role..."
                        {...register("description")}
                    />
                    {errors.description && (
                        <p className="text-red-500">
                            {errors.description.message}
                        </p>
                    )}
                </div>
                <div className="flex gap-4 items-center">
                    <div className="w-full">
                        <label className="text-sm font-medium text-gray-400">Job Location</label>
                        <Controller
                            name="location"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {City.getCitiesOfState(
                                                "IN",
                                                "MH"
                                            ).map(({ name }) => (
                                                <SelectItem
                                                    key={name}
                                                    value={name}
                                                >
                                                    {name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.location && (
                            <p className="text-red-500">
                                {errors.location.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full">
                        <label className="text-sm font-medium text-gray-400">Company</label>
                        <Controller
                            name="company_id"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Company">
                                            {field.value
                                                ? companies?.find(
                                                    (com) =>
                                                        com.id ===
                                                        Number(field.value)
                                                )?.company_name
                                                : "Company"}
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {companies?.map(
                                                ({ company_name, id }) => (
                                                    <SelectItem
                                                        key={company_name}
                                                        value={id}
                                                    >
                                                        {company_name}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.company_id && (
                            <p className="text-red-500">
                                {errors.company_id.message}
                            </p>
                        )}
                    </div>
                    <AddCompanyDrawer fetchCompanies={fnCompanies} />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-400">Job Requirements (Rich Text)</label>
                    <Controller
                        name="requirements"
                        control={control}
                        render={({ field }) => (
                            <MDEditor
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.requirements && (
                        <p className="text-red-500">
                            {errors.requirements.message}
                        </p>
                    )}
                </div>
                {errors.errorCreateJob && (
                    <p className="text-red-500">
                        {errors?.errorCreateJob?.message}
                    </p>
                )}
                {errorCreateJob?.message && (
                    <p className="text-red-500">{errorCreateJob?.message}</p>
                )}
                {loadingCreateJob && (
                    <BarLoader width={"100%"} color="purple" />
                )}
                <Button
                    type="submit"
                    size="lg"
                    className="w-full text-white py-4 purple-gradient rounded-xl font-bold text-lg hover:shadow-[0_0_20px_-5px_#8b5cf6] transition-all"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default PostJob;
