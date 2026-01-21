import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#070916] relative overflow-hidden">
            {/* Subtle background gradient for theme integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
                    
                    {/* Brand Section */}
                    <div className="md:w-1/4">
                        <a href="/" className="inline-flex items-center gap-2">
                            {/* <img src="/logo.png" alt="Logo" className="h-8 w-auto" /> */}
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                                SkillMatch
                            </span>
                        </a>
                        <p className="mt-4 text-gray-400 text-sm">
                            Connecting talent with opportunity. Find your dream job or the perfect candidate with our AI-powered platform.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-wrap gap-8 md:gap-16 w-full md:w-auto">
                        
                        {/* About Us */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">About us</h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Team</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact us</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Join our team</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Become an affiliate</a></li>
                            </ul>
                        </div>

                        {/* Jobs */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Jobs</h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Worldwide</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Hybrid</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">In office</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Legal</h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms and conditions</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy policy</a></li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Social</h3>
                            <div className="flex gap-4">
                                <a href="#" aria-label="YouTube" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors">
                                    <FaYoutube size={18} />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors">
                                    <FaLinkedinIn size={18} />
                                </a>
                                <a href="#" aria-label="Instagram" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors">
                                    <FaInstagram size={18} />
                                </a>
                                <a href="#" aria-label="Facebook" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors">
                                    <FaFacebookF size={18} />
                                </a>
                            </div>
                            <p className="mt-8 text-xs text-gray-500">
                                © 2025 SkillMatch Inc
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
