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
            question: "How do I find jobs on Skill Match?",
            answer: "Create an Account: Sign up on Skill Match and complete your profile with details about your skills, experience, and preferences. Search for Jobs: Use the search bar to filter jobs by keywords, location, or category.",
        },
        {
            id: 2,
            question: "How do I create an recruiter account with Skill Match?",
            answer: "Creating an account with Skill Match is simple. You can start by posting your first job and authenticate your email using OTP.",
        },
        {
            id: 3,
            question: "How do I start hiring from Skill Match?",
            answer: "Hiring from Workindia is easy and quick. Just follow these steps : - Post a Job  akes less than 5 minutes and Register via OTP - Choose your hiring plan and pay - Get verified our team will get in touch Candidates will start contacting you immediately after successful verification.",
        },
        {
            id: 4,
            question:
                "How does Skill Match ensure that only Candidates matching the job criteria contact me?",
            answer: "Our matching algorithm filters through our candidate database to display the job post only to the Candidates matching your job requirement, making the whole process quick, easy, and convenient.",
        },
        {
            id: 5,
            question: "In which cities can I hire via Skill Match?",
            answer: "You can post jobs and hire quickly via Skill Match in 750+ cities across India including Mumbai, Delhi & NCR, Bengaluru, Pune.",
        },
    ];
    return (
        <div className="mx-auto max-w-7xl pt-20">
            <h1 className="text-3xl md:text-5xl font-bold text-center poppins mb-12 text-white">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Questions</span>
            </h1>
            <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto px-5">
                {data.map((faq) => (
                    <AccordionItem 
                        value={`index-${faq.id}`} 
                        key={faq.id}
                        className="border-b border-white/10 last:border-0 mb-4"
                    >
                         <AccordionTrigger className="text-left text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors data-[state=open]:text-purple-400 py-6 no-underline hover:no-underline">
                                {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-slate-400 leading-relaxed pb-6">
                                {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;
