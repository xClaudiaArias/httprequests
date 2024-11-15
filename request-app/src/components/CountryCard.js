import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({country}) => {
    return (
        <Link to={`/country/${country.cca3}`}>
            <div className="country-card">
                <img src={country.flags.png} alt={country.flags.alt}></img>
                <h3>{country.name.common}</h3>
                <h4>{country.region} <span>({country.subregion})</span></h4>
                {/* TODO: structure the country card with country.common.name, country.flag, etc.... */}
            </div>
        </Link>
    )
}

export default CountryCard