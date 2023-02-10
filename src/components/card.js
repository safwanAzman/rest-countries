
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from "framer-motion";

const Card =  ({src,href ,flagTitle ,flagRegion,flagPopulation,flagCapital}) => {
    return (
        <div
          
            className="bg-white dark:bg-dark-element shadow-3xl rounded-lg cursor-pointer  transition hover:scale-110"
        >
        <Link href={href} >
            <div>
            <Image
                src={src}
                alt="Flag"
                width={1000}
                height={1000}
                priority
                className='object-cover h-[10rem] w-96 rounded-t-lg'
            />
            </div>
            <div className="py-10 px-4 space-y-4 ">
                <h1 
                initial={{opacity: 0, x:0}}
                animate={{opacity: 1, x:0}}
                transition={{duration:  0.5, ease: "easeInOut",delay:1}}
                className="font-bold text-xl pb-2 myFontBold">
                    {flagTitle}
                </h1>
                <div>
                    <h6 className="text-base myFontRegular"><span className="font-bold myFontMedium">Population:</span> {flagPopulation.toLocaleString()}</h6>
                    <h6 className="text-base myFontRegular"><span className="font-bold myFontMedium">Region:</span> {flagRegion}</h6>
                    <h6 className="text-base myFontRegular"><span className="font-bold myFontMedium">Capital:</span>{flagCapital}</h6>
                </div>
            </div>
        </Link>
        </div>
    );
}

export default Card