import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CountryDetails from '../components/CountryDetails'
import { fetchCountryByCca3 } from '../services/api'
import Header from '../components/Header'

const CountryDetail = () => {
    let {cca3}  = useParams()
    let [country, setCountry] = useState()

    useEffect(() => {
        const getCountry = async () => {
            const data = await fetchCountryByCca3(cca3)
            if (data && data.length > 0){
                setCountry(data[0])
            }
        };
        getCountry()
    }, [cca3])

    return (
        <div className="countryDetail">
            <div className="navBar">
                <Header />
            </div>
            <CountryDetails country={country} />
        </div>
    )
}

export default CountryDetail