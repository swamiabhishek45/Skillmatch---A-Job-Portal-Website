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
            question: "What is the capital of France?",
            answer: "The capital of France is Paris.",
        },
        {
            id: 2,
            question: "What is the largest planet in our solar system?",
            answer: "The largest planet in our solar system is Jupiter.",
        },
        {
            id: 3,
            question: "Who wrote the play 'Romeo and Juliet'?",
            answer: "The play 'Romeo and Juliet' was written by William Shakespeare.",
        },
        {
            id: 4,
            question: "What is the chemical symbol for water?",
            answer: "The chemical symbol for water is H2O.",
        },
        {
            id: 5,
            question: "What is the speed of light?",
            answer: "The speed of light is approximately 299,792 kilometers per second.",
        },
    ];
    return (
        <div className="m-5 md:m-20">
            <h1 className="text-xl md:text-3xl font-bold text-center poppins my-10">
                Frequently Asked <span className="text-purple-500">Questions</span>
            </h1>
            <Accordion type="single" collapsible className=" max-w-6xl m-auto">
                {data.map((faq) => (
                    <AccordionItem value={`index-${faq.id}`} key={faq.id}>
                        <div className="bg-[#0e1728] my-5 px-5 rounded-md">
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;
