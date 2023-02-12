
import React from 'react';
import Link from 'next/link';

const BackBtn =  ({href}) => {
    return (
        <Link 
            className="inline-flex items-center rounded-lg bg-white shadow-3xl dark:bg-dark-element px-10 py-4 focus:outline-none transition hover:scale-105"
            href={href}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span className="text-lg font-medium myFontRegular"> 
                Back
            </span>
        </Link>
    );
}

export default BackBtn