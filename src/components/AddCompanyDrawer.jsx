import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { addNewCompany, getCompanies } from "@/api/apiCompanies";
import useFetch from "@/hooks/useFetch";
import { BarLoader } from "react-spinners";

const schema = z.object({
    company_name: z.string().min(1, { message: "Company name is required" }),
    company_logo_url: z
        .any()
        .refine(
            (file) =>
                file[0] &&
                (file[0].type === "image/png" ||
                    file[0].type === "image/jpeg" ||
                    file[0].type === "image/jpg" ||
                    file[0].type === "image/gif" ||
                    file[0].type === "image/svg"),
        ),
});
const AddCompanyDrawer = ({ fetchCompanies }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });

    const {
        loading: loadingAddCompany,
        data: dataAddCompany,
        errors: errorAddCompany,
        fn: fnAddCompany,
    } = useFetch(addNewCompany);

    const onSubmit = (data) => {
        fnAddCompany({
            ...data,
            company_logo_url: data.company_logo_url[0],
        });
    };

    useEffect(() => {
        if (dataAddCompany?.length > 0) fetchCompanies();
    }, [loadingAddCompany]);
    return (
        <div>
            <Drawer>
                <DrawerTrigger>
                    <Button type="button" size="sm" variant="secondary" className="mt-6">
                        Add Company
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Add new company</DrawerTitle>
                    </DrawerHeader>

                    <form className="flex gap-2 p-4 pb-0">
                        <Input
                            placeholder="Company Name"
                            {...register("company_name")}
                        />
                        <Input
                            type="file"
                            accept="image/"
                            className="file:text-gray-500"
                            {...register("company_logo_url")}
                        />
                        <Button
                            type="button"
                            onClick={handleSubmit(onSubmit)}
                            variant="destructive"
                            className="w-40"
                        >
                            Submit
                        </Button>
                    </form>
                    {loadingAddCompany && (
                        <BarLoader width={"100%"} color="purple" />
                    )}
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="secondary" type="button">
                                Cancel
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default AddCompanyDrawer;
