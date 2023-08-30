import React from 'react';

function CTA(props) {
    return (
        <section class="w-screen mt-12 bg-gray-50 overflow-hidden relative sm:grid sm:grid-cols-2">
            {props?.left && (
                <img
                    alt="Student"
                    src={props?.image}
                    class="h-56 w-full object-cover hidden sm:block sm:h-full"
                />
            )}
            <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                <div class="mx-auto max-w-xl text-center sm:text-left">
                    <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                        {props?.title}
                    </h2>

                    <p class="text-gray-500 md:mt-4 mt-6 md:block">
                        {props?.description}
                    </p>

                    <div class="mt-6 md:mt-8">
                        <a
                            target={props?.target ? '_blank' : ''}
                            rel="noopener noreferrer"
                            href={props?.link}
                            class="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-800 focus:outline-none"
                        >
                            {/* Learn More About HOSA */}
                            {props?.button}
                        </a>
                    </div>
                </div>
            </div>
            {props?.right && (
                <img
                    alt="Student"
                    src={props?.image}
                    class="h-56 w-full object-cover hidden sm:block sm:h-full"
                />
            )}
        </section>
    );
}

export default CTA;
