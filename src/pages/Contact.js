import React, { useState } from 'react';
import remind from '../assets/images/remind.svg';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../assets/styles/gradient_text.css';

function Contact() {
    const [clicked, setClicked] = useState(false);

    const INSTAGRAM_LINK = 'https://www.instagram.com/heartlandhosa/';
    const FACEBOOK_LINK = 'https://www.facebook.com/groups/901811856856739/';
    const REMIND_LINK = 'https://www.remind.com/classes/hosahr';

    function copyText() {
        const email = 'elizabeth.hileman@polk-fl.net';
        navigator.clipboard.writeText(email);
        setClicked(true);
    }

    return (
        <div className="flex flex-col items-center w-10/12 mx-auto pb-20">
            <p className="text-purple-400 font-semibold text-[12px] mt-4">
                CONTACT
            </p>
            <h1 className="mt-6 font-bold text-4xl text-center">
                Follow our socials
            </h1>

            <div className="my-20 flex gap-14">
                <a
                    href={FACEBOOK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 text-center rounded-full bg-white shadow-xl flex items-center justify-center relative transition-all duration-300 hover:-translate-y-3 hover:bg-gradient-to-tl hover:from-[#17A7FC] hover:to-[#0166E2] hover:text-white"
                >
                    <FaFacebookF className="w-10 h-10" />
                </a>
                <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 text-center rounded-full bg-white shadow-xl flex items-center justify-center relative transition-all duration-300 hover:-translate-y-3 hover:bg-gradient-to-tl hover:to-[#ffec17] hover:from-[#ed1c94] hover:text-white"
                >
                    <FaInstagram className="w-10 h-10" />
                </a>
                <a
                    href={REMIND_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 text-center rounded-full bg-white shadow-xl flex items-center justify-center relative transition-all duration-300 hover:-translate-y-3 hover:bg-gradient-to-tl hover:from-[#17A7FC] hover:to-[#0166E2] hover:text-white"
                >
                    <img
                        src={remind}
                        className="w-10 h-10 fill-white text-white grayscale brightness-100 contrast-100"
                    />
                </a>
            </div>

            <div className="mt-4 flex flex-col items-center">
                <div class="mx-auto max-w-lg text-center">
                    <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                        Have a specific question?
                    </h2>
                </div>

                <div class="mx-auto mt-8 max-w-xl text-center">
                    Contact our regional advisor, Elizabeth Hileman, about any
                    specific questions or concerns regarding Heartland HOSA.
                    Click below to copy the email to your clipboard.
                </div>
                <div
                    onClick={copyText}
                    className="mt-6 px-16 gap-4 mx-auto py-4 flex items-center justify-center whitespace-nowrap text-center rounded-xl hover:cursor-pointer bg-white shadow-xl transition-all duration-300 hover:scale-105"
                >
                    <p>elizabeth.hileman@polk-fl.net</p>
                    {clicked && (
                        <p className="font-bold text-green-600">Copied!</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
