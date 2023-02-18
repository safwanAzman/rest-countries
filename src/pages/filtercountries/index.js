import React, { 
    useState, 
    useEffect
} from 'react';
import Card from '@/components/card';
import callapi from '@/helper/axios';
import Input from '@/components/input';
import Dropdown from '@/components/dropdown';
import Loading from '@/components/loading';

const AllCountries = () => {
    const [allData, setAllData] = useState([]);
    const [showData, setShowData] = useState([]);
    const [filter, setFilter] = useState({name: '', region: 'All',});
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const res = await callapi.get('/filtercountries');
                const data = await res.data;
                setAllData(data);
                setShowData(data);
                setRegions(Array.from(new Set(data.map(d => d.region))));
                setLoading(false);
            } catch (e) {
                console.error(e);
                setLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        setShowData(allData.filter(data => (
            (filter.name ? data.name.toLowerCase().includes(filter.name.toLowerCase()) : true) &&
            (filter.region === 'All' ? true : data.region === filter.region)
        )));
    }, [filter, allData]);

    const handleFilterChange = (type, e) => {
        setFilter({
            ...filter,
            [type]: e.target.value,
        });
    };

    return (
        <div>
            {loading ? (
                <Loading/>
            ) : (
            <div>
                <div className="grid grid-cols-12 gap-6 py-10 lg:py-20 z-0">
                    <div className="col-span-12 lg:col-span-4">
                        <Input 
                            onChange={e => handleFilterChange('name', e)} 
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className="flex justify-start lg:justify-end">
                            <Dropdown
                                regions={regions}
                                onClick={e => handleFilterChange('region', e)}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
                    {showData.length > 0 ?
                        showData.map((data, index) => 
                        <Card
                            key={data.name}
                            src={data.flag}
                            href={`/listcountries/${data.alpha3Code}`}
                            flagTitle={data.name}
                            flagPopulation={data.population}
                            flagRegion={data.region}
                            flagCapital={data.capital}
                        />
                        )
                        : <p className="px-4 myFontRegular">No countries found...</p>
                    }
                </div>
            </div>
            )}
        </div>
    );
};
export default AllCountries