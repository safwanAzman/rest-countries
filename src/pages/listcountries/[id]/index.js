import React from 'react'
import axios from 'axios';
import Image from 'next/image'

function listcountries({data}) {
    return (
        <div>
        <Image
            src={data.flag}
            alt="13"
            width={500}
            height={500}
            priority
        />
        
        </div>
    )
}


export const getServerSideProps = async ({ query }) => {
    const res = await axios.get(`http://localhost:3000/api/listcountries/${query.id}`);
    const data = await res.data;
    return {
        props: {
            data,
        },
    };
    };

export default listcountries