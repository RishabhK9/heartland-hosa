import React from 'react';
import with_sign from '../assets/images/with_sign.png';
import Statistics from '../components/About/Statistics';
import higlight from '../assets/styles/highlight.css';
import trophy from '../assets/images/trophy.svg';
import books from '../assets/images/books.svg';
import increase from '../assets/images/increase.svg';

function About() {
    return (
        <div className="w-10/12 flex flex-col items-center mx-auto">
            <div className="flex flex-col items-center">
                <p className="text-purple-400 font-semibold text-[12px] mt-4">
                    ABOUT US
                </p>
                <h1 className="mt-6 font-bold font-besley text-4xl text-center">
                    Heartland is a HOSA Florida region that brings excellence to{' '}
                    <span className="underline decoration-4 decoration-primary">
                        future health professionals
                    </span>
                    .
                </h1>
                <img
                    className="mt-12"
                    src={with_sign}
                    alt="Students stand with HOSA sign"
                />
            </div>
            <Statistics />
            <div className="flex flex-col px-12 md:px-24 py-24 mt-24 w-full items-center rounded-[50px] bg-gradient-to-b from-[#f5f0f7] bg-[#f6edfa] ">
                <h2 className="font-bold text-5xl">Our Goals</h2>
                <div className="mt-12 gap-8 flex lg:flex-row flex-col justify-between items-center">
                    <div className="flex flex-col items-center w-80 md:w-9/12">
                        <img src={trophy} alt="" className="h-24 mb-4" />
                        <h2 className="font-semibold text-2xl">
                            Student Development
                        </h2>
                        <p className="text-center mt-4">
                            We provide opportunities for members to develop
                            their leadership skills and knowledge in
                            healthcare-related fields.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-80 md:w-9/12">
                        <img src={books} alt="" className="h-24 mb-4" />
                        <h2 className="font-semibold text-2xl">
                            Competitive Event Success
                        </h2>
                        <p className="text-center mt-4">
                            By providing resources and expertise, we strive to
                            ensure our members perform well in HOSA's
                            competitive events, including the regional, state,
                            and national levels.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-80 md:w-9/12">
                        <img src={increase} alt="" className="h-24 mb-4" />
                        <h2 className="font-semibold text-2xl">
                            Membership Growth
                        </h2>
                        <p className="text-center mt-4">
                            We aim to increase our membership numbers in order
                            to maximize networking opportunities, as well as our
                            support to HOSA's activities and events.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
