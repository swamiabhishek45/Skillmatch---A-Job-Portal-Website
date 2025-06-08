import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    title: z.string().min(1, { message: "Title is required." }),
    description: z.string().min(1, { message: "D  escription is required." }),
    location: z.string().min(1, { message: "Title is required." }),
    company_id: z.string().min(1, { message: "Title is required." }),
    requirements: z.string().min(1, { message: "Title is required." }),
});

const PostJob = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            location: "",
            company_id: "",
            requirements: "",
        },
        resolver: zodResolver(schema),
    });

    return (
        <div>
            <h1>Post Internship/Job</h1>
        </div>
    );
};

export default PostJob;
