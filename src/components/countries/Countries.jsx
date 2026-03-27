import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedCountries = (country) => {
        console.log("Clicked Courtry:", country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = (flag) => {
        console.log('Flag need to be addeded :>> ', flag);
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <h3 id='count-countries'>Visited Countries: {visitedCountries.length}</h3>
            <h3>Total Flag Visited: {visitedFlag.length}</h3>
            <span className='visited-flags'>
                {
                    visitedFlag.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </span>
            <ol>
                {
                    visitedCountries.map(country => <li
                        key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;