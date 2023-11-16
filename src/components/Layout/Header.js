import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="px-12 sm:px-32">
            <nav class="w-full">
                {/* container */}
                <slot>
                    <div class="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
                        <input
                            aria-hidden="true"
                            type="checkbox"
                            name="toggle_nav"
                            id="toggle_nav"
                            class="hidden peer"
                        />
                        <div class="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                            <Link
                                to="/"
                                aria-label="logo"
                                class="flex space-x-2 items-center"
                            >
                                <div aria-hidden="true" class="flex space-x-1">
                                    <svg
                                        fill="#9333E9"
                                        version="1.1"
                                        id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                                        // width="256px"
                                        // height="256px"
                                        width="2rem"
                                        viewBox="0 0 168.27 168.27"
                                        // xml:space="preserve"
                                        stroke="#000000"
                                        stroke-width="0.0016827399999999998"
                                    >
                                        <g id="SVGRepo_iconCarrier">
                                            <g>
                                                <path d="M142.267,16.291C123.67,6.052,99.472,9.164,84.14,23.211C68.795,9.157,44.694,6.04,25.988,16.291 C9.953,25.126,0,42.006,0,60.312C0,65.562,0.855,70.78,2.338,75.24c8.038,36.09,75.627,78.891,78.493,80.699l3.31,2.083 l3.312-2.083c2.861-1.809,70.451-44.615,78.324-80.108c1.65-5.058,2.497-10.27,2.497-15.519 C168.28,42.006,158.33,25.126,142.267,16.291z M153.763,72.527c-5.407,24.323-49.322,57.412-69.623,70.717 c-20.302-13.299-64.244-46.412-69.779-71.316c-1.242-3.791-1.878-7.7-1.878-11.63c0-13.774,7.478-26.442,19.498-33.094 c5.626-3.075,11.962-4.701,18.258-4.701c11.274,0,21.894,4.987,29.13,13.691l4.783,5.767l4.774-5.767 c11.35-13.643,31.651-17.601,47.349-8.99c12.062,6.646,19.54,19.32,19.54,33.094C155.797,64.234,155.164,68.144,153.763,72.527z M149.562,60.307c0,3.221-0.512,6.463-1.547,9.657c-0.427,1.321-1.645,2.165-2.947,2.165c-0.305,0-0.651-0.046-0.95-0.152 c-1.644-0.53-2.558-2.28-2.009-3.928c0.815-2.569,1.242-5.176,1.242-7.742c0-9.222-5.018-17.71-13.08-22.174 c-3.8-2.095-7.94-3.16-12.227-3.16c-1.742,0-3.105-1.403-3.105-3.118c0-1.717,1.363-3.118,3.105-3.118 c5.353,0,10.497,1.321,15.241,3.958C143.327,38.228,149.562,48.807,149.562,60.307z"></path>{' '}
                                            </g>
                                        </g>
                                    </svg>
                                    <div class="h-8 w-1 bg-primary"></div>
                                </div>
                                <span class="text-2xl font-bold text-gray-900 dark:text-white">
                                    Heartland
                                </span>
                            </Link>

                            <div class="relative flex items-center lg:hidden max-h-10">
                                <label
                                    role="button"
                                    for="toggle_nav"
                                    aria-label="humburger"
                                    id="hamburger"
                                    class="relative  p-6 -mr-6"
                                >
                                    <div
                                        aria-hidden="true"
                                        id="line"
                                        class="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                                    ></div>
                                    <div
                                        aria-hidden="true"
                                        id="line2"
                                        class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                                    ></div>
                                </label>
                            </div>
                        </div>
                        <div
                            aria-hidden="true"
                            class="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
                        ></div>
                        <div
                            class="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none dark:bg-gray-800 dark:border-gray-700"
                        >
                            <div class="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                                <ul class="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                                    <li>
                                        <Link
                                            to="/about"
                                            class="block md:px-4 transition hover:text-primary"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/resources"
                                            class="block md:px-4 transition hover:text-primary"
                                        >
                                            Dates and Resources
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/meet-the-team"
                                            class="block md:px-4 transition hover:text-primary"
                                        >
                                            Meet the Team
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="mt-12 lg:mt-0">
                                <Link
                                    to="/contact"
                                    class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                >
                                    <span class="relative text-sm font-semibold text-white">
                                        Contact
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </slot>
            </nav>
        </div>
    );
}

export default Header;