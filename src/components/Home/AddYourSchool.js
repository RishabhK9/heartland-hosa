import React from 'react';

function AddYourSchool() {
    return (
        <section class="mt-4f overflow-hidden grid grid-cols-1">
            <img
                src="https://images.unsplash.com/photo-1611941671018-6c3907cb7a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2140&q=80"
                class=" w-full row-start-1 col-start-1 -scale-x-100"
            />
            <div className="bg-gradient-to-r w-full row-start-1 col-start-1 from-black to-black sm:to-transparent opacity-50 sm:opacity-70" />
            <div class="absolute z-10 row-start-1 col-start-1 p-8 md:p-12 lg:px-16 lg:py-24">
                <div class="max-w-lg text-center sm:text-left">
                    <h2 class="text-3xl mt-8 sm:mt-20 font-bold text-white sm:text-3xl md:text-5xl">
                        Ready to add your school to{' '}
                        <span className="text-pink-400">Heartland</span>?
                    </h2>

                    <p class="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                        If you're passionate about the health care field and
                        have a school in our region, click the button below to
                        register a chapter!
                    </p>
                </div>
                <div class="mt-4 sm:mt-8 flex justify-center items-center sm:justify-start">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.flhosa.org/resourcespublications/starting-a-chapter/"
                        class="inline-flex items-center rounded-full bg-primary px-8 py-3 text-white shadow-lg transition hover:bg-purple-800 focus:outline-none focus:ring"
                    >
                        <span class="text-sm font-medium">Start a Chapter</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AddYourSchool;
