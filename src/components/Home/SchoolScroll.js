import React from 'react';
import { SCHOOL_IMAGES } from '../../assets/SCHOOL_LIST';
import Marquee from 'react-fast-marquee';

function SchoolScroll({ gray }) {
    return (
        <Marquee speed={30}>
            {SCHOOL_IMAGES.map((school) => (
                <img
                    className={
                        'font-semibold w-24 opacity-60 hover:opacity-100 text-center mx-10 grayscale brightness-100 contrast-100 hover:grayscale-0 transition-all'
                    }
                    src={school}
                    alt={'school_logo'}
                />
            ))}
        </Marquee>
    );
}

export default SchoolScroll;
