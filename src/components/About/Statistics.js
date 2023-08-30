import React from 'react';

function Statistics() {
    return (
        <div className="flex-col lg:flex-row flex items-center justify-between gap-12 mt-12 lg:px-32">
            <div className="flex flex-col sm:w-7/12 gap-8">
                <h2 className="font-bold font-besley text-3xl">
                    We bring talented and ambitious stars together
                </h2>
                <p>
                    Since Heartland was founded in 2021, we have brought
                    together students from different schools within Florida,
                    providing them with the opportunity to collaborate with one
                    another. Through our virtual and in-person programs and
                    events, students get to learn from and be inspired by their
                    peers, regardless of where they attend school.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <div class="border flex flex-col">
                    <div class="py-6 px-20 border-b flex flex-col items-center">
                        <h3 class="font-besley text-xl font-bold">Over 31</h3>
                        <p>schools statewide</p>
                    </div>
                    <div class="py-6 px-16 border-b flex flex-col items-center">
                        <h3 class="font-besley text-xl font-bold">Over 930</h3>
                        <p class="info-stat-text">HOSA students</p>
                    </div>
                    <div class="py-6 px-16 flex flex-col items-center">
                        <h3 class="font-besley text-xl font-bold">Over 6</h3>
                        <p class="info-stat-text">school districts</p>
                    </div>
                </div>
                <div className="mt-4 text-xl font-besley font-semibold highlight-container before:bg-purple-200">
                    <h2 className="highlight">And counting... </h2>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
