import { getCompanies } from "@/api/apiCompanies";
import { addNewJob } from "@/api/apiJobs";
import AddCompanyDrawer from "@/components/AddCompanyDrawer";
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
import useFetch from "@/hooks/useFetch";
import { generateJobDescription } from "@/services/geminiServices";
import { useUser } from "@clerk/clerk-react";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { State, City } from "country-state-city";
import { Cpu } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { z } from "zod";

const schema = z.object({
    title: z.string().min(1, "Title is required"),
    salary: z.string().optional(),
    job_type: z.string().min(1, "Job type is required"),
    experience: z.string().optional(),
    openings: z.string().min(1, "Openings required"),
    skills: z.string().min(1, "Skills are required"),
    location: z.string().min(1, "Select a location"),
    company_id: z.string().min(1, "Select or add a company"),
    about_company: z.string().optional(),
    description: z.string().min(1, "Job description is required"),
});

const PostJob = () => {
    const { user, isLoaded } = useUser();
    const navigate = useNavigate();
    const [isGenerating, setIsGenerating] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: "",
            salary: "",
            job_type: "",
            experience: "",
            openings: "",
            skills: "",
            location: "",
            company_id: "",
            about_company: "",
            description: "",
        },
        resolver: zodResolver(schema),
    });

 

    const handleGenerateJD = async () => {
        const title = watch("title");
        const experience = watch("experience");
        const skills = watch("skills");

        if (!title || !experience || !skills) {
            alert("Please fill Job Title, Experience and Skills");
            return;
        }

        setIsGenerating(true);

        try {
            const generatedText = await generateJobDescription(
                title,
                experience,
                skills
            );
            setValue("description", generatedText);
        } catch (error) {
            console.error(error);
            alert("AI generation failed. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };


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
        if (dataCreateJob) navigate("/jobs");
    }, [dataCreateJob]);

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
            <h1 className="mt-5 font-extrabold text-4xl text-center pb-8">
                Post a Job
            </h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 p-4 pb-0"
            >
                {/* Fields  */}
                <div className="grid grid-cols-2 gap-4">
                    {/* job title  */}
                    <div>
                        <label className="text-sm font-medium text-gray-400">Job Title*</label>
                        <Input label="Hob title" placeholder="e.g. Frontend Developer" {...register("title")} />
                        {errors.title && (
                            <p className="text-red-500">
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    {/* job category  */}
                    {/* <div>
                        <Input
                        placeholder="Job Category"
                        {...register("category")}
                        />
                        {errors.category && (
                            <p className="text-red-500">
                            {errors.category.message}
                            </p>
                            )}
                    </div> */}
                    {/* salary  */}
                    <div>
                        <label className="text-sm font-medium text-gray-400">Salary</label>
                        <Input placeholder="e.g. ₹ 80k - 100k" {...register("salary")} />
                        {/* {errors.salary && (
                        <p className="text-red-500">{errors.salary.message}</p>
                         )} */}
                    </div>
                    {/* Job Type  */}
                    <div>
                        <label className="text-sm font-medium text-gray-400">Job Type*</label>
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
                    {/* Experience  */}
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
                    {/* Openings  */}
                    <div>
                        <label className="text-sm font-medium text-gray-400">Openings*</label>
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
                    {/* Skills  */}
                    <div>
                        <label className="text-sm font-medium text-gray-400">Required Skills*</label>
                        <Input
                            placeholder="e.g. React, Node, MySQL, Java"
                            {...register("skills")}
                        />
                        {errors.skills && (
                        <p className="text-red-500">
                        {errors.skills.message}
                        </p>
                        )}
                    </div>
                </div>

                {/* Location & Company  */}
                <div className="flex gap-4 items-center">
                    {/* Location  */}
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
                    {/* Company  */}
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
                                                        value={String(id)}
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

                {/* About Company  */}
                <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-400">About Company</label>
                    <textarea
                        {...register("about_company")}
                        rows={4}
                        placeholder="Describe the role, impact, and daily life at your company..."
                        className="w-full px-4 py-3 bg-[#0a0a0b] border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 leading-relaxed"
                    ></textarea>
                </div> 

                {/* Job Description  */}
                <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <label className="text-sm font-medium text-gray-400">Job Description</label>
                        <button
                            type="button"
                            onClick={handleGenerateJD}
                            disabled={isGenerating}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold hover:bg-purple-500/20 transition-all disabled:opacity-50"
                        >
                            {isGenerating ? (
                                <div className="w-3 h-3 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <Cpu />
                            )}
                            {isGenerating ? 'Generating Description...' : '✨ Generate with AI'}
                        </button>
                    </div>
                    <Controller
                        name="description"
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
                {errorCreateJob?.message && (
                    <p className="text-red-500">
                        {errorCreateJob.message}
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
