import React from 'react';

function Goals() {
    return (
        <section className="mt-4">
            <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div class="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
                        <div class="mx-auto max-w-xl text-center">
                            <h2 class="text-2xl font-bold text-white md:text-3xl">
                                Stay Informed with our Newsletter!
                            </h2>

                            <p class="text-white/90 mt-8 sm:mt-4 sm:block">
                                As a subscriber, you'll receive regular updates
                                on upcoming events, conference information, and
                                other news relevant to HOSA and our region.
                                Don't miss out on updates on opportunities for
                                scholarships, awards, and other ways to further
                                your education and career in the healthcare
                                field!
                            </p>
                            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <input
                                    className="rounded-2xl py-3 px-6 w-80 text-lg focus:outline-none border-none"
                                    placeholder="johndoe@example.com"
                                />
                                <button className="bg-white rounded-2xl py-3 px-6 focus:outline-none border-none transition hover:scale-110">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img
                            alt="Heart"
                            src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                            class="h-40 w-full object-cover sm:h-56 md:h-full"
                        />

                        <img
                            alt="Syringe"
                            src="https://images.unsplash.com/photo-1606619353143-8e11b4bdf76b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                            class="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Goals;
