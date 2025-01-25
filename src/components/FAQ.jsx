import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const data = [
        {
            id: 1,
            question: "How do I find jobs on Talentify?",
            answer: "Create an Account: Sign up on Talentify and complete your profile with details about your skills, experience, and preferences. Search for Jobs: Use the search bar to filter jobs by keywords, location, or category.",
        },
        {
            id: 2,
            question: "How do I create an recruiter account with Talentify?",
            answer: "Creating an account with Talentify is simple. You can start by posting your first job and authenticate your email using OTP.",
        },
        {
            id: 3,
            question: "How do I start hiring from Workindia?",
            answer: "Hiring from Workindia is easy and quick. Just follow these steps : - Post a Job  akes less than 5 minutes and Register via OTP - Choose your hiring plan and pay - Get verified our team will get in touch Candidates will start contacting you immediately after successful verification.",
        },
        {
            id: 4,
            question:
                "How does Talentify ensure that only Candidates matching the job criteria contact me?",
            answer: "Our matching algorithm filters through our candidate database to display the job post only to the Candidates matching your job requirement, making the whole process quick, easy, and convenient.",
        },
        {
            id: 5,
            question: "In which cities can I hire via Talentify?",
            answer: "You can post jobs and hire quickly via Talentify in 750+ cities across India including Mumbai, Delhi & NCR, Bengaluru, Pune.",
        },
    ];
    return (
        <div className="mx-auto max-w-7xl">
            <h1 className="text-xl md:text-3xl font-bold text-center poppins my-10">
                Frequently Asked{" "}
                <span className="text-purple-500">Questions</span>
            </h1>
            <Accordion type="single" collapsible className=" max-w-6xl m-auto">
                {data.map((faq) => (
                    <AccordionItem value={`index-${faq.id}`} key={faq.id}>
                        <div className="bg-[#0e1728] my-5  px-5 rounded-md">
                            <AccordionTrigger className="text-start">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-start">
                                {faq.answer}
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;
