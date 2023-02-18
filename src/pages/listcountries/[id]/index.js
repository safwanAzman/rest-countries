import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import callapi from '@/helper/axios';
import BackBtn from '@/components/backbtn';
import Loading from '@/components/loading';
import {motion} from "framer-motion";
import 'animate.css';

export const getServerSideProps = async ({ query }) => {
    const res = await callapi.get(`/listcountries/${query.id}`);
    const data = await res.data;
        return {
        props: {
            data
        }
    };
};

const ListCountries = ({ data }) => {
    const [border, setBorder] = useState(data.borders)
    const [borderName, setBorderName] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getBorderName = async () => {
            try {
                const res = await callapi.get('/filtercountries');
                const data = await res.data;
                const filteredData = data.filter(d => border.includes(d.alpha3Code));
                setBorderName(filteredData);
            } catch (e) {
                console.error(e);
            }
        }
        getBorderName();
    }, [border]);

    return (
        <div>
        {loading ? (
            <Loading/>
        ) : (
            <>
            <div className="grid grid-cols-12 gap-6 py-10 lg:py-20 z-0">
                <div className="col-span-12">
                    <BackBtn href='/'/>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-start">
                <div className="dark:bg-dark-element p-2 rounded-lg bg-white animate__animated animate__slideInLeft animate__delay-0.9s">
                    <Image
                        src={data.flag}
                        alt="Flag"
                        width={1000}
                        height={1000}
                        priority
                        className='object-cover w-full h-auto xl:h-96 '
                    />
                </div>
                <div className="px-3  animate__animated animate__slideInLeft">
                    <h1 className="myFontBold text-4xl xl:text-5xl">{data.name}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                        <div className="space-y-6 text-lg">
                            <h6 className="myFontMedium">Native Name : <span className="myFontLight">{data.name}</span></h6>
                            <h6 className="myFontMedium">Population : <span className="myFontLight">{data.population.toLocaleString()}</span></h6>
                            <h6 className="myFontMedium">Region : <span className="myFontLight">{data.region}</span></h6>
                            <h6 className="myFontMedium">Sub Region : <span className="myFontLight">{data.subregion}</span></h6>
                            <h6 className="myFontMedium">Capital : <span className="myFontLight">{data.capital}</span></h6>
                        </div>
                        <div className="space-y-6 text-lg">
                            <h6 className="myFontMedium">Top Level Domain : <span className="myFontLight">{data.topLevelDomain}</span></h6>
                            <h6 className="myFontMedium">Currencies : <span className="myFontLight">{data.currencies[0].code}</span></h6>
                            <h6 className="myFontMedium">Languages : <span className="myFontLight">{data.languages[0].name}</span></h6>
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-20">
                        <h6 className="myFontMedium mr-4">Border Countries :</h6>
                        {borderName.length ?
                            borderName.map((item, index) => 
                                <Link 
                                    onClick = {()=> {
                                        setLoading(true);
                                        setTimeout(() => {
                                            window.location.reload();
                                        }, 1000);
                                    }}
                                    href={`/listcountries/${item.alpha3Code}`}
                                    key={index} className="bg-white px-6 py-[0.28rem] shadow-3xl flext items-center dark:bg-dark-element mb-2 mr-2 rounded-sm hover:scale-105 animate__animated animate__slideInUp " >
                                    <motion.h1 
                                        initial={{opacity: 0, y:-50}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5, ease: "easeInOut" ,delay:0.5}}
                                        className="myFontLight text-sm">
                                        {item.name}
                                    </motion.h1>
                                </Link>
                            )
                            : <p className="px-4 myFontRegular">No border countries found...</p>
                        }
                    </div>
                </div>
            </div>
            </>
            )}
        </div>
    );
}



export default ListCountries;