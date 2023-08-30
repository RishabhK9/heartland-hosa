import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="bg-white">
            <div class="max-w-screen-xl px-4 pb-8 mx-auto sm:px-6 lg:px-8">
                <div class="pt-8 mt-16 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-12">
                    <nav aria-label="Footer Navigation - Support">
                        <ul class="flex items-center flex-col justify-center gap-4 text-xs lg:justify-end">
                            <Link
                                to="/"
                                aria-labels="logo"
                                class="flex space-x-2 items-center"
                            >
                                <div aria-hidden="true" class="flex space-x-1">
                                    <svg
                                        fill="#9333E9"
                                        version="1.1"
                                        id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="2rem"
                                        viewBox="0 0 168.27 168.27"
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
                            <div className="flex items-center gap-4">
                                <Link
                                    to="/about"
                                    class="text-gray-500 transition hover:opacity-75"
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/resources"
                                    class="text-gray-500 transition hover:opacity-75"
                                >
                                    Resources & Dates
                                </Link>
                                <Link
                                    to="/contact"
                                    class="text-gray-500 transition hover:opacity-75"
                                >
                                    Contact
                                </Link>
                            </div>
                        </ul>
                    </nav>

                    <ul class="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
                        <p className="text-black">
                            Made with ❤ by&nbsp;
                            <a
                                href="https://github.com/armans-code"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-pink-500 underline`}
                            >
                                Rishabh
                            </a>
                        </p>
                        <li>
                            <a
                                href="https://github.com/armans-code/heartland-hosa"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <svg viewBox="0 0 32 32" class="w-6 h-6">
                                    <path d="M16,0C7.2,0,0,7.2,0,16       c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C32,7.2,24.8,0,16,0z M20,29.7c0-0.1,0-0.2,0-0.3c0-0.5,0-2.3,0-4.4       c0-1.5-0.5-2.5-1.1-3c3.6-0.4,7.3-1.8,7.3-7.9c0-1.7-0.6-3.2-1.6-4.3c0.2-0.4,0.7-2-0.2-4.2c0,0-1.3-0.4-4.4,1.6       c-1.3-0.4-2.6-0.5-4-0.5c-1.4,0-2.7,0.2-4,0.5C8.9,5.2,7.6,5.6,7.6,5.6C6.7,7.8,7.3,9.5,7.4,9.9c-1,1.1-1.6,2.5-1.6,4.3       c0,6.1,3.7,7.5,7.3,7.9c-0.5,0.4-0.9,1.1-1,2.1c-0.9,0.4-3.2,1.1-4.7-1.3c0,0-0.8-1.5-2.5-1.6c0,0-1.6,0-0.1,1       c0,0,1,0.5,1.8,2.3c0,0,0.9,3.1,5.4,2.1c0,1.3,0,2.3,0,2.7c0,0.1,0,0.2,0,0.2C6.2,27.9,2,22.6,2,16.3c0-7.7,6.3-14,14-14       c7.7,0,14,6.3,14,14C30,22.6,25.8,27.9,20,29.7z" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/arman-kumaraswamy-80bba5244/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <svg viewBox="0 0 67 67" class="w-6 h-6">
                                    <path d="M49.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H49.837z M21.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H21.959z M33,64  C16.432,64,3,50.568,3,34C3,17.431,16.432,4,33,4s30,13.431,30,30C63,50.568,49.568,64,33,64z M25.354,48.137V27.71h-6.789v20.427  H25.354z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
