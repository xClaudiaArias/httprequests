import React, { useState, useEffect } from 'react';
import { fetchAllCountries } from '../services/api';
import SearchBar from '../components/SearchBar';
import CountryCard from '../components/CountryCard';


const Home = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            const data = await fetchAllCountries();
            setCountries(data);
            console.log(data, ' ->data')
            setFilteredCountries(data); //initially displas all countries
        };
        getCountries();
    }, []);


    const handleSearch = (query) => {
        const results = countries.filter((country) =>
            country.name.common.toLowerCase().includes(query.toLowerCase())
        );
        console.log(results, ' -> results')
        setFilteredCountries(results);
    };
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="country-list">
                {filteredCountries.map((country) => (
                <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    )
}

export default Home