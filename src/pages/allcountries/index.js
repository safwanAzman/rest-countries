import React, { useState as UseState, useEffect as UseEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import axios from 'axios';


export default function allcountries() {
const [showData, setShowData] = UseState([])

const alldata = async () => {
    try{
        const res = await axios.get(`http://localhost:3000/api/allcountries`);
        const data = await res.data;
        setShowData(data)
    } catch (e) {
        console.log(e);
    }
};

UseEffect(() => {
    alldata()
}
,[])
return (
    <div>
        {showData.map((data, index) => 
            <div key={data.name}>
                <p className="text-sm font-semibold text-black">{data.name}</p>
                <Link className="text-blue-500" href={`/listcountries/${data.name}`}>go list countries id</Link>
            </div>
        )}
    </div>
    )
}
