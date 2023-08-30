import React from 'react';
import { Link } from 'react-router-dom';
import SchoolScroll from './SchoolScroll';

function HeroSection() {
    return (
        <div class="relative" id="home">
            {/* gradient background */}
            <div
                aria-hidden="true"
                class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 "
            >
                <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <slot>
                <div class="relative pt-28 ml-auto flex flex-col items-center">
                    <div class="lg:w-2/3 w-10/12 text-center mx-auto">
                        <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                            {/* Shaping a world with{' '} */}
                            The Heart of HOSA:{' '}
                            <span class="text-primary dark:text-white">
                                Heartland Region
                            </span>
                        </h1>
                        <p class="mt-8 text-gray-700 dark:text-gray-300">
                            Welcome to the Heart of HOSA, where ambition and
                            opportunity meet to create excellence. The Heartland
                            Region is a team of healthcare enthusiasts who are
                            on a mission to{' '}
                            <span className="font-bold text-lg decoration-[3px] underline-offset-4 underline decoration-primary">
                                push the boundaries
                            </span>{' '}
                            of healthcare education and delivery.
                        </p>
                        <div class="mt-12 flex flex-wrap justify-center gap-y-4 gap-x-6">
                            <a
                                href="#"
                                class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                                <Link
                                    to="/resources"
                                    class="relative text-base font-semibold text-white"
                                >
                                    View Resources
                                </Link>
                            </a>
                            <Link
                                to="/about"
                                class="sm:w-max relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 "
                            >
                                <span class="relative text-base font-semibold text-primary dark:text-white">
                                    Learn more about us
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-28 w-full md:w-10/12 lg:w-2/3">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.flhosa.org/resourcespublications/starting-a-chapter/"
                            className="text-[#7c828d] text-center"
                        >
                            <p className="mb-6 font-bold font-arial">
                                JOIN 30+ AMBITIOUS SCHOOLS
                            </p>
                        </a>

                        <SchoolScroll gray />
                    </div>
                </div>
            </slot>
        </div>
    );
}

export default HeroSection;
