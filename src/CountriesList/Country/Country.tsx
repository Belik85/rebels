import React from 'react';
import './Country.css'

const Country = (props: any) => {
    return <div className={'country-container'}>
        <img className={'country-img'} src={props.flag}/>
        <div className="country-info">
            <div className="country-title">
                {props.name}
            </div>
            <div className="country-details">
                <span>Population: {props.population}</span>
                <span>Region: {props.region}</span>
                <span>Capital: {props.capital}</span>
            </div>
        </div>

    </div>
}

export default Country;