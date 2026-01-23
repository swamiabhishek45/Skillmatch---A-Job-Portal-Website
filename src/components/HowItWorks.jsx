import React from 'react';
import { FaUserPlus, FaSearch, FaHandshake, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      title: "Sign Up",
      description: "Sign up and create your professional profile to get started."
    },
    {
      id: 2,
      icon: <FaSearch className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      title: "Search your dream Job",
      description: "Get matched with jobs that fit your skills and preferences."
    },
    {
      id: 3,
      icon: <FaHandshake className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      title: "Apply for the job",
      description: "Connect directly with employers to discuss opportunities."
    },
    {
      id: 4,
      icon: <FaBriefcase className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      title: "Get your dream Job",
      description: "Land the job you've always wanted and start your new journey."
    }
  ];

  return (
    <div className="w-full py-16  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            {/* <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How it works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Create your profile and upload your resume in minutes.
Browse curated job openings that match your skills and interests.
Apply with a single click and track your application status.
Get noticed by top employers and land your next opportunity faster.
            </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-4">
          {/* Animated Dashed Line (Visible on Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-full pointer-events-none z-0">
                 <svg className="w-full h-40" preserveAspectRatio="none">
                    <path 
                        d="M 100,50 C 250,100 450,0 600,50 S 900,100 1100,50" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2" 
                        strokeDasharray="10 10"
                        className="opacity-30"
                    >
                         <animate 
                            attributeName="stroke-dashoffset" 
                            from="100" 
                            to="0" 
                            dur="2s" 
                            repeatCount="indefinite" 
                        />
                    </path>
                 </svg>
            </div>

          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center max-w-[250px] group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1e1b4b] rounded-lg shadow-lg flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300 border border-slate-700/50">
                    {/* Placeholder for "screen" effect in icon */}
                    <div className="absolute inset-2 border border-slate-600/30 rounded opacity-50"></div>
                     <div className="relative z-10 p-3 bg-blue-600/20 rounded-full">
                        {step.icon}
                     </div>
                     {/* Decorative dots */ }
                     <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                     <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                </div>
                 {/* Circle indicator */}
                  {index < steps.length - 1 && (
                      <div className="md:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-blue-500 text-2xl">
                          ↓
                      </div>
                  )}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              {/* <p className="text-gray-400 text-sm">{step.description}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
