import React from "react";
import { BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <div class="relative bg-[#070916]">
            <div class="relative z-30 px-4 sm:px-6 lg:px-8">
                <div class="custom-2 relative lg:mx-auto lg:max-w-7xl dark">
                    <div class="py-12 mx-auto max-w-7xl sm:py-16">
                        <div class="xl:grid xl:grid-cols-3 xl:gap-8 ">
                            <div class="xl:col-span-1">
                                <a href="/">
                                    <div class="inline-flex items-center text-lg md:text-2xl cursor-pointer font-bold text-purple-500">
                                        SkillMatch
                                    </div>
                                </a>
                                <p class="mt-5 flex max-w-sm items-center text-base leading-6 text-gray-500 dark:text-gray-200">
                                    Fell free to get in touch with us via phone or send a message
                                </p>
                    

                                {/* Socials  */}
                                <div class="flex mt-6 space-x-3">
                                    <a
                                        aria-label="Email Skill Match"
                                        href="mailto:abhishekswami1435@gmail.com"
                                        class="inline-flex items-center justify-center text-gray-200 border rounded-full main-transition h-9 w-9 border-gray-100/60 bg-gray-50 hover:bg-gray-100/60 dark:border-gray-750/60 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="!h-4 !w-4 flex-shrink-0 text-gray-200"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                    </a>
                                    <a
                                        aria-label="Skill Match LinkedIn Link"
                                        href="https://www.linkedin.com/in/swamiabhishek45/"
                                        target="_blank"
                                    >
                                        <button
                                            aria-label="Skill Match LinkedIn Link"
                                            class="inline-flex items-center justify-center text-gray-200 border rounded-full main-transition h-9 w-9 border-gray-100/60 bg-gray-50 hover:bg-gray-100/60 dark:border-gray-750/60 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        >
                                            <svg
                                                height="16"
                                                width="16"
                                                viewBox="0 0 72 72"
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="!h-4 !w-4 flex-shrink-0 text-gray-200"
                                            >
                                                <path
                                                    d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <a
                                        aria-label="Skill Match Twitter Link"
                                        href="https://x.com/swamiabhishek45"
                                        target="_blank"
                                    >
                                        <button class="inline-flex items-center justify-center text-gray-200 border rounded-full main-transition h-9 w-9 border-gray-100/60 bg-gray-50 hover:bg-gray-100/60 dark:border-gray-750/60 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-3 h-3 text-gray-200"
                                                    viewBox="0 0 1200 1227"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </a>
                                    <a
                                        aria-label="Skill Match Community Link"
                                        href="https://discord.com/"
                                        target="_blank"
                                    >
                                        <button
                                            aria-label="Skill Match Community Link"
                                            class="inline-flex items-center justify-center text-gray-200 border rounded-full main-transition h-9 w-9 border-gray-100/60 bg-gray-50 hover:bg-gray-100/60 dark:border-gray-750/60 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        >
                                            <svg
                                                class="!h-4 !w-4 flex-shrink-0 text-gray-200"
                                                viewBox="0 -28.5 256 256"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                preserveAspectRatio="xMidYMid"
                                            >
                                                <g>
                                                    <path
                                                        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                                                        fill="currentColor"
                                                        fill-rule="nonzero"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-8 mt-12 xl:col-span-2 xl:mt-0">
                                <div class="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <p class="text-sm font-medium leading-5 tracking-wider text-gray-300 uppercase dark:text-gray-200/80">
                                            Products
                                        </p>
                                        <ul class="mt-4">
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Feedback &amp; Roadmap
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Changelog
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Surveys
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Knowledge Base
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Integrations
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mt-12 md:mt-0">
                                        <p class="text-sm font-medium leading-5 tracking-wider text-gray-300 uppercase dark:text-gray-200/80">
                                            Info
                                        </p>
                                        <ul class="mt-4">
                                            <li>
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Support
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Developer
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Service
                                                </a>
                                            </li>

                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Get Started
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="md:grid md:grid-cols-2 md:gap-8">
                                    <div class="md:mt-0">
                                        <p class="text-sm font-medium leading-5 tracking-wider text-gray-300 uppercase dark:text-gray-200/80">
                                            Resources
                                        </p>
                                        <ul class="mt-4">
                                            <li>
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Help Center{" "}
                                                </a>
                                            </li>

                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Use Cases
                                                </a>
                                            </li>

                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Terms of Service
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mt-12 md:mt-0">
                                        <p class="text-sm font-medium leading-5 tracking-wider text-gray-300 uppercase dark:text-gray-200/80">
                                            Company
                                        </p>
                                        <ul class="mt-4">
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    About Us
                                                </a>
                                            </li>

                                            <li class="mt-4">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Community
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Careers
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="#"
                                                >
                                                    Blog
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
