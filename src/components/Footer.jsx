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
                                        Talentify
                                    </div>
                                </a>
                                <p class="mt-5 flex max-w-sm items-center text-base leading-6 text-gray-500 dark:text-gray-200">
                                    The all-in-one tool for customer feedback,
                                    changelogs, surveys, and more. Built-in the
                                    🇪🇺.
                                </p>
                                <iframe
                                    class="-ml-1.5 mt-3 opacity-[63%]"
                                    src="https://status.featurebase.app/badge?theme=dark"
                                    title="Featurebase Status Badge"
                                    width="250"
                                    height="30"
                                    frameborder="0"
                                    scrolling="no"
                                ></iframe>
                                <div class="flex mt-6 space-x-3">
                                    <a
                                        aria-label="Email Featurebase"
                                        href="mailto:support@featurebase.app"
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
                                        aria-label="Featurebase LinkedIn Link"
                                        href="https://www.linkedin.com/company/featurebaseapp/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            aria-label="Featurebase LinkedIn Link"
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
                                        aria-label="Featurebase Twitter Link"
                                        href="https://twitter.com/FeaturebaseHQ"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            aria-label="Featurebase Twitter Link"
                                            class="inline-flex items-center justify-center text-gray-200 border rounded-full main-transition h-9 w-9 border-gray-100/60 bg-gray-50 hover:bg-gray-100/60 dark:border-gray-750/60 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        >
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
                                        aria-label="Featurebase Community Link"
                                        href="https://discord.com/invite/9wFwqHW4HZ"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            aria-label="Featurebase Community Link"
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
                                                    href="/features/feedback-collection"
                                                >
                                                    Feedback &amp; Roadmap
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/features/announce-updates"
                                                >
                                                    Changelog
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/features/surveys"
                                                >
                                                    Surveys
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/features/knowledge-base"
                                                >
                                                    Knowledge Base
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/integrations"
                                                >
                                                    Integrations
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mt-12 md:mt-0">
                                        <p class="text-sm font-medium leading-5 tracking-wider text-gray-300 uppercase dark:text-gray-200/80">
                                            Compare
                                        </p>
                                        <ul class="mt-4">
                                            <li>
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/alternative/canny"
                                                >
                                                    Canny
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/alternative/beamer"
                                                >
                                                    Beamer
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/alternative/uservoice"
                                                >
                                                    UserVoice
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/alternative/productboard"
                                                >
                                                    Productboard
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/alternative/upvoty"
                                                >
                                                    Upvoty
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/alternative/nolt"
                                                >
                                                    Nolt
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/alternative/all-alternatives"
                                                >
                                                    Others
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
                                                    href="https://help.featurebase.app/"
                                                >
                                                    Help Center{" "}
                                                    <div class="items-center justify-center text-indigo-400/60 inline-block h-3 w-3 cursor-help">
                                                        <svg
                                                            class="inline-block w-3 h-3 ml-1 text-indigo-400 dark:text-indigo-400/60"
                                                            viewBox="0 0 22 22"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clip-path="url(#clip0_746_218)">
                                                                <path
                                                                    d="M19.1064 5.83416C20.158 6.56113 20.9798 7.5734 21.4753 8.75178C21.9708 9.93015 22.1194 11.2256 21.9034 12.4855C21.6875 13.7455 21.1159 14.9175 20.2564 15.8636C19.3966 16.8096 18.2845 17.4905 17.051 17.8257C16.5252 17.966 15.9676 17.9289 15.4649 17.7204C14.9622 17.5117 14.5422 17.1434 14.27 16.6719C13.9978 16.2007 13.8887 15.6527 13.9593 15.113C14.03 14.5733 14.2765 14.072 14.6609 13.6866L16.5655 11.7805C17.3635 10.9869 17.983 10.0324 18.3831 8.98044C18.783 7.92853 18.954 6.80343 18.8848 5.68018C18.954 5.73046 19.031 5.78073 19.1064 5.83416Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M5.83416 2.89086C6.56162 1.83999 7.57408 1.01873 8.75243 0.523713C9.93076 0.0286976 11.226 -0.11949 12.4857 0.0965962C13.7454 0.312681 14.9172 0.884048 15.8633 1.74347C16.8093 2.6029 17.49 3.71462 17.8257 4.94786C17.9671 5.47402 17.9308 6.0321 17.7226 6.53556C17.5144 7.03903 17.1459 7.45973 16.6743 7.73243C16.2027 8.00514 15.6542 8.11461 15.114 8.04386C14.5738 7.97311 14.0721 7.7261 13.6866 7.34115L11.782 5.43658C10.9869 4.64077 10.0321 4.02268 8.98054 3.62315C7.92898 3.2236 6.80464 3.05167 5.68173 3.11872C5.73045 3.04329 5.7823 2.96629 5.83416 2.89086Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M2.89086 16.1631C1.83999 15.4357 1.01873 14.4232 0.523713 13.2449C0.0286976 12.0665 -0.11949 10.7713 0.0965962 9.51164C0.312681 8.25193 0.884028 7.08015 1.74345 6.13414C2.60287 5.18812 3.71461 4.50723 4.94785 4.17159C5.47456 4.02776 6.03405 4.06225 6.53911 4.2697C7.04416 4.47713 7.46641 4.84585 7.73998 5.31836C8.01353 5.79087 8.12306 6.34062 8.0515 6.8819C7.97992 7.42318 7.73126 7.92556 7.34428 8.31074L5.43972 10.2153C5.17872 10.4773 4.93564 10.7566 4.71213 11.0513C3.57219 12.5614 3.00831 14.4285 3.12186 16.3171C3.04486 16.2668 2.96786 16.2165 2.89086 16.1631Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M16.1648 19.1064C15.4374 20.1578 14.4249 20.9795 13.2463 21.4748C12.0678 21.9701 10.7722 22.1185 9.51222 21.9024C8.2522 21.6862 7.08014 21.1147 6.134 20.2549C5.18786 19.3952 4.50702 18.2831 4.1716 17.0494C4.02861 16.5228 4.06372 15.9635 4.27149 15.4588C4.47927 14.9541 4.84802 14.5323 5.32039 14.2589C5.79276 13.9855 6.34227 13.876 6.88338 13.9472C7.42449 14.0185 7.92685 14.2666 8.31233 14.653L10.2169 16.5575C10.4778 16.8198 10.7572 17.063 11.0529 17.2851C12.562 18.4258 14.429 18.9898 16.3172 18.8754C16.2685 18.9524 16.2167 19.0309 16.1648 19.1064Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_746_218">
                                                                    <rect
                                                                        width="22"
                                                                        height="22"
                                                                        fill="white"
                                                                    ></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="https://help.featurebase.app/collections/8270391-developers"
                                                >
                                                    Developer Docs{" "}
                                                    <div class="items-center justify-center text-indigo-400/60 inline-block h-3 w-3 cursor-help">
                                                        <svg
                                                            class="inline-block w-3 h-3 ml-1 text-indigo-400 dark:text-indigo-400/60"
                                                            viewBox="0 0 22 22"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clip-path="url(#clip0_746_218)">
                                                                <path
                                                                    d="M19.1064 5.83416C20.158 6.56113 20.9798 7.5734 21.4753 8.75178C21.9708 9.93015 22.1194 11.2256 21.9034 12.4855C21.6875 13.7455 21.1159 14.9175 20.2564 15.8636C19.3966 16.8096 18.2845 17.4905 17.051 17.8257C16.5252 17.966 15.9676 17.9289 15.4649 17.7204C14.9622 17.5117 14.5422 17.1434 14.27 16.6719C13.9978 16.2007 13.8887 15.6527 13.9593 15.113C14.03 14.5733 14.2765 14.072 14.6609 13.6866L16.5655 11.7805C17.3635 10.9869 17.983 10.0324 18.3831 8.98044C18.783 7.92853 18.954 6.80343 18.8848 5.68018C18.954 5.73046 19.031 5.78073 19.1064 5.83416Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M5.83416 2.89086C6.56162 1.83999 7.57408 1.01873 8.75243 0.523713C9.93076 0.0286976 11.226 -0.11949 12.4857 0.0965962C13.7454 0.312681 14.9172 0.884048 15.8633 1.74347C16.8093 2.6029 17.49 3.71462 17.8257 4.94786C17.9671 5.47402 17.9308 6.0321 17.7226 6.53556C17.5144 7.03903 17.1459 7.45973 16.6743 7.73243C16.2027 8.00514 15.6542 8.11461 15.114 8.04386C14.5738 7.97311 14.0721 7.7261 13.6866 7.34115L11.782 5.43658C10.9869 4.64077 10.0321 4.02268 8.98054 3.62315C7.92898 3.2236 6.80464 3.05167 5.68173 3.11872C5.73045 3.04329 5.7823 2.96629 5.83416 2.89086Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M2.89086 16.1631C1.83999 15.4357 1.01873 14.4232 0.523713 13.2449C0.0286976 12.0665 -0.11949 10.7713 0.0965962 9.51164C0.312681 8.25193 0.884028 7.08015 1.74345 6.13414C2.60287 5.18812 3.71461 4.50723 4.94785 4.17159C5.47456 4.02776 6.03405 4.06225 6.53911 4.2697C7.04416 4.47713 7.46641 4.84585 7.73998 5.31836C8.01353 5.79087 8.12306 6.34062 8.0515 6.8819C7.97992 7.42318 7.73126 7.92556 7.34428 8.31074L5.43972 10.2153C5.17872 10.4773 4.93564 10.7566 4.71213 11.0513C3.57219 12.5614 3.00831 14.4285 3.12186 16.3171C3.04486 16.2668 2.96786 16.2165 2.89086 16.1631Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M16.1648 19.1064C15.4374 20.1578 14.4249 20.9795 13.2463 21.4748C12.0678 21.9701 10.7722 22.1185 9.51222 21.9024C8.2522 21.6862 7.08014 21.1147 6.134 20.2549C5.18786 19.3952 4.50702 18.2831 4.1716 17.0494C4.02861 16.5228 4.06372 15.9635 4.27149 15.4588C4.47927 14.9541 4.84802 14.5323 5.32039 14.2589C5.79276 13.9855 6.34227 13.876 6.88338 13.9472C7.42449 14.0185 7.92685 14.2666 8.31233 14.653L10.2169 16.5575C10.4778 16.8198 10.7572 17.063 11.0529 17.2851C12.562 18.4258 14.429 18.9898 16.3172 18.8754C16.2685 18.9524 16.2167 19.0309 16.1648 19.1064Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_746_218">
                                                                    <rect
                                                                        width="22"
                                                                        height="22"
                                                                        fill="white"
                                                                    ></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="https://docs.featurebase.app/"
                                                >
                                                    API Docs
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/use-cases"
                                                >
                                                    Use Cases
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/customers"
                                                >
                                                    Customers
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="https://help.featurebase.app/articles/8874192-gdpr-compliance"
                                                >
                                                    DPA &amp; GDPR
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/privacy-policy"
                                                >
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/terms-of-service"
                                                >
                                                    Terms of Service
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="https://status.featurebase.app/"
                                                >
                                                    System Status
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
                                                    href="/about"
                                                >
                                                    About Us
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/pricing"
                                                >
                                                    Pricing
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/changelog"
                                                >
                                                    Our Changelog{" "}
                                                    <div class="items-center justify-center text-indigo-400/60 inline-block h-3 w-3 cursor-help">
                                                        <svg
                                                            class="inline-block w-3 h-3 ml-1 text-indigo-400 dark:text-indigo-400/60"
                                                            viewBox="0 0 22 22"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clip-path="url(#clip0_746_218)">
                                                                <path
                                                                    d="M19.1064 5.83416C20.158 6.56113 20.9798 7.5734 21.4753 8.75178C21.9708 9.93015 22.1194 11.2256 21.9034 12.4855C21.6875 13.7455 21.1159 14.9175 20.2564 15.8636C19.3966 16.8096 18.2845 17.4905 17.051 17.8257C16.5252 17.966 15.9676 17.9289 15.4649 17.7204C14.9622 17.5117 14.5422 17.1434 14.27 16.6719C13.9978 16.2007 13.8887 15.6527 13.9593 15.113C14.03 14.5733 14.2765 14.072 14.6609 13.6866L16.5655 11.7805C17.3635 10.9869 17.983 10.0324 18.3831 8.98044C18.783 7.92853 18.954 6.80343 18.8848 5.68018C18.954 5.73046 19.031 5.78073 19.1064 5.83416Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M5.83416 2.89086C6.56162 1.83999 7.57408 1.01873 8.75243 0.523713C9.93076 0.0286976 11.226 -0.11949 12.4857 0.0965962C13.7454 0.312681 14.9172 0.884048 15.8633 1.74347C16.8093 2.6029 17.49 3.71462 17.8257 4.94786C17.9671 5.47402 17.9308 6.0321 17.7226 6.53556C17.5144 7.03903 17.1459 7.45973 16.6743 7.73243C16.2027 8.00514 15.6542 8.11461 15.114 8.04386C14.5738 7.97311 14.0721 7.7261 13.6866 7.34115L11.782 5.43658C10.9869 4.64077 10.0321 4.02268 8.98054 3.62315C7.92898 3.2236 6.80464 3.05167 5.68173 3.11872C5.73045 3.04329 5.7823 2.96629 5.83416 2.89086Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M2.89086 16.1631C1.83999 15.4357 1.01873 14.4232 0.523713 13.2449C0.0286976 12.0665 -0.11949 10.7713 0.0965962 9.51164C0.312681 8.25193 0.884028 7.08015 1.74345 6.13414C2.60287 5.18812 3.71461 4.50723 4.94785 4.17159C5.47456 4.02776 6.03405 4.06225 6.53911 4.2697C7.04416 4.47713 7.46641 4.84585 7.73998 5.31836C8.01353 5.79087 8.12306 6.34062 8.0515 6.8819C7.97992 7.42318 7.73126 7.92556 7.34428 8.31074L5.43972 10.2153C5.17872 10.4773 4.93564 10.7566 4.71213 11.0513C3.57219 12.5614 3.00831 14.4285 3.12186 16.3171C3.04486 16.2668 2.96786 16.2165 2.89086 16.1631Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M16.1648 19.1064C15.4374 20.1578 14.4249 20.9795 13.2463 21.4748C12.0678 21.9701 10.7722 22.1185 9.51222 21.9024C8.2522 21.6862 7.08014 21.1147 6.134 20.2549C5.18786 19.3952 4.50702 18.2831 4.1716 17.0494C4.02861 16.5228 4.06372 15.9635 4.27149 15.4588C4.47927 14.9541 4.84802 14.5323 5.32039 14.2589C5.79276 13.9855 6.34227 13.876 6.88338 13.9472C7.42449 14.0185 7.92685 14.2666 8.31233 14.653L10.2169 16.5575C10.4778 16.8198 10.7572 17.063 11.0529 17.2851C12.562 18.4258 14.429 18.9898 16.3172 18.8754C16.2685 18.9524 16.2167 19.0309 16.1648 19.1064Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_746_218">
                                                                    <rect
                                                                        width="22"
                                                                        height="22"
                                                                        fill="white"
                                                                    ></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/roadmap"
                                                >
                                                    Our Roadmap{" "}
                                                    <div class="items-center justify-center text-indigo-400/60 inline-block h-3 w-3 cursor-help">
                                                        <svg
                                                            class="inline-block w-3 h-3 ml-1 text-indigo-400 dark:text-indigo-400/60"
                                                            viewBox="0 0 22 22"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clip-path="url(#clip0_746_218)">
                                                                <path
                                                                    d="M19.1064 5.83416C20.158 6.56113 20.9798 7.5734 21.4753 8.75178C21.9708 9.93015 22.1194 11.2256 21.9034 12.4855C21.6875 13.7455 21.1159 14.9175 20.2564 15.8636C19.3966 16.8096 18.2845 17.4905 17.051 17.8257C16.5252 17.966 15.9676 17.9289 15.4649 17.7204C14.9622 17.5117 14.5422 17.1434 14.27 16.6719C13.9978 16.2007 13.8887 15.6527 13.9593 15.113C14.03 14.5733 14.2765 14.072 14.6609 13.6866L16.5655 11.7805C17.3635 10.9869 17.983 10.0324 18.3831 8.98044C18.783 7.92853 18.954 6.80343 18.8848 5.68018C18.954 5.73046 19.031 5.78073 19.1064 5.83416Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M5.83416 2.89086C6.56162 1.83999 7.57408 1.01873 8.75243 0.523713C9.93076 0.0286976 11.226 -0.11949 12.4857 0.0965962C13.7454 0.312681 14.9172 0.884048 15.8633 1.74347C16.8093 2.6029 17.49 3.71462 17.8257 4.94786C17.9671 5.47402 17.9308 6.0321 17.7226 6.53556C17.5144 7.03903 17.1459 7.45973 16.6743 7.73243C16.2027 8.00514 15.6542 8.11461 15.114 8.04386C14.5738 7.97311 14.0721 7.7261 13.6866 7.34115L11.782 5.43658C10.9869 4.64077 10.0321 4.02268 8.98054 3.62315C7.92898 3.2236 6.80464 3.05167 5.68173 3.11872C5.73045 3.04329 5.7823 2.96629 5.83416 2.89086Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M2.89086 16.1631C1.83999 15.4357 1.01873 14.4232 0.523713 13.2449C0.0286976 12.0665 -0.11949 10.7713 0.0965962 9.51164C0.312681 8.25193 0.884028 7.08015 1.74345 6.13414C2.60287 5.18812 3.71461 4.50723 4.94785 4.17159C5.47456 4.02776 6.03405 4.06225 6.53911 4.2697C7.04416 4.47713 7.46641 4.84585 7.73998 5.31836C8.01353 5.79087 8.12306 6.34062 8.0515 6.8819C7.97992 7.42318 7.73126 7.92556 7.34428 8.31074L5.43972 10.2153C5.17872 10.4773 4.93564 10.7566 4.71213 11.0513C3.57219 12.5614 3.00831 14.4285 3.12186 16.3171C3.04486 16.2668 2.96786 16.2165 2.89086 16.1631Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M16.1648 19.1064C15.4374 20.1578 14.4249 20.9795 13.2463 21.4748C12.0678 21.9701 10.7722 22.1185 9.51222 21.9024C8.2522 21.6862 7.08014 21.1147 6.134 20.2549C5.18786 19.3952 4.50702 18.2831 4.1716 17.0494C4.02861 16.5228 4.06372 15.9635 4.27149 15.4588C4.47927 14.9541 4.84802 14.5323 5.32039 14.2589C5.79276 13.9855 6.34227 13.876 6.88338 13.9472C7.42449 14.0185 7.92685 14.2666 8.31233 14.653L10.2169 16.5575C10.4778 16.8198 10.7572 17.063 11.0529 17.2851C12.562 18.4258 14.429 18.9898 16.3172 18.8754C16.2685 18.9524 16.2167 19.0309 16.1648 19.1064Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_746_218">
                                                                    <rect
                                                                        width="22"
                                                                        height="22"
                                                                        fill="white"
                                                                    ></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="https://discord.com/invite/9wFwqHW4HZ"
                                                >
                                                    Community
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="https://featurebase.notion.site/Featurebase-positions-b0e8e970007d4e5aafa7e48e08e7e2e6"
                                                >
                                                    Careers
                                                </a>
                                            </li>
                                            <li class="mt-4">
                                                <a
                                                    class="text-base leading-6 text-gray-400 duration-300 transform dark:text-gray-200 dark:hover:text-indigo-200"
                                                    href="/blog"
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
