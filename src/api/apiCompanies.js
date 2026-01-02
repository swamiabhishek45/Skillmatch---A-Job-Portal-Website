import supabaseClient, { supabaseUrl } from "@/utils/supabase";

export async function getCompanies(token) {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase.from("companies").select("*");

    if (error) {
        console.error("Error fetching companies: ", error);
        return null;
    }

    return data;
}

export async function addNewCompany(token, _, companyData) {
    console.log(companyData);
    
    const supabase = await supabaseClient(token);

    const random = Math.floor(Math.random() * 90000);
    const fileName = `logo-${random}-${companyData.company_name}`;

    const { error: storageError } = await supabase.storage
        .from("company-logo")
        .upload(fileName, companyData.company_logo_url);

    if (storageError) {
        console.error("Error Uploading Company Logo: ", storageError);
        return null;
    }

    const company_logo_url = `${supabaseUrl}/storage/v1/object/public/company_logo/${fileName}`;

    const { data, error } = await supabase
        .from("companies")
        .insert({
            company_name: companyData.company_name,
            company_logo_url: company_logo_url,
        })
        .select();

    if (error) {
        console.error("Error uploading company logo: ", error);
        return null;
    }

    return data;
}
