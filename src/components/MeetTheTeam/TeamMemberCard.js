import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function TeamMemberCard({
    fullName,
    image,
    title,
    description,
    instagramLink,
}) {
    return (
        <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent text-gray-500 hover:text-white group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                    class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src={image}
                    alt=""
                />

                <div class="mt-4 sm:mx-4 sm:mt-0">
                    <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                        {fullName}
                    </h1>

                    <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                        {title}
                    </p>
                </div>
            </div>

            <p class="mt-4">{description}</p>

            <div class="flex mt-4 items-center justify-start">
                <a
                    href={instagramLink}
                    class="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="w-8 h-8" />
                </a>
            </div>
        </div>
    );
}

export default TeamMemberCard;
