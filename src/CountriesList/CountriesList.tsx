import React from 'react';
import {Link} from 'react-router-dom';
import './CountriesList.css'
import Country from "./Country/Country";

const CountriesList = (props: any) => {

    return <div className="country-list-container">
        {props?.data?.map((country: any) => {
            return (
                <Link key={country.name.common} to={`${country.name.common} `}>
                    <Country name={country.name.common}
                             flag={country.flags.png}
                             population={country.population}
                             capital={country.capital}
                             region={country.region}/>
                </Link>
            )
        })}
    </div>
}

export default CountriesList


// key={country.name.common}