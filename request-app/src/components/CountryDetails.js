import React from 'react'
import WorldMap from './WorldMap'

const CountryDetails = ({country}) => {

    if (!country) {
        return <p>Loading...</p>
    }

    console.log(country, ' LALALA')
    return (
        <div>
            <div className='left'>
                <h1>{country.name.common}</h1>
                <img src={country.flags.png} alt={country.flags.alt} />
                <WorldMap highlightedcountry={country.cca2} />
            </div>
            <div className='right'>
                <div className="right-one">
                    <div className="infoBox">
                        <p className='label'>LAT, LONG</p>
                        <p>{country.latlng[0]}, {country.latlng[1]}</p>
                    </div>
                    <div className="infoBox">
                        <p className='label'>OFFICIAL NAME</p>
                        <p>{country.name.official}</p>
                    </div>
                    <div className="infoBox">
                        <p className='label'>COMMON NAME</p>
                        <p>{country.name.common}</p>
                    </div>
                    <div className="infoBox">
                        <p className='label'>CAPITAL</p>
                        <p>{country.capital}</p>
                    </div>
                    <div className="infoBox">
                        <p className='label'>LANGUAGES</p>
                        <ul>
                            {Object.values(country.languages).map((lg, i)=> 
                                <li key={i}>{lg}</li>
                            )}
                        </ul>
                    </div>
                    <div className="infoBox">
                        <p className='label'>UN MEMBERSHIP</p>
                        <p>{country.unMember ? "YES" : "NO"}</p>
                    </div>
                    <div className="infoBox">
                        <p className='label'>COAT OF ARMS</p>
                        {country.coatOfArms ? <img width="50" height="50" src={country.coatOfArms.png} alt={`${country.name.common}'s coat of arms`}/> : ""}
                    </div>
                </div>
                <div className="right-two">
                    <div className="infoBox">
                        <p className='label'>FLAG</p>
                        <p>{country.flag}</p>
                    </div>
                    <div className="infoBox">
                        <p className='label'>REGION</p>
                        <p>{country.region}</p>
                    </div>
                    <div className="infoBox">
                        <p className='label'>SUBREGION</p>
                        <p>{country.subregion}</p>
                    </div>
                    <div className="infoBox">
                        <p className='label'>INDEPENDENT</p>
                        <p>{country.independent ? 'Yes' : 'No'}</p>
                    </div>
                    <div className="infoBox">
                        <p className='label'>CURRENCY</p>
                        <u>{Object.keys(country.currencies).map(cur => <li>{cur}</li>)}</u>
                    </div>
                    <div className="infoBox">
                        <p className='label'>POPULATION</p>
                        <p>{country.population}</p>
                    </div>
                    <div className="infoBox">
                        <p className='label'>START OF WEEK</p>
                        <p>{country.startOfWeek}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CountryDetails