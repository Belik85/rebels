import React from 'react';
import {Link} from 'react-router-dom';
import './CountriesList.css'
import Country from "./Country";

const CountriesList = (props: any) => {

    return <div className="country-list-container">
        {props?.data?.map((country: any) => {
            return (
                <Link to={`${country.name.common} `}>
                    <Country key={country.name.common} name={country.name.common}  official={country.name.official}
                             capital={country.capital}  />
                </Link>
            )
        })}
    </div>
}

export default CountriesList;