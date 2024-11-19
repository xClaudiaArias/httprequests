import React, { useState, useEffect } from 'react';
import { fetchAllCountries } from '../services/api';
import SearchBar from '../components/SearchBar';
import CountryCard from '../components/CountryCard';
import Header from '../components/Header';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            const data = await fetchAllCountries();
            setCountries(data);
            setFilteredCountries(data); //initially displas all countries
        };
        getCountries();
    }, []);


    const handleSearch = (query) => {
        const results = countries.filter((country) =>
            country.name.common.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCountries(results);
    };
    return (
        <div className='home'>
            <div className='navBar'>
                <Header />
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="country-list">
                {filteredCountries.map((country) => (
                <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    )
}

export default Home