
import React from 'react';

const Input =  ({onChange}) => {
    return (
        <div className="relative">
            <span
                className="pointer-events-none absolute inset-y-0 left-4 grid w-10 place-content-center text-gray-500"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </span>
            <input
                onChange={onChange}
                placeholder="Search for a country..."
                className="w-full  border-gray-200  shadow-3xl sm:text-sm pl-16 py-6  rounded-xl myFontMedium dark:bg-dark-element"
            />

        </div>
    );
}

export default Input