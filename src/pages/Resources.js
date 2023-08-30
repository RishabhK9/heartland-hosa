import React from 'react';

function Resources() {
    return (
        <div className="w-10/12 mx-auto flex flex-col items-center">
            <p className="text-purple-400 font-semibold text-[12px] mt-4">
                DATES / RESOURCES
            </p>

            <div class="h-full mt-12 shadow-xl bg-white lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                <div class="lg:w-1/2">
                    <img
                        className="h-64 bg-cover lg:h-full"
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                    />
                </div>

                <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <h2 class="text-2xl font-bold text-gray-800 md:text-3xl">
                        Florida{' '}
                        <span class="text-blue-500">
                            State Leadership Conference
                        </span>
                    </h2>

                    <h4 class="font-semibold mt-3">April 13th - 16th, 2023</h4>

                    <p class="mt-4 text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quidem modi reprehenderit vitae exercitationem
                        aliquid dolores ullam temporibus enim expedita aperiam
                        mollitia iure consectetur dicta tenetur, porro
                        consequuntur saepe accusantium consequatur.
                    </p>

                    <div class="inline-flex w-full mt-6 sm:w-auto">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.flhosa.org/conferences/state-leadership-conference-slc/"
                            class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-12 shadow-xl overflow-hidden bg-white lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                <div class="lg:w-1/2">
                    <img
                        className="h-64 bg-cover lg:h-full"
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                    />
                </div>

                <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <h2 class="text-2xl font-bold text-gray-800 md:text-3xl">
                        HOSA Heartland{' '}
                        <span class="text-blue-500">Regionals</span>
                    </h2>

                    <h4 class="font-semibold mt-3">February 4th, 2023</h4>

                    <p class="mt-4 text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quidem modi reprehenderit vitae exercitationem
                        aliquid dolores ullam temporibus enim expedita aperiam
                        mollitia iure consectetur dicta tenetur, porro
                        consequuntur saepe accusantium consequatur.
                    </p>

                    <div class="inline-flex w-full mt-6 sm:w-auto">
                        <div class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg">
                            Completed!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resources;
