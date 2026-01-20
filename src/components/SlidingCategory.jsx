// import { BACKEND_STACKS, FRONTEND_STACKS } from "@/constants/stacks";
import React from "react";
import Marquee from "react-fast-marquee";

const SlidingCategory = () => {
    const stack1 = [
        "Software Development",
        "Design ",
        "Frontend Development",
        "Backend Development",
        "Mobile Development",
        "Web Development",
        "Game Development",
        "Machine Learning",
        "Artificial Intelligence",
    ];
    
    const stack2 = [
        "Data Science",
        "Cloud Computing",
        "Cyber Security",
        "DevOps",
        "Blockchain",
        "Internet of Things",
        "Augmented Reality",
        "Virtual Reality",
        "Quantum Computing",
    ];
    return (
        <section aria-label="skills" className="my-4 space-y-8 mt-20">
            

            <div className="space-y-6 w-full">
                <Marquee autoFill pauseOnHover speed={20}>
                    <CategoryList stacks={stack1} />
                </Marquee>

                <Marquee autoFill pauseOnHover direction="right" speed={20}>
                    <CategoryList stacks={stack2} />
                </Marquee>
            </div>
        </section>
    );
};

export default SlidingCategory;

const CategoryList = ({ stacks }) => {
    return (
        <ul className="flex items-center py-4" role="list">
            {stacks.map((stack, index) => {
                return (
                    <li
                        role="listitem"
                        key={index}
                        className="mr-6 flex w-max items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-6 py-3 text-sm font-medium shadow-lg backdrop-blur-md hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default text-gray-300 hover:text-white group"
                    >
                        <span className="whitespace-nowrap">{stack}</span>
                    </li>
                );
            })}
        </ul>
    );
};
