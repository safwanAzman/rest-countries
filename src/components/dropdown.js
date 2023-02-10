
import React,{useState} from 'react';

const Dropdown =  ({onClick,value,regions}) => {
    const [show, setShow] = useState(false);
    const[items, setItems] = useState('Filter by Region')
    return (
        <div className="relative w-52">
            <button 
                className="w-full bg-white  shadow-3xl sm:text-sm px-6 py-6 rounded-xl myFontMedium dark:bg-dark-element flex items-center justify-between"
                onClick={() => setShow(!show)}
            >
                {items}

                {show == true ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                }       

            </button>
        
            {/* hide show after click button */}
            <div className={`z-10 ${show ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg  w-52 absolute mt-1 shadow-3xl dark:bg-dark-element`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li 
                        onClick={() => {
                            setShow(false)
                            setItems('All')
                            onClick({ target: { value: 'All' } });
                        }} 
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                        All
                    </li>
                    {regions.map((region, index) => (
                    <li 
                        key={region} 
                        onClick={() => {
                            setShow(false)
                            setItems(region)
                            onClick({ target: { value: region } });
                        }} 
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                        {region}
                    </li>
                    ))}
                </ul>
            </div>
    </div>
    
    );
}

export default Dropdown