import supabaseClient from "@/utils/supabase";

export async function getJobs(token, { location, company_id, searchQuery, page = 1, limit = 9 }) {
    const supabase = await supabaseClient(token);
    // console.log(supabase);

    let query = supabase
        .from("jobs")
        .select(
            "*, company:companies(company_name, company_logo_url), saved: saved_jobs(id)",
            { count: "exact" }
        );

    if (location) {
        query = query.eq("location", location);
    }

    if (company_id) {
        query = query.eq("company_id", company_id);
    }

    if (searchQuery) {
        query = query.ilike("title", `%${searchQuery}%`);
    }

    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
        console.error("Error fetching jobs: ", error);
        return null;
    }

    return { data, count };
}

export async function saveJobs(token, { alreadySaved }, saveData) {
    const supabase = await supabaseClient(token);

    if (alreadySaved) {
        const { data, error: deleteError } = await supabase
            .from("saved_jobs")
            .delete()
            .eq("job_id", saveData.job_id);

        if (deleteError) {
            console.error("Error deleting saved jobs: ", deleteError);
            return null;
        }

        return data;
    } else {
        const { data, error: insertError } = await supabase
            .from("saved_jobs")
            .insert([saveData])
            .select();

        if (insertError) {
            console.error("Error inserting saved jobs: ", insertError);
            return null;
        }
        return data;
    }
}

export async function getSingleJob(token, { job_id }) {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase
        .from("jobs")
        .select(
            "*, company:companies(company_name, company_logo_url), applications: applications(*)"
        )
        .eq("id", job_id)
        .single();

    if (error) {
        console.error("Error fetching a job: ", error);
        return null;
    }
    return data;
}

export async function updateHiringStatus(token, { job_id }, isOpen) {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase
        .from("jobs")
        .update({ isOpen })
        .eq("id", job_id)
        .select();

    if (error) {
        console.error("Error updating job", error);
        return null;
    }
    return data;
}

export async function addNewJob(token, _, jobData) {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase
        .from("jobs")
        .insert([jobData])
        .select();

    if (error) {
        console.error("Error Creating a New Job", error);
        return null;
    }
    return data;
}

export async function getSavedJobs(token) {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase
        .from("saved_jobs")
        .select(
            "*, job: jobs(*, company:companies(company_name, company_logo_url))"
        );

    if (error) {
        console.error("Error fetching saved Jobs", error);
        return null;
    }
    return data;
}
export async function getMyJobs(token, { recruiter_id }) {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase
        .from("jobs")
        .select("*, company:companies(company_name, company_logo_url)")
        .eq("recruiter_id", recruiter_id);

    if (error) {
        console.error("Error fetching my Jobs", error);
        return null;
    }
    return data;
}
export async function deleteJob(token, { job_id }) {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase
        .from("jobs")
        .delete()
        .eq("id", job_id)
        .select();

    if (error) {
        console.error("Error deleting Job", error);
        return null;
    }
    return data;
}
